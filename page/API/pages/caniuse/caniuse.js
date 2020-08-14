const dataConf = {
  compTestArr: [
    {
      key: 'view',
      result: '-',
      expected: true
    },
    {
      key: 'cover-image',
      result: '-',
      expected: true
    },
    {
      key: 'cover-image.src',
      result: '-',
      expected: true
    },
    {
      key: 'cover-image.bindload',
      result: '-',
      expected: true
    },
    {
      key: 'cover-image.bindload.test',
      result: '-',
      expected: false
    },
    {
      key: 'cover-view',
      result: '-',
      expected: true
    },
    {
      key: 'movable-view.x',
      result: '-',
      expected: true
    },
    {
      key: 'map.longitude',
      result: '-',
      expected: true
    },
    {
      key: 'canvas.canvas-id',
      result: '-',
      expected: true
    },
    {
      key: 'input.placeholder-style',
      result: '-',
      expected: true
    },
    {
      key: 'text',
      result: '-',
      expected: true
    },
    {
      key: 'div',
      result: '-',
      expected: false
    }
  ],
  apiTestArr: [
    {
      key: 'getSystemInfo',
      result: '-',
      expected: true
    },
    {
      key: 'getSystemInfo.success',
      result: '-',
      expected: true
    },
    {
      key: 'getSystemInfo.success.',
      result: '-',
      expected: false
    },
    {
      key: 'getSystemInfo.success.brand',
      result: '-',
      expected: true
    },
    {
      key: 'showToast.object.image',
      result: '-',
      expected: true
    },
    {
      key: 'onCompassChange.callback.direction',
      result: '-',
      expected: true
    },
    {
      key: 'switchTab.object.url',
      result: '-',
      expected: true
    },
    {
      key: 'request.object.method.GET',
      result: '-',
      expected: true
    },
    {
      key: 'createMapContext.object.mapId',
      result: '-',
      expected: false
    },
    {
      key: 'openBluetoothAdapter',
      result: '-',
      expected: true
    },
    {
      key: 'getClipboardData.success.data',
      result: '-',
      expected: true
    },
    {
      key: 'setBackgroundTextStyle.object.textStyle',
      result: '-',
      expected: true
    },
    {
      key: 'setBackgroundTextStyle.object.textStyle.dark',
      result: '-',
      expected: true
    },
    {
      key: 'showNavigationBarLoading',
      result: '-',
      expected: true
    },
    {
      key: 'showTabBar.object.animation',
      result: '-',
      expected: true
    },
    {
      key: 'loadFontFace.object.family',
      result: '-',
      expected: true
    },
    {
      key: 'stopPullDownRefresh',
      result: '-',
      expected: true
    },
    {
      key: 'pageScrollTo',
      result: '-',
      expected: true
    },
    {
      key: 'createAnimation.object.duration',
      result: '-',
      expected: true
    },
    {
      key: 'getFileInfo.success.digest',
      result: '-',
      expected: true
    },
    {
      key: 'getSavedFileList.success.fileList',
      result: '-',
      expected: true
    },
    {
      key: 'downloadFile.object.header',
      result: '-',
      expected: true
    },
    {
      key: 'onSocketOpen.object.header',
      result: '-',
      expected: false
    },
    {
      key: 'arrayBufferToBase64',
      result: '-',
      expected: true
    },
    {
      key: 'pauseBackgroundAudio.object.success',
      result: '-',
      expected: false
    },
    {
      key: 'switchTab.object.url',
      result: '-',
      expected: true
    }
  ],
  otherTestArr: [
    {
      key: 'console.log',
      result: '-',
      expected: false
    },
    {
      key: 'CameraContext.onCameraFrame',
      result: '-',
      expected: false
    },
    {
      key: 'CameraFrameListener.start',
      result: '-',
      expected: false
    },
    {
      key: 'Image.src',
      result: '-',
      expected: false
    }
  ]
}

dataConf.compTestArr.forEach((item, index) => {
  item.result = qa.canIUse(item.key)
})

dataConf.apiTestArr.forEach((item, index) => {
  item.result = qa.canIUse(item.key)
})

dataConf.otherTestArr.forEach((item, index) => {
  item.result = qa.canIUse(item.key)
})

Page({
  data: {
    compTestArr: dataConf.compTestArr,
    apiTestArr: dataConf.apiTestArr,
    otherTestArr: dataConf.otherTestArr
  }
})
