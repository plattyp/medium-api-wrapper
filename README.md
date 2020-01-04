# Simple Medium API Wrapper

## What is this?

This wraps the medium RSS feed and returns JSON back of the stories for a given medium username. This only returns the first page of stories for the given user.

## Demo

  - https://medium-api.now.sh/api/feed?username=plattyp

## Prerequeisites

  1. Install Node 13.5

## Getting Started

    yarn install

## Run it

Runs the app in the development mode.<br>
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

    yarn start
    
## Routes

### /api/feed

Takes `username` as a query parameter and will return the most recent stories for that user
