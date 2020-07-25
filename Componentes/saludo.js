Vue.component('Saludo',{
    template: `
    <div>
        <h1>{{saludo}}</h1>'
        <h3>Jajajaja</h3>
    </div>
    `,
    data(){
        return {
            saludo: "Hola desde el componente"
        }
    }
})