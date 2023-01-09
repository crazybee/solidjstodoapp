namespace ToDoApi.Contracts
{
    public class ToDoItem
    {
        public string Name { get; set; }

        public string? Description { get; set; }

        public bool Finished { get; set; }

        public DateTime CreateTime { get; set; }

    }
}