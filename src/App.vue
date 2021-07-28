<template>
  <router-view />
</template>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }
  html,
  body,
  #app {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    // overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
  }
  body * {
    font-size: 14px;
  }
</style>
