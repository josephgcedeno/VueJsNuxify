<template>
    <header>
        <h1>{{title}}</h1>
        <Button v-show="homePage" :method="toggleform" :button_name="visibleform ? 'Close':'Add Task'" :color="!visibleform ? 'green':'red'" />
    </header>
</template>

<script>
    import Button from './Button.vue'
    export default {
        name : 'Header',
        props:{
            title:{
                type: String,
                default:"Vue Study"
            },
            visibleform:Boolean
        },
        components:{
            Button
        },
        methods:{
            toggleform(){
                this.$emit('toggle-form')
            }
        },
        computed:{
            homePage(){
                return this.$route.path == "/" 
            }
        }
    }
</script>

<style scoped>

    header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-self: space-between;
    }
    header > h1{
        color: black;
    }
</style>