const state = () => ({
  all: {
    1: {
      id: 1,
      selected: false,
      createdDate: "2020-11-12",
      bloodPressure: {
        diastolic: "100",
        systolic: "80",
      },
      pulse: "200",
      temperature: "200",
      waterIntake: {
        intake: "30",
        measurement: "cups",
      },
      notes: "Some notes that are very long for some reason ",
    },

    2: {
      id: 2,
      selected: false,
      createdDate: "2024-10-20",
      bloodPressure: {
        diastolic: "120",
        systolic: "80",
      },
      pulse: "100",
      temperature: "100",
      waterIntake: {
        intake: "30",
        measurement: "ounces",
      },
      notes:
        "Some notes thatals;dkf;l asdf al;sjkdfl;kas df long for some reason ",
    },

    3: {
      id: 3,
      selected: false,
      createdDate: "2021-04-02",
      bloodPressure: {
        diastolic: "140",
        systolic: "90",
      },
      pulse: "100",
      temperature: "150",
      waterIntake: {
        intake: "30",
        measurement: "cups",
      },
      notes: "Some notes ",
    },
  },
});

const mutations = {
  editVital(state, { vital, bloodPressure, waterIntake }) {
    state.all[vital.id] = vital;
    state.all[vital.id].bloodPressure = bloodPressure;
    state.all[vital.id].waterIntake = waterIntake;
  },
  newVital(state, newVital) {
    debugger;
    const allVitals = state.all;
    allVitals[`${newVital.id}`] = newVital;
    state.all = allVitals;
  },
};
const actions = {
  editVital({ commit }, vital) {
    commit("editVital", vital);
  },
  newVital({ commit }, newVital) {
    commit("newVital", newVital);
  },
};
const getters = {
  hasSelectedVitals(state) {
    return (
      Object.values(state.all).filter((vital) => vital.selected).length > 0
    );
  },
  selectedVitals(state) {
    return Object.values(state.all).filter((vital) => vital.selected);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
