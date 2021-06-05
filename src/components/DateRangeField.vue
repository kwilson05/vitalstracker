<template>
  <div style="margin-left: 8px">
    <flat-pickr
      :id="dateRangeField"
      :config="flatpickrConfig"
      @on-close="newDateRange"
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
  setup(props, context) {
    const flatpickrConfig = {
      altFormat: "M d, Y",
      altInput: true,
      dateFormat: "Y-m-d",
      mode: "range",
    };
    const newDateRange = (selectedDates, str, flatpickrInstance) => {
      const _this = flatpickrInstance;
      const dateArr = selectedDates.map(function (date) {
        return _this.formatDate(date, "Y-m-d");
      });

      if (dateArr.length == 2) {
        context.emit("update", {
          startDate: dateArr[0],
          endDate: dateArr[1],
        });
      } else if (dateArr.length == 0) {
        context.emit("clear");
      } else if (dateArr.length == 1) {
        context.emit("update", {
          startDate: dateArr[0],
          endDate: null,
        });
      }
    };

    return {
      newDateRange,
      flatpickrConfig,
    };
  },
};
</script>
