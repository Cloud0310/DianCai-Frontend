<template>
  <div class="row">
    <div class="side">
      <div class="col-3 menu">
        <ul>
          <li><a> 操作指南</a></li>
          <p>您可以输入一张您希望获得配乐的图片</p>
          <p>点击添加图片，选择您的图片。</p>
          <p>点击提交，等待生成您的专属配乐吧！</p>
          <br />
          <li><a>温馨提示</a></li>
          <p>
            图片与音乐的情感色彩本就是主观的，有时出现音乐与图片不适配的情况是正常的。
          </p>
          <p>如果您感到音乐风格与图片并不适配，您可以多次输入进行尝试。</p>
          <p>直到获得令您满意的音乐~</p>
        </ul>
        <!-- 定义一个 HTML 无序列表 -->
      </div>
    </div>
    <div class="main">
      <!-- <div style="text-align: center; width: 85%" class="in-page-title">
        <h1>点彩成乐：生成您的专属配乐</h1>
      </div> -->
      <!-- 创建 form 表单 -->
      <Form />

      <div style="text-align: center; width: 80% height: 10%;">
        <button id="submitButton" type="button">提交</button>
      </div>

    </div>
  </div>
</template>
<script lang="ts" setup>
import Form from '../components/Form.vue';


// import { ref } from 'vue'

// const isSubmitted = ref(false)

// function handleFormSubmit() {
//   isSubmitted.value = true

// }

</script>

<style scoped>
.in-page-title {
  text-align: center;
  width: 85%;
}

.content-box {
  display: flex;
}
</style>