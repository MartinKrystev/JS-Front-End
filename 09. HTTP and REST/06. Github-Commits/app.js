async function loadCommits() {
    const BASE_URL = 'https://api.github.com/repos/';
    const username = document.getElementById('username');
    const repo = document.getElementById('repo');
    const commits = document.getElementById('commits');
    
    let usernameValue = username.value;
    let repoValue = repo.value;

    try{
        const allCommitsRes = await fetch(`${BASE_URL}${usernameValue}/${repoValue}/commits`);
        const data = await allCommitsRes.json();

        data
            .forEach(({commit}) => {
                let newLi = document.createElement('li');
                newLi.textContent = `${commit.author.name}: ${commit.message}`;
                commits.appendChild(newLi);
            })
    } catch(error) {
        const newLi = document.createElement('li');
        newLi.textContent = error.message;
        commits.appendChild(newLi);
    }
}