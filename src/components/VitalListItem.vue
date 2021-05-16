<template>
  <div style="margin: 4px">
    <input type="checkbox" :id="vital.id" />
    <VitalCard :vital="vital" />
  </div>
</template>
<script>
import VitalCard from "./VitalCard.vue";

export default {
  name: "VitalListItem",
  components: { VitalCard },
  props: ["vital"],
};
</script>
