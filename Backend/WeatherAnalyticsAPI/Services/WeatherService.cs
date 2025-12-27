using System.Text.Json;
using WeatherAnalyticsAPI.Models;

namespace WeatherAnalyticsAPI.Services;

public class WeatherService
{
    private readonly HttpClient _http;
    private readonly IConfiguration _config;

    public WeatherService(HttpClient http, IConfiguration config)
    {
        _http = http;
        _config = config;
    }

    public async Task<WeatherApiResponse> GetWeatherAsync(string cityId)
    {
        var apiKey = _config["OpenWeather:ApiKey"];
        var url = $"https://api.openweathermap.org/data/2.5/weather?id={cityId}&appid={apiKey}&units=metric";

        var response = await _http.GetStringAsync(url);
        var options = new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        };
        return JsonSerializer.Deserialize<WeatherApiResponse>(response, options)!;
    }
}