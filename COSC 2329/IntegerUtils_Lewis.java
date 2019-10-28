package utils;

import java.util.Iterator;
import java.util.Set;

public interface IntegerUtils_Lewis {

	public static int NO_MATCH = -1;
	
	// pre: none
	// post: returns true if even, false if odd
	// isEven(10) returns true
	// isEven(7) returns false
	// isEven(-102) returns true
	public static boolean isEven(int k) {
		if(k % 2 == 0) {
			return true;
		}
		else {
			return false;
		}
	}
	
	// pre: none
	// post: returns true if odd, false if even
	// isOdd(10) returns false
	// isOdd(7) returns true
	// isOdd(-102) returns false
	public static boolean isOdd(int k) {
		if(k % 2 == 0) {
			return false;
		}
		else {
			return true;
		}
	}
	
	// pre: k <= 2
	// post: returns true if prime,
	// false if number is a multiple of another number
	// isPrime(41) returns true
	// isPrime(6) returns false
	// isPrime(1) returns false
	public static boolean isPrime(int k) {
		// for loop starting at 2 checks if k is divisible
		// by all numbers less than k
		if(k < 2)
			return false;
		for(int i = 2; i < k; i++) {
			if(k % i == 0) { // if k is evenly divisible by a number lower than it
				return false; // return false
			}
		}
		return true; // if it gets thru the for loop, return true;
	}
	
	
	// pre: m > 0 and n > 0
	// post: returns the greatest common factor of the numbers
	// greatestCommonFactor(6,3) returns 3
	// greatestCommonFactor(64, 48) returns 16
	// greatestCommonFactor(41, 17) returns 1
	public static int greatestCommonFactor(int m, int n) {
		assert !(m == 0 && n == 0) : "m and n are both zero!";
		if(m == 0)
		{
			return n;
		}
		else if(n == 0)
		{
			return m;
		}
		int retInt = 1;
		if(m < 0)
			m = (-1) * m;
		if(n < 0)
			n = (-1) * n;
		for(int i = 1; i <= m && i <= n; i++) {
			if(m % i == 0 && n % i == 0) {
				retInt = i;
			}
		}
		return retInt;
	}
	
	// pre: k > 0, k < max
	// post: returns the largest multiple of that number
	// that is smaller than the max
	// getGreatestConstrainedMultiple(17, 60) returns 51
	// getGreatestConstrainedMultiple(5, 96) returns 95
	// getGreatestConstrainedMultiple(10, 953) returns 950
	public static int getGreatestConstrainedMultiple(int k, int max) {
		int retInt = 0;
		if(k < 0)
		{
			k *= -1;
		}
		if(max < k)
		{
			throw new RuntimeException("MAX cannot be less than K");
		}
		for(int i = 1; i < max; i++) {
			if((i * k) <= max) {
				retInt = i * k;
			}
		}
		return retInt;	
	}
	
	
	// pre: h_q_3 > 0 and h_r_5 > 0
	// post: returns the integer H 
	// integer H definition: H / 3 = h_q_3, H % 5 = h_r_5
	// getIntegerH(9, 2) returns 27
	// getIntegerH(10, 3) returns 33
	// getIntegerH(12, 1) returns 36
	public static int getIntegerH(int h_q_3, int h_r_5) {
		if(h_q_3 < 0 || h_r_5 < 0)
		{
			throw new RuntimeException("ERROR: parameters cannot be less than 0.");
		}
		int retInt = h_q_3 * 3;
		while(retInt % 5 != h_r_5) {
			retInt++;
		}
		return retInt;
	}
	
	// pre: integerSet is not null or empty
	// post: returns the largest number in the set
	// getMaximum({5,2,65,32,6}) returns 65
	// getMaximum({2,5,4}) returns 5
	// getMaximum({27, 38, 49}) returns 49
	public static int getMaximum(Set<Integer> integerSet) {
		if(integerSet.isEmpty())
		{
			throw new NullPointerException("ERROR: empty set");
		}
		Iterator<Integer> iterator = integerSet.iterator();
		int retInt = iterator.next();
	    while(iterator.hasNext()) {
	        Integer setElement = iterator.next();
	        if(setElement > retInt) {
	            retInt = setElement;
	        }
	    }
		return retInt;
	}

	// pre: intArray.length > 0
	// post: returns the smallest number in the array
	// getMinimum([5,2,65,32,6]) returns 2
	// getMinimum([2,-5,4]) returns -5
	// getMinimum([27,38,49,0]) returns 0
	public static int getMinimum(int[] intArray) {
		if(intArray.length == 0)
		{
			throw new NullPointerException("ERROR: empty array.");
		}
		int retInt = intArray[0];
		for(int i = 1; i < intArray.length; i++) {
			int compareInt = intArray[i];
			if(retInt > compareInt) {
				retInt = compareInt;
			}
		}
		return retInt;
	}
	
	// pre: intArray.length > 0
	// post: returns true if sorted, false if not
	// isSorted([5,2,65,32,6]) returns false
	// isSorted([2,4,5]) returns true
	// isSorted([-27,0,27,38,49]) returns true
	public static boolean isSorted(int[] intArray) {
		if(intArray.length == 0)
		{
			throw new NullPointerException("ERROR: empty array.");
		}
		for(int i = 0; i < intArray.length - 1; i++) {
			if(intArray[i] > intArray[i + 1]) {
				return false;
			}
		}
		return true;	
	}
	
	// pre: intArray.length > 0 
	// post: returns the match with the smallest index
	// i.e. finds the first instance of the target, returns position
	// returns NO_MATCH = -1 for no match
	// getSmallestIndexOfMatch([5,2,65,32,6], 2) returns 1
	// getSmallestIndexOfMatch([2,4,5,2,4], 2) returns 0
	// getSmallestIndexOfMatch([9,3,6,2,4,5,8], 4) returns 4
	public static int getSmallestIndexOfMatch(int[] intArray, int target) {
		if(intArray.length == 0)
		{
			throw new NullPointerException("ERROR: empty array.");
		}
		for(int i = 0; i < intArray.length; i++) {
			if(intArray[i] == target) {
				return i;
			}
		}
		return NO_MATCH;
	}

	// pre: k > 0
	// post: returns the reverse of k
	// with leading zeros not included
	// reverse(3827) returns 7283
	// reverse(843300) returns 3348
	// reverse (4320390) returns 930234
	public static int reverse(int k) {
		if(k < 0)
		{
			throw new RuntimeException("ERROR: int less than 0.");
		}
		String stringK = Integer.toString(k);
		String temp = "";
		int len = stringK.length();
		for(int i = len - 1; i >= 0; i--) {
			temp += stringK.charAt(i);
		}
		int retInt = Integer.parseInt(temp);
		return retInt;
	}

	// pre: k > 0
	// post: adds the digits until it comes to a 1-digit sum
	// int return is 1 digit
	// sumthing(234) returns 9
	// sumthing(35782) returns 7
	// sumthing(48394) returns 1
	public static int sumthing(int k) {
		if(k < 0)
		{
			throw new RuntimeException("ERROR: int less than 0.");
		}
		String stringK = Integer.toString(k);
		int sum = 0;
		for(int i = 0; i < stringK.length(); i++) {
			String stringNum = Character.toString(stringK.charAt(i));
			sum += Integer.parseInt(stringNum);
		}
		while(sum >= 10) {
			sum = sumthing(sum);
		}
		return sum;
	}
}
