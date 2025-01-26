namespace TableTamer.Models
{
    public class OrderFood
    {

        public int Id { get; set; }
        public int OrderId { get; set; }
        public int FoodId { get; set; }
        public Order Order { get; set; }
        public Food Food { get; set; }
    }
}
