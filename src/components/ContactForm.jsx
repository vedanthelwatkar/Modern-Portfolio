import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  AtSign,
  Briefcase,
  Check,
  MessageSquare,
  Send,
  User,
} from "lucide-react";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formState.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const result = await emailjs.send(
          "service_z0fpxn5",
          "template_097ofox",
          {
            from_name: formState.name,
            from_email: formState.email,
            message: formState.message,
          },
          "WM8d4MVghHVALwTSo"
        );

        console.log("Email sent successfully:", result.text);

        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } catch (error) {
        console.error("Failed to send email:", error);
        setSubmitError("Failed to send your message. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3 p-2">
      {/* Name Input */}
      <div className="space-y-1">
        <label
          htmlFor="name"
          className="block text-xs font-medium text-light dark:text-dark"
        >
          Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <User className="h-4 w-4 text-neutral-400" />
          </div>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className={`w-full pl-9 pr-3 py-2 text-sm border rounded-lg 
    bg-neutral-100 dark:bg-neutral-900 
    text-neutral-900 dark:text-neutral-100
    ${
      errors.name
        ? "border-red-500 focus:ring-red-200"
        : "border-neutral-300 dark:border-neutral-700 focus:border-blue-500 dark:focus:border-blue-400"
    }`}
            placeholder="Your name"
          />
        </div>
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email Input */}
      <div className="space-y-1">
        <label
          htmlFor="email"
          className="block text-xs font-medium text-light dark:text-dark"
        >
          Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <AtSign className="h-4 w-4 text-neutral-400" />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className={`w-full pl-9 pr-3 py-2 text-sm border rounded-lg 
    bg-neutral-100 dark:bg-neutral-900 
    text-neutral-900 dark:text-neutral-100
    ${
      errors.email
        ? "border-red-500 focus:ring-red-200"
        : "border-neutral-300 dark:border-neutral-700 focus:border-blue-500 dark:focus:border-blue-400"
    }`}
            placeholder="your.email@example.com"
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* Message Textarea */}
      <div className="space-y-1">
        <label
          htmlFor="message"
          className="block text-xs font-medium text-light dark:text-dark"
        >
          Message
        </label>
        <div className="relative">
          <div className="absolute top-2.5 left-3 pointer-events-none">
            <MessageSquare className="h-4 w-4 text-neutral-400" />
          </div>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            rows="4"
            className={`w-full pl-9 pr-3 py-2 text-sm border rounded-lg 
    bg-neutral-100 dark:bg-neutral-900 
    text-neutral-900 dark:text-neutral-100
    ${
      errors.message
        ? "border-red-500 focus:ring-red-200"
        : "border-neutral-300 dark:border-neutral-700 focus:border-blue-500 dark:focus:border-blue-400"
    }`}
            placeholder="Your message..."
          />
        </div>
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit Error Message */}
      {submitError && (
        <div className="p-2 text-sm text-red-600 bg-red-100 rounded-lg">
          {submitError}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className={`w-full flex items-center justify-center gap-2 py-2 px-6 rounded-lg text-sm font-medium transition-all
          ${
            isSubmitted
              ? "bg-green-500 text-white"
              : "bg-light dark:bg-dark hover:bg-green-700 dark:hover:bg-neutral-400 text-dark dark:text-black"
          }`}
      >
        {isSubmitting ? (
          <>
            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Sending...</span>
          </>
        ) : isSubmitted ? (
          <>
            <Check className="h-4 w-4" />
            <span>Message Sent!</span>
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
