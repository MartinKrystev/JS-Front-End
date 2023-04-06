function create(words) {
   let divContainer = document.getElementById('content');


   for (const word of words) {
      let divItem = document.createElement('div');
      let pItem = document.createElement('p');
      pItem.innerText = word;
      pItem.style.display = 'none';

      divItem.appendChild(pItem);
      divContainer.appendChild(divItem);

      divItem.addEventListener('click', revealText);
   }

   function revealText(e) {
      let target = e.currentTarget;
      
      let pChild = target.firstChild;
      pChild.style.display = 'block';
   }


}