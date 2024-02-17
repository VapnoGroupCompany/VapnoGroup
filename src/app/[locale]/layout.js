import './globals.css'
import { Inter } from 'next/font/google'
import {notFound} from 'next/navigation';
import {unstable_setRequestLocale} from 'next-intl/server';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Інноваційна група Vapno Group',
  description: 'Інформація про контакти, продукцію та послуги компанії "Інноваційна група Vapno Group" (ФОП Данилюк Р.В.).',
  keywords: 'вапно, виробництво вапна, послуги, контакти, Інноваційна група, виробник вапна, Україна, пушонка, сільськогосподарське вапно, цемент, бетон, ph грунту, кислотність грунту'
};
const locales = ['uk','en'];
 
export default function LocaleLayout({children, params: {locale}}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
