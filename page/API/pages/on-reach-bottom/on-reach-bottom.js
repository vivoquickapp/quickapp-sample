Page({
  data: {
    moreContentNodes: [{
      name: 'div',
      attrs: {
        class: '',
        style: 'color: #545454;'
      },
      children: [{
        type: 'text',
        text: ''
      }]
    }]
  },
  onReachBottom() {
    qa.showToast({
      title: '上拉已触底',
      icon: 'none',
      duration: 2000
    })
    this.addMoreContent()
  },
  addMoreContent() {
    const moreContent = {
      name: 'div',
      attrs: {
        class: '',
        style: 'color: #545454;'
      },
      children: [{
        type: 'text',
        text: '因为这些幼稚的知识，后来便使我的学籍列在日本一个乡间的医学专门学校里了。我的梦很美满，预备卒业回来，救治象我父亲似的被误的病人的疾苦，战争时候便去当军医，一面又促进了国人对于维新的信仰。我已不知道教授微生物学的方法，现在又有了怎样的进步了，总之那时是用了电影，来显示微生物的形状的，因此有时讲义的一段落已完，而时间还没有到，教师便映些风景或时事的画片给学生看，以用去这多余的光阴。其时正当日俄战争的时候，关于战事的画片自然也就比较的多了，我在这一个讲堂中，便须常常随喜我那同学们的拍手和喝采。有一回，我竟在画片上忽然会见我久违的许多中国人了，一个绑在中间，许多站在左右，一样是强壮的体格，而显出麻木的神情。据解说，则绑着的是替俄国做了军事上的侦探，正要被日军砍下头颅来示众，而围着的便是来赏鉴这示众的盛举的人们。'
      }]
    }
    setTimeout(() => {
      this.data.moreContentNodes.push(moreContent)
      this.setData({
        moreContentNodes: this.data.moreContentNodes
      })
    }, 1000)
  }
})
