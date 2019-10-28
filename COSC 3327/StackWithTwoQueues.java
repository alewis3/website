package homework1;

public class StackWithTwoQueues {

	// private data
	private QueueImplementation q1;
	private QueueImplementation q2;
	private int count;
	
	// default constructor
	public StackWithTwoQueues() {
		q1 = new QueueImplementation();
		q2 = new QueueImplementation();
		count = 0;
	}
	
	// complexity for push() is k
	
	// push() will add an item to the stack
	public void push(String str)
	{
		q1.add(str);
		count++;
	}
	
	// complexity for pop() is O(n)
	
	// pop() will remove and return the most recently pushed item
	// from the stack
	public String pop()
	{
		String retStr = null;
		if(!q1.isEmpty())
		{
			while(q1.size() > 1)
			{
				q2.add(q1.front());
				q1.remove();
			}
			retStr = q1.remove();
			count--;
			
			QueueImplementation q = q1;
			q1 = q2;
			q2 = q;
		}
		return retStr;
	}
	
	// printAll() will go thru the list and print every item
	// starting at the bottom of the stack and going all the way
	// to the top
	public void printAll() 
	{
		for(int i = 0; i < count; i++)
		{
			System.out.print(q1.get(i));
		}
		System.out.print("\n");
	}
	
	// isEmpty() will return true if the stack is empty, 
	// false if it is not
	public boolean isEmpty()
	{
		boolean retVal = false;
		if(count == 0)
		{
			retVal = true;
		}
		return retVal;
	}
	
	// size() will return the current size of the list
	public int size()
	{
		return count;
	}
}
