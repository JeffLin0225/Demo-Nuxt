# 🔧 TestForge 測試報告

![Tests](https://img.shields.io/badge/Tests-45_Passed,_21_Failed-red)
![Coverage](https://img.shields.io/badge/Coverage-0%25-red)
![Threshold](https://img.shields.io/badge/Threshold-80%25-red)

> 📅 報告產生時間：2026/7/10 下午5:25:34
> 🔧 由 [TestForge](https://github.com/JeffLin0225/testforge) 自動產生

---

## 📋 測試總覽

| 指標 | 數值 |
| --- | --- |
| 測試檔案數 | 25 |
| 總測試數 | 66 |
| ✅ 通過 | 45 |
| ❌ 失敗 | 21 |
| 通過率 | 68.2% |

## 📄 測試檔案結果

| 檔案名稱 | 狀態 | 通過 | 失敗 | 總數 |
| --- | --- | --- | --- | --- |
| `app.vue.test.ts` | ❌ | 0 | 0 | 0 |
| `error.vue.test.ts` | ❌ | 0 | 0 | 0 |
| `AppHeader.vue.test.ts` | ❌ | 0 | 0 | 0 |
| `BackStageHeader.vue.test.ts` | ❌ | 0 | 0 | 0 |
| `PostCard.vue.test.ts` | ❌ | 0 | 0 | 0 |
| `useAuthState.test.ts` | ❌ | 2 | 3 | 5 |
| `useBucketApi.test.ts` | ✅ | 5 | 0 | 5 |
| `useCounter.test.ts` | ❌ | 2 | 3 | 5 |
| `admin.vue.test.ts` | ❌ | 0 | 0 | 0 |
| `backstage.vue.test.ts` | ❌ | 0 | 0 | 0 |
| `default.vue.test.ts` | ❌ | 0 | 0 | 0 |
| `about.vue.test.ts` | ❌ | 0 | 0 | 0 |
| `index.vue.test.ts` | ❌ | 0 | 0 | 0 |
| `login.vue.test.ts` | ❌ | 0 | 0 | 0 |
| `fileNameCleaning.test.ts` | ✅ | 9 | 0 | 9 |
| `formateData.test.ts` | ❌ | 3 | 3 | 6 |
| `useAi.test.ts` | ❌ | 6 | 3 | 9 |
| `useBucket.test.ts` | ❌ | 6 | 3 | 9 |
| `useDB.test.ts` | ❌ | 6 | 3 | 9 |
| `useVectorize.test.ts` | ❌ | 6 | 3 | 9 |
| `index.vue.test.ts` | ❌ | 0 | 0 | 0 |
| `upload.vue.test.ts` | ❌ | 0 | 0 | 0 |
| `index.vue.test.ts` | ❌ | 0 | 0 | 0 |
| `index.vue.test.ts` | ❌ | 0 | 0 | 0 |
| `poster-[id].vue.test.ts` | ❌ | 0 | 0 | 0 |

## ❌ 失敗的測試

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

---

> 💡 如果想看詳細的互動式覆蓋率報告，請查看 `coverage/index.html`。
>
> 🔧 此報告由 [TestForge](https://github.com/JeffLin0225/testforge) 自動產生。
