import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export const COMPANY_NAME = {
  name: "Novascape Technologies Ltd",
  handle: "novascape-technologies",
};

export const COMPANY_LINKS = [
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Careers",
    link: "/careers",
  },
  {
    title: "Contact Us",
    link: "/contact-us",
  },
];

export const SUPPORT_LINKS = [
  {
    title: "Help Center",
    link: "/help-center",
  },
  {
    title: "Safety Center",
    link: "/safety-center",
  },
];

export const LEGAL_LINKS = [
  {
    title: "Cookies Policy",
    link: "/cookie-policy",
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    title: "Terms of Service",
    link: "/tos",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    icon: FaTwitter,
    link: `https://www.twitter.com/${COMPANY_NAME.handle}`,
  },
  {
    icon: FaLinkedin,
    link: `https://www.linkedin.com/${COMPANY_NAME.handle}`,
  },
  {
    icon: FaYoutube,
    link: `https://www.youtube.com/${COMPANY_NAME.handle}`,
  },
  {
    icon: FaFacebookF,
    link: `https://www.facebook.com/${COMPANY_NAME.handle}`,
  },
];
