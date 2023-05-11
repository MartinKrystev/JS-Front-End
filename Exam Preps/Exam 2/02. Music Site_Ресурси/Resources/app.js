window.addEventListener('load', solve);

function solve() {
    const inputGenre = document.getElementById('genre');
    const inputName = document.getElementById('name');
    const inputAuthor = document.getElementById('author');
    const inputDate = document.getElementById('date');
    const btnAdd = document.getElementById('add-btn');

    const allHitsContainer = document.getElementsByClassName('all-hits-container')[0];
    let totalLikes = document.querySelector('#total-likes .likes p');
    let totalLikesCount = Number(totalLikes.textContent.split(' ')[2]);
    let currSong = {};
    const savedSonds = document.getElementsByClassName('saved-container')[0];

    btnAdd.addEventListener('click', addSongHandler);

    function addSongHandler(e) {
        e.preventDefault();

        if(inputGenre.value.trim() !== '' && inputName.value.trim() !== '' 
            && inputAuthor.value.trim() !== '' && inputDate.value.trim() !== '') {

            //creating elements
            let div = document.createElement('div');
            let img = document.createElement('img');
            let h2Genre = document.createElement('h2');
            let h2Name = document.createElement('h2');
            let h2Author = document.createElement('h2');
            let h3Date = document.createElement('h3');
            let btnSave = document.createElement('button');
            let btnLike = document.createElement('button');
            let btnDelete = document.createElement('button');
    
            //filling elements
            div.classList.add('hits-info');
            img.src = './static/img/img.png';
            h2Genre.textContent = `Genre: ${inputGenre.value}`;
            h2Name.textContent = `Name: ${inputName.value}`;
            h2Author.textContent = `Author: ${inputAuthor.value}`;
            h3Date.textContent = `Date: ${inputDate.value}`;
            btnSave.textContent = 'Save song';
            btnSave.classList.add('save-btn');
            btnLike.textContent = 'Like song';
            btnLike.classList.add('like-btn');
            btnDelete.textContent = 'Delete';
            btnDelete.classList.add('delete-btn');

            //filling the current song object
            // currSong['Genre'] = h2Genre.textContent;
            // currSong['Name'] = h2Name.textContent;
            // currSong['Author'] = h2Author.textContent;
            // currSong['Date'] = h3Date.textContent;
    
            //adding elements to the DOM
            allHitsContainer.appendChild(div);
            div.appendChild(img);
            div.appendChild(h2Genre);
            div.appendChild(h2Name);
            div.appendChild(h2Author);
            div.appendChild(h3Date);
            div.appendChild(btnSave);
            div.appendChild(btnLike);
            div.appendChild(btnDelete);
    
            //button events
            btnLike.addEventListener('click', likeHandler);
            btnSave.addEventListener('click', saveHandler);
            btnDelete.addEventListener('click', deleteHandler);
    
            //clearing the input fields
            inputGenre.value = '';
            inputName.value = '';
            inputAuthor.value = '';
            inputDate.value = '';

        }
    };

    function likeHandler(e) {
        let btnLike = e.currentTarget;
        totalLikesCount++;
        totalLikes.textContent = `Total Likes: ${totalLikesCount}`;
        btnLike.setAttribute('disabled', true);
    };

    function saveHandler(e) {
        //current song info
        let parentNode = e.currentTarget.parentNode;
        let songInfo = Array.from(parentNode.children);

        let currGenre = songInfo[1].textContent;
        let currName = songInfo[2].textContent;
        let currAuthor = songInfo[3].textContent;
        let currDate = songInfo[4].textContent;

        //creating elements
        let div = document.createElement('div');
        let img = document.createElement('img');
        let h2Genre = document.createElement('h2');
        let h2Name = document.createElement('h2');
        let h2Author = document.createElement('h2');
        let h3Date = document.createElement('h3');
        let btnDelete = document.createElement('button');

        //filling elements
        div.classList.add('hits-info');
        img.src = './static/img/img.png';
        h2Genre.textContent = currGenre;
        h2Name.textContent = currName;
        h2Author.textContent = currAuthor;
        h3Date.textContent = currDate;
        btnDelete.textContent = 'Delete';
        btnDelete.classList.add('delete-btn');

        //adding elements to the DOM
        savedSonds.appendChild(div);
        div.appendChild(img);
        div.appendChild(h2Genre);
        div.appendChild(h2Name);
        div.appendChild(h2Author);
        div.appendChild(h3Date);
        div.appendChild(btnDelete);

        //delete button event
        btnDelete.addEventListener('click', deleteHandler);

        //clearing Collection of songs
        let parentEl = e.currentTarget.parentNode;
        parentEl.remove();
    };

    function deleteHandler(e) {
        let parentEl = e.currentTarget.parentNode;
        parentEl.remove();
    };
}