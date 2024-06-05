public class Values {
    public required string Name { get; set; }
    public string? DOB { get; set; } 
}

public class PostValues : Values {
    public string? FavoriteFood {get; set;}
}
