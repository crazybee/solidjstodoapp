namespace ToDoApi.Contracts
{
    public partial class ToDoController
    {
        public class ToDoListDto 
        {
            public DateTime TimeStamp { get; set; }

            public IEnumerable<ToDoItem> ToDoItems { get; set; }
             
        }
    }
}
