using MockedApi.Data.Entities;

namespace MockedApi.Data.Repositories
{
    public interface IItemRepository
    {
        Task<IEnumerable<ItemEntity>> GetAllEntities();

        Task<ItemEntity?> GetEntityByCode(string code);

    }
}
