<template>
  <div class="dashboard">
    <header><el-button @click="search" style="vertical-align: middle;">search</el-button><i>508</i><span @click="editInfo">编辑</span></header>
    <section class="main-wrap">
      <div class="content">
        <div
          v-for="item in info"
          :key="item.id"
          :class="[item.uName, item.theme, {nomarl: !nomarl}]">
          <header>{{item.name}}</header>
          <section>
            <div class="detail">
              <div class="description">
                {{item.description}}
              </div>
              <div class="tips" :style="`color: ${item.theme}`">
                <span
                  v-for="(tip, index) in item.tips"
                  :key="index"
                  :style="`text-shadow: 2px 2px 2px${item.uName === 'zhujun' ? '#000' : '#fff' }`">{{tip}}</span>
              </div>
            </div>
          </section>
        </div>
        <div class="speacil" @dblclick="changeHeight">{{title}}</div>
        <div
          v-for="item in infoSpeacil"
          :key="item.uName"
          :class="[item.uName, item.theme]">
          <header>{{item.name}}</header>
          <section>
            <div class="detail">
              <div class="description">
                {{item.description}}
              </div>
              <div class="tips speacil" :style="`color: ${item.theme}`">
                <span
                  v-for="(tip, index) in item.tips"
                  :key="index">{{tip}}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
    <el-dialog
      title="提示"
      :visible.sync="showMask"
      custom-class="definedDialog"
      width="30%">
        <div>
          <div class="row">
            <div v-if="viewSpeacil">
              叫<a href="tencent://Message/?Uin=753342031&websiteName=www.oicqzone.com&Menu=yes">爸爸</a>，爸爸给你腾个大点地方
            </div>
            <div v-else></div>
            <el-select
              v-model="userId">
              <el-option
                v-for="item in infoList"
                :key="item.id"
                :value="item.id"
                :label="item.name"></el-option>
            </el-select>
          </div>
          <div class="row">
            <div>这个{{userId === 1 ? '帅哥' : '沙雕'}}的描述</div>
            <el-input
              v-model="description"
              placeholder="一个字都没有？不会是傻子吧？"></el-input>
          </div>
          <div class="row">
            <div>这个{{userId === 1 ? '帅哥' : '沙雕'}}的标签</div>
            <el-input
              :value="tipsArray"
              @change="changeTips"
              placeholder="一个字都没有？不会是傻子吧？"></el-input>
          </div>
        </div>
        <div slot="footer">
          <el-button
            type="primary"
            @click="update508Member">确定了哈</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
