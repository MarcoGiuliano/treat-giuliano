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
      <div class="btn-cargar q-mt-lg q-mb-md">
        <q-img src="../assets/mercado-pago.png" class="mercado-pago" />
      </div>
      <div class="btn-cargar q-mt-lg q-mb-md">
        <q-img src="../assets/pay-pal.png" class="pay-pal" />
      </div>
      <div class="btn-cargar q-mt-lg">
        <q-img src="../assets/icon-credit.png" class="icon-credit" />
        <p class="subtitulo-avatar q-ml-md" style="margin-bottom: 0 !important">
          Tarjeta de credito
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CargarPage",
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
}

.mercado-pago {
  width: 230px;
  height: 29px;
}

.pay-pal {
  width: 132px;
  height: 32px;
}

.icon-credit {
  width: 28px;
  height: 21px;
}
</style>
