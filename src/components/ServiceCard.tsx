import React from "react";
import { Clock } from "lucide-react";
import { Service } from "../types";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: Service;
  onSelect: (service: Service) => void;
}

export function ServiceCard({ service, onSelect }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative group bg-gradient-to-br from-card to-surface rounded-2xl p-8 flex flex-col border-2 border-surface transition-all duration-500 hover:border-accent/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] animate-gradient-rotate bg-[conic-gradient(from_0deg,transparent_0deg,theme(colors.primary/0.2)_60deg,transparent_240deg)]" />
      </div>

      {service.title === "Video Call Review" && (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="absolute -top-3 -right-3"
        >
          <span className="flex items-center bg-gradient-to-r from-primary to-secondary text-text text-xs font-semibold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm border border-primary/30 hover:border-accent transition-all">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 shadow-sm animate-pulse" />
            Popular
          </span>
        </motion.div>
      )}

      <motion.h3
        whileHover={{ x: 5 }}
        className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
      >
        {service.title}
      </motion.h3>

      <div className="flex items-center gap-3 mb-6">
        <motion.div whileHover={{ rotate: 20 }}>
          <Clock className="w-5 h-5 text-accent shrink-0 transition-transform hover:scale-110" />
        </motion.div>
        <span className="text-base text-text/80">{service.turnaround}</span>
      </div>

      <div className="flex-grow">
        <ul className="space-y-3 mb-6">
          {service.details.map((detail, index) => (
            <motion.li
              key={index}
              initial={{ x: -10 }}
              animate={{ x: 0 }}
              className="flex items-start gap-3 hover:bg-surface/20 rounded-lg p-2 transition-colors"
            >
              <span className="text-accent mt-1 transition-transform hover:scale-125">
                ▹
              </span>
              <span className="text-text/80 text-base leading-relaxed">
                {detail}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="mt-auto space-y-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent w-fit"
        >
          ₹{service.price}
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(service)}
          className="w-full relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-text font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
        >
          {/* Button shine effect */}
          <span className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
            <span className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-r from-white/30 to-transparent transform -skew-x-12" />
          </span>
          Select Package
        </motion.button>
      </div>
    </motion.div>
  );
}
