namespace TableTamer.Models
{
    public class Order
    {
        public int Id { get; set; }
        public double Price { get; set; }
        public bool Status { get; set; }
        public List<OrderFood>? OrderFoods { get; set; }
    }
}
