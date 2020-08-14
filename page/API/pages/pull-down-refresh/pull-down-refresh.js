Page({
  onPullDownRefresh() {
    qa.showToast({
      title: '用户触发了：下拉刷新事件',
      icon: 'none'
    })
  },

  startPullDownRefresh() {
    qa.startPullDownRefresh({
      complete(res) {
        qa.showToast({
          title: '下拉刷新（完成）',
          icon: 'success'
        })
      }
    })
  },

  stopPullDownRefresh() {
    qa.stopPullDownRefresh({
      complete(res) {
        qa.hideToast()
      }
    })
  },

  startPullDownRefreshWithStyle() {
    qa.setBackgroundTextStyle({
      // 下拉背景字体、loading 图的样式为dark 
      textStyle: 'light'
    })
    qa.setBackgroundColor({
      backgroundColor: '#212121'
    })
    this.startPullDownRefresh()
  }
})
