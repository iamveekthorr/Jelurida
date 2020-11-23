<template>
  <!-- <user-login></user-login> -->
   <Header></Header>
   
    <router-view></router-view>
</template>

<script>
import Header from '../components/nav/TheHeader'

export default {
    components: {
        Header
    }
    
}
</script>