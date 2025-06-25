import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Herosection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Book Amazing{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Artists
            </span>{" "}
            for Your Events
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Connect with professional singers, DJs, dancers, bands, and more.
            Make your special occasions unforgettable with verified talent.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/artists"
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 text-lg font-semibold text-white rounded-md shadow-lg transition duration-300"
            >
              Browse Artists
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/onboard"
              className="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-md transition duration-300"
            >
              Join as Artist
            </Link>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl"></div>
      </div>
    </section>
  );
}