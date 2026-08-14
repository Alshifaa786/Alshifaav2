import { CLINIC_INFO } from '../data/content';

/**
 * Encodes and opens WhatsApp chat with Al Shifaa Intake Team (+254 718 937 074)
 * with the pre-filled message instantly.
 */
export const openWhatsAppWithMessage = (message: string) => {
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodedText}`;

  // Direct redirection to WhatsApp
  try {
    const win = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = whatsappUrl;
    }
  } catch (err) {
    window.location.href = whatsappUrl;
  }
};
