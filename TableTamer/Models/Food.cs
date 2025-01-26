﻿namespace TableTamer.Models
{
    public class Food
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public string Image { get; set; }
        public List<OrderFood>? OrderFoods { get; set; }
    }
}
