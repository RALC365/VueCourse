const app = new Vue({
    el: "#app",//aqui le decimos que todo el contenido dentro de app serán gestionados con Vue
    data: {
        titulo: "Hola mundo",
        frutas: [
            {nombre: "Pera", estado: false, cantidad: 10},
            {nombre: "Sandia", estado: false, cantidad: 5},
            {nombre: "Fresa", estado: false, cantidad: 0},
        ],
        nuevaFruta: "",
        total: 0
    },
    methods:{
        agregarFruta () {//Para acceder a un elemento de Data usamos this.
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            })
            this.nuevaFruta=""
        }
    },
    computed:{
        //Aqui lo que haremos es interpolar la función en el HTML
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total += fruta.cantidad;
            }
            return this.total;
        }
    }

});