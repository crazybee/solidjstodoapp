using ToDoApi.Data.Repositories;
using ToDoApi.Data.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<IToDoItemRepository, ToDoItemRepository>();
builder.Services.AddSingleton<IToDoItemService, ToDoItemService>();
builder.Services.AddCors(options => 
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin(); // for local debugging only
      
    });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
    app.UseSwagger();
    app.UseSwaggerUI();
//}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.UseCors();
app.Run();
