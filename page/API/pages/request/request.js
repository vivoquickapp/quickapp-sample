Page({
  data: {
    loading: false,
  },
  request() {
    const self = this

    self.setData({
      loading: true
    })

    qa.request({
      url: 'https://www.vivo.com/',
      data: {},
      success(result) {
        qa.showToast({
          title: '请求成功',
          icon: 'success',
          mask: true,
          duration: 1200,
        })
        self.setData({
          loading: false
        })
        console.log('request success', result)
      },

      fail({errMsg}) {
        qa.showToast({
          title: '请求失败',
          icon: 'none',
          mask: true,
          duration: 1200,
        })
        console.log('request fail', errMsg)
        self.setData({
          loading: false
        })
      }
    })
  }
})
