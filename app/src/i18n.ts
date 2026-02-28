import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';

const STORAGE_KEY = 'crossmor_lang';

type TranslationResource = Record<string, unknown>;
const resources: Record<string, { translation: TranslationResource }> = {
  en: { translation: en as TranslationResource },
};

// 动态加载其他语言包，避免首屏过大；未加载时回退到英文
const localeModules: Record<string, () => Promise<{ default: TranslationResource }>> = {
  'pt-BR': () => import('./locales/pt-BR.json'),
  hi: () => import('./locales/hi.json'),
  th: () => import('./locales/th.json'),
  vi: () => import('./locales/vi.json'),
  id: () => import('./locales/id.json'),
  ms: () => import('./locales/ms.json'),
  'zh-CN': () => import('./locales/zh-CN.json'),
  ja: () => import('./locales/ja.json'),
  ko: () => import('./locales/ko.json'),
  es: () => import('./locales/es.json'),
  fr: () => import('./locales/fr.json'),
  de: () => import('./locales/de.json'),
};

export async function loadLocale(lang: string): Promise<void> {
  if (resources[lang]) return;
  const loader = localeModules[lang];
  if (!loader) return;
  const mod = await loader();
  resources[lang] = { translation: mod.default };
  i18n.addResourceBundle(lang, 'translation', mod.default);
}

const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
const initialLang = saved && localeModules[saved] ? saved : 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: initialLang,
  fallbackLng: 'en',
  defaultNS: 'translation',
  interpolation: { escapeValue: false },
  react: { useSuspense: true },
  // Missing keys in current language fall back to English
  saveMissing: false,
});

i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lng;
  }
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, lng);
  }
});

export default i18n;
