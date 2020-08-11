 document.getElementById('add').onclick = adding;
 document.getElementById('sub').onclick = subtracting;
 document.getElementById('mult').onclick = multiplying;
 document.getElementById('div').onclick = dividing;

function adding() {
  let num1 = document.getElementById('in1').value;
  let num2 = document.getElementById('in2').value;
  let result = (+num1 + +num2);
  document.getElementById('total').innerHTML = result;
}

function subtracting() {
  let num1 = document.getElementById('in1').value;
  let num2 = document.getElementById('in2').value;
  let result = (+num1 - +num2);
  document.getElementById('total').innerHTML = result;
}

function multiplying() {
  let num1 = document.getElementById('in1').value;
  let num2 = document.getElementById('in2').value;
  let result = (+num1 * +num2);
  document.getElementById('total').innerHTML = result;
}

function dividing() {
  let num1 = document.getElementById('in1').value;
  let num2 = document.getElementById('in2').value;
  let result = (+num1 / +num2);
  document.getElementById('total').innerHTML = result;
}
