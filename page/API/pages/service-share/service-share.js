Page({
  data:{
    provider: '',
    platforms: []
  },
  onServiceShareImg(){
    qa.serviceShare({
      shareType: 0,
      title: '标题',
      summary: '摘要',
      imagePath: '/image/flower.png',
      targetUrl: 'https://qapp-chimera.vivo.com.cn/index.html',
      // platforms: ['WEIBO'],
      success: function(data) {
        qa.showToast({
          title: 'success',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function(data, code) {
        qa.showToast({
          title: 'fail',
          icon: 'none',
          duration: 2000
        })
      },
      cancel(){
        qa.showToast({
          title: 'cancel',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  onServiceShareVideo(){
    qa.serviceShare({
      shareType: 4,
      title: '标题',
      summary: '摘要',
      imagePath: '/image/flower.png',
      mediaUrl: 'https://shopstatic.vivo.com.cn/vivoshop/commodity/44/159158198202724628.mp4',
      targetUrl: 'https://qapp-chimera.vivo.com.cn/index.html',
      // platforms: ['WEIBO'],
      success: function(data) {
        qa.showToast({
          title: 'success',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function(data, code) {
        qa.showToast({
          title: 'fail',
          icon: 'none',
          duration: 2000
        })
      },
      cancel(){
        qa.showToast({
          title: 'cancel',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  getProvider(){
    const param = qa.getProvider()
    this.setData({provider: param})
    console.log('provider:', param) 
  },
  getAvailablePlatforms(){
    qa.getAvailablePlatforms({
      success: (data)=> {
        this.setData({platforms: data.platforms})
        for (const i in data.platforms) {
          console.log("platforms:" + data.platforms[i]);
        }
      },
      fail: (data, code) => {
        console.log("handling fail, code=" + code);
      }
    })
  },
  serviceShareTest3(){
    qa.serviceShare({
      shareType: 3,
      title: '标题',
      summary: '摘要',
      imagePath: '/image/flower.png',
      mediaUrl: 'http://staff2.ustc.edu.cn/~wdw/softdown/index.asp/0042515_05.ANDY.mp3',
      targetUrl: 'http://c.y.qq.com/v8/playsong.html?songid=109325260&songmid=000kuo2H2xJqfA&songtype=0&source=mqq&_wv=1',
      platforms: ['QQ'],
      success: function(data) {
        qa.showToast({
          title: 'success',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function(data, code) {
        qa.showToast({
          title: 'fail',
          icon: 'none',
          duration: 2000
        })
      },
      cancel(){
        qa.showToast({
          title: 'cancel',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  serviceShareTest4(){
    qa.serviceShare({
      shareType: 4,
      title: '标题',
      summary: '摘要',
      imagePath: '/image/flower.png',
      mediaUrl: 'https://shopstatic.vivo.com.cn/vivoshop/commodity/44/159158198202724628.mp4',
      targetUrl: 'https://qapp-chimera.vivo.com.cn/index.html',
      platforms: ['QQ'],
      success: function(data) {
        qa.showToast({
          title: 'success',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function(data, code) {
        qa.showToast({
          title: 'fail',
          icon: 'none',
          duration: 2000
        })
      },
      cancel(){
        qa.showToast({
          title: 'cancel',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  serviceShareTest5(){
    qa.serviceShare({
      shareType: 3,
      title: '标题',
      summary: '摘要',
      imagePath: '/image/flower.png',
      mediaUrl: 'http://staff2.ustc.edu.cn/~wdw/softdown/index.asp/0042515_05.ANDY.mp3',
      targetUrl: 'http://c.y.qq.com/v8/playsong.html?songid=109325260&songmid=000kuo2H2xJqfA&songtype=0&source=mqq&_wv=1',
      platforms: ['WEIXIN'],
      success: function(data) {
        qa.showToast({
          title: 'success',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function(data, code) {
        qa.showToast({
          title: 'fail',
          icon: 'none',
          duration: 2000
        })
      },
      cancel(){
        qa.showToast({
          title: 'cancel',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  serviceShareTest6(){
    qa.serviceShare({
      shareType: 4,
      title: '标题',
      summary: '摘要',
      imagePath: '/image/flower.png',
      mediaUrl: 'https://shopstatic.vivo.com.cn/vivoshop/commodity/44/159158198202724628.mp4',
      targetUrl: 'https://qapp-chimera.vivo.com.cn/index.html',
      platforms: ['WEIXIN'],
      success: function(data) {
        qa.showToast({
          title: 'success',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function(data, code) {
        qa.showToast({
          title: 'fail',
          icon: 'none',
          duration: 2000
        })
      },
      cancel(){
        qa.showToast({
          title: 'cancel',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  serviceShareTest7(){
    qa.serviceShare({
      shareType: 3,
      title: '标题',
      summary: '摘要',
      imagePath: '/image/flower.png',
      mediaUrl: 'http://staff2.ustc.edu.cn/~wdw/softdown/index.asp/0042515_05.ANDY.mp3',
      targetUrl: 'http://c.y.qq.com/v8/playsong.html?songid=109325260&songmid=000kuo2H2xJqfA&songtype=0&source=mqq&_wv=1',
      platforms: ['QQ','WEIXIN'],
      success: function(data) {
        qa.showToast({
          title: 'success',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function(data, code) {
        qa.showToast({
          title: 'fail',
          icon: 'none',
          duration: 2000
        })
      },
      cancel(){
        qa.showToast({
          title: 'cancel',
          icon: 'none',
          duration: 2000
        })
      }
    })
  }
})
