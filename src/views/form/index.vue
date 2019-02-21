<template lang="pug">
el-card
  el-form.form(:model="initForm", :rules="rules", ref="initForm", label-width="100px")
    el-form-item(label="活动名称", prop="name")
      el-input(v-model="initForm.name")
    el-form-item(label="活动区域", prop="region")
      el-select(v-model="initForm.region", placeholder="请选择活动区域")
        el-option(label="区域一", value="shanghai")
        el-option(label="区域二", value="beijing")
    el-form-item(label="活动时间", required)
      el-col(:span="11")
        el-form-item(prop="date1")
          el-date-picker(type="date", placeholder="选择日期", v-model="initForm.date1", style="width: 100%;")
      el-col(class="line", :span="2") -
      el-col(:span="11")
        el-form-item(prop="date2")
          el-time-picker(type="fixed-time", placeholder="选择时间", v-model="initForm.date2", style="width: 100%;")
    el-form-item(label="即时配送", prop="delivery")
      el-switch(v-model="initForm.delivery")
    el-form-item(label="活动性质", prop="type")
      el-checkbox-group(v-model="initForm.type")
        el-checkbox(label="美食/餐厅线上活动", name="type")
        el-checkbox(label="地推活动", name="type")
        el-checkbox(label="线下主题活动", name="type")
        el-checkbox(label="单纯品牌曝光", name="type")
    el-form-item(label="特殊资源", prop="resource")
      el-radio-group(v-model="initForm.resource")
        el-radio(label="线上品牌商赞助")
        el-radio(label="线下场地免费")
    el-form-item(label="活动形式", prop="desc")
      el-input(type="textarea", v-model="initForm.desc")
    el-form-item
      el-button(type="primary", @click="submitForm('initForm')") 立即创建
      el-button(@click="resetForm('initForm')") 重置
</template>

<script>
export default {
  name: "base-form",
  data() {
    return {
      initForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          setTimeout(() => {
            this.$message({
              message: `提交成功`,
              type: 'success'
            })
          }, 1500)
        } else {
          this.$message({
            message: `请完善信息`,
            type: 'error'
          })
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped lang="postcss">
.form{width: 660px;}
.line{text-align: center;}
</style>