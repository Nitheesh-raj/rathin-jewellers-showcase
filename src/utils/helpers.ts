export const WHATSAPP_NUMBER = "919876543210";

export const whatsappLink = (message?: string) => {
  const text = encodeURIComponent(
    message ?? "Hi, I'm interested in your jewellery collection"
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};
