<template>
  <div class="Vitals_card">
    <div>{{ formattedCreatedDate }}</div>
    <div class="centered-container Vital_card-notes-container">
      <p class="Vital_card-notes">{{ vital.notes }}</p>
    </div>
    <div>
      {{ vital.bloodPressure.diastolic }} /
      {{ vital.bloodPressure.systolic }} pressure
    </div>
    <div>{{ vital.pulse }} bpm</div>
    <div>{{ vital.temperature }} Fahrenheit body temp.</div>
    <div style="margin-bottom: 12px">
      {{ vital.waterIntake.intake }} {{ vital.waterIntake.measurement }} of
      water
    </div>
    <div class="rightened-container">
      <button
        style="margin-bottom: 12px"
        type="button"
        class="btn"
        @click="
          $router.push({ name: 'VitalView', params: { vitalID: vital.id } })
        "
      >
        View
      </button>
    </div>
  </div>
</template>
<script>
import { DateTime } from "luxon";
import { ref } from "vue";
export default {
  name: "VitalCard",
  props: {
    vital: Object,
  },
  setup(props) {
    const formattedCreatedDate = ref("");
    const createdDate = DateTime.fromISO(props.vital.createdAt);
    formattedCreatedDate.value = createdDate.toLocaleString(DateTime.DATE_MED);

    return {
      formattedCreatedDate,
    };
  },
};
</script>
<style scoped>
.Vitals_card {
  border: 1px rgb(177, 169, 169) solid;
  width: 300px;
  height: 470px;
  border-radius: 4px;
  padding: 8px;
  user-select: none;
}
.Vital_card-notes-container {
  max-width: 100%;
  height: 300px;
  padding: 24px;
  overflow-y: auto;
  overflow-x: hidden;
}

.Vital_card-notes {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  overflow-y: auto;
  user-select: all;
}
</style>
