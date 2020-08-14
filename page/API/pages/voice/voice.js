Page({
  data: {
    recording: false,
    playing: false,
    recordPath: ''
  },

  onHide() {
    this.stopRecord()
    this.stopVoice()
  },

  onUnload() {
    this.stopRecord()
    this.stopVoice()
  },

  startRecord() {
    const self = this
    qa.startRecord({
      success(res) {
        self.setData({
          recordPath: res.tempFilePath,
          recording: true
        })
      },
      fail(e) {
        qa.showModal({
          title: '开始失败',
          content: '录音失败：' + e.errMsg
        })
      }
    })
  },

  stopRecord() {
    const self = this
    console.log('stopRecord')
    qa.stopRecord({
      success() {
        console.log('success')
      },
      fail(e) {
        console.log('fail')
        qa.showToast({
          title: 'stopRecord 失败',
          icon: 'none'
        });
      },
      complete(e) {
        self.setData({
          recording: false
        })
      }
    })
  },

  playVoice() {
    if (this.data.recordPath) {
      this.player = qa.createInnerAudioContext()
      this.player.src = this.data.recordPath
      this.player.autoplay = true
      this.player.loop = true
      this.player.volume = 0.5
      this.player.play()
      this.setData({
        playing: true
      })
    }
  },

  stopVoice() {
    this.player && this.player.stop()
    this.setData({
      playing: false
    })
  }
})
