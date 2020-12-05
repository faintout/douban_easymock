<template>
    <div class="my-header">
       <!-- <span>{{ $store.state.title }}</span> -->
        <span>{{ title }}</span>
      </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['title'])
  }
}
</script>

<style lang="less" scoped>
</style>
