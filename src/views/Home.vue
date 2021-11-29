<template>
  <div class="pa-4 content-centered h-full">
    <div class="container">
      <template v-if="loading">
        <div class="block-loading">
          Cargando comic...
        </div>
      </template>
      <template v-else>
        <template v-if="comic">
          <ItemComic :comic="comic"/>
          <div class="block-next text-center">
            <button type="button" @click="onNext" class="btn-next">Siguiente</button>
          </div>
        </template>

        <div v-else class="text-center">
          Comic No encontrado
        </div>
      </template>

    </div>
  </div>
</template>

<script>
import ItemComic from '@/components/ItemComic';

import ComicService from '@/services/Comics.service';

export default {
  name: 'Home',
  components: {
    ItemComic
  },

  data: () => ({
    loading: false,
    comic: null,
  }),

  mounted() {

    this.doGetComic();

  },

  methods: {

    onNext() {
      this.doGetComic();
    },


    async doGetComic() {
      this.loading = true;

      try {
        const randomComicId = this.getRandomId(100, 999);
        const {data} = await ComicService.GetComic(randomComicId);

        this.comic = data;

      } catch (e) {
        alert('Error Server');
      } finally {
        this.loading = false;
      }
    },

    getRandomId(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

  }
}
</script>
<style lang="scss">
.block-loading {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
  background-color: #90a4ae70;
  font-weight: bold;
  font-size: 18px;
  border-radius: 3px;
}

.block-next {
  padding: 1rem;
}

.btn-next {
  min-width: 120px;
  height: 40px;
  text-align: center;
  appearance: none;
  background-color: #2196f3;
  color: #fff;
  border: 0;
  border-radius: 3px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
}
</style>