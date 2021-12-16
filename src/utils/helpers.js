import moment from "moment";

export const substituteInArray = (arr, item, newItem) => {
  if (item) {
    const index = arr.indexOf(item);
    return [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index + 1, arr.length),
    ];
  }
  return [newItem, ...arr];
};

export const isDefined = (value) => {
  return value !== undefined && value !== null;
};

export const camelize = (str) => {
  return str
    .trim()
    .replace(/[A-Z]+/g, (letter, index) => {
      return index == 0 ? letter.toLowerCase() : "_" + letter.toLowerCase();
    })
    .replace(/(.(\_|-|\s)+.)/g, (subStr) => {
      return subStr[0] + subStr[subStr.length - 1].toUpperCase();
    });
};

export const camelizeKeys = (data) => {
  const result = {};
  for (const [key, val] of Object.entries(data)) {
    result[camelize(key)] = val;
  }
  return result;
};

export const camelizeNestedKeys = (dataObj) => {
  return JSON.parse(
    JSON.stringify(dataObj)
      .trim()
      .replace(/("\w+":)/g, (keys) => {
        return keys
          .replace(/[A-Z]+/g, (letter, index) => {
            return index == 0
              ? letter.toLowerCase()
              : "_" + letter.toLowerCase();
          })
          .replace(/(.(\_|-|\s)+.)/g, (subStr) => {
            return subStr[0] + subStr[subStr.length - 1].toUpperCase();
          });
      })
  );
};

export const toSnakeCase = (inputString) => {
  return inputString
    .split("")
    .map((c) => {
      if (c == c.toUpperCase()) {
        return "_" + c.toLowerCase();
      } else {
        return c;
      }
    })
    .join("");
};

export const snakefyKeys = (obj) => {
  const result = {};
  for (const [key, val] of Object.entries(obj)) {
    result[toSnakeCase(key)] = val;
  }
  return result;
};

export const getDate = (date = null) => {
  const currDate = date ? new Date(date) : new Date();
  return moment(currDate).format("DD/MM/yyyy");
};

export const getNoteTypeName = (noteType) => {
  const noteTypes = {
    annotation: "anotação",
    quote: "citação",
  };
  return noteTypes[noteType];
};

export const convertObjectToArray = (obj) =>
  obj.keys.map((key) => [key, obj[key]]);
