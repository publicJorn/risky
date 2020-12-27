<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <button @click="rollDice">Roll dice</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',

  data () {
    const ws = new WebSocket('ws://localhost:8081')

    // event emmited when connected
    ws.onopen = () => {
      console.log('websocket is connected!!')
    }

    // event emmited when receiving message
    ws.onmessage = (evt) => {
      const { action, data } = JSON.parse(evt.data)
      console.log(action, data)
    }

    return { ws }
  },

  unmounted () {
    this.ws.close()
  },

  methods: {
    rollDice () {
      this.ws.send(JSON.stringify({ action: 'rollDice' }))
    }
  },

  components: {
    HelloWorld
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
