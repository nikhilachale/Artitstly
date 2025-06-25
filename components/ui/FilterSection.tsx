'use client';

interface Props {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedCategories: string[];
  setSelectedCategories: (value: string[]) => void;
  selectedLocation: string;
  setSelectedLocation: (value: string) => void;
  selectedPriceRange: string;
  setSelectedPriceRange: (value: string) => void;
  onClearFilters: () => void;
}

import { Filter } from 'lucide-react';

export default function FilterSection({
  searchTerm,
  setSearchTerm,
  selectedCategories,
  setSelectedCategories,
  selectedLocation,
  setSelectedLocation,
  selectedPriceRange,
  setSelectedPriceRange,
  onClearFilters
}: Props) {
  const CATEGORIES = ['Singer', 'DJ', 'Dancer', 'Band', 'Comedian', 'Magician', 'Photographer', 'Videographer'];
  const LOCATIONS = ['New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX'];
  const PRICE_RANGES = ['$0 - $500', '$500 - $1,000', '$1,000 - $2,500', '$2,500 - $5,000', '$5,000+'];

  return (
    <div className="p-6 border bg-white rounded shadow-sm space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Filter className="h-5 w-5" /> Filters
        </h2>
        <button className="text-sm text-blue-600 hover:underline" onClick={onClearFilters}>
          Clear
        </button>
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium">Search</label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border px-3 py-2 rounded text-sm"
          placeholder="Search by name, category, etc."
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">Category</label>
        {CATEGORIES.map(cat => (
          <div key={cat} className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={(e) =>
                e.target.checked ?
                  setSelectedCategories([...selectedCategories, cat]) :
                  setSelectedCategories(selectedCategories.filter((c: string) => c !== cat))
              }
            />
            <label className="text-sm">{cat}</label>
          </div>
        ))}
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">Location</label>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full border px-3 py-2 rounded text-sm"
        >
          <option value="">Select location</option>
          {LOCATIONS.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">Price Range</label>
        <select
          value={selectedPriceRange}
          onChange={(e) => setSelectedPriceRange(e.target.value)}
          className="w-full border px-3 py-2 rounded text-sm"
        >
          <option value="">Select price range</option>
          {PRICE_RANGES.map(price => (
            <option key={price} value={price}>{price}</option>
          ))}
        </select>
      </div>
    </div>
  );
}