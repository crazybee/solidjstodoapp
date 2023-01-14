using MockedApi.Data.Entities;

namespace MockedApi.Data.Repositories
{
    public class ItemRepository : IItemRepository
    {
        private readonly List<ItemEntity> MockedItemList = GenerateMockedItems();

        private static List<ItemEntity> GenerateMockedItems()
        {
            var resultsToReturn = new List<ItemEntity>();
            Random rdm = new Random();

            for (var i = 0; i < 100; i++)
            {
                var randomNumber = rdm.Next(1000);
                var randomDay = TimeSpan.FromDays(randomNumber);
        
                resultsToReturn.Add(new ItemEntity()
                {
                    Id = Guid.NewGuid(),
                    Name = "Name"+i.ToString(),
                    Description= "Description" +i.ToString(),
                    CreatedDate= DateTime.Now - randomDay,
                    UpdatedDate = DateTime.Now - randomDay,
                    Code = (i + randomNumber).ToString(),
                    Product = "Product" + i.ToString(),
                    BusinessLine = randomNumber.ToString(),
                    BusinessUnit = randomNumber.ToString(),
                    Type = "Type" + randomNumber.ToString(),
                    Cisco = "Cisco" + randomNumber.ToString(),
                    Solution= "Solution" + randomNumber.ToString(),
                    SaleArticalGroup = "SaleArticalGroup" + randomNumber.ToString(),
                    StockBtwCode = "StockBtwCode" + randomNumber.ToString()
                });
            }

            return resultsToReturn;
        }

        public Task<IEnumerable<ItemEntity>> GetAllEntities() => Task.FromResult<IEnumerable<ItemEntity>>(this.MockedItemList);

        public Task<ItemEntity?> GetEntityByCode(string code) 
        {
            return Task.FromResult(MockedItemList.FirstOrDefault(i => i.Code == code));
        }
       
    }
}
