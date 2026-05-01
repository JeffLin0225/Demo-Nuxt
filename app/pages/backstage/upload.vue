<template>
  <section class="mx-auto max-w-4xl space-y-6 p-6 md:p-8">
    <header class="space-y-2">
      <h1 class="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">R2 檔案上傳練習</h1>
      <p class="text-sm text-slate-600 md:text-base">
        這頁示範 Tailwind 常用組合：間距、卡片、按鈕狀態、列表樣式。
      </p>
    </header>

    <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 class="text-lg font-semibold text-slate-900">1) 上傳區</h2>
      <p class="mt-1 text-sm text-slate-600">先選檔案，再按上傳（支援 image / pdf / txt）。</p>

      <div class="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="file"
          @change="handleFileChange"
          accept="image/*,.pdf,.txt"
          class="block w-full cursor-pointer rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-700 file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-slate-200 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-slate-800 hover:file:bg-slate-300"
        />

        <button
          @click="uploadFile"
          :disabled="uploading || !selectedFile"
          class="inline-flex h-10 items-center justify-center rounded-lg px-4 text-sm font-medium text-white transition disabled:cursor-not-allowed disabled:bg-slate-300 enabled:bg-indigo-600 enabled:hover:bg-indigo-500"
        >
          {{ uploading ? '上傳中...' : '上傳' }}
        </button>
      </div>

      <p v-if="selectedFile" class="mt-3 text-sm text-slate-600">
        已選擇：<span class="font-medium text-slate-800">{{ selectedFile.name }}</span>
      </p>
    </div>

    <div v-if="uploadResult" class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
      <p class="font-semibold">✅ 上傳成功！</p>
      <p class="mt-1 text-sm">Key: {{ uploadResult.key }}</p>
      <p class="text-sm">大小: {{ formatKB(uploadResult.size) }}</p>
    </div>

    <div v-if="error" class="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-rose-700">
      <p class="font-medium">❌ {{ error }}</p>
    </div>

    <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-semibold text-slate-900">2) 已上傳檔案</h2>
        <button
          @click="refreshFiles"
          class="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          重新整理
        </button>
      </div>

      <ul v-if="files.length" class="mt-4 divide-y divide-slate-100 rounded-lg border border-slate-100">
        <li v-for="file in files" :key="file.key" class="flex items-center justify-between px-4 py-3 text-sm">
          <span class="truncate pr-3 font-medium text-slate-800">{{ file.key }}</span>
          <span class="text-slate-500">{{ formatKB(file.size) }}</span>
        </li>
      </ul>

      <p v-else class="mt-4 rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-500">還沒有檔案</p>
    </div>
  </section>
</template>

<script setup lang="ts">
// 使用後台版面 template
definePageMeta({
  layout: 'backstage',
});

// 使用 composable（自動導入，不需 import）
const { upload, getFileList } = useBucketApi();

type UploadResult = {
  key: string;
  size: number;
};

type BucketFile = {
  key: string;
  size: number;
};

// 頁面狀態
const selectedFile = ref<File | null>(null);
const uploading = ref(false);
const uploadResult = ref<UploadResult | null>(null);
const error = ref('');
const files = ref<BucketFile[]>([]);

const formatKB = (bytes: number) => `${(bytes / 1024).toFixed(1)} KB`;

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
    files.value = await getFileList() as BucketFile[];
  } catch (err: any) {
    console.error('取得檔案列表失敗:', err);
  }
};

// 頁面載入時取得檔案列表
onMounted(() => refreshFiles());
</script>