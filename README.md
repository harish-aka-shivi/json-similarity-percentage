## Description
Calculate the similarity percentage between two JSON files

## Deployed link
https://json-similarity-percentage.vercel.app/

## Architecture
### Algorithm
This algorithm uses the following approach

  - for any value of JSON:
    - if primitives are of equal type and the equal value they are considered as equal
    For eg: 1 = 1 but 1 and "1" are not considered equal
    - For Objects and Arrays, it iterates through the keys and checks equality of primitives using the above rule and for subobjects it recurses. It is handling  object and array similarly because array is an object internally, so a = ["1", "2", "3"] can be represented for calculation like a = {"0":"1", "1":"2", 2:"3"}
  
  - Find the larger object. comparing against the smaller object can give false positive because some keys may not be covered for the larger object 

  ### How score is calculated   
  - If two objects are equal according to the above rules, it assigns it the equality score `1 * multiplier` where 
    `multiplier` for a subobject = multiplier for parent object/number of keys in the object(larger one of both the objects)
    For the root level object, the multiplier is 1.  

Examples:
```
const a = `{
  "a":1,
  "b": {
    "c": 2,
    "d": 3
  }
}`

and

const a = `{// multiplier 1
  "a":1,
  "b": { // multipier 0.5
    "c": "2",
    "d": 3
  }
}`

This has a similarity score of 0.75

as both a and b carries 0.5 value of similarity
and b is equal 50% so b's similarity value is 0.25
So score comes out to be 0.75
```

### Frontend
- Uses component and container directory structure. Components are logic-less react components and containers are logic-full components
- It uses `styled-components` for styling, Jest for testing, CRA for bootstrapping the project
- It uses context API to maintain the state across the application
- Uses hooks to maintain the local state.

## Running
- `yarn start` to run the program in development
- `yarn test` to run tests 
