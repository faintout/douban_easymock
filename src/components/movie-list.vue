<template>
  <ul class="list">
    <li v-for="item in list" :key="item.id">
      <router-link :to='`/detail/${item.id}`'>
        <img
          :src="`${item.img}`"
        />
        <div class="info">
          <h3 v-if="typeof(item.title)=='object'">{{item.title[0]}}</h3>
          <h3 v-else>{{item.title}}</h3>
          <p v-if="item.average">豆瓣评分：{{ item.average }}</p>
          <p v-if="item.score">豆瓣评分：{{ item.score }}</p>
          <p v-if="item.up_date">上映日期：{{ item.up_date }}</p>
          <p>
            <span v-if="item.region">{{ item.region }}</span>&nbsp;
            <span v-if="item.year">{{item.year}}</span>
          <span v-if="item.see">{{ item.see }}</span>
          </p>
          <p v-if="item.plot">
            <!-- <span class="tag" v-for='tag in item.genres' :key="tag">{{tag}}</span> -->
            <!-- <span>{{item.title[1]}}</span>
            <span>{{item.title[2]}}</span> -->
            <span v-if="item.plot">{{item.plot}}</span>
            <!-- <span v-if="item.quote">{{item.quote}}</span> -->
            <!-- <span v-if="item.category">{{item.category}}</span> -->
          </p>
          <p v-if="item.category">{{ item.category }}</p>
          <p v-if="item.quote">{{ item.quote }}</p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['list'])
  }
}
</script>

<style lang="less" scoped>
</style>
