
class Triage {
	tryMaxToMin(tableau) {
		var tabTemb = [];

		while (tableau.length) {
			tabTemb.push(...(tableau.splice(tableau.indexOf(Math.max.apply(null, tableau)), 1 )))
		}
		tableau = tabTemb;

		return tableau
	}

	tryMinToMax(tableau) {
		var tabTemb = [];

		while (tableau.length) {
			tabTemb.push(...(tableau.splice(tableau.indexOf(Math.min.apply(null, tableau)), 1 )))
		}
		tableau = tabTemb;

		return tableau
	}
}

const tri = new Triage;

console.log(tri.tryMaxToMin([3, 5, 7, 9, 11, 13, 4, 6, 18]));
console.log(tri.tryMinToMax([3, 5, 7, 9, 11, 13, 4, 6, 18]));
