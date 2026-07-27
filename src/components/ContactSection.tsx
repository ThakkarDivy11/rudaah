"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Pass Booking Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `🙏 *New Inquiry - Rudaah Garba 2026*

👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
📋 *Category:* ${formData.subject}

💬 *Message:*
${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919104819600?text=${encodedMessage}`, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", subject: "Pass Booking Inquiry", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-paper-texture relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="font-cormorant text-xl italic text-[#8B6914] font-bold tracking-widest uppercase block mb-1">
                Get In Touch
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7A1B0C]">
                Contact <span className="text-maroon-gradient">Event Team</span>
              </h2>
              <p className="font-poppins text-sm text-[#2A1613] font-medium mt-3">
                Have questions regarding passes, group bookings, food stalls, or sponsorship packages? Reach out to us directly.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-[#E8DCCB] border border-[#7A1B0C]/30 flex items-center gap-4 shadow-sm">
                <div className="p-3 rounded-xl bg-[#7A1B0C] text-[#F2D18B] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-playfair text-sm font-bold text-[#7A1B0C]">Phone Support</h4>
                  <p className="text-xs text-[#2A1613] font-bold mt-0.5">
                    +91 91048 19600 / +91 83202 52095
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#E8DCCB] border border-[#7A1B0C]/30 flex items-center gap-4 shadow-sm">
                <div className="p-3 rounded-xl bg-[#7A1B0C] text-[#F2D18B] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-playfair text-sm font-bold text-[#7A1B0C]">Email Us</h4>
                  <p className="text-xs text-[#2A1613] font-bold mt-0.5">
                    info@rudaahgarba.com / contact@rashmirajevents.com
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#E8DCCB] border border-[#7A1B0C]/30 flex items-center gap-4 shadow-sm">
                <div className="p-3 rounded-xl bg-[#7A1B0C] text-[#F2D18B] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-playfair text-sm font-bold text-[#7A1B0C]">Event Venue</h4>
                  <p className="text-xs text-[#2A1613] font-medium mt-0.5">
                    Sarkhej - Gandhinagar Hwy, near Shreekunj Greens, Ahmedabad 382481
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-4 space-y-2">
              <span className="text-xs font-bold text-[#7A1B0C] uppercase tracking-wider block">
                Follow Rudaah Garba
              </span>
              <div className="flex items-center gap-3">
                {[
                  { icon: FaInstagram, href: "https://www.instagram.com/rudaahgarba", color: "hover:text-pink-600" },
                  { icon: FaWhatsapp, href: "https://wa.me/919104819600", color: "hover:text-green-600" },
                ].map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-[#7A1B0C] text-[#F2D18B] ${s.color} transition-all shadow-sm`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl bg-[#E8DCCB] border-2 border-[#7A1B0C]/30 p-8 sm:p-10 shadow-md"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-playfair text-2xl font-bold text-[#7A1B0C] mb-2">
                  Send Us A Direct Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#7A1B0C] uppercase mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F4EDE2] border border-[#7A1B0C]/30 text-sm text-[#2A1613] placeholder-[#2A1613]/50 focus:outline-none focus:border-[#7A1B0C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#7A1B0C] uppercase mb-1">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F4EDE2] border border-[#7A1B0C]/30 text-sm text-[#2A1613] placeholder-[#2A1613]/50 focus:outline-none focus:border-[#7A1B0C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#7A1B0C] uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F4EDE2] border border-[#7A1B0C]/30 text-sm text-[#2A1613] placeholder-[#2A1613]/50 focus:outline-none focus:border-[#7A1B0C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#7A1B0C] uppercase mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F4EDE2] border border-[#7A1B0C]/30 text-sm text-[#2A1613] focus:outline-none focus:border-[#7A1B0C]"
                    >
                      <option value="Pass Booking Inquiry">Pass Booking Inquiry</option>
                      <option value="Sponsorship & Stalls">Sponsorship & Brand Stalls</option>
                      <option value="VIP Lounge Access">VIP Lounge Access</option>
                      <option value="General Query">General Query</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#7A1B0C] uppercase mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we assist you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-xl bg-[#F4EDE2] border border-[#7A1B0C]/30 text-sm text-[#2A1613] placeholder-[#2A1613]/50 focus:outline-none focus:border-[#7A1B0C]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#7A1B0C] text-[#F7EFE4] font-bold text-base flex items-center justify-center gap-2 shadow-lg hover:bg-[#5C1408] transition-all"
                >
                  <Send className="w-5 h-5 text-[#F2D18B]" />
                  <span>Send Message</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#7A1B0C] text-[#F2D18B] flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#7A1B0C]">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-[#2A1613] font-medium">
                  Thank you, <strong className="text-[#7A1B0C]">{formData.name}</strong>. Our support team will get back to you shortly at {formData.phone}.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );

}
