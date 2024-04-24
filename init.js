import createTable from "./createTable.js";
import deleteRowFromTable from "./deleteRowFromTable.js";
import generateTableText from "./generateTableText.js";
import orderTableByName from "./orderTableByName.js";

const init = (people) => {
  const tableText = generateTableText(people);
  createTable(tableText);
  orderTableByName(people);
  deleteRowFromTable(people);
};

export default init;
