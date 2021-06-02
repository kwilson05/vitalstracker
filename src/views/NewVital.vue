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
    <VitalForm />
  </section>
</template>
<script>
import VitalForm from "@/components/VitalForm.vue";

export default {
  components: {
    VitalForm: VitalForm,
  },
};
</script>
