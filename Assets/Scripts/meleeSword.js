#pragma strict

var damage : int = 50;
var distance : float;
var MaxDistance : float = 1.5;
var theSystem : Transform;

function Update()
{
	if(Input.GetButtonDown("Fire1"))
	{
		animation.Play("swordAttack");
		
	}
	if(animation.isPlaying == false)
	{
		animation.Play("swordIdle");
	}
	if(Input.GetKey(KeyCode.LeftShift))
	{
		animation.CrossFade("swordSprint");
	}
	else if(Input.GetKeyUp(KeyCode.LeftShift))
	{
		animation.CrossFade("swordIdle");
	}
}

function attackDamage()
{
	var hit : RaycastHit;
	if(Physics.Raycast (theSystem.transform.position, theSystem.transform.TransformDirection(Vector3.forward), hit))
	{
		distance = hit.distance;
		if(distance < MaxDistance)
		{
			hit.transform.SendMessage("ApplyDamage", damage, SendMessageOptions.DontRequireReceiver);
		}
	}
}