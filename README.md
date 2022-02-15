# Installation
- npm install -g @vue/cli  // install global vue cli


# Learnings:
- Source: [Vue JS Crash Course by Traversy Media](https://www.youtube.com/watch?v=qZXt1Aom3Cs), [Vue Documentation](https://vuejs.org/guide/introduction.html)
- **Vue JS**: Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. That you can use any backend server such as python flask, node express and etc.
    - Sister Framework:
        - React
        - Angular
    - Features:
        - Create dynamic frontend apps & websites
        - Easy learning curve
        - Easy to integrate with other projects
        - Fast & lightweight
        - Virtual DOM

    - Must know:
        - JavaScript FUndamentals
        - Async Programming (Promises)
        - Array Methods (forEach, map)
        - Fetch API/HTTP request
        - NPM
- **V-bind**: The v-bind directive is a Vue. js directive used to bind one or more attributes, or a component prop to an element. If that attribute is bonded to our data defined in Vue instance then dynamically changes can be observed as data changes.

- **vue.config.js**: With this file, we can properly add a proxy to the server instead of statically write it. 

# To Run/Create CLI:
- vue create app_name
- npm run serve or vue-cli-service serve


# To deploy the web app:
- npm run build or vue-cli-service build
- The dist folder would be the actual app that can be deployed
- serve -s dist to test run the production build if error npm install -g serve
