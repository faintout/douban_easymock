<template>
  <movie-list></movie-list>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  created () {
    this.getList('top250')
    // console.log()
  },
  methods: {
    ...mapActions(['getList'])
  }
}
</script>

<style lang="less" scoped>
</style>
