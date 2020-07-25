Vue.component('hijo',{
    template://html
    `
    <div class="p-5 bg-success text-white">
        <h4>Componente hijo: {{numero}}</h4>
        <h4>nombre: {{nombre}}</h4>
        <button class="btn btn-danger" @click="numero++">+</button>
    </div>
    `,
    props:['numero'],
    data(){
        return {
            nombre: "Richardson"
        }
    },
    
    mounted(){
        //Para comunicarnos con el padre. Se hace después de que el componente
        //esta montado
        this.$emit('nombreHijo', this.nombre);
    }


})