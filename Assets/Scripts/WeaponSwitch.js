#pragma strict

var Weapon01 : GameObject;
var Weapon02 : GameObject;
var Weapon03 : GameObject;

function Update () {
	if(Input.GetKeyDown(KeyCode.Alpha1))
	{
		SwapWeapons(1);
	}
	if(Input.GetKeyDown(KeyCode.Alpha2))
	{
		SwapWeapons(2);
	}
	if(Input.GetKeyDown(KeyCode.Alpha3))
	{
		SwapWeapons(3);
	}
}

function SwapWeapons (option) {
	if(option == 1)
	{
		Weapon01.SetActiveRecursively(true);
		Weapon02.SetActiveRecursively(false);
		Weapon03.SetActiveRecursively(false);
	}
	else if(option == 2)
	{
		Weapon02.SetActiveRecursively(true);
		Weapon01.SetActiveRecursively(false);
		Weapon03.SetActiveRecursively(false);
	}
	else if(option == 3)
	{
		Weapon03.SetActiveRecursively(true);
		Weapon01.SetActiveRecursively(false);
		Weapon02.SetActiveRecursively(false);
	}
}