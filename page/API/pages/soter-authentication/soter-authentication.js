const AUTH_MODE = 'fingerPrint'

Page({
  startAuth() {
    const startSoterAuthentication = () => {
      qa.startSoterAuthentication({
        requestAuthModes: [AUTH_MODE],
        challenge: 'test',
        authContent: '示例',
        success: () => {
          qa.showToast({
            title: '认证成功'
          })
        },
        fail: err => {
          console.error(err)
          qa.showModal({
            title: '失败',
            content: '认证失败',
            showCancel: false
          })
        }
      })
    }

    const checkIsEnrolled = () => {
      qa.checkIsSoterEnrolledInDevice({
        checkAuthMode: AUTH_MODE,
        success: res => {
          console.log(res)
          if (parseInt(res.isEnrolled, 10) <= 0) {
            qa.showModal({
              title: '错误',
              content: '您暂未录入指纹信息，请录入后重试',
              showCancel: false
            })
            return
          }
          startSoterAuthentication()
        },
        fail: err => {
          console.error(err)
        }
      })
    }

    const notSupported = () => {
      qa.showModal({
        title: '错误',
        content: '您的设备不支持指纹识别',
        showCancel: false
      })
    }

    qa.checkIsSupportSoterAuthentication({
      success: res => {
        console.log(res)
        if (!res || res.supportMode.length === 0 || res.supportMode.indexOf('fingerPrint') < 0) {
          notSupported()
          return
        }
        checkIsEnrolled()
      },
      fail: err => {
        console.error(err)
        notSupported()
      }
    })
  }
})
