<template>
  <div>
    <textarea
      spellcheck="false"
      placeholder="Add some notes"
      class="VitalNotes_field"
      v-model="notesValue"
    />
  </div>
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
<style lang="scss" scoped>
.VitalNotes_field {
  padding: 20px;
  font-size: 16px;
  user-select: text;
  white-space: pre-wrap;
  outline: none;
  overflow-wrap: break-word;
  border: 1px solid $field-border-color;
  border-radius: 4px;
  resize: none;
  width: 100%;
}
</style>
