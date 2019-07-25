const fs = require('fs');
const path = require('path')
const moduleDataPath = path.resolve(__dirname + '/modules.json');
const moduleData = fs.readFileSync(moduleDataPath, 'utf-8');
const moduleJson = JSON.parse(moduleData);

const inquirer = require('inquirer');
const _ = require('lodash');
const fuzzy = require('fuzzy');
const shell = require('shelljs');

const FRESH_MODULE_LIST = [];
let module_count = 0;
let formatJson = ()=>{
  for(let keyName in moduleJson){
      if(moduleJson[keyName].author){
          FRESH_MODULE_LIST.push('名称：' + keyName + '丨描述：' + moduleJson[keyName]['des'] + '丨开发者：' + moduleJson[keyName]['author']);
      }else{
          for(let innerKeyName in moduleJson[keyName]){
              FRESH_MODULE_LIST.push('名称：' + innerKeyName + '丨描述：' + moduleJson[keyName][innerKeyName]['des'] + '丨开发者：' + moduleJson[keyName][innerKeyName]['author']);
          }
      }
  }
};
formatJson();
module_count =FRESH_MODULE_LIST.length;

module_list = (answers, input) => {
    input = input || '';
    return new Promise(function(resolve) {
        setTimeout(function() {
            let fuzzyResult = fuzzy.filter(input, FRESH_MODULE_LIST);
            resolve(
                fuzzyResult.map(function(el) {
                    return el.original;
                })
            );
        }, _.random(30, 500));
    });
}

mainAction = () => {
    inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));
    const options = [{
        name: 'exec',
        type: 'autocomplete',
        pageSize: 10,
        message: '请选择要运行的页面模块(共 ' + module_count + ' 个)：',
        source: module_list
    }];

    inquirer.prompt(options).then((answer) => {
        let moduleName = answer.exec.substring(3, answer.exec.split('丨')[0].length);
        shell.exec(`cross-env BUILD_MODE=dev BUILD_MODULE_NAME=${moduleName} webpack-dev-server`
            , (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                console.log(`${stdout}`);
                console.log(`${stderr}`);
            })
    });
}

mainAction();
