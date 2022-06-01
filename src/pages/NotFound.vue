<template>
  <div class="text-center p-4 md:text-lg lg:text-2xl">
    <div class="p-4">Страница не найдена:(</div>
    <div class="p-4">
      Но не отчаивайтесь, возможно она находится в разработке!
    </div>
    <div class="mt-4">
      <my-button @click="$router.push('/main')">вернуться на главную</my-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
