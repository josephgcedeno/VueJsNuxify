<template>
    <!-- mao ning pag list list diria sa vue -->
    <div  v-for="task in tasks" :key="task.id">

        <Task @delete-record="$emit('delete-record',task.id)" :record="task" />

    </div>
</template>

<script>

import Task from "./Task.vue";

 export default {
     name:'Tasks',
     props:{
         tasks:Array
     },
     components:{
         Task
     },
     emits:['delete-record'],
 }

</script>