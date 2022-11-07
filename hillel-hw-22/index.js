const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

const table = document.createElement("table");
const container = document.querySelector(".container");
container.append(table);

for (let i = 1; i <= 10; i += 1) {
    const tr = document.createElement("tr");
    table.append(tr);
    for (let i = 1; i <= 10; i += 1){
        const td = document.createElement("td");
        const text = numbers.splice(0, 1);
        tr.append(td);
        td.append(text);
    }
}