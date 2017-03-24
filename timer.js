var startTime = new Date();

var ractive = new Ractive({
  el: '#container',
  template: '#template',

  data: { 
	start: 0,
	diff: 0
  }
});


ractive.on( 'start', function () {
  ractive.set('start', new Date())
  console.log(ractive.get('start'));
});

ractive.on( 'end', function () {
  var difference = new Date() - ractive.get('start');
  difference /= 1000;
  difference = Math.round(difference);
  ractive.set( 'diff', difference)
});




