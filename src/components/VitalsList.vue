<template>
  <div
    style="
      display: flex;
      flex-wrap: wrap;
      max-height: 700px;
      overflow-y: auto;
      padding: 12px;
    "
  >
    <VitalCard v-for="vital in allVitals" :vital="vital" :key="vital.id" />
  </div>
</template>
<script>
import { computed } from "vue";

import VitalCard from "./VitalCard.vue";
export default {
  props: {
    vitals: Array,
  },
  name: "VitalList",
  components: { VitalCard },
  setup(props) {
    debugger;
    const allVitals = computed(() => props.vitals);
    return {
      allVitals,
    };
  },
};
</script>
