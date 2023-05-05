window.addEventListener("load", solve);

function solve() {
  const mainContainer = document.getElementById('main');
  const inputFirstName = document.getElementById('first-name');
  const inputLastName = document.getElementById('last-name');
  const inputAge = document.getElementById('age');
  const inputStoryTitle = document.getElementById('story-title');
  const inputGenre = document.getElementById('genre'); //.value
  const inputStory = document.getElementById('story');
  const btnPublish = document.getElementById('form-btn');
  const ulContainer = document.getElementById('preview-list');
  let storyData = {};

  btnPublish.addEventListener('click', publishHandler);

  function publishHandler() {
    ulContainer.innerHTML = '';

    if (inputFirstName.value.length > 0 && inputLastName.value.length > 0 && inputAge.value.length > 0
        && inputGenre.value.length > 0 && inputStoryTitle.value.length > 0 && inputStory.value.length > 0) {

          storyData['firstName'] = inputFirstName.value;
          storyData['lastName'] = inputLastName.value;
          storyData['age'] = inputAge.value;
          storyData['storyTitle'] = inputStoryTitle.value;
          storyData['genre'] = inputGenre.value;
          storyData['story'] = inputStory.value;
      
          let li = document.createElement('li');
          let article = document.createElement('article');
          let h4Name = document.createElement('h4');
          let pAge = document.createElement('p');
          let pTitle = document.createElement('p');
          let pGenre = document.createElement('p');
          let pStory = document.createElement('p');
          let btnSave = document.createElement('button');
          let btnEdit = document.createElement('button');
          let btnDelete = document.createElement('button');
      
          li.classList.add('story-info');
          h4Name.textContent = `Name: ${inputFirstName.value} ${inputLastName.value}`;
          pAge.textContent = `Age: ${inputAge.value}`;
          pTitle.textContent = `Title: ${inputStoryTitle.value}`;
          pGenre.textContent = `Genre: ${inputGenre.value}`;
          pStory.textContent = inputStory.value;
          btnSave.classList.add('save-btn');
          btnEdit.classList.add('edit-btn');
          btnDelete.classList.add('delete-btn');
          btnSave.textContent = 'Save Story';
          btnEdit.textContent = 'Edit Story';
          btnDelete.textContent = 'Delete Story';

          btnEdit.addEventListener('click', editHandler);
          btnSave.addEventListener('click', saveHandler);
          btnDelete.addEventListener('click', deleteHandler);
      
          ulContainer.appendChild(li);
          li.appendChild(article);
          li.appendChild(btnSave);
          li.appendChild(btnEdit);
          li.appendChild(btnDelete);
          article.appendChild(h4Name);
          article.appendChild(pAge);
          article.appendChild(pTitle);
          article.appendChild(pGenre);
          article.appendChild(pStory);

          btnPublish.setAttribute('disabled', true);

          inputFirstName.value = '';
          inputLastName.value = '';
          inputAge.value = '';
          inputStoryTitle.value = '';
          inputStory.value = '';
          inputGenre.value = 'Disturbing';
    }
  };

  function editHandler() {
    inputFirstName.value = storyData.firstName;
    inputLastName.value = storyData.lastName;
    inputAge.value = storyData.age;
    inputStoryTitle.value = storyData.storyTitle;
    inputGenre.value = storyData.genre;
    inputStory.value = storyData.story;

    btnPublish.removeAttribute('disabled');
    ulContainer.innerHTML = '';
    let h3Preview = document.createElement('h3');
    h3Preview.textContent = 'Preview';
    ulContainer.appendChild(h3Preview);
  };

  function saveHandler() {
    let h1 = document.createElement('h1');
    h1.textContent = 'Your scary story is saved!';
    mainContainer.innerHTML = '';
    mainContainer.appendChild(h1);
  };

  function deleteHandler() {
    btnPublish.removeAttribute('disabled');
    ulContainer.innerHTML = '';
    let h3Preview = document.createElement('h3');
    h3Preview.textContent = 'Preview';
    ulContainer.appendChild(h3Preview);
    inputGenre.value = 'Disturbing';
  };
}
