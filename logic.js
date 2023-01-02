let arr = [];

function handleNumber(num) {
  arr.push(num);
  document.getElementById("number2").value += num;
  console.log(arr, "iner");
}

function handleOerator(op) {
  if (op === "=" || arr.length === 0) {
    return;
  }
  let lastValue = arr[arr.length - 1];
  console.log(lastValue, "ll");
  if (
    lastValue === "+" ||
    lastValue === "-" ||
    lastValue === "*" ||
    lastValue === "/"
  ) {
    return;
  }
  arr.push(op);
  document.getElementById("number2").value += op;
  console.log(arr, "op");
}

function handleResult() {
  let arrJoin = arr.join("");
  let result = eval(arrJoin);
  console.log(result, "join");

  document.getElementById("number1").value = arrJoin;
  document.getElementById("number2").value = result;

  arr = [];
  arr.push(result);
}

function handleClear() {
  arr = [];
  document.getElementById("number1").value = null;
  document.getElementById("number2").value = null;
}

function handleRemove() {
  console.log("handleRemove");
  const val = document.getElementById("number2").value?.split("");
  val.pop();
  document.getElementById("number2").value = val.join("");
}
