function Promise(executor) {
  this.PromiseState = "pending"
  this.PromiseResult = null

  const self = this

  // const self_this = this

  function resolve(data) {
    self.PromiseState = "fulfilled"

    self.PromiseResult = data
  }

  function reject(data) {
    self.PromiseState = "rejected"
    self.PromiseResult = data

  }


  executor(resolve, reject)
}

//添加then方法
Promise.prototype.then = function (onResolved, onReject) {

}