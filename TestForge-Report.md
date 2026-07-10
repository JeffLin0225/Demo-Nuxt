# 🔧 TestForge 測試報告

![Tests](https://img.shields.io/badge/Tests-80_Passed,_68_Failed-red)
![Coverage](https://img.shields.io/badge/Coverage-0%25-red)
![Threshold](https://img.shields.io/badge/Threshold-80%25-red)

> 📅 報告產生時間：2026/7/10 下午5:38:54
> 🔧 由 [TestForge](https://github.com/JeffLin0225/testforge) 自動產生

---

## 📋 測試總覽

| 指標 | 數值 |
| --- | --- |
| 測試檔案數 | 25 |
| 總測試數 | 148 |
| ✅ 通過 | 80 |
| ❌ 失敗 | 68 |
| 通過率 | 54.1% |

## 📄 測試檔案結果

| 檔案名稱 | 狀態 | 通過 | 失敗 | 總數 |
| --- | --- | --- | --- | --- |
| `app.nuxt.test.ts` | ✅ | 3 | 0 | 3 |
| `error.nuxt.test.ts` | ✅ | 7 | 0 | 7 |
| `AppHeader.nuxt.test.ts` | ❌ | 0 | 7 | 7 |
| `BackStageHeader.nuxt.test.ts` | ✅ | 3 | 0 | 3 |
| `PostCard.nuxt.test.ts` | ❌ | 3 | 2 | 5 |
| `useAuthState.test.ts` | ❌ | 2 | 3 | 5 |
| `useBucketApi.test.ts` | ✅ | 5 | 0 | 5 |
| `useCounter.test.ts` | ❌ | 2 | 3 | 5 |
| `admin.nuxt.test.ts` | ❌ | 0 | 5 | 5 |
| `backstage.nuxt.test.ts` | ✅ | 3 | 0 | 3 |
| `default.nuxt.test.ts` | ✅ | 3 | 0 | 3 |
| `about.nuxt.test.ts` | ❌ | 0 | 5 | 5 |
| `index.nuxt.test.ts` | ❌ | 0 | 7 | 7 |
| `login.nuxt.test.ts` | ❌ | 0 | 9 | 9 |
| `fileNameCleaning.test.ts` | ✅ | 9 | 0 | 9 |
| `formateData.test.ts` | ❌ | 3 | 3 | 6 |
| `useAi.test.ts` | ❌ | 6 | 3 | 9 |
| `useBucket.test.ts` | ❌ | 6 | 3 | 9 |
| `useDB.test.ts` | ❌ | 6 | 3 | 9 |
| `useVectorize.test.ts` | ❌ | 6 | 3 | 9 |
| `index.nuxt.test.ts` | ✅ | 3 | 0 | 3 |
| `upload.nuxt.test.ts` | ❌ | 0 | 12 | 12 |
| `index.nuxt.test.ts` | ✅ | 3 | 0 | 3 |
| `index.nuxt.test.ts` | ✅ | 4 | 0 | 4 |
| `poster-[id].nuxt.test.ts` | ✅ | 3 | 0 | 3 |

## ❌ 失敗的測試

### `AppHeader.nuxt.test.ts`

- **AppHeader.vue 應該能正常掛載**
  ```
  ReferenceError: useAuthState is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/components/AppHeader.vue:32:28)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **AppHeader.vue 掛載後不應有 console 錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'ReferenceError: useAuthState is not d…' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/components/AppHeader.nuxt.test.ts:41:40
  ```
- **AppHeader.vue 按鈕「登出」應該存在**
  ```
  ReferenceError: useAuthState is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/components/AppHeader.vue:32:28)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **AppHeader.vue 點擊「登出」不應崩潰**
  ```
  ReferenceError: useAuthState is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/components/AppHeader.vue:32:28)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **AppHeader.vue 條件渲染 (isAuth) 不同值不應崩潰**
  ```
  ReferenceError: useAuthState is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/components/AppHeader.vue:32:28)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **AppHeader.vue 條件渲染 (isAuth) 不同值不應崩潰**
  ```
  ReferenceError: useAuthState is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/components/AppHeader.vue:32:28)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **AppHeader.vue 渲染結果應與快照一致**
  ```
  ReferenceError: useAuthState is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/components/AppHeader.vue:32:28)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```

### `PostCard.nuxt.test.ts`

- **PostCard.vue 應該渲染 prop: title**
  ```
  AssertionError: expected '#' to contain 'Test Value'
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/components/PostCard.nuxt.test.ts:52:28
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:302:11
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:1903:26
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:2326:20
  ```
- **PostCard.vue 應該渲染 prop: body**
  ```
  AssertionError: expected '#' to contain 'Test Value'
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/components/PostCard.nuxt.test.ts:57:28
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:302:11
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:1903:26
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:2326:20
  ```

### `useAuthState.test.ts`

- **useAuthState 正常呼叫不應拋出錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'ReferenceError: useState is not defin…' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/composables/useAuthState.test.ts:19:38
  ```
- **useAuthState 應該有回傳值**
  ```
  ReferenceError: useState is not defined
      at useAuthState (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/composables/useAuthState.ts:4:20)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/composables/useAuthState.test.ts:23:20
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:302:11
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:1903:26
  ```
- **useAuthState 回傳值應與快照一致（偵測非預期變更）**
  ```
  ReferenceError: useState is not defined
      at useAuthState (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/composables/useAuthState.ts:4:20)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/composables/useAuthState.test.ts:28:20
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:302:11
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:1903:26
  ```

### `useCounter.test.ts`

- **useCounter 正常呼叫不應拋出錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'ReferenceError: ref is not defined' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/composables/useCounter.test.ts:19:36
  ```
- **useCounter 應該有回傳值**
  ```
  ReferenceError: ref is not defined
      at useCounter (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/composables/useCounter.ts:2:19)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/composables/useCounter.test.ts:23:20
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:302:11
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:1903:26
  ```
- **useCounter 回傳值應與快照一致（偵測非預期變更）**
  ```
  ReferenceError: ref is not defined
      at useCounter (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/composables/useCounter.ts:2:19)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/composables/useCounter.test.ts:28:20
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:302:11
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:1903:26
  ```

### `admin.nuxt.test.ts`

- **admin.vue 應該能正常掛載**
  ```
  ReferenceError: useAuthState is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/layouts/admin.vue:27:20)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **admin.vue 掛載後不應有 console 錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'ReferenceError: useAuthState is not d…' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/layouts/admin.nuxt.test.ts:41:40
  ```
- **admin.vue 按鈕「安全登出」應該存在**
  ```
  ReferenceError: useAuthState is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/layouts/admin.vue:27:20)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **admin.vue 點擊「安全登出」不應崩潰**
  ```
  ReferenceError: useAuthState is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/layouts/admin.vue:27:20)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **admin.vue 渲染結果應與快照一致**
  ```
  ReferenceError: useAuthState is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/layouts/admin.vue:27:20)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```

### `about.nuxt.test.ts`

- **about.vue 應該能正常掛載**
  ```
  ReferenceError: useCounter is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/about.vue:21:43)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **about.vue 掛載後不應有 console 錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'ReferenceError: useCounter is not def…' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/pages/about.nuxt.test.ts:41:40
  ```
- **about.vue 按鈕「家家」應該存在**
  ```
  ReferenceError: useCounter is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/about.vue:21:43)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **about.vue 按鈕「簡簡」應該存在**
  ```
  ReferenceError: useCounter is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/about.vue:21:43)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **about.vue 渲染結果應與快照一致**
  ```
  ReferenceError: useCounter is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/about.vue:21:43)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```

