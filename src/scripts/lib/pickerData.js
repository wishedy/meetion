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
        return [
            {
                value: 'A',
                children: [
                    { value: 'A-a' },
                    { value: 'A-b' },
                    { value: 'A-c' }
                ]
            },
            {
                value: 'B',
                children: [
                    { value: 'B-a' },
                    { value: 'B-b' }
                ]
            },
            {
                value: 'C',
                children: [
                    { value: 'C-a' },
                    { value: 'C-b' },
                    { value: 'C-c' },
                    { value: 'C-d' }
                ]
            },
            {
                value: 'D',
                children: [
                    { value: 'D-a' }
                ]
            }
        ]

    }
}
export default new PickerData();
