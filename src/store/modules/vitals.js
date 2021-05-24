const state = () => ({
  all: {
    1: {
      id: 1,
      createdDate: "2020-11-12",
      bloodPressure: "100/20",
      pulse: "200bpm",
      temperature: "200 degrees",
      waterIntake: "30 oz",
      notes: "Some notes that are very long for some reason ",
    },

    2: {
      id: 2,
      createdDate: "2024-10-20",
      bloodPressure: "111/20",
      pulse: "100bpm",
      temperature: "100 degrees",
      waterIntake: "110 oz",
      notes:
        "Some notes thatals;dkf;l asdf al;sjkdfl;kas df long for some reason ",
    },

    3: {
      id: 3,
      createdDate: "2021-04-02",
      bloodPressure: "100/20",
      pulse: "100bpm",
      temperature: "150 degrees",
      waterIntake: "30 oz",
      notes: "Some notes ",
    },
  },
});

const mutations = {
  updateVitalCreatedDate(state, { id, createdDate }) {
    state.all[id].createdDate = createdDate;
  },
};
const actions = {
  updateVitalCreatedDate({ commit }, vital) {
    commit("updateVitalCreatedDate", vital);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
