import {fakeBackendStart, fakeBackendUrl} from './fake_backend';

async function app() {
  const app = document.getElementById('app');
  const startButton = document.getElementById('start-button');
  
  startButton.addEventListener('click', async ()=>{
    app.innerHTML = `<h1>Loading...</h1>`;
    try {
      const {token} = await fakeBackendStart();
      const {url} = await fakeBackendUrl(token);
      
      localStorage.setItem("token", token);
      
      app.innerHTML =`<h1><a href="${url}">Click Here to Continue</a></h1>`;
      window.location.replace(url);
      
    } catch(e) {
      app.innerHTML = `<h1>Error: ${e.message}</h1>`;
    }
  });
}

document.addEventListener("DOMContentLoaded", app);