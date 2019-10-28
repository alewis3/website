package dominoes;

import java.util.List;

public class DominoLowDifferenceStringImpl_Lewis implements Domino {

	// private instance variables
	private String lowDifferenceString;


	private static final char LOW_DIFFERENCE_STRING_DELIMITER = '*';
	// pre: none
	// post: returns true if string matches format: "0*0"
	public static boolean isLowDifferenceString(String str)
	{
		str = str.trim();
		boolean retBool = false; // setting return variable to false
		int pos = str.indexOf(LOW_DIFFERENCE_STRING_DELIMITER);
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
			if(retBool == true)
			{
				// now check to make sure it is in range
				int low = Integer.parseInt(Character.toString(str.charAt(0)));
				int diff = Integer.parseInt(Character.toString(str.charAt(2)));
				if(diff < MINIMUM_PIP_COUNT || diff > MAXIMUM_PIP_COUNT)
				{
					retBool = false;
				}
				if(low < MINIMUM_PIP_COUNT || low > MAXIMUM_PIP_COUNT)
				{
					retBool = false;
				}
			}
		} // end of if statement

		return retBool; // return the final boolean value
	}


	// pre: true
	// post: returns true if remainder and quotient < 6
	// false if one or both are greater than 6
	public static boolean isLowPlus8TimesHighInteger(int k)
	{
		int remainder = k % 8;
		int quotient = k / 8;
		boolean retBool = false;
		if(remainder <= MAXIMUM_PIP_COUNT && remainder >= MINIMUM_PIP_COUNT && quotient <= MAXIMUM_PIP_COUNT && quotient >= MINIMUM_PIP_COUNT)
		{
			retBool = true;
		}
		return retBool;
	}

	// pre: 0 <= lowPlus8TimesHigh <= 54
	// pre: MINIMUM_PIP_COUNT <= lowPlus8timesHigh % 8 <= MAXIMUM_PIP_COUNT
	// pre: MINIMUM_PIP_COUNT <= lowPlus8TimesHigh / 8 <= MAXIMUM_PIP_COUNT
	public DominoLowDifferenceStringImpl_Lewis(int lowPlus8TimesHigh)
	{
		assert (isLowPlus8TimesHighInteger(lowPlus8TimesHigh)) :"ERROR: lowPlus8TimesHigh = " + lowPlus8TimesHigh + " is not valid!";

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
		assert highSum.size() == 2 : "ERROR: highSum.size() = " + highSum.size() + " and should be 2";
		assert highSum.get(INDEX_OF_HIGH) <= MAXIMUM_PIP_COUNT : "ERROR: HIGH = " + highSum.get(INDEX_OF_HIGH) + " > " + MAXIMUM_PIP_COUNT + "!";
		assert highSum.get(INDEX_OF_HIGH) >= MINIMUM_PIP_COUNT : "ERROR: HIGH = " + highSum.get(INDEX_OF_HIGH) + " < " + MINIMUM_PIP_COUNT + "!";
		assert highSum.get(INDEX_OF_SUM) >= MINIMUM_PIP_COUNT  : "ERROR: SUM = " + highSum.get(INDEX_OF_SUM) + " < " + MINIMUM_PIP_COUNT;
		assert highSum.get(INDEX_OF_SUM) <= 2 * MAXIMUM_PIP_COUNT : "ERROR: SUM = " + highSum.get(INDEX_OF_SUM) + " > " + 2 * MAXIMUM_PIP_COUNT + "!";
		assert highSum.get(INDEX_OF_HIGH) <= highSum.get(INDEX_OF_SUM): "ERROR: sum = " + highSum.get(INDEX_OF_SUM) + " < " + highSum.get(INDEX_OF_HIGH) + " = highSum.get(INDEX_OF_HIGH)!";
		assert (highSum.get(INDEX_OF_SUM) - highSum.get(INDEX_OF_HIGH)) <= MAXIMUM_PIP_COUNT: "ERROR: SUM = " + highSum.get(INDEX_OF_SUM) + " out of bounds!";


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
