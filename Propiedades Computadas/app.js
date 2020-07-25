const app = new Vue({
    el:'#app',
    data: {
        mensaje: "Hola soy Richardson",
        contador: 0
    },
    methods:{

    },
    //Estas funciones deben devolver algo
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('');
        },
        color(){
            return {
                'bg-success' : this.contador <= 10,
                'bg-warning' : this.contador > 10 && this.contador < 20,
                'bg-danger' : this.contador >= 20,
            }
        }
    }
})