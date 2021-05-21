<template>
  <section>
    <button @click="this.$router.push('/')" type="button">Back</button>
    <VitalForm :vital="vital" />
  </section>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import VitalForm from "@/components/VitalForm.vue";

export default {
  props: ["vitalID"],
  setup(props) {
    const store = useStore();
    const vital = computed(() => store.state.vitals.all[props.vitalID]);

    return {
      vital,
    };
  },
  components: {
    VitalForm: VitalForm,
  },
};
</script>
