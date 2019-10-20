package homework1;

public class QueueImplementation {

	// private data
	private Node<String> first;
	private int count;

	// default constructor
	public QueueImplementation()
	{
		first = null;
		count = 0;
	}

	// add() will add an item to the end of the queue
	public void add(String str)
	{
		Node<String> node = new Node<String>(str);

		if(this.isEmpty())
		{
			node.link = first;
			first = node;
		}
		else {
			if(!this.contains(str))
			{
				Node<String> prev = null;
				Node<String> curr = this.first;
				while(curr != null)
				{
					prev = curr;
					curr = curr.link;
				}
				node.link = prev.link;
				prev.link = node;
			}
		}
		count++;
	}

	// remove() will remove the first item in the queue and return it
	public String remove()
	{
		String retVal = null;
		if(!this.isEmpty())
		{
			retVal = first.data;
			first = first.link;
		}
		count --;
		return retVal;
	}
	
	// front will return the first item in the queue
	public String front() {
		return this.get(1);
	}
	
	// back will return the last item in the queue
	public String back() {
		return this.get(count);
	}
	
	// size will return the current size of the queue
	public int size() {
		return count;
	}

	// find will take a string and search for it in the queue
	// it will return the position of the item if it is in the queue, 
	// and will return -1 if it is not in the queue;
	public int find(String str)
	{
		int retInt = -1;
		int position = 0;
		Node<String>node = first;
		while(node != null)
		{
			if(node.data.equals(str))
			{
				retInt = position + 1;
				break;
			}
			position++;
			node = node.link;
		}
		return retInt;
	}

	// contains will return true if the requested string is in the queue
	// and false if it is not in the queue
	public boolean contains(String str)
	{
		boolean retBool = false;
		if(this.find(str) != -1)
		{
			retBool = true;
		}
		return retBool;
	}

	// get will return the string of the item at the requested position
	// if pos is between 0 and this.size()
	public String get(int pos)
	{
		String retVal = null;
		int position = 0;
		Node<String>node = first;
		while(node != null)
		{
			if(position + 1 == pos)
			{
				retVal = node.data;
				break;
			}
			position++;
			node = node.link;
		}
		return retVal;
	}

	// print all will print all items in the queue starting with 
	// the first item, and going all the way to the last item
	public void printAll()
	{
		for(Node<String>node = first; node != null; node=node.link)
		{
			System.out.print(node.data + " ");
		}
		System.out.print("\n");
	}

	// isEmpty will return true if the size is 0, false if it is not
	public boolean isEmpty()
	{
		boolean retBool = false;
		if(count == 0)
		{
			retBool = true;
		}
		return retBool;
	}
}
