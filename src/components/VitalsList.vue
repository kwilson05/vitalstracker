<template>
  <div style="display: flex; flex-direction: column">
    <VitalListItem v-for="vital in allVitals" :vital="vital" :key="vital.id" />
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import VitalListItem from "./VitalListItem.vue";
export default {
  name: "VitalList",
  components: { VitalListItem },
  setup() {
    const store = useStore();
    const allVitals = computed(() => store.state.vitals.all);
    return {
      allVitals,
    };
  },
};
</script>
