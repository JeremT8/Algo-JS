const t = [12, 4, 5, 7, 19, 13, 15];

function sort (data) {
	// Bouclée sur l'ensemble des index du tableaux
	for (let index in data) {
		let minValue = data[index];
		let minIndex = index - 1;

		// Bouclée pour trouver l'index min 
		for (let k = index; k < data.length; k++)  {
			if(data[k] < minValue) {
				minIndex = k;
				minValue = data[k];
			}
		}

		if(minIndex > index) {
			let temp = data[index];
			data[index] = data[minIndex];
			data[minIndex] = temp;
		}
	}	
}

sort(t);

console.log(t)
