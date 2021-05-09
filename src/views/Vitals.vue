<template>
  <section class="main">
    <div>
      <h2>{{ usersName }}'s vitals</h2>
    </div>

    <div>
      <vital-card v-for="vital in vitals" :key="vital.id" :vital="vital" />
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import VitalCard from "@/components/VitalCard.vue";

export default {
  name: "Vitals",
  components: {
    VitalCard,
  },
  data() {
    return {
      usersName: "Kasozi",
      vitals: [
        {
          id: 1,
          date: "10/2/2021",
          bloodPressure: "119/65",
          pulse: "200",
          temperature: "200 degrees",
          waterIntake: "2 cups",
          notes: "Some notes",
        },
        {
          id: 2,
          date: "5/2/2021",
          bloodPressure: "200/65",
          pulse: "400",
          temperature: "600 degrees",
          waterIntake: "7 cups",
          notes: "Some more notes",
        },
        {
          id: 3,
          date: "1/2/2021",
          bloodPressure: "900/44",
          pulse: "500",
          temperature: "200 degrees",
          waterIntake: "2 cups",
          notes: "Some notes",
        },
      ],
    };
  },
  created() {
    this.$store.dispatch("loadVitals");
  },
};
</script>
