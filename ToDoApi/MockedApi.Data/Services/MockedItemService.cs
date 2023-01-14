using MockedApi.Contracts;
using MockedApi.Data.Repositories;

namespace MockedApi.Data.Services
{
    public class MockedItemService : IMockedItemService
    {
        private readonly IItemRepository _repository;

        public MockedItemService(IItemRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<MockedItem>> GetAllItems()
        {
            List<MockedItem> itemToReturn = new();
            try
            {
                var result = await this._repository.GetAllEntities();
                if (result.Any())
                {
                    foreach (var item in result)
                    {
                        itemToReturn.Add(new MockedItem()
                        {
                            Code = item.Code,
                            Description = item.Description,
                            BusinessLine= item.BusinessLine,
                            ItemType   = item.Type,
                            Solution = item.Solution,
                            Product = item.Product,
                            Cisco = item.Cisco,
                            SaleArticalGroup = item.SaleArticalGroup,
                            StockBtwCode = item.StockBtwCode
                        });
                    }
                }
            }
            catch (Exception)
            {

               // do the logging;
            }

            return itemToReturn;
        }
    }
}
