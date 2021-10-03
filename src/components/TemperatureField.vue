<template>
  <div>
    <input
      class="VitalTemperature_field"
      type="number"
      v-model="temperatureValue"
    />
  </div>
</template>
<script>
import { ref, toRefs, watch } from "vue";
export default {
  props: {
    temperature: String,
  },
  setup(props, context) {
    const temperatureValue = ref("");

    const { temperature } = toRefs(props);
    debugger;
    temperatureValue.value = temperature.value;

    watch(
      () => temperatureValue.value,
      (newVal) => {
        context.emit("update:temperature", newVal);
      }
    );
    return {
      temperatureValue,
    };
  },
};
</script>
<style lang="scss" scoped>
.VitalTemperature_field {
  border: 1px solid $field-border-color;
  padding: 4px;
  text-align: center;
  margin-left: 8px;
  border-radius: 4px;
}
</style>
