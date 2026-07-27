"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Building2, CheckCircle2, User, Phone, Mail, FileText, Send } from "lucide-react";

interface SponsorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SponsorModal({ isOpen, onClose }: SponsorModalProps) {
  const [tier, setTier] = useState("Title Sponsor (₹61 Lakhs)");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    message: "",
  });

  if (!isOpen) return null;

  const tiers = [
    "Title Sponsor (₹61 Lakhs)",
    "Powered By Sponsor (₹45 Lakhs)",
    "Co-Powered By Sponsor (₹30 Lakhs)",
    "Associate Partner (₹20 Lakhs)",
    "Celebration Partner (₹10 Lakhs)",
    "Category Partner (₹10 Lakhs)",
    "Experience Zone / Food / Beverage / Fashion Partner (₹4L - ₹5L)",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `🤝 *Sponsorship Inquiry - Rudaah Garba 2026*

🏢 *Company Name:* ${formData.companyName}
👤 *Contact Person:* ${formData.contactPerson}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
🏆 *Sponsorship Tier:* ${tier}

💬 *Additional Note:*
${formData.message || "N/A"}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919104819600?text=${encodedMessage}`, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ companyName: "", contactPerson: "", phone: "", email: "", message: "" });
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25 }}
          className="relative max-w-xl w-full bg-[#130B0A] border border-[#D6B26E]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(214,178,110,0.2)] max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#2A1613] text-[#C7B9A7] hover:text-[#F2D18B] border border-[#D6B26E]/20"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div className="space-y-6">
              {/* Header */}
              <div className="text-center space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2A1613] text-[#F2D18B] text-xs font-semibold border border-[#D6B26E]/30">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Sponsorship & Brand Partnerships</span>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#F7EFE4] pt-1">
                  Partner With Rudaah Garba 2026
                </h3>
                <p className="text-xs text-[#C7B9A7]">
                  Connect with 120,000+ Attendees & 5M+ Digital Impressions
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Select Sponsorship Tier */}
                <div>
                  <label className="block text-xs font-semibold text-[#D6B26E] uppercase tracking-wider mb-2">
                    Sponsorship Tier
                  </label>
                  <select
                    value={tier}
                    onChange={(e) => setTier(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#2A1613] border border-[#D6B26E]/30 text-[#F7EFE4] text-sm focus:outline-none focus:border-[#D6B26E]"
                  >
                    {tiers.map((t) => (
                      <option key={t} value={t} className="bg-[#130B0A] text-[#F7EFE4]">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Company & Contact Info Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <Building2 className="absolute left-3.5 top-3.5 w-4 h-4 text-[#D6B26E]/70" />
                    <input
                      type="text"
                      placeholder="Brand / Company Name"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#2A1613]/80 border border-[#D6B26E]/30 text-sm text-[#F7EFE4] placeholder-[#C7B9A7]/50 focus:outline-none focus:border-[#D6B26E]"
                    />
                  </div>

                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 w-4 h-4 text-[#D6B26E]/70" />
                    <input
                      type="text"
                      placeholder="Contact Person Name"
                      required
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#2A1613]/80 border border-[#D6B26E]/30 text-sm text-[#F7EFE4] placeholder-[#C7B9A7]/50 focus:outline-none focus:border-[#D6B26E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-[#D6B26E]/70" />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#2A1613]/80 border border-[#D6B26E]/30 text-sm text-[#F7EFE4] placeholder-[#C7B9A7]/50 focus:outline-none focus:border-[#D6B26E]"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-[#D6B26E]/70" />
                    <input
                      type="email"
                      placeholder="Official Email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#2A1613]/80 border border-[#D6B26E]/30 text-sm text-[#F7EFE4] placeholder-[#C7B9A7]/50 focus:outline-none focus:border-[#D6B26E]"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={3}
                    placeholder="Specific Requirements / Brand Activation Details"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-xl bg-[#2A1613]/80 border border-[#D6B26E]/30 text-sm text-[#F7EFE4] placeholder-[#C7B9A7]/50 focus:outline-none focus:border-[#D6B26E]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gold-gradient text-[#130B0A] font-bold text-base flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition-all"
                >
                  <Send className="w-5 h-5" />
                  <span>Request Official Sponsorship Proposal</span>
                </button>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gold-gradient text-[#130B0A] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(214,178,110,0.5)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gold-gradient">
                Sponsorship Request Received!
              </h3>
              <p className="text-sm text-[#C7B9A7]">
                Thank you, <strong className="text-[#F7EFE4]">{formData.companyName}</strong>. Our partnership team will contact <strong className="text-[#F2D18B]">{formData.contactPerson}</strong> at {formData.phone} with the official PDF deck and custom brand integration terms.
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
