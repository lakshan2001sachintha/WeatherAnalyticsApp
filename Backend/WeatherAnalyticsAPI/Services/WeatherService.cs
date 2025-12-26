using Microsoft.Extensions.Caching.Memory;
using System.Text.Json;

namespace WeatherAnalyticsAPI.Services;

public class WeatherService
{
    private readonly IMemoryCache _cache;
    private readonly HttpClient _httpClient;
    private readonly IConfiguration _configuration;

    public WeatherService(
        IMemoryCache cache,
        HttpClient httpClient,
        IConfiguration configuration)
    {
        _cache = cache;
        _httpClient = httpClient;
        _configuration = configuration;
    }

    public async Task<JsonElement> GetWeatherAsync(int cityId)
    {
        var cacheKey = $"weather_{cityId}";

        if (_cache.TryGetValue(cacheKey, out JsonElement cached))
        {
            return cached;
        }

        var apiKey = _configuration["OpenWeather:ApiKey"];
        var url =
            $"https://api.openweathermap.org/data/2.5/weather?id={cityId}&appid={apiKey}&units=metric";

        var response = await _httpClient.GetStringAsync(url);
        var json = JsonDocument.Parse(response).RootElement;

        _cache.Set(cacheKey, json, TimeSpan.FromMinutes(5));

        return json;
    }
}
