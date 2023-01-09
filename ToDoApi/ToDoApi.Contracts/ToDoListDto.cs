namespace ToDoApi.Contracts
{

        public class ToDoListDto 
        {
            public DateTime TimeStamp { get; set; }

            public IEnumerable<ToDoItem> ToDoItems { get; set; }
             
        }
    
}
