'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  location: string;
  bio: string;
  categories: string[];
  languages: string;
  feeRange: string;
  profileImage: string;
}

export default function SimpleOnboardForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    location: '',
    bio: '',
    categories: [],
    languages: '',
    feeRange: '',
    profileImage: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const CATEGORIES = ['Singer', 'DJ', 'Dancer', 'Band', 'Comedian', 'Magician', 'Photographer', 'Videographer'];
  const LOCATIONS = [
    'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Phoenix, AZ',
    'Philadelphia, PA', 'San Antonio, TX', 'San Diego, CA', 'Dallas, TX', 'San Jose, CA'
  ];
  const PRICE_RANGES = ['$0 - $500', '$500 - $1,000', '$1,000 - $2,500', '$2,500 - $5,000', '$5,000+'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryToggle = (category: string) => {
    const updated = formData.categories.includes(category)
      ? formData.categories.filter((c) => c !== category)
      : [...formData.categories, category];
    setFormData({ ...formData, categories: updated });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Application Submitted!</h2>
        <p className="text-gray-700">Thanks for applying. We'll review your details soon.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => setSubmitted(false)}
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Join Artistly</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Full Name *</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Location *</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Select</option>
            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Bio *</label>
          <textarea
            name="bio"
            rows={4}
            value={formData.bio}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Categories *</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {CATEGORIES.map((cat) => (
              <label key={cat} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.categories.includes(cat)}
                  onChange={() => handleCategoryToggle(cat)}
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Languages *</label>
          <input
            name="languages"
            value={formData.languages}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="e.g. English, Hindi"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Fee Range *</label>
          <select
            name="feeRange"
            value={formData.feeRange}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Select</option>
            {PRICE_RANGES.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Profile Image (optional)</label>
          <input
            name="profileImage"
            value={formData.profileImage}
            onChange={handleChange}
            type="url"
            className="w-full border rounded px-3 py-2"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}