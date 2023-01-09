using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoApi.Contracts;

namespace ToDoApi.Data.Services
{
    public interface IToDoItemService
    {
        Task<IEnumerable<ToDoItem>> GetItemsForDate(DateTime date);

        Task<IEnumerable<ToDoItem>> GetFinishedItems();

    }
}
