using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using WeatherAnalyticsAPI.Models;
using WeatherAnalyticsAPI.Services;

namespace WeatherAnalyticsAPI.Controllers;

[ApiController]
[Route("api/weather")]
[Authorize]
public class WeatherController : ControllerBase
{
    private readonly WeatherService _weatherService;
    private readonly ComfortIndexService _comfortIndexService;

    public WeatherController(
        WeatherService weatherService,
        ComfortIndexService comfortIndexService)
    {
        _weatherService = weatherService;
        _comfortIndexService = comfortIndexService;
    }

    [HttpGet("comfort")]
    public async Task<IActionResult> GetComfortIndex()
    {
        var cities = JsonSerializer.Deserialize<List<City>>(
            System.IO.File.ReadAllText("cities.json"));

        var results = new List<WeatherComfortResult>();

        foreach (var city in cities!)
        {
            var data = await _weatherService.GetWeatherAsync(city.CityCode);

            var temp = data.GetProperty("main").GetProperty("temp").GetDouble();
            var humidity = data.GetProperty("main").GetProperty("humidity").GetInt32();
            var wind = data.GetProperty("wind").GetProperty("speed").GetDouble();
            var desc = data.GetProperty("weather")[0].GetProperty("description").GetString();

            var score = _comfortIndexService.Calculate(temp, humidity, wind);

            results.Add(new WeatherComfortResult
            {
                City = city.Name,
                Temperature = temp,
                Humidity = humidity,
                WindSpeed = wind,
                Description = desc!,
                ComfortScore = score
            });
        }

        var ranked = results
            .OrderByDescending(r => r.ComfortScore)
            .Select((r, i) =>
            {
                r.Rank = i + 1;
                return r;
            });

        return Ok(ranked);
    }
}
