const rows = parseInt(prompt("Enter the number of rows for the tree:"), 10);

<<<<<<< HEAD
const tree=document.createElement('div');


const titleElement = document.createElement('h1');
titleElement.textContent = "Christmas Tree";
titleElement.className = 'tree-title';
tree.style.textAlign = 'center';
document.body.appendChild(titleElement); 
document.body.appendChild(tree);

=======
>>>>>>> 18c94c2c8859c638720101ef1d07d25c45688d07
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
<<<<<<< HEAD
    const lines = document.createElement('p');
    lines.textContent = line; 
    tree.appendChild(lines);
=======
>>>>>>> 18c94c2c8859c638720101ef1d07d25c45688d07
}
