<template>
  <section class="centered-container">
    <form class="VitalForm">
      <div>
        <label class="VitalForm_field-label">Create Date</label>
        <date-field
          class="VitalForm_date-field"
          :id="editedVital.id"
          @update:date="updateCreateDate"
          :date="editedVital.createdDate"
        />
      </div>
      <div>
        <label class="VitalForm_field-label">Blood Pressure</label>
        <blood-pressure-field
          @update:diastolic="updateDiastolicPressure"
          @update:systolic="updateSystolicPressure"
          :pressure="editedVital.bloodPressure"
        />
      </div>

      <div>
        <label class="VitalForm_field-label">Pulse (bpm)</label>
        <human-pulse-field
          @update:pulse="updatePulse"
          :pulse="editedVital.pulse"
        />
      </div>
      <div>
        <label class="VitalForm_field-label">Body Temp (Fahrenheit)</label>
        <temperature-field
          @update:temperature="updateTemperature"
          :temperature="editedVital.temperature"
        />
      </div>
      <div>
        <label class="VitalForm_field-label">Water Intake</label>
        <water-intake-field
          @update:waterIntakeMeasurement="updateWaterIntakeMeasurement"
          @update:waterIntakeValue="updateWaterIntakeValue"
          :waterIntake="editedVital.waterIntake"
        />
      </div>
      <div>
        <label class="VitalForm_field-label">Notes</label>
        <notes-field @update:notes="updateNotes" :notes="editedVital.notes" />
      </div>
    </form>
    <nav style="width: 300px; margin-top: 8px" class="rightened-container">
      <button class="btn" @click="save" type="button">Save</button>
    </nav>
  </section>
</template>
<script>
import DateField from "@/components/DateField.vue";
import BloodPressureField from "@/components/BloodPressureField.vue";
import HumanPulseField from "@/components/HumanPulseField.vue";
import TemperatureField from "@/components/TemperatureField.vue";
import WaterIntakeField from "@/components/WaterIntakeField.vue";
import NotesField from "@/components/NotesField.vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
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
    const store = useStore();

    const editedVital = reactive({});
    const editedBloodPressure = reactive({});
    const editedWaterIntake = reactive({});

    props.vital && Object.assign(editedVital, props.vital);

    Object.assign(editedBloodPressure, editedVital.bloodPressure);
    Object.assign(editedWaterIntake, editedVital.waterIntake);

    const updateCreateDate = (newDate) => {
      //only want to dispatch change when user clicks save button
      editedVital.createdDate = newDate;
    };

    const updateDiastolicPressure = (newDiastolic) => {
      editedBloodPressure.diastolic = newDiastolic;
    };

    const updateSystolicPressure = (newSystolic) => {
      editedBloodPressure.systolic = newSystolic;
    };

    const updatePulse = (newPulse) => {
      editedVital.pulse = newPulse;
    };

    const updateTemperature = (newTemperature) => {
      editedVital.temperature = newTemperature;
    };

    const updateWaterIntakeValue = (newIntakeValue) => {
      editedWaterIntake.intake = newIntakeValue;
    };

    const updateWaterIntakeMeasurement = (newMeasurement) => {
      editedWaterIntake.measurement = newMeasurement;
    };

    const updateNotes = (notes) => {
      editedVital.notes = notes;
    };

    const router = useRouter();
    const save = () => {
      if (props.vital.id) {
        debugger;
        store.dispatch("vitals/editVital", {
          vital: editedVital,
          bloodPressure: editedBloodPressure,
          waterIntake: editedWaterIntake,
        });
      } else {
        //create props.vital via api
        //then add to store
      }
      router.push("/");
    };

    return {
      updateCreateDate,
      editedVital,
      editedBloodPressure,
      editedWaterIntake,
      save,
      updateDiastolicPressure,
      updateSystolicPressure,
      updatePulse,
      updateTemperature,
      updateWaterIntakeValue,
      updateWaterIntakeMeasurement,
      updateNotes,
    };
  },
};
</script>
<style lang="scss" scoped>
.VitalForm_field-label {
  font-size: 14px;
}

.VitalForm {
  border: 1px rgb(177, 169, 169) solid;
  width: 300px;
  border-radius: 4px;
  padding: 8px;
}
</style>
