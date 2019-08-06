// 公共脚本
class Common {
    constructor(){
      let _this = this;
      _this.jumpUrl = _this.jumpUrl.bind(this);
    }
    jumpUrl(url){
        if(window.location.href.indexOf("dist")>-1){
            //上线后的跳转路径
            window.location.href = '/dist'+url;
        }else{
            window.location.href = url;
        }
    }

}
export default  new Common();