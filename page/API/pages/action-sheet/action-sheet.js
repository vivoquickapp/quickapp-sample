Page({
  openActionSheet() {
    qa.showActionSheet({
      itemList: ['item-1', 'item-2', 'item-3', 'item-4'],
      success(e) {
        console.log(e.tapIndex)
      }
    })
  }
})
