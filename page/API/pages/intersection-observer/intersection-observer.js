Page({
  data: {
    appear: false
  },
  onReady() {
    this._observer = qa.createIntersectionObserver(this)
    this._observer.relativeTo('.scroll-view').observe('.ball', res => {
      this.setData({
        appear: res.intersectionRatio > 0
      })
    })
  },
  onUnload() {
    if (this._observer) this._observer.disconnect()
  }
})
