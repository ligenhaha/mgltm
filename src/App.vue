<template>
  <div id="app" class="app-container">
    <m-header></m-header>
    <tabbar></tabbar>
    <router-view></router-view>
    <player></player>
  </div>
</template>

<script>
  import MHeader from 'components/m-header/m-header'
  import Tabbar from 'components/tabbar/tabbar'
  import Player from 'components/player/player'
  export default {
    components: {
      MHeader,
      Tabbar,
      Player
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  #app
    padding-top: 40px
    overflow-x: hidden
    color: $color-theme
</style>
