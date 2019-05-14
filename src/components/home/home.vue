<template>
  <div class="recommend">
    <scroll ref="scroll" class="recommend-content" :data="songList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper">
          <slider>
            <div v-for="(item,index) in recommends" :key="index">
              <a :href="item.linkUrl">
                <img @load="loadImage" :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门</h1>
          <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-6 "
                @click="selectItem(index)" v-for="(item,index) in songList" :key="index">
              <a>
                <img class="mui-media-object" v-lazy="item.image">
                <div class="list-title" v-html="item.name"></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getHome} from 'api/home'
  import {ERR_OK} from 'api/config'
  import Slider from 'base/slider/slider'
  import Scroll from 'base/scroll/scroll'
  import {getSingerDetail} from 'api/singer'
  import {createSong, isValidMusic, processSongsUrl} from 'common/js/song'
  import {mapActions} from 'vuex'

  export default {
    data() {
      return {
        recommends: [],
        songList: []
      }
    },
    created() {
      this._getHome()
      this._getDetail()
    },
    methods: {
      selectItem(index) {
        this.selectPlay({
          list: this.songList,
          index
        })
      },
      _getHome() {
        getHome().then((res) => {
          if (res.code === ERR_OK) {
            // console.log(res.data.slider)
            this.recommends = res.data.slider
          }
        })
      },
      _getDetail() {
        const singerid = '0020PeOh4ZaCw1'
        getSingerDetail(singerid).then((res) => {
          if (res.code === ERR_OK) {
            processSongsUrl(this._normalizeSongs(res.data.list)).then((songs) => {
              this.songList = songs
              console.log(songs)
            })
          }
        })
      },
      _normalizeSongs(list) {
        let ret = []
        list.forEach((item) => {
          let {musicData} = item
          if (isValidMusic(musicData)) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      },
      loadImage() {
        if (!this.checkLoaded) {
          this.$refs.scroll.refresh()
          this.checkLoaded = false
        }
      },
      ...mapActions([
        'selectPlay'
      ])
    },
    components: {
      Slider,
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 40px
    bottom: 0

    .recommend-content
      height: 100%
      overflow: hidden

      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden

      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme

        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px

          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px

          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium

            .name
              margin-bottom: 10px
              color: $color-text

            .desc
              color: $color-text-d

      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
