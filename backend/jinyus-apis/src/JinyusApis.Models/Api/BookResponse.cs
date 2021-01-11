using System;

namespace JinyusApis.Models
{
    public class BookResponse
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
    }
}