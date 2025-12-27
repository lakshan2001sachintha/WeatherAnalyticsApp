using System.Text.Json.Serialization;

namespace WeatherAnalyticsAPI.Models;

public class City
{
    [JsonPropertyName("CityCode")]
    public string CityCode {get;set;} = string.Empty;

    [JsonPropertyName("CityName")]
    public string Name {get;set;} = string.Empty;
}
