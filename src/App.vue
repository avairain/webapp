<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import url("./common/css/reset.css");
body {
  height: 100vh;
  width: 100vw;
  min-width: 1024px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: block;
}
.amap-copyright {
  // margin-left:100%;
  left: 0;
  right: -55%;
  // transform: translateX(0%)
}
.amap-logo {
  left: 0;
  right: -90%;
}
.table-wrap-rain {
  padding: 0 20px;
}
.monitoring {
  // height: 100%;
}
.el-loading-mask {
  background-color: rgba(0, 0, 0, 0.8);
}
.login {
  .el-input__inner {
    height: 40px !important;
    border-radius: 4px;
  }
  .el-input__icon {
    color: #d1d5de;
  }
}
</style>
