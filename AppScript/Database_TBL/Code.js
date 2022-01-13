function onOpen() {
    var ui = SpreadsheetApp.getUi();
    // Or DocumentApp or FormApp.
    ui.createMenu('KINDER JEMEN TOOLS')
        .addItem('Kinder Ordner erstellen', 'createFolders')
        .addToUi();
}
