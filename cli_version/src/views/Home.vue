<template>
   
    <AddTask v-show="showAddTask" @add-record="addRec" />

    <Tasks @delete-record="deleteRec" :tasks="tasks" />
</template>


<script>
    import Tasks from '../components/Tasks.vue';
    import AddTask from '../components/AddTask.vue';


    export default {
        name: 'Home',
        components:{
            AddTask,
            Tasks,
        },
        props:{
            showAddTask:Boolean
        },
        data(){
            return {
                tasks: [],
            }   
        },
        methods:{
            async deleteRec(id){
                if(confirm("Delete really?")){
                    const res = await fetch('api/tasks/'+id,{
                        method:'DELETE'
                    })
                    res.status == 200 ?  this.tasks =  this.tasks.filter((task)=>task.id != id) : console.log("error aw");
                }
            },
            // deleteRec(id){
            //   confirm("Delete really?") ? this.tasks =  this.tasks.filter((task)=>task.id != id) :'';
            // },
            async addRec(data){
                const res = await fetch('api/tasks',{
                    method:'POST',
                    headers:{
                    'Content-type': 'application/json'
                    },
                    body:JSON.stringify(data)

                })
                const new_data = await res.json()

                this.tasks = [...this.tasks,new_data];

            },
            // addRec(data){
            //   this.tasks.push(data)
            //   //this.tasks = [...this.tasks,data]
            // },
            async fetchData(){
                const res = await fetch("api/tasks");
                const data = await res.json();
                return data;

            }
        },
        async created() { // in react likes the hook AND CANNOT DO ES6 FORMMAT HERE
            this.tasks = await this.fetchData();
        }
    }

</script>