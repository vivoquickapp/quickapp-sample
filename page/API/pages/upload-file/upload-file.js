Page({
  data: {
    imageSrc: '',
  },
  upload() {
    const self = this
    qa.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success(res) {
        console.log('temp path:', res.tempFilePaths[0])
        const imageSrc = res.tempFilePaths[0]
        qa.uploadFile({
          url: 'http://172.25.70.224:8037/chimera/sample-assets',
          filePath: imageSrc,
          name: 'data',
          success(res) {
            console.log('uploadFile success:', res)
            qa.showToast({
              title: '上传成功',
              icon: 'success',
              duration: 1000
            })

            self.setData({
              imageSrc
            })
          },
          fail({
            errMsg
          }) {
            console.log('uploadFile fail:', errMsg)
            qa.showToast({
              title: '上传失败',
              icon: 'none',
              duration: 1000
            })
          }
        })
      },

      fail({
        errMsg
      }) {
        console.log('chooseImage fail, err is', errMsg)
      }
    })
  },
})