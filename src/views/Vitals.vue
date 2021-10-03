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
        <vitals-list :vitals="allVitals" />
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
  components: { VitalsList: VitalsList },
  setup() {
    const store = useStore();
    store.dispatch("vitals/getVitals");

    const allVitals = computed(() => store.getters["vitals/all"]);

    return {
      allVitals,
    };
  },
};
</script>
