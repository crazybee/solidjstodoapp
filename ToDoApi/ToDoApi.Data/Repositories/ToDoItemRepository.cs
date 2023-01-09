using ToDoApi.Data.Entities;

namespace ToDoApi.Data.Repositories
{
    public class ToDoItemRepository : IToDoItemRepository
    {
        private readonly List<ToDoEntity> FakeToDoListResult = new List<ToDoEntity>() 
        {
            new ToDoEntity() { Id = 1,Name="shopping", CreatedTime= DateTime.Now.Date, Description = "weekendwork", Finished = true},
            new ToDoEntity() { Id = 2,Name="go to work", CreatedTime= DateTime.Now.Date, Description = "thursday", Finished = false},
            new ToDoEntity() { Id = 3,Name="pick up kids", CreatedTime= DateTime.Now.Date, Description = "tuesday/wednesday", Finished = false},

        };
        public Task<IEnumerable<ToDoEntity>> GetEntityByDate(DateTime date) => Task.FromResult<IEnumerable<ToDoEntity>>( FakeToDoListResult);

      
        public Task<ToDoEntity?> GetEntityById(int id)
        { 
            return Task.FromResult(FakeToDoListResult.FirstOrDefault(i => i.Id == id));
        }

        public Task<IEnumerable<ToDoEntity>> GetFinishedEntities()
        {
            return Task.FromResult(FakeToDoListResult.FindAll(i => i.Finished).AsEnumerable());
        }
    }
}
