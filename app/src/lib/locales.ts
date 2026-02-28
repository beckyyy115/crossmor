/**
 * 支持的语言与对应货币、汇率（1 USD = rate 当地货币）
 * 汇率为近似值，仅用于前端展示
 */
export interface LocaleOption {
  code: string;
  name: string;
  /** 显示用短名，如 EN, 中文 */
  short: string;
  currency: string;
  /** 1 USD = rate 当地货币 */
  rateToUsd: number;
}

export const localeOptions: LocaleOption[] = [
  { code: 'en', name: 'English', short: 'EN', currency: 'USD', rateToUsd: 1 },
  { code: 'pt-BR', name: 'Português (Brasil)', short: 'PT', currency: 'BRL', rateToUsd: 5.4 },
  { code: 'hi', name: 'हिन्दी (India)', short: 'HI', currency: 'INR', rateToUsd: 83 },
  { code: 'th', name: 'ไทย (Thailand)', short: 'TH', currency: 'THB', rateToUsd: 35 },
  { code: 'vi', name: 'Tiếng Việt (Vietnam)', short: 'VI', currency: 'VND', rateToUsd: 24500 },
  { code: 'id', name: 'Bahasa Indonesia', short: 'ID', currency: 'IDR', rateToUsd: 15700 },
  { code: 'ms', name: 'Bahasa Melayu (Malaysia)', short: 'MS', currency: 'MYR', rateToUsd: 4.7 },
  { code: 'zh-CN', name: '简体中文', short: '中文', currency: 'CNY', rateToUsd: 7.24 },
  { code: 'ja', name: '日本語', short: 'JA', currency: 'JPY', rateToUsd: 149 },
  { code: 'ko', name: '한국어', short: 'KO', currency: 'KRW', rateToUsd: 1320 },
  { code: 'es', name: 'Español', short: 'ES', currency: 'EUR', rateToUsd: 0.92 },
  { code: 'fr', name: 'Français', short: 'FR', currency: 'EUR', rateToUsd: 0.92 },
  { code: 'de', name: 'Deutsch', short: 'DE', currency: 'EUR', rateToUsd: 0.92 },
];

const localeByCode = new Map(localeOptions.map((l) => [l.code, l]));

export function getLocaleOption(code: string): LocaleOption | undefined {
  return localeByCode.get(code);
}

export function getCurrencyByLocale(localeCode: string): string {
  const exact = getLocaleOption(localeCode);
  if (exact) return exact.currency;
  const base = localeCode.split('-')[0];
  return getLocaleOption(base)?.currency ?? 'USD';
}

export function getRateToUsd(currency: string): number {
  const loc = localeOptions.find((l) => l.currency === currency);
  return loc?.rateToUsd ?? 1;
}

/** 将 USD 金额转为当地货币数值 */
export function usdToLocal(usdAmount: number, currency: string): number {
  const rate = getRateToUsd(currency);
  return usdAmount * rate;
}
