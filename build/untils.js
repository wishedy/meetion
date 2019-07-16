var path = require('path')
var fs = require('fs');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
exports.resolve =function(dir) {
  return path.join(__dirname, '..', dir)
};
exports.fsExistsSync = function(path) {
  try{
    fs.accessSync(path,fs.F_OK);
  }catch(e){
    return false;
  }
  return true;
};
