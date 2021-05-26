<template>
  <div>
    <label for="pulse"> Pulse</label>
    <input id="pulse" type="number" v-model="pulseValue" />
  </div>
</template>
<script>
import { ref, toRefs, watch } from "vue";
export default {
  props: {
    pulse: String,
  },
  setup(props, context) {
    const pulseValue = ref("");
    const { pulse } = toRefs(props);
    pulseValue.value = pulse.value;

    watch(
      () => pulseValue.value,
      (newVal) => {
        context.emit("update:pulse", newVal);
      }
    );
    return {
      pulseValue,
    };
  },
};
</script>
