<template>
  <div class="container-perfil-influencers">
    <div class="container-influencers-top">
      <q-img src="../assets/arrow-back.png" class="arrow-back" />
    </div>
    <div class="column items-center">
      <q-img src="../assets/avatar-user.png" class="avatar" />
      <p class="text-name-avatar q-mt-md">Julieta Suarez</p>
    </div>
    <div class="column items-start justify-start q-ml-lg">
      <p class="number-estadisticas">352</p>
      <p class="subtitle-estadisticas">Retos solicitados</p>
      <p class="number-estadisticas">3</p>
      <p class="subtitle-estadisticas">Retos pendientes de aprobacion</p>
      <p class="number-estadisticas">$35000</p>
      <p class="subtitle-estadisticas">Dinero invertido</p>
      <div class="row items-center q-mt-lg">
        <q-img src="../assets/start.png" style="width: 43px; height: 42px" />
        <p class="subtitle-estadisticas">Favoritos</p>
      </div>
    </div>
    <q-img src="../assets/people-phone.png" class="people-coffe q-ml-lg" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PerfilUserPage",
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
.people-coffe {
  width: 302px;
  height: 350px;
  margin-top: 44px;
}

.number-estadisticas {
  font-weight: bold;
  font-size: 30px;
  color: #a4059c;
  margin: 0 !important;
  margin-top: 20px !important;
}

.subtitle-estadisticas {
  color: #656565;
  font-size: 14px;
  margin: 0 !important;
}
</style>
