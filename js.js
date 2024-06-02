// alert ("dcjhfdkvnc")
// let menuIcon = document.querySelector('#menu-Icon');
// let navbar = document.querySelector('.navbar');
// let sections = document.querySelectorAll('section');
// let navlinks = document.querySelectorAll('header nav a');
// window.onscroll = () => {
//     sections.forEach(sec =>{
//       let top = window.scrollY;
//       let offset = sec.offsetTop - 150;
//       let height = sec.offsetHeight;
//       let id = sec.getAttribute('id');

//       if(top>= offset && top <offset + height){
//         navlinks.forEach(links =>{
//           links.classList.remove('active');
//           document.querySelector('header nav a [ href*=' + id + ']'  ).classList.add('active')
//         })
//       }
//     })
// }





// menuIcon.onclick = ()=> {
//   menuIcon.classList.toggle('bx-x');
//   navbar.classList.toggle('active');
// }
// Select the elements
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

// Add event listener for window scroll
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
            });
            // Add the active class to the corresponding navigation link
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });
};

// Add event listener for menuIcon click
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
