<template>
  <div>
    <input id="diastolicField" type="number" v-model="diastolicValue" />
    <span> over </span>
    <input id="systolicField" type="number" v-model="systolicValue" />
  </div>
</template>
<script>
import { ref, toRefs, computed, watch } from "vue";
export default {
  props: {
    pressure: Object,
  },
  setup(props, context) {
    const { pressure } = toRefs(props);

    //Top value
    const diastolicValue = ref("");
    diastolicValue.value = pressure.value.diastolic;

    watch(
      () => diastolicValue.value,
      (newVal) => {
        context.emit("update:diastolic", newVal);
      }
    );

    //Bottom value
    const systolicValue = ref("");
    systolicValue.value = pressure.value.systolic;

    watch(
      () => systolicValue.value,
      (newVal) => {
        context.emit("update:systolic", newVal);
      }
    );

    const dash = computed(() => "&#8212;");

    return {
      systolicValue,
      diastolicValue,
      dash,
    };
  },
};
</script>
