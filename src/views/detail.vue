<template>
  <div class="item">
    <img
      :src="detail.img"
      alt
    />
    <div>
      <p>豆瓣评分：{{detail.average}}</p>
      <p>产地：{{detail.up_date[0]}}</p>
      <p>
        <template v-for="genre in detail.genre" >
        <span :key="genre">{{genre}}&nbsp;</span>
      </template>
      </p>
      <p>演员：
        <template v-for="starr in detail.starring" >
        <span :key="starr">{{starr}}、</span>
      </template>
      </p>

      <p>
        <!-- <span class="tag" v-for='item in detail.genres' :key='item'>{{item}}</span> -->
      </p>
      <p>{{ detail.summary}}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['detail'])
  },
  methods: {
    ...mapActions(['getDetail'])
  },
  created () {
    console.log(this)
    // console.log(this.$route.params.id)
    this.getDetail(this.$route.params.id)
  }
}
</script>

<style lang="less" scoped>
</style>
