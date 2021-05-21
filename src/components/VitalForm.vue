<template>
  <form class="centered-container">
    <date-field :id="id" :date="createdDate" :label="'Create Date'" />
    <blood-pressure-field :pressure="bloodPressure" />
    <human-pulse-field :pulse="pulse" />
    <temperature-field :temperature="temperature" />
    <water-intake-field :intake="waterIntake" />
    <notes-field :notes="notes" />
    <button @click="save" type="button">Save</button>
  </form>
</template>
<script>
import DateField from "@/components/DateField.vue";
import BloodPressureField from "@/components/BloodPressureField.vue";
import HumanPulseField from "@/components/HumanPulseField.vue";
import TemperatureField from "@/components/TemperatureField.vue";
import WaterIntakeField from "@/components/WaterIntakeField.vue";
import NotesField from "@/components/NotesField.vue";
import { computed, reactive } from "vue";
export default {
  props: {
    vital: Object,
  },
  name: "VitalForm",
  components: {
    DateField: DateField,
    BloodPressureField: BloodPressureField,
    HumanPulseField: HumanPulseField,
    TemperatureField: TemperatureField,
    WaterIntakeField: WaterIntakeField,
    NotesField: NotesField,
  },
  setup(props) {
    //const store = useStore();
    const vitalInitValue = reactive({});

    props.vital && Object.assign(vitalInitValue, props.vital);

    const id = computed({
      get: () => {
        return vitalInitValue.id;
      },
    });

    const createdDate = computed({
      get: () => {
        return vitalInitValue.createdDate;
      },
    });

    const waterIntake = computed({
      get: () => {
        return vitalInitValue.waterIntake;
      },
    });

    const bloodPressure = computed({
      get: () => {
        return vitalInitValue.bloodPressure;
      },
    });

    const pulse = computed({
      get: () => {
        return vitalInitValue.pulse;
      },
    });

    const temperature = computed({
      get: () => {
        return vitalInitValue.temperature;
      },
    });

    const notes = computed({
      get: () => {
        return vitalInitValue.notes;
      },
    });

    const save = () => {
      //does vital exist already
      if (vitalInitValue.id) {
        //save in store
      } else {
        //create vital via api
        //then add to store
      }
      console.log("saving vital");
    };

    return {
      createdDate,
      vitalInitValue,
      bloodPressure,
      pulse,
      temperature,
      notes,
      id,
      waterIntake,
      save,
    };
  },
};
</script>
