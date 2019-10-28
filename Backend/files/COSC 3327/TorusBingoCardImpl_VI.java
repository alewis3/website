package bingo;

public class TorusBingoCardImpl_Lewis {

	private BingoCard bingoCard;

	public TorusBingoCardImpl_Lewis(BingoCard bc)
	{
		BingoCard copy = BingoCardUtils_Lewis.copy(bc);
		bingoCard = copy;
	}
	public Integer getEntry(int row, int column)
	{
		return bingoCard.getEntry(row, column);
	}
	public void mark(int number)
	{
		bingoCard.mark(number);
	}
	public boolean isMarked(int row, int column)
	{
		return bingoCard.isMarked(row, column);
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
			if(bingoCard.isMarked(row, col)) 
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
			if(row > 5)
			{
				row = 1;
			}
			if(col > 5)
			{
				col = 1;
			}
			if(row == 0)
			{
				row = 5;
			}
			if(col == 0)
			{
				col = 5;
			}
			count++;
		}

		return winner;
	}

	public boolean isTorusWinner()
	{
		boolean torusWinner = bingoCard.isWinner(); // if it is a winner normally, use that
		// else go thru rows and cols and check all diagonals
		int row = 1;
		while(!torusWinner && row <= BingoCard.ROW_COUNT)
		{
			int col = 1;
			while(!torusWinner && col <= BingoCard.COLUMN_COUNT)
			{
				torusWinner = (!torusWinner ? is5InARow(row, col, -1, 1) : torusWinner); // bottom right diagonal
				torusWinner = (!torusWinner ? is5InARow(row, col, -1, 1) : torusWinner); // upper right diagonal
				torusWinner = (!torusWinner ? is5InARow(row, col, -1, 1) : torusWinner); // bottom left diagonal
				torusWinner = (!torusWinner ? is5InARow(row, col, -1, 1) : torusWinner); // bottom right diagonal
				col++;
			}
			row++;
		}
		return torusWinner;
	}
	public String toString()
	{
		return "" + bingoCard;
	}
}
