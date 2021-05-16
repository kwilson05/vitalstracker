<template>
  <section>
    <div>
      <h2>Kasozi's vitals</h2>
    </div>

    <div class="container-centered">
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
<style scoped>
.container-centered {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

