<template>
  <div>
    <h1>О проекте:</h1>
    <div class="about_desc">
      Данный проект был создан в качестве портфолио, <br />
      а также для практики навыков работы в VUE3
    </div>
    <div class="about_desc2">
      <ul>
        Реализованы следующие механизмы:
        <li>Проект разбит на отдельные компоненты</li>
        <li>Пагинация</li>
        <li>Бесконечный скролл</li>
        <li>
          Динамическая навигация <br />(роутинг с динамическими параметрами)
        </li>
        <li>Модальные окна</li>
        <li>Сортировка</li>
        <li>Плавная смена страниц (посредством transition vue)</li>
        <li>Динамически генерируемый header</li>
        <li>Загрузка данных с сервера <br>(фетч альбомов, картинок, комментариев)</li>
      </ul>
    </div>
    <div class="about_desc">
      Автор проекта: Сотников Иван <br />
      <div class="about_desc"></div>
      Ссылка на Github
      <a target="_blank" href="https://github.com/Ivan-Sotnikov"
        >github.com/Ivan-Sotnikov
      </a>
      <br />
      Почта: v.sotnikov95@mail.ru <br />
      Telegram:
      <a target="_blank" href="https://t.me/Sotnikov_Ivan">@Sotnikov_Ivan</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about_desc {
  margin: 50px;
  text-align: center;
  line-height: 1.5em;
}
.about_desc a {
  color: antiquewhite;
}
h1 {
  text-align: center;
}
.about_desc2 {
  display: flex;
  justify-content: center;
}
.about_desc2 li {
  padding: 10px;
}
</style>