using Microsoft.EntityFrameworkCore;
using TableTamer.Models;

namespace TableTamer.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<Table> Tables { get; set; }
        public DbSet<Fatura> Fatura { get; set; }
        public DbSet<Food> Foods { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<TableTamer.Models.Table> Table { get; set; } = default!;
    }
}
