Page({
  data: {
    screenBrightness: 0
  },

  onLoad() {
    this.updateBirghtness()
  },

  changeBrightness(e) {
    const value = Number.parseFloat(e.detail.value.toFixed(1))
    qa.setScreenBrightness({
      value,
      success: () => {
        this.updateBirghtness()
      }
    })
  },

  updateBirghtness() {
    qa.getScreenBrightness({
      success: res => {
        this.setData({
          screenBrightness: Number.parseFloat(res.value.toFixed(1))
        })
      },
      fail(err) {
        console.error(err)
      }
    })
  }
})
