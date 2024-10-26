const rows = parseInt(prompt("Enter the number of rows for the tree:"), 10);

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
}
