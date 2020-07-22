import fs from 'fs';
import path from 'path';
import calculateSimilarityStore from './index';
import { INVALID_JSON } from './errorMessages';

describe('calculate the similarity percentage of json', () => {
  test('should not run for invalid json', () => {
    const pathInvalidJson = path.join(__dirname, 'data/invalidJson.json');
    const pathJson2Breweries = path.join(__dirname, 'data/BreweriesMaster.json');
    const invalidJson = fs.readFileSync(pathInvalidJson);
    const json2Breweries = fs.readFileSync(pathJson2Breweries);
    expect(calculateSimilarityStore(invalidJson, json2Breweries)).toBe(INVALID_JSON);
  });

  test('should return  1 for equal json files', () => {
    const pathJson1Breweries = path.join(__dirname, 'data/BreweriesSample1.json');
    const pathBreweriesMaster = path.join(__dirname, 'data/BreweriesMaster.json');
    const invalidJson = fs.readFileSync(pathJson1Breweries);
    const jsonMasterBreweries = fs.readFileSync(pathBreweriesMaster);
    expect(calculateSimilarityStore(invalidJson, jsonMasterBreweries)).toBe(1);
  });

  test('should return  0.5 for json with 2 equal keys out of 4', () => {
    const json1 = `{
      "a": "1",
      "b": "2",
      "c": 3,
      "d": 4
    }`;
    const json2 = `{
      "a": "1",
      "b": "2",
      "c": "3",
      "d": "4"
    }`;
    expect(calculateSimilarityStore(json1, json2)).toBe(0.5);
  });

  test('should return  0.875 for following objects', () => {
    const json1 = `{
      "a": "1",
      "b": "2",
      "c": {
        "a": 1,
        "b": 1
      },
      "d": "4"
    }`;
    const json2 = `{
      "a": "1",
      "b": "2",
      "c": {
        "a": "1",
        "b": 1
      },
      "d": "4"
    }`;
    expect(calculateSimilarityStore(json1, json2)).toBe(0.875);
  });

  test('should return  0 for non matching objects', () => {
    const json1 = `{
      "a": "1",
      "b": "2",
      "c": {
        "a": 1,
        "b": 1
      },
      "d": "4"
    }`;
    const json2 = `{
      "a": {},
      "b": [],
      "c": {
        "a": "1",
        "b": "1"
      },
      "d": 4
    }`;
    expect(calculateSimilarityStore(json1, json2)).toBe(0);
  });

  test('verify that its working with arrays, should return 0.25', () => {
    const json1 = `{
      "c": {
        "a": 1,
        "b": 1
      },
      "d": [
        "4",
        4
      ]
    }`;
    const json2 = `{
      "c": [
        "1",
        "1"
      ],
      "d": [
        4,
        4
      ]
    }`;
    expect(calculateSimilarityStore(json1, json2)).toBe(0.25);
  });
});
