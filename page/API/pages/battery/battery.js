Page({
  onLoad() {

  },
  data: {
    level: '',
    isCharging: false
  },
  getBatteryInfo() {
    const self = this
    qa.getBatteryInfo({
      success(res){
        self.setData({
          level: '异步获取： ' + res.level + '%',
          isCharging: res.isCharging
        })
      }
    })
  },
  getBatteryInfoSync() {
    const info = qa.getBatteryInfoSync()
    this.setData({
      level: '同步获取： ' + info.level + '%',
      isCharging: info.isCharging
    })
  }

})
