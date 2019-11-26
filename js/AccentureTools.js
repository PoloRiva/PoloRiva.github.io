
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

    document.getElementById("toList1").select();
    document.execCommand("copy");
};