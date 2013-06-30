var Distance : float;
var Target : Transform;
var lookAtDistance = 25.0;
var chaseRange = 15;
var attackRange = 1.5;
var moveSpeed = 5.0;
var Damping = 6.0;
var attackRepeatTime = 1;
var controller : CharacterController;
var gravity : float = 20;
private var moveDirection : Vector3 = Vector3.zero;
private var attackTime : float;

function Start()
{
	attacTime = Time.time;
}

function Update()
{
	Distance = Vector3.Distance(Target.position, transform.position);
	
	if(Distance < lookAtDistance)
	{
		lookAt();
	}
	if(Distance > lookAtDistance)
	{
		renderer.material.color = Color.green;
	}
	if(Distance < attackRange)
	{
		attack();
	}
	else if(Distance < chaseRange)
	{
		chase();
	}
}

function lookAt()
{
	renderer.material.color = Color.yellow;
	var rotation = Quaternion.LookRotation(Target.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * Damping);
}

function chase()
{
	renderer.material.color = Color.red;
	moveDirection = transform.forward * moveSpeed;
	
	moveDirection.y -= gravity * Time.deltaTime;
	controller.Move(moveDirection * Time.deltaTime);

}

function attack()
{
	if(Time.time > attackTime)
	{
		Debug.Log("attack");
		attackTime = Time.time + attackRepeatTime;
	}
}

function ApplyDamage()
{
	lookAtDistance += 20.0;
	chaseRange += 10;
	moveSpeed += 0.5;
}