namespace ToDoApi.Data.Entities
{
    public class ToDoEntity
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public DateTime CreatedTime { get; set; }

        public string Description { get; set; }

        public bool Finished { get; set; }

        public DateTime FinishedTime { get; set; }

    }
}
