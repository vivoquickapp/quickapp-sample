Page({
  data: {
    result: '',
    scanType:'',
    scanTypeMapping: {
      QR_CODE: '二维码',
      CODABAR: '一维码',	
      CODE_39: '一维码',	
      CODE_93: '一维码',	
      CODE_128: '一维码',
      DATA_MATRIX: '二维码',	
      EAN_8: '一维码',	
      EAN_13: '一维码',	
      ITF: '一维码',	
      MAXICODE: '一维码',	
      RSS_14: '一维码',	
      RSS_EXPANDED: '一维码',	
      UPC_A: '一维码',	
      UPC_E:'一维码'
    }
  },
 
  scanCode() {
    qa.scanCode({
      success: (res)=> {
        this.setData({
          result: res.result,
          scanType: res.scanType
        })
      },
      fail() {}
    })
  }
})
