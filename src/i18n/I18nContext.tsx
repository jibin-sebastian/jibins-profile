import React, { createContext, useContext, useMemo, useState } from 'react';
import type { Language, SiteContent } from './types';
import { contentEn } from './content.en';
import { contentDe } from './content.de';

type I18nValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: SiteContent;
};

const STORAGE_KEY = 'site_language';

const I18nContext = createContext<I18nValue | undefined>(undefined);

function getInitialLanguage(): Language {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'de') return stored;
  } catch {
    // ignore
  }

  // Prefer German for German locale browsers
  const browserLang = (navigator.language || '').toLowerCase();
  if (browserLang.startsWith('de')) return 'de';
  return 'en';
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => getInitialLanguage());

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  };

  const content = useMemo(() => {
    return language === 'de' ? contentDe : contentEn;
  }, [language]);

  const value = useMemo<I18nValue>(() => ({ language, setLanguage, content }), [language, content]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

