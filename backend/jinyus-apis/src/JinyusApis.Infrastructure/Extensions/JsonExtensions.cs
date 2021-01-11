using System.Text.Json.Serialization;
using Newtonsoft.Json;

namespace JinyusApis.Infrastructure.Extensions
{
    public class JsonExtensions
    {
        public static string ToJson(object toSerialize)
        {
            return JsonConvert.SerializeObject(toSerialize);
        }
        
    }
}