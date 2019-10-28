package bingo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

public class BingoCardRowSetBasedImpl_Lewis extends BingoCardRowSetBased_Abstract
{

	public BingoCardRowSetBasedImpl_Lewis(Mystery_A mystery)
	{
		super(mystery);
	}
	public BingoCardRowSetBasedImpl_Lewis(List<Set<Integer>> rowSetList)
	{
		super(rowSetList);
	}

	public boolean isValidBingoCard(List<Set<Integer>> rowSetList)
	{
		boolean isValid = false;
		for(int row = 0; row < rowSetList.size(); row++)
		{
			Set<Integer> currentSet = rowSetList.get(row);

		}

		return isValid;
	}

	//part of pre: 1 <= row <= ROW_COUNT
	//part of pre: 1 <= column <= COLUMN_COUNT
	//part of post: column == 1 ("B") ==> 1 <= rv <= 15
	//part of post: column == 2 ("I") ==> 16 <= rv <= 30
	//part of post: column == 3 ("N") ==> ((31 <= rv <= 45) || ((row = 3) && (rv == FREE_SPACE)));
	//part of post: column == 4 ("G") ==> 46 <= rv <= 60
	//part of post: column == 5 ("O") ==> 61 <= rv <= 75
	//part of post: ((column - 1)*15 + 1) <= rv <= ((column - 1) + 1)*15
	//part of post: rv == FREE_SPACE <==> ((row == FREE_SPACE_ROW) && (column == FREE_SPACE_COLUMN))
	public Integer getEntry(int row, int column)
	{
		assert row > 0 : "ERROR: " + row + " must be > 0!";
		assert row <= BingoCard.ROW_COUNT: "ERROR: " + row + " must be < " + BingoCard.ROW_COUNT;
		assert column > 0 : "ERROR: " + column + " must be > 0!";
		assert column <= BingoCard.COLUMN_COUNT: "ERROR: " + column + " must be < " + BingoCard.COLUMN_COUNT;
		Integer retInt = null;
		if(row == BingoCard.FREE_SPACE_ROW && column == BingoCard.FREE_SPACE_COLUMN)
		{
			retInt = BingoCard.FREE_SPACE;
		}
		else
		{
			Set<Integer> set = this.rowSetList.get(row - 1);
			Iterator<Integer> it = set.iterator();
			while(it.hasNext()) {
				Integer myInt = it.next();
				if(myInt != null)
				{
					if(myInt >= ((column - 1)*15 + 1) && myInt <= ((column - 1) + 1)*15 )
					{
						retInt = myInt;
						break;
					}
				}
			}
			if(retInt != null)
			{
				assert ((column - 1)*15 + 1) <= retInt && retInt <= ((column - 1) + 1)*15 : "ERROR: retInt = " + retInt + " out of range!";
			}
		}
		return retInt;
	}

	//part of pre: 1 <= number <= 75
	//part of post: contains(number) <==> (isMarked(row, column) for some 1 <= row <= ROW_COUNT, 1 <= column <= COLUMN_COUNT)
	public void mark(int number)
	{
		assert number > 0 && number <= 75 : "ERROR: " + number + " is not in range!";

		if(contains(number))
		{
			integersMarked.add(number);
		}
	}

	//pre: true
	//part of post: rv == ((getEntry(1, 1) == number) || (getEntry(1, 2) == number) || ... || (getEntry(1, COLUMN_COUNT) == number) ||
	//					   (getEntry(2, 1) == number) || (getEntry(2, 2) == number) || ... || (getEntry(2, COLUMN_COUNT) == number) ||
	//					   (getEntry(ROW_COUNT, 1) == number) || (getEntry(ROW_COUNT, 2) == number) || ... || (getEntry(ROW_COUNT, COLUMN_COUNT) == number))
	public boolean contains(int number)
	{boolean foundMatch = false;
	int row = 1;
	while(!foundMatch && row <= ROW_COUNT)
	{
		int column = 1;
		while(!foundMatch && column <= COLUMN_COUNT)
		{
			boolean isFreeSpaceLocation = row == FREE_SPACE_ROW && column == FREE_SPACE_COLUMN;
			if(!isFreeSpaceLocation)
			{
				if(getEntry(row, column) == number)
				{
					foundMatch = true;
				}
			}
			column++;
		}
		row++;
	}
	return foundMatch;
	}

