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
      <form action="/upload" id="uploadForm" enctype="image/*" method="post">
        <p>
          <label for="file" style="font-weight: bold">添加图片：</label>
          <input type="file" name="file" id="file" />
        </p>
        <p>
          <a style="font-weight: bold">生成模型：</a>
          <select name="mode" id="select_2" tabindex="0">
            <option value="0">测试用</option>
            <option value="1">Mubert</option>
            <option value="2">Riffusion</option>
          </select>
        </p>
        <p>
          <a style="font-weight: bold">您是否有期待的情感色彩：</a>
          <select name="emo" id="select_1" tabindex="1">
            <option value="1">none</option>
            <option value="2">anger</option>
            <option value="3">contentment</option>
            <option value="4">excitement</option>
            <option value="5">sadness</option>
            <option value="6">amusement</option>
          </select>
        </p>

        <div style="text-align: center; width: 80%">
          <button id="submitButton" type="button">提交</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>

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