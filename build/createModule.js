var fs = require('fs');
var path = require('path');
var utils = require('./untils');
var chalk = require('chalk');
var moduleDataPath = path.resolve(__dirname+'/modules.json');
var moduleData = fs.readFileSync(moduleDataPath,'utf-8');
var moduleJson = JSON.parse(moduleData);
var fs=require("fs");
function readFile(op,tp,cb){
    fs.readFile(op, 'utf-8', function(err, data) {
        if (err) {
            console.log("读取失败");
        } else {
            //console.log(data);
            cb&&cb(data,tp);
            return data;
        }
    });
}

function writeFile(data,tp){
    fs.writeFile(tp,data,function(error){
        //console.log(data);
        if(error){
            throw error;
        }else{
            //console.log("文件已保存");
        }
    });
}
function copyFile(originalPath,targetPath){
    readFile(originalPath,targetPath,writeFile);

}
var createModule = function(options){
    var createPath = options.mdirKeyName;
    var createKeyName = options.mdirKeyName;
    var index = options.index;
    var storeKey = false;
    var routerKey = false;
  if(!(utils.fsExistsSync(utils.resolve('src/pages/'+createKeyName)))){
    fs.mkdirSync(utils.resolve('src/pages/'+createKeyName));
  }
    if(parseInt(index,10)===1){
        storeKey = moduleJson[options.keyName][options.mdirKeyName]['store'];
        routerKey = moduleJson[options.keyName][options.mdirKeyName]['router'];
    }else{
        storeKey = moduleJson[createKeyName]['store'];
        routerKey = moduleJson[createKeyName]['router'];
    }
    var createStoreFile = function(){
        if(!utils.fsExistsSync(utils.resolve('src/pages/'+createPath+"/"+'store'))){
            fs.mkdirSync(utils.resolve('src/pages/'+createPath+"/"+'store'));
            var storeFileName = ["store","mutaions","state","actions","getters"];
            for(var numStroe = 0;numStroe<storeFileName.length;numStroe++){
                copyFile(utils.resolve('src/commModule/store/'+storeFileName[numStroe]+'.js'),utils.resolve('src/pages/'+createPath+"/"+'store/'+storeFileName[numStroe]+'.js'));
            }
        }
    };
    var createRouterFile = function(){
        if(!utils.fsExistsSync(utils.resolve('src/pages/'+createPath+"/"+'router'))){
            fs.mkdirSync(utils.resolve('src/pages/'+createPath+"/"+'router'));
            copyFile(utils.resolve('src/commModule/router/router.config.js'),utils.resolve('src/pages/'+createPath+"/"+'router/router.config.js'));
        }
    };
    if(storeKey&&routerKey){
        copyFile(utils.resolve('src/commModule/mainAll.js'),utils.resolve('src/pages/'+createPath+'/index.js'));
        createRouterFile();
        createStoreFile();
    }else if(storeKey||routerKey){
        if(storeKey){
            createStoreFile();
            copyFile(utils.resolve('src/commModule/mainStore.js'),utils.resolve('src/pages/'+createPath+'/index.js'));
        }
        if(routerKey){
            createRouterFile();
            copyFile(utils.resolve('src/commModule/mainRouter.js'),utils.resolve('src/pages/'+createPath+'/index.js'));
        }

    }else if((!storeKey)&&(!routerKey)){
        copyFile(utils.resolve('src/commModule/default.js'),utils.resolve('src/pages/'+createPath+'/index.js'));
    }
    copyFile(utils.resolve('src/commModule/App.vue'),utils.resolve('src/pages/'+createPath+'/index.vue'));
    fs.mkdirSync(utils.resolve('src/styles/pages/'+createKeyName));
    copyFile(utils.resolve('src/commModule/scssDemo.scss'),utils.resolve('src/styles/pages/'+createKeyName+'/'+createKeyName+'.scss'));
    console.log(chalk.cyan('module创建完成.\n'));
    console.log(chalk.yellow(
        'scss代码输入在:src/styles/pages/'+createKeyName+'/'+createKeyName+'.scss中.\n' +
        'src/pages/'+createPath+'/App.vue中的demo/demo.scss更名为'+createKeyName+'/'+createKeyName+'.scss.\n'+
        '如有疑问请与张恒联系\n'
    ))
};
for(var keyName in moduleJson){
    var index = 0;
        var isDirExist = utils.fsExistsSync(utils.resolve('src/pages/'+keyName));
    if(isDirExist){
        if(moduleJson[keyName]['author']){
            continue;
        }else{
            for(var innerKeyName in moduleJson[keyName]){
                var isInnerDirExist = utils.fsExistsSync(utils.resolve('src/pages/'+innerKeyName));
                if(isInnerDirExist){
                    continue;
                }else{
                    createModule({
                      keyName:keyName,
                      mdirKeyName:innerKeyName,
                      index:moduleJson[keyName][innerKeyName].index
                    })
                    //console.log(keyName+'不存在'+innerKeyName)
                }
            }
        }
    }else{
      console.log(moduleJson[keyName]['author']);
      if(moduleJson[keyName]['author']){
        console.log('逻辑到这里');
        createModule({
          keyName:keyName,
          mdirKeyName:keyName,
          index:moduleJson[keyName].index
        });
      }else{
        for(var innerKeyName in moduleJson[keyName]){
          var isInnerDirExist = utils.fsExistsSync(utils.resolve('src/pages/'+innerKeyName));
          if(isInnerDirExist){
            continue;
          }else{
            createModule({
              keyName:keyName,
              mdirKeyName:innerKeyName,
              index:moduleJson[keyName][innerKeyName].index
            });
            //console.log(keyName+'不存在'+innerKeyName)
          }
        }
      }
        //console.log('不存在'+keyName);
    }
}
