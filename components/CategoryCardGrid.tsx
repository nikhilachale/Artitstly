'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

interface Category {
  title: string;
  description: string;
  image: string;
  count: number;
}

export default function CategoryCardGrid() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('/data/categories.json');
      const data = await res.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Artist
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through our curated selection of professional artists across various categories
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {categories.map((category, i) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8,  ease: [0.22, 1, 0.36, 1] 
                 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                      <Image
                        src={category.image}
                        alt={`${category.title} category`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <Badge className="absolute top-3 right-3 bg-white/90 text-gray-900">
                        {category.count} Artists
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <Link
                        href={`/artists?category=${category.title}`}
                        className="block w-full text-center text-white px-4 py-2 rounded-md font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition duration-300"
                      >
                        Explore {category.title}
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}