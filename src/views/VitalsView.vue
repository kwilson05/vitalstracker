<template>
  <section style="padding: 12px">
    <div style="margin-bottom: 12px">
      <button
        class="btn-secondary"
        @click="this.$router.push('/')"
        type="button"
      >
        Back
      </button>
    </div>
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
    debugger;
    const vital = computed(() => store.state.vitals.vitals[props.vitalID]);

    return {
      vital,
    };
  },
  components: {
    VitalForm: VitalForm,
  },
};
</script>
<style lang="scss"></style>
