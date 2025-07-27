import React from 'react'

export default function Loading() {
  return (
     <div className="absolute inset-0 z-10 flex items-center justify-center bg-opacity-40">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-3">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-700 text-sm font-medium">Loading...</p>
          </div>
       
        </div>
  )
}


