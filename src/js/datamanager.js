export class DataManager {

	static getData() {
		// fetch data
		let p = new Promise((resolve, reject) => {
			let r = new XMLHttpRequest(); 
			r.open("GET", "https://pb-api.herokuapp.com/bars");
			r.onload = () => {
				if (r.status == 200) {
					// Resolve the promise with the response text
					try {
						let data = JSON.parse(r.responseText);
						resolve(data);		
					} catch (e) {
						reject(Error("Invalid JSON"));
					}
				}
				else {
					reject(Error(r.statusText));
				}
			};
			r.send(null);
		}); 
		return p;
	}

}