using Microsoft.AspNetCore.Mvc;
using System.Runtime.Versioning;
using System.Text.Json;
using WeatherAnalyticsAPI.Models;
using WeatherAnalyticsAPI.Services;

namespace WeatherAnalyticsAPI.Controllers;

[ApiController]
[Route("api/weather")]
public class WeatherController : ControllerBase
{
    private readonly WeatherService _weatherService;
    private readonly ComfortIndexService _comfortService;
    private readonly CacheService _cache;

    public WeatherController( WeatherService weatherService, ComfortIndexService comfortService, CacheService cache)
    {
        _weatherService = weatherService;
        _comfortService = comfortService;
        _cache = cache;
    }

    [HttpGet("comfort")]
    public async Task<IActionResult> GetComfortIndex()
    {
        var jsonData = JsonSerializer.Deserialize<JsonElement>(
            System.IO.File.ReadAllText("Data/cities.json"));
        
        var cities = jsonData.GetProperty("List").Deserialize<List<City>>();

        var results = new List<ComfortResult>();

        if (cities == null) return BadRequest("No cities found");

        foreach (var city in cities)
        {
          var weather = await _cache.GetOrCreate(
          $"weather_{city.CityCode}",
          async () => await _weatherService.GetWeatherAsync(city.CityCode)
    );

            var score = _comfortService.Calculate(weather);

            results.Add(new ComfortResult
            {
                City = city.Name,
                Temperature = weather.Main.Temp,
                Description = weather.Weather.First().Description,
                ComfortScore = score
            });
        }

        var ranked = results
            .OrderByDescending(x => x.ComfortScore)
            .Select((x, index) =>
            {
                x.Rank = index + 1;
                return x;
            });

        return Ok(ranked);
    }
}


