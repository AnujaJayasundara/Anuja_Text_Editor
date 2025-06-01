// Make bold button work
document.getElementById("boldid").addEventListener("click", function () {
  document.execCommand("bold");
});

document.getElementById("underlineid").addEventListener("click", function () {
  document.execCommand("underline");
});

document.getElementById("italicid").addEventListener("click", function () {
  document.execCommand("italic");
});

document.getElementById("colorid").addEventListener("click", function () {
  document.getElementById("colorPicker").click();
});

document.getElementById("colorPicker").addEventListener("input", function () {
  document.execCommand("foreColor", false, this.value);
});

function alignText(direction) {
  document.getElementById("text-input").style.textAlign = direction;
}

document.getElementById("undo").addEventListener("click", function () {
  document.execCommand("undo", false, null);
});
document.getElementById("redo").addEventListener("click", function () {
  document.execCommand("redo", false, null);
});
