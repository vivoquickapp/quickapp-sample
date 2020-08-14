Page({
  onLoad() {
    this.videoContextInLoad = qa.createVideoContext('myVideo', this)
  },
  onReady() {
    this.videoContext = qa.createVideoContext('myVideo')
  },
  data: {
    controlVal: {
      src:
        'https://shopstatic.vivo.com.cn/vivoshop/commodity/44/159158198202724628.mp4',
      controls: true,
      autoplay: false,
      objectFit: 'contain',
      poster: '../../resources/cat.jpg'
    },
    play: 'false',
    pause: 'false',
    ended: 'false',
    timeupdate: '0',
    fullscreenchange: 'false',
    error: '',
  },
  bindplay(e) {
    this.setData({
      play: 'true'
    })
  },
  bindpause(e) {
    this.setData({
      pause: 'true'
    })
  },
  bindended(e) {
    this.setData({
      ended: 'true'
    })
  },
  bindtimeupdate(e) {
    this.setData({
      timeupdate: `${e.detail.currentTime}`
    })
  },
  bindfullscreenchange(e) {
    this.setData({
      fullscreenchange: 'true'
    })
  },
  binderror(e) {
    this.setData({
      error: e.detail.errMsg
    })
  },
  controlsChange(e) {
    this.setData({
      ['controlVal.controls']: e.detail.value === 'true'
    })
  },
  autoplayChange(e) {
    this.setData({
      ['controlVal.autoplay']: e.detail.value === 'true'
    })
  },
  objectfitChange(e) {
    let result = e.detail.value
    this.setData({
      ['controlVal.objectFit']: result
    })
  },
  posterChange(e) {
    let result = e.detail.value
    this.setData({
      ['controlVal.poster']: result
    })
  },
  triggerPlay() {
    this.videoContext.play()
  },
  onPlayBtnClick() {
    if (this.videoContextInLoad.play) {
      this.videoContextInLoad.play()
    } else {
      qa.showModal({
        title: '!提示',
        content: '未能获得实例，不能正常播放',
        success() {}
      })
    }
  }
})
