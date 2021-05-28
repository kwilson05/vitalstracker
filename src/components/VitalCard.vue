<template>
  <router-link
    :to="{ name: 'VitalView', params: { vitalID: vital.id } }"
    tag="nav"
    class="Vitals_card"
  >
    <div>{{ vital.createdDate }}</div>
    <div class="centered-container Vital_card-notes-container">
      <p class="Vital_card-notes truncate-overflow">{{ vital.notes }}</p>
    </div>
    <div>
      {{ vital.bloodPressure.diastolic }} /
      {{ vital.bloodPressure.systolic }} pressure
    </div>
    <div>{{ vital.pulse }} bpm</div>
    <div>{{ vital.temperature }} Fahrenheit body temp.</div>
    <div>
      {{ vital.waterIntake.intake }} {{ vital.waterIntake.measurement }} of
      water
    </div>
  </router-link>
</template>
<script>
export default {
  name: "VitalCard",
  props: ["vital"],
};
</script>
<style scoped>
.Vitals_card {
  border: 1px rgb(177, 169, 169) solid;
  max-width: 300px;
  border-radius: 4px;
  padding: 8px;
  user-select: none;
}
.Vital_card-notes-container {
  max-width: 100%;
  max-height: 300px;
  padding: 24px;
  overflow: hidden;
}

.Vital_card-notes {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  user-select: all;
}
</style>
