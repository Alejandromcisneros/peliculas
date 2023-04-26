using Microsoft.OpenApi.Models;
using PeliculasAPI.Repositorio;



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddTransient<IRepositorio, RepositorioEnMemoria>();

var app = builder.Build();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    

    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();


//  public IConfiguration Configuration { get; }

// public void ConfigureServices(IServiceCollection services)
// {
// services.AddTransient<IRepositorio, RepositorioEnMemoria>();
// services.AddControllers();
// services.AddSwaggerGen(c =>
// {
// c.SwaggerDoc("v1", new OpenApiInfo { Title = "PeliculasAPI", Version = "v1" });
//    });
// }