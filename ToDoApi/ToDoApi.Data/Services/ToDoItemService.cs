using ToDoApi.Contracts;
using ToDoApi.Data.Repositories;

namespace ToDoApi.Data.Services
{
    public class ToDoItemService : IToDoItemService
    {

        private readonly IToDoItemRepository itemRepository;
        public ToDoItemService(IToDoItemRepository itemRepository)
        {
            this.itemRepository = itemRepository;
        }
        public async Task<IEnumerable<ToDoItem>> GetFinishedItems()
        {
            List<ToDoItem> itemToReturn = new();
            try
            {
                var result = await this.itemRepository.GetFinishedEntities();
                if (result.Any())
                {
                    foreach (var item in result)
                    {
                        itemToReturn.Add(new ToDoItem() 
                        {
                            Finished = item.Finished,
                            Name = item.Name,
                            CreateTime = item.CreatedTime,
                            Description = item.Description
                         });
                    }
                }
            }
            catch (Exception)
            {
               //DO THE LOGGING
            }
            return itemToReturn;
        }

        public async Task<IEnumerable<ToDoItem>> GetItemsForDate(DateTime date)
        {
            List<ToDoItem> itemToReturn = new();
            try
            {
                var result = await this.itemRepository.GetEntityByDate(date);
                if (result.Any())
                {
                    foreach (var item in result)
                    {
                        itemToReturn.Add(new ToDoItem()
                        {
                            Finished = item.Finished,
                            Name = item.Name,
                            CreateTime = item.CreatedTime,
                            Description = item.Description
                        });
                    }
                }
            }
            catch (Exception)
            {

                //DO THE LOGGING
            }

            return itemToReturn;
        }
    }
}
