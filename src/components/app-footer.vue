<template>
  <div class="my-footer">
    <ul>
      <router-link to="/hot" tag="li">
        <a>
          <span class="iconfont icon-remen"></span>
          <p>正在热映</p>
        </a>
      </router-link>

      <router-link to="/movie" tag="li">
        <a>
          <span class="iconfont icon-remen"></span>
          <p>即将上映</p>
        </a>
      </router-link>

      <router-link to="/top" tag="li">
        <a>
          <span class="iconfont icon-remen"></span>
          <p>Top250</p>
        </a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
</style>
