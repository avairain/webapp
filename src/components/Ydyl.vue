<template>
  <div>
    <div @click="downLoad">downLoad</div>
  </div>
</template>

<script>
import { ydyl } from '@/common/js/interface'

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
  mounted () {
    console.log(ydyl)
  },
  methods: {
    downLoad () {
      ydyl()
        .then(data => {
          console.log(data)
          let blob = new Blob([data], { type: 'application/vnd.ms-excel' })
          let fileName = 'template.xls'
          if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveBlob(blob, fileName)
          } else {
            let link = document.createElement('a')
            link.href = window.URL.createObjectURL(blob)
            link.download = fileName
            document.body.appendChild(link)
            console.log(data, blob)
            link.click()
            window.URL.revokeObjectURL(link.href)
          }
        })
    }
  }
  // [template | render]: ``,
  // renderError: function,
}
</script>

<style lang="less">

</style>
