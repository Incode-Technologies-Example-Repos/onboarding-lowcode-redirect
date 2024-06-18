import {fakeBackendScore} from './fake_backend';

async function app() {
  const app = document.getElementById('app');
  app.innerHTML = `<h1>Loading...</h1>`;
  
  const token = localStorage.getItem('token');
  if (!token) {
    app.innerHTML = `<h1>Error: Invalid token</h1>`;
  }
  
  try {
    const overallStatus = await fakeBackendScore(token);
    app.innerHTML =`<h1>Onboarding finished with score: ${overallStatus}</h1>`;
  } catch(e) {
    app.innerHTML = `<h1>Error: ${e.message}</h1>`;
  } 
}

document.addEventListener("DOMContentLoaded", app);
