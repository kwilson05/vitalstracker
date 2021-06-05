<template>
  <div>
    <date-range-field @update="updateDateFilter" @clear="clearDateFilter" />
  </div>
</template>
<script>
import DateRangeField from "./DateRangeField.vue";
import { useStore } from "vuex";
export default {
  name: "VitalFilter",
  components: { DateRangeField },
  setup() {
    const store = useStore();

    const updateDateFilter = ({ startDate, endDate }) => {
      store.dispatch("vitals/updateDateFilters", {
        startDate: startDate,
        endDate: endDate,
      });
    };

    const clearDateFilter = () => {
      store.dispatch("vitals/updateDateFilters", {
        startDate: null,
        endDate: null,
      });
    };
    return {
      updateDateFilter,
      clearDateFilter,
    };
  },
};
</script>
