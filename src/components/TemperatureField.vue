<template>
  <div>
    <input type="number" v-model="temperatureValue" />
    degrees
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
