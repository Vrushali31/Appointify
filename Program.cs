using Microsoft.EntityFrameworkCore;
using Appointment_Scheduling.Models;

var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";


builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins(
                                              "http://localhost:3000",
                                              "http://localhost:3001",
                                              "http://*.3000").AllowAnyMethod().AllowAnyHeader();
                      });
});

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<userContext>(opt =>
{
    opt.UseSqlServer(builder.Configuration.GetConnectionString("userContext"));
});
builder.Services.AddDbContext<AppointmentContext>(opt =>
{
    opt.UseSqlServer(builder.Configuration.GetConnectionString("AppointmentContext"));
});
builder.Services.AddDbContext<memberContext>(opt =>
{
    opt.UseSqlServer(builder.Configuration.GetConnectionString("memberContext"));
});
builder.Services.AddDbContext<appointmentsContext>(opt =>
{
    opt.UseSqlServer(builder.Configuration.GetConnectionString("appointmentsContext"));
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(MyAllowSpecificOrigins);
app.UseAuthorization();

app.MapControllers();

app.Run();
