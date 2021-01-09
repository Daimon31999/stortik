<template>
  <div>
    <div class="p-5 lg:px-44 flex flex-col bg-white w-full h-auto">
      <!-- logo && info --- start -->
      <div
        class="flex top-0 right-0 w-full flex-row items-center justify-between"
      >
        <router-link to="/" class="focus:outline-none active:outline-none">
          <img
            class="h-8 xs:h-10 sm:h-14"
            src="@/assets/img/stortic_logo.png"
            alt="stortik logo"
          />
        </router-link>
        <div
          class="flex flex-col text-right text-xs xs:text-sm sm:text-base mg:text-lg"
        >
          <span class="text-pink-700">069-21-08-89</span>
          <span>stortik@gmail.com</span>
        </div>
      </div>
      <!-- logo && info --- end -->
      <!-- links --- start -->
      <div class="w-full flex justify-center pt-5 pb-2">
        <nav class="text-sm xs:text-base sm:text-lg mg:text-xl">
          <router-link to="/cakes" class="">
            <button
              class="p-2 hover:text-pink-700 outline-none focus:outline-none active:outline-none"
              @click="handleBestClick"
            >
              Лучшие
            </button>
            <button
              class="p-2 hover:text-pink-700 outline-none focus:outline-none active:outline-none"
              @click="handleAllClick"
            >
              Все
            </button>
          </router-link>
          <router-link to="/about" class="">
            <button
              class="p-2 hover:text-pink-700 outline-none focus:outline-none active:outline-none"
            >
              О нас
            </button>
          </router-link>
        </nav>
      </div>
      <!-- links --- end -->
      <!-- social --- start -->
      <div class="w-full flex justify-center p-2">
        <!-- Facebook -->
        <a
          href="https://www.facebook.com/umanskaya.svetlana"
          target="_blank"
          rel="noopener noreferrer"
          class=""
        >
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 167.657 167.657"
            style="enable-background:new 0 0 167.657 167.657;"
            xml:space="preserve"
          >
            <g>
              <path
                d="M83.829,0.349C37.532,0.349,0,37.881,0,84.178c0,41.523,30.222,75.911,69.848,82.57v-65.081H49.626
		v-23.42h20.222V60.978c0-20.037,12.238-30.956,30.115-30.956c8.562,0,15.92,0.638,18.056,0.919v20.944l-12.399,0.006
		c-9.72,0-11.594,4.618-11.594,11.397v14.947h23.193l-3.025,23.42H94.026v65.653c41.476-5.048,73.631-40.312,73.631-83.154
		C167.657,37.881,130.125,0.349,83.829,0.349z"
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </a>

        <!-- OK -->
        <a
          href="https://ok.ru/profile/355963848624"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="30px"
            height="30px"
            viewBox="0 0 97.75 97.75"
            style="enable-background:new 0 0 97.75 97.75;"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M48.921,40.507c4.667-0.017,8.384-3.766,8.367-8.443c-0.017-4.679-3.742-8.402-8.411-8.406
			c-4.708-0.005-8.468,3.787-8.432,8.508C40.48,36.826,44.239,40.524,48.921,40.507z"
                />
                <path
                  d="M48.875,0C21.882,0,0,21.883,0,48.875S21.882,97.75,48.875,97.75S97.75,75.867,97.75,48.875S75.868,0,48.875,0z
M48.945,14.863c9.52,0.026,17.161,7.813,17.112,17.438c-0.048,9.403-7.814,17.024-17.318,16.992
			c-9.407-0.032-17.122-7.831-17.066-17.253C31.726,22.515,39.445,14.837,48.945,14.863z M68.227,56.057
			c-2.105,2.161-4.639,3.725-7.453,4.816c-2.66,1.031-5.575,1.55-8.461,1.896c0.437,0.474,0.642,0.707,0.914,0.979
			c3.916,3.937,7.851,7.854,11.754,11.802c1.33,1.346,1.607,3.014,0.875,4.577c-0.799,1.71-2.592,2.834-4.351,2.713
			c-1.114-0.077-1.983-0.63-2.754-1.407c-2.956-2.974-5.968-5.895-8.862-8.925c-0.845-0.882-1.249-0.714-1.994,0.052
			c-2.973,3.062-5.995,6.075-9.034,9.072c-1.365,1.346-2.989,1.59-4.573,0.82c-1.683-0.814-2.753-2.533-2.671-4.262
			c0.058-1.166,0.632-2.06,1.434-2.858c3.877-3.869,7.742-7.75,11.608-11.628c0.257-0.257,0.495-0.53,0.868-0.93
			c-5.273-0.551-10.028-1.849-14.099-5.032c-0.506-0.396-1.027-0.778-1.487-1.222c-1.783-1.711-1.962-3.672-0.553-5.69
			c1.207-1.728,3.231-2.19,5.336-1.197c0.408,0.191,0.796,0.433,1.168,0.689c7.586,5.213,18.008,5.356,25.624,0.233
			c0.754-0.576,1.561-1.05,2.496-1.289c1.816-0.468,3.512,0.201,4.486,1.791C69.613,52.874,69.6,54.646,68.227,56.057z"
                />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </a>
      </div>
      <!-- social --- end -->
    </div>
    <div
      class="p-5 lg:px-44 py-1 flex-col bg-white w-full h-auto z-10"
      :class="getClass()"
    >
      <!-- logo && info --- start -->
      <div
        class="flex top-0 right-0 w-full flex-row items-center justify-between"
      >
        <router-link to="/" class="focus:outline-none active:outline-none">
          <img
            class="h-10"
            src="@/assets/img/stortic_logo.png"
            alt="stortik logo"
          />
        </router-link>
        <div class="flex flex-col text-right text-xs">
          <span class="text-pink-700">069-21-08-89</span>
          <span>stortik@gmail.com</span>
        </div>
      </div>
      <!-- logo && info --- end -->
      <!-- links --- start -->
      <div class="w-full flex justify-center">
        <nav class="text-sm xs:text-base md:text-xl">
          <router-link
            to="/cakes"
            class="focus:outline-none active:outline-none"
          >
            <button
              class="p-2 hover:text-pink-700 outline-none focus:outline-none active:outline-none"
              @click="handleBestClick"
            >
              Лучшие
            </button>
            <button
              class="p-2 hover:text-pink-700 outline-none focus:outline-none active:outline-none"
              @click="handleAllClick"
            >
              Все
            </button>
          </router-link>
          <router-link
            to="/about"
            class="focus:outline-none active:outline-none"
          >
            <button
              class="p-2 hover:text-pink-700 outline-none focus:outline-none active:outline-none"
            >
              О нас
            </button>
          </router-link>
        </nav>
      </div>
      <!-- links --- end -->
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Header',
  computed: mapState(['all', 'best', 'scrollPosition']),
  methods: {
    getClass() {
      return this.scrollPosition > 210 ? 'flex fixed top-0 right-0' : 'hidden'
    },
    handleAllClick() {
      this.$store.dispatch('goToAll')
    },
    handleBestClick() {
      this.$store.dispatch('goToBest')
    },
    ...mapActions(['goToAll', 'goToBest']),
  },
  props: {},
}
</script>

<style scoped>
svg {
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 0.4rem;
  margin-left: 0.4rem;
}
svg:hover {
  fill: #9f124c;
}
</style>
