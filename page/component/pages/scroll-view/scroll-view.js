const order = ['sample1', 'sample2', 'sample3', 'sample1']

Page({
  data: {
    scrollIntoView: 'sample3',
    scrollTop: 20
  },

  scrollToUpper(e) {
    console.log(e)
  },

  scrollToLower(e) {
    console.log(e)
  },

  scroll(e) {
    console.log(e)
  },
  onTap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.scrollIntoView) {
        this.setData({
          scrollIntoView: order[i + 1]
        })
        break
      }
    }
  },
  onTapMove() {
    let scrollTop = this.data.scrollTop + 80
    scrollTop = scrollTop > 200 ? 0 : scrollTop
    this.setData({scrollTop})
  },
  onTapMoveTop() {
    this.setData({scrollTop: 0})
  }
})
