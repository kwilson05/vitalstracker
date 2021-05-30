<template>
  <div>
    <input
      class="VitalPulse_field"
      id="pulse"
      type="number"
      v-model="pulseValue"
    />
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
<style lang="scss" scoped>
.VitalPulse_field {
  border: 1px solid $field-border-color;
  padding: 4px;
  text-align: center;
  margin-left: 8px;
  border-radius: 4px;
}
</style>
