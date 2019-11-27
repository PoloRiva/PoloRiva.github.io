
// Single column to array
function toList() {
    var text = document.getElementById("toList0").value;

    var allLines =  document.getElementById("toList0").value.split(/\r\n|\n/);

    solution = "('";

    console.log(allLines);
    allLines.forEach(element => {
        solution = solution.concat(element+"','");
        console.log(element)
    });
    solution = solution.slice(0, -2);
    solution = solution.concat(")");
    document.getElementById("toList1").value = solution;

    if($('#checkBoxButton').is(':checked')) {
        document.getElementById("toList1").select();
        document.execCommand("copy");
    }
};

// Four columns to cell
function toCell() {
    var text = document.getElementById("toCell0").value;

    var allLines = text.split("    ");
    console.log(allLines);
    solution = "";
    solution = solution.concat("entityID: " + allLines[0] + " ");
    for (i=0; i<((allLines.length-1)/3); i++) { //this runs once for every line in the input
        console.log(allLines.length);
        solution = solution.concat("id_ndb: " + allLines[2+3*i] + " ");
        solution = solution.concat("id_uim: " + allLines[3+3*i].split(/\r\n|\n/)[0] + "\n");
        // FIXME: if the last cell has a value in the "1" position after the split
        if(allLines[3+3*i].split(/\r\n|\n/)[1]!==undefined) {
            console.log(allLines[3+3*i].split(/\r\n|\n/)[1]);
            solution = solution.concat("entityID: " + allLines[3+3*i].split(/\r\n|\n/)[1] + " ");
        }
        console.log(allLines[3+3*i].split(/\r\n|\n/));
    }
    document.getElementById("toCell1").value = solution;
};