import { useTranslation } from 'react-i18next';

interface DisclaimerSection {
  title: string;
  paragraphs: string[];
}

export function LegalDisclaimer() {
  const { t } = useTranslation();
  const sections = t('legal.disclaimer.sections', { returnObjects: true }) as DisclaimerSection[];

  if (!Array.isArray(sections) || sections.length === 0) {
    return null;
  }

  return (
    <div className="mt-10 pt-6 border-t border-border">
      <h2 className="text-xl font-semibold text-foreground mb-4">
        {t('legal.disclaimer.title')}
      </h2>
      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        {sections.map((section, idx) => (
          <section key={idx}>
            <div className="text-foreground font-medium mb-2">{section.title}</div>
            <ul className="list-none space-y-2">
              {Array.isArray(section.paragraphs) &&
                section.paragraphs.map((paragraph, pIdx) => (
                  <li key={pIdx}>
                    <p>{paragraph}</p>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
