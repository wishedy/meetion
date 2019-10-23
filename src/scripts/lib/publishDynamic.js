import axios from  'axios';
const cid = localStorage.getItem('customerId');
class publishDynamic{
    constructor(){

    }
    publish(opt){
        axios.post('/api/dynamic/insert', {
            customerId:cid,
            ...opt.data
        })
            .then(function(response) {
                console.log(response);
                if (parseInt(response.data.code, 10) === 200) {
                    opt.success&&opt.success(response.data);
                }else{
                    opt.failed&&opt.failed(response.data);
                }
            })
            .catch(function(error) {
                console.log(error);
                opt.failed&&opt.failed(error);
            });
    }
}
export default new publishDynamic();