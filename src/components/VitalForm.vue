<template>
  <form class="centered-container">
    <date-field
      :id="editedVital.id"
      @update:date="updateCreateDate"
      :date="editedVital.createdDate"
      :label="'Create Date'"
    />
    <blood-pressure-field :pressure="editedVital.bloodPressure" />
    <human-pulse-field :pulse="editedVital.pulse" />
    <temperature-field :temperature="editedVital.temperature" />
    <water-intake-field :intake="editedVital.waterIntake" />
    <notes-field :notes="editedVital.notes" />
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
import { reactive } from "vue";
//import { useStore } from "vuex";
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

    const editedVital = reactive({});

    props.vital && Object.assign(editedVital, props.vital);

    const updateCreateDate = (newDate) => {
      //only want to dispatch change when user clicks save button
      debugger;
      editedVital.createdDate = newDate;
    };

    const save = () => {
      //does props.vital exist already
      if (props.vital.id) {
        //save in store
      } else {
        //create props.vital via api
        //then add to store
      }
      console.log("saving props.vital");
    };

    return {
      updateCreateDate,
      editedVital,
      save,
    };
  },
};
</script>
