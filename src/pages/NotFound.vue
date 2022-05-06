<template>
  <div class="not-found">
    <h1 class="not-found">Страница не найдена:( <br /></h1>
    <h3 class="not-found">
      Но не отчаивайтесь, возможно она находится в разработке!
    </h3>
    <div class="btn">
      <my-button @click="$router.push('/main')">вернуться на главную</my-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.not-found {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  color: white;
}
.btn {
  display: flex;
  justify-content: center;
}
</style>