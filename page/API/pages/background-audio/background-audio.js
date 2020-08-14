const util = require('../../../../util/util.js')

const dataUrl = '/files/fallInLoveSlowly.mp3'
let backgroundAudioPlaying

Page({
  onLoad() {
    this.setInterval()

    if (backgroundAudioPlaying) {
      this.setData({
        playing: true
      })
    }
  },
  data: {
    playing: false,
    playTime: 0,
    formatedPlayTime: '00:00:00',
    currentUrl: dataUrl
  },
  play() {
    const self = this
    qa.playBackgroundAudio({
      dataUrl: self.data.currentUrl,
      title: '此时此刻',
      complete() {
        self.setData({
          playing: true
        })
      }
    })
    this.setInterval()
    backgroundAudioPlaying = true
  },
  sliderChange(e) {
    clearInterval(this.updateInterval)
    const self = this
    qa.seekBackgroundAudio({
      position: e.detail.value,
      complete() {
        setTimeout(function() {
          self.setInterval()
        }, 2000)
      }
    })
  },
  pause() {
    const self = this
    qa.pauseBackgroundAudio({
      success() {
        self.setData({
          playing: false
        })
      }
    })
    backgroundAudioPlaying = false
  },
  stop() {
    const self = this
    qa.stopBackgroundAudio({
      dataUrl,
      success() {
        self.setData({
          playing: false,
          playTime: 0,
          formatedPlayTime: util.formatTime(0)
        })
      }
    })
    backgroundAudioPlaying = false
  },
  setInterval() {
    if(this.updateInterval) {
      clearInterval(this.updateInterval)
    }
    const self = this
    function update() {
      qa.getBackgroundAudioPlayerState({
        success(res) {
          self.setData({
            playTime: res.currentPosition,
            formatedPlayTime: util.formatTime(res.currentPosition)
          })
        }
      })
    }
    update()
    this.updateInterval = setInterval(update, 500)
  },
  onUnload() {
    clearInterval(this.updateInterval)
  }
})
