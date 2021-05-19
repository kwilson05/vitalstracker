<template>
  <router-link
    :to="{ name: 'VitalView', params: { vitalID: vital.id } }"
    tag="div"
    class="Vital_card"
  >
    <div>{{ vital.createdDate }}</div>
    <div>{{ vital.bloodPressure }}</div>
    <div>{{ vital.pulse }}</div>
    <div>{{ vital.temperature }}</div>
    <div>{{ vital.waterIntake }}</div>
    <div>{{ vital.notes }}</div>
  </router-link>
</template>
<script>
export default {
  name: "VitalCard",
  props: ["vital"],
};
</script>
<style scoped>
.Vital_card {
  border: 1px rgb(177, 169, 169) solid;
  max-width: 400px;
}
</style>
