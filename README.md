## Description
Calculate the similarity percentage between two json files

## Architecture
### Algorithm
This algorithm use the following approach
- Find the larger object. comparing against the smaller object can give false positive because some keys may not be covered for larger object 
- Iterate over the keys of larger object and find out the percentage for similarity percentage for each value (which can further be sub-objects, so recurse through them)
### Frontend
- Uses component and container directory structure. Components are logic-less react components and containers are logic-full components
- It uses `styled-components` for styling, jest for testing, CRA for basic as bootstrapping project
- It uses context API to maintain the state across the application
- Uses hooks to maintain the local state.

## Running
- `yarn start` to run the program in development
- `yarn test` to run tests 