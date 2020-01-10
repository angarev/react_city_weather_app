This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This App is built based on Stephen Grider's React-Redux course. The app uses OpenWeather API to return current and forecasted weather for a given location in USA. 

[Demo link](https://reactcityweatherapp.netlify.com/)

This app utilizes:

- [Create React App](https://github.com/facebook/create-react-app)
- [Redux](https://redux.js.org/)
- [Redux-thunk](https://github.com/reduxjs/redux-thunk)
- [Axios](https://www.npmjs.com/package/axios)
- [OpenWeatherMap API for 5-day forecast](https://openweathermap.org/forecast5)
- [React-sparklines](https://github.com/borisyankov/react-sparklines)
- [Semantic-ui](https://semantic-ui.com/)



![React-Redux weather app](https://i.imgur.com/M8f1XzO.gif)



## Setup app locally

1. Install all dependencies with below command
```
npm install
```
2. Sign-up for [OpenWeatherMap Account](https://home.openweathermap.org/users/sign_up) and get the free API key. Replace the variable ```API_KEY``` value with this key in the file ```index.js``` inside actions folder.
3. Open command prompt and run 
```
npm start
```
