'use client';

import { useState, useMemo, useEffect } from 'react';
import { Grid, List } from 'lucide-react';
import ArtistCard from '@/components/ui/ArtistCard';
import FilterSection from '@/components/ui/FilterSection';

interface Artist {
  id: string;
  name: string;
  category: string[];
  location: string;
  priceRange: string;
  bio: string;
  languages: string[];
  image: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
}

export default function ArtistsPage() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const res = await fetch('/data/artists.json');
        const data = await res.json();
        setArtists(data);
      } catch (error) {
        console.error('Error fetching artists:', error);
      }
    };

    fetchArtists();
  }, []);

  const filteredArtists = useMemo(() => {
    return artists.filter((artist) => {
      const matchSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artist.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artist.category.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchCategory = selectedCategories.length === 0 ||
        selectedCategories.some(cat => artist.category.includes(cat));

      const matchLocation = !selectedLocation || artist.location === selectedLocation;
      const matchPrice = !selectedPriceRange || artist.priceRange === selectedPriceRange;

      return matchSearch && matchCategory && matchLocation && matchPrice;
    });
  }, [searchTerm, selectedCategories, selectedLocation, selectedPriceRange, artists]);

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setSelectedLocation('');
    setSelectedPriceRange('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">Find the Perfect Artist</h1>
      <div className="flex justify-end mb-4 md:hidden">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="bg-gradient-to-r from-purple-600 to-blue-600  text-white px-4 py-2 rounded shadow"
        >
          {showFilter ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="hidden md:block">
            <FilterSection
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={setSelectedPriceRange}
              onClearFilters={clearAllFilters}
            />
          </div>
          <div className="block md:hidden">
            {showFilter && (
              <FilterSection
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
                selectedPriceRange={selectedPriceRange}
                setSelectedPriceRange={setSelectedPriceRange}
                onClearFilters={clearAllFilters}
              />
            )}
          </div>
        </div>

        <div className="w-full md:flex-1">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-700">Showing {filteredArtists.length} of {artists.length} artists</p>
            <div className="flex gap-2 flex-wrap">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gradient-to-r from-purple-600 to-blue-600  text-white' : 'bg-gray-200 text-gray-700'}`}><Grid /></button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded ${viewMode === 'list' ? 'bg-gradient-to-r from-purple-600 to-blue-600  text-white' : 'bg-gray-200 text-gray-700'}`}><List /></button>
            </div>
          </div>
          <ArtistCard artists={filteredArtists} viewMode={viewMode} />
        </div>
      </div>
    </div>
  );
}
