const table = document.getElementById('myTable');

function createTable() {
    //Write your code here
    const rn = prompt("Input number of rows");
    const cn = prompt("Input number of columns");
    for (let i = 0; i < rn; i++)
    {
        const tRow = document.createElement('tr');
        for (let j = 0; j < cn; j++)
        {
            const tCell = document.createElement('td');
            tCell.innerText = `Row-${i} Column-${j}`;
            tRow.append(tCell);
        }
        table.append(tRow);
    }
}