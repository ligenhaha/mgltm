<template>
  <div id="app" class="app-container">
    <m-header></m-header>
    <tabbar></tabbar>
    <keep-alive>
      <transition>
        <router-view></router-view>
      </transition>
    </keep-alive>
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

    .v-enter
      opacity: 0
      transform: translateX(100%)
    .v-leave-to
      opacity: 0
      transform: translateX(-100%)
      position absolute

    .v-enter-active
    .v-leave-active
      transition: all 0.5s ease
</style>
