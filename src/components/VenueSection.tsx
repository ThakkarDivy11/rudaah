"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Shield, Compass } from "lucide-react";

export default function VenueSection() {
  return (
    <section id="venue" className="py-24 bg-paper-texture relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DCCB] text-[#7A1B0C] text-xs font-bold tracking-wider uppercase border border-[#7A1B0C]/30 shadow-sm"
          >
            <MapPin className="w-3.5 h-3.5 text-[#7A1B0C]" />
            <span>Event Location</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7A1B0C]"
          >
            Grand Event <span className="text-maroon-gradient">Venue</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-base text-[#2A1613] font-normal"
          >
            Conveniently situated on SG Highway, offering easy access, expansive grounds, and royal ambiance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Address & Details Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-3xl bg-[#E8DCCB] border border-[#7A1B0C]/30 p-8 space-y-6 shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-[#7A1B0C] text-[#F2D18B] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold text-[#7A1B0C] mb-1">
                  Rudaah Garba Ground
                </h3>
                <p className="text-sm text-[#2A1613] font-medium leading-relaxed">
                  Sarkhej - Gandhinagar Hwy, Near Shreekunj Greens, Rudaah Garba Arena, Ahmedabad, Gujarat 382481
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#7A1B0C]/20">
              <div className="flex items-center gap-3 text-sm text-[#2A1613] font-medium">
                <Compass className="w-5 h-5 text-[#7A1B0C] shrink-0" />
                <span>
                  <strong className="text-[#7A1B0C]">Landmark:</strong> Adjacent to SG Highway, Near Shreekunj Greens
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#2A1613] font-medium">
                <Car className="w-5 h-5 text-[#7A1B0C] shrink-0" />
                <span>
                  <strong className="text-[#7A1B0C]">Parking:</strong> 3,000+ Vehicle Slots with Dedicated VIP Valet
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#2A1613] font-medium">
                <Shield className="w-5 h-5 text-[#7A1B0C] shrink-0" />
                <span>
                  <strong className="text-[#7A1B0C]">Accessibility:</strong> Direct Cab Drop Zone & Metro Shuttle Access
                </span>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Sarkhej+Gandhinagar+Hwy+Ahmedabad"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-[#7A1B0C] text-[#F7EFE4] font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:bg-[#5C1408] transition-all block text-center"
            >
              <Navigation className="w-4 h-4 text-[#F2D18B]" />
              <span>Open Directions in Google Maps</span>
            </a>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden border-2 border-[#7A1B0C]/30 shadow-md h-[400px] sm:h-[450px] relative"
          >
            <iframe
              title="Rudaah Garba Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.697926127181!2d72.5028945759165!3d23.034876715858066!2m3!1f0!f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b30c451e039%3A0x8e5db2339798e4e7!2sSarkhej%20-%20Gandhinagar%20Hwy%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );

}
