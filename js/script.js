const studentItems = document.querySelectorAll('.student-item')
const perPage = 10;
const div = document.querySelector('.page');


//divides list into pages
const showPage = (list, page) => {
   const startIndex = (page * perPage) - perPage;
   const endIndex = (page * perPage) - 1;
   for (let i = 0; i < list.length; i ++) {
      if (i >= startIndex && i <= endIndex ) {
         list[i].style.display = "";
      } else {
         list[i].style.display = 'none';
      };
   };
};

//add pagination links to page
const appendPageLinks = list => {
   let totalPages = list.length / perPage;
   totalPages = Math.ceil(totalPages);
   const links = document.createElement('div');
   links.className = 'pagination';
   div.appendChild(links);
   const linksList = document.createElement('ul');
   links.appendChild(linksList);
   let paginationLink;
   for (let i = 1; i <= totalPages; i ++) {
      paginationLink = document.createElement('li');
      paginationLink.innerHTML = `<a>${i}</a>`;
      linksList.appendChild(paginationLink);
   };
   paginationLink.addEventListener('click', showPage(list, parseInt(paginationLink.textContent)));
};

appendPageLinks(studentItems);


