#pragma strict

var damage : int = 50;
var distance : float;
var attackDistance : float = 100;
var Effect : Transform;
function Update()
{
	if(Input.GetButtonDown("Fire1"))
	{
		animation.Play("gunAttack");
		
	}
	if(animation.isPlaying == false)
	{
		animation.Play("gunIdle");
	}
	if(Input.GetKey(KeyCode.LeftShift))
	{
		animation.CrossFade("gunSprint");
	}
	else if(Input.GetKeyUp(KeyCode.LeftShift))
	{
		animation.CrossFade("gunIdle");
	}
}

function attackDamage()
{
	var hit : RaycastHit;
	var ray : Ray = Camera.main.ScreenPointToRay(Vector3(Screen.width * 0.5, Screen.height * 0.5, 0));
	if(Physics.Raycast(ray, hit, attackDistance))
	{
		var particaleTemp = Instantiate(Effect, hit.point, Quaternion.LookRotation(hit.normal));
		Destroy(particaleTemp.gameObject, 0.05);
		hit.transform.SendMessage("ApplyDamage", damage, SendMessageOptions.DontRequireReceiver);
	}
}