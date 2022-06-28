<template>
  <div class="container-principal">
    <q-page class="column items-center justify-start">
      <div class="row" style="margin-left: 30px">
        <div class="col-12">
          <h1 class="text-hola">Hola!</h1>
        </div>
        <div class="col-12">
          <h2 class="text-ingresa">Navegá por las pantallas.</h2>
        </div>
      </div>
      <div class="gradient btn-cargar">
        <p @click="home" class="text-pantallas">Home</p>
      </div>
      <div class="gradient btn-cargar">
        <p @click="login" class="text-pantallas">Login</p>
      </div>
      <div class="gradient btn-cargar">
        <p @click="influencers" class="text-pantallas">Influencers</p>
      </div>
      <div class="gradient btn-cargar">
        <p @click="perfil" class="text-pantallas">Perfil</p>
      </div>
      <div class="gradient btn-cargar">
        <p @click="cargar" class="text-pantallas">Cargar saldo</p>
      </div>
      <div class="gradient btn-cargar">
        <p @click="retar" class="text-pantallas">Retar</p>
      </div>
      <div class="gradient btn-cargar">
        <p @click="reto" class="text-pantallas">Reto</p>
      </div>
      <div class="gradient btn-cargar">
        <p @click="perfilUser" class="text-pantallas">Perfil usuario</p>
      </div>
    </q-page>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    return {
      home() {
        router.push("/home");
      },
      login() {
        router.push("/login");
      },
      influencers() {
        router.push("/influencers");
      },
      perfil() {
        router.push("/perfil");
      },
      cargar() {
        router.push("/cargar");
      },
      retar() {
        router.push("/retar");
      },
      reto() {
        router.push("/reto");
      },
      perfilUser() {
        router.push("/perfil-user");
      },
    };
  },
  methods: {
    rotate(e) {},
  },
};
</script>

<style scoped>
.text-ingresa {
  font-size: 23px;
  color: #2e2e2e;
  margin: 0px !important;
  margin-top: -40px !important;
  /* margin-bottom: 50px !important; */
  font-weight: bold;
  margin-bottom: 20px !important;
}

.text-pantallas {
  font-size: 23px;
  margin: 0px !important;
  /* margin-bottom: 50px !important; */
  font-weight: bold;
  color: #fff;
}

.btn-cargar {
  width: 346px;
  height: 59px;
  box-shadow: -2px 1px 15px 2px rgba(194, 194, 194, 0.41);
  -webkit-box-shadow: -2px 1px 15px 2px rgba(194, 194, 194, 0.41);
  -moz-box-shadow: -2px 1px 15px 2px rgba(194, 194, 194, 0.41);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 28px;
}
</style>
