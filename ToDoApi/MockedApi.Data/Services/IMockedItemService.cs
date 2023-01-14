using MockedApi.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MockedApi.Data.Services
{
    public interface IMockedItemService
    {
        Task<IEnumerable<MockedItem>> GetAllItems();

    }
}
