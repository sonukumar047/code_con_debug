package dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChatResponse {
	
	  private List<Choice> choices;

	    
	  @Data
	  @NoArgsConstructor
	  @AllArgsConstructor
	    public static class Choice {

	        private int index;
	        private Message message;

	        // constructors, getters and setters
	    }
}