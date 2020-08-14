Page({
  data: {
    background: ['sample-text-1', 'sample-text-2', 'sample-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    circular: false,
    showSwiper: false
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  circularChange() {
    this.setData({
      circular: !this.data.circular
    })
  },
  bindchangeFuc(e) {
    console.log(e)
  },
  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  changeSwiperClick() {
    const newData = this.data.background.concat(['sample-text-4'])
    this.setData({
      showSwiper: !this.data.showSwiper,
      background: newData
    })

  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
