var player = null

Page({
  data: {
    status: '',
    canplay: '',
    seeked: '',
    seeking: '',
    error: '',
    timeupdate: '',
    waiting: '',
    ended: '',
    property: ''
  },

  onLoad(options) {
    this.oncanplayFoo = this.oncanplayFoo.bind(this)
    this.onplayFoo = this.onplayFoo.bind(this)
    this.onpauseFoo = this.onpauseFoo.bind(this)
    this.onstopFoo = this.onstopFoo.bind(this)
    this.onerrorFoo = this.onerrorFoo.bind(this)
    this.onseekedFoo = this.onseekedFoo.bind(this)
    this.onseekingFoo = this.onseekingFoo.bind(this)
    this.onwaitingFoo = this.onwaitingFoo.bind(this)
    this.ontimeupdateFoo = this.ontimeupdateFoo.bind(this)
    this.onendedFoo = this.onendedFoo.bind(this)
  },

  onUnload() {},
  createInnerAudioContext: function() {
    console.log('createInnerAudioContext')
    player = qa.createInnerAudioContext()
  },
  playAndCreateInnerAudioContext () {
    this.play()
    const secondPlayer = qa.createInnerAudioContext()
    this.setData({
      property: '\nsecondPlayer: ' + JSON.stringify(secondPlayer)
    })
  },
  setInnerAudioOption() {
    console.log('setInnerAudioOption')
    qa.setInnerAudioOption({
      mixWithOther: false,
      success: function() {
        console.log('setInnerAudioOption on success')
      },
      fail: function() {
        console.log('setInnerAudioOption on fail')
      }
    })
  },
  readproperty() {
    if (player === null) {
      console.log('player is null ')
      this.setData({
        property: 'player is null'
      })
    } else {
      console.log('readproperty')
      var allprop =
        ' startTime=' +
        player.startTime +
        ' autoplay=' +
        player.autoplay +
        ' loop=' +
        player.loop +
        ' volume=' +
        player.volume +
        ' duration=' +
        player.duration +
        ' currentTime=' +
        player.currentTime +
        ' paused=' +
        player.paused
      console.log('reproperty: ' + allprop)
      this.setData({
        property: allprop
      })
    }
  },
  setproperty() {
    if (player === null) {
      console.log('player is null ')
      this.setData({
        property: 'player is null'
      })
    } else {
      console.log('setproperty')
      player.src =
        '/files/fallInLoveSlowly.mp3'
      player.startTime = 2
      player.autoplay = true
      player.loop = true
      player.volume = 0.3
    }
  },
  play() {
    if (player === null) {
      console.log('player is null ')
      this.setData({
        property: 'player is null'
      })
    } else {
      console.log('play')
      player.play()
    }
  },
  pause() {
    if (player === null) {
      console.log('player is null ')
      this.setData({
        property: 'player is null'
      })
    } else {
      console.log('pause')
      player.pause()
    }
  },
  seek() {
    if (player === null) {
      console.log('player is null ')
      this.setData({
        property: 'player is null'
      })
    } else {
      console.log('seek')
      player.seek(3)
    }
  },
  stop() {
    if (player === null) {
      console.log('player is null ')
      this.setData({
        property: 'player is null'
      })
    } else {
      console.log('stop')
      player.stop()
    }
  },
  destroy() {
    if (player === null) {
      console.log('player is null ')
      this.setData({
        property: 'player is null'
      })
    } else {
      console.log('destroy')
      player.destroy()
    }
  },
  oncanplayFoo() {
    console.log('player on canplay ')
    this.setData({
      canplay: ' oncanplay'
    })
  },
  onplayFoo() {
    console.log('player on play ')
    this.setData({
      status: 'play'
    })
  },
  onpauseFoo() {
    console.log('player on pause ')
    this.setData({
      status: 'pause'
    })
  },
  onseekedFoo() {
    console.log('player on onSeeked ')
    this.setData({
      seeked: ' onseeked'
    })
  },
  onseekingFoo() {
    console.log('player on onSeeking ')
    this.setData({
      seeking: ' onseeking'
    })
  },
  onstopFoo() {
    console.log('player on stop ')
    this.setData({
      status: 'stop'
    })
  },
  ontimeupdateFoo() {
    console.log('player on time updated ')
    this.setData({
      timeupdate: ' ontimeUpdate'
    })
  },
  onwaitingFoo() {
    console.log('player on Waiting ')
    this.setData({
      waiting: ' onwaiting'
    })
  },
  onerrorFoo(res) {
    console.log('player on ERROR ' + JSON.stringify(res))
    this.setData({
      error: ' onERROR ' + res.errMsg
    })
  },
  onendedFoo() {
    console.log('player on Ended ')
    this.setData({
      ended: ' onEnded'
    })
  },
  setupListener() {
    if (player === null) {
      console.log('player is null ')
      this.setData({
        property: 'player is null'
      })
    } else {
      player.onCanplay(this.oncanplayFoo)
      player.onPlay(this.onplayFoo)
      player.onPause(this.onpauseFoo)
      player.onSeeked(this.onseekedFoo)
      player.onSeeking(this.onseekingFoo)
      player.onStop(this.onstopFoo)
      player.onTimeUpdate(this.ontimeupdateFoo)
      player.onWaiting(this.onwaitingFoo)
      player.onError(this.onerrorFoo)
      player.onEnded(this.onendedFoo)
    }
  },
  offListener() {
    if (player === null) {
      console.log('player is null ')
      this.setData({
        property: 'player is null'
      })
    } else {
      player.offCanplay(this.oncanplayFoo)
      player.offPlay(this.onplayFoo)
      player.offPause(this.onpauseFoo)
      player.offSeeked(this.onseekedFoo)
      player.offSeeking(this.onseekingFoo)
      player.offStop(this.onstopFoo)
      player.offTimeUpdate(this.ontimeupdateFoo)
      player.offWaiting(this.onwaitingFoo)
      player.offError(this.onerrorFoo)
      player.offEnded(this.onendedFoo)
      this.setData({
        status: '',
        canplay: '',
        seeked: '',
        seeking: '',
        error: '',
        timeupdate: '',
        waiting: '',
        ended: ''
      })
    }
  },
  playLocalMusic() {
    this.setData({
      property: "正在下载音频到本地, 下载完成后自动播放"
    })
    qa.downloadFile({
      url: "https://downmp3.tesoon.com/a40b5e7117a298702feb2bd205b7f426/5D849D0C/download/tiku/2016/0125/25201601113456292.mp3",
      header: {
        'User-Agent': 'chimera'
      },
      success: res => {
        this.setData({
          property: "下载完成, 自动播放, 音频地址为: " + res.tempFilePath
        })
        this.createInnerAudioContext()
        player.src = res.tempFilePath
        this.play()
        this.setData({
          playing: true
        })
      },
      fail: ({ errMsg }) => {
        this.setData({
          property: 'download fail or abort : ' + errMsg
        })
      }
    })
  }
})
