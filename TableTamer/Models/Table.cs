namespace TableTamer.Models
{
    public class Table
    {
        public int Id { get; set; }
        public bool Status { get; set; } 

        public int Position { get; set; }
        
        public ICollection<Fatura>? Faturat { get; set; }
        public User? user { get; set; }

    }
}
