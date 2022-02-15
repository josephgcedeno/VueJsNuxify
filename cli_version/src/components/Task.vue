<template>
    <div @dblclick="doubleclick" :class="[ record.reminder && 'reminder' ,'background' ]">
        <h5>{{record.id}}</h5>
        <p>{{record.text}}</p>
        <i>{{record.day}}</i>
        <b>{{record.reminder ? 'Reminder enable' : 'Reminder disabled' }}</b>
        <Button button_name="delete tasking" :method="deleteRec" :color="record.reminder ? 'black' : 'red'"/>

    </div>
</template>

<script>

import Button from "./Button.vue";

export default {
    name:"Task",
    components:{
        Button
    },
    props:{
        record:Object
    },
    methods:{
        deleteRec(){
           const id = this.record.id;
           this.$emit('delete-record',id) //change record to parent component mao ning hasol nga way kay mag agi pa sa parent parent yikes mag saka saka pa
        },
        doubleclick(){
            alert("You've double clicked")
        }
    }
}
</script>

<style>
  .background{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      background-color: #eee;
      margin-top: 3%;
      padding: 5%;
   
  }
  .reminder{
      border-left: 10px solid green;
  }
</style>