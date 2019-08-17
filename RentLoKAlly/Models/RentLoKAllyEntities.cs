namespace RentLoKAlly.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class RentLoKAllyEntities : DbContext
    {
        public RentLoKAllyEntities()
            : base("name=RentLoKAllyEntities")
        {
        }

        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>()
                .Property(e => e.Currency)
                .HasPrecision(19, 4);
        }
    }
}
