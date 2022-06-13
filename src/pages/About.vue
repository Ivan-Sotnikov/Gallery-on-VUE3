<template>
  <div class="text-center m-3">
    <h1>О проекте:</h1>
    <div class="p-4">
      Данный проект был создан в качестве портфолио, <br />
      а также для практики навыков работы в VUE3
    </div>
    <div class="flex justify-center">
      <ul class="text-left p-4 list-disc">
        <div class="mb-4">Реализованы следующие механизмы:</div>
        <li class="ml-4">Проект разбит на отдельные компоненты</li>
        <li class="ml-4">Пагинация</li>
        <li class="ml-4">Бесконечный скролл</li>
        <li class="ml-4">
          Динамическая навигация <br />(роутинг с динамическими параметрами)
        </li>
        <li class="ml-4">Модальные окна</li>
        <li class="ml-4">Сортировка контента</li>
        <li class="ml-4">Плавная смена страниц (посредством transition vue)</li>
        <li class="ml-4">Динамически генерируемое меню в header</li>
        <li class="ml-4">
          Загрузка данных с сервера <br />(фетч альбомов, картинок,
          комментариев)
        </li>
        <li class="ml-4">
          Вся стилизация написана с ипользованием <br />
          фреймворка Tailwindcss
        </li>
        <li class="ml-4">Адаптивная верстка для различных экранов</li>
      </ul>
    </div>
    <div class="mt-4">
      Автор проекта: Сотников Иван <br />
      <div class=""></div>
      Ссылка на Github:
      <a
        class="text-blue-300 hover:text-orange-600 hover:cursor-pointer"
        target="_blank"
        href="https://github.com/Ivan-Sotnikov"
        >github.com/Ivan-Sotnikov
      </a>
      <br />
      Почта:
      <address
        class="text-blue-300 hover:text-orange-600 inline text hover:cursor-pointer"
      >
        <a target="_blank" href="mailto:v.sotnikov95@mail.ru"
          >v.sotnikov95@mail.ru</a
        >
      </address>
      <br />
      Telegram:
      <a
        class="text-blue-300 hover:text-orange-600 hover:cursor-pointer"
        target="_blank"
        href="https://t.me/Sotnikov_Ivan"
        >@Sotnikov_Ivan</a
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
