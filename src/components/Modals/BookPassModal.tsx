"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Ticket, CheckCircle2, User, Phone, Mail, Sparkles } from "lucide-react";

interface BookPassModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPass?: string;
}

export default function BookPassModal({ isOpen, onClose, defaultPass = "VIP Pass" }: BookPassModalProps) {
  const [selectedPass, setSelectedPass] = useState(defaultPass);
  const [quantity, setQuantity] = useState(2);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  if (!isOpen) return null;

  const passes = [
    { name: "General Single Night Pass", price: 499 },
    { name: "General 10-Night Season Pass", price: 2999 },
    { name: "Couple Season Pass", price: 4999 },
    { name: "VIP Season Pass", price: 7999 },
    { name: "Family Group Pass (4 Pax)", price: 9999 },
  ];

  const currentPass = passes.find((p) => p.name === selectedPass) || passes[3];
  const totalPrice = currentPass.price * quantity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
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
          className="relative max-w-lg w-full bg-[#130B0A] border border-[#D6B26E]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(214,178,110,0.2)] overflow-hidden"
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
                  <Ticket className="w-3.5 h-3.5" />
                  <span>Official Ticket Booking</span>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#F7EFE4] pt-1">
                  Book Your Rudaah Pass
                </h3>
                <p className="text-xs text-[#C7B9A7]">
                  Instant Digital Ticket Confirmation via WhatsApp & Email
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Select Pass Tier */}
                <div>
                  <label className="block text-xs font-semibold text-[#D6B26E] uppercase tracking-wider mb-2">
                    Select Pass Category
                  </label>
                  <select
                    value={selectedPass}
                    onChange={(e) => setSelectedPass(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#2A1613] border border-[#D6B26E]/30 text-[#F7EFE4] text-sm focus:outline-none focus:border-[#D6B26E]"
                  >
                    {passes.map((p) => (
                      <option key={p.name} value={p.name} className="bg-[#130B0A] text-[#F7EFE4]">
                        {p.name} — ₹{p.price.toLocaleString("en-IN")}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-xs font-semibold text-[#D6B26E] uppercase tracking-wider mb-2">
                    Number of Passes
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-[#D6B26E]/30 rounded-xl bg-[#2A1613] overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2 text-[#F2D18B] font-bold hover:bg-[#4A231A]"
                      >
                        -
                      </button>
                      <span className="px-4 text-sm font-bold text-[#F7EFE4]">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-2 text-[#F2D18B] font-bold hover:bg-[#4A231A]"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-right flex-1">
                      <span className="text-xs text-[#C7B9A7] block">Total Amount</span>
                      <span className="font-playfair text-xl font-bold text-gold-gradient">
                        ₹{totalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Attendee Info Inputs */}
                <div className="space-y-3 pt-2">
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 w-4 h-4 text-[#D6B26E]/70" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#2A1613]/80 border border-[#D6B26E]/30 text-sm text-[#F7EFE4] placeholder-[#C7B9A7]/50 focus:outline-none focus:border-[#D6B26E]"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-[#D6B26E]/70" />
                    <input
                      type="tel"
                      placeholder="WhatsApp Mobile Number"
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
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#2A1613]/80 border border-[#D6B26E]/30 text-sm text-[#F7EFE4] placeholder-[#C7B9A7]/50 focus:outline-none focus:border-[#D6B26E]"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gold-gradient text-[#130B0A] font-bold text-base flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition-all pt-3"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Proceed To Confirm Pass (₹{totalPrice.toLocaleString("en-IN")})</span>
                </button>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gold-gradient text-[#130B0A] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(214,178,110,0.5)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gold-gradient">
                Booking Reservation Confirmed!
              </h3>
              <p className="text-sm text-[#C7B9A7]">
                Thank you, <strong className="text-[#F7EFE4]">{formData.name}</strong>. Your reservation for {quantity} {selectedPass} has been received. Our team will send digital tickets to <strong className="text-[#F2D18B]">{formData.phone}</strong> shortly.
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
