Page({
  navigateToQuickapp(e, path) {
    qa.navigateToQuickapp({
      packageName: 'com.example.page0',
      path: path || '',
      extraData: {
        a: 1,
        b: '数据'
      },
      success(res) {
        console.log('jump success', res)
        qa.showModal({
          title: JSON.stringify(res)
        })
      },
      fail(res) {
        console.log('jump fail', res)
        qa.showModal({
          title: JSON.stringify(res)
        })
      },
      complete() {
        console.log('jump complete')
      },
    })
  },
  navigateToQuickapp2() {
    const path = 'pages/detail/index'
    this.navigateToQuickapp(null, path)
  }
})