import { getInfoList, /* add508Member, delete50Member, */ update508Member } from '@/common/js/interface'

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
    return {
      infoList: [
        {
          id: 0,
          uName: 'liuyihui',
          theme: 'pink',
          name: '刘一徽',
          description: '这是508最大的矮爹，人蛮好就是好丑就是了',
          tips: ['矮', '丑']
        },
        {
          id: 1,
          uName: 'yaoxingyu',
          theme: 'red',
          name: '姚星宇',
          description: '这是508最帅的，不接受反驳',
          tips: ['帅', '好帅', '真的帅']
        },
        {
          id: 2,
          uName: 'zhujun',
          theme: 'yellow',
          name: '朱俊',
          description: '这是508最大的种马，从背景就看得出来',
          tips: ['种马']
        },
        {
          id: 3,
          uName: 'chengshuai',
          theme: 'black',
          name: '成帅',
          description: '这是508最老的，最有钱的一个(狗几把玩的游戏号人品是真滴好)',
          tips: ['成熟', '富']
        },
        {
          id: 4,
          speacil: true,
          uName: 'zhouxiaolong',
          theme: 'green',
          name: '周小龙',
          description: '这是508最丑的肥逼，没有之一',
          tips: ['肥', '丑']
        }
      ],
      title: '这是508',
      flag: 0,
      form: {
      },
      viewSpeacil: false,
      showMask: false,
      userId: null,
      description: '',
      tips: []
    }
  },
  computed: {
    info: function () {
      return this.infoList.filter(v => !v.speacil)
    },
    infoSpeacil: function () {
      return this.infoList.filter(v => v.speacil)
    },
    tipsArray: function () {
      return this.tips.join(',')
    },
    nomarl: function () {
      return this.infoList.some(v => v.speacil)
    }
  },
  watch: {
    userId: function (v) {
      let o = this.infoList.find(val => val.id === v) || {}
      this.description = o.description
      this.tips = o.tips || []
      this.viewSpeacil = o.speacil
    }
  },
  mounted () {
    this.search()
    // this.infoList.forEach(v => {
    //   add508Member(v)
    // })
    /* delete50Member()
      .then(data => {
        console.log(data)
        // this.search()
      }) */
  },
  methods: {
    search () {
      this._getInfoList()
    },
    _getInfoList () {
      getInfoList()
        .then(data => {
          if (data.status === '0000') {
            // this.title = data.title
            this.infoList = data.result
          } else {
            this.infoList = []
            // this.$message.warning()
          }
        })
        .catch(() => {
          this.$message.error('服务器异常')
        })
    },
    editInfo () {
      this.showMask = true
      this.userId = null
      this.tips = []
      return false
      /* let message = '待续'
      if (this.flag >= 3) {
        message = '还点啊？没完没了了？'
      }
      if (this.flag >= 5) {
        message = '再点我就不理你了'
      }
      if (this.flag >= 6) {
        message = '不信？'
      }
      if (this.flag >= 7) {
        message = '告辞'
      }
      if (this.flag >= 8) {
        return false
      }
      this.$confirm(message, '提示')
        .then(action => {
          console.log(action)
          this.flag++
        })
        .catch(err => {
          console.log(err)
        }) */
    },
    changeHeight () {
      update508Member({
        id: 4,
        speacil: false,
        uName: 'zhouxiaolong',
        theme: 'green',
        name: '周小龙',
        description: '这是508最丑的肥逼，没有之一',
        tips: ['肥', '丑']
      })
        .then(data => {
          console.log(data)
          if (data.status === '0000') {
            this.$message.success('o89k')
            this.showMask = false
            this._getInfoList()
          }
        })
    },
    update508Member () {
      if (this.userId === null) return false
      let o = this.infoList.find(val => val.id === this.userId) || {}
      let form = { ...o, description: this.description, tips: this.tips }
      console.log(form)
      update508Member(form)
        .then(data => {
          console.log(data)
          if (data.status === '0000') {
            this.$message.success('o89k')
            this.showMask = false
            this._getInfoList()
          }
        })
    },
    changeTips (value) {
      console.log(value)
      if (value.length > 10) {
        return false
      }
      let arr = value.split(',') || []
      console.log(arr)
      if (arr.length > 3) {
        this.$message.warning('你是沙雕么？这么多标签？')
        this.tips = [ ...this.tips ]
        return false
      }
      this.tips = arr
    }
  }
  // [template | render]: ``,
  // renderError: function,
}
</script>

<style lang="less" scoped>
@import '~@/common/less/common.less';

@commonHeaderHeight: 50px;
.dashboard {
  > header {
    text-align: center;
    font-size: @commonHeaderHeight;
    height: @commonHeaderHeight;
    line-height: @commonHeaderHeight;
    position: relative;
    z-index: 1;
    // i {
    //   display: inline-block;
    //   line-height: 20px;
    // }
    span {
      display: inline-block;
      line-height: 20px;
      font-size: 20px;
      .porint
    }
  }
  section.main-wrap {
    width: calc(~'100vw - 4em');
    margin: 0 auto;
    > div.content {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      > div {
        flex-basis: 50%;
        height: calc(~"(100vh - 95px) / 5 * 2");
        &.speacil {
          height: calc(~"(100vh - 95px) / 5 * 1");
          flex: 1;
          position: relative;
          z-index: 1;
        }
        &:last-child {
          height: calc(~"(100vh - 95px) / 5 * 1");
          flex-basis: 30%;
        }
        &.nomarl {
          height: calc(~"(100vh - 95px) / 3 - 3em");
        }
      }
      div.detail {
        div.tips {
          text-align: center;
          display: flex;
          height: calc(~"(100vh - 95px) / 5 * 2 - 3em");
          position: relative;
          z-index: 0;
          span {
            display: block;
            transform: rotateZ(-30deg);
            width: 100%;
            height: 100%;
            font-size: 50px;
            line-height: calc(~"(100vh - 95px) / 5 * 2 - 3em");
            font-weight: bolder;
            text-shadow: 2px 2px 2px #fff;
          }
          &.speacil {
            text-align: center;
            display: flex;
            height: calc(~"(100vh - 95px) / 5 * 1 - 3em");
            span {
              display: block;
              transform: rotateZ(-30deg);
              width: 100%;
              height: 100%;
              font-size: 25px;
              line-height: calc(~"(100vh - 95px) / 5 * 1 - 3em");
              font-weight: bolder;
            }
          }
        }
      }
    }
  }
}
</style>

<style lang="less">
  .definedDialog {
    .el-dialog__body {
      width: 100%;
      > div {
        width: 100%;
      }
      .row {
        width: 100%;
        display: flex;
        white-space: nowrap;
        div {
          flex: 1;
          text-align: center;
          // white-space: nowrap;
          a {
            display: inline;
            color: red
          }
          height: 40px;
          line-height: 40px;
        }
      }
    }
  }
</style>
