using System.Reflection;
using System.Reflection.Metadata;
using WeatherAnalyticsAPI.Models;

namespace WeatherAnalyticsAPI.Services;

public class ComfortIndexService
{
    public double Calculate(WeatherApiResponse data)
    {
        double tempScore = Math.Clamp(100 - Math.Abs(data.Main.Temp - 22)* 3, 0, 100);
        double humidityScore = Math.Clamp(100 - Math.Abs(data.Main.Humidity - 50) * 2, 0, 100);
        double windScore = Math.Clamp(100 - data.Wind.Speed * 10,0,100);
        double cloudScore = Math.Clamp(100 - data.Clouds.All,0,100);

        return Math.Round(
            tempScore * 0.4 +
            humidityScore * 0.3 +
            windScore * 0.2 +
            cloudScore * 0.1, 2
        );
    }
}