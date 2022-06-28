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
      <p class="subtitulo-avatar q-mt-md">Retos cumplidos</p>
      <div class="gradient circle-avatar">321</div>
      <div class="container-ig-tik">
        <div>
          <div class="gradient circle-redes">
            <q-img src="../assets/instagram-line.png" class="icon-ig" />
          </div>
          <p class="subtitulo-avatar q-mt-md">3.5 MiLL</p>
        </div>
        <div>
          <div class="gradient circle-redes">
            <q-img src="../assets/tiktok.png" class="icon-tiktok" />
          </div>
          <p class="subtitulo-avatar q-mt-md">6.7 MiLL</p>
        </div>
      </div>
      <div class="bio q-mt-lg">
        <q-img src="../assets/start.png" class="start" />
        <p style="margin: 0 !important">Bio</p>
      </div>
      <p class="text-bio q-mt-sm">
        Suspendisse finibus ullamcorper leo, condimentum sollicitudin erat
        maximus et. Donec id diam vel lectus tempus auctor a nec libero. Nunc
        cursus est eget pulvinar porttitor. Proin tristique blandit nibh et
        fringilla. Suspendisse felis enim, blandit et ante
      </p>
      <q-btn
        rounded
        size="60px"
        class="q-mt-lg btn-ingresar"
        label="Retar!"
        text-color="white"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "InfluencerPerfilPage",
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
  font-size: 26px;
  color: #434343;
  margin-bottom: 0 !important;
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

.bio {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}

.start {
  width: 25px;
  height: 24px;
}

.text-bio {
  color: #979797;
  font-size: 14px;
}
</style>
