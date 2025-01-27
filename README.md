# React + Vite

![Project Screenshot](./ResumeRemedyScreenshot.png)


npm install html2pdf.js

User can add 3 work experiences + 2 education references
The containers to add to resume, I can reset upon adding to resume

Within the User Experience container, I would like to add functionality where upon expanding one section, the others flex.
Using the save state index.
Which would involve 1 parent and 3 child components, so state can be passed as a prop.

Within my Work experience add section
section, I want to be able to add up to 3 work experiences. 
There should be a default 3 
example work containers pre rendered. 
Each container you can clear.
In the resume preview I want the work containers to flex accordingly, even if there is just one work experience added. 


1. User clicks btn, function prop is called within child components Panels
2. Index number is saved to state variable from inline function in parent
3. The parent component re renders for panels to display correctly



Notes on being modular using React. So it seems that we will use 
App.jsx to import all of our components from directory. This way we 
can keep things modular and organized. 

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

https://images.app.goo.gl/r1VgddVKACLtQJUY6

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


