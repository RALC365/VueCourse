Vue.component('hijo',{
    template://html
    `
    <div class="p-5 bg-success text-white">
        <h4>Componente hijo</h4>
        <h5>{{numero}}</h5>
        <button class="btn btn-danger" @click="numero++">+</button>
    </div>
    `,
    props:['numero']



})