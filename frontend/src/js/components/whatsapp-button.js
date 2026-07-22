// UrbanCraft — Floating WhatsApp Button Component

const WHATSAPP_NUMBER = '919360868232';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello UrbanCraft Furniture,\n\nI would like to know more about your furniture collection.'
);

export function renderWhatsAppButton() {
  // Don't create duplicate
  if (document.getElementById('whatsapp-float')) return;

  const btn = document.createElement('a');
  btn.id = 'whatsapp-float';
  btn.className = 'whatsapp-float';
  btn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
  btn.target = '_blank';
  btn.rel = 'noopener noreferrer';
  btn.setAttribute('aria-label', 'Chat with UrbanCraft on WhatsApp');
  btn.setAttribute('title', 'Chat on WhatsApp');

  btn.innerHTML = `
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16.004 2.667A13.28 13.28 0 0 0 2.72 15.947a13.2 13.2 0 0 0 1.78 6.627L2.667 29.333l6.96-1.82A13.28 13.28 0 0 0 16.004 29.333c7.36 0 13.33-5.973 13.33-13.333S23.364 2.667 16.004 2.667Zm0 24.4a11.02 11.02 0 0 1-5.94-1.733l-.427-.253-4.12 1.08 1.1-4.013-.28-.44a10.93 10.93 0 0 1-1.684-5.76c0-6.08 4.947-11.027 11.04-11.027 6.08 0 11.053 4.947 11.053 11.027-.013 6.093-4.96 11.12-11.04 11.12h-.003Zm6.053-8.267c-.333-.167-1.96-.967-2.267-1.08-.307-.107-.527-.167-.747.167s-.86 1.08-1.053 1.3c-.193.22-.387.247-.72.08-.333-.167-1.4-.513-2.667-1.64-.987-.88-1.653-1.96-1.847-2.293-.193-.333-.02-.513.147-.68.147-.147.333-.387.5-.58.167-.193.22-.333.333-.553.113-.22.06-.413-.027-.58-.087-.167-.747-1.8-1.027-2.467-.267-.64-.54-.553-.747-.56-.193-.013-.413-.013-.633-.013a1.22 1.22 0 0 0-.88.413c-.3.333-1.153 1.127-1.153 2.747s1.18 3.187 1.347 3.407c.167.22 2.32 3.547 5.627 4.973.787.34 1.4.54 1.88.693.787.253 1.507.22 2.073.133.633-.093 1.96-.8 2.24-1.573.28-.773.28-1.44.193-1.573-.08-.14-.3-.22-.633-.387Z" fill="#fff"/>
    </svg>
  `;

  document.body.appendChild(btn);
}
