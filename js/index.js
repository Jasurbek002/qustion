

var divElement = document.createElement('div')
divElement.setAttribute('class','container')


var navElement = document.createElement('div')
navElement.setAttribute('class','text-white ps-5 d-flex justify-content-beteen pe-5')
var isinput = document.createElement('input')
isinput.setAttribute('class',' form-control mt-1')
isinput.style.width='400px'
isinput.style.height='40px'
isinput.setAttribute('placeholder','Serch gamer...')
var isbutton = document.createElement('button')
isbutton.style.height='40px'
isbutton.setAttribute('type','submit' ,)
isbutton.setAttribute('class','btn btn-white bg-success mt-1')
isbutton.textContent='Serch'
navElement.style.justifyContent='space-between'
navElement.style.width='100'
navElement.style.height='50px'
navElement.style.fontSize='30px'
navElement.textContent='Pokeomos game'
navElement.style.background='red'


var ulEliment = document.createElement('ul')
ulEliment.setAttribute('class','row position-relative')

for(let i = 0; i<pokemons.length; i++ ){
    var liElement = document.createElement('li')
    liElement.setAttribute('class','card col-3 g-5 ms-5 shadow')
	liElement.style.background='#EDF3F8'
	liElement.style.width='277px'
	

    var imgElement = document.createElement('img')

	var h4Element = document.createElement('h4')
	h4Element.setAttribute('class','position-absolute text-danger start-0')

	var numElement = document.createElement('h3')
	numElement.setAttribute('class',' style-1 position-absolute end-0 p-2 rounded-circle bg-success text-white')
    
	var highElement = document.createElement('div')
	highElement.setAttribute('class','badge bg-success')
	highElement.style.margin='5px 100px 0px 0px'
	highElement.textContent="Hight;    " + pokemons[i].height

	var wegElement = document.createElement('div')
	wegElement.setAttribute('class','badge bg-primary')
	wegElement.style.margin='5px 130px 0px 0px'
	wegElement.textContent="weght: " + pokemons[i].weight

	var   spanElement = document.createElement('div')
	spanElement.setAttribute('class','badge bg-secondary')
	spanElement.style.margin='5px 130px 0px 0px'
	spanElement.textContent="Spawn:" + pokemons[i].spawn_chance
     
	var candyElements = document.createElement('div')
	candyElements.setAttribute('class','badge bg-info')
	candyElements.style.margin='5px 50px 0px 0px'
	candyElements.textContent="Candy : " + pokemons[i].candy_count

	var avgElement = document.createElement('div')
	avgElement.setAttribute('class','badge bg-warning')
	avgElement.style.margin='5px 150px 0px 0px'
	avgElement.textContent="Avg:" + pokemons[i].avg_spawns

	var kandyElements = document.createElement('div')
	kandyElements.style.fontSize='14px'
	kandyElements.style.color='green'
	kandyElements.textContent="Candy:  " + pokemons[i].candy

	var eggElement = document.createElement('div')
	eggElement.style.fontSize='14px'
	eggElement.style.color='green'
	eggElement.textContent="egg:  " + pokemons[i].egg

	var timeElement = document.createElement('div')
	timeElement.style.fontSize='14px'
	timeElement.style.color='green'
	timeElement.textContent="Time:  " + pokemons[i].spawn_time

	for(let k=0; k<pokemons[i].multipliers; k++){
		var multiElements = document.createElement('div')
		multiElements.style.fontSize='14px'
	     multiElements.style.color='green'
		 multiElements.textContent="Multiplers; " + pokemons[i].multipliers

	}
	



	for(let f=0; f<pokemons[i].weaknesses.length;f++){
       var weakElements = document.createElement('div')
	   weakElements.style.fontSize='14px'
	   weakElements.style.color='green'
	   weakElements.textContent= "Weaknesses: " + pokemons[i].weaknesses
	}

  
	for(let j=0; j<pokemons[i].type.length;j++ ){

        var typeElement = document.createElement('div')
		typeElement.setAttribute('class','badge bg-danger  me-5')
	    typeElement.textContent=  pokemons[i].type
	

		
	}
	
    //   var letelment = document.createElement('div')
	//   letelment.textContent=`${pokemons[i].next_evolution[0].num}`

	// for(let h =0; h<pokemons[i].next_evolution;h++){
    //         console.log(pokemons[i].next_evolution)
	// 		var evElement = document.createElement('div')
             
	// 		evElement.textContent="next;" 
	// 	evElement.setAttribute('class','')
	// 	letelment.appendChild(evElement)
	// }
		// for(let x = 0;x<pokemons[i].next_evolution[l].length;x++){
        //   var nexElemnt = document.createElement('div')
		//   nexElemnt.textContent=pokemons[i].next_evolution[l].num
		//   evElement.appendChild(nexElemnt)
		// }
		// var evElement = document.createElement('div')
		// evElement.setAttribute('class','card')
		//  var evElement2 = document.createElement('div')
		// evElement2.textContent=pokemons[i].next_evolution[l].name
		// evElement.appendChild(evElement2)
		// console.log(pokemons[i].next_evolution[l])
	// }
	
    imgElement.src=pokemons[i].img
	imgElement.style.margin='50px 20px 50px 20px'
	h4Element.textContent=pokemons[i].name
	numElement.textContent=pokemons[i].num

    liElement.appendChild(imgElement)
	liElement.appendChild(h4Element)
	liElement.appendChild(numElement)
	liElement.appendChild(typeElement)
	liElement.appendChild(candyElements)
	liElement.appendChild(highElement)
    liElement.appendChild(wegElement)	 
	liElement.appendChild(spanElement)
	liElement.appendChild(avgElement)
	liElement.appendChild(kandyElements)
	liElement.appendChild(eggElement)
	liElement.appendChild(timeElement)
	liElement.appendChild(multiElements)
	liElement.appendChild(weakElements)
	// liElement.appendChild(letelment)
	
	
	
	

    ulEliment.appendChild(liElement)
}

navElement.appendChild(isinput)
navElement.appendChild(isbutton)
divElement.appendChild(navElement)
divElement.appendChild(ulEliment)
document.body.appendChild(divElement)