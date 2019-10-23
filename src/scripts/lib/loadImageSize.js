class LoadImageSize {
    constructor(options){
        console.log(options);
        const _this = this;
        _this.loadCallBack = options.onLoadCallBack;
        _this.imageList = options.imageList;
        _this.loadNum = 0;
        _this.loadData = _this.loadData.bind(_this);

    }
    loadData(){
        const _this = this;
        for(let num = 0;num<_this.imageList.length;num++){
            _this.loadImage(_this.imageList[num]);
        }
    }
    loadImage(item){
        const _this = this;
        const heavyImage = new Image();
        heavyImage.src = item.imageSrc;
        heavyImage.onload = (e) => {
            console.log('width:' + heavyImage.width + ',height:' + heavyImage.height);
            const imgW = heavyImage.width;
            const imgH = heavyImage.height;
            const centerW = document.documentElement.clientWidth || document.body.clientWidth;
            const centerH = document.documentElement.clientHeight || document.body.clientHeight;
            const i = (centerW / centerH - imgW / imgH) > 0 ? 0 : 1;
            var rectWidth, rectHeight = 0;
            if (i === 1)
            {
                // 如果窗口宽不长，高长。以宽为准。
                if (centerW > imgW) {
                    rectWidth = imgW;
                }
                else {
                    rectWidth = centerW;
                }
                rectHeight = rectWidth / (imgW / imgH);
            }
            else if (i === 0) {
                // 如果窗口宽足够长，高不长。以高为准。
                if (centerH > imgH) {
                    rectHeight = imgH;
                }
                else {
                    rectHeight = centerH;
                }
                rectWidth = rectHeight * (imgW / imgH);
            }
            _this.loadNum++;
            const loadOnOff = _this.loadNum===_this.imageList.length;
            _this.loadCallBack(!loadOnOff,loadOnOff,_this.imageList);
            item.styleData = {
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: rectWidth + 'px',
                height: rectHeight + 'px',
                'margin-left': -rectWidth / 2 + 'px',
                'margin-top': -rectHeight / 2 + 'px'
            };

        };
    }
}
export default  LoadImageSize;