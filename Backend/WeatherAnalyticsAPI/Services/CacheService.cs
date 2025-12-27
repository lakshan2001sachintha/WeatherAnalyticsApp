using Microsoft.Extensions.Caching.Memory;

namespace WeatherAnalyticsAPI.Services;

public class CacheService
{
    private readonly IMemoryCache _cache;

    public CacheService(IMemoryCache cache)
    {
        _cache = cache;
    }

public T? Get<T>(string key)
{
    if (_cache.TryGetValue(key, out object? value))
    {
        return (T?)value;
    }
    return default;
}

public async Task<T> GetOrCreate<T>(string key, Func<Task<T>> factory)
{
    if (!_cache.TryGetValue(key, out T? value))
    {
        value = await factory();
        var cacheOptions = new MemoryCacheEntryOptions
        {
            AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(5)
        };
        _cache.Set(key, value, cacheOptions);
    }
    return value!;
}
    
}