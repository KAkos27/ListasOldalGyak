import init from "./init.js";

const deleteElementFromArray = (objectArray, index) => {
  objectArray.splice(index, 1);
  return objectArray;
};

const deleteRowFromTable = (objectArray) => {
  const deleteButton = $(".delete");
  deleteButton.on("click", (event) => {
    const index = event.target.id;
    const orderedObjectArray = deleteElementFromArray(objectArray, index);
    init(orderedObjectArray);
  });
};

export default deleteRowFromTable;
