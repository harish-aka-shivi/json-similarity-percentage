## Description
Calculate the similarity percentage between two json files

## Approach
This algorithm use the following approach
- Find the larger object. comparing against the smaller object can give false positive because some keys may not be covered for larger object 
- Iterate over the keys of larger object and find out the percentage for similarity percentage for each value (which can further be sub-objects, so recurse through them)

## Running
- `yarn run watch` to run the program => but it does clean exit now.
- `yarn test` to run tests 