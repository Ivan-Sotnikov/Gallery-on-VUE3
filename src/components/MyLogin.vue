<template>
  <div class="modal-login">
    <div v-if="errors.length !== 0" class="modal-error">
      <div v-for="error in errors" :key="error">{{ error }}</div>
    </div>
    <div class="existing-user" v-if="existingUser">
      <form id="login" action="server.adress" method="post">
        <div class="input-header">Имя пользователя</div>
        <input
          id="userLogin"
          class="modal-input"
          type="text"
          placeholder="Введите ваш логин..."
          v-model="login"
        />
        <div class="input-header">Пароль</div>
        <input
          id="userPass"
          class="modal-input"
          type="password"
          placeholder="Введите пароль..."
          v-model="pass"
        />
        <div class="button-pos">
          <my-button type="button" @click.prevent="existUser">Войти</my-button>
        </div>
      </form>
      <div class="button-pos">
        <my-button type="button" @click="newUser">нет аккаунта?</my-button>
      </div>
    </div>
    <div class="new-user" v-else>
      <form id="newUser" action="server.adress" method="post">
        <div class="input-header">Логин</div>
        <input
          class="modal-input"
          placeholder="Придумайте логин"
          type="text"
          id="newUserLogin"
          v-model="username"
        />
        <div class="input-header">Email</div>
        <input
          class="modal-input"
          placeholder="Введите ваш email"
          type="text"
          id="email"
          v-model="email"
        />
        <div class="input-header">Придумайте пароль</div>
        <input
          class="modal-input"
          placeholder="Новый пароль"
          type="password"
          id="newPass"
          v-model="newPass"
        />
        <div class="button-pos">
          <my-button type="submit" @click.prevent="regUser"
            >Зарегестрироваться</my-button
          >
        </div>
      </form>
      <div class="button-pos">
        <my-button type="button" @click="newUser"
          >Уже зарегестрированы?</my-button
        >
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
.modal-login {
  color: black;
  width: 300px;
}
.input-header {
  text-align: center;
  padding: 20px;
  font-weight: bold;
}
.modal-input {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px;
  box-sizing: border-box;
}
.modal-input:focus {
  background-color: #e75e3c0f;
}
.modal-error {
  background-color: rgb(255, 129, 129);
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(255, 129, 129);
  position: absolute;
  padding: 10px;
  text-align: center;
  bottom: calc(100% + 10px);
  left: 0px;
  width: 100%;
}
.button-pos {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

/* В данном модуле функционал отправки данных на сервер для аутентификации не рассматривался. Более "настоящие" валидации форм, а так же реализация синхронизации с сервером не потребует больших трудозатрат */
</style>