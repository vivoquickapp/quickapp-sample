Component({
  data: {
    name: 'life-comp-2',
    counter: 1
  },
  lifetimes: {
    created() {
      console.log(`life-cycle-test: ${this.data.name} created`)
    },
    attached() {
      console.log(`life-cycle-test: ${this.data.name} attached`)
    },
    ready() {
      console.log(`life-cycle-test: ${this.data.name} ready`)
    },
    moved() {
      console.log(`life-cycle-test: ${this.data.name} moved`)
    },
    detached() {
      console.log(`life-cycle-test: ${this.data.name} detached`)
    },
    error() {
      console.log(`life-cycle-test: ${this.data.name} error`)
    }
  },
  pageLifetimes: {
    show() {
      console.log(`life-cycle-test: ${this.data.name} page show`)
    },
    hide() {
      console.log(`life-cycle-test: ${this.data.name} page hide`)
    }
  },
  methods: {
    doAction() {
      this.setData({
        counter: this.data.counter + 1
      })
    }
  }
})
