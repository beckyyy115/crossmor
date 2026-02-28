import { usdToLocal, getRateToUsd } from './locales';

/**
 * 将 USD 价格转为当地货币并格式化为显示字符串
 * 商品数据中 price 均为 USD
 */
export function formatPrice(usdAmount: number, currency: string): string {
  const amount = usdToLocal(usdAmount, currency);
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency,
    minimumFractionDigits: currency === 'JPY' || currency === 'KRW' ? 0 : 2,
    maximumFractionDigits: currency === 'VND' || currency === 'JPY' || currency === 'KRW' ? 0 : 2,
  }).format(amount);
}

/**
 * 已知金额已是某货币时，仅做格式化（如订单详情中的 order.amount）
 */
export function formatAmount(amount: number, currency: string): string {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency,
    minimumFractionDigits: currency === 'JPY' || currency === 'KRW' ? 0 : 2,
    maximumFractionDigits: currency === 'VND' || currency === 'JPY' || currency === 'KRW' ? 0 : 2,
  }).format(amount);
}

/**
 * 将 USD 转为指定货币的数值（用于下单时写入订单金额）
 */
export function convertUsdToLocal(usdAmount: number, currency: string): number {
  return usdToLocal(usdAmount, currency);
}

export { getRateToUsd };
