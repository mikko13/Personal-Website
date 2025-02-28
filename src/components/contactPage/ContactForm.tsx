import React, { useState } from "react";
import { Send, Loader } from "lucide-react";
import emailjs from "@emailjs/browser";
emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState({ text: "", type: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          reply_to: formState.email,
          subject: formState.subject,
          message: formState.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      if (result.text === "OK") {
        setFormMessage({
          text: "Thank you! Your message has been sent successfully.",
          type: "success",
        });

        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setFormMessage({ text: "", type: "" });
        }, 20000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setFormMessage({
        text: "Failed to send your message. Please try again later.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
    >
      <h3 className="text-2xl font-bold text-teal-800 mb-6">Send a Message</h3>

      {formMessage.text && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            formMessage.type === "success"
              ? "bg-teal-50 text-teal-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {formMessage.text}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 mb-2 font-medium"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 mb-2 font-medium"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="subject"
          className="block text-gray-700 mb-2 font-medium"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formState.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-gray-700 mb-2 font-medium"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-teal-800 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-teal-700 transition-colors shadow-md disabled:bg-teal-300 cursor-pointer"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader size={20} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send size={20} /> Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
