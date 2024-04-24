import init from "./init.js";

const sortNameBySearchResult = (objectArray, searched) => {
  const orderedObjectArray = objectArray.filter((person) => {
    return person.name.toUpperCase().includes(searched);
  });
  return orderedObjectArray;
};

const searchFromTable = (objectArray) => {
  const searchBar = $("#searchBar");
  searchBar.on("keyup", () => {
    const searched = searchBar.val().toUpperCase();
    const orderedObjectArray = sortNameBySearchResult(objectArray, searched);
    init(orderedObjectArray);
  });
};

export default searchFromTable;
