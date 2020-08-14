Page({
  data: {
    wifiList: [],
    whichWifiConnected: '',
    BSSID: '',
    SSID: '',
    password: '',
    showPopuUps: false,
    errorMsgMapping: {
      0: '正常',
      12002: '密码错误',
      12003: '连接超时',
      12004: '重复连接 Wi-Fi',
      12005: '未打开 Wi-Fi 开关',
      12006: '未打开 GPS 定位开关',
      12007: '用户拒绝授权链接 Wi-Fi',
      12008: '无效 SSID'
    }
  },
  onUnload() {
    this.stopSearch()
  },
  onLoad() {
    qa.onWifiConnected(result => {
      qa.getConnectedWifi({
        success: result => {
          this.setData({
            whichWifiConnected: result.wifi.SSID
          })
          console.log('@ConnectWifi onWifiConnected', JSON.stringify(result, null, 2))
        },
        fail(err) {
          console.error('@ConnectWifi onWifiConnected fail', JSON.stringify(err, null, 2))
        },
        complete(res) {
          console.log('@ConnectWifi onWifiConnected complete')
        }
      })
    })
  },
  startSearch() {
    const getWifiList = () => {
      qa.getWifiList({
        success: () => {
          qa.onGetWifiList(res => {
            const wifiList = res.wifiList
              .sort((a, b) => b.signalStrength - a.signalStrength)
              .map(wifi => {
                const strength = Math.ceil(wifi.signalStrength * 4)
                return Object.assign(wifi, { strength })
              })
            this.setData({
              wifiList
            })
          })
        },
        fail(err) {
          console.error(err)
        }
      })
    }

    const startWifi = () => {
      qa.startWifi({
        success: getWifiList,
        fail(err) {
          console.error(err)
        }
      })
    }
    qa.getSystemInfo({
      success(res) {
        startWifi()
      }
    })
  },
  startConnectWifi(BSSID, SSID, password) {
    qa.connectWifi({
      BSSID,
      SSID,
      password,
      success(res) {
        this.setData({ currentConnectWifi: SSID })
        console.log('@ConnectWifi success', res.errMsg)
      },
      fail(err) {
        console.log('@ConnectWifi fail', err.errCode)
        qa.showToast({
          title: err.errCode,
          icon: 'none',
          duration: 3000
        })
        console.error('@ConnectWifi fail', JSON.stringify(err, null, 2))
      },
      complete(res) {
        console.log('@ConnectWifi complete')
      }
    })
  },
  onConfirmClicked() {
    this.setData({ showPopuUps: false })
    this.startConnectWifi(this.data.BSSID, this.data.SSID, this.data.password)
    this.setData({ password: '' })
  },
  onCancelClicked() {
    this.setData({ showPopuUps: false })
  },
  onInputChanged(e) {
    this.setData({ password: e.detail.value })
  },
  onConnectWifi(e) {
    let index = e.currentTarget.dataset['index']
    this.setData({
      SSID: this.data.wifiList[index].SSID,
      BSSID: this.data.wifiList[index].BSSID
    })
    if (this.data.wifiList[index].secure === true) {
      this.setData({ showPopuUps: true })
    } else {
      this.startConnectWifi(this.data.BSSID, this.data.SSID, '')
    }
  },
  stopSearch() {
    qa.stopWifi({
      success(res) {
        console.log(res)
      },
      fail(err) {
        console.error(err)
      }
    })
  }
})
