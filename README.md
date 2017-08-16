# Book Tracking App

This project is part of the [React Nanodegree program](https://br.udacity.com/course/react-nanodegree--nd019/). The steps to run it are:

- Clone the project: `git clone https://github.com/brunokrebs/reactnd-project-myreads.git`
- Change to root directory: `cd reactnd-project-myreads`
- Install dependencies: `npm install`
- Start the app: `npm start`

The only dependency, besides the NPMs ones, is Node.js and NPM itself.

## App Structure

Components are group by context. For example, everything related to book can be found in the `./Book` directory. To be honest, only two directories were created:

- `Book`, which as mentioned holds everything related to books.
- `LoadingIndicator`, which contains a single component that is shown whenever an ajax request is issued.

## Searching Books

The backend server that supports this application is provided by the Nanodegree instructors. [Only a few terms](./SEARCH_TERMS.md) can be used.