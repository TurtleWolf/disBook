# [https://turtlewolf.github.io/DockerReact/](hhttps://turtlewolf.github.io/DockerReact/ 'live demo of frontend components in isolation')

## [TurtleWolfe/DockerReact](https://github.com/TurtleWolf/DockerReact 'code repo')

## This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

I attached a storybook from chapter 7 in **`Tooling`**  
then modified the structure according to the first few chapters of the React **`Cook Book`**

Assuming you already have **Docker** running locally on your machine
from the root directory of this repo change to react_docker  
**`cd react_docker`**

running docker-compose up should start a dev server
and a dev-story server, both bound
to the local devolepment folder  
**`docker-compose up --build`**

[![React Tooling cover](/ReferenceNotes/Images/ReactTooling.png 'React 16 Tooling covers the most important tools, utilities, and libraries that every React developer needs to know — in detail. By Adam Boduch, April 2018')](https://subscription.packtpub.com/book/web_development/9781788835015 'By Carlos Santana Roldán August 2018c')
[![React Cook Book cover](https://raw.githubusercontent.com/TurtleWolf/react_scaffolding/master/ReactCookBook.png 'React Cook Book By Carlos Santana Roldán August 2018')](https://subscription.packtpub.com/book/web-development/9781783980727 'By Carlos Santana Roldán August 2018c')

[![Docker Swarm](ReferenceNotes/Images/Docker_Swarm.png 'Build, test, deploy containers with the best mega-course on Docker, Kubernetes, Compose, Swarm and Registry using DevOps ')](https://www.udemy.com/course/docker-mastery 'By Carlos Santana Roldán August 2018c')
[![Docker Node](/ReferenceNotes//Images/DockerNode.png 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert ')](https://www.udemy.com/course/docker-mastery-for-nodejs 'By Carlos Santana Roldán August 2018c')

## [Running React and Node.js in one shot with Docker!](https://dev.to/numtostr/running-react-and-node-js-in-one-shot-with-docker-3o09 'In this post looking at the docker way of running React and Node.js. This is a kind of advance development setup and I hope you already installed and know the basics of docker and docker-compose. If you want to know more about docker head over to docker.com')

& this Medium article Creating a chat web app using Express.js, React.js & Socket.i0
[![Creating a chat web app using Express.js, React.js & Socket.io](/ReferenceNotes/Images/antonio-article.png 'Creating a chat web app using Express.js, React.js & Socket.i')](https://medium.com/signature-networks/creating-a-chat-web-app-using-express-js-react-js-socket-io-1b01100a8ea5 'Antonio Erdeljac')

& maybe this video  
[![Build and Deploy a Realtime Chat Application - Socket.io, Node.js, and React.js](/ReferenceNotes/Images/mastery-video.png 'Build and Deploy a Realtime Chat Application - Socket.io, Node.js, and React.js')](https://youtu.be/ZwFA3YMfkoc ' JavaScript Mastery')

## [ChatSocketIO Draggable Dice DockerFile React AWS](http://ec2-52-87-220-90.compute-1.amazonaws.com/ 'Chattain Ship & Crew')

[![Build and Deploy a Realtime Chat Application - Socket.io, Node.js, and React.js](/ReferenceNotes/Images/mastery-video.png 'Chattain Ship & Crew')](http://ec2-52-87-220-90.compute-1.amazonaws.com ' TurtleWolfe.com')

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [I'm an inline-style link with title](https://facebook.github.io/create-react-app/docs/code-splitting "Google's Homepage")

### Analyzing the Bundle Size

This section has moved here: [I'm an inline-style link with title](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size "Google's Homepage")

### Making a Progressive Web App

This section has moved here: [I'm an inline-style link with title](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app "Google's Homepage")

### Advanced Configuration

This section has moved here: [I'm an inline-style link with title](https://facebook.github.io/create-react-app/docs/advanced-configuration "Google's Homepage")

### Deployment

This section has moved here: [I'm an inline-style link with title](https://facebook.github.io/create-react-app/docs/deployment "Google's Homepage")

### `npm run build` fails to minify

This section has moved here: [I'm an inline-style link with title](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify "Google's Homepage")

```bash
sudo apt install nodejs
npm install -g create-react-app@3.0.1
npx create-react-app ./
npm start
```

```bash
sudo apt purge nodejs
sudo apt remove nodejs
sudo npm uninstall -g create-react-app
docker run -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -p 3000:3000 --rm react_scaffolding:dev
# docker build -t
# docker-compose build --no-cache
# DOCKER_BUILDKIT=1 docker-compose build --no-cache
# docker inspect --format='{{json .Config}}' socialdev_coursebt_mern_auth_1 | jq
# ENTRYPOINT [ "../node_modules/nodemon/bin/nodemon.js", "--"]
```

```bash
#################
 npx create-react-app disbook --use-npm
 cd disbook
 npx -p @storybook/cli sb init
#  npm install --save typescript
#  npx -p @storybook/cli sb init --type react_scripts && getstorybook

#dependencies?
#  npm i --save @fortawesome/fontawesome-svg-core
#  npm i --save @fortawesome/free-solid-svg-icons
#  npm i --save @fortawesome/react-fontawesome
#  npm i --save moment
#  npm i --save polished
#  npm i --save prop-types
#  npm i --save react-redux redux
#  npm i --save styled-components
#  npm i --save uuid

#dev dependencies?
# npm i --save-dev @storybook/addons
# npm i --save-dev @storybook/addon-actions
# npm i --save-dev @storybook/addon-info
# npm i --save-dev @storybook/addon-links
npm install @storybook/react@6.0.0-beta.12 --save-dev
npm i --save-dev @storybook/addon-a11y
npm i --save-dev @storybook/addon-backgrounds
npm i --save-dev @storybook/addon-cssresources
npm i --save-dev @storybook/addon-design-assets
npm i --save-dev @storybook/addon-docs
npm i --save-dev @storybook/addon-events event-emitter
npm i --save-dev @storybook/addon-graphql
npm i --save-dev @storybook/addon-jest
npm i --save-dev @storybook/addon-knobs
npm i --save-dev @storybook/addon-queryparams
npm i --save-dev @storybook/addon-storyshots
npm i --save-dev @storybook/addon-storysource
npm i --save-dev @storybook/addon-viewport
# npm i --save-dev @storybook/addon-google-analytics
# npm i --save-dev @storybook/theming

# npm install @storybook/storybook-deployer --save-dev
npm install chromatic --save-dev
npm install prettier --save-dev
npm install react-test-renderer --save-dev
# yarn add --dev @storybook/addon-a11y
# yarn add --dev @storybook/addon-docs
# yarn add --dev chromatic
# yarn add -D @storybook/addon-docs
# yarn add @storybook/addon-backgrounds --dev
```

m WARN react-docgen-typescript@1.16.4 requires a peer of nptypescript@>= 3.x but none is installed. You must install peer dependencies yourself.
npm WARN react-docgen-typescript-loader@3.7.2 requires a peer of typescript@\* but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.

```javascript
module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    // '@storybook/preset-create-react-app',
    // '@storybook/addon-actions',
    // '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    '@storybook/addon-cssresources',
    '@storybook/addon-design-assets',
    '@storybook/addon-docs',
    '@storybook/addon-events',
    '@storybook/addon-graphql',
    '@storybook/addon-jest',
    '@storybook/addon-knobs/register',
    '@storybook/addon-queryparams',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
    '@storybook/theming',
    // '@storybook/addon-google-analytics',
    // '@storybook/addon-storyshots',
  ],
};
```

theoratically, I'd start with the inverted (but for visual clarity..)
