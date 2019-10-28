package homework1;

import java.util.ArrayList;

public class StackImplementation {

	// private data
	private ArrayList<String> stack;
	private int count;
	
	// default constructor
	public StackImplementation()
	{
		stack = new ArrayList<String>();
		count = 0;
	}
	
	// push will add a string to the stack
	public void push(String str)
	{
		stack.add(str);
		count ++;
	}
	
	// pop will remove the most recently pushed string 
	// and return it
	public String pop()
	{
		String retVal = stack.get(count - 1);
		stack.remove(retVal);
		count--;
		return retVal;
	}
	
	// peek will return the String on top of the stack
	public String peek()
	{
		String retVal = stack.get(count - 1);
		return retVal;
	}
	
	// size will return the current size of the stack
	public int size() 
	{
		return count;
	}
	
	// print all will print the stack structure from the bottom to the top
	public void printAll()
	{
		for(int i = 0; i < count; i++) // which way should i print? bottom to top or top to bottom?
		{
			System.out.print(stack.get(i) + " ");
		}
		System.out.print("\n");
	}
	
	// find will take a string and look for it in the stack
	// it will return the position it is found at, or -1 
	// if it is not in the stack
	public int find(String str)
	{
		int retInt = -1;
		for(int i = 0; i < count; i++)
		{
			if(str.equals(stack.get(i)))
			{
				retInt = i+1;
			}
		}
		return retInt;
	}
	
	// contains will return a boolean, true if item is in stack
	// and false if it is not
	public boolean contains(String str)
	{
		boolean retBool = false;
		if(this.find(str) != -1)
		{
			retBool = true;
		}
		return retBool;
	}
	
	// get will return the item found at the 
	// requested position
	public String get(int pos)
	{
		String retVal = null;
		if(!(pos < 0 || pos > count))
		{
			retVal = stack.get(pos - 1);
		}
		return retVal;
	}

	// isEmpty will return true if the stack 
	// has no items in it
	public boolean isEmpty() {
		boolean retBool = false;
		if(count == 0)
		{
			retBool = true;
		}
		return retBool;
	}
}
