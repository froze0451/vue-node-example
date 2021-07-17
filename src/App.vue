<template>
  <div id="app">
    <div class="posts">
      <div class="post" v-for="post in getData" :key="post.id">
        <img class="post__image" :src="getImage" />
        <p class="post__title">{{ post.name }}</p>
        <p class="post__info">{{ post.description }}</p>
        <p class="post__tag">#{{ post.tag }}</p>
        <div class="post__footer">
          <p class="post__date">{{ post.date }}</p>
          <div class="post__likes">
            <LikeLogo class="post__like" @click="addLike(post.id, post.like)" />
            <p class="post__likes-amount">{{ post.like }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import LikeLogo from '../src/assets/Vector.svg'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'App',
  components: {
    LikeLogo,
  },
  computed: mapGetters(['getData', 'getImage']),
  methods: {
    ...mapActions(['fetchData']),
    ...mapMutations(['updateData']),
    async addLike(id, like) {
      await axios
        .post('http://localhost:5000/', {
          id: id,
          like: like,
        })
        .then(function(response) {
          console.log(response.data)
        })
        .catch(function(error) {
          console.log(error)
        })
      this.fetchData()
    },
  },
  async mounted() {
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

$bodyclr: #e5e5e5;
$infoclr: #666565;
$dateclr: #909599;
$tagbcg: rgba(141, 190, 80, 0.5);

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

.post {
  width: 450px;
  height: 450px;
  position: relative;
  margin: 50px 10px;
  background: #ffffff;
  border-radius: 4px;
}

.post__image {
  width: 430px;
  height: 250px;
  margin-top: 10px;
}

.post__title {
  margin: 21px 18px;
  font-weight: bold;
  font-size: $fs18;
  text-align: initial;
}

.post__info {
  font-size: $fs15;
  color: $infoclr;
  margin: 7px 18px;
  text-align: initial;
  line-height: 22px;
}

.post__tag {
  position: absolute;
  left: 18px;
  top: 217px;
  font-size: $fs15;
  background-color: $tagbcg;
  color: #fff;
  padding: 8px 11px;
}

.post__footer {
  display: flex;
  justify-content: space-between;
  margin: 18px 12px 8px 17px;
}

.post__likes {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.post__like {
  cursor: pointer;
  margin-right: 6px;
}

.post__likes-amount {
  font-family: Arial, sans-serif;
  font-size: $fs12;
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

@media (max-width: 510px) {
  body {
    margin: 60px 10px;
  }
  .post {
    width: 300px;
    height: 300px;
    font-size: $fs12;
  }

  .post__image {
    width: 300px;
    height: 175px;
    margin-top: 0;
    border-radius: 4px 4px 0 0;
  }

  .post__title {
    font-size: $fs13;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  .post__info {
    font-size: $fs12;
    line-height: 14px;
  }

  .post__tag {
    top: 135px;
    left: 10px;
    font-size: $fs12;
  }

  .post__footer {
    margin-top: 10px;
  }
}
</style>
