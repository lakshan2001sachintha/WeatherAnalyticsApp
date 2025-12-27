import { WiDaySunny } from 'react-icons/wi'

export default function Loader() {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <div className="relative">
        {/* Outer ring */}
        <div className="animate-spin rounded-full h-20 w-20 border-4 border-blue-200"></div>
        
        {/* Inner spinning element */}
        <div className="absolute top-0 left-0 animate-spin rounded-full h-20 w-20 border-4 border-transparent border-t-blue-600 border-r-purple-600"></div>
        
        {/* Center icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <WiDaySunny className="text-3xl text-yellow-500 animate-pulse" />
        </div>
      </div>
      
      <p className="mt-6 text-gray-600 font-medium animate-pulse">Loading weather data...</p>
      
      {/* Animated dots */}
      <div className="flex gap-2 mt-3">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  )
}
