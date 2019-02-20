<template lang="pug">
el-row(:gutter="20")
  el-col(:span="8")
    h2 头部带操作菜单
    el-card.box-card(shadow="always" )
      div.clearfix(slot="header")
        span
          i.el-icon-tickets
          | 追溯阶段
        el-dropdown.oper
          i.el-icon-more
          el-dropdown-menu.dropdown-menu(slot="dropdown")
            el-dropdown-item
              router-link(tag="li", to="/components/card")
                svg-icon(icon-class="card")
                span Card
            el-dropdown-item
              router-link(tag="li", to="/components/table")
                svg-icon(icon-class="table")
                span Table
            el-dropdown-item
              router-link(tag="li", to="/login")
                svg-icon(icon-class="login")
                span Login
      div.item(v-for="n in  4" :key="n")
        | 列表内容{{n}}
  el-col(:span="8")
    h2 没有头部 有底部操作栏
    el-card.box-card(:body-style="{padding:'0px'}")
      img.img(src="https://cdn.vuetifyjs.com/images/cards/docks.jpg")
      el-row.footer(:gutter="30")
        el-col(:span="14")
          h3 小猪佩奇
        el-col.buttons(:span="10")
          el-button(type="danger" icon="el-icon-delete" circle)
          el-button(type="primary" icon="el-icon-edit" circle)
  el-col(:span="8")
    h2 只有内容
    el-card.box-card(shadow="never")
      el-row.content(:gutter="30")
        el-col(:span="10")
          img.logo(src="https://cdn.vuetifyjs.com/images/cards/docks.jpg")
        el-col(:span="14")
          h2 航空食品检测
          p.subtext 地处东北亚经济区位中心，位于我国东北部小兴安岭山麓、松嫩平原和三江平原地区，属世界著名的三大黑土带之一，辖区总面积5.54万平方公里，是国家级生态示范区。
      div.text-center
        el-button(type="danger" icon="el-icon-delete" circle)
        el-button(type="primary" icon="el-icon-edit" circle)
</template>

<script>
export default {
  name: "cards",
  data() {
    return {
      active: 0
    };
  },
  methods: {}
};
</script>
<style scoped lang="postcss">
h2 {
  line-height: 50px;
  font-weight: bold;
}
.item {
  margin-bottom: 13px;
}
.box-card {
  max-width: 500px;
  height: 350px;
  & .oper {
    float: right;
    padding: 3px 0;
    cursor: pointer;
    & .dropdown-menu {
      width: 150px;
    }
  }
  & .el-icon-tickets {
    margin-right: 8px;
  }
  & .img {
    width: 100%;
    height: 270px;
  }
  & .buttons {
    text-align: right;
  }
  & .logo {
    width: 100%;
    height: auto;
    margin-top: 20px;
    border-radius: 4px;
  }
  & .footer {
    padding: 10px 20px;
    line-height: 60px;
  }
  & .subtext {
    font-size: 12px;
    color: #909399;
  }
  & .text-center {
    margin: 0 -20px;
    border-top: 1px solid #eee;
    text-align: center;
    line-height: 80px;
  }
  & .content {
    height: 250px;
  }
  [class^="svg-icon"] {
    vertical-align: text-bottom;
    margin-right: 5px;
    width: 20px;
    text-align: center;
    font-size: 18px;
    color: #909399;
  }
}
</style>