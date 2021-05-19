<template>
  <div>{{ temperature }} farenheight</div>
</template>
<script>
export default {
  props: {
    temperature: String,
  },
};
</script>
