<template>
  <div class="text-white m-5">
    <div class="text-base">
      Мы маленькая частная фирма, делаем домашние торты на заказ.
      <br />

      12 лет на рынке!
      <br />
      500+ тортов!
      <br />
      <br />
      Что мы предлогаем:
      <ul class="list-disc mx-4">
        <li>Вы выбираете торт:</li>
        <li class="list-none">
          <ul class="list-circle mx-4">
            <li>с любой начинкой</li>
            <li>с любым внешним видом</li>
            <li>с любым оформлением</li>
            <li>любого размера</li>
          </ul>
        </li>
        <li>Бесплатная доставка по Кишиневу</li>
        <li>Выполнение заказа за 1-2 дня</li>
      </ul>
      <br />
      Наша команда:
      <br />
      <!-- Дима -->
      <div class="flex w-full pb-2 pt-3">
        <img
          class="w-1/2 rounded-full"
          src="@/assets/img/team/dima.png"
          alt=""
        />
        <div class="flex flex-col w-1/2 justify-center items-center ">
          <p class="text-center">Дима, {{ dimaYears }}</p>
          <p class="text-center">
            Генеральный директор и основатель
            <br />
            «Stortik»
          </p>
        </div>
      </div>
      <!-- Света -->
      <div class="flex w-full py-2">
        <img
          class="w-1/2 rounded-full"
          src="@/assets/img/team/sveta.png"
          alt=""
        />
        <div class="flex flex-col w-1/2 justify-center items-center ">
          <p class="text-center">Светлана, {{ svetaYears }}</p>
          <p class="text-center">
            Делает торты
          </p>
        </div>
      </div>

      <!-- Максим -->
      <div class="flex w-full py-2">
        <img
          class="w-1/2 rounded-full"
          src="@/assets/img/team/maxim.png"
          alt=""
        />
        <div class="flex flex-col w-1/2 justify-center items-center ">
          <p class="text-center">Максим, {{ maximYears }}</p>
          <p class="text-center">
            Развлекает
          </p>
        </div>
      </div>

      <!-- Иля -->
      <div class="flex w-full py-2">
        <img
          class="w-1/2 rounded-full"
          src="@/assets/img/team/ilia.png"
          alt=""
        />
        <div class="flex flex-col w-1/2 justify-center items-center ">
          <p class="text-center">Илья, {{ iliaYears }}</p>
          <p class="text-center">
            Главный дегустатор
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data: () => ({
    dimaYears: moment().diff('1999-09-14', 'years', false),
    svetaYears: moment().diff('1977-03-08', 'years', false),
    maximYears: moment().diff('2014-08-15', 'years', false),
    iliaYears: moment().diff('2004-03-24', 'years', false),
  }),
}
</script>

<style scoped></style>
