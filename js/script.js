const studentItems = document.querySelectorAll('.student-item');
const studentList = document.querySelector('.student-list');
const perPage = 10;
const div = document.querySelector('.page');
const header = document.querySelector('.page-header');

"use strict";

//divides list into pages
const showPage = (list, page) => {
   const startIndex = (page * perPage) - perPage;
   const endIndex = (page * perPage) - 1;
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i <= endIndex) {
         list[i].style.display = "";
      } else {
         list[i].style.display = 'none';
      };
   };
};

//add pagination links to page
const appendPageLinks = list => {
   //calculate total pages
   let totalPages = list.length / perPage;
   totalPages = Math.ceil(totalPages);
   //create pagination div and ul
   const linksDiv = document.createElement('div');
   linksDiv.className = 'pagination';
   div.appendChild(linksDiv);
   const linksList = document.createElement('ul');
   linksDiv.appendChild(linksList);
   let paginationLink;
   //create each pagination link
   for (let i = 1; i <= totalPages; i++) {
      paginationLink = document.createElement('li');
      paginationLink.innerHTML = `<a href="#">${i}</a>`;
      linksList.appendChild(paginationLink);
      //add click event listener to links
      paginationLink.addEventListener('click', () => {
         for (let j = 0; j < totalPages; j++) {
            const links = linksList.querySelectorAll('a');
            links[j].classList.remove('active');
         };
         event.target.className = 'active';
         showPage(list, i);
      });
   };
};

showPage(studentItems, 1);
appendPageLinks(studentItems);

//create and append search bar
const createSearchField = () => {
   const searchDiv = document.createElement('div');
   searchDiv.className = 'student-search';
   header.appendChild(searchDiv);
   const searchBar = document.createElement('input');
   searchBar.setAttribute('placeholder', 'Search for students...');
   const searchSubmit = document.createElement('button');
   searchSubmit.textContent = "Search";
   searchDiv.appendChild(searchBar);
   searchDiv.appendChild(searchSubmit);
};

createSearchField();


