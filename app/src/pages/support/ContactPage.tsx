import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollReveal } from '@/components/scroll-reveal';

export function ContactSection() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mnnzjvqp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(t('contact.toastSuccess'), { description: t('contact.toastSuccessDesc') });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch {
      toast.error(t('contact.toastError'), { description: t('contact.toastErrorDesc') });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{t('contact.getInTouch')}</h3>
                <p className="text-muted-foreground mb-6">{t('contact.respondTime')}</p>
              </div>

              <div className="space-y-6">
                <motion.a
                  href="mailto:service@crossmor.com"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-surface-1 rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t('contact.emailSupport')}</div>
                    <div className="text-muted-foreground">service@crossmor.com</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://t.me/crosspay_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-surface-1 rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t('contact.telegram')}</div>
                    <div className="text-muted-foreground">https://t.me/crosspay_official</div>
                  </div>
                </motion.a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-surface-1 rounded-2xl border border-border p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">{t('contact.sendMessage')}</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t('contact.name')}</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t('contact.namePlaceholder')}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t('contact.email')}</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t('contact.emailPlaceholder')}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t('contact.subject')}</label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={t('contact.subjectPlaceholder')}
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t('contact.message')}</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('contact.messagePlaceholder')}
                    required
                    rows={5}
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:opacity-90 text-white border-0 py-6 text-base"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      {t('contact.sending')}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {t('contact.sendButton')}
                    </>
                  )}
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}
