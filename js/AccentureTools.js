//Modal invokes
function SingleColumnToArrayButton() {
    $("#mySingleColumnToArrayButtonModal").modal();
};

function FourColumnsToCell() {
    $("#myFourColumnsToCellModal").modal();
};

function StartingFromUIM(){
    $("#myStartingFromUIMModal").modal();
}

//creates query once textarea changes
function StartingFromUIMEntityID() {
    var EntityID = document.getElementById("StartingFromUIMEntityID").value;

    document.getElementById("StartingFromUIM_UIM_2_DL").value = "SELECT * FROM x_event_uim2ndb WHERE id_uim = '" + EntityID + "';";
    document.getElementById("StartingFromUIM_FROM_UIM").value = "SELECT * FROM x_event_uim2ndb WHERE id_uim = '" + EntityID + "';";
    document.getElementById("StartingFromUIM_TO_UIM").value = "SELECT * FROM x_event_ndb2uim WHERE id_uim = '" + EntityID + "';";
    document.getElementById("StartingFromUIM_DL_2_UIM").value = "SELECT * FROM x_event_ndb2uim WHERE id_uim = '" + EntityID + "';";
}
function addTipology() {
    StartingFromUIMEntityID();

    var tipologia = document.getElementById("StartingFromUIMSelector").value;
    //assignation
    var query1 = document.getElementById("StartingFromUIM_UIM_2_DL").value;
    var query2 = document.getElementById("StartingFromUIM_FROM_UIM").value;
    var query3 = document.getElementById("StartingFromUIM_TO_UIM").value;
    var query4 = document.getElementById("StartingFromUIM_DL_2_UIM").value;
    //removing semicolon at the end
    query1 = query1.slice(0,-1);
    query2 = query2.slice(0,-1);
    query3 = query3.slice(0,-1);
    query4 = query4.slice(0,-1);
    //adding the tipology filter
    query1 = query1.concat(" AND tipologia = '" + tipologia + "';")
    query2 = query2.concat(" AND tipologia = '" + tipologia + "';")
    query3 = query3.concat(" AND tipologia = '" + tipologia + "';")
    query4 = query4.concat(" AND tipologia = '" + tipologia + "';")
    //pasting the final text
    document.getElementById("StartingFromUIM_UIM_2_DL").value = query1;
    document.getElementById("StartingFromUIM_FROM_UIM").value = query2;
    document.getElementById("StartingFromUIM_TO_UIM").value = query3;
    document.getElementById("StartingFromUIM_DL_2_UIM").value = query4;
}

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
    $("#myModal").modal();
};

// Four columns to cell
function toCell() {
    var text = document.getElementById("toCell0").value;

    var allLines = text.split("    ");
    // console.log(allLines);
    solution = "";
    solution = solution.concat("entityID: " + allLines[0] + " ");
    for (i=0; i<((allLines.length-1)/3); i++) { //this runs once for every line in the input
        // console.log(allLines.length);
        solution = solution.concat("id_ndb: " + allLines[2+3*i] + " ");
        solution = solution.concat("id_uim: " + allLines[3+3*i].split(/\r\n|\n/)[0] + "\n");
        if(allLines[3+3*i].split(/\r\n|\n/)[1]!==undefined) {
            // console.log(allLines[3+3*i].split(/\r\n|\n/)[1]);
            solution = solution.concat("entityID: " + allLines[3+3*i].split(/\r\n|\n/)[1] + " ");
        }
        // console.log(allLines[3+3*i].split(/\r\n|\n/));
    }
    document.getElementById("toCell1").value = solution;

    if($('#checkBoxButton').is(':checked')) {
        document.getElementById("toCell1").select();
        document.execCommand("copy");
    }
};