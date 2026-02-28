import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { formatPrice as formatPriceUtil, formatAmount, convertUsdToLocal } from '@/lib/currency';
import { getCurrencyByLocale } from '@/lib/locales';
import type { Product } from '@/types';

/**
 * 当前语言对应的货币与价格格式化
 * 切换语言后价格会自动变为当地货币
 */
export function useCurrency() {
  const { i18n } = useTranslation();
  const currency = useMemo(
    () => getCurrencyByLocale(i18n.language),
    [i18n.language]
  );

  return useMemo(
    () => ({
      currency,
      /** 商品价格为 USD，传入 USD 金额得到当地货币显示 */
      formatPrice: (usdAmount: number) => formatPriceUtil(usdAmount, currency),
      /** 金额已是当地货币时使用（如订单 order.amount） */
      formatAmount: (amount: number, curr?: string) => formatAmount(amount, curr ?? currency),
      /** USD 转当前货币数值（下单时用） */
      usdToLocal: (usdAmount: number) => convertUsdToLocal(usdAmount, currency),
      /** 商品显示价：优先 priceByCurrency[currency]，否则按 USD 换算 */
      formatProductPrice: (product: Product): string => {
        const fixed = product.priceByCurrency?.[currency];
        if (fixed != null) return formatAmount(fixed, currency);
        return formatPriceUtil(product.price, currency);
      },
    }),
    [currency]
  );
}
