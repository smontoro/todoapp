var menuItem = [
	{
		dish: "MANDALAY EGGPLANT",
		description: "Crispy eggplant with vegetables in garlic and hot sauce.",
		veg: "veg",
		main: "main"
	},

	{
		dish: "RAINBOW PRAWN",
		description: "Pan fry prawns with fresh slice of sweet tangy mangoes pineapples and vegetables.",
		main: "main",
		gf: "gf"
	},

	{
		dish: "WALNUT BROCCOLI CHICKEN",
		description: "Boneless chicken and steamed broccoli glazed over with honey kissed walnuts.",
		main: "main"
	},

	{
		dish: "OKRA EGG CURRY",
		description: "Fried whole egg cooked with tomato, tamarind, okra, cilantro and curry spices.",
		veg: "veg",
		main: "main"
	},

	{
		dish: "MANGO PRAWN",
		description: "Pan fried prawn with fresh slices of sweet, tangy mangoes.",
		main: "main"
	},

	{
		dish: "BALADA",
		description: "Burmese crispy pancake with curry dipping sauce.",
		app: "app",
		veg: "veg"
	},

	{
		dish: "SATAY CHICKEN (6 SKEWERS)",
		description: "Marinated chicken or beef charcoal grilled to perfection served with peanut sauce on the side.",
		app: "app",
		gf: "gf"
	}
]

function showFull() {
	document.getElementById('menu').innerHTML = '';
	for (i=0; i<menuItem.length; i++) {
			var dish = menuItem[i].dish
			var description = menuItem[i].description	
			var dishText = document.createTextNode(dish)
			var descriptionText = document.createTextNode(description)
			var h3 = document.createElement("h3")
			var p = document.createElement("p")
			h3.appendChild(dishText)
			p.appendChild(descriptionText)
			document.getElementById("menu").appendChild(h3)
			document.getElementById("menu").appendChild(p)			
	}
}


function showMain() {
	document.getElementById('menu').innerHTML = '';
	for (i=0; i<menuItem.length; i++) {
		if(menuItem[i].main == "main"){	
			var dish = menuItem[i].dish
			var description = menuItem[i].description	
			var dishText = document.createTextNode(dish)
			var descriptionText = document.createTextNode(description)
			var h3 = document.createElement("h3")
			var p = document.createElement("p")
			h3.appendChild(dishText)
			p.appendChild(descriptionText)
			document.getElementById("menu").appendChild(h3)
			document.getElementById("menu").appendChild(p)			
		}
	}
}

function showVeg() {
	document.getElementById('menu').innerHTML = '';
 	for (i=0; i<menuItem.length; i++) {
		if(menuItem[i].veg == "veg"){	
			var dish = menuItem[i].dish
			var description = menuItem[i].description	
			var dishText = document.createTextNode(dish)
			var descriptionText = document.createTextNode(description)
			var h3 = document.createElement("h3")
			var p = document.createElement("p")
			h3.appendChild(dishText)
			p.appendChild(descriptionText)
			document.getElementById("menu").appendChild(h3)
			document.getElementById("menu").appendChild(p)
		}
	}
}

function showApps() {
	document.getElementById('menu').innerHTML = '';
 	for (i=0; i<menuItem.length; i++) {
		if(menuItem[i].app == "app"){	
			var dish = menuItem[i].dish
			var description = menuItem[i].description	
			var dishText = document.createTextNode(dish)
			var descriptionText = document.createTextNode(description)
			var h3 = document.createElement("h3")
			var p = document.createElement("p")
			h3.appendChild(dishText)
			p.appendChild(descriptionText)
			document.getElementById("menu").appendChild(h3)
			document.getElementById("menu").appendChild(p)
		}
	}
}


function showGf() {
	document.getElementById('menu').innerHTML = '';
 	for (i=0; i<menuItem.length; i++) {
		if(menuItem[i].gf == "gf"){	
			var dish = menuItem[i].dish
			var description = menuItem[i].description	
			var dishText = document.createTextNode(dish)
			var descriptionText = document.createTextNode(description)
			var h3 = document.createElement("h3")
			var p = document.createElement("p")
			h3.appendChild(dishText)
			p.appendChild(descriptionText)
			document.getElementById("menu").appendChild(h3)
			document.getElementById("menu").appendChild(p)
		}
	}
}











/*function myFunction() {
	var input = document.getElementById("input").value

	var inputText = document.createTextNode(input)

	var li = document.createElement("li")

	li.appendChild(inputText)

	var ol = document.getElementById("list")

	ol.appendChild(li)
}*/