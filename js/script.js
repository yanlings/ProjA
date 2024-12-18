var timeline = new TimelineMax();
timeline.set('#letter', {
	css:{
		x: -window.innerWidth*2,
		rotationY: 180
	}
}).set('#card', {
	css:{autoAlpha: 0}
}).to('#letter', 1, {
	css:{
		x: "-50%"
	}, 
	ease: Power3.easeOut
}, 1).to('#letter', 0.8, {
	css:{
		rotationY: 0
	}, 
	ease: Power3.easeOut
}, '+=2').to('#letter .flap.top', 0.8, {
	css:{rotationX: 180, z: 0}, 
	ease: Power2.easeInOut
}, '+=0.5').to('#letter', 0.8, {
	css:{y: '+=200'}, 
	ease: Power2.easeInOut
}, '-=0.8').to('#letter .card', 0.8, {
	css:{y:'-=400'}, 
	ease: Power2.easeInOut
}).to('#letter .card', 0.8, {
	css:{z:'+=1500'},
	ease: Power2.easeInOut
}, '-=0.2').to('#letter', 0.8, {
	css:{z:'-=1200'}, 
	ease: Power2.easeInOut
}, '-=0.8').to('#letter .card', 0.8, {
	css:{y:'+=100'}, 
	ease: Power2.easeInOut
}, '-=0.8')