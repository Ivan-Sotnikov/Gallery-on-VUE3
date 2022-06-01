<template>
  <div class="relative max-w-sm m-auto lg:border-2 lg:rounded-xl lg:p-2">
    <div
      v-if="errors.length !== 0"
      class="bg-red-400 p-2 absolute rounded-lg w-full left-0 top-0 text-center shadow-red-600"
    >
      <div v-for="error in errors" :key="error">{{ error }}</div>
    </div>
    <div class="mt-10" v-if="existingUser">
      <form id="login" action="server.adress" method="post">
        <div class="text-center text-lg">Имя пользователя</div>
        <input
          id="userLogin"
          class="mt-3 border-2 rounded-lg w-full p-2"
          type="text"
          placeholder="Введите ваш логин..."
          v-model="login"
        />
        <div class="text-center mt-5 text-lg">Пароль</div>
        <input
          id="userPass"
          class="mt-3 border-2 rounded-lg w-full p-2"
          type="password"
          placeholder="Введите пароль..."
          v-model="pass"
        />
        <div class="flex justify-center">
          <my-button class="mt-10" @click.prevent="existUser">Войти</my-button>
        </div>
      </form>
      <div class="flex justify-center">
        <my-button class="m-5" @click="newUser">Нет аккаунта?</my-button>
      </div>
    </div>
    <div class="" v-else>
      <form id="newUser" action="server.adress" method="post">
        <div class="text-center mt-5 text-lg">Логин</div>
        <input
          class="mt-3 border-2 rounded-lg w-full p-2"
          placeholder="Придумайте логин"
          type="text"
          id="newUserLogin"
          v-model="username"
        />
        <div class="text-center mt-5 text-lg">Email</div>
        <input
          class="mt-3 border-2 rounded-lg w-full p-2"
          placeholder="Введите ваш email"
          type="text"
          id="email"
          v-model="email"
        />
        <div class="text-center mt-5 text-lg">Придумайте пароль</div>
        <input
          class="mt-3 border-2 rounded-lg w-full p-2"
          placeholder="Новый пароль"
          type="password"
          id="newPass"
          v-model="newPass"
        />
        <div class="flex justify-center">
          <my-button class="mt-10" @click.prevent="regUser"
            >Зарегистрироваться</my-button
          >
        </div>
      </form>
      <div class="flex justify-center">
        <my-button class="m-5" @click="newUser">Есть аккаунт?</my-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-login",
  data() {
    return {
      existingUser: true,
      passVisibility: false,
      login: "",
      pass: "",
      username: "",
      email: "",
      newPass: "",
      errors: [],
    };
  },
  methods: {
    newUser() {
      this.existingUser = !this.existingUser;
    },

    existUser() {
      if (this.pass !== "" && this.login !== "") {
        this.errors.push(
          "К сожалению, пользователь не найден.",
          "Проверьте правильность ввода имени и пароля"
        );
      }
      if (this.login === "") this.errors.push("Вы не ввели имя пользователя");
      if (this.pass === "") this.errors.push("Вы не ввели пароль");
      setTimeout(() => (this.errors = []), 2000);
      return;
    },

    regUser() {
      if (
        this.username !== "" &&
        this.email !== "" &&
        this.email.indexOf("@") !== -1
      ) {
        this.errors.push(
          "Данный Email уже используется",
          "Воспользуйтесь другим либо авторизуйтесь"
        );
      }
      if (this.username === "")
        this.errors.push("Вы не ввели имя пользователя");
      if (this.email === "") this.errors.push("Вы не ввели Email");
      else {
        if (this.email.indexOf("@") == -1) {
          this.errors.push("Прорверьте правильность Email");
        }
      }
      if (this.newPass === "") this.errors.push("Вы не ввели пароль");
      setTimeout(() => (this.errors = []), 2000);
      return;
    },
  },
};
</script>

<style scoped>
/* В данном модуле функционал отправки данных на сервер для аутентификации не подключался, "серьезная" валидация формы не предусмотрена */
</style>
