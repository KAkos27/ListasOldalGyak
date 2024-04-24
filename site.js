import init from "./init.js";
import people from "./people.js";
import searchFromTable from "./searchFromTable.js";

const site = () => {
  init(people);
  searchFromTable(people);
};

export default site;
