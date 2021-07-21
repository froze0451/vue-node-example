<template>
  <div id="app">
    <Posts />
  </div>
</template>

<script>
import LikeLogo from '../src/assets/Vector.svg'
import Posts from './components/Posts'

export default {
  name: 'App',
  components: {
    LikeLogo,
    Posts,
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;1,400&display=swap');

$fs12: 12px;
$fs13: 13px;
$fs15: 15px;
$fs18: 18px;
$bodyclr: #f4f4f4;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 60px 10px;
  font-family: 'Ubuntu', sans-serif;
  background: $bodyclr;
  display: flex;
  justify-content: center;
}

#app {
  font-family: Ubuntu, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
