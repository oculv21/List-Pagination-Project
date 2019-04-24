const studentItems = document.querySelectorAll('.student-item')
const perPage = 10;
const div = document.querySelector('.page');

"use strict";

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

showPage(studentItems, 1);

//add pagination links to page
const appendPageLinks = list => {
   //calculate total pages
   let totalPages = list.length / perPage;
   totalPages = Math.ceil(totalPages);
   //create pagination div and ul
   const links = document.createElement('div');
   links.className = 'pagination';
   div.appendChild(links);
   const linksList = document.createElement('ul');
   links.appendChild(linksList);
   let paginationLink;
   //create each pagination link
   for (let i = 1; i <= totalPages; i ++) {
      paginationLink = document.createElement('li');
      paginationLink.innerHTML = `<a href="#">${i}</a>`;
      linksList.appendChild(paginationLink);
      //add click event listener to links
      paginationLink.addEventListener('click', () => {
         for (let j = 0; j < totalPages; j ++) {
            const links = linksList.querySelectorAll('a');
            links[j].classList.remove('active');
         };
         event.target.className = 'active';
         showPage(list, i);
      });
   };
};

appendPageLinks(studentItems);