### `index.nuxt.test.ts`

- **index.vue 應該能正常掛載**
  ```
  ReferenceError: useSeoMeta is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/index.vue:61:1)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **index.vue 掛載後不應有 console 錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'ReferenceError: useSeoMeta is not def…' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/pages/index.nuxt.test.ts:41:40
  ```
- **index.vue 按鈕「🔥 測試前端崩潰             直接在前端 throw 錯誤。」應該存在**
  ```
  ReferenceError: useSeoMeta is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/index.vue:61:1)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **index.vue 點擊「🔥 測試前端崩潰             直接在前端 throw 錯誤。」不應崩潰**
  ```
  ReferenceError: useSeoMeta is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/index.vue:61:1)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **index.vue 按鈕「📡 測試後端崩潰             呼叫後端 API 並讓它噴回 500。」應該存在**
  ```
  ReferenceError: useSeoMeta is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/index.vue:61:1)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **index.vue 點擊「📡 測試後端崩潰             呼叫後端 API 並讓它噴回 500。」不應崩潰**
  ```
  ReferenceError: useSeoMeta is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/index.vue:61:1)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **index.vue 渲染結果應與快照一致**
  ```
  ReferenceError: useSeoMeta is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/index.vue:61:1)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```

### `login.nuxt.test.ts`

