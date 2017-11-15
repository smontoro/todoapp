var menuItem = [
	{
		dish: "MANDALAY EGGPLANT",
		description: "Crispy eggplant with vegetables in garlic and hot sauce.",
		price: "$12.99",
		veg: "veg",
		main: "main"
	},

	{
		dish: "RAINBOW PRAWN",
		description: "Pan fry prawns with fresh slice of sweet tangy mangoes pineapples and vegetables.",
		price: "$13.50",
		main: "main",
		gf: "gf"
	},

	{
		dish: "WALNUT BROCCOLI CHICKEN",
		description: "Boneless chicken and steamed broccoli glazed over with honey kissed walnuts.",
		price: "$13.50",
		main: "main"
	},

	{
		dish: "OKRA EGG CURRY",
		description: "Fried whole egg cooked with tomato, tamarind, okra, cilantro and curry spices.",
		price: "$12.99",
		veg: "veg",
		main: "main"
	},

	{
		dish: "MANGO PRAWN",
		description: "Pan fried prawn with fresh slices of sweet, tangy mangoes.",
		price: "$14.00",
		main: "main"
	},

	{
		dish: "BALADA",
		description: "Burmese crispy pancake with curry dipping sauce.",
		price: "$9.00",
		app: "app",
		veg: "veg"
	},

	{
		dish: "SATAY CHICKEN (6 SKEWERS)",
		description: "Marinated chicken or beef charcoal grilled to perfection served with peanut sauce on the side.",
		price: "$10.00",
		app: "app",
		gf: "gf"
	}
]





function showFull() {
	document.getElementById('menu').innerHTML = '';
	for (i=0; i<menuItem.length; i++) {
			var dish = menuItem[i].dish
			var description = menuItem[i].description	
			var price = menuItem[i].price
			var dishText = document.createTextNode(dish)
			var descriptionText = document.createTextNode(description)
			var priceText = document.createTextNode(price)
			var h3Item = document.createElement("h3")
			var pDescription = document.createElement("p")
			var pPrice = document.createElement("p")
			h3Item.appendChild(dishText)
			pDescription.appendChild(descriptionText)
			pPrice.appendChild(priceText)
			document.getElementById("menu").appendChild(h3Item)
			document.getElementById("menu").appendChild(pDescription)	
			document.getElementById("menu").appendChild(pPrice)
	}
}


function showMain() {
	document.getElementById('menu').innerHTML = '';
	for (i=0; i<menuItem.length; i++) {
		if(menuItem[i].main == "main"){	
			var dish = menuItem[i].dish
			var description = menuItem[i].description	
			var price = menuItem[i].price
			var dishText = document.createTextNode(dish)
			var descriptionText = document.createTextNode(description)
			var priceText = document.createTextNode(price)
			var h3Item = document.createElement("h3")
			var pDescription = document.createElement("p")
			var pPrice = document.createElement("p")
			h3Item.appendChild(dishText)
			pDescription.appendChild(descriptionText)
			pPrice.appendChild(priceText)
			document.getElementById("menu").appendChild(h3Item)
			document.getElementById("menu").appendChild(pDescription)
			document.getElementById("menu").appendChild(pPrice)			
		}
	}
}

function showVeg() {
	document.getElementById('menu').innerHTML = '';
	for (i=0; i<menuItem.length; i++) {
		if(menuItem[i].veg == "veg"){	
			var dish = menuItem[i].dish
			var description = menuItem[i].description	
			var price = menuItem[i].price
			var dishText = document.createTextNode(dish)
			var descriptionText = document.createTextNode(description)
			var priceText = document.createTextNode(price)
			var h3Item = document.createElement("h3")
			var pDescription = document.createElement("p")
			var pPrice = document.createElement("p")
			h3Item.appendChild(dishText)
			pDescription.appendChild(descriptionText)
			pPrice.appendChild(priceText)
			document.getElementById("menu").appendChild(h3Item)
			document.getElementById("menu").appendChild(pDescription)
			document.getElementById("menu").appendChild(pPrice)			
		}
	}
}

function showApps() {
	document.getElementById('menu').innerHTML = '';
	for (i=0; i<menuItem.length; i++) {
		if(menuItem[i].app == "app"){	
			var dish = menuItem[i].dish
			var description = menuItem[i].description	
			var price = menuItem[i].price
			var dishText = document.createTextNode(dish)
			var descriptionText = document.createTextNode(description)
			var priceText = document.createTextNode(price)
			var h3Item = document.createElement("h3")
			var pDescription = document.createElement("p")
			var pPrice = document.createElement("p")
			h3Item.appendChild(dishText)
			pDescription.appendChild(descriptionText)
			pPrice.appendChild(priceText)
			document.getElementById("menu").appendChild(h3Item)
			document.getElementById("menu").appendChild(pDescription)
			document.getElementById("menu").appendChild(pPrice)			
		}
	}
}


function showGf() {
	document.getElementById('menu').innerHTML = '';
	for (i=0; i<menuItem.length; i++) {
		if(menuItem[i].gf == "gf"){	
			var dish = menuItem[i].dish
			var description = menuItem[i].description	
			var price = menuItem[i].price
			var dishText = document.createTextNode(dish)
			var descriptionText = document.createTextNode(description)
			var priceText = document.createTextNode(price)
			var h3Item = document.createElement("h3")
			var pDescription = document.createElement("p")
			var pPrice = document.createElement("p")
			h3Item.appendChild(dishText)
			pDescription.appendChild(descriptionText)
			pPrice.appendChild(priceText)
			document.getElementById("menu").appendChild(h3Item)
			document.getElementById("menu").appendChild(pDescription)
			document.getElementById("menu").appendChild(pPrice)			
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