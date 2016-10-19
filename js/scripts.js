function rysujChoinkę (k) {
	for ( var n = 0 ; n < (k + 1) ; n++ ) {
		var star = ' ';

		for ( var m = 0 ; m < (n * 2 - 1); m++ ) {
			star += '*';
		} 

		console.log(star);
	}
};

rysujChoinkę(5);