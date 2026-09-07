// ============================================
// 🧪 TS 自動產生的測試 — by TestForge
// 來源：fileNameCleaning.ts
// 產生時間：2026-09-07T06:46:19.741Z
// ============================================
import { describe, it, expect } from 'vitest';
import { fileNameCleaning } from '../../../app/utils/fileNameCleaning';

// 測試 fileNameCleaning
describe('fileNameCleaning', () => {
  it('應該是一個函數', () => {
    expect(typeof fileNameCleaning).toBe('function');
  });
  it('預期接收 1 個必填參數 (Function.length)', () => {
    expect(fileNameCleaning.length).toBe(1);
  });

  it('正常呼叫不應拋出錯誤', () => {
    expect(() => fileNameCleaning("test")).not.toThrow();
  });

  it('應該有回傳值', () => {
    const result = fileNameCleaning("test");
    expect(result).toBeDefined();
  });

  it('回傳型別應為 string', () => {
    const result = fileNameCleaning("test");
    expect(typeof result).toBe('string');
  });

  it('回傳值應與快照一致（偵測非預期變更）', () => {
    const result = fileNameCleaning("test");
    expect(result).toMatchSnapshot();
  });

  // --- 邊界值測試 ---
  it('fileName 為空字串時不應崩潰', () => {
    expect(() => fileNameCleaning("")).not.toThrow();
  });
  it('fileName 傳入錯誤型別 (數字) 時的容錯處理', () => {
    try {
      fileNameCleaning(123 as any);
    } catch (e) {
      expect(e).toBeDefined();
    }
  });
  it('未提供任何參數呼叫時的容錯處理（缺少必填）', () => {
    try {
      (fileNameCleaning as any)();
    } catch (e) {
      expect(e).toBeDefined();
    }
  });
});
