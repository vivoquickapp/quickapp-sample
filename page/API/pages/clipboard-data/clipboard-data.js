Page({
  data: {
    value: '编辑内容，然后复制粘贴',
    pasted: ''
  },

  valueChanged(e) {
    this.setData({
      value: e.detail.value
    })
  },

  copy() {
    qa.setClipboardData({
      data: this.data.value,
      success() {
        qa.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 1000
        })
      }
    })
  },

  paste() {
    const self = this
    qa.getClipboardData({
      success(res) {
        self.setData({
          pasted: res.data
        })
        qa.showToast({
          title: '粘贴成功',
          icon: 'success',
          duration: 1000
        })
      }
    })
  }
})
