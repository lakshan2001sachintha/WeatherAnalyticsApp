import WeatherCard from "./WeatherCard"

export default function WeatherList({ items, viewMode = 'grid' }) {
  if (viewMode === 'list') {
    return (
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={item.city} className="animate-slide-in-right" style={{ animationDelay: `${index * 50}ms` }}>
            <WeatherCard data={item} index={index} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <WeatherCard key={item.city} data={item} index={index} />
      ))}
    </div>
  )
}
