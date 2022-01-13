var IDENT = "34-65-81"
var DRIVE_FOLDER_ID = "12hKq1dAxerLO7eTda5xcCje0SYeSauFG"

var CELL_ID = 0
var CELL_DRIVE_LOC = 6

function createFolders() {
    var tbl = SpreadsheetApp.getActiveSheet();
    var data = tbl.getDataRange().getValues();

    if (data[0][15] === IDENT) {

        var parentFolder = DriveApp.getFolderById(DRIVE_FOLDER_ID);


        for (var i = 1; i < 6; i++) {
            if (!parentFolder.getFoldersByName(data[i][CELL_ID]).hasNext()) {
                var newFolderID = parentFolder.createFolder(data[i][CELL_ID]).getUrl();
                var cell = tbl.getRange(i+1,CELL_DRIVE_LOC);
                cell.setValue(newFolderID);
            }
            else {
                Logger.log("Skipped: " + data[i][CELL_ID]);
            }
        }

    }
    else {
        var ui = SpreadsheetApp.getUi();
        ui.alert("Wrong Sheet");
    }
}