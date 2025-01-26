﻿using Microsoft.EntityFrameworkCore;
using TableTamer.Models;

namespace TableTamer.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<Fatura> Tables { get; set; }
        public DbSet<Fatura> Orders { get; set; }
        public DbSet<Food> Foods { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<TableTamer.Models.Table> Table { get; set; } = default!;
    }
}
