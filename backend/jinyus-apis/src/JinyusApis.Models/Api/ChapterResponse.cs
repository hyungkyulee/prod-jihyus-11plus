using System;
using System.Collections.Generic;

namespace JinyusApis.Models
{
    public class ChapterResponse
    {
        public Guid Id { get; set; }
        public string Progress { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public Guid BookId { get; set; }

    }
}