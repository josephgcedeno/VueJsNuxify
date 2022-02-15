<template>
    <button @click="method" :style="{background:`${color} !important`}" class="btn">{{button_name}}</button>
</template>

<script>
    export default {
        name:'Button',
        props:{
            button_name:{
                default:"Add task" 
            },
            color:String,
            method: {
                type:Function
            }
        },
        methods:{
            onClick: ()=>{
                console.log("joseph");
            }
        }
    }
</script>