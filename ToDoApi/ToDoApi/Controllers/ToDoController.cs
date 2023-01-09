using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ToDoApi.Data.Services;
using ToDoApi.Contracts;
using Microsoft.AspNetCore.Cors;

namespace ToDoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoController : ControllerBase
    {
        private readonly IToDoItemService itemService;

        public ToDoController(IToDoItemService itemService)
        {
            this.itemService = itemService;
        }

        [HttpGet(Name = "GetToDo")]
        public async Task<ActionResult<IEnumerable<ToDoItem>>> Get()
        {
            var result = await this.itemService.GetItemsForDate(DateTime.Now);
            return this.Ok(result);
        }
    }
}
