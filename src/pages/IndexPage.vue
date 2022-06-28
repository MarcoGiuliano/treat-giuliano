<template>
  <q-page class="column items-center justify-end">
    <div class="">
      <q-img src="../assets/treat-icon.png" class="icon-treat" />
    </div>
    <div class="">
      <h1 class="text-treat">treat</h1>
    </div>
    <div>
      <h1 class="text-influencers">Desafia a tus influencers!</h1>
    </div>
    <div>
      <q-img src="../assets/people-helado.png" class="people-icecream" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<style scoped>
.text-influencers {
  font-size: 16px;
  color: #707070;
  margin: 0px !important;
  margin-top: -40px !important;
  margin-bottom: 50px !important;
  font-weight: 500;
}
</style>
