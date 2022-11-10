const table = document.createElement("table");
const container = document.querySelector(".container");
container.append(table);

for (let i = 1; i <= 10; i += 1) {
    const tr = document.createElement("tr");
    table.append(tr);
    for (let j = 1; j <= 10; j += 1){
        const td = document.createElement("td");
        tr.append(td);
        td.append(`${j*i}`);
    }
}