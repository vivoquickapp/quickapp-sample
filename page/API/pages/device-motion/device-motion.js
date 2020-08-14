// miniprogram/page/API/pages/device-motion/device-motion.js
Page({
  data: {
    gAlpha: 0,
    gBeta: 0,
    gGamma: 0,
    isListen: false
  },
  onReady() {
    this.startDeviceMotion()
    this.onDeviceMotionChange()
  },
  onUnload: function () {
    this.stopDeviceMotion()
  },
  toggle() {
    this.data.isListen ? this.stopDeviceMotion() : this.startDeviceMotion()
  },
  startDeviceMotion() {
    this.setData({
      isListen: true,
    })
    qa.startDeviceMotionListening({
      success: function (res) {
        console.log('startDeviceMotion success')
      },
      fail: function (res) {
        console.log('startDeviceMotion fail')
      }
    })
  },
  stopDeviceMotion() {
    this.setData({
      isListen: false
    })
    qa.stopDeviceMotionListening({
      success: function (res) {
        console.log('stopDeviceMotion success')
      },
      fail: function (res) {
        console.log('stopDeviceMotion fail')
      }
    })
  },
  onDeviceMotionChange() {
    qa.onDeviceMotionChange((res) => {
      this.setData({
        callCount: this.data.callCount + 1
      })
      console.log('onDeviceMotionChange res=' + res)
      this.setData({
        gAlpha: res.alpha.toFixed(2),
        gBeta: res.beta.toFixed(2),
        gGamma: res.gamma.toFixed(2)
      })
    })
  }
})
