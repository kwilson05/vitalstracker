<template>
  <section>
    <button @click="this.$router.push('/')" type="button">Back</button>
    <VitalForm
      :id="vital.id"
      :createDate="vital.createdDate"
      :bloodPressure="vital.bloodPressure"
      :pulse="vital.pulse"
      :temperature="vital.temperature"
      :waterIntake="vital.waterIntake"
      :notes="vital.notes"
    />
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
