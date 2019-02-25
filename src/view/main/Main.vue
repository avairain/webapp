<template>
  <div>
    <header></header>
    <section>
      <router-view></router-view>
    </section>
    <footer>
      <el-button type="primary">
        <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=7c936ddde2a0026cd11b7ab5aa18d145b20b0b7ddeba055fa3a310cd35097f0d" style="color: #fff;">加人我们这群老吊</a>
      </el-button>
    </footer>
  </div>
</template>

<script>
//  import  from ''

export default {
  // el: '', // 1
  // name: '', // 2
  // parent: null, // 2 vm
  // functional: false, // 3
  // delimiters: [], // 4 模板修改器 {{}} ==> ${} ===> ['${', '}']
  // comments: false, // 4
  // components: {}, // 5
  // directives: {}, // 5
  // filters: {}, // 5
  // extends: {} || function, // 6
  // mixins: [], // 6
  // inheritAttrs: true, // 7 父组件挂在子组件根元素上的属性
  // model: {}, // 7
  // [props || propsData]: {}, // 7
  data () {
    return {}
  },
  computed: {},
  watch: {},
  mounted () {},
  methods: {}
  // [template | render]: ``,
  // renderError: function,
}
</script>

<style lang="less" scoped>
@import '~@/common/less/common.less';

@commonFooterHeight: 45px;
div {
  section {
    margin: 0 2em;
  }
}
footer {
  height: @commonFooterHeight;
  text-align: right;
  line-height: @commonFooterHeight;
  margin-right: 2em;
}
</style>
