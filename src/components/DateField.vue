<template>
  <div>
    <label :id="id + '_dateField'">{{ fieldLabel }}</label>
    <div>
      <flat-pickr :config="flatpickrConfig" v-model="initDate" />
    </div>
  </div>
</template>
<script>
import { computed, ref, toRefs, watch } from "vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
export default {
  name: "DateField",
  props: {
    id: Number,
    date: String,
    label: String,
  },
  components: {
    flatPickr,
  },
  emits: ["update:date"],
  setup(props, context) {
    const fieldLabel = computed(() =>
      props.label ? props.label : "Date Field"
    );
    const { date } = toRefs(props);
    const initDate = ref("");
    initDate.value = date.value;

    const flatpickrConfig = {
      altFormat: "M d, Y",
      altInput: true,
      dateFormat: "Y-m-d",
    };

    watch(
      () => initDate.value,
      (newDate) => {
        context.emit("update:date", newDate);
      }
    );

    return {
      fieldLabel,
      initDate,
      flatpickrConfig,
    };
  },
};
</script>
