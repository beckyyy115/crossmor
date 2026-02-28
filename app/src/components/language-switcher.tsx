import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { localeOptions } from '@/lib/locales';
import { loadLocale } from '@/i18n';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const current = localeOptions.find((l) => l.code === i18n.language) ?? localeOptions[0];

  const handleSelect = async (code: string) => {
    if (code === i18n.language) {
      setOpen(false);
      return;
    }
    await loadLocale(code);
    await i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-1">
          <Globe className="w-4 h-4" />
          <span className="text-sm">{current.short}</span>
          <ChevronDown className="w-3 h-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-h-[70vh] overflow-y-auto">
        {localeOptions.map((loc) => (
          <DropdownMenuItem
            key={loc.code}
            onClick={() => handleSelect(loc.code)}
            className={i18n.language === loc.code ? 'bg-primary/10 text-primary' : ''}
          >
            <span className="font-medium">{loc.short}</span>
            <span className="text-muted-foreground ml-2 text-xs">{loc.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
