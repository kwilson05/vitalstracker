<template>
  <div>
    <input class="VitalWaterIntake_field" type="number" v-model="intake" />
    <select class="VitalWaterIntake_measurement-field" v-model="measurement">
      <option v-for="measurement in measurements" :key="measurement">
        {{ measurement }}
      </option>
    </select>
  </div>
</template>
<script>
import { ref, toRefs, watch } from "vue";
export default {
  props: {
    waterIntake: Object,
  },
  setup(props, context) {
    const measurements = ref([]);
    measurements.value.push("CUPS");
    measurements.value.push("OUNCES");

    const { waterIntake } = toRefs(props);

    const measurement = ref("");
    if (waterIntake.value) {
      measurement.value = waterIntake.value.measurement;
    }

    watch(
      () => measurement.value,
      (newVal) => {
        context.emit("update:waterIntakeMeasurement", newVal);
      }
    );

    const intake = ref("");
    if (waterIntake.value) {
      intake.value = waterIntake.value.intake;
    }
    watch(
      () => intake.value,
      (newVal) => {
        context.emit("update:waterIntakeValue", newVal);
      }
    );

    return {
      measurements,
      intake,
      measurement,
    };
  },
};
</script>
<style lang="scss" scoped>
.VitalWaterIntake_field {
  border: 1px solid $field-border-color;
  padding: 4px;
  text-align: center;
  margin-left: 8px;
  border-radius: 4px;
}
.VitalWaterIntake_measurement-field {
  border: 1px solid $field-border-color;
  padding: 4px;
  text-align: center;
  margin-left: 8px;
  border-radius: 4px;
  background: white;
}
</style>
