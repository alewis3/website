package dominoes;

import java.util.Iterator;
import java.util.Set;

public class DominoHighLowImpl_Lewis implements Domino {

	// private instance variables
	private int highPipCount;
	private int lowPipCount;

	// pre: MINIMUM_PIP_COUNT <= highPipCount and lowPipCount <= MAXIMUM_PIP_COUNT
	// pre: highPipCount >= lowPipCount
	public DominoHighLowImpl_Lewis(int highPipCount, int lowPipCount)
	{
		assert (lowPipCount >= Domino.MINIMUM_PIP_COUNT && lowPipCount <= Domino.MAXIMUM_PIP_COUNT) : "ERROR: LOW PIP COUNT MUST BE BETWEEN 0 AND 6";
		
		assert(highPipCount >= Domino.MINIMUM_PIP_COUNT && highPipCount <= Domino.MAXIMUM_PIP_COUNT) : "ERROR: HIGH PIP COUNT MUST BE BETWEEN 0 AND 6";
	
		assert (lowPipCount <= highPipCount) : "ERROR: PLEASE SEND IN FORMAT: (HIGH, LOW)";
		
		this.highPipCount = highPipCount;
		this.lowPipCount = lowPipCount;
	}

	public static final char HIGH_LOW_STRING_SEPARATOR = ':';

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
	
	
	// pre: the string sent in is in the format: "0:0"
	// post: true is returned if string is in correct format
	// post: false returned if not.
	public static boolean isHighLowString(String str)
	{
		str = str.trim();
		boolean retBool = false; // setting return variable to false
		int pos = find(HIGH_LOW_STRING_SEPARATOR, str);
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
		} // end of if statement
		
		return retBool; // return the final boolean value
		
	} // end of isHighLowString

	// pre: the string is sent in the format: "0:0"
	// pre: MINIMUM_PIP_COUNT <= first and last digit <= MAXIMUM_PIP_COUNT
	// pre: first digit >= last digit
	public DominoHighLowImpl_Lewis(String highLowString)
	{
		assert (isHighLowString(highLowString)) : "PLEASE SEND A VALID STRING!!";
		
		// else convert from char to string
		String highChar = Character.toString(highLowString.charAt(0));
		String lowChar = Character.toString(highLowString.charAt(2));
		
		// and from string to int
		int highInt = Integer.parseInt(highChar);
		int lowInt = Integer.parseInt(lowChar);
		
		// confirm that highInt is greater than lowInt
		if(highInt >= lowInt)
		{
			highPipCount = highInt;
			lowPipCount = lowInt;
		}
		else					// what to do in corner case that high < low number sent in??
		{
			highPipCount = lowInt;
			lowPipCount = highInt;
		}
	}
	
	public static final int INDEX_OF_SUM = 0; 
	public static final int INDEX_OF_DIFFERENCE = 1; 
	
	// pre: sumDifference.length == 2
	// pre: sumDifference[INDEX_OF_SUM] >= sumDifference[INDEX_OF_DIFFERENCE]
	public DominoHighLowImpl_Lewis(int[] sumDifference)
	{
		assert (sumDifference.length == 2 && sumDifference[INDEX_OF_SUM] >= sumDifference[INDEX_OF_DIFFERENCE]): "PLEASE SEND A VALID ARRAY!!";
		
		// grab the sum and difference from the array
		int sum = sumDifference[INDEX_OF_SUM];
		int diff = sumDifference[INDEX_OF_DIFFERENCE];
		// take abs value of difference
		diff = Math.abs(diff);
		
		// this formula will give lowPipCount
		lowPipCount = (diff - sum) / (-2);
		highPipCount = (diff + sum) / (2);
	}
	
	// pre: 1<= highLowset.size() <= 2
	// pre: 1 <= highLowSet.size() <= 2
	// pre: !highLowSet.contains(null)
	// post: the higher value in the set will be assigned to highPipCount
	// post: and the smaller value will be lowPipCount
	// post: if only one number in set, that number will become both
	// high and low pip count
	public DominoHighLowImpl_Lewis(Set<Integer> highLowSet)
	{
		assert (highLowSet.size() >= 1 && highLowSet.size() <= 2): "PLEASE SEND A VALID SET!!";
		
		Iterator<Integer> iterator = highLowSet.iterator();
		// if there is only one number in the list
		if(highLowSet.size() == 1)
		{
			highPipCount = iterator.next(); // hpc becomes that number
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
