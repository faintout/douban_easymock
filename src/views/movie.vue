<template>
    <movie-list></movie-list>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  created () {
    this.getList('coming_soon')
    // console.log()
  },
  methods: {
    ...mapActions(['getList'])
  }
}
</script>

<style lang="less" scoped>
</style>
