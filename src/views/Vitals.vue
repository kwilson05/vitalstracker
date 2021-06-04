<template>
  <section>
    <div>
      <h2 class="red">Kasozi's vitals</h2>
    </div>

    <div class="centered-container">
      <nav style="width: 100%" class="space-around-container">
        <button
          class="btn-secondary"
          type="button"
          @click="$router.push('/new')"
        >
          New
        </button>
        <button
          :disabled="!hasSelectedVitals"
          class="btn-secondary"
          type="button"
          @click="deleteSelectedVitals"
        >
          Delete
        </button>
      </nav>

      <section>
        <vitals-list />
      </section>
    </div>
  </section>
</template>

<script>
import VitalsList from "@/components/VitalsList.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "Vitals",
  components: { VitalsList },
  setup() {
    const store = useStore();
    const hasSelectedVitals = computed(
      () => store.getters["vitals/hasSelectedVitals"]
    );

    const selectedVitals = computed(
      () => store.getters["vitals/selectedVitals"]
    );

    const deleteSelectedVitals = () => {
      //delete selected vitals via api
      //pass successfully deleted vitals to store.dispatch
      store.dispatch("vitals/deleteVitals", { vitals: selectedVitals.value });
    };

    return {
      hasSelectedVitals,
      selectedVitals,
      deleteSelectedVitals,
    };
  },
};
</script>
