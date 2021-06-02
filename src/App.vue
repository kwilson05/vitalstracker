<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="scss">
.btn {
  padding: 4px;

  width: 100px;
  background-color: $button-primary-color;
  border-radius: 4px;
  color: white;
  font-size: 14px;
}

.btn-secondary {
  @extend .btn;
  background-color: $button-secondary-color;
}

.btn:disabled {
  background-color: $button-disabled-color;
}
</style>
