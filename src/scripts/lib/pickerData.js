import areaData from './area.js'
class PickerData {
    constructor(){
        let _this = this;
        _this.getWage = _this.getWage.bind(this);
    }
    getWage(){
        return [
            [
                '6万以下',
                '6万-9万',
                '9万-12万',
                '12万-15万',
                '15万-20万',
                '20万-30万',
                '30万-40万',
                '40万-60万',
                '60万-100万',
                '100万以上'
            ]
        ]
    }
    getCitydata(){
        return areaData;

    }
    getGenderdata(){
        return [
            [
                '女',
                '男'
            ]
        ];

    }
}
export default new PickerData();
