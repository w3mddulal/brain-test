window.fn = {};

window.fn.openMenu = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page, mytitle) {
  var navigator = document.getElementById('myNavigator');
  var menu = document.getElementById('menu');
  data = { data: { title: mytitle }, animation: 'slide' };
  navigator.pushPage(page, data).then(menu.close.bind(menu));
};

function addNumbers() {
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;

  var result = Number(firstNumber) + Number(secondNumber);

  ons.notification.toast('Result: ' + result, { timeout: 2000 });
}

function multiplyNumbers() {
  var firstNumber = document.getElementById('firstNumberMultiply').value;
  var secondNumber = document.getElementById('secondNumberMultiply').value;

  var result = Number(firstNumber) * Number(secondNumber);

  ons.notification.toast('Result: ' + result, { timeout: 2000 });
}

function clearInputs() {
  document.getElementById('firstNumber').value = '';
  document.getElementById('secondNumber').value = '';
}

function clearInputs2() {
  document.getElementById('firstNumberMultiply').value = '';
  document.getElementById('secondNumberMultiply').value = '';
}
