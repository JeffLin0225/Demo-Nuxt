// ============================================
// 🧪 TS 自動產生的測試 — by TestForge
// 來源：formateData.ts
// 產生時間：2026-07-10T09:38:38.947Z
// ============================================
import { describe, it, expect } from 'vitest';
import { formatData } from '../../../app/utils/formateData';

// 測試 formatData
describe('formatData', () => {
  it('應該是一個函數', () => {
    expect(typeof formatData).toBe('function');
  });
  it('預期接收 1 個必填參數 (Function.length)', () => {
    expect(formatData.length).toBe(1);
  });

  it('正常呼叫不應拋出錯誤', () => {
    expect(() => formatData([{ id: "1" }])).not.toThrow();
  });

  it('應該有回傳值', () => {
    const result = formatData([{ id: "1" }]);
    expect(result).toBeDefined();
  });

  it('回傳值應與快照一致（偵測非預期變更）', () => {
    const result = formatData([{ id: "1" }]);
    expect(result).toMatchSnapshot();
  });

  // --- 邊界值測試 ---
  it('未提供任何參數呼叫時的容錯處理（缺少必填）', () => {
    try {
      (formatData as any)();
    } catch (e) {
      expect(e).toBeDefined();
    }
  });
});
