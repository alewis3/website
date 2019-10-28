package dominoes;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class DominoHighLowSetImpl_Lewis implements Domino {

	// private instance variables
	private Set<Integer> highLowSet;

	// pre: MINIMUM_PIP_COUNT <= highPipCount <= MAXIMUM_PIP_COUNT
	// pre: MINIMUM_PIP_COUNT <= lowPipCount <= MAXIMUM_PIP_COUNT
	// pre: lowPipCount <= highPipCount
	// post: 1 <= highLowSet.size() <= 2
	public DominoHighLowSetImpl_Lewis(int highPipCount, int lowPipCount)
	{

		assert lowPipCount >= MINIMUM_PIP_COUNT : "ERROR: lowPipCount = " + lowPipCount + " < " + MINIMUM_PIP_COUNT + "!";
		assert lowPipCount <= MAXIMUM_PIP_COUNT : "ERROR: lowPipCount = " + lowPipCount + " > " + MAXIMUM_PIP_COUNT + "!";
		assert highPipCount >= MINIMUM_PIP_COUNT : "ERROR: highPipCount = " + highPipCount + " < " + MINIMUM_PIP_COUNT + "!";
		assert highPipCount <= MAXIMUM_PIP_COUNT : "ERROR: highPipCount = " + highPipCount + " > " + MAXIMUM_PIP_COUNT + "!";
		assert lowPipCount <= highPipCount : "ERROR: highPipCount = " + highPipCount + " < " + lowPipCount + " = lowPipCount!";

		// initialize the set
		highLowSet = new HashSet<Integer>();

		// add hpc and lpc to set
		highLowSet.add(highPipCount);
		highLowSet.add(lowPipCount);

	}

	public static final char SUM_DIFFERENCE_DELIMITER = ',';


	// isSumDifferenceString checks strings for format "00,00"
	public static boolean isSumDifferenceString(String str)
	{
		str = str.trim();
		boolean retBool = false; // setting return variable to false
		int pos = str.indexOf(SUM_DIFFERENCE_DELIMITER);
		if(pos != -1) // if the ":" is in the string
		{									// else go straight to return
			for(int i = 0; i < str.length(); i++)
			{
				char ch = str.charAt(i);		// get the current char,
				if(i != pos)		// all chars except the delimiter should be digits
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
				String sum = str.substring(0, pos);
				String diff = str.substring(pos + 1, str.length());
				int sumInt = Integer.parseInt(sum);
				int diffInt = Integer.parseInt(diff);
				if(sumInt < MINIMUM_PIP_COUNT || sumInt > MAXIMUM_PIP_COUNT * 2)
				{
					retBool = false;
				}
				if(diffInt < MINIMUM_PIP_COUNT || diffInt > MAXIMUM_PIP_COUNT)
				{
					retBool = false;
				}
				if(sumInt < diffInt)
				{
					retBool = false;
				}
			}
		} // end of if statement

		return retBool; // return the final boolean value
	}

	// pre: String sent in is a sumDifference String and
	// returns true for isSumDifferencestring()
	// pre: sum >= difference, difference > 0
	public DominoHighLowSetImpl_Lewis(String sumDifferenceString)
	{
		assert (isSumDifferenceString(sumDifferenceString)): "ERROR: String must be a sumDifferenceString! (Format 00" + SUM_DIFFERENCE_DELIMITER + "0)";

		// initialize the set
		highLowSet = new HashSet<Integer>();

		// find the position of the sum-difference delimiter
		int pos = sumDifferenceString.indexOf(SUM_DIFFERENCE_DELIMITER);

		// temporary string to hold the sum
		String tempSum = sumDifferenceString.substring(0, pos);
		int sum = Integer.parseInt(tempSum); // get the int value of string
		// and one for the difference
		String tempDiff = sumDifferenceString.substring(pos + 1);
		int difference = Integer.parseInt(tempDiff); // get the int value of the string

		// this formula will give lowPipCount
		int lowPipCount = (difference - sum) / (-2);
		int lowRemainder = (difference - sum) % (-2); // if there is any remainder, this sum/diff combo is invalid
		// this formula will give highPipCount
		int highPipCount = (difference + sum) / (2);
		int highRemainder = (difference + sum) % 2; // if there is any remainder, this sum/diff combo is invalid

		assert lowPipCount <= MAXIMUM_PIP_COUNT : "ERROR: Calculated lowPipCount = " + lowPipCount + " > " + MAXIMUM_PIP_COUNT + "!";
		assert lowPipCount >= MINIMUM_PIP_COUNT : "ERROR: Calculated lowPipCount = " + lowPipCount + " < " + MINIMUM_PIP_COUNT + "!";
		assert highPipCount <= MAXIMUM_PIP_COUNT : "ERROR: Calculated highPipCount = " + highPipCount + " > " + MAXIMUM_PIP_COUNT + "!";
		assert highPipCount >= MINIMUM_PIP_COUNT : "ERROR: Calculated highPipCount = " + highPipCount + " < " + MINIMUM_PIP_COUNT + "!";
		assert lowRemainder == 0 : "ERROR: '" + sum + SUM_DIFFERENCE_DELIMITER + difference + "' does not correspond to a domino.";
		assert highRemainder == 0 :"ERROR: '" + sum + SUM_DIFFERENCE_DELIMITER + difference + "' does not correspond to a domino.";

		// add these numbers to highLowSet
		highLowSet.add(lowPipCount);
		highLowSet.add(highPipCount);
	}

	// pre: true
	// post: returns true if remainder and quotient < 6
	// false if one or both are greater than 6
	public static boolean isLowPlus8TimesHighInteger(int k)
	{
		int remainder = k % 8; // remainder will be low pip count
		int quotient = k / 8; // quotient will be high pip count
		boolean retBool = false;
		// if both are below 6 and above 0 return true
		if(remainder <= MAXIMUM_PIP_COUNT && remainder >= MINIMUM_PIP_COUNT && quotient <= MAXIMUM_PIP_COUNT && quotient >= MINIMUM_PIP_COUNT)
		{
			retBool = true;
		}
		return retBool;
	}

	// pre: 0 <= lowPlus8TimesHigh <= 54
	// pre: MINIMUM_PIP_COUNT <= lowPlus8timesHigh % 8 <= MAXIMUM_PIP_COUNT
	// pre: MINIMUM_PIP_COUNT <= lowPlus8TimesHigh / 8 <= MAXIMUM_PIP_COUNT
	public DominoHighLowSetImpl_Lewis(int lowPlus8TimesHigh)
	{
		assert (isLowPlus8TimesHighInteger(lowPlus8TimesHigh)): "ERROR: lowPlus8TimesHigh = " + lowPlus8TimesHigh + " is not valid!";

		highLowSet = new HashSet<Integer>();
		// the low pip count will be the remainder, and it should be < 6
		int lowPipCount = lowPlus8TimesHigh % 8;
		// the high pip count will be the quotient
		int highPipCount = lowPlus8TimesHigh / 8;

		// add high and low pip counts
		highLowSet.add(lowPipCount);
		highLowSet.add(highPipCount);

	}

	// private helper method finds the max of two ints
	private int getMax(int a, int b)
	{
		int retVal = b;
		if(a >= b)
		{
			retVal = a;
		}
		return retVal;
	}

	// private helper method finds the min of two ints
	private int getMin(int a, int b)
	{
		int retVal = b;
		if(a <= b)
		{
			retVal = a;
		}
		return retVal;
	}

	// pre: none
	// post: the high pip count is returned
	public int getHighPipCount() {
		Iterator<Integer> iterator = highLowSet.iterator();
		int max = iterator.next();
		if(iterator.hasNext())
		{
			int num = iterator.next();
			max = getMax(max, num);
		}

		return max;
	}

	// pre: none
	// post: the low pip count is returned
	public int getLowPipCount() {
		Iterator<Integer> iterator = highLowSet.iterator();
		int min = iterator.next();
		if(iterator.hasNext())
		{
			int num = iterator.next();
			min = getMin(min, num);
		}

		return min;
	}


}
