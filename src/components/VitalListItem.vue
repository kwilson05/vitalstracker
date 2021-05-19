<template>
  <div class="row-container" style="margin: 4px">
    <input style="margin-right: 8px" type="checkbox" :id="vital.id" />
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
