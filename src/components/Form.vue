<template>
  <form action="/upload" id="uploadForm" enctype="image/*" method="post">
    <li>
      <label for="file" style="font-weight: bold">添加图片：</label>
      <input type="file" name="file" id="file" />
    </li>
    <li>
      <a style="font-weight: bold">生成模型：</a>
      <select name="mode" id="select_2" tabindex="0">
        <option value="0">测试用</option>
        <option value="1">Mubert</option>
        <option value="2">Riffusion</option>
      </select>
    </li>
    <li>
      <a style="font-weight: bold">您是否有期待的情感色彩：</a>
      <select name="emo" id="select_1" tabindex="1">
        <option value="1">none</option>
        <option value="2">anger</option>
        <option value="3">contentment</option>
        <option value="4">excitement</option>
        <option value="5">sadness</option>
        <option value="6">amusement</option>
      </select>
    </li>
  </form>
</template>