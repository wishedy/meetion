var fs = require('fs');
var path = require('path');
var moduleDataPath = path.resolve(__dirname+'/modules.json');
var moduleData = fs.readFileSync(moduleDataPath,'utf-8');
var moduleJson = JSON.parse(moduleData);
var formatData = ()=>{
  var resultList = [];
  for(var keyName in moduleJson){
      var json = {};
      var dataItem = moduleJson[keyName];
      if(dataItem.author){
           json = {
              page: keyName,
              title: dataItem.title
          };
           resultList.push(json);
      }else{
          for(var innerKey in moduleJson[keyName]){
              var innerItem = moduleJson[keyName][innerKey];
               json = {
                  page: innerKey,
                  title: innerItem.title,
                  dir:keyName
              };
              resultList.push(json);
          }
      }
  }
  return resultList;
};
module.exports = {
  HTMLDirs: formatData(),
  cssPublicPath: '../',
  imgOutputPath: 'img/',
  fontOutputPath: 'font',
  cssOutputPath: './css/styles.css',
  devServerOutputPath: '../dist',
};
