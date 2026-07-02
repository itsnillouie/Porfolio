'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert("✅ Message sent successfully!");

      form.reset();
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Get In Touch
        </h2>

        <p className="text-sm text-slate-500 max-w-md mx-auto">
          Have a role, project, or collaboration opportunity? I'd love to hear
          from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">

        {/* Contact Information */}

        <div className="lg:col-span-5 space-y-4">

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
            <MapPin className="text-brand-blue" size={20} />
            <div>
              <h4 className="text-xs font-bold text-slate-400">Location</h4>
              <p className="text-sm font-medium">
                Antipolo City, Philippines
              </p>
            </div>
          </div>

          <a
            href="mailto:neilbudol@gmail.com"
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 hover:border-brand-blue transition-colors"
          >
            <Mail className="text-brand-purple" size={20} />

            <div>
              <h4 className="text-xs font-bold text-slate-400">Email</h4>
              <p className="text-sm font-medium">
                neilbudol@gmail.com
              </p>
            </div>
          </a>

          <a
            href="tel:+639623040219"
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 hover:border-brand-blue transition-colors"
          >
            <Phone className="text-brand-cyan" size={20} />

            <div>
              <h4 className="text-xs font-bold text-slate-400">Mobile</h4>
              <p className="text-sm font-medium">
                +63 962 304 0219
              </p>
            </div>
          </a>

        </div>

        {/* Contact Form */}

        <form
          onSubmit={handleSubmit}
          className="lg:col-span-7 glass p-6 md:p-8 rounded-3xl space-y-4 border border-slate-200 dark:border-slate-800"
        >

          <div className="grid sm:grid-cols-2 gap-4">

            <div>
              <label className="text-xs font-bold text-slate-400">
                Name
              </label>

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 bg-slate-900/5 dark:bg-white/5 rounded-lg p-2.5 text-sm border border-slate-300 dark:border-slate-700 outline-none focus:border-brand-blue"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-400">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 bg-slate-900/5 dark:bg-white/5 rounded-lg p-2.5 text-sm border border-slate-300 dark:border-slate-700 outline-none focus:border-brand-blue"
              />
            </div>

          </div>

          <div>
            <label className="text-xs font-bold text-slate-400">
              Subject
            </label>

            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full mt-1 bg-slate-900/5 dark:bg-white/5 rounded-lg p-2.5 text-sm border border-slate-300 dark:border-slate-700 outline-none focus:border-brand-blue"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-400">
              Message
            </label>

            <textarea
              rows={5}
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 bg-slate-900/5 dark:bg-white/5 rounded-lg p-2.5 text-sm border border-slate-300 dark:border-slate-700 outline-none focus:border-brand-blue resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-brand-blue text-white font-medium flex items-center justify-center gap-2 hover:bg-brand-blue/90 transition-all"
          >
            <Send size={18} />
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}