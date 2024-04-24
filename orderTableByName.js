import init from "./init.js";

let nameOrder = 1;

const orderListByName = (objectArray) => {
  objectArray.sort((a, b) => {
    return a.name.toUpperCase() > b.name.toUpperCase()
      ? 1 * nameOrder
      : -1 * nameOrder;
  });
  return objectArray;
};

const orderTableByName = (objectArray) => {
  const name = $("th").eq(0);
  name.on("click", () => {
    const orderedObjectArray = orderListByName(objectArray);
    nameOrder *= -1;
    init(orderedObjectArray);
  });
};

export default orderTableByName;
