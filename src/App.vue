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

// @media (min-width: 1920px) {
//   body {
//     margin: 60px auto;
//   }

//   .posts {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr 1fr;
//   }
// }

// @media (min-width: 1470px) and (max-width: 1919px) {
//   .posts {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//   }
// }

// @media (min-width: 991px) and (max-width: 1469px) {
//   .posts {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//   }
// }

// @media (max-width: 990px) {
//   .posts {
//     display: grid;
//     grid-template-columns: 1fr;
//   }
// }

// @media (max-width: 510px) {
//   body {
//     margin: 60px 10px;
//   }
//   .post {
//     width: 300px;
//     height: 300px;
//     font-size: $fs12;
//   }

//   .post__image {
//     width: 300px;
//     height: 175px;
//     margin-top: 0;
//     border-radius: 4px 4px 0 0;
//   }

//   .post__title {
//     font-size: $fs13;
//     margin-top: 10px;
//     margin-bottom: 5px;
//   }

//   .post__info {
//     font-size: $fs12;
//     line-height: 14px;
//   }

//   .post__tag {
//     top: 135px;
//     left: 10px;
//     font-size: $fs12;
//   }

//   .post__footer {
//     margin-top: 10px;
//   }
// }
</style>
