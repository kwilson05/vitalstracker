<template>
  <section class="Panel">
    <slot></slot>
  </section>
</template>
export default { name: 'Panel', }
<style scoped>
.Panel {
  border-radius: 4px;
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 4px;
}
</style>
