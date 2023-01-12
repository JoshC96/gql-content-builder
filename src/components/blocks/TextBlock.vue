<template>
    <div class="container-fluid py-5 bg-{{ block.backgroundColour }}">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2" v-html="block.richText" ></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TextBlock',
    props: {
        block: Object
    }
}
</script>