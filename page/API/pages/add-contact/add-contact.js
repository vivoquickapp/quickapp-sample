Page({
  data: {
    callbackResult: ""
  },
  submit(e) {
    const formData = e.detail.value
    qa.addPhoneContact({
      ...formData,
      success: res => {
        this.setData({
          callbackResult: "success\n" + JSON.stringify(res)
        })
        qa.showToast({
          title: '联系人创建成功'
        })
      },
      fail: res => {
        this.setData({
          callbackResult: "fail\n" + JSON.stringify(res)
        })
        qa.showToast({
          title: '联系人创建失败'
        })
      }
    })
  }
})
