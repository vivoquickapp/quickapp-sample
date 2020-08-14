function inArray(arr, key, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === val) {
      return i
    }
  }
  return -1
}

// ArrayBuffer 转 16 进制字符串
function ab2hex(buffer) {
  const hexArr = Array.prototype.map.call(new Uint8Array(buffer), function(bit) {
    return ('00' + bit.toString(16)).slice(-2)
  })
  return hexArr.join('')
}

Page({
  data: {
    devices: [],
    connected: false,
    name: '',
    deviceId: '',
    chs: [],
    errCodeMapping:{
      0: '正常',
      10000: '未初始化蓝牙适配器',
      10001: '当前蓝牙适配器不可用',
      10002: '没有找到指定设备',
      10003: '连接失败',
      10004: '没有找到指定服务',
      10005: '没有找到指定特征值',
      10006: '当前连接已断开',
      10007: '当前特征值不支持此操作',
      10008: '其余所有系统上报的异常',
      10009: 'Android 系统特有，系统版本低于 4.3 不支持 BLE',
      10012: '连接超时',
      10013: '连接 deviceId 为空或者是格式不正确',
    }
  },
  onLoad(){
    this.onBluetoothAdapterStateChange()
    this.onBLEConnectionStateChange()
  },
  onUnload() {
    this.closeBluetoothAdapter()
  },
  showModal(title,content,showCancel){
    qa.showModal({
      title,
      content,
      showCancel
    })
  },
  onBluetoothAdapterStateChange(){
    qa.onBluetoothAdapterStateChange(function (res) {
      qa.showModal({
        title: '',
        content: res.available? 'adapterState changed, now is available':'adapterState changed, now is not available',
        showCancel: false
      })
    })
  },
  openBluetoothAdapter() {
    qa.openBluetoothAdapter({
      success: (res) => {
        this.startBluetoothDevicesDiscovery()
      },
      fail: (res) => {
        this.showModal('errCode:'+res.errCode,this.data.errCodeMapping[res.errCode],false)
      }
    })
  },
  getBluetoothAdapterState() {
    qa.getBluetoothAdapterState({
      success: (res) => {
        if (res.discovering) {
          this.onBluetoothDeviceFound()
        } else if (res.available) {
          this.startBluetoothDevicesDiscovery()
        }
      },
      fail: (res) => {
        this.showModal('errCode:'+res.errCode,this.data.errCodeMapping[res.errCode],false)
      }
    })
  },
  startBluetoothDevicesDiscovery() {
    if (this._discoveryStarted) {
      return
    }
    this._discoveryStarted = true
    qa.startBluetoothDevicesDiscovery({
      allowDuplicatesKey: true,
      success: (res) => {
        this.onBluetoothDeviceFound()
      },
      fail: (res) => {
        this.showModal('errCode:'+res.errCode,this.data.errCodeMapping[res.errCode],false)
      }
    })
  },
  stopBluetoothDevicesDiscovery() {
    qa.stopBluetoothDevicesDiscovery({
      fail: (res) => {
        this.showModal('errCode:'+res.errCode,this.data.errCodeMapping[res.errCode],false)
      },
      complete: () => {
        this._discoveryStarted = false
      }
    })
  },
  onBluetoothDeviceFound() {
    qa.onBluetoothDeviceFound(res => {
      this.getBluetoothDevices()
    })
  },
  getBluetoothDevices(){
    qa.getBluetoothDevices({
      success: (res) => {
        this.setData({devices :res.devices.filter(device => device.name !== '')})
      },
      fail: (res) => {
        this.showModal('errCode:'+res.errCode,this.data.errCodeMapping[res.errCode],false)
      }
    })
  },
  createBLEConnection(e) {
    const ds = e.currentTarget.dataset
    const deviceId = ds.deviceId
    const name = ds.name
    qa.showLoading()
    qa.createBLEConnection({
      deviceId,
      success: () => {
        this.getConnectedBluetoothDevices()
        this.getBLEDeviceServices(deviceId)
      },
      complete() {
        qa.hideLoading()
      }
    })
    this.stopBluetoothDevicesDiscovery()
  },
  onBLEConnectionStateChange(){
    qa.onBLEConnectionStateChange(function(res) {
      // 该方法回调中可以用于处理连接意外断开等异常情况
      qa.showModal({
        title: '',
        content: `device ${res.deviceId} state has changed, connected: ${res.connected}`,
        showCancel: false
      })
    })
  },
  getConnectedBluetoothDevices(){
    qa.getConnectedBluetoothDevices({
      success: (res) => {
        let len=res.devices.length
        this.setData({
            connected: true,
            name: res.devices[len-1].name,
            deviceId :res.devices[len-1].deviceId
          })
      }
    })
  },
  closeBLEConnection() {
    qa.closeBLEConnection({
      deviceId: this.data.deviceId
    })
    this.setData({
      connected: false,
      chs: [],
      canWrite: false
    })
  },
  getBLEDeviceServices(deviceId) {
    qa.getBLEDeviceServices({
      deviceId,
      success: (res) => {
        for (let i = 0; i < res.services.length; i++) {
          if (res.services[i].isPrimary) {
            this.getBLEDeviceCharacteristics(deviceId, res.services[i].uuid)
            return
          }
        }
      },
      fail: (res) => {
        this.showModal('errCode:'+res.errCode,this.data.errCodeMapping[res.errCode],false)
      }
    })
  },
  getBLEDeviceCharacteristics(deviceId, serviceId) {
    qa.getBLEDeviceCharacteristics({
      deviceId,
      serviceId,
      success: (res) => {
        for (let i = 0; i < res.characteristics.length; i++) {
          const item = res.characteristics[i]
          if (item.properties.read) {
            qa.readBLECharacteristicValue({
              deviceId,
              serviceId,
              characteristicId: item.uuid
            })
          }
          if (item.properties.write) {
            this.setData({
              canWrite: true
            })
            this._deviceId = deviceId
            this._serviceId = serviceId
            this._characteristicId = item.uuid
            this.writeBLECharacteristicValue()
          }
          if (item.properties.notify || item.properties.indicate) {
            qa.notifyBLECharacteristicValueChange({
              deviceId,
              serviceId,
              characteristicId: item.uuid,
              state: true
            })
          }
        }
      },
      fail: (res) => {
        this.showModal('errCode:'+res.errCode,this.data.errCodeMapping[res.errCode],false)
      }
    })
    qa.onBLECharacteristicValueChange(characteristic => {
      const idx = inArray(this.data.chs, 'uuid', characteristic.characteristicId)
      const data = {}
      if (idx === -1) {
        data[`chs[${this.data.chs.length}]`] = {
          uuid: characteristic.characteristicId,
          value: ab2hex(characteristic.value)
        }
      } else {
        data[`chs[${idx}]`] = {
          uuid: characteristic.characteristicId,
          value: ab2hex(characteristic.value)
        }
      }
      this.setData(data)
    })
  },
  writeBLECharacteristicValue() {
    const buffer = new ArrayBuffer(1)
    const dataView = new DataView(buffer)
    dataView.setUint8(0, (Math.random() * 255) | 0)
    qa.writeBLECharacteristicValue({
      deviceId: this._deviceId,
      serviceId: this._deviceId,
      characteristicId: this._characteristicId,
      value: buffer
    })
  },
  closeBluetoothAdapter() {
    qa.closeBluetoothAdapter()
    this._discoveryStarted = false
  }
})
