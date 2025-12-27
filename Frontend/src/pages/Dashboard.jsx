import { useEffect, useState } from "react"
import WeatherList from "../components/WeatherList"
import Loader from "../components/Loader"
import { getComfortWeather } from "../services/weatherApi"
import { FaCloudSun, FaSync, FaTrophy, FaChartBar } from "react-icons/fa"
import { WiThermometer, WiHumidity, WiStrongWind } from "react-icons/wi"

export default function Dashboard() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdate, setLastUpdate] = useState(new Date())
  const [sortBy, setSortBy] = useState('rank')
  const [viewMode, setViewMode] = useState('grid')

  const fetchData = () => {
    setLoading(true)
    getComfortWeather()
      .then(res => {
        setData(res)
        setLoading(false)
        setLastUpdate(new Date())
      })
      .catch(() => {
        setError("Failed to load weather data")
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const sortedData = [...data].sort((a, b) => {
    if (sortBy === 'rank') return a.rank - b.rank
    if (sortBy === 'temperature') return b.temperature - a.temperature
    if (sortBy === 'comfort') return b.comfortScore - a.comfortScore
    return 0
  })

  const topCity = data.length > 0 ? data.reduce((prev, current) => 
    (prev.comfortScore > current.comfortScore) ? prev : current
  ) : null

  const avgTemp = data.length > 0 ? (data.reduce((sum, city) => sum + city.temperature, 0) / data.length).toFixed(1) : 0
  const avgComfort = data.length > 0 ? (data.reduce((sum, city) => sum + city.comfortScore, 0) / data.length).toFixed(1) : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Weather Comfort Dashboard
              </h1>
              <p className="text-gray-600 flex items-center gap-2">
                <FaCloudSun className="text-blue-500" />
                Last updated: {lastUpdate.toLocaleTimeString()}
              </p>
            </div>
            <button 
              onClick={fetchData}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaSync className={loading ? 'animate-spin' : ''} />
              Refresh Data
            </button>
          </div>

          {/* Stats Cards */}
          {!loading && !error && data.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <FaChartBar className="text-3xl text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Cities Analyzed</p>
                    <p className="text-2xl font-bold text-gray-800">{data.length}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-100 rounded-xl">
                    <WiThermometer className="text-4xl text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Avg Temperature</p>
                    <p className="text-2xl font-bold text-gray-800">{avgTemp}°C</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <FaTrophy className="text-3xl text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Avg Comfort</p>
                    <p className="text-2xl font-bold text-gray-800">{avgComfort}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-white">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <FaTrophy className="text-3xl" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Top City</p>
                    <p className="text-xl font-bold">{topCity?.city || 'N/A'}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Filters & View Controls */}
          {!loading && !error && data.length > 0 && (
            <div className="bg-white rounded-2xl p-4 shadow-lg mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Sort by:</span>
                  <div className="flex gap-2">
                    {[{id: 'rank', label: 'Rank'}, {id: 'comfort', label: 'Comfort'}, {id: 'temperature', label: 'Temperature'}].map(option => (
                      <button
                        key={option.id}
                        onClick={() => setSortBy(option.id)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          sortBy === option.id 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">View:</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        viewMode === 'grid' 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        viewMode === 'list' 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto">
          {loading && <Loader />}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">⚠️</div>
              <p className="text-red-600 font-semibold text-lg">{error}</p>
              <button 
                onClick={fetchData}
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}
          {!loading && !error && <WeatherList items={sortedData} viewMode={viewMode} />}
        </div>
      </div>
    </div>
  )
}
