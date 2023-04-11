//导入 express
const express = require('express');

//创建实例对象
const app = express();

//创建路由规则
app.get('/server', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('HELLO AJAX GET');
});
//all可以接收任意类型的请求
app.all('/server', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.send('HELLO AJAX POST');
});

app.all('/json-server', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const data = {
    name: 'xiaokang'
  };

  //对对象字符串进行转换
  let str = JSON.stringify(data);
  //设置响应体
  res.send(str);

  res.send('HELLO AJAX JSON');
});


app.get('/ie', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.send('HELLO AJAX IE-2');
});

app.get('/delay', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Headers', '*');
  setTimeout(() => {
    res.send('延时响应');
  }, 3000);

});

app.all('/jquery-server', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  const data = {
    name: '小康'
  };
  res.send(JSON.stringify(data));
});

app.all('/axios-server', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  const data = {
    name: '小康'
  };
  res.send(JSON.stringify(data));
});

//fetch
app.all('/fetch-server', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  const data = {
    name: '小康'
  };
  res.send(JSON.stringify(data));

});

//jsonp
app.all('/jsonp-server', (req, res) => {

  const data = {
    name: '小康-jsonp'
  };
  let str = JSON.stringify(data);
  // //返回结果
  res.end(`handle(${str})`);

});


//原生jsonp
app.all('/check-username', (req, res) => {

  const data = {
    exist: 1,
    msg: '用户名已经存在'
  };
  let str = JSON.stringify(data);
  // //返回结果
  res.end(`handle(${str})`);
});

//监听端口
app.listen(8000, () => {
  console.log('服务已经启动, 8000端口正在运行在……');
});