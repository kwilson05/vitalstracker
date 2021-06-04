<template>
  <div style="margin-left: 8px">
    <flat-pickr
      :id="dateRangeField"
      :config="flatpickrConfig"
      @on-change="newDateRange"
      placeholder="Select date range"
    />
  </div>
</template>
<script>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
export default {
  name: "DateRangeField",
  props: {
    id: Number,
    date: String,
    label: String,
  },
  components: {
    flatPickr,
  },
  setup() {
    /*const fieldLabel = computed(() =>
      props.label ? props.label : "Date Field"
    );
    const { date } = toRefs(props);
    const initDate = ref("");

    initDate.value = date.value;*/

    const flatpickrConfig = {
      altFormat: "M d, Y",
      altInput: true,
      dateFormat: "Y-m-d",
      mode: "range",
    };
    const newDateRange = (selectedDates, str, instance) => {
      debugger;
      const _this = instance;
      const dateArr = selectedDates.map(function (date) {
        return _this.formatDate(date, "Y-m-d");
      });
      console.log(dateArr);
    };

    return {
      newDateRange,
      flatpickrConfig,
    };
  },
};
</script>
<style lang="scss" scoped></style>
