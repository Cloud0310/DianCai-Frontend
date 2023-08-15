<template>
  <div class="form">
    <div class="img-source">
      <div>
        <el-upload class="upload-img" drag v-model="fileList" auto-upload=false accept="image" limit=1>
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            将图片拖动到此处或<em>点击上传</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">
              jpg/png 文件
            </div>
          </template>
        </el-upload>
      </div>
      <div class="img-url">
      </div>
    </div>
    <div class="select-mode"></div>
    <div class="select-emo"></div>
  </div>
</template>

<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue';
import { UploadUserFile } from 'element-plus';
import { ref } from 'vue';

const fileList = ref<UploadUserFile[]>()

</script>

<style scoped>
.form {
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.upload-img {
  width: 500px;
  height: 25%;
}
</style>