using WeatherAnalyticsAPI.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// Add CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.WithOrigins(
                "http://localhost:5173", 
                "http://localhost:5174", 
                "http://localhost:3000",
                "http://localhost:5010"
            )
            .AllowAnyHeader()
            .AllowAnyMethod();
        });
});

builder.Services.AddMemoryCache();
builder.Services.AddHttpClient();

builder.Services.AddScoped<WeatherService>();
builder.Services.AddScoped<ComfortIndexService>();
builder.Services.AddScoped<CacheService>();

var app = builder.Build();

// Use CORS
app.UseCors("AllowFrontend");

app.UseAuthorization();
app.MapControllers();

app.Run();
