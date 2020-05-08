### Is it Open?





**#### Table of contents**



**\-** [Introduction](####Introduction)



**\-** [Feature Demo](####Feature Demo)



**\-** [Technologies](####Technologies)



**\-** [Setup](####Setup)



**\-** [Envionmental Variable](####Environmental Variable)



**\-** [Available Scripts](####Available Scripts)



**\-** [Things to note](####Things to note)



**\-** [Things to improve](####Things to improve)





**#### Introduction**





Build a simple user-facing webapp that allows the user to filter for restaurants open by date time as well as restaurant name. On top of that, users can save restaurants into their own named collections (eg. Vegetarian favourites, Meat-lovers etc.). Users can also invite their friends to collaborate (add, remove, edit name) on the collections via email, and they can see updates to their collections in real-time, without page refreshes.



Link to backend: https://github.com/nicchunglow/is-it-open-backend





**## Features Demo**





Working live demo can be accessed at https://is-it-open.netlify.app/

*Note - current db not setup. Only able to work with local DB*





**##### Process of Registration,login and to create collection**

*Yes. There is confetti*



<img src=""></img>





**##### Process of viewing individual restaurant and searching individual collection before saving.**





<img src=""></img>





**#### Technologies**





JavaScript ES6



React.js 16.13.1



axios 0.19.2



papaparse : 5.2.0



uuid: 7.0.3 



semantic-ui-react: 0.88.2



semantic-ui-css: 2.4.1



**#### Setup**



To run this project, git clone and install it locally using npm:



**\`**``

$ cd ../



$ git clone https://github.com/nicchunglow/is-it-open



$ npm install



$ npm start



**\`**``



**## Available Scripts**



In the project directory, you can run:

**\`**``



npm start // runs the app in development mode



npm test // run test runner in interactive without watch mode



npm run coverage // run test coverage without watch mode



npm run build // Builds the app for production



**\`**``

**## Environment Variables**

**\-** REACT_APP_BACKEND_URL: API to backend 

*Do note to set for local db due to the current db condition*



## Things to note

- The project uses semantic-ui-react. 
- For this frontend, the following functions are enabled: 
  1. Register a user
  2. Login a user with cookie.
  3. Search restaurant names and opening day/timing
  4. Create Collection and have it displayed without refreshing.



## Things to improve

- Enable functions like display restaurant in collection and add collaborators. 
- Conduct more test.



 This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).