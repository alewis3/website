package dominoes;

import java.util.Iterator;
import java.util.Set;

public class DominoHighLowImpl_Lewis implements Domino {

	// private instance variables
	private int highPipCount;
	private int lowPipCount;

	// pre: MINIMUM_PIP_COUNT <= highPipCount and lowPipCount <= MAXIMUM_PIP_COUNT
	// pre: highPipCount >= lowPipCount
	// post: this.highPipCount = highPipCount && this.lowPipCount = lowPipCount
	public DominoHighLowImpl_Lewis(int highPipCount, int lowPipCount)
	{
		assert lowPipCount >= MINIMUM_PIP_COUNT : "ERROR: lowPipCount = " + lowPipCount + " < " + MINIMUM_PIP_COUNT + "!";
		assert lowPipCount <= MAXIMUM_PIP_COUNT : "ERROR: lowPipCount = " + lowPipCount + " > " + MAXIMUM_PIP_COUNT + "!";
		assert highPipCount >= MINIMUM_PIP_COUNT : "ERROR: highPipCount = " + highPipCount + " < " + MINIMUM_PIP_COUNT + "!";
		assert highPipCount <= MAXIMUM_PIP_COUNT : "ERROR: highPipCount = " + highPipCount + " > " + MAXIMUM_PIP_COUNT + "!";
		assert lowPipCount <= highPipCount : "ERROR: highPipCount = " + highPipCount + " < " + lowPipCount + " = lowPipCount!";

		this.highPipCount = highPipCount;
		this.lowPipCount = lowPipCount;
	}

	public static final char HIGH_LOW_STRING_SEPARATOR = ':';



	// pre: true
	// post: true is returned if string is in format: "0:0"
	// post: false returned if not.
	public static boolean isHighLowString(String str)
	{
		str = str.trim();
		boolean retBool = false; // setting return variable to false
		int pos = str.indexOf(HIGH_LOW_STRING_SEPARATOR);
		if(pos != -1) // if the ":" is in the string
		{									// else go straight to return
			for(int i = 0; i < str.length(); i++)
			{
				char ch = str.charAt(i);		// get the current char, 
				if(i != pos)		// first and last char should be digits
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
				int high = Integer.parseInt(Character.toString(str.charAt(0)));
				int low = Integer.parseInt(Character.toString(str.charAt(2)));
				if(high < MINIMUM_PIP_COUNT || high > MAXIMUM_PIP_COUNT)
				{
					retBool = false;
				}
				if(low < MINIMUM_PIP_COUNT || low > MAXIMUM_PIP_COUNT)
				{
					retBool = false;
				}
				if(high < low)
				{
					retBool = false;
				}
			}
		} // end of if statement

		return retBool; // return the final boolean value

	} // end of isHighLowString

	// pre: the string is sent in the format: "0:0"
	// pre: MINIMUM_PIP_COUNT <= high and low <= MAXIMUM_PIP_COUNT
	// pre: high >= low
	// post: this.highPipCount becomes the 1st char in the highLowString
	// post: this.lowPipCount becomes the last char in the highLowString
	public DominoHighLowImpl_Lewis(String highLowString)
	{
		assert isHighLowString(highLowString) : "ERROR: String must be a highLowString! (Format: 0" + HIGH_LOW_STRING_SEPARATOR + "0)";

		// else convert from char to string
		String highChar = Character.toString(highLowString.charAt(0));
		String lowChar = Character.toString(highLowString.charAt(2));

		// and from string to int
		int highInt = Integer.parseInt(highChar);
		int lowInt = Integer.parseInt(lowChar);

		highPipCount = highInt;
		lowPipCount = lowInt;
	}

	public static final int INDEX_OF_SUM = 0; 
	public static final int INDEX_OF_DIFFERENCE = 1; 

