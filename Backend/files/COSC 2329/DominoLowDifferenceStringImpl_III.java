package dominoes;

import java.util.List;

public class DominoLowDifferenceStringImpl_Lewis implements Domino {

	// private instance variables
	private String lowDifferenceString;
	
	
	private static final char LOW_DIFFERENCE_STRING_DELIMITER = '*';
	// pre: recieves a string
	// post: returns true if string matches format: "0*0"
	public static boolean isLowDifferenceString(String str)
	{
		str = str.trim();
		boolean retBool = false; // setting return variable to false
		int pos = find(LOW_DIFFERENCE_STRING_DELIMITER, str);
		if(pos != -1) // if the "*" is in the string
		{									// else go straight to return
			for(int i = 0; i < str.length(); i++)
			{
				char ch = str.charAt(i);		// get the current char, 
				if(i != pos)		// all chars except delimiter should be digits
				{
					if(Character.isDigit(ch)) // check if it is a digit
					{
						retBool = true; // change to true if so
					}
					else
					{
						retBool = false; // else change to false and exit loop
						break;
					}
				}
			} // end of for loop
		} // end of if statement
		
		return retBool; // return the final boolean value
	}

	// private helper method find
	// will return the position of a char in a string
	private static int find(char ch, String str)
	{
		int pos = -1;
		for(int i = 0; i < str.length(); i++)
		{
			if(str.charAt(i) == ch)
			{
				pos = i;
				break;
			}
		}
		return pos;
	}
	
	// pre: 0 <= k <= 54
	// post: returns true if remainder and quotient < 6
	// false if one or both are greater than 6 
	public static boolean isLowPlus8TimesHighInteger(int k)
	{
		int remainder = k % 8;
		int quotient = k / 8;
		boolean retBool = false;
		if(remainder <= MAXIMUM_PIP_COUNT && quotient <= MAXIMUM_PIP_COUNT && quotient >= MINIMUM_PIP_COUNT)
		{
			retBool = true;
		}
		return retBool;
	}
	
	// pre: 0 <= lowPlus8TimesHigh <= 54
	// pre: lowPlus8timesHigh % 8 <= MAXIMUM_PIP_COUNT
	// pre: lowPlus8TimesHigh / 8 <= MAXIMUM_PIP_COUNT 
	public DominoLowDifferenceStringImpl_Lewis(int lowPlus8TimesHigh)
	{
		assert (isLowPlus8TimesHighInteger(lowPlus8TimesHigh)) :"PLEASE SEND A VALID INTEGER!!";
		
		// low pip count will be the remainder
		int lowPipCount = lowPlus8TimesHigh % 8;
		// high pip count will be the quotient
		int highPipCount = lowPlus8TimesHigh / 8;
		
		// find the difference
		int difference = highPipCount - lowPipCount;
		// create the lowDifference string
		String lowDiff = lowPipCount + "*" + difference;
		
		// set instance variable
		lowDifferenceString = lowDiff;
	}
	
	public static final int INDEX_OF_HIGH = 0;
	public static final int INDEX_OF_SUM = 1;
	
	// pre: recieves a list w/ high at index 0 and sum at index 1
	// pre: highSum.size() == 2
	// pre: 0 <= highSum[INDEX_OF_HIGH] <= 6
	// pre: 0 <= highSum[INDEX_OF_SUM] <= 12
	// pre: highSum[INDEX_OF_HIGH] <= highSum[INDEX_OF_SUM]
	public DominoLowDifferenceStringImpl_Lewis(List<Integer> highSum)
	{
		assert (highSum.size() == 2): "PLEASE SEND A VALID LIST!!";
		assert (highSum.get(INDEX_OF_HIGH) <= MAXIMUM_PIP_COUNT && highSum.get(INDEX_OF_HIGH) >= MINIMUM_PIP_COUNT): "ERROR: HIGH PIP COUNT MUST BE <= 6";
		assert (highSum.get(INDEX_OF_SUM) >= MINIMUM_PIP_COUNT && highSum.get(INDEX_OF_SUM) <= 2 * MAXIMUM_PIP_COUNT): "ERROR: SUM OUT OF BOUNDS";
		assert (highSum.get(INDEX_OF_HIGH) <= highSum.get(INDEX_OF_SUM)): "ERROR: SUM CANNOT BE LESS THAN HIGH";
		assert ((highSum.get(INDEX_OF_SUM) - highSum.get(INDEX_OF_HIGH)) <= 6): "ERROR: SUM OUT OF BOUNDS";
		
		
		// get the high pip count
		int highPipCount = highSum.get(INDEX_OF_HIGH);
		// get the sum
		int sum = highSum.get(INDEX_OF_SUM);
		
		// find the low pip count
		int lowPipCount = sum - highPipCount;
		// find the difference
		int difference = highPipCount - lowPipCount;
		// create lowDiff string
		String lowDiff = lowPipCount + "*" + difference;
		
		// set instance variables
		lowDifferenceString = lowDiff;
	}

	// pre: none
	// post: the high pip count is returned
	public int getHighPipCount() {
		int lowPipCount = Integer.parseInt(Character.toString(lowDifferenceString.charAt(0)));
		int difference = Integer.parseInt(Character.toString(lowDifferenceString.charAt(2)));
		return lowPipCount + difference;
	}

	// pre: none
	// post: the low pip count is returned
	public int getLowPipCount() {
		int lowPipCount = Integer.parseInt(Character.toString(lowDifferenceString.charAt(0)));
		return lowPipCount;
	}

}
