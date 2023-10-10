# Fitigue

<!-- <img width="220px" src="" alt="mylogo"/> -->
<!-- </br> Ask what you want to and let the community respond to help you. -->

## Getting Started :heavy_check_mark:

```bash
# Clone this repository
$ git clone https://github.com/adiMallya/fitigue.git && cd fitigue

# Install dependencies
$ yarn

# Create a .env file to add your JSON web token & cloudinary variables for the app. You can refer the `env.sample` file.

# To run the app
$ yarn run

# To create a production build
$ yarn build && yarn run
```

The server would start on [localhost:5173](http://localhost:5173/)

## Key Features

- [x] Authentication - Log in/Sign-Up
- [x] User Dashboard to display
  - Calories burnt by user
  - Calories consumed
  - Targeted calories to acheive
- [x] Activities - track calories burnt on activities, calculated by **metabolic equivalent of task**
- [x] Food - track calories consumed calculated by units of **macros** content in it
- [x] Goals - set & track a your fitness goals

## Built with

- ReactJs
- Redux
- redux-thunk
- Typescript
- TailwindCSS
- react-datepicker, react-select
- RESTful APIs written in Express, with MongoDb [find here](https://github.com/adiMallya/fitigue-server)

## ⚠️ Note

Calories tracked in the application, are calculated on certain assumptions. This was built as a hobby project, hence calorie values displayed here may not accurate.
