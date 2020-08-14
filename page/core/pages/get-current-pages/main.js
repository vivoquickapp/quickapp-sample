Page({
  data: {
    length: '-'
  },

  handleTap() {
    const pages = getCurrentPages()
    console.log('getCurrentPages', pages)
    this.setData({
      length: pages.length
    })
  }
})
