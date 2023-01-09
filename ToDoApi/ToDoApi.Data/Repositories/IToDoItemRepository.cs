using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoApi.Data.Entities;

namespace ToDoApi.Data.Repositories
{
    public interface IToDoItemRepository
    {
        Task<IEnumerable<ToDoEntity>> GetEntityByDate(DateTime date);

        Task<IEnumerable<ToDoEntity>> GetFinishedEntities();

        Task<ToDoEntity?> GetEntityById(int id);
    }
}