- **login.vue 應該能正常掛載**
  ```
  ReferenceError: useAuthState is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/login.vue:20:27)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **login.vue 掛載後不應有 console 錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'ReferenceError: useAuthState is not d…' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/pages/login.nuxt.test.ts:41:40
  ```
- **login.vue 按鈕「模擬登入」應該存在**
  ```
  ReferenceError: useAuthState is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/login.vue:20:27)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **login.vue 點擊「模擬登入」不應崩潰**
  ```
  ReferenceError: useAuthState is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/login.vue:20:27)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **login.vue 按鈕「進入後台」應該存在**
  ```
  ReferenceError: useAuthState is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/login.vue:20:27)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **login.vue 點擊「進入後台」不應崩潰**
  ```
  ReferenceError: useAuthState is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/login.vue:20:27)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **login.vue 條件渲染 (!isAuth) 不同值不應崩潰**
  ```
  ReferenceError: useAuthState is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/login.vue:20:27)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **login.vue 條件渲染 (!isAuth) 不同值不應崩潰**
  ```
  ReferenceError: useAuthState is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/login.vue:20:27)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **login.vue 渲染結果應與快照一致**
  ```
  ReferenceError: useAuthState is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/login.vue:20:27)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```

### `formateData.test.ts`

- **formatData 正常呼叫不應拋出錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'RangeError: Invalid time value' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/utils/formateData.test.ts:19:49
  ```
- **formatData 應該有回傳值**
  ```
  RangeError: Invalid time value
      at formatData (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/utils/formateData.ts:10:8)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/utils/formateData.test.ts:23:20
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:302:11
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:1903:26
  ```
- **formatData 回傳值應與快照一致（偵測非預期變更）**
  ```
  RangeError: Invalid time value
      at formatData (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/utils/formateData.ts:10:8)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/utils/formateData.test.ts:28:20
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:302:11
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:1903:26
  ```

### `useAi.test.ts`

- **useAi 正常呼叫不應拋出錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'TypeError: Cannot read properties of …' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/utils/useAi.test.ts:19:42
  ```
- **useAi 應該有回傳值**
  ```
  TypeError: Cannot read properties of undefined (reading 'cloudflare')
      at useAi (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/utils/useAi.ts:4:26)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/utils/useAi.test.ts:23:20
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:302:11
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:1903:26
  ```
- **useAi 回傳值應與快照一致（偵測非預期變更）**
  ```
  TypeError: Cannot read properties of undefined (reading 'cloudflare')
      at useAi (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/utils/useAi.ts:4:26)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/utils/useAi.test.ts:28:20
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:302:11
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:1903:26
  ```

### `useBucket.test.ts`

- **useBucket 正常呼叫不應拋出錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'TypeError: Cannot read properties of …' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/utils/useBucket.test.ts:19:46
  ```
- **useBucket 應該有回傳值**
  ```
  TypeError: Cannot read properties of undefined (reading 'cloudflare')
      at useBucket (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/utils/useBucket.ts:4:26)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/utils/useBucket.test.ts:23:20
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:302:11
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:1903:26
  ```
- **useBucket 回傳值應與快照一致（偵測非預期變更）**
  ```
  TypeError: Cannot read properties of undefined (reading 'cloudflare')
      at useBucket (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/utils/useBucket.ts:4:26)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/utils/useBucket.test.ts:28:20
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:302:11
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:1903:26
  ```

### `useDB.test.ts`

- **useDB 正常呼叫不應拋出錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'TypeError: Cannot read properties of …' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/utils/useDB.test.ts:19:42
  ```
