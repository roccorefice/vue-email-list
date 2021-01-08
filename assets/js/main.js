let app = new Vue ({
    el: '#app',
    data: {
        list: []
    },
    mounted(){
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(function(response){
                // console.log(response.data.response);
                randomEmail = response.data.response;
                this.list.push(randomEmail)
    
            });
        }
    }
});