## vite bundler

- npm init @vitejs/app
- vite
  run on local server
- vite build
  build sources to dist
- vite serve
  serve what is built on local server

## react-router-dom

- router matches among routes like switch-case
- matching is being made, as any part of front is matched
- <Route> without path, always matched. you can combo with <Switch>

### Switch

- render 1 route and stop switching

## apollo client

### reactive variables

- they are separate from caches
- import {makeVar} from '@apollo/client'
- const what = makeVar(false);
  'what' is like setState
  you just created reactive variable, in order to retrieve, call like what(true)

### useReactiveVar

- connect reactive variable state changes to react component
- const what = makeVar(false);
- const beingMonitored = useReactiveVar(what)
