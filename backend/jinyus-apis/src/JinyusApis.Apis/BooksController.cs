using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Net;
using System.Threading.Tasks;
using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;
using JinyusApis.Infrastructure.Extensions;
using JinyusApis.Models;

[assembly:LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]
namespace JinyusApis.Apis
{
    public class BooksController
    {
        public async Task<APIGatewayProxyResponse> List(APIGatewayProxyRequest request)
        {
            return new APIGatewayProxyResponse
            {
                StatusCode = (int) HttpStatusCode.OK,
                Headers = new Dictionary<string, string>()
                {
                    {"Access-Control-Allow-Origin", "*"},
                    {"Access-Control-Allow-Headers", "Origin, X_Requested-With, Content-Type, Accept"}
                },
                Body = new
                {
                    Data = new List<BookResponse>
                    {
                        new BookResponse
                        {
                            Id = Guid.NewGuid(),
                            Title = $"Test Title",
                            Date = DateTime.UtcNow
                        }
                    }
                }.ToJson()
            };
        }
    }
}
