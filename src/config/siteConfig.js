// ============================================================
// SITE CONFIGURATION — Centralized Brand & Contact Config
// ============================================================

export const siteConfig = {
  // --- Brand ---
  agencyName: "GradVista",
  agencyInitials: "GV",
  tagline: "Building Smarter Digital Experiences. Automating Business Growth.",

  // --- Contact: Google Form ---
  googleFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSe0_Jzvlw3LgfiRBjoBIJH8qj3WqtWR16rAAPXKgdpvi6TuJg/viewform?usp=dialog",

  // --- Contact: WhatsApp ---
  // Format: country code + number, no +, spaces, brackets, or hyphens (India: 91 + 10 digits)
  whatsappNumber: "919286632415",
  displayPhone: "+91 92866 32415",

  whatsappMessage:
    "Hello! I visited your website and would like to discuss a project with GradVista. Could you please share more details about your services?",

  // --- Contact: Email ---
  email: "info@gradvista.in",

  // --- Office / Campus Address ---
  address: "ABES Engineering College, Ghaziabad, UP, India",
  location: "Ghaziabad, Uttar Pradesh, India",

  // --- Social Media (leave blank to hide) ---
  social: {
    linkedin: "",
    twitter: "",
    instagram: "",
    github: "",
  },

  // --- SEO ---
  seoTitle: "GradVista — AI Automation & Web Development Agency",
  seoDescription:
    "We help businesses grow through professional websites, AI-powered automation, custom software, and data analytics. Your digital transformation partner.",
};

// ============================================================
// Helper: WhatsApp URL
// ============================================================
export const getWhatsAppUrl = () =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

// ============================================================
// Helper: Open Google Form in a new tab
// ============================================================
export const openGoogleForm = () => {
  window.open(siteConfig.googleFormUrl, "_blank", "noopener,noreferrer");
};
