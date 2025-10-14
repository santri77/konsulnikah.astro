# Cara deploy Apps Script untuk Form Konsultasi

1. Buat Google Sheet baru. Catat ID spreadsheet dari URL: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
2. Buka Extensions → Apps Script.
3. Ganti `SPREADSHEET_ID` di file `apps_script.gs`.
4. Deploy → New deployment → pilih "Web app".
   - Execute as: Me
   - Who has access: Anyone (atau Anyone with link)
5. Salin URL Web App dan letakkan di `src/scripts/submitForm.js` menggantikan `REPLACE_WITH_APPS_SCRIPT_URL`.
6. Coba kirim form di `/consult`.

Catatan: Untuk produksi, pertimbangkan menambahkan reCAPTCHA dan validasi server-side.
