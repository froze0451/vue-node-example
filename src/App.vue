<template>
  <div id="app">
    <div class="posts">
      <Post
        v-for="post in getData"
        :key="post.id"
        :id="post.id"
        :getImage="getImage"
        :name="post.name"
        :description="post.description"
        :tag="post.tag"
        :date="post.date"
        :like="post.like"
        :addLike="addLike"
      ></Post>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
import Post from './components/Post'

export default {
  name: 'App',
  components: {
    Post,
  },
  computed: mapGetters(['getData', 'getImage']),
  methods: {
    ...mapActions(['fetchData']),
    addLike(id, like) {
      const self = this
      axios
        .post('http://localhost:5000/', {
          id: id,
          like: like,
        })
        .then(function(response) {
          console.log(response.data)
          self.fetchData()
        })
        .catch(function(error) {
          console.log(error)
        })
    },
  },
  created() {
    this.fetchData()
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

@media (min-width: 1920px) {
  body {
    margin: 60px auto;
  }

  .posts {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

@media (min-width: 1470px) and (max-width: 1919px) {
  .posts {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (min-width: 991px) and (max-width: 1469px) {
  .posts {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 990px) {
  .posts {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
