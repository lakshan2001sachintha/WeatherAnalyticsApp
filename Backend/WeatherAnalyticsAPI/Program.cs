using WeatherAnalyticsAPI.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddMemoryCache();
builder.Services.AddHttpClient();

builder.Services.AddScoped<WeatherService>();
builder.Services.AddScoped<ComfortIndexService>();
builder.Services.AddScoped<CacheService>();

var app = builder.Build();

app.UseAuthorization();
app.MapControllers();

app.Run();
