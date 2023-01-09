using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoApi.Data.Entities;

namespace ToDoApi.Data.Repositories
{
    public class ToDoItemRepository : IToDoItemRepository
    {
        private readonly List<ToDoEntity> FakeToDoListResult = new List<ToDoEntity>() 
        {
            new ToDoEntity() { Id = 1,Name="test1", CreatedTime= DateTime.Now.Date, Description = "test", Finished = true},
            new ToDoEntity() { Id = 2,Name="test2", CreatedTime= DateTime.Now.Date, Description = "test", Finished = false},
            new ToDoEntity() { Id = 3,Name="test3", CreatedTime= DateTime.Now.Date, Description = "test", Finished = false},

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
