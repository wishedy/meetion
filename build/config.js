var fs = require('fs');
var path = require('path');
var utils = require('./untils');
var chalk = require('chalk');
var moduleDataPath = path.resolve(__dirname+'/modules.json');
var moduleData = fs.readFileSync(moduleDataPath,'utf-8');
var moduleJson = JSON.parse(moduleData);
module.exports = {
  HTMLDirs: [
    {
      page: 'index',
      title: '首页'
    },
    {
      page: 'list',
      title: '列表页',
      dir: 'content' // 支持设置多级目录

    },
    {
      page: 'detail',
      title: '详情页'
    }
  ],
  cssPublicPath: '../',
  imgOutputPath: 'img/',
  fontOutputPath: 'font',
  cssOutputPath: './css/styles.css',
  devServerOutputPath: '../dist',
};
