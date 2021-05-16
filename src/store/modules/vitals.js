const state = () => ({
  all: [
    {
      id: 1,
      createdDate: "10/12/2020",
      bloodPressure: "100/20",
      pulse: "200bpm",
      temperature: "200 degrees",
      waterIntake: "30 oz",
      notes: "Some notes that are very long for some reason ",
    },
    {
      id: 2,
      createdDate: "10/20/2024",
      bloodPressure: "111/20",
      pulse: "100bpm",
      temperature: "100 degrees",
      waterIntake: "110 oz",
      notes:
        "Some notes thatals;dkf;l asdf al;sjkdfl;kas df long for some reason ",
    },
    {
      id: 3,
      createdDate: "10/12/2021",
      bloodPressure: "100/20",
      pulse: "100bpm",
      temperature: "150 degrees",
      waterIntake: "30 oz",
      notes: "Some notes ",
    },
  ],
});

const mutations = {};
const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
