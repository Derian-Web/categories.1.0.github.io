const app = new Vue({
    el: '#app',
    data:{
       titulo: 'GYm con Vue',
       tareas: [],
       nuevaTarea: ''
    },
    methods:{
        agregarTarea(){
           this.tareas.push({
               nombre: this.nuevaTarea,
               estado: false
           });
            this.nuevaTarea = '';
        },
        editarTarea(index){
          this.tareas[index].estado = true
        },
        eliminar(index){
            this.tareas.splice(index, 1);
        }
    }
})