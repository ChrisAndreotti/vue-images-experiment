# vue-images-experiment

This is a Vue demo site that lets users upload images to their personal Imgur account.

Content and instructions came from the [Vue JS Essentials with Vuex and Vue Router course on Udemy](https://www.udemy.com/course/vue-js-course/)

This project relies on the [Imgur API](https://apidocs.imgur.com/?version=latest) for uploading and storing images. To use this app, you must provide your own **Imgur API key**. Below are the steps to obtain an API key and use it with this app:

1. Register an account on [Imgur](https://imgur.com/register).
2. Register a new Imgur application at [this link](https://api.imgur.com/oauth2/addclient). 
    * Provide an application name (any will do). 
    * Select the option **'OAuth2 authorization with a callback URL'** 
    * For authorization callback URL, enter: `http://localhost:8080/oauth2/callback`
3. Make a copy of the .env file in the root of this project, rename it to .env.local, and set the value of **VUE_APP_IMGUR_CLIENT_ID** to your Imgur Client Id.
4. In the terminal, from the root folder of the project, run `npm run serve` to start the application


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
