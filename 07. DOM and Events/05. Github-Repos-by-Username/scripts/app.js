async function loadRepos() {
	const ulContainer = document.getElementById('repos');
	const BASE_URL = 'https://api.github.com/users/';
	const username = document.getElementById('username');

	let usernameValue = username.value + '/repos';
	let finalURL = BASE_URL + usernameValue;
	
	try{
		const allRepos = await fetch(finalURL);
		const data = await allRepos.json();

		ulContainer.innerHTML = '';

		for (const repo of data) {
			let newLi = document.createElement('li');
			let newA = document.createElement('a');

			let fullName = repo.full_name;
			let HTMLURL = repo.html_url;
		
			newA.setAttribute('href', HTMLURL);
			newA.innerText = fullName;

			newLi.appendChild(newA);	
			ulContainer.appendChild(newLi);
		}
	} catch(error) {
		console.log(error);
	}

}