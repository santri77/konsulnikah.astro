// Apps Script Web App: terima POST JSON dan tulis ke Google Sheet
// Cara pakai:
// 1. Buat Google Sheet baru, catat ID spreadsheet (dari URL).
// 2. Di Apps Script editor, ganti SPREADSHEET_ID di bawah.
// 3. Deploy -> New deployment -> Web app, Execute as: Me, Who has access: Anyone (or Anyone with link).
// 4. Gunakan URL web app di `src/scripts/submitForm.js`
//
const SPREADSHEET_ID = 'REPLACE_WITH_SPREADSHEET_ID';
const SHEET_NAME = 'responses';

function doPost(e){
  try{
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);
    if(!sheet) sheet = ss.insertSheet(SHEET_NAME);
    // If first row empty, write headers
    if(sheet.getLastRow() === 0){
      sheet.appendRow(Object.keys(data));
    }
    // Append values
    sheet.appendRow(Object.values(data));
    return ContentService.createTextOutput(JSON.stringify({status:'ok'})).setMimeType(ContentService.MimeType.JSON);
  }catch(err){
    return ContentService.createTextOutput(JSON.stringify({status:'error', message: err.message})).setMimeType(ContentService.MimeType.JSON);
  }
}
