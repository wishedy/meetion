const fs = require('fs');
const path = require('path')
const moduleDataPath = path.resolve(__dirname + '/address.json');
const moduleData = fs.readFileSync(moduleDataPath, 'utf-8');
const moduleJson = JSON.parse(moduleData);
let resultData = [];
for(let num = 0;num<moduleJson.length;num++){
    let item = moduleJson[num];
    let json = {};
    json.value = item.name;
    if(item.city.length){
        let seArr = []
        for(let seNum = 0;seNum<item.city.length;seNum++){
            let seJson = {};
            let seItem = item.city[seNum];
            seJson.value = seItem.name;
            /*if(seItem.area.length){
                let thirdArr = [];
                for(let  thirdNum = 0;thirdNum<seItem.area.length;thirdNum++){
                    let thirdJson = {};
                    let thirdItem = seItem.area[thirdNum];
                    thirdJson.value = thirdItem;
                    thirdArr.push(thirdJson);
                }
                seJson.children = thirdArr;

            }*/
            seArr.push(seItem.name);
        }
        json.children = seArr;
    }
    resultData.push(json);
}
fs.writeFile(path.join(__dirname, '..', '/column.json'),JSON.stringify(resultData),function(error){
    if(error){
        throw error;
    }else{
        console.log("数据生成完毕");
        process.exit();
    }
});
