<template>
    <footer>
        <p>Copyright &copy; 2022</p>
        <router-link to="/about">About</router-link>
    </footer>
</template>

<script>

export default {
    name:"Footer",

}

</script>

<style>
    a{
        text-decoration: none;
        color: green;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    footer{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>