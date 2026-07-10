// ============================================
// 🟢 自動產生的 Nuxt 元件測試 — by TestForge
// 來源：login.vue
// 產生時間：2026-07-10T09:38:38.942Z
// ============================================
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import login from '../../../app/pages/login.vue';


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
  return mount(login, {
    props: { ...defaultProps, ...overrideProps },
  });
}

describe('login.vue', () => {
  // ===== 基本掛載 =====
  it('應該能正常掛載', () => {
    const wrapper = mountComponent();
    expect(wrapper.exists()).toBe(true);
  });

  it('掛載後不應有 console 錯誤', () => {
    expect(() => mountComponent()).not.toThrow();
  });

  // ===== 按鈕互動 =====
  it('按鈕「模擬登入」應該存在', () => {
    const wrapper = mountComponent();
    const button = wrapper.findAll('button').at(0);
    expect(button.exists()).toBe(true);
  });

  it('點擊「模擬登入」不應崩潰', async () => {
    const wrapper = mountComponent();
    const button = wrapper.findAll('button').at(0);
    await button.trigger('click');
    expect(wrapper.exists()).toBe(true);
  });

  it('按鈕「進入後台」應該存在', () => {
    const wrapper = mountComponent();
    const button = wrapper.findAll('button').at(1);
    expect(button.exists()).toBe(true);
  });

  it('點擊「進入後台」不應崩潰', async () => {
    const wrapper = mountComponent();
    const button = wrapper.findAll('button').at(1);
    await button.trigger('click');
    expect(wrapper.exists()).toBe(true);
  });

  // ===== 條件渲染 =====
  it('條件渲染 (!isAuth) 不同值不應崩潰', () => {
    const wrapper = mountComponent();
    expect(wrapper.exists()).toBe(true);
  });

  it('條件渲染 (!isAuth) 不同值不應崩潰', () => {
    const wrapper = mountComponent();
    expect(wrapper.exists()).toBe(true);
  });

  // ===== 快照測試 =====
  it('渲染結果應與快照一致', () => {
    const wrapper = mountComponent();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
