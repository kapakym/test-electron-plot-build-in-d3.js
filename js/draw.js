const d3 = require("../libs/d3")
var ampl = 0; // Смещение
var freqs = 0.05; // Частота
var alf = 60; // Масштаб
dataset=[];
d3.select('#content') // выбор в документе body
    .append('svg') // добавление в body svg-контейнера
    .append('text') // добавление в svg-контейнер элемента text
    .text('Click somewhere, please...') // изменение текста в элементе text
    .attr('x', 0) // задание координат элемента text
    .attr('y', 25)
	.style("fill","firebrick") // заливка текста цветом

	d3.select("#content")
    .append("svg")
    .append("rect")
    .attr("width", 50)
    .attr("height", 10)
	.style("fill", "red");

	


	
	var n=200
	 

	var margin = 25
	var offset = 50
	var axisWidth = width - 2 * margin
	console.log("y:", width)
	var margin = {top: 50, right: 50, bottom: 50, left: 50}
	, width = 500 - margin.left - margin.right // Use the window's width 
	, height = 500 - margin.top - margin.bottom;

	// var svg = d3.select("#content").append("svg")
	// .attr("height", "400")
    // .attr("width", "400");

	// svg.append("path").attr("d",line(dataset))
	// .attr("transform", "scale(2)");

calcsin()
var xScale = d3.scaleLinear()
    .domain([0, 300]) // input
    .range([0, width]); // output

// 6. Y scale will use the randomly generate number 
var yScale = d3.scaleLinear()
    .domain([-100, 100]) // input 
	.range([height, 0]); // output 
	
var line = d3.line()
    .x(function(d, i) { return xScale(d.x); }) // set the x values for the line generator
    .y(function(d) { return yScale(d.y); }) // set the y values for the line generator 
    .curve(d3.curveMonotoneX)

	var svg = d3.select("#content").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom

// 4. Call the y axis in a group tag
svg.append("g")
    .attr("class", "y axis")
    .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft

// 9. Append the path, bind the data, and call the line generator 

svg.append("path")

    .datum(dataset) // 10. Binds data to the line 
    .attr("class", "line") // Assign a class for styling 
    .attr("d", line); // 11. Calls the line generator 

// 12. Appends a circle for each datapoint 
// svg.selectAll(".dot")
//     .data(dataset)
//   .enter().append("circle") // Uses the enter().append() method
//     .attr("class", "dot") // Assign a class for styling
//     .attr("cx", function(d, i) { return xScale(i) })
//     .attr("cy", function(d) { return yScale(d.y) })
//     .attr("r", 5)
//       .on("mouseover", function(a, b, c) { 
//   			console.log(a) 
//         this.attr('class', 'focus')
// 		})
//       .on("mouseout", function() {  })







	function calcsin(){
		
		for (var i=1; i<360; i++) {
		   //dataset.push( [i,Math.sin(freqs*i+alf)*100]);
		  
		   dataset.push( {"x":i,"y":alf*Math.sin(freqs*i)+ampl});
		};
		console.log(dataset);
	  };	


	  


