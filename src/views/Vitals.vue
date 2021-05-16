<template>
  <section>
    <div>
      <h2 class="red">Kasozi's vitals</h2>
    </div>

    <div class="centered-container">
      <vitals-list />
    </div>
  </section>
</template>

<script>
import VitalsList from "@/components/VitalsList.vue";

export default {
  name: "Vitals",
  components: { VitalsList },
};
</script>
