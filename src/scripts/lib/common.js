// 公共脚本
class Common {
    constructor(){
      let _this = this;
      _this.jumpUrl = _this.jumpUrl.bind(this);
        _this.checkInvalid = _this.checkInvalid.bind(this);
        _this.getQueryString = _this.getQueryString.bind(this);
        _this.jumpUrl = _this.jumpUrl.bind(this);
        _this.nullString = _this.nullString.bind(this);
    }
    jumpUrl(url){
        if(window.location.href.indexOf("dist")>-1){
            //上线后的跳转路径
            window.location.href = '/dist'+url;
        }else{
            window.location.href = url;
        }
    }
    nullString(val){
        let _this = this;
        if(_this.checkInvalid(val)){
            return '';
        }else{
            return val;
        }
    }
    checkInvalid(val){
        if(((typeof val =='string')&&(val.length==0))||(val==undefined)||(val=='undefined')||(val=='null')||(typeof val=='undefined')||(typeof val=='null')||(val==null)){
            return true;
        }else{
            return false;
        }
    }
    getQueryString(name) {
        if (!name) {
            return false;
        }

        var value = '';
        var paramStr = window.location.search ? window.location.search.substr(1) : '';

        if (paramStr) {
            paramStr.split('&').forEach(function (param) {
                var arr = param.split('=');
                if (arr[0] == name) {
                    value = arr[1];
                }
            });
        }

        return value;
    }

}
export default  new Common();