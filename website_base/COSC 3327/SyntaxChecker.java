package homework1;

public class SyntaxChecker {

	// private data
	private StackImplementation syntaxStack;

	// default constructor
	public SyntaxChecker()
	{
		syntaxStack = new StackImplementation();
	}

	// checkSyntax() will return true if a string
	// has matched parentheses(), brackets[], and 
	// curly braces{}, false if otherwise
	public boolean checkSyntax(String str)
	{
		// this for loop is to walk thru the string
		for(int i = 0; i < str.length(); i++)
		{
			// get the current char
			char ch = str.charAt(i);
			// if it is a brace, bracket, or parentheses, we will work with it
			// otherwise, discard
			if(ch == '(' || ch == '{' || ch == '[' || ch == ')' || ch == '}' || ch == ']') 
			{
				// if the stack is empty, we can just push it onto the stack
				if(syntaxStack.isEmpty())
				{
					syntaxStack.push(Character.toString(ch));
				}
				// if it is not, look at the last item on the stack
				// if they match, then pop the item you just peeked
				else {
					if(syntaxStack.peek().equals("("))
					{
						if(ch == ')')
						{
							syntaxStack.pop();
						}
						else {
							syntaxStack.push(Character.toString(ch));
						}
					}
					else if(syntaxStack.peek().equals("{"))
					{
						if(ch == '}')
						{
							syntaxStack.pop();
						}
						else {
							syntaxStack.push(Character.toString(ch));
						}
					}
					else if(syntaxStack.peek().equals("["))
					{
						if(ch == ']')
						{
							syntaxStack.pop();
						}
						else {
							syntaxStack.push(Character.toString(ch));
						}
					} // end of if/else if statements
				} // end of if/else
			} // end of outer if statements
		} // end of for loop
		return syntaxStack.isEmpty(); // if the stack is empty at the end, then all the braces,
									// brackets, and parentheses were matched
	}
}
