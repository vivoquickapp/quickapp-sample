const fileTypes = [{
    name: 'doc格式',
    path: 'files/doc.doc'
  },
  {
    name: 'docx格式',
    path: 'files/docx.docx'
  },
  {
    name: 'ppt格式',
    path: 'files/ppt.ppt'
  },
  {
    name: 'pptx格式',
    path: 'files/pptx.pptx'
  },
  {
    name: 'xls格式',
    path: 'files/xls.xls'
  },
  {
    name: 'xlsx格式',
    path: 'files/xlsx.xlsx'
  },
  {
    name: 'pdf格式',
    path: 'files/pdf.pdf'
  }
]

const types = fileTypes.map((item) => {
  return item.name
})

Page({
  data: {
    tempFilePath: '',
    savedFilePath: '',

    result: '',
    array: types,
    index: 0,
  },
  doSaveFile(tempFilePath) {
    qa.saveFile({
      tempFilePath,
      success: (res) => {
        this.setData({
          savedFilePath: res.savedFilePath,
          result: `文件保存成功: ${res.savedFilePath}`
        })
      },
      fail: (err) => {
        this.setData({
          result: `文件保存失败: ${JSON.stringify(err)}`
        })
      }
    })
  },
  saveFile() {
    this.doSaveFile(this.data.tempFilePath)
  },
  chooseImage() {
    const self = this
    qa.chooseImage({
      count: 1,
      success(res) {
        self.setData({
          tempFilePath: res.tempFilePaths[0]
        })
      }
    })
  },
  getFileInfo() {
    qa.getFileInfo({
      filePath: this.data.tempFilePath,
      digestAlgorithm: 'md5',
      success: (result) => {
        this.setData({
          result: `获取信息成功：${JSON.stringify(result)}`
        })
      },
      fail: (err) => {
        this.setData({
          result: `获取文件信息失败: ${JSON.stringify(err)}`
        })
      },
      complete: () => {}
    });
  },
  getSavedFileInfo() {
    qa.getSavedFileInfo({
      filePath: this.data.savedFilePath,
      success: (result) => {
        this.setData({
          result: `${JSON.stringify(result)}`
        })
      },
      fail: (err) => {
        this.setData({
          result: `获取文件信息失败: ${JSON.stringify(err)}`
        })
      },
      complete: () => {}
    })
  },
  getSavedFileList() {
    qa.getSavedFileList({
      success: (result) => {
        this.setData({
          result: `获取列表成功：${JSON.stringify(result.fileList)}`
        })
      },
      fail: (err) => {
        this.setData({
          result: `获取该快应用下已保存的本地缓存文件列表失败: ${JSON.stringify(err)}`
        })
      },
      complete: () => {}
    });
  },
  removeFile() {
    qa.removeSavedFile({
      filePath: this.data.savedFilePath,
      success: () => {
        this.setData({
          savedFilePath: '',
          result: `文件删除成功`
        })
      },
      fail: (err) => {
        this.setData({
          result: `文件删除失败: ${JSON.stringify(err)}`
        })
      },
      complete: () => {}
    })
  },
  openDocument() {
    const filePath = this.data.savedFilePath
    if (!filePath) {
      return
    }
    const fileExtension = filePath.substring(filePath.lastIndexOf('.') + 1);
    qa.openDocument({
      filePath,
      fileType: fileExtension,
      success: () => {
        this.setData({
          result: `文件打开成功`
        })
      },
      fail: (err) => {
        this.setData({
          result: `文件打开失败: ${JSON.stringify(err)}`
        })
      },
      complete: () => {}
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
    let filePath = fileTypes[this.data.index].path
    this.doSaveFile(filePath)
  }
})
