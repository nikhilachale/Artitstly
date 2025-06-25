'use client';

import { useState } from 'react';
import { Search, Download } from 'lucide-react';
const mockSubmissions = [
  {
    id: '1',
    name: 'Alex Rivera',
    category: ['Singer', 'Performer'],
    location: 'Miami, FL',
    feeRange: '$1,000 - $2,500',
    languages: 'English, Spanish',
    submittedAt: '2024-01-15',
    status: 'approved',
  },
  {
    id: '2',
    name: 'DJ Thunder',
    category: ['DJ'],
    location: 'Las Vegas, NV',
    feeRange: '$500 - $1,000',
    languages: 'English',
    submittedAt: '2024-01-14',
    status: 'pending',
  },
  {
    id: '3',
    name: 'Maria Santos',
    category: ['Dancer', 'Choreographer'],
    location: 'Austin, TX',
    feeRange: '$2,500 - $5,000',
    languages: 'English, Spanish, Portuguese',
    submittedAt: '2024-01-13',
    status: 'under_review',
  },
  {
    id: '4',
    name: 'The Jazz Collective',
    category: ['Band', 'Singer'],
    location: 'New Orleans, LA',
    feeRange: '$2,500 - $5,000',
    languages: 'English',
    submittedAt: '2024-01-12',
    status: 'approved',
  },
  {
    id: '5',
    name: 'Comedy King Carl',
    category: ['Comedian'],
    location: 'Seattle, WA',
    feeRange: '$1,000 - $2,500',
    languages: 'English',
    submittedAt: '2024-01-11',
    status: 'rejected',
  },
  {
    id: '6',
    name: 'Visual Vibe Studios',
    category: ['Videographer'],
    location: 'San Diego, CA',
    feeRange: '$2,000 - $3,500',
    languages: 'English',
    submittedAt: '2024-01-10',
    status: 'pending',
  },
  {
    id: '7',
    name: 'Magic Mike Wonder',
    category: ['Magician'],
    location: 'Chicago, IL',
    feeRange: '$1,000 - $2,500',
    languages: 'English, French',
    submittedAt: '2024-01-09',
    status: 'approved',
  },
  {
    id: '8',
    name: 'Snapshot Sarah',
    category: ['Photographer'],
    location: 'New York, NY',
    feeRange: '$500 - $1,500',
    languages: 'English',
    submittedAt: '2024-01-08',
    status: 'under_review',
  }
];

const getStatusStyle = (status: string) => {
  switch (status) {
    case 'approved':
      return 'bg-green-100 text-green-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'under_review':
      return 'bg-blue-100 text-blue-800';
    case 'rejected':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-200 text-gray-700';
  }
};

export default function DashboardPage() {
  const [search, setSearch] = useState('');

  const filtered = mockSubmissions.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mx-auto px-4 py-12 bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-black rounded-xl shadow-md mb-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Artist Dashboard
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Effortlessly manage and review <span className="text-indigo-600 font-semibold">artist applications</span>, track performance, and stay in control.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {/* Total Applications */}
        <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-800 font-medium">Total Applications</p>
              <p className="text-3xl font-bold text-purple-900">{mockSubmissions.length}</p>
            </div>
            <div className="bg-purple-200 p-3 rounded-full">
              <svg className="w-6 h-6 text-purple-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 100 12 6 6 0 000-12zm7 16a7 7 0 00-14 0h14z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Approved */}
        <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-800 font-medium">Approved</p>
              <p className="text-3xl font-bold text-green-900">
                {mockSubmissions.filter((s) => s.status === 'approved').length}
              </p>
            </div>
            <div className="bg-green-200 p-3 rounded-full">
              <svg className="w-6 h-6 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414L9 14.414l-3.707-3.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Pending */}
        <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-yellow-800 font-medium">Pending</p>
              <p className="text-3xl font-bold text-yellow-900">
                {mockSubmissions.filter((s) => s.status === 'pending').length}
              </p>
            </div>
            <div className="bg-yellow-200 p-3 rounded-full">
              <svg className="w-6 h-6 text-yellow-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 8V5a1 1 0 10-2 0v5a1 1 0 001 1h3a1 1 0 100-2h-2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Avg Fee */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-800 font-medium">Avg. Fee</p>
              <p className="text-3xl font-bold text-blue-900">$1.5K</p>
            </div>
            <div className="bg-blue-200 p-3 rounded-full">
              <svg className="w-6 h-6 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11h2a1 1 0 100-2h-2V4a1 1 0 10-2 0v1H7a1 1 0 100 2h2v2H7a1 1 0 100 2h2v1a1 1 0 102 0v-1h2a1 1 0 100-2h-2V7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <div className="relative w-full sm:w-1/2">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md text-sm shadow-sm focus:ring-2 focus:ring-blue-500"
            placeholder="Search by name..."
          />
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow border">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Fee</th>
              <th className="px-4 py-3">Languages</th>
              <th className="px-4 py-3">Submitted</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((submission) => (
              <tr key={submission.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{submission.name}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1">
                    {submission.category.map((cat) => (
                      <span
                        key={cat}
                        className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3">{submission.location}</td>
                <td className="px-4 py-3">{submission.feeRange}</td>
                <td className="px-4 py-3">{submission.languages}</td>
                <td className="px-4 py-3">{submission.submittedAt}</td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs px-2 py-0.5 rounded ${getStatusStyle(
                      submission.status
                    )}`}
                  >
                    {submission.status.replace('_', ' ').toUpperCase()}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button className="text-blue-600 text-sm">View</button>
                    {submission.status === 'pending' && (
                      <>
                        <button className="text-green-600 text-sm">Approve</button>
                        <button className="text-red-600 text-sm">Reject</button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-6">No matching submissions</p>
        )}
      </div>
    </div>
  );
}