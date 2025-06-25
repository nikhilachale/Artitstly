'use client';

import { Music } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      className="w-full  bg-white text-gray-800"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-3 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600">
            <Music className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Artistly
          </h1>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm md:text-md">
          <Link href="/" className="text-md font-bold transition-colors hover:text-blue-600">Home</Link>
          <Link href="/artists" className="text-md font-bold transition-colors hover:text-blue-600">Browse Artists</Link>
          <Link href="/onboard" className="text-md font-bold transition-colors hover:text-blue-600">Join as Artist</Link>
          <Link href="/dashboard" className="text-md font-bold transition-colors hover:text-blue-600">Dashboard</Link>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end space-x-2">
          <button className="bg-white border font-bold rounded-sm text-black px-4 py-2 hover:bg-gray-100 transition-colors">
            Join as Artist
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 border font-bold text-white px-4 py-2 rounded-sm hover:bg-gray-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}