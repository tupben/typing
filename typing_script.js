var ractive = new Ractive({
  el: '#container',
  template: '#template',

  data: { 
  	line: [ "var ractive = new Ractive({",
  			"el: '#container,'",
  			"template: '#template',", "and me"]
	}
})


function spellCheck(i){
	var target = ractive.get('line.' + i);
	var typing = document.getElementById('myText' + i).value;
	console.log(typing);

	if(!target.startsWith(typing)){
		document.getElementById('myText' + i).style.backgroundColor = "lightblue";
	}
	else{
		document.getElementById('myText' + i).style.backgroundColor = "white";
	}
}

function listLength(mylist){
	var total = 0;
	for (item in mylist){
		total += mylist[item].length;
	}
	return total;
}

ractive.on('start', function () {
	ractive.set('start', new Date());
	ractive.set('diff', 'timing...');
	ractive.set('length','');
	ractive.set('rate','');
	var myInputs = document.querySelectorAll("input");
	for (item in myInputs){
		myInputs[item].value=''; 
		myInputs[item].style.backgroundColor = "white"; // error ??
	}
});

ractive.on('end', function () {
  if (ractive.get('start')) {
  	  var totalTime = new Date() - ractive.get('start');
	  totalTime /= 1000;
	  totalTime = Math.round(totalTime);
	  ractive.set( 'diff', totalTime + ' seconds, ');
	  ractive.set('start', 0);
	  var characters = listLength(ractive.get('line'))
	  ractive.set('length', characters + ' characters');
	  var cpm = Math.round(10*60*characters/totalTime)/10
	  cpm += ' characters per minute,  ' + Math.round(10*cpm/5)/10 + ' words per minute';
	  ractive.set('rate', cpm)
  }
});