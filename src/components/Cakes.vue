<template>
  <div class="text-white p-5">
    <h1 ref="best" class="w-full text-4xl text-center my-10">
      Лучшие
    </h1>
    {{ best ? openSlide('best') : null }}
    <img
      class="my-4"
      v-for="cake in bestCakes"
      :key="cake"
      :src="getBestImgUrl(cake)"
    />

    <h1 ref="all" class="w-full text-4xl text-center my-10">
      Все
    </h1>
    {{ all ? openSlide('all') : null }}
    <img
      class="my-4"
      v-for="cake in cakes"
      :key="cake"
      :src="getAllImgUrl(cake)"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import cakes from './../cakesArr'
import bestCakes from './../bestCakesArr'
console.log('cakes', cakes)
export default {
  data: () => ({
    cakes,
    bestCakes,
  }),
  computed: mapState(['all', 'best']),
  methods: {
    openSlide(element) {
      // Получение ссылки на элемент
      let slide = this.$refs[element]
      if (slide) {
        // Определение расстояния от начала страницы до нужного элемента
        let top = window.scrollY + slide.getBoundingClientRect().y
        // Перемотка
        // window.scrollTo(0, top)
        window.scrollTo({
          top: top,
          behavior: 'smooth',
        })

        console.log('openSlide')
      }
    },

    getBestImgUrl(img) {
      var images = require.context('../assets/img/best_cakes/', false, /\.jpg$/)
      return images('./' + img)
    },
    getAllImgUrl(img) {
      var images = require.context('../assets/img/cakes/', false, /\.jpg$/)
      return images('./' + img)
    },
    ...mapActions(['goToAll', 'goToBest']),
  },
}
</script>

<style scoped></style>
