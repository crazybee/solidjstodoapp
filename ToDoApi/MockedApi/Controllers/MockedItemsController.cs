using Microsoft.AspNetCore.Mvc;
using MockedApi.Contracts;
using MockedApi.Data.Services;

namespace MockedApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MockedItemsController : ControllerBase
    {
        private readonly IMockedItemService mockedItemService;

        public MockedItemsController(IMockedItemService mockedItemService)
        {
            this.mockedItemService = mockedItemService;
        }

        [HttpGet(Name = "AllItem")]
        public async Task<ActionResult<IEnumerable<MockedItem>>> Get()
        {
            var result = await this.mockedItemService.GetAllItems();
            return this.Ok(result);

        }
    }
}
