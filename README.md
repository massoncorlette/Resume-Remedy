# React + Vite

User can add 3 work experiences + 2 education references
The containers to add to resume, I can reset upon adding to resume

Notes on being modular using React. So it seems that we will use 
App.jsx to import all of our components from directory. This way we 
can keep things modular and organized. 

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Pseudo: 

1. Can use the root component App as the parent component since we are only needing to re render for one User Object

2. 