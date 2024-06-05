using System.Net.Http.Headers;

public class ValuesService : IValuesService {
    private readonly HttpClient _httpClient;

    public ValuesService(HttpClient httpClient) {
        _httpClient = httpClient;
    }

    public Values GetValues() {
        return new Values{
            Name = "Gavin Peng",
            DOB = "09/01/2002"
        };
    }

    public Values PostValues(PostValues values) {
        if (values.FavoriteFood == null || values.FavoriteFood == "") {
            return new PostValues{
                Name = values.Name,
                DOB = values.DOB,
                FavoriteFood = "You don't have a favorite food!!"
            };
        }
        return values;
    }
}