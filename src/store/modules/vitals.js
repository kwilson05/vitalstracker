import { DateTime } from "luxon";
import { getVitals } from "../../composable/Vitals";
const state = () => ({
  all: {},
  dateRangeFilter: {
    startDate: null,
    endDate: null,
  },
});

const mutations = {
  editVital(state, { vital, bloodPressure, waterIntake }) {
    state.all[vital.id] = vital;
    state.all[vital.id].bloodPressure = bloodPressure;
    state.all[vital.id].waterIntake = waterIntake;
  },
  newVital(state, newVital) {
    const allVitals = {};
    Object.assign(allVitals, state.all);
    allVitals[`${newVital.id}`] = newVital;
    state.all = allVitals;
  },
  selectVital(state, { id }) {
    state.all[id].selected = true;
  },
  deselectVital(state, { id }) {
    state.all[id].selected = false;
  },
  deleteVitals(state, { deletedVitals }) {
    const newAllVitals = {};
    Object.assign(newAllVitals, state.all);
    for (let deletedVital of deletedVitals) {
      delete newAllVitals[deletedVital.id];
    }
    state.all = newAllVitals;
  },
  updateDateFilters(state, { startDate, endDate }) {
    state.dateRangeFilter.startDate = startDate;
    state.dateRangeFilter.endDate = endDate;
  },
  setVitals(state, { vitals }) {
    state.vitals = vitals;
  },
};
const actions = {
  async getVitals({ commit }) {
    const vitals = await getVitals();
    commit("setVitals", {
      vitals: vitals,
    });
  },
  editVital({ commit }, vital) {
    commit("editVital", vital);
  },
  newVital({ commit }, newVital) {
    commit("newVital", newVital);
  },
  selectVital({ commit }, vital) {
    commit("selectVital", vital);
  },
  deselectVital({ commit }, vital) {
    commit("deselectVital", vital);
  },
  deleteVitals({ commit, state }, { vitals }) {
    const allVitals = Object.values(state.all);
    const deletedVitals = allVitals.filter((currVital) => {
      for (let vital of vitals) {
        if (vital.id === currVital.id) {
          return true;
        }
      }
      return false;
    });

    commit("deleteVitals", { deletedVitals: deletedVitals });
  },
  updateDateFilters({ commit }, dateFilters) {
    commit("updateDateFilters", dateFilters);
  },
};
const getters = {
  hasSelectedVitals(state, getters) {
    return getters.selectedVitals.length > 0;
  },
  selectedVitals(state, getters) {
    return getters.filteredVitals.filter((vital) => vital.selected);
  },
  filteredVitals(state, getters) {
    //No filters; return all vitals
    if (!state.dateRangeFilter.startDate && !state.dateRangeFilter.endDate) {
      return getters.vitalsArr;
    }
    //There's always a startDate filter if date filters exist
    const startDate = DateTime.fromISO(state.dateRangeFilter.startDate);
    const endDate =
      state.dateRangeFilter.endDate == null
        ? null
        : DateTime.fromISO(state.dateRangeFilter.endDate);

    const filteredVitals = getters.vitalsArr.filter((vital) => {
      const createdDate = DateTime.fromISO(vital.createdDate);
      const afterStartDate = createdDate >= startDate;
      const beforeEndDate = endDate == null ? true : createdDate <= endDate;

      if (afterStartDate && beforeEndDate) {
        return vital;
      }
    });

    return filteredVitals;
  },
  vitalsArr(state) {
    return Object.values(state.all);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
