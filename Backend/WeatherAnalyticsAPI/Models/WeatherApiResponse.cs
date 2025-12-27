using System.Text.Json.Serialization;

namespace WeatherAnalyticsAPI.Models;

public class WeatherApiResponse
{
    public required MainInfo Main { get; set; }
    public required WindInfo Wind { get; set; }
    [JsonPropertyName("clouds")]
    public required CloudInfo Clouds { get; set; }
    public required List<WeatherInfo> Weather { get; set; }
    
}

public class MainInfo
{
    public double Temp { get; set; }
    public int Humidity { get; set; }
    public int Pressure { get; set; }
}

public class WindInfo
{
    public double Speed { get; set; }
}

public class CloudInfo
{
    public int All { get; set; }
}

public class WeatherInfo
{
    public required string Description { get; set; }
}

