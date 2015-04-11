
class Fibonnachi
{

	constructor()
	{

	}

	static calcNumber(input,current=3,leftnum=1,rightnum=1)
	{
		if (input == 1 || input == 2)
		{
			return 1;
		}		
	
		if (input==current)
		{	
			return (leftnum + rightnum);
		}
		else
		{	
			return this.calcNumber(input,current+1,rightnum,leftnum+rightnum);
		}
	}
	
}

//window.alert(Fibonnachi.calcNumber(20));



