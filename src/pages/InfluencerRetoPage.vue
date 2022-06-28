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
      <div class="container-ig-tik q-mt-lg q-mb-lg">
        <div>
          <div class="gradient circle-redes">
            <q-img src="../assets/instagram-line.png" class="icon-ig" />
          </div>
        </div>
        <div>
          <div class="gradient circle-redes">
            <q-img src="../assets/tiktok.png" class="icon-tiktok" />
          </div>
        </div>
      </div>
      <p class="text-name-avatar q-mt-lg">El reto se hara en:</p>
      <p class="text-time">2d:4h:35m</p>
      <q-img src="../assets/people-coffe.png" class="people-coffe" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "InfluencerRetoPage",
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
  font-size: 20px;
  color: #434343;
  margin-bottom: 0 !important;
  font-weight: bold;
}

.circle-avatar {
  width: 143px;
  height: 144px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 69px;
}

.container-ig-tik {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.icon-ig {
  width: 25px;
  height: 26px;
}
.icon-tiktok {
  width: 21px;
  height: 25px;
}

.circle-redes {
  width: 67px;
  height: 67px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-time {
  color: #585858;
  font-weight: bold;
  font-size: 51px;
}

.people-coffe {
  width: 302px;
  height: 350px;
  margin-top: 44px;
}
</style>
