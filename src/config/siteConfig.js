// ============================================================
// SITE CONFIGURATION — Update all values here
// ============================================================

export const siteConfig = {
  // --- Brand ---
  agencyName: "NexCore Digital",
  agencyInitials: "NC",
  tagline: "Building Smarter Digital Experiences. Automating Business Growth.",

  // --- Contact: Google Form ---
  // Replace with your actual Google Form URL
  googleFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSe0_Jzvlw3LgfiRBjoBIJH8qj3WqtWR16rAAPXKgdpvi6TuJg/viewform?usp=dialog",

  // --- Contact: WhatsApp ---
  // Format: country code + number, no +, spaces, brackets, or hyphens
  // Example for India: 91XXXXXXXXXX
  whatsappNumber: "91XXXXXXXXXX",

  whatsappMessage:
    "Hello! I visited your website and would like to discuss a project. Could you please share more details about your services?",

  // --- Contact: Email ---
  email: "hello@nexcoredigital.com",

  // --- Social Media (leave blank to hide) ---
  social: {
    linkedin: "",
    twitter: "",
    instagram: "",
    github: "",
  },

  // --- SEO ---
  seoTitle: "NexCore Digital — AI Automation & Web Development Agency",
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
