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
import { ref } from "vue";
export default {
  name: "Vitals",
  components: { VitalsList },
  setup() {
    const store = useStore();
    const hasSelectedVitals = ref(false);
    debugger;
    hasSelectedVitals.value = store.getters["vitals/hasSelectedVitals"];
    return {
      hasSelectedVitals,
    };
  },
};
</script>
