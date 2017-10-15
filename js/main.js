function myFunction() {
	var input = document.getElementById("input").value

	var inputText = document.createTextNode(input)

	var li = document.createElement("li")

	li.appendChild(inputText)

	var ol = document.getElementById("list")

	ol.appendChild(li)
}