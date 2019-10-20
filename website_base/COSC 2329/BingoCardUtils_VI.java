package bingo;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

public class BingoCardUtils_Lewis
{
	public static boolean areEqual(BingoCard bingoCard1, BingoCard bingoCard2)
	{
		boolean retBool = true;
		int row = 0;
		int col = 0;
		while(retBool && row < BingoCard.ROW_COUNT)
		{
			while(retBool && col < BingoCard.COLUMN_COUNT)
			{
				if(bingoCard1.getEntry(row + 1, col + 1) != bingoCard2.getEntry(row + 1, col + 1))
				{
					retBool = false;
				}
				col++;
			}
			row++;
		}
		return retBool;
	}

	//part of pre: bingoCard != null
	//part of post: rv != bingoCard
	//part of post: areEqual(bingoCard, rv)
	public static BingoCard copy(BingoCard bingoCard)
	{
		List<List<Integer>> rowListList = new ArrayList<List<Integer>>();
		for(int row = 0; row < BingoCard.ROW_COUNT; row++)
		{
			List<Integer> listToAdd = new ArrayList<Integer>();
			for(int col = 0; col < BingoCard.COLUMN_COUNT; col++)
			{
				if(row != BingoCard.FREE_SPACE_ROW || col != BingoCard.FREE_SPACE_COLUMN)
				{
					listToAdd.add(bingoCard.getEntry(row + 1, col + 1));
				}
			}
			rowListList.add(listToAdd);
		}
		BingoCard retBingoCard = new BingoCardRowListBasedImpl_Lewis(rowListList);
		return retBingoCard;
	}

	//part of pre: bingoCard != null
	//part of post: 1 <= rv <= 75
	public static int markCount(BingoCard bingoCard)
	{
		int markCount = 0;
		for(int row = 0; row < BingoCard.ROW_COUNT; row++)
		{
			for(int col = 0; col < BingoCard.COLUMN_COUNT; col++)
			{
				if(bingoCard.isMarked(row, col))
				{
					markCount++;
				}
			}
		}
		return markCount;
	}

	//part of pre: bingoCardSet != null
	//part of pre: !bingoCardSet.contains(null)
	//part of pre: bingoCard in bingoCardSet ==> markCount(bingoCard) == 1
	//part of pre: 0 <= bingoCardNumbersNoDuplicates.length <= 75
	//part of pre: bingoCardNumbersNoDuplicates doesn't have duplicates
	//part of post: rv != null
	//part of post: bingoCard in rv ==> markCount(bingoCard) == 1
	public static Set<BingoCard> getProjectedWinners(Set<BingoCard> bingoCardSet, int[] bingoCardNumbersNoDuplicates)
	{
		Set<BingoCard> retBingoCardSet = new HashSet<BingoCard>();
		// create iterator
		Iterator<BingoCard> it = bingoCardSet.iterator();
		// while the set has more items in it
		while(it.hasNext())
		{
			// get the current bingo card
			BingoCard originalBingoCard = it.next();
			// make a copy of it
			BingoCard copyBingoCard = copy(originalBingoCard);
			// set the boolean winner variable to false and the index of the int[] to 0
			boolean bingoWinner = false;
			int bingoCardNumberIndex = 0;
			// a while loop to go thru the bingoCardNumbersNoDuplicates array
			while(!bingoWinner && bingoCardNumberIndex < bingoCardNumbersNoDuplicates.length)
			{
				int numberToMark = bingoCardNumbersNoDuplicates[bingoCardNumberIndex];
				copyBingoCard.mark(numberToMark);
				if(copyBingoCard.isWinner())
				{
					retBingoCardSet.add(originalBingoCard);
					bingoWinner = true;
				}
				bingoCardNumberIndex++;
			}
		}
		
		return retBingoCardSet;
	}

	//EXTRA CREDIT getTorusBingoProjectedWinners(): DON'T DO UNLESS YOU HAVE COMPLETED THE REST OF THIS CHALLENGE!
	//part of pre: bingoCardSet != null
	//part of pre: !bingoCardSet.contains(null)
	//part of pre: bingoCard in bingoCardSet ==> markCount(bingoCard) == 1
	//part of pre: 0 <= bingoCardNumbersNoDuplicates.length <= 75
	//part of pre: bingoCardNumbersNoDuplicates doesn't have duplicates
	//part of post: rv != null
	//part of post: bingoCard in rv ==> markCount(bingoCard) == 1
	public static Set<BingoCard> getTorusBingoProjectedWinners(Set<BingoCard> bingoCardSet, int[] bingoCardNumbersNoDuplicates)
	{
		Set<BingoCard> retBingoCardSet = new HashSet<BingoCard>();
		// create iterator
		Iterator<BingoCard> it = bingoCardSet.iterator();
		// while the set has more items in it
		while(it.hasNext())
		{
			// get the current bingo card
			BingoCard originalBingoCard = it.next();
			TorusBingoCardImpl_Lewis torusBingoCard = new TorusBingoCardImpl_Lewis(originalBingoCard);

			// set the boolean winner variable to false and the index of the int[] to 0
			boolean bingoWinner = false;
			int bingoCardNumberIndex = 0;
			// a while loop to go thru the bingoCardNumbersNoDuplicates array
			while(!bingoWinner && bingoCardNumberIndex < bingoCardNumbersNoDuplicates.length)
			{
				int numberToMark = bingoCardNumbersNoDuplicates[bingoCardNumberIndex];
				torusBingoCard.mark(numberToMark);
				if(torusBingoCard.isTorusWinner())
				{
					retBingoCardSet.add(originalBingoCard);
					bingoWinner = true;
				}
				bingoCardNumberIndex++;
			}
		}
		
		return retBingoCardSet;
	}
}
