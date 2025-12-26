namespace WeatherAnalyticsAPI.Services;

public class ComfortIndexService
{
    public double Calculate(double temperatureC, int humidity, double windSpeed)
    {
        double score = 
        100 
        - Math.Abs(temperatureC - 22) * 2
        - humidity * 0.3
        + windSpeed * 2;

        return Math.Clamp(score,0,100); 
    }
}