//声明构造函数
function Promise (executor) {
  //resolve
  function resolve(data) {
    
  }

  //reject
  function reject(data) {
    
  }

  //同步调用 执行器函数
  executor(reject, reject);
}

//添加 then 方法
Promise.prototype.then = function (onResolved, onRejected) {

}
