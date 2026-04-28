<template>
  <div>
    <h1>R2 檔案上傳測試</h1>

    <!-- 上傳區域 -->
    <div>
      <input
        type="file"
        @change="handleFileChange"
        accept="image/*,.pdf,.txt"
      />
      <button @click="uploadFile" :disabled="uploading || !selectedFile">
        {{ uploading ? '上傳中...' : '上傳' }}
      </button>
    </div>

    <!-- 上傳結果 -->
    <div v-if="uploadResult">
      <p>✅ 上傳成功！</p>
      <p>Key: {{ uploadResult.key }}</p>
      <p>大小: {{ (uploadResult.size / 1024).toFixed(1) }} KB</p>
    </div>

    <!-- 錯誤訊息 -->
    <p v-if="error" style="color: red;">❌ {{ error }}</p>

    <hr />

    <!-- 檔案列表 -->
    <h2>已上傳的檔案</h2>
    <button @click="refreshFiles">重新整理</button>
    <ul v-if="files.length">
      <li v-for="file in files" :key="file.key">
        <strong>{{ file.key }}</strong>
        ({{ (file.size / 1024).toFixed(1) }} KB)
      </li>
    </ul>
    <p v-else>還沒有檔案</p>
  </div>
</template>

<script setup lang="ts">
// 使用後台版面 template
definePageMeta({
  layout: 'backstage',
});

// 使用 composable（自動導入，不需 import）
const { upload, getFileList } = useBucketApi();

// 頁面狀態
const selectedFile = ref<File | null>(null);
const uploading = ref(false);
const uploadResult = ref<any>(null);
const error = ref('');
const files = ref<any[]>([]);

// 選擇檔案
const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  selectedFile.value = target.files?.[0] || null;
  uploadResult.value = null;
  error.value = '';
};

// 上傳檔案
const uploadFile = async () => {
  if (!selectedFile.value) return;
  uploading.value = true;
  error.value = '';

  try {
    uploadResult.value = await upload(selectedFile.value);
    await refreshFiles();
  } catch (err: any) {
    error.value = err.data?.message || err.message || '上傳失敗';
  } finally {
    uploading.value = false;
  }
};

// 取得檔案列表
const refreshFiles = async () => {
  try {
    files.value = await getFileList();
  } catch (err: any) {
    console.error('取得檔案列表失敗:', err);
  }
};

// 頁面載入時取得檔案列表
onMounted(() => refreshFiles());
</script>