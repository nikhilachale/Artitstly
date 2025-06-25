'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Book Your Perfect Artist?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of satisfied clients who have found amazing entertainment through Artistly
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/artists">
            <button className="inline-flex items-center justify-center bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-md transition duration-300">
              Start Browsing
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
          <Link href="/onboard">
            <button className="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-md transition duration-300">
              Become an Artist
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}