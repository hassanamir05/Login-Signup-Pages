const checkBox = document.getElementById("show");
const passType = document.getElementsByTagName("input")[1];
checkBox.addEventListener("change", function () {
  if (checkBox.checked) {
    passType.type = "text";
  } else {
    passType.type = "password";
  }
});
