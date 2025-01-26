namespace TableTamer.Models
{
    public class Fatura
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public DateTime OrderDateTime { get; set; }
        public DateTime FinishDateTime { get; set; }
        public bool Status { get; set; } 
        public Table? Table { get; set; }
    }
}