	//part of pre: 1 <= row <= ROW_COUNT
	//part of pre: 1 <= column <= COLUMN_COUNT
	public boolean isMarked(int row, int column)
	{
		assert row > 0 : "ERROR: " + row + " must be > 0!";
		assert row <= BingoCard.ROW_COUNT: "ERROR: " + row + " must be < " + BingoCard.ROW_COUNT;
		assert column > 0 : "ERROR: " + column + " must be > 0!";
		assert column <= BingoCard.COLUMN_COUNT: "ERROR: " + column + " must be < " + BingoCard.COLUMN_COUNT;
		boolean isMarked = false;
		if(row == BingoCard.FREE_SPACE_ROW && column == BingoCard.FREE_SPACE_COLUMN)
		{
			isMarked = true;
		}
		else {
			Integer entry = getEntry(row, column);
			if(integersMarked.contains(entry))
			{
				isMarked = true;
			}
		}
		return isMarked;
	}

	// pre: 1 <= rowStart <= ROW_COUNT
	// pre: 1 <= colStart <= COLUMN_COUNT
	// pre: -1 <= deltaRow <= 1 (1 moves down, -1 moves up)
	// pre: -1 <= deltaCol <= 1 (1 moves right, -1 moves left)
	// pre: deltaRow != 0 || deltaCol != 0
	// post: returns true when the specified row, column, or diagonal are all marked
	private boolean is5InARow(int rowStart, int colStart, int deltaRow, int deltaCol)
	{
		assert rowStart > 0 : "ERROR: " + rowStart + " must be > 0!";
		assert rowStart <= BingoCard.ROW_COUNT: "ERROR: " + rowStart + " must be < " + BingoCard.ROW_COUNT;
		assert colStart > 0 : "ERROR: " + colStart + " must be > 0!";
		assert colStart <= BingoCard.COLUMN_COUNT: "ERROR: " + colStart + " must be < " + BingoCard.COLUMN_COUNT;
		assert deltaRow >= -1 && deltaRow <= 1 : "ERROR: deltaRow must be between -1 and 1!";
		assert deltaCol >= -1 && deltaCol <= 1 : "ERROR: deltaCol must be between -1 and 1!";
		assert deltaRow != 0 || deltaCol != 0 : "ERROR: deltaRow and deltaCol cannot be both 0!";

		boolean winner = false;
		int row = rowStart;
		int col = colStart;
		int count = 0;
		while(count < 5)
		{
			if(isMarked(row, col))
			{
				winner = true;
			}
			else
			{
				winner = false;
				break;
			}
			row += deltaRow;
			col += deltaCol;
			count++;
		}

		return winner;
	}

	//pre: true
	//post: returns true when 5 in a row are found
	//either horizontally, vertically, or diagonally
	public boolean isWinner() {
		boolean retBool = false;
		int row = 1;
		int col = 1;
		// check columns
		while(!retBool && col <= BingoCard.COLUMN_COUNT)
		{
			retBool = is5InARow(row, col, 1, 0);
			col ++;
		}
		row = 1;
		col = 1;
		// check rows
		while(!retBool && row <= BingoCard.ROW_COUNT)
		{

			retBool = is5InARow(row, col, 0, 1);
			row ++;
		}
		// check diagonals
		if(!retBool)
		{
			row = 1;
			col = 1;
			retBool = is5InARow(row, col, 1, 1);
		}
		if(!retBool)
		{
			row = 1;
			col = BingoCard.COLUMN_COUNT;
			retBool = is5InARow(row, col, 1, -1);
		}
		return retBool;
	}


	public String toString()
	{
		String temp = "";
		temp += "[\n";
		for(int i = 1; i <= ROW_COUNT; i++)
		{	
			temp += "{  ";
			for(int j = 1; j <= COLUMN_COUNT; j++)
			{
				if(i == FREE_SPACE_ROW && j == FREE_SPACE_COLUMN)
				{
					temp += "(FS), ";
				}
				else
				{
					temp += (isMarked(i, j) ? "(" + getEntry(i, j) + ") " : getEntry(i, j) + " ");
					if(j < COLUMN_COUNT)
					{
						temp += ",  ";
					}
				}
			}
			temp += "}\n";
		}

		temp += "]";

		return temp;
	}
}