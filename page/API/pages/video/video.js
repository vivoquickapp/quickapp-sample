const sourceType = [['camera'], ['album'], ['camera', 'album']]
const camera = [['front'], ['back'], ['front', 'back']]

const duration = (() => {
  const out = []
  for (let i=0; i<60; i++) {
    out.push(i + 1)
  }
  return out
})();

Page({
  data: {
    sourceTypeIndex: 2,
    sourceType: ['拍摄', '相册', '拍摄或相册'],

    cameraIndex: 2,
    camera: ['前置', '后置', '前置或后置'],

    durationIndex: 59,
    duration: duration.map(function(t) {
      return t + '秒'
    }),

    src: ''
  },
  onReady() {
    this.videoContext = qa.createVideoContext('testVideo')
  },
  bindPlay() {
    this.videoContext && this.videoContext.play && this.videoContext.play()
  },

  bindPause() {
    this.videoContext && this.videoContext.pause && this.videoContext.pause()
  },
  bindStop() {
    this.videoContext && this.videoContext.stop && this.videoContext.stop()
  },
  bindSeek() {
    this.videoContext && this.videoContext.seek && this.videoContext.seek(-20)
  },
  requestFullScreen() {
    this.videoContext && this.videoContext.requestFullScreen && this.videoContext.requestFullScreen()
  },
  exitFullScreen() {
    this.requestFullScreen()
    setTimeout(() => {
      this.videoContext && this.videoContext.exitFullScreen && this.videoContext.exitFullScreen()
    }, 2000)
  },
  saveVideoToPhotosAlbum() {
    const self = this
    qa.saveVideoToPhotosAlbum({
      filePath: self.data.src,
      success (res) {
        console.log('saveVideoToPhotosAlbum success:', res)
        qa.showToast({
          title: '保存成功'
        })
      },
      fail (err) {
        console.log('saveVideoToPhotosAlbum fail', err)
      }
    })
  },
  sourceTypeChange(e) {
    this.setData({
      sourceTypeIndex: e.detail.value
    })
  },
  cameraChange(e) {
    this.setData({
      cameraIndex: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      durationIndex: e.detail.value
    })
  },
  chooseVideo() {
    const self = this
    qa.chooseVideo({
      sourceType: sourceType[this.data.sourceTypeIndex],
      camera: camera[this.data.cameraIndex],
      maxDuration: duration[this.data.durationIndex],
      success(res) {
        self.setData({
          src: res.tempFilePath
        })
      }
    })
  }
})
