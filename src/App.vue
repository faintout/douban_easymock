<template>
  <div id="app">
    <Header></Header>
    <div class="wrapper">
    <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/app-header'
import Footer from '@/components/app-footer'
export default {
  name: 'app',
  components: {
    Header, Footer
  }
}
</script>

<style lang="less">

</style>
