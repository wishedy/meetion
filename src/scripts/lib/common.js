// 公共脚本
class Common {
    constructor(){
      let _this = this;
      _this.jumpUrl = _this.jumpUrl.bind(this);
        _this.checkInvalid = _this.checkInvalid.bind(this);
    }
    jumpUrl(url){
        if(window.location.href.indexOf("dist")>-1){
            //上线后的跳转路径
            window.location.href = '/dist'+url;
        }else{
            window.location.href = url;
        }
    }
    checkInvalid(val){
        if(((typeof val =='string')&&(val.length==0))||(val==undefined)||(val=='undefined')||(val=='null')||(typeof val=='undefined')||(typeof val=='null')||(val==null)){
            return true;
        }else{
            return false;
        }
    }

}
export default  new Common();