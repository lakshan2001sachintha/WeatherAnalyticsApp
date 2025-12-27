namespace WeatherAnalyticsAPI.Models;

public class ComfortResult
{
    public int Rank { get; set; }
    public required string City { get; set; }
    public double Temperature {get;set;}
    public string Description { get; set; } = string.Empty;
    public double ComfortScore { get; set; }
}