const generateTableText = (objectArray) => {
  let tableText = `<table class='table table-stripped'>`;
  tableText += `<tr><th>Name</th><th>Age</th><th>Gender</th><th>Delete</th></tr>`;
  objectArray.forEach((person, i) => {
    tableText += `<tr>`;
    for (const key in person) {
      tableText += `<th>${person[key]}</th>`;
    }
    tableText += `<td id='${i}' class='delete'>❌</td>`;
    tableText += `</tr>`;
  });
  tableText += `</table>`;

  return tableText;
};

export default generateTableText;
