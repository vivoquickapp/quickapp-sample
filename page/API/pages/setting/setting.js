Page({
  data: {
    setting: {}
  },

  getSetting() {
    qa.getSetting({
      success: res => {
        this.setData({ setting: res.authSetting })
      }
    })
  },
  authorize(e) {
    const scope = e.currentTarget.dataset.scope
    qa.authorize({
      scope: scope,
      success(res) {
        console.log(res)
      },fail(res) {
        console.log(res)
      }
    })
  }
})
