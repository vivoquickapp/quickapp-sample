Page({
  data: {
    list: [
      {
        id: 'api',
        name: '开放接口',
        open: false,
        pages: [
          {
            zh: '获取手机账户信息',
            url: 'get-account-info/get-account-info'
          },
          {
            zh: 'ArrayBufferToBase64',
            url: 'arraybuffer-to-base64/arraybuffer-to-base64'
          },
          {
            zh: 'Base64ToArrayBuffer',
            url: 'base64-to-arraybuffer/base64-to-arraybuffer'
          },
          {
            zh: 'CanIUse',
            url: 'caniuse/caniuse'
          },
          {
            zh: 'Vendor支付',
            url: 'vendorpay/vendorpay'
          },
          {
            zh: '阿里支付',
            url: 'alipay/alipay'
          },
          {
            zh: '微信支付',
            url: 'wxpay/wxpay'
          },
          {
            zh: '分享share',
            url: 'share/share'
          },
          {
            zh: '第三方分享share',
            url: 'service-share/service-share'
          },
          {
            zh: '设置',
            url: 'setting/setting'
          },
          {
            zh: '推送',
            url: 'push/index'
          }
        ]
      },
      {
        id: 'page',
        name: '界面',
        open: false,
        pages: [
          {
            zh: '设置界面标题',
            url: 'set-navigation-bar-title/set-navigation-bar-title'
          },
          {
            zh: 'CustomNavigationBar',
            url: 'custom-navigationbar/custom-navigationbar'
          },
          {
            zh: '标题栏加载动画',
            url: 'navigation-bar-loading/navigation-bar-loading'
          },
          {
            zh: '设置TabBar',
            url: '@set-tab-bar'
          },
          {
            zh: '页面跳转',
            url: 'navigator/navigator'
          },
          {
            zh: '下拉刷新',
            url: 'pull-down-refresh/pull-down-refresh'
          },
          {
            zh: '监听上拉触底',
            url: 'on-reach-bottom/on-reach-bottom'
          },
          {
            zh: '创建动画',
            url: 'animation/animation'
          },
          {
            zh: '创建绘画',
            url: 'canvas/canvas'
          },
          {
            zh: '显示操作菜单',
            url: 'action-sheet/action-sheet'
          },
          {
            zh: '设置导航栏',
            url: 'interface/index'
          },
          {
            zh: '显示模态弹窗',
            url: 'modal/modal'
          },
          {
            zh: '页面滚动',
            url: 'page-scroll/page-scroll'
          },
          {
            zh: '显示消息提示框',
            url: 'toast/toast'
          },
          {
            zh: '获取QXML节点信息',
            url: 'get-qxml-node-info/get-qxml-node-info'
          },
          {
            zh: 'QXML节点布局相交状态',
            url: 'intersection-observer/intersection-observer'
          },
          {
            zh: 'nextTick',
            url: 'next-tick/next-tick'
          }
        ]
      },
      {
        id: 'device',
        name: '设备',
        open: false,
        pages: [
          {
            zh: '获取手机网络状态',
            url: 'get-network-type/get-network-type'
          },
          {
            zh: '监听手机网络变化',
            url: 'on-network-status-change/on-network-status-change'
          },
          {
            zh: '获取手机系统信息',
            url: 'get-system-info/get-system-info'
          },
          {
            zh: '加速度监听器',
            url: 'accelerometer/accelerometer'
          },
          {
            zh: '罗盘',
            url: 'compass/compass'
          },
          {
            zh: '设备方向',
            url: 'device-motion/device-motion'
          },
          {
            zh: '陀螺仪',
            url: 'gyroscope/gyroscope'
          },
          {
            zh: '打电话',
            url: 'make-phone-call/make-phone-call'
          },
          {
            zh: '扫码',
            url: 'scan-code/scan-code'
          },
          {
            zh: '剪切板',
            url: 'clipboard-data/clipboard-data'
          },
          {
            zh: '蓝牙',
            url: 'bluetooth/bluetooth'
          },
          {
            zh: '屏幕亮度',
            url: 'screen-brightness/screen-brightness'
          },
          {
            zh: '用户截屏事件',
            url: 'capture-screen/capture-screen'
          },
          {
            zh: '振动',
            url: 'vibrate/vibrate'
          },
          {
            zh: '手机联系人',
            url: 'add-contact/add-contact'
          },
          {
            zh: 'Wi-Fi',
            url: 'wifi/wifi'
          },
          {
            zh: '电量',
            url: 'battery/battery'
          }
        ]
      },
      {
        id: 'network',
        name: '网络',
        open: false,
        pages: [
          {
            zh: '发起一个请求',
            url: 'request/request'
          },
          {
            zh: 'WebSocket',
            url: 'web-socket/web-socket'
          },
          {
            zh: '上传文件',
            url: 'upload-file/upload-file'
          },
          {
            zh: '下载文件',
            url: 'download-file/download-file'
          }
        ]
      },
      {
        id: 'media',
        name: '媒体',
        open: false,
        pages: [
          {
            zh: '图片',
            url: 'image/image'
          },
          {
            zh: '录音',
            url: 'voice/voice'
          },
          {
            zh: '音频',
            url: 'audio/audio'
          },
          {
            zh: '背景音频',
            url: 'background-audio/background-audio'
          },
          {
            zh: '文件',
            url: 'file/file'
          },
          {
            zh: '视频',
            url: 'video/video'
          },
          {
            zh: '动态加载字体',
            url: 'load-font-face/load-font-face'
          }
        ]
      },
      {
        id: 'location',
        name: '位置',
        open: false,
        pages: [
          {
            zh: '获取当前位置',
            url: 'get-location/get-location'
          },
          {
            zh: '使用原生地图查看位置',
            url: 'open-location/open-location'
          },
          {
            zh: '使用原生地图选择位置',
            url: 'choose-location/choose-location'
          }
        ]
      },
      {
        id: 'storage',
        name: '数据',
        open: false,
        pages: [
          {
            zh: '数据缓存',
            url: 'storage/storage'
          }
        ]
      }
    ],
    isTabBarMod: false
  },
  onShow() {
    this.exitTabBarMod()
  },
  onHide() {
    this.exitTabBarMod()
  },
  toggleSection(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        if (list[i].url) {
          qa.navigateTo({
            url: 'pages/' + list[i].url
          })
          return
        }
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
  },
  enterTabBarMod() {
    this.setData({
      isTabBarMod: true
    })
  },
  exitTabBarMod() {
    this.setData({
      isTabBarMod: false
    })
  }
})
