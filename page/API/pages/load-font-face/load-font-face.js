Page({
  data: {
    fontFamily: 'Bitstream Vera Serif Bold',
    loaded: false
  },

  onLoad() {
    this.setData({
      loaded: false
    })
  },

  loadFontFace() {
    const self = this
    qa.loadFontFace({
      family: this.data.fontFamily,
      source: 'url("https://sungd.github.io/Pacifico.ttf")',
      success(res) {
        self.setData({ loaded: true })
      },
      fail(res) {
        console.log(res.status)
      },
      complete(res) {
        console.log(res.status)
      }
    })
  },

  clear() {
    this.setData({ loaded: false })
  }
})
