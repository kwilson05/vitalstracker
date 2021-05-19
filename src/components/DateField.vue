<template>
  <div>
    <label :id="id + '_dateField'">{{ fieldLabel }}</label>
    <div>
      {{ date }}
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
export default {
  name: "DateField",
  props: {
    id: Number,
    date: String,
    label: String,
  },
  setup(props) {
    const fieldLabel = computed(() =>
      props.label ? props.label : "Date Field"
    );
    return {
      fieldLabel,
    };
  },
};
</script>
