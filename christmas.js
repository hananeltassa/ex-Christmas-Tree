const rows = parseInt(prompt("Enter the number of rows for the tree:"), 10);

const tree=document.createElement('div');


const titleElement = document.createElement('h1');
titleElement.textContent = "Christmas Tree";
titleElement.className = 'tree-title';
tree.style.textAlign = 'center';
document.body.appendChild(titleElement); 
document.body.appendChild(tree);


for (let i = 1; i <= rows ; i++) {
    let line = "";

    for (let j = i; j < rows ; j++) { // space
        line += " ";
    }

    line += "*"; //left star

    if (i >1){
        for( let k=0 ; k< (i-1)*2-1;k++){
            line+="|";
        }
    }

    if (i> 1){
        line += "*";  // right star
    }

    console.log(line); 

    const lines = document.createElement('p');
    lines.textContent = line; 
    tree.appendChild(lines);
}
