// Istruzioni:
// Genera 10 mail tramite api e stampale in una lista


let app = new Vue ({
    el: '#app',
    data: {
        list: []
    },
    mounted(){
        const _self = this;
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(function(response){
                // console.log(response.data.response);
                randomEmail = response.data.response;
                _self.list.push(randomEmail)
            });
        }
    }
});