<template>
  <div class="container my-5">
    <div class="authentication-wrapper authentication-basic container-p-y">
      <div class="authentication-inner">
        <!-- Register -->
        <div class="card">
          <div class="card-body">
            <!-- Logo -->
            <div class="app-brand justify-content-center">
              <a href="index.html" class="app-brand-link gap-2">
                <img src="/assets/img/logo-login.png" alt="" />
              </a>
            </div>
            <!-- /Logo -->
            <h4 class="mb-2 text-center">Bienvenido! 👋</h4>
            <p class="mb-4 text-center" style="font-size: 12px">
              Por favor ingresa tus credenciales para entrar al sistema.
            </p>

            <!-- <form
              id="formAuthentication"
              class="mb-3"
              action="index.html"
              method="POST"
            > -->
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                v-model="email"
                type="text"
                class="form-control"
                placeholder="Ingresa tu email"
                :class="{ 'is-invalid': useLoginStore.errors.email }"
                autofocus
              />
              <small v-if="useLoginStore.errors.email" class="text-danger">{{
                useLoginStore.errors.email[0]
              }}</small>
            </div>
            <div class="mb-3 form-password-toggle">
              <div class="d-flex justify-content-between">
                <label class="form-label" for="password">Contraseña</label>
                <a href="#">
                  <small>¿Olvidaste tu contraseña?</small>
                </a>
              </div>
              <div class="input-group input-group-merge">
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                  aria-describedby="password"
                  :class="{ 'is-invalid': useLoginStore.errors.password }"
                />

                <span class="input-group-text cursor-pointer"
                  ><i class="bx bx-hide"></i
                ></span>
              </div>
              <small v-if="useLoginStore.errors.password" class="text-danger">{{
                useLoginStore.errors.password[0]
              }}</small>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="remember-me"
                />
                <label class="form-check-label" for="remember-me">
                  Recuerdame
                </label>
              </div>
            </div>
            <div class="mb-3">
              <button
                class="btn btn-primary d-grid w-100"
                type="submit"
                @click="loged()"
              >
                ENTRAR
              </button>
            </div>
            <!-- </form> -->
          </div>
        </div>
        <!-- /Register -->
        <!--   {{ useLoginStore.errors }} -->
      </div>
    </div>
  </div>
</template>
<script>
import { useLoginStore } from "../../stores/auth/loginStore";
import { mapActions } from "pinia";
export default {
  data() {
    return {
      email: "",
      password: "",
      useLoginStore: useLoginStore(),
    };
  },
  methods: {
    ...mapActions(useLoginStore, ["login"]),
    async loged() {
      await this.login({ email: this.email, password: this.password });
      if (this.useLoginStore.ifLoged) {
        this.$router.push('/home');
      } else {
        this.$router.push({ name: "login" });
      }
    },
  },
};
</script>
<!--  center card in display width width: 350px and responsive--> 
<style  scoped>
.card {
  margin: auto;
  width: 350px;
}
img {
  width: 220px;
  margin-left: 5%;
  margin-top: 5%;
}
</style>