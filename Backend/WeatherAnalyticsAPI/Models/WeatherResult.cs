using System.Collections.Specialized;
using System.Text;

namespace WeatherAnalyticsAPI.Models;

public class WeatherResult
{
    public StringBuilder City {get;set;} = string.Empty;
    public double Temperature {get;set;}
    public int Humidity { get; set; }
    public double WindSpeed { get; set; }
    public string Description { get; set; } = string.Empty;
    public double ComfortScore { get; set; }
    public int Rank { get; set; }
}