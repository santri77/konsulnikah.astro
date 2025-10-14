/*
  Frontend form submit script.
  By default it POSTs JSON to the Apps Script endpoint.
  Replace APPS_SCRIPT_ENDPOINT with your deployed Apps Script Web App URL.
*/
const endpoint = 'REPLACE_WITH_APPS_SCRIPT_URL';

function showStatus(msg, ok=true){
  const el = document.getElementById('formStatus');
  el.textContent = msg;
  el.className = ok ? 'text-success' : 'text-danger';
}

document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('submitBtn');
  const form = document.getElementById('consultForm');
  btn && btn.addEventListener('click', async ()=>{
    const data = Object.fromEntries(new FormData(form).entries());
    showStatus('Mengirim...');
    try{
      const res = await fetch(endpoint, {
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(data)
      });
      const j = await res.json();
      if(res.ok) showStatus('Terkirim. Terima kasih!');
      else showStatus('Gagal: ' + (j.message || res.statusText), false);
    }catch(e){
      showStatus('Gagal mengirim: ' + e.message, false);
    }
  });
});
