<template>
  <div><textarea v-model="notesValue" /></div>
</template>
<script>
import { toRefs, ref, watch } from "vue";
export default {
  props: {
    notes: String,
  },
  setup(props, context) {
    const notesValue = ref("");
    const { notes } = toRefs(props);

    notesValue.value = notes.value;

    watch(
      () => notesValue.value,
      (newVal) => {
        context.emit("update:notes", newVal);
      }
    );
    return {
      notesValue,
    };
  },
};
</script>