	public static String checkSumDifferenceArray(int[] array) 
	{
		String retStr = null;
		if(array.length != 2)
		{
			retStr = "ERROR: array.length = " + array.length + " and should equal 2!";
		}
		else if(array[INDEX_OF_SUM] < array[INDEX_OF_DIFFERENCE])
		{
			retStr = "ERROR: sum = " + array[INDEX_OF_SUM] + " < " + array[INDEX_OF_DIFFERENCE] + " = difference!";
		}
		else if(array[INDEX_OF_SUM] > 2 * MAXIMUM_PIP_COUNT)
		{
			retStr = "ERROR: sum = " +  array[INDEX_OF_SUM] + " and should be less than " + 2 * MAXIMUM_PIP_COUNT + "!";
		}
		else if(array[INDEX_OF_DIFFERENCE] < 0)
		{
			retStr = "ERROR: difference = " + array[INDEX_OF_DIFFERENCE] + " < " + MINIMUM_PIP_COUNT;
		}
		else
		{
			// grab the sum and difference from the array
			int sum = array[INDEX_OF_SUM];
			int diff = array[INDEX_OF_DIFFERENCE];

			// this formula will give lowPipCount
			int low = (diff - sum) / (-2);
			int lowRemainder = (diff - sum) % (-2); // if there is any remainder, this sum/diff combo is invalid
			// this formula will give highPipCount
			int high = (diff + sum) / (2);
			int highRemainder = (diff + sum) % 2; // if there is any remainder, this sum/diff combo is invalid

			if(lowRemainder != 0 || highRemainder != 0)
			{
				retStr = "ERROR: [" + array[INDEX_OF_SUM] + "," + array[INDEX_OF_DIFFERENCE] + "] does not correspond to a domino.";
			}
			else if(low > MAXIMUM_PIP_COUNT )
			{
				retStr = "ERROR: Calculated lowPipCount = " + low + " and should be <= " + MAXIMUM_PIP_COUNT + "!";
			}
			else if(low < MINIMUM_PIP_COUNT)
			{
				retStr = "ERROR: Calculated lowPipCount = " + low + " and should be >= " + MINIMUM_PIP_COUNT + "!";
			}
			else if(high > MAXIMUM_PIP_COUNT)
			{
				retStr = "ERROR: Calculated highPipCount = " + high + " and should be <= " + MAXIMUM_PIP_COUNT + "!";
			}
			else if(high < MINIMUM_PIP_COUNT) 
			{
				retStr = "ERROR: Calculated highPipCount = " + high + " and should be >= " + MINIMUM_PIP_COUNT + "!";
			}
		}
		return retStr;
	}
	// pre: sumDifference.length == 2
	// pre: sumDifference[INDEX_OF_SUM] >= sumDifference[INDEX_OF_DIFFERENCE]
	// pre: sumDifference[INDEX_OF_SUM] <= 2 * MAXIMUM_PIP_COUNT
	public DominoHighLowImpl_Lewis(int[] sumDifference)
	{
		String errorMsg = checkSumDifferenceArray(sumDifference);

		assert errorMsg == null : errorMsg;
		// grab the sum and difference from the array
		int sum = sumDifference[INDEX_OF_SUM];
		int diff = sumDifference[INDEX_OF_DIFFERENCE];

		// this formula will give lowPipCount
		int low = (diff - sum) / (-2);
		// this formula will give highPipCount
		int high = (diff + sum) / (2);

		lowPipCount = low;
		highPipCount = high;

	}

	public String checkHighLowSet(Set<Integer> integerSet)
	{
		String retStr = null;
		if(integerSet == null) 
		{
			retStr = "ERROR: highLowSet is null!";
		}
		else if(integerSet.size() < 1) 
		{
			retStr = "ERROR: highLowSet.size() = " + integerSet.size() + " and should be 1 or 2!";
		}
		else if(integerSet.size() > 2) 
		{
			retStr = "ERROR: highLowSet.size() = " + integerSet.size() + " and should be 1 or 2!";
		}
		else if(integerSet.contains(null)) 
		{
			retStr = "ERROR: integerSet contains null!";
		}
		else
		{

			Iterator<Integer> iterator = integerSet.iterator();
			// if there is only one number in the list
			if(integerSet.size() == 1)
			{
				int num = iterator.next();
				assert num <= MAXIMUM_PIP_COUNT : "ERROR: highLowSet contains " + num + " and is > " + MAXIMUM_PIP_COUNT + "!";
				assert num >= MINIMUM_PIP_COUNT : "ERROR: highLowSet contains " + num + " and is < " + MINIMUM_PIP_COUNT + "!";
			}
			else
			{
				int num1 = iterator.next(); // get first number (can be in any order)
				int num2 = iterator.next(); // get second number
				if(num1 > MAXIMUM_PIP_COUNT)
				{
					retStr = "ERROR: highLowSet contains " + num1 + " and is > " + MAXIMUM_PIP_COUNT + "!";
				}
				else if(num1 < MINIMUM_PIP_COUNT)
				{
					retStr = "ERROR: highLowSet contains " + num1 + " and is < " + MINIMUM_PIP_COUNT + "!";
				}
				else if(num2 > MAXIMUM_PIP_COUNT)
				{
					retStr = "ERROR: highLowSet contains " + num2 + " and is > " + MAXIMUM_PIP_COUNT + "!";
				}
				else if(num2 < MINIMUM_PIP_COUNT)
				{
					retStr = "ERROR: highLowSet contains " + num2 + " and is < " + MINIMUM_PIP_COUNT + "!";
				}
			}
		}
		return retStr;
	}

	// pre: highLowSet != null
	// pre: 1 <= highLowSet.size() <= 2
	// pre: !highLowSet.contains(null)
	// post: the higher value in the set will be assigned to highPipCount
	// post: and the smaller value will be lowPipCount
	// post: if only one number in set, that number will become both
	// high and low pip count
	public DominoHighLowImpl_Lewis(Set<Integer> highLowSet)
	{
		String errorMsg = checkHighLowSet(highLowSet);
		
		assert errorMsg == null : errorMsg;

		Iterator<Integer> iterator = highLowSet.iterator();
		// if there is only one number in the list
		if(highLowSet.size() == 1)
		{
			int num = iterator.next();

			highPipCount = num; // hpc becomes that number
			lowPipCount = highPipCount; // lpc becomes hpc
		}
		// if there are two numbers in the list
		else
		{
			int num1 = iterator.next(); // get first number (can be in any order)
			int num2 = iterator.next(); // get second number
			highPipCount = getMax(num1, num2); // hpc will have the max of the two
			lowPipCount = getMin(num1, num2); // lpc will have the min
		}
	}


	// private helper method gets the max of two ints
	private int getMax(int a, int b)
	{
		int retVal = b;
		if(a >= b)
		{
			retVal = a;
		}
		return retVal;
	}

	// private helper method gets the min of two ints
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
	// post: highPipCount is returned
	public int getHighPipCount() {
		return highPipCount;
	}

	// pre: none
	// post: lowPipCount is returned
	public int getLowPipCount() {
		return lowPipCount;
	}

}
