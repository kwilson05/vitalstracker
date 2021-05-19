<template>
  <form>
    <date-field
      :id="vital.id"
      :date="vital.createdDate"
      :label="'Create Date'"
    />
    <blood-pressure-field :pressure="vital.bloodPressure" />
    <human-pulse-field :pulse="vital.pulse" />
    <temperature-field :temperature="vital.temperature" />
    <water-intake-field :intake="vital.waterIntake" />
    <notes-field :notes="vital.notes" />
  </form>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import DateField from "@/components/DateField.vue";
import BloodPressureField from "@/components/BloodPressureField.vue";
import HumanPulseField from "@/components/HumanPulseField.vue";
import TemperatureField from "@/components/TemperatureField.vue";
import WaterIntakeField from "@/components/WaterIntakeField.vue";
import NotesField from "@/components/NotesField.vue";

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
    DateField: DateField,
    BloodPressureField: BloodPressureField,
    HumanPulseField: HumanPulseField,
    TemperatureField: TemperatureField,
    WaterIntakeField: WaterIntakeField,
    NotesField: NotesField,
  },
};
</script>
