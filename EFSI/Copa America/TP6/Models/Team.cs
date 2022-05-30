using Newtonsoft.Json;

public partial class Player
{
    [JsonProperty("Country")]
    public string Country { get; set; }

    [JsonProperty("Number")]
    public string Number { get; set; }

    [JsonProperty("Name")]
    public string Name { get; set; }

    [JsonProperty("IsCapitan")]
    public bool IsCapitan { get; set; }

    [JsonProperty("Position")]
    public string Position { get; set; }

    [JsonProperty("Thumb")]
    public string Thumb { get; set; }
}
public partial class Teams
{
    [JsonProperty("Argentina")]
    public Player[] Argentina { get; set; }

    [JsonProperty("Bolivia")]
    public Player[] Bolivia { get; set; }

    [JsonProperty("Brasil")]
    public Player[] Brasil { get; set; }

    [JsonProperty("Chile")]
    public Player[] Chile { get; set; }

    [JsonProperty("Colombia")]
    public Player[] Colombia { get; set; }

    [JsonProperty("Ecuador")]
    public Player[] Ecuador { get; set; }

    [JsonProperty("Paraguay")]
    public Player[] Paraguay { get; set; }

    [JsonProperty("Peru")]
    public Player[] Peru { get; set; }

    [JsonProperty("Uruguay")]
    public Player[] Uruguay { get; set; }

    [JsonProperty("Venezuela")]
    public Player[] Venezuela { get; set; }
}
