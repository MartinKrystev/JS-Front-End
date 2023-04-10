function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const searchInput = document.getElementById('searchField');

   function onClick() {
      const searchedWord = searchInput.value;
      const tableRows = Array.from(document.querySelectorAll('tbody tr'));
      for (const el of tableRows) {
         let trimmedEl = el.textContent.trim();
         
         if(el.classList.contains('select')) {
            el.classList.remove('select');
         }

         if(trimmedEl.includes(searchedWord)) {
            el.classList.add('select');
         }
      }

      searchInput.value = '';
   }
}