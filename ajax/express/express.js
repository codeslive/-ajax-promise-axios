//导入 express
const express = require('express');

//创建实例对象
const app = express();

//创建路由规则
app.get('/server', (req, res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('HELLO AJAX GET');
});
//all可以接收任意类型的请求
app.all('/server', (req, res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.send('HELLO AJAX POST');
});

//监听端口
app.listen(8000, ()=>{
  console.log('服务已经启动, 8000端口正在运行在……');
});