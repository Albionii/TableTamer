namespace TableTamer.Models
{
    public class Waiter
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Wage { get; set; }

        public List<Order>? Orders { get; set; }
    }
}
