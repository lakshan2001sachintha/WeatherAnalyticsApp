import { WiDaySunny, WiCloud, WiRain, WiSnow, WiThunderstorm, WiFog } from 'react-icons/wi'
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa'

export default function WeatherCard({ data, index }) {
  const getWeatherIcon = (description) => {
    const desc = description.toLowerCase()
    if (desc.includes('clear') || desc.includes('sunny')) return <WiDaySunny className="text-5xl text-yellow-500" />
    if (desc.includes('rain')) return <WiRain className="text-5xl text-blue-500" />
    if (desc.includes('snow')) return <WiSnow className="text-5xl text-blue-300" />
    if (desc.includes('thunder') || desc.includes('storm')) return <WiThunderstorm className="text-5xl text-purple-600" />
    if (desc.includes('fog') || desc.includes('mist')) return <WiFog className="text-5xl text-gray-400" />
    return <WiCloud className="text-5xl text-gray-500" />
  }

  const getRankBadge = (rank) => {
    if (rank === 1) return { icon: <FaTrophy />, color: 'from-yellow-400 to-yellow-600', text: 'text-yellow-600' }
    if (rank === 2) return { icon: <FaMedal />, color: 'from-gray-300 to-gray-500', text: 'text-gray-600' }
    if (rank === 3) return { icon: <FaAward />, color: 'from-orange-400 to-orange-600', text: 'text-orange-600' }
    return { icon: null, color: 'from-blue-100 to-blue-200', text: 'text-blue-700' }
  }

  const getComfortColor = (score) => {
    if (score >= 80) return 'from-green-500 to-emerald-600'
    if (score >= 60) return 'from-blue-500 to-cyan-600'
    if (score >= 40) return 'from-yellow-500 to-orange-600'
    return 'from-red-500 to-pink-600'
  }

  const getComfortLabel = (score) => {
    if (score >= 80) return 'Excellent'
    if (score >= 60) return 'Good'
    if (score >= 40) return 'Fair'
    return 'Poor'
  }

  const rankBadge = getRankBadge(data.rank)

  return (
    <div 
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Rank Badge */}
      <div className={`bg-gradient-to-r ${rankBadge.color} px-4 py-2 flex items-center justify-between`}>
        <span className="text-white font-bold flex items-center gap-2">
          {rankBadge.icon}
          Rank #{data.rank}
        </span>
        {data.rank <= 3 && (
          <span className="text-white text-xs font-medium">🏆 Top {data.rank}</span>
        )}
      </div>

      <div className="p-6">
        {/* City & Weather Icon */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">{data.city}</h2>
            <p className="text-gray-600 capitalize text-sm">{data.description}</p>
          </div>
          <div className="transform group-hover:scale-110 transition-transform duration-300">
            {getWeatherIcon(data.description)}
          </div>
        </div>

        {/* Temperature */}
        <div className="mb-4">
          <div className="flex items-end gap-1">
            <span className="text-5xl font-bold text-gray-800">{Math.round(data.temperature)}</span>
            <span className="text-2xl text-gray-500 mb-2">°C</span>
          </div>
        </div>

        {/* Comfort Score */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Comfort Index</span>
            <span className="text-sm font-bold text-gray-800">{getComfortLabel(data.comfortScore)}</span>
          </div>
          
          {/* Progress Bar */}
          <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getComfortColor(data.comfortScore)} rounded-full transition-all duration-1000 ease-out`}
              style={{ width: `${data.comfortScore}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
            </div>
          </div>
          
          {/* Score Value */}
          <div className="flex justify-end mt-1">
            <span className={`text-2xl font-bold bg-gradient-to-r ${getComfortColor(data.comfortScore)} bg-clip-text text-transparent`}>
              {data.comfortScore}
            </span>
          </div>
        </div>

        {/* Additional Info */}
        {data.humidity && (
          <div className="grid grid-cols-2 gap-2 pt-4 border-t border-gray-100">
            <div className="text-center">
              <p className="text-xs text-gray-500">Humidity</p>
              <p className="text-sm font-semibold text-gray-700">{data.humidity}%</p>
            </div>
            {data.windSpeed && (
              <div className="text-center">
                <p className="text-xs text-gray-500">Wind Speed</p>
                <p className="text-sm font-semibold text-gray-700">{data.windSpeed} m/s</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
