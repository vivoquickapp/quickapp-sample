const showErrorModal = (message) => {
  qa.showModal({
    title: 'OPPS: 报错啦 ⁉️',
    content: message,
    success(res) {
      if (res.confirm) {
        console.log('用户点击确定')
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })
}

Page({
  data: {
    key: '',
    data: '',
  },
  onLoad() {
    this.testSetStorageSync()
    this.testSetStorage()
  },

  onReady() {
  },

  testSetStorageSync() {
    // 基础数据
    const expectedResultArr = [null, undefined, 9527, '211314']
    expectedResultArr.forEach(item => {
      qa.setStorageSync('20191220', item)
      let storageVal = qa.getStorageSync('20191220')
      if (storageVal !== item) {
        showErrorModal(`❌ 存储 ${item} 与取出的 ${storageVal} 不全等；`)
        throw new Error(`❌ 存储 ${item} 与取出的 ${storageVal} 不全等；`)
      } else {
        console.log(`✅ 存储 ${item} 与取出的 ${storageVal} 全等；`)
      }
    })

    let storageVal
    // 日期
    const currentTime = new Date()
    qa.setStorageSync('20191220', currentTime)
    storageVal = qa.getStorageSync('20191220')
    if (storageVal.toString() !== currentTime.toString()) {
      showErrorModal(`❌  存储日期类型，取出的结果不符合预期；`)
      throw new Error(`❌  存储日期类型，取出的结果不符合预期；`)
    } else {
      console.log(`✅ 存储日期：${currentTime} 与取出的 ${storageVal} 符合预期；`)
    }
    // NaN => NaN
    qa.setStorageSync('20191220', NaN)
    storageVal = qa.getStorageSync('20191220')
    if (isNaN(storageVal)) {
      console.log(`✅ 存储 NaN 与取出满足 isNaN，符合预期；`)
    } else {
      showErrorModal(`❌  存储 NaN，取出的结果不是 NaN；`)
      throw new Error(`❌  存储 NaN，取出的结果不是 NaN；`)
    }
    // 不存在的 key
    storageVal = qa.getStorageSync('20191220-no-set')
    if (storageVal !== '') {
      showErrorModal(`❌  取出未存储 key 的结果不是 ''；`)
      throw new Error(`❌  取出未存储 key 的结果不是 ''；`)
    } else {
      console.log(`✅ 取出未存储的 key，结果符合预期；`)
    }
  },

  testSetStorage() {
    const expectedResultArr = [null, undefined, 9527, '211314']
    expectedResultArr.forEach(item => {
      this.setAndGetStorage(`201912-${item}`, item)
    })
    // 不存在的 key
    qa.getStorage({
      key: '20191220-no-set',
      success: res => {
        showErrorModal(`❌  取出未存储 key 的结果不是 ''；`)
        throw new Error(`❌  取出未存储 key 的结果不是 ''；`)
      },
      fail: err => {
        console.log(err)
        if (err.errMsg === 'getStorage:fail data not found') {
          console.log(`✅ 取出未存储的 key，结果符合预期；`)
        }
      },
      complete: res => {
        console.log(res)
      }
    })
  },

  setAndGetStorage(key, value) {
    qa.setStorage({
      key: key,
      data: value,
      success: response => {
        console.log(`setStorage success callback: `, response)
        qa.getStorage({
          key: key,
          success: res => {
            console.log(`getStorage success callback: `, res)
            if (res.data !== value) {
              showErrorModal(`❌  取出未存储 key=${key} 的结果是 ${res.data}，不是 ${value}；`)
              throw new Error(`❌  取出未存储 key=${key} 的结果 ${res.data}，不是 ${value}；`)
            } else {
              console.log(`✅ 取出未存储的 key = ${key}，结果是 ${res.data} 符合预期；`)
            }
          },
          fail: err => {
            console.log(`getStorage fail callback: `, err)
          },
          complete: res => {
            console.log(`getStorage complete callback: `, res)
          }
        })
      },
      fail: err => {
        console.log(`setStorage fail callback: `, err)
      },
      complete: res => {
        console.log(`setStorage complete callback: `, res)
      }
    })
  },

  keyChange(e) {
    this.data.key = e.detail.value
  },

  dataChange(e) {
    this.data.data = e.detail.value
  },

  getStorage() {
    const { key, data } = this.data
    let storageData

    if (key.length === 0) {
      this.setData({
        key,
        data
      })
      qa.showModal({
        title: '读取数据失败',
        content: `key 不能为空`
      })
    } else {
      storageData = qa.getStorageSync(key)
      if (storageData === '') {
        this.setData({
          key,
          data
        })
        qa.showModal({
          title: '读取数据失败',
          content: `找不到 key 对应的数据`
        })
      } else {
        this.setData({
          key,
          data
        })
        qa.showModal({
          title: '读取数据成功',
          content: storageData
        })
      }
    }
  },

  setStorage() {
    const { key, data } = this.data
    if (key.length === 0) {
      this.setData({
        key,
        data
      })
      qa.showModal({
        title: '保存数据失败',
        content: `key 不能为空`
      })
    } else {
      qa.setStorageSync(key, data)
      this.setData({
        key,
        data
      })
      qa.showModal({
        title: '存储数据成功',
      })
    }
  },

  clearStorageSync() {
    qa.clearStorageSync()
    this.setData({
      key: '',
      data: ''
    })
    qa.showModal({
      title: '清除数据成功',
      content: ''
    })
  },

  clearStorage() {
    // 清理本地数据缓存
    qa.clearStorage({
      success(res) {
        qa.showToast({
          title: '成功清理本地数据缓存',
          icon: 'none'
        })
      },
      complete() {
        qa.showToast({
          title: '清理本地数据缓存完成',
          icon: 'none'
        })
      },
      fail(err) {
        qa.showToast({
          title: '清理本地数据缓存失败'
        })
      }
    })
  },

  setDateStorage() {
    qa.setStorage({
      key: 'current-date',
      data: new Date(),
      success(res) {
        qa.showModal({
          title: 'setStorage Success !',
          content: res.errMsg
        })
      },
      complete() {
        qa.showToast({
          title: 'setStorage complete',
          icon: 'none'
        })
      },
      fail(err) {
        qa.showModal({
          title: 'setStorage Fail !',
          content: `Error Msg: ${JSON.stringify(err, null, 2)}`
        })
        console.warn(`getStorage 获取 current-date 失败： ${JSON.stringify(err, null, 2)}`)
      }
    })
  },

  getDateStorage() {
    qa.getStorage({
      key: 'current-date',
      success(res) {
        const date = res.data
        if (!date) {
          return
        }
        qa.showModal({
          title: 'getStorage 获取',
          content: `${date.getFullYear()} 年 ${date.getMonth() +
            1} 月 ${date.getDate()} 日 ${date.getHours()} 时 ${date.getMinutes()} 分`
        })
      },
      complete() {
        qa.showToast({
          title: 'getStorage complete',
          icon: 'none'
        })
      },
      fail(err) {
        console.warn(`getStorage 获取 current-date 失败： ${JSON.stringify(err, null, 2)}`)
      }
    })
  },

  setArrayStorage() {
    try {
      qa.setStorageSync('test-storage-array', [
        `静轩之别苑`,
        `静晴轩别苑`,
        `晚晴幽草轩`,
        `天意人间舫`
      ])
      qa.showToast({
        title: 'setStorageSync Success',
        icon: 'none'
      })
    } catch (err) {
      qa.showModal({
        title: 'setStorageSync Fail !',
        content: `Error Msg: ${JSON.stringify(err, null, 2)}`
      })
    }
  },

  getArrayStorage() {
    const value = qa.getStorageSync('test-storage-array')
    qa.showActionSheet({
      itemList: value || [],
      success(res) {
        console.log(`showActionSheet success:`, res)
      },
      fail(res) {
        qa.showModal({
          title: 'showActionSheet Error !',
          content: `showActionSheet Error: ${res.errMsg}`
        })
        console.warn(`showActionSheet Error:`, res.errMsg)
      }
    })
  },

  getStorageInfo() {
    qa.getStorageInfo({
      success(res) {
        const keysStr = res.keys.join(',')
        qa.showModal({
          title: 'getStorageInfo success',
          content: `
            当前 storage 中所有的 key: ${keysStr}
            当前占用的空间大小, 单位 ${res.currentSize} KB
            限制的空间大小，单位 ${res.limitSize} KB`
        })
      },
      complete() {
        qa.showToast({
          title: 'getStorageInfo complete',
          icon: 'none'
        })
      },
      fail(res) {
        qa.showToast({
          title: 'getStorageInfo fail',
          icon: 'none'
        })
      }
    })
  }
})
