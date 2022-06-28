<template>
  <div class="container-perfil-influencers">
    <div class="container-princ-notificacion">
      <div class="container-notificaciones">4</div>
    </div>
    <div class="container-influencers-top">
      <q-img src="../assets/arrow-back.png" class="arrow-back" />
      <q-img src="../assets/img-notificacion.png" class="img-notificacion" />
    </div>
    <div class="column items-center">
      <q-img src="../assets/avatar.png" class="avatar" />
      <q-img src="../assets/star.png" class="star" />
      <p class="text-name-avatar q-mt-md">Carmen Rodriguez</p>
      <p class="subtitulo-avatar q-mt-md">Cargá crédito para el reto!</p>
      <p class="text-saldo q-mt-lg">$5000</p>
      <p class="text-saldo">Acreditado</p>
      <q-btn
        rounded
        size="60px"
        class="q-mt-lg btn-ingresar"
        label="Retar!"
        text-color="white"
        @click="alert = true"
      />
      <q-img src="../assets/people-retar.png" class="people-retar" />
    </div>
  </div>
  <q-dialog v-model="alert">
    <q-carousel
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      v-model="slide"
      control-color="primary"
      padding
      height="900px"
      class="bg-white shadow-1 rounded-borders card"
    >
      <q-carousel-slide :name="1" class="column no-wrap flex-center">
        <div class="column items-center justify-center">
          <q-img @click="rotate" src="../assets/spin.png" class="pin" />
          <q-img
            @click="rotate"
            src="../assets/spin-wheel.png"
            class="ruleta"
          />
          <p class="title-modal">Reto obtenido!</p>
          <p class="subtitle-modal">Suspendisse finibus ullamcorper leo</p>
          <p class="text-modal">
            Donec id diam vel lectus tempus auctor a nec libero. Nunc cursus est
            eget pulvinar porttitor. Proin tristique blandit nibh et
            fringilla.png
          </p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap flex-center">
        <div class="column items-center justify-start">
          <!-- width: 44px;
  height: 52px; -->
          <q-img @click="rotate" src="../assets/spin.png" class="pin" />
          <q-img
            @click="rotate"
            src="../assets/spin-wheel.png"
            class="ruleta"
          />
          <!-- width: 240px;
  height: 280px; -->
          <p class="title-modal" style="font-size: 30px">
            Puedes proponer un reto!
          </p>
          <p class="subtitle-modal">Suspendisse finibus ullamcorper leo</p>
          <p class="text-modal">
            Describe el reto que te gustaría que Carmen Rodriguez realice!
          </p>
          <q-input v-model="text" filled type="textarea" class="q-mt-md" />
          <q-btn
            rounded
            size="60px"
            class="q-mt-lg btn-ingresar"
            label="Retar!"
            text-color="white"
            @click="alert = true"
            style="width: 300px"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap flex-end">
        <div class="column items-center justify-center">
          <q-img src="../assets/avatar.png" class="avatar" />
          <q-img src="../assets/star.png" class="star" />
          <p class="text-name-avatar q-mt-md">Carmen Rodriguez</p>
          <p class="title-modal q-mt-lg">
            Esperando confirmacion de influencer
          </p>
          <q-img src="../assets/people-modal.png" class="people-modal" />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </q-dialog>
</template>

<script>
import { defineComponent, ref } from "vue";
export default {
  setup() {
    return {
      alert: ref(false),
      card: ref(false),
      sliders: ref(false),
      slide: ref(1),
      lorem:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!",
      stars: ref(3),
      slideVol: ref(39),
      slideAlarm: ref(56),
      slideVibration: ref(63),
      isRotating: false,
      rotated: false,
    };
  },
  methods: {
    rotate(e) {
      if (this.isRotating) return;

      this.isRotating = true;

      e.target.style.transform = "rotate(3600deg)";
      e.target.style.transition = "transform 7s ease-in-out";

      setTimeout(() => {
        this.rotated = true;
      }, 8000);
    },
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
}

.container-perfil-influencers {
  padding: 0px 20px 0px 20px;
}

.container-influencers-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.arrow-back {
  width: 11px;
  height: 22px;
}

.img-notificacion {
  width: 39px;
  height: 39px;
}

.avatar {
  width: 131px;
  height: 131px;
}

.text-name-avatar {
  font-size: 26px;
  color: #434343;
  margin-bottom: 0 !important;
}

.text-saldo {
  font-size: 26px;
  color: #585858;
  margin: 0 !important;
  font-weight: bold;
}

.people-retar {
  widows: 318px;
  height: 358px;
  margin-top: 75px;
}

.ruleta {
  width: 240px;
  height: 280px;
  filter: brightness(150%);
}

.title-modal {
  font-size: 35px;
  color: #585858;
  text-align: center;
  font-weight: bold;
}

.card {
  width: 350px;
}

.subtitle-modal {
  font-size: 15px;
  text-align: center;
}

.text-modal {
  text-align: center;
  margin: 0 !important;
  color: #979797;
}

.people-modal {
  width: 153px;
  height: 251px;
}
.pin {
  width: 44px;
  height: 52px;
  margin-bottom: -25px;
  z-index: 1;
}
</style>
