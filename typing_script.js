var ractive = new Ractive({
  el: '#container',
  template: '#template',

  data: { 
  	line: [ "var ractive = new Ractive({",
  			"el: '#container,'",
  			"template: '#template',", "and me"]
	}
})



console.log('lengthOfList = ' + ractive.get('line').length);




function spellCheck(elmnt,content,i){
	console.log('elmt =' + elmnt.id);
	var target = ractive.get('line.' + i);
	var typing = document.getElementById(i).value;
	//console.log(typing);

	if(!target.startsWith(typing)){
		document.getElementById(i).style.backgroundColor = "lightblue";
	}
	else{
		document.getElementById(i).style.backgroundColor = "white";
	}


	document.addEventListener('keyup', function(event) {
	    if (event.keyCode == 13)
	        {
		        console.log('\nbefore ' , + parseInt(elmnt.id));
		        next=parseInt(elmnt.id)+1;

		        if (next < ractive.get('line').length)
		        	{
			        	document.getElementById(next).focus();
			        	console.log('moving up');
		      		}
		        else{
		        	console.log('\nEND');
		        	console.log('next = ' + next);
		        	console.log(ractive.get('line').length);
		        	StopFunction();	
	        		};      
        	};
    });
}

function listLength(mylist){
	var total = 0;
	for (item in mylist){
		total += mylist[item].length;
	}
	return total;
}

// ractive.set({
// 	diff: 'timing...',
// 	length: ''
// })

ractive.on('start', function () {
	ractive.set('start', new Date());
	ractive.set('diff', 'timing...');
	ractive.set('length','');
	ractive.set('rate','');
	ractive.set('bColor','white');
	var myInputs = document.querySelectorAll("input");
	for (item in myInputs){
		myInputs[item].value='';
		console.log('items = ' + myInputs[item].id)
		//myInputs[item].style.backgroundColor = "white"; // error ??
	}
});



function StopFunction(){
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
}





