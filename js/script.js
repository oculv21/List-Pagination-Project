const students = document.querySelector('.student-list')
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

//add paginations links to page
const appendPageLinks = list => {
   let totalPages = list.length / perPage;
   totalPages = Math.ceil(totalPages);
   const links = document.createElement('div');
   links.className = 'pagination';
   div.appendChild(links);
   const linksList = document.createElement('ul');
   links.appendChild(linksList);
   for (let i = 1; i <= totalPages; i ++) {
      let paginationLink = document.createElement('li');
      paginationLink.innerHTML= `<a>${i}</a>`;
      linksList.appendChild(paginationLink);
   };
};

appendPageLinks(studentItems);



// Remember to delete the comments that came with this file, and replace them with your own code comments.