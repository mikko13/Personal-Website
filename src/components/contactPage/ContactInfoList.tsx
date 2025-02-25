import React from "react";
import ContactInfo from "./ContactInfo";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfoList: React.FC = () => {
  return (
    <div className="space-y-6">
      <ContactInfo
        icon={<Mail />}
        title="Email"
        content="mikkosamaniego.13"
        link="mailto:mikkosamaniego.13@gmail.com"
      />
      <ContactInfo
        icon={<Phone />}
        title="Phone"
        content="+63 906 364 2928"
        link="tel:+639063642928"
      />
      <ContactInfo
        icon={<MapPin />}
        title="Location"
        content="Manila, Philippines"
        link="https://www.google.com/maps/?q=Manila,+Philippines+&navigate=yes"
      />
      <div className="mt-10 p-6 rounded-xl bg-gradient-to-br from-teal-800 to-blue-600 text-white animate-fade-in">
        <h3 className="text-xl font-bold mb-3">Let's Connect</h3>
        <p className="mb-4">
          Follow me on social media or check out my work on GitHub
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/mikko13"
            className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
            aria-label="GitHub"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/mikko-s-0253902b7/"
            className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/mikko13samaniego"
            className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
            aria-label="Facebook"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/mikkowww13/"
            className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
            aria-label="Instagram"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoList;
