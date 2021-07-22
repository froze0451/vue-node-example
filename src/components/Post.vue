<template>
  <div class="post">
    <div class="post__image">
      <img :src="getImage" />
      <div class="post__image-shade"></div>
    </div>
    <div class="post__title">{{ name }}</div>
    <div class="post__info">{{ description }}</div>
    <div class="post__tag">#{{ tag }}</div>
    <div class="post__footer">
      <p class="post__date">{{ date }}</p>
      <div class="post__likes">
        <LikeLogo class="post__like" @click="addLike(id, like)" />
        <p class="post__likes-amount">{{ like }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import LikeLogo from '../assets/Vector.svg'

export default {
  data() {
    return {}
  },
  props: [
    'id',
    'name',
    'tag',
    'description',
    'date',
    'like',
    'addLike',
    'getImage',
  ],
  components: { LikeLogo },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;1,400&display=swap');

$fs12: 12px;
$fs13: 13px;
$fs15: 15px;
$fs18: 18px;

$infoclr: #666565;
$dateclr: #909599;
$tagbcg: rgba(141, 190, 80, 0.5);

.post {
  width: 450px;
  height: 450px;
  position: relative;
  margin: 10px;
  background: #ffffff;
  border-radius: 4px;
}

.post__image {
  position: relative;

  img {
    margin-top: 10px;
    width: 430px;
    height: 250px;
  }
}

.post__image-shade {
  position: absolute;
  bottom: 3px;
  left: 10px;
  width: 430px;
  height: 92px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  opacity: 0.5;
}

.post__title {
  margin: 18px;
  font-weight: bold;
  font-size: $fs18;
  text-align: initial;
}

.post__info {
  font-size: $fs15;
  color: $infoclr;
  margin: 28px 18px;
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
  border-radius: 4px;
}

.post__footer {
  display: flex;
  justify-content: space-between;
  margin: 18px 12px 8px 17px;
}

.post__date {
  font-style: italic;
  color: $dateclr;
  font-size: $fs13;
}

.post__likes {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 34px;
  display: flex;
  justify-content: space-between;
}

.post__like {
  cursor: pointer;
}

.post__likes-amount {
  font-family: Arial, sans-serif;
  font-size: $fs12;
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

  .post__image img {
    width: 300px;
    height: 175px;
    margin-top: 0;
    border-radius: 4px 4px 0 0;
  }

  .post__image-shade {
    left: 0;
    width: 300px;
    height: 65px;
  }

  .post__title {
    font-size: $fs13;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .post__info {
    font-size: $fs12;
    margin-top: 10px;
    line-height: 12px;
    margin-bottom: 12px;
  }

  .post__tag {
    top: 135px;
    left: 10px;
    font-size: $fs12;
  }

  .post__footer {
    margin-top: 5px;
  }
}
</style>
