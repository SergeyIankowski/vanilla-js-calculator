## This is vanilla js calculator task for innowise group

Deploy: [Calculator](https://chic-lily-7c102a.netlify.app)

Vanilla JS Calculator with made on the pattern command.

1. **Task:** [link](https://drive.google.com/file/d/15U0FyWStwiK06op-gPMsCuZBdcJybUmr/view?usp=sharing)
2. **How to run the app:** `npm install` => `npm run build` (to build prod version) or `npm run serve` (to open dev server)
3. **Folder structure**:

```
js-calculator (root of project)
  └───src (folder with source code files)
      |─── calculator (class Calculator using as reseiver in Command pattern)
      |─── commands (folder with commands classes)
      |─── models (folder with strig buttons and layout data)
      |─── scss (all styles with .scss files ext)
      |─── tests (folder with calculation functions tests)
      |─── utils (Support functions placed in separate files. Files with.js ext)
      |     └─── calculate-functions (folder with functions used in commands)
      |
      |
      |─── App.js (class using as invoker in Command pattern)
      |─── index.html
      └─── index.js
```

4. **Functionality**:

- You can do one action at a time.
- Memory buttons saves result to localStorage.
- By clicking 'AC' removed history and current value.
- Changing the theme, when you click on the theme buttons at the top.