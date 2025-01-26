namespace TableTamer.Models
{
    public class Table
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Seats {  get; set; }
        public bool IsOccupied { get; set; } = false;
        public string OrderDetails { get; set; } = string.Empty;
        public double Price { get; set; }
        public List<Order>? Orders { get; set; }


    }
}
