'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, MessageCircle } from 'lucide-react';
import Image from 'next/image';

interface Artist {
  id: string;
  name: string;
  category: string[];
  location: string;
  priceRange: string;
  bio: string;
  image: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
}

export default function ArtistCard({ artists, viewMode }: { artists: Artist[], viewMode: 'grid' | 'list' }) {
  if (!artists || artists.length === 0) return null;

  return (
    <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'grid-cols-1'} w-full`}>
      {artists.map((artist) => (
        <Card key={artist.id} className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
          <CardContent className="p-0">
            <div className="relative aspect-[4/3]">
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover"
              />
              {artist.featured && (
                <Badge className="absolute top-3 left-3 bg-purple-600 text-white">Featured</Badge>
              )}
            </div>
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">{artist.name}</h3>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4" />
                  <span>{artist.rating}</span>
                  <span className="text-gray-500 text-sm">({artist.reviewCount})</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">{artist.bio}</p>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <MapPin className="w-4 h-4" /> {artist.location}
              </div>
              <div className="flex flex-wrap gap-2">
                {artist.category.map(cat => (
                  <Badge key={cat} className="bg-blue-100 text-blue-800 text-xs">{cat}</Badge>
                ))}
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-green-600 font-semibold">{artist.priceRange}</span>
                <button className="px-4 py-2 text-sm text-white rounded bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <MessageCircle className="w-4 h-4 inline-block mr-1" /> Quote
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
