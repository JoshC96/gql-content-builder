<template>
  <div class="page">
    <h1>This is page {{ pageid }}</h1>
    <ContentBlocks :key="pageid"  />
  </div>
</template>

<script>
import ContentBlocks from '../components/ContentBlocks.vue'

export default {
  name: 'PageView',
  components: {
    ContentBlocks
  },
  props: {
    pageid: String
  },
}
</script>
