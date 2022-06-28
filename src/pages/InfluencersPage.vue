<template>
  <div class="container-influencers">
    <div class="container-princ-notificacion">
      <div class="container-notificaciones">4</div>
    </div>
    <div class="container-influencers-top">
      <q-img src="../assets/arrow-back.png" class="arrow-back" />
      <p class="text-influencers">Influencers disponibles</p>
      <q-img src="../assets/img-notificacion.png" class="img-notificacion" />
    </div>
    <div class="container-img-influencer">
      <q-img src="../assets/img-influencer.png" class="img-influencer" />
    </div>
    <div class="container-options">
      <div class="container-datos-influencer row">
        <div class="row col-10">
          <div class="row items-center justify-center">
            <p class="text-name-influencer">Carmen Rodriguez</p>
            <q-img
              src="../assets/icon-verificado.png"
              class="icon-verificado"
            />
          </div>
          <div class="row items-center justify-center">
            <q-img src="../assets/icon-ubicacion.png" class="icon-ubicacion" />
            <p class="text-ubicacion">Buenos Aires, Argentina</p>
          </div>
        </div>
        <div class="container-btn-continuar">
          <q-img src="../assets/arrow-next.png" class="arrow-next" />
        </div>
      </div>
      <div class="container-circles">
        <div class="subcontainer-circles">
          <div class="circle-white">
            <p class="numero-retos">321</p>
          </div>
          <p class="text-circle-bottom">Retos</p>
        </div>
        <div class="subcontainer-circles">
          <q-img src="../assets/icon-retar.png" class="icon-retar" />
          <p class="text-circle-bottom">Retar</p>
        </div>
        <div class="subcontainer-circles">
          <div class="circle-white">
            <q-img src="../assets/icon-agregar.png" class="icon-agregar" />
          </div>
          <p class="text-circle-bottom">Agregar</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "InfluencersPage",
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

.container-influencers {
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

.text-influencers {
  color: #434343;
  font-size: 18px;
  margin: 0 !important;
}

.container-img-influencer {
  margin-top: 20px;
}

.container-options {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  /* margin-top: -50px; */
  /* position: absolute; */
}

.container-datos-influencer {
  display: flex;
  margin-top: -120px;
  position: absolute;
  background-color: #fff;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  width: 320px;
  padding: 15px;
}

.text-name-influencer {
  font-size: 18px;
  margin: 0 !important;
}

.icon-verificado {
  width: 17px;
  height: 17px;
  margin-left: 10px;
}

.icon-ubicacion {
  width: 11px;
  height: 11px;
  margin-bottom: 5px;
}

.text-ubicacion {
  font-size: 12px;
  margin: 0 !important;
  margin-left: 10px !important;
  color: #262626;
}

.arrow-next {
  width: 16px;
  height: 13px;
}

.container-btn-continuar {
  border-radius: 50%;
  background: -moz-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  width: 37px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-circles {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  position: absolute;
}

.subcontainer-circles {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.circle-white {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 86px;
  height: 86px;
  margin-top: -50px;
  box-shadow: 10px 0px 56px -11px rgba(0, 0, 0, 0.41);
  -webkit-box-shadow: 10px 0px 56px -11px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 10px 0px 56px -11px rgba(0, 0, 0, 0.41);
}

.numero-retos {
  margin: 0 !important;
  color: #e6504e;
  font-size: 30px;
  font-weight: bold;
}

.text-circle-bottom {
  color: #888888;
  font-size: 14px;
  margin: 0 !important;
  margin-top: 10px !important;
}

.icon-retar {
  width: 99px;
  height: 100px;
  margin-top: -10px;
}

.icon-agregar {
  width: 32px;
  height: 30px;
}
</style>
