<template>
  <div class="v-rating">
    <template v-for="rating in ratings">
      <span :class="['icon-star material-icons md-36', {'star-select': rating <= value}]"
            :key="rating"
            @click="onRank(rating)">star</span>
    </template>

  </div>
</template>

<script>
export default {
  name: "VRating",

  props: ['value'],

  data: () => ({
    ratings: [1, 2, 3, 4, 5],
  }),


  methods: {
    onRank(value) {
      this.$emit('input', value);
    },

  }
}
</script>
<style lang="scss">
.v-rating .icon-star {
  cursor: pointer;
  color: #727272;
  display: inline-block;
  vertical-align: middle;
}

.icon-star.star-select {
  color: #f4bd18;
}
</style>