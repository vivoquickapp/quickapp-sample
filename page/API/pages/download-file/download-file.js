const url = 'https://wwwstatic.vivo.com.cn/vivoportal/files/image/home/20200531/dded470155ea8dd9af3ffc147b8c85a8.jpg_w2554-h1080.jpg'
Page({
  data: {
    imageSrc: ''
  },
  download() {
    const self = this
    qa.downloadFile({
      url: url,
      success(res) {
        self.setData({
          imageSrc: res.tempFilePath
        })
        qa.showToast({
          title: '下载成功',
        })
      },
      fail(e) {
        qa.showToast({
          icon: 'none',
          title: '下载失败',
        })
        console.log('downloadFile fail :', e)
      }
    })
  }
})
