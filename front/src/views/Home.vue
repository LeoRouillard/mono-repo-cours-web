<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>fff</p>
    {{ data }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      data: {}
    }
  },
  created () {
    console.log("test")
    axios.get('/api/test')
      .then((response) => {
        this.data = response.data
      })
  }
}
</script>
