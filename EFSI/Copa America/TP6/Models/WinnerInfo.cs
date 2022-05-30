using Newtonsoft.Json;
public class WinnerInfo{
        [JsonProperty("Local")]
        public string Local { get; set; }

        [JsonProperty("Winner")]
        public string Winner { get; set; }

        [JsonProperty("Year")]
        public string Year { get; set; }
    }