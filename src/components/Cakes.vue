<template>
  <div class="text-white p-5 lg:px-44">
    <h1 ref="best" class="w-full text-4xl text-center my-10">
      Лучшие
    </h1>
    {{ best ? openSlide('best') : null }}
    <ul>
      <li v-for="(cake, inx) in bestCakes" :key="cake + inx">
        <img
          class="my-4 rounded"
          v-lazy="getBestImgUrl(cake)"
          v-if="typeof cake === 'string'"
        />
        <carousel
          v-else
          :autoplay="false"
          :perPage="1"
          :paginationActiveColor="'#fff'"
          :paginationColor="'#C0105C'"
          :paginationPadding="6"
          :paginationSize="12"
          class=""
        >
          <slide v-for="(gallery, index) in cake" :key="gallery + index">
            <img class="rounded my-4" :src="getBestImgUrl(gallery)" alt="" />
          </slide>
        </carousel>
      </li>
    </ul>

    <h1 ref="all" class="w-full text-4xl text-center my-10">
      Все
    </h1>
    {{ all ? openSlide('all') : null }}
    <ul>
      <li v-for="(cake, inx) in cakes" :key="cake + inx">
        <img
          class="my-4 rounded"
          v-lazy="getAllImgUrl(cake)"
          v-if="typeof cake === 'string'"
        />
        <carousel
          v-else
          :autoplay="false"
          :perPage="1"
          :paginationActiveColor="'#fff'"
          :paginationColor="'#C0105C'"
          :paginationPadding="6"
          :paginationSize="12"
          class=""
        >
          <slide v-for="(gallery, index) in cake" :key="gallery + index">
            <img class="rounded my-4" :src="getAllImgUrl(gallery)" alt="" />
          </slide>
        </carousel>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import cakes from './../cakesArr'
import bestCakes from './../bestCakesArr'

export default {
  data: () => ({
    cakes,
    bestCakes,
  }),
  computed: {
    ...mapState(['all', 'best']),
  },
  methods: {
    openSlide(element) {
      // Получение ссылки на элемент
      let slide = this.$refs[element]
      if (slide) {
        // Определение расстояния от начала страницы до нужного элемента
        let top = window.scrollY + slide.getBoundingClientRect().y
        // Перемотка
        window.scrollTo({
          top: top - 100,
          behavior: 'smooth',
        })
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

<style></style>
