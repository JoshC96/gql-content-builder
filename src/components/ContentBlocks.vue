<template>
    <div :key="block.id" v-for="block in blocks" class="content-block-wrap">
        <v-switch :case="block.typeHandle">
            <template #text>
                <TextBlock :block="block" />
            </template>

            <template #twoColumnLayout>
                Two Column Layout
            </template>

            <template #jobListing>
                Job Listing
            </template>

            <template #default>
                Default
            </template>
        </v-switch>
    </div>
</template>

<script>
import VSwitch from '@lmiller1990/v-switch';
import ApiClient from '../ApiClient/ApiClient.js'
import TextBlock from "../components/blocks/TextBlock.vue";

export default {
    name: 'ContentBlocks',
    components: {
        VSwitch,
        TextBlock
    },
    data() {
        return {
            blocks: [],
        }
    },
    methods: {
        async fetchBlocks(id) {
            const api = new ApiClient();
            const query = "\r\nquery($page_id:[QueryArgument]){\r\n  entries(section: \"pages\", id: $page_id, orderBy: \"dateCreated DESC\") {\r\n    id\r\n    title\r\n    dateCreated @formatDateTime(format: \"Y-m-d\")\r\n    ... on pages_pages_Entry {\r\n      contentBuilder {\r\n        ... on contentBuilder_text_BlockType {\r\n          typeHandle\r\n          richText\r\n          backgroundColour\r\n        }\r\n        ... on contentBuilder_twoColumnLayout_BlockType {\r\n          typeHandle\r\n          width\r\n          backgroundColour\r\n          row {\r\n            ... on row_BlockType {\r\n              column1 {\r\n                ... on column1_text_BlockType {\r\n                  typeHandle\r\n                  textContent\r\n                }\r\n                ... on column1_image_BlockType {\r\n                  typeHandle\r\n                  file {\r\n                    title\r\n                    url\r\n                    filename\r\n                    focalPoint\r\n                  }\r\n                }\r\n                ... on column1_contactForm_BlockType {\r\n                  typeHandle\r\n                  header\r\n                  form {\r\n                    formTemplate\r\n                  }\r\n                }\r\n              }\r\n              column2 {\r\n                ... on column2_text_BlockType {\r\n                  typeHandle\r\n                  textContent\r\n                }\r\n                ... on column2_image_BlockType {\r\n                  typeHandle\r\n                  file {\r\n                    title\r\n                    url\r\n                    filename\r\n                    focalPoint\r\n                  }\r\n                }\r\n                ... on column2_contactForm_BlockType {\r\n                  typeHandle\r\n                  header\r\n                  form {\r\n                    formTemplate\r\n                  }\r\n                }\r\n              }\r\n            }\r\n          }\r\n        }\r\n        ... on contentBuilder_suburbListing_BlockType {\r\n          typeHandle\r\n          suburbs {\r\n            title\r\n            ... on suburb_Category {\r\n              defaultPageImage {\r\n                url\r\n                filename\r\n                title\r\n                focalPoint\r\n              }\r\n            }\r\n          }\r\n        }\r\n        ... on contentBuilder_gridListing_BlockType {\r\n          typeHandle\r\n          heading\r\n          listingType\r\n          backgroundColour\r\n          limit\r\n          displayOrder\r\n        }\r\n        ... on contentBuilder_jobListing_BlockType {\r\n          typeHandle\r\n          suburb {\r\n            title\r\n            ... on suburb_Category {\r\n              defaultPageImage {\r\n                url\r\n                filename\r\n                focalPoint\r\n                title\r\n              }\r\n            }\r\n          }\r\n        }\r\n        ... on contentBuilder_quoteSlider_BlockType {\r\n          typeHandle\r\n          heading\r\n          quote {\r\n            ... on quote_BlockType {\r\n              quoteText\r\n              author\r\n              date\r\n            }\r\n          }\r\n          backgroundColour\r\n          backgroundImage {\r\n            url\r\n            filename\r\n            focalPoint\r\n            title\r\n          }\r\n        }\r\n        ... on contentBuilder_contactForm_BlockType {\r\n          typeHandle\r\n          heading\r\n          backgroundColour\r\n          freeform {\r\n            formTemplate\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}";
            const variables = {
                page_id: id
            };
            const page_data = await api.postGraphQL(query, variables);
            return page_data.data.entries[0].contentBuilder;
        },
    },
    async created() {
        this.blocks = await this.fetchBlocks(this.$.vnode.key)
    }
}
</script>