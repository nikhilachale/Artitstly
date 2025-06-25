'use client';

import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { value: '500+', label: 'Verified Artists' },
    { value: '1,200+', label: 'Events Booked' },
    { value: '4.9', label: 'Average Rating' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{item.value}</div>
              <div className="text-gray-600">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}