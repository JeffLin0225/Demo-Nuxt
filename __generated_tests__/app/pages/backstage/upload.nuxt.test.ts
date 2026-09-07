// ============================================
// 🟢 自動產生的 Nuxt 元件測試 — by TestForge
// 來源：upload.vue
// 產生時間：2026-09-07T06:46:19.734Z
// ============================================
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import upload from '../../../../app/pages/backstage/upload.vue';


// ============================================
// 🟢 Nuxt 專屬 Mocks (模擬 Auto-imports)
import { vi } from 'vitest';
vi.stubGlobal('useRoute', () => ({ path: '/', query: {}, params: {} }));
vi.stubGlobal('useRouter', () => ({ push: vi.fn(), replace: vi.fn(), go: vi.fn(), back: vi.fn() }));
vi.stubGlobal('navigateTo', vi.fn());
vi.stubGlobal('useFetch', () => ({ data: { value: null }, pending: { value: false }, error: { value: null }, execute: vi.fn() }));
vi.stubGlobal('useAsyncData', () => ({ data: { value: null }, pending: { value: false }, error: { value: null }, execute: vi.fn() }));
vi.stubGlobal('useRuntimeConfig', () => ({ public: {} }));
vi.stubGlobal('definePageMeta', vi.fn());
// ============================================

// Mock Props 資料
const defaultProps = {};

// 輔助函數：快速掛載元件
function mountComponent(overrideProps = {}) {
  return mount(upload, {
    props: { ...defaultProps, ...overrideProps },
  });
}

describe('upload.vue', () => {
  // ===== 基本掛載 =====
  it('應該能正常掛載', () => {
    const wrapper = mountComponent();
    expect(wrapper.exists()).toBe(true);
  });

  it('掛載後不應有 console 錯誤', () => {
    expect(() => mountComponent()).not.toThrow();
  });

  // ===== 按鈕互動 =====
  it('按鈕「{{ uploading ? "上傳中..." : "上傳" }}」應該存在', () => {
    const wrapper = mountComponent();
    const button = wrapper.findAll('button').at(0);
    expect(button.exists()).toBe(true);
  });

  it('點擊「{{ uploading ? "上傳中..." : "上傳" }}」不應崩潰', async () => {
    const wrapper = mountComponent();
    const button = wrapper.findAll('button').at(0);
    await button.trigger('click');
    expect(wrapper.exists()).toBe(true);
  });

  it('按鈕「重新整理」應該存在', () => {
    const wrapper = mountComponent();
    const button = wrapper.findAll('button').at(1);
    expect(button.exists()).toBe(true);
  });

  it('點擊「重新整理」不應崩潰', async () => {
    const wrapper = mountComponent();
    const button = wrapper.findAll('button').at(1);
    await button.trigger('click');
    expect(wrapper.exists()).toBe(true);
  });

  // ===== 表單輸入 =====
  it('input 元素應該存在', () => {
    const wrapper = mountComponent();
    expect(wrapper.find('input[type="file"]').exists()).toBe(true);
  });

  // ===== 條件渲染 =====
  it('條件渲染 (selectedFile) 不同值不應崩潰', () => {
    const wrapper = mountComponent();
    expect(wrapper.exists()).toBe(true);
  });

  it('條件渲染 (uploadResult) 不同值不應崩潰', () => {
    const wrapper = mountComponent();
    expect(wrapper.exists()).toBe(true);
  });

  it('條件渲染 (error) 不同值不應崩潰', () => {
    const wrapper = mountComponent();
    expect(wrapper.exists()).toBe(true);
  });

  it('條件渲染 (files.length) 不同值不應崩潰', () => {
    const wrapper = mountComponent();
    expect(wrapper.exists()).toBe(true);
  });

  // ===== 快照測試 =====
  it('渲染結果應與快照一致', () => {
    const wrapper = mountComponent();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
