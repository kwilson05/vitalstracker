<template>
  <div>
    <input type="number" v-model="intake" />
    <select v-model="measurement">
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
    measurements.value.push("ounces");
    measurements.value.push("cups");

    const { waterIntake } = toRefs(props);

    const measurement = ref("");

    measurement.value = waterIntake.value.measurement;

    watch(
      () => measurement.value,
      (newVal) => {
        context.emit("update:waterIntakeMeasurement", newVal);
      }
    );

    const intake = ref("");

    intake.value = waterIntake.value.intake;
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
