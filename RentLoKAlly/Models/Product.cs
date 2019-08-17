namespace RentLoKAlly.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Product
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long ProductId { get; set; }

        [Key]
        [Column(Order = 1)]
        [StringLength(100)]
        public string Title { get; set; }

        [Key]
        [Column(Order = 2)]
        public double RentPrice { get; set; }

        [Key]
        [Column(Order = 3)]
        public DateTime RentPeriod { get; set; }

        [Key]
        [Column(Order = 4, TypeName = "money")]
        public decimal Currency { get; set; }

        [Key]
        [Column(Order = 5)]
        [StringLength(50)]
        public string Condition { get; set; }

        [Key]
        [Column(Order = 6)]
        public string Description { get; set; }
    }
}
