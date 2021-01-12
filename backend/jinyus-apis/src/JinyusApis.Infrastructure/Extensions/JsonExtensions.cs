using System.Text.Json.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace JinyusApis.Infrastructure.Extensions
{
    public static class JsonExtensions
    {
        private static DefaultContractResolver _resolver = new DefaultContractResolver
        {
            NamingStrategy = new CamelCaseNamingStrategy()
        };

        public static string ToJson(this object toSerialize)
        {
            return JsonConvert.SerializeObject(toSerialize,
            new JsonSerializerSettings
            {
                ContractResolver = _resolver,
                Formatting = Formatting.Indented
            });
        }
        
    }
}