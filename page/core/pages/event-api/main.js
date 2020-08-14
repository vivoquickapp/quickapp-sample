Page({
  data: {
    showCounter: 0,
    hideCounter: 0,
    errorCounter: 0,
    hasRegistered: false
  },
  onLoad() {
    this.onAppShow = (e) => {
      this.setData({
        showCounter: this.data.showCounter + 1
      })
    }
    this.onAppHide = (e) => {
      this.setData({
        hideCounter: this.data.hideCounter + 1
      })
    }
    this.onError = (e) => {
      this.setData({
        errorCounter: this.data.errorCounter + 1
      })
    }
    this.register()
  },
  register() {
    if (this.data.hasRegistered) {
      return
    }
    qa.onAppShow(this.onAppShow)
    qa.onAppHide(this.onAppHide)
    qa.onError(this.onError)
    this.setData({
      hasRegistered: true
    })
  },
  unRegister() {
    if (!this.data.hasRegistered) {
      return
    }
    qa.offAppShow(this.onAppShow)
    qa.offAppHide(this.onAppHide)
    qa.offError(this.onError)
    this.setData({
      hasRegistered: false
    })
  },
  throwError(e) {
    throw new Error('test-error')
  },
  toggleRegister() {
    if (this.data.hasRegistered) {
      this.unRegister()
    } else {
      this.register()
    }
  }
})
