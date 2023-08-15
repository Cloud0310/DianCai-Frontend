<template>
  <div class="form">
    <div class="img-source">
      <div>
        <el-upload class="upload-img" drag v-model="fileList" :auto-upload=false accept="image" limit=1 action="#">
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">将图片拖动到此处或<em>点击上传</em></div>
        </el-upload>
      </div>
      <div class="img-url">
        <el-input placeholder="请输入图片链接" v-model="imgUrl" clearable>
          <template #prepend>https://</template>
        </el-input>
      </div>
    </div>
    <div class="select-mode">
      <el-select v-model="selectedMode" placeholder="请选择模式">
        <el-option v-for=" item  in  modes " :key="(item.value as number)" :label="(item.mode as string)"
          :value="(item.value as number)">{{ item.mode }}
        </el-option>
      </el-select>
    </div>
    <div class="select-emo"></div>
  </div>
</template>

<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue';
import { ElOption, UploadUserFile } from 'element-plus';
import { ref } from 'vue';

const fileList = ref<UploadUserFile[]>()
const imgUrl = ref<String>("")
const selectedMode = ref<Number>(0)
const modes: Array<{
  value: Number,
  mode: String
}>
  = [{
    value: 0,
    mode: "测试用"
  },
  {
    value: 1,
    mode: "Mubert模型"
  },
  {
    value: 2,
    mode: "Riffusion模型"
  },
  {
    value: 3,
    mode: "MusicGen模型"
  }]

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
  min-width: 800px;
  height: 25%;
}

.img-url {
  margin: 5px 0px;
}
</style>