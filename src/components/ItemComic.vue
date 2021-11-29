<template>
  <div class="item-comic">
    <h2 class="item-comic__title">{{ comic.title }}</h2>
    <div class="item-comic__picture">
      <img
          :src="comic.img"
          :alt="comic.title"/>
    </div>
    <div class="text-center">
      <VRating v-model="rating"/>
    </div>
  </div>
</template>

<script>
import VRating from '@/components/VRating';

export default {
  name: "ItemComic",

  props: {
    comic: {
      type: Object,
      required: true,
    }
  },

  components: {
    VRating
  },

  data: () => ({
    rating: null
  })
}
</script>

<style scoped lang="scss">
.item-comic {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #FFF;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  &__title {
    text-align: center;
    font-size: 42px;
  }

  &__picture {
    margin-top: 2rem;
    margin-bottom: 2rem;

    img {
      max-height: 500px;
    }
  }
}
</style>