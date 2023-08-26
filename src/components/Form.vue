<template>
  <div class="form">
    <div class="img-source">
      <div>
        <el-upload class="upload-img" drag v-model="fileList" :auto-upload=false accept="image" limit=1 action="#">
          <el-icon class="el-icon--upload">
            <upload-filled/>
          </el-icon>
          <div class="el-upload__text">将图片拖动到此处或<em>点击上传</em></div>
        </el-upload>
      </div>
      <div class="img-url">
        <el-input placeholder="请输入图片链接" v-model="imgUrl" clearable>
          <template #prepend>https://</template>
        </el-input>
      </div>
    </div>
    <div class="options">
      <div class="select-mode">
        <el-select v-model="selectedMode" placeholder="请选择模式">
          <el-option v-for=" item  in  modes " :key="(item.value as number)" :label="(item.mode as string)"
                     :value="(item.value as number)">{{ item.mode }}
          </el-option>
        </el-select>
      </div>
      <div class="select-emo">
        <el-select v-model="selectedMotion" placeholder="请选择情感">
          <el-option v-for=" item  in  motions " :key="(item.value as number)" :label="(item.motion as string)"
                     :value="(item.value as number)">{{ item.motion }}
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="submit">
      <el-button type="primary"> 提交
        <el-icon>
          <Upload/>
        </el-icon>
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {UploadFilled, Upload} from '@element-plus/icons-vue';
import {ElOption, UploadUserFile} from 'element-plus';
import {ref} from 'vue';

const fileList = ref<UploadUserFile[]>()
const imgUrl = ref<String>("")
const selectedMode = ref<Number>(0)
const selectedMotion = ref<Number>(0)

const motions: Array<{
  value: number,
  motion: string
}> = [{
  value: 0,
  motion: "高兴"
},
  {
    value: 1,
    motion: "悲伤"
  },
  {
    value: 2,
    motion: "愤怒"
  },
  {
    value: 3,
    motion: "惊讶"
  },
  {
    value: 4,
    motion: "恐惧"
  },
  {
    value: 5,
    motion: "厌恶"
  },
  {
    value: 6,
    motion: "中性"
  }]
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

.options {
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.img-url {
  margin: 5px 0px;
}

.submit {

}


</style>