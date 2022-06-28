<template>
  <div class="container-principal">
    <q-page class="column items-center justify-start">
      <div class="row">
        <div class="col-12">
          <h1 class="text-hola">Hola!</h1>
        </div>
        <div class="col-12">
          <h2 class="text-ingresa">Ingresa a treat</h2>
        </div>
      </div>

      <div class="btn-socialMedia">
        <div class="div-btn">
          <q-btn no-caps class="btn-google">
            <span class="spam-img">
              <img class="img-google" src="../assets/google.png" alt="" />
            </span>
            <span> Ingresar con Google</span>
          </q-btn>
        </div>
        <div class="div-btn">
          <q-btn no-caps class="btn-facebook">
            <span class="spam-img">
              <img class="img-google" src="../assets/facebook.png" alt="" />
            </span>
            <span> Ingresar con Facebook</span>
          </q-btn>
        </div>
        <div class="div-btn">
          <q-btn no-caps class="btn-facebook">
            <span class="spam-img">
              <img class="img-google" src="../assets/instagram.png" alt="" />
            </span>
            <span> Ingresar con Facebook</span>
          </q-btn>
        </div>
      </div>
      <div class="column q-mt-lg">
        <div>
          <h1 class="text-ingresa" style="text-align: center">Usuario treat</h1>
        </div>
        <div>
          <q-input
            rounded
            outlined
            v-model="text"
            label="Email"
            class="q-mb-lg"
          />
        </div>
        <div>
          <q-input
            rounded
            outlined
            v-model="text"
            label="Contraseña"
            class="q-mb-lg inputs"
          />
        </div>
        <div>
          <q-btn
            rounded
            size="60px"
            class="q-mt-sm btn-ingresar"
            label="Ingresar"
            text-color="white"
          />
        </div>
        <div class="row justify-center q-mt-lg">
          <p class="text-registro-login">¿Olvidaste tu contraseña?</p>
          <a href="google.com" class="q-ml-sm">Reestablecer</a>
        </div>
        <div class="row justify-center">
          <p class="text-registro-login">¿No tienes cuenta?</p>
          <a href="google.com" class="q-ml-sm">Registrate</a>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginPage",
});
</script>

<style scoped>
.text-ingresa {
  font-size: 23px;
  color: #2e2e2e;
  margin: 0px !important;
  margin-top: -40px !important;
  /* margin-bottom: 50px !important; */
  font-weight: bold;
}

.inputs {
  width: 350px;
}

.btn-socialMedia {
  padding-top: 15px;
  text-align: center;
  font-family: "Comfortaa";
  margin-top: 20px;
  margin-bottom: 20px;
}
.div-btn {
  padding-bottom: 15px;
}
.btn-google {
  border-radius: 22px;
  padding-right: 95px;
  margin-bottom: 15px;
}
.btn-facebook {
  border-radius: 25px;
  padding-right: 85px;
  margin-bottom: 15px;
}
.btn-instagram {
  border-radius: 22px;
  padding-right: 80px;
  margin-bottom: 15px;
}

.spam-img {
  text-align: center;
  padding-right: 15px;
}

.img-google {
  width: 25px;
  height: 25px;
}
</style>
