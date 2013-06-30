#pragma strict

var regularSpeed : float = 6;
var runSpeed : float = 9;
var crouchSpeed : float = 3;

private var charMotor : CharacterMotor;
private var charController : CharacterController;
private var tran : Transform;
private var charHeight : float;

function Start () {
	charMotor = GetComponent(CharacterMotor);
	charController = GetComponent(CharacterController);
	tran = transform;
	charHeight = charController.height;
}

function Update () {
	var speed = regularSpeed;
	var h = charHeight;
	if(charController.isGrounded && Input.GetKey(KeyCode.LeftShift))
	{
		speed = runSpeed;	
	}
	else if(charController.isGrounded && Input.GetKey(KeyCode.C))
	{
		h = charHeight * 0.6;
		speed = crouchSpeed;	
	}
	charMotor.movement.maxForwardSpeed = speed;
	var lastHeight = charController.height;
	charController.height = Mathf.Lerp(charController.height, h, 5 * Time.deltaTime);
	tran.position.y = Mathf.Lerp(tran.position.y, tran.position.y + (charController.height - lastHeight) * 0.6, 5 * Time.deltaTime);
}