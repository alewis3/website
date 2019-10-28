package change;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

public class ChangeMakerImpl_Lewis implements ChangeMaker {

	private List<Integer> denominationList;

	// part of pre: denominations != null
	// part of pre: denominations.size() > 0
	// part of pre: !denominations.contains(null)
	// part of post: denominations.size() == denominationList.size()
	// part of post: for i in [0, denominationList.size() - 1)
	// 				denominationList.get(i) > denominationList.get(i + 1)
	//				and denominations.contains(denominationList.get(i))
	public ChangeMakerImpl_Lewis(Set<Integer> denominations) {
		assert denominations != null : "ERROR: Null set!";
		assert denominations.size() > 0 : "ERROR: Size of set is 0!";
		assert !denominations.contains(null) : "ERROR: Null value in set!";
		assert !denominations.contains(0) : "ERROR: Value of 0 in set!";

		
		Iterator<Integer> iterator = denominations.iterator();
		denominationList = new ArrayList<Integer>();
		while(iterator.hasNext())
		{
			int num = iterator.next();
			denominationList.add(num);
		} // end of while loop
		insertionSort(denominationList);
	}
	

	
	public String toString()
	{
		String temp = "";
		temp += "This ChangeMaker's denomination is: " + getPrettyString(getDenominations());
		return temp;
	}
	
	// pre: true
	// part of post: rv.size() > 0
	// part of post: rv != null
	// part of post: !rv.contains(null)
	// part of post: for every i in [0, rv.size() - 1)
	//					rv.get(i) > rv.get(i + 1)
	public List<Integer> getDenominations() {
		return denominationList;
	}

	// pre: true
	// post: rv implies that the function getExactChange(valueInCents) can 
	// make exact change when it returns true, and the opposite when it returns false
	public boolean canMakeExactChange(int valueInCents) {
		boolean retBool = false;
		if(valueInCents >= 0)
		{
			int remainder = 0;
			int currentVal = valueInCents;
			for(int i = 0; i < denominationList.size(); i++)
			{
				remainder = currentVal % denominationList.get(i);
				currentVal = remainder;

				if(i == denominationList.size() - 1 && remainder == 0)
				{
					retBool = true;
				}
			}
		}
		return retBool;
	}

	// part of pre: valueInCents >= 0
	// part of pre: canMakeExactChange(valueInCents)
	//part of post: calculateValueOfChangeList(rv) == valueInCents
	// part of post: rv.size() > 0
	// part of post: rv != null
	// part of post: !rv.contains(null)
	// part of post: for each i in [1, rv.size() - 1)
	// 			this.getDenominations(i - 1) / this.getDenominations(i) > rv.get(i) >= 0
	public List<Integer> getExactChange(int valueInCents) {
		assert canMakeExactChange(valueInCents) : "ERROR: Cannot make change for " + valueInCents + " with denominationList " + denominationList;
		
		List<Integer> retList = new ArrayList<Integer>();
		
		int quotient = 0;
		int remainder = 0;
		int currentVal = valueInCents;
		
		for(int i = 0; i < denominationList.size(); i++)
		{
			quotient = currentVal / denominationList.get(i);
			remainder = currentVal % denominationList.get(i);
			retList.add(quotient);
			currentVal = remainder;
		}
		return retList;

	}

	// part of pre: changeList.size() == denominationList.size()
	// post: for each i in [0, changeList.size() - 1)
	// 			rv is a summation of: changeList.get(i) * denominationList.get(i)
	public int calculateValueOfChangeList(List<Integer> changeList) {
		assert changeList.size() == denominationList.size(): "ERROR: changeList.size() = " + changeList.size() +" must be equal to denominationList.size() = " + denominationList.size();
		
		int retSum = 0;
		for(int i = changeList.size() - 1; i >= 0; i--)
		{
			retSum += changeList.get(i) * denominationList.get(i);
		}
		return retSum;
	}
	
	private static String getPrettyString(List<Integer> list)
	{
		StringBuffer sb = new StringBuffer();
		sb.append("[");
		for(int i = 0; i < list.size(); i++)
		{
			sb.append(list.get(i));
			if(i < list.size() - 1)
			{
				sb.append(", ");
			}
		}
		sb.append("]");
		return sb.toString();
	}
	
	
	// private helper method to sort list after all the numbers have been added
	// post: list.get(i) > list.get(i + 1) for i in [0, list.size() - 1)
	private static void insertionSort(List<Integer> list)
	{
		for(int i = 0; i < list.size() - 1; i ++)
		{
			int max = i;
			for(int j = i + 1; j < list.size(); j++)
			{
				if(list.get(max) < list.get(j))
				{
					max = j;
				}
			}
			int temp = list.get(i);
			list.set(i, list.get(max));
			list.set(max, temp);
		}
	}

}