- **useDB 應該有回傳值**
  ```
  TypeError: Cannot read properties of undefined (reading 'cloudflare')
      at useDB (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/utils/useDB.ts:6:26)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/utils/useDB.test.ts:23:20
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:302:11
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:1903:26
  ```
- **useDB 回傳值應與快照一致（偵測非預期變更）**
  ```
  TypeError: Cannot read properties of undefined (reading 'cloudflare')
      at useDB (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/utils/useDB.ts:6:26)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/utils/useDB.test.ts:28:20
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:302:11
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:1903:26
  ```

### `useVectorize.test.ts`

- **useVectorize 正常呼叫不應拋出錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'TypeError: Cannot read properties of …' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/utils/useVectorize.test.ts:19:49
  ```
- **useVectorize 應該有回傳值**
  ```
  TypeError: Cannot read properties of undefined (reading 'cloudflare')
      at useVectorize (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/utils/useVectorize.ts:4:26)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/utils/useVectorize.test.ts:23:20
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:302:11
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:1903:26
  ```
- **useVectorize 回傳值應與快照一致（偵測非預期變更）**
  ```
  TypeError: Cannot read properties of undefined (reading 'cloudflare')
      at useVectorize (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/utils/useVectorize.ts:4:26)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/utils/useVectorize.test.ts:28:20
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:302:11
      at file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/runner/dist/chunk-artifact.js:1903:26
  ```

### `upload.nuxt.test.ts`

- **upload.vue 應該能正常掛載**
  ```
  ReferenceError: useBucketApi is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/backstage/upload.vue:76:33)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **upload.vue 掛載後不應有 console 錯誤**
  ```
  AssertionError: expected [Function] to not throw an error but 'ReferenceError: useBucketApi is not d…' was thrown
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1552:16)
      at Proxy.<anonymous> (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vitest/expect/dist/index.js:1156:15)
      at Proxy.methodWrapper (file:///home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/chai/index.js:1700:25)
      at /home/runner/work/Demo-Nuxt/Demo-Nuxt/__generated_tests__/app/pages/backstage/upload.nuxt.test.ts:41:40
  ```
- **upload.vue 按鈕「{{ uploading ? "上傳中..." : "上傳" }}」應該存在**
  ```
  ReferenceError: useBucketApi is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/backstage/upload.vue:76:33)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **upload.vue 點擊「{{ uploading ? "上傳中..." : "上傳" }}」不應崩潰**
  ```
  ReferenceError: useBucketApi is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/backstage/upload.vue:76:33)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **upload.vue 按鈕「重新整理」應該存在**
  ```
  ReferenceError: useBucketApi is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/backstage/upload.vue:76:33)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **upload.vue 點擊「重新整理」不應崩潰**
  ```
  ReferenceError: useBucketApi is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/backstage/upload.vue:76:33)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **upload.vue input 元素應該存在**
  ```
  ReferenceError: useBucketApi is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/backstage/upload.vue:76:33)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **upload.vue 條件渲染 (selectedFile) 不同值不應崩潰**
  ```
  ReferenceError: useBucketApi is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/backstage/upload.vue:76:33)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **upload.vue 條件渲染 (uploadResult) 不同值不應崩潰**
  ```
  ReferenceError: useBucketApi is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/backstage/upload.vue:76:33)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **upload.vue 條件渲染 (error) 不同值不應崩潰**
  ```
  ReferenceError: useBucketApi is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/backstage/upload.vue:76:33)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **upload.vue 條件渲染 (files.length) 不同值不應崩潰**
  ```
  ReferenceError: useBucketApi is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/backstage/upload.vue:76:33)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```
- **upload.vue 渲染結果應與快照一致**
  ```
  ReferenceError: useBucketApi is not defined
      at setup (/home/runner/work/Demo-Nuxt/Demo-Nuxt/app/pages/backstage/upload.vue:76:33)
      at callWithErrorHandling (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:200:19)
      at setupStatefulComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8066:25)
      at setupComponent (/home/runner/work/Demo-Nuxt/Demo-Nuxt/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:8028:36)
  ```

---

> 💡 如果想看詳細的互動式覆蓋率報告，請查看 `coverage/index.html`。
>
> 🔧 此報告由 [TestForge](https://github.com/JeffLin0225/testforge) 自動產生。
