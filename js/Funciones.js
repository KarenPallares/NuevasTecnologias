var base64String = "";
function Uploaded() {
	var file = document.querySelector(
		'input[type=file]')['files'][0];
	var reader = new FileReader();
	reader.onload = function () {
		base64String = reader.result.replace("data:", "")
			.replace(/^.+,/, "");
		imageBase64Stringsep = base64String;
	}
	reader.readAsDataURL(file);
	console.log(base64String)
}
function display() {
    document.getElementById("nomest").value=""+base64String+"";
	console.log(base64String)
}

function prueba2() {
    var base64file = document.getElementById("nomest").value;
    imgElem.setAttribute('src', "data:image/jpg;base64," + base64file);

}