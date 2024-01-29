# Getting started :-
1 : create react app (npm i create-react-app portfolio)
2 : install tailwindcss (npm i -D tailwindcss - npx tailwindcss init -p)
3 : copy content from tailwindcss.com and paste in tailwind.config.js (Content)
4 : copy all the @ required from tailwindcss and paste in index.css
5 : npm start (run the react app)
6 : npm install react-icons
7 : custom fonts from google font
8 : create navbar.jsx in component folder and display/import it on the app.js

# NAVBAR :- 
1 : consist of 2 section 1 : the name, 2 : all the pages/link
2 : to display the items (pages) we use ul > and create li for each item, instead here we make use of map and loop
// so we create a const/object(links) which has an array of objects(home, about etc), this object consist of id and link(home/about) of all the items.
// now we make use of map function on links to get id, link by object destructuring, as we use map we have to have key which is the id and link(home/about etc) is displayed(looping)
3 : As we are considering mobile/tablet/desktop view first so we make the navbar items hidden by default, we make use of {**md:flex**, which is the @media query(min-width) of 768px so if it(display) goes less than 768px, then it hides the flex-items(links) {#IMPORTANT}}
4 : changing the icons using useState, so setNav value is set !nav(if its true make it false and vice-verca) (so if the state is already open show (X) if closed the show (---))
5 : to get the links on click of (---/X to hide), we get the menu by mapping just like previously, so we use {nav ? (ul...)}, (which basically means if nav is true show this page if not then dont show it)

# HOME PAGE :-
1 : create home.jsx page and import it on the app.js
2 : it consist of 2 parts : 1 : the paragraph, 2 : image tag
3 : make the pages and style it 

## SOCIAL LINKS PAGE :-
1 : create a file called sociallinks.jsx
2 : import all the necessary icons from react-icon
3 : use ul and li and style it 
4 : as li we again make use of map and loop concept as previously used, default its hidden(< 768px) and it pass 
    768px then it starts to apper(lg : > 1024px)
5 : we 

# ABOUT PAGE :-
1 : create a file about.jsx and style with tailwindcss
2 : import and display it as a component on the app.js

# PORTFOLIO/PROJECTS PAGE :-
1 : create a file porfolio.jsx and style with tailwindcss
2 : we make use of grid for the demonstration of project
3 : we make use of map and loop for the grid section(to demonstrate multiple like previously)

# SKILLS PAGE :-
1 : create a file experience.jsx and style with tailwindcss
2 : again grid is use of displaying multiple sections
3 : we make use of map and loop for the grid section(to demonstrate multiple like previously)

# CONTACT ME :-
1 : create a file contact.jsx and style with tailwindcss
2 : Add form and input.
3 : go to getform.io(to get the form(you can even create your backend)), create form and paste link given to the form action and add method as post.

# SMOOTH SCROLL :-
1 : use all the names given to the pages for smooth scrolling
2 : install npm install react-scroll
3 : by using <Link to={link}> we directly link all the pages to the navbar(link) for both normal and media query for mobile as well
4 : while using for mobile(sm) we use onClick to change the current state of nav(setnav(!nav)) as it would not get closed automatically(X menu)
 
# Porfolio linked by portfolio button :-
1 : change the button to link in home page and then add properties of link just as in navbar, expect at {link}, mention "portfolio" directly as we just want to link to one page(no mapping or looping)