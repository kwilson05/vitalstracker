<template>
  <div style="margin: 4px">
    <input
      style="margin-bottom: 8px"
      type="checkbox"
      :id="vital.id"
      v-model="selected"
    />
    <VitalCard :for="vital.id" :vital="vital" />
  </div>
</template>
<script>
import VitalCard from "./VitalCard.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "VitalListItem",
  components: { VitalCard },
  props: ["vital"],
  setup(props) {
    const store = useStore();

    const selected = computed({
      get: () => {
        return store.state.vitals.all[props.vital.id].selected;
      },
      set: (newVal) => {
        if (newVal) {
          store.dispatch("vitals/selectVital", props.vital);
        } else {
          store.dispatch("vitals/deselectVital", props.vital);
        }
      },
    });

    return {
      selected,
    };
  },
};
</script>
