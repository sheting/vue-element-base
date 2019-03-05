<template lang="pug">
el-row(:gutter="20")
  el-col(:span="8")
    el-card.box-card(shadow="always" )
      div.clearfix(slot="header")
        span.title
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
      div.item 你是我的玫瑰你是我的花你是我的爱人是我的牵挂你是我的玫瑰你是我的花你是我的爱人是我一生永远爱着的玫瑰花你是我的玫瑰你是我的花你是我的爱人是我的牵挂你是我的玫瑰你是我的花你是我的爱人是我一生永远爱着的玫瑰花
  //- el-col(:span="8")
  //-   h2 没有头部 有底部操作栏
  //-   el-card.box-card(:body-style="{padding:'0px'}")
  //-     img.img(src="https://cdn.vuetifyjs.com/images/cards/docks.jpg")
  //-     el-row.footer(:gutter="30")
  //-       el-col(:span="14")
  //-         h3 小猪佩奇
  //-       el-col.buttons(:span="10")
  //-         el-button(type="danger" icon="el-icon-delete" circle)
  //-         el-button(type="primary" icon="el-icon-edit" circle)
  //- el-col(:span="8")
  //-   h2 只有内容
  //-   el-card.box-card(shadow="never")
  //-     el-row.content(:gutter="30")
  //-       el-col(:span="10")
  //-         img.logo(src="https://cdn.vuetifyjs.com/images/cards/docks.jpg")
  //-       el-col(:span="14")
  //-         h2 航空食品检测
  //-         p.subtext 地处东北亚经济区位中心，位于我国东北部小兴安岭山麓、松嫩平原和三江平原地区，属世界著名的三大黑土带之一，辖区总面积5.54万平方公里，是国家级生态示范区。
  //-     div.text-center
  //-       el-button(type="danger" icon="el-icon-delete" circle)
  //-       el-button(type="primary" icon="el-icon-edit" circle)
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'card-component',
  components: {}
})
export default class CardComponent extends Vue {
}
</script>
<style scoped lang="postcss">
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
  & .title {
    color: #333;
  }
  & .item {
    margin-bottom: 10px;
    font-size: 14px;
    text-indent: 2rem;
  }
}
[class^="svg-icon"] {
  vertical-align: text-bottom;
  margin-right: 5px;
  width: 20px;
  text-align: center;
  font-size: 18px;
  color: #909399;
}
</style>