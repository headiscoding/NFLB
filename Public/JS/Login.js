async function sha256(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);                    

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string                  
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    return hashHex;
}
let modal = document.querySelector('.Account');
let Show = (BTN) => {
  switch (BTN) {
    case 'Close':
      modal.style.display = "none";
      break;
    case 'Open':
      modal.style.display = "block";
      break;
  }
}
let Login = async Event => {
  if (!Event) return;
  let Password = document.querySelector('input[type=password]');
  let Email = document.querySelector('input[type=email]');
  if (!Email.checkValidity()) return alert('The Provided Email is not Valid');
  let Pass = await sha256(Password.value);
  let User = Email.value
  let xhr = new XMLHttpRequest();
  switch (Event) {
    case 'Login':
      xhr.open("POST", `/Login`, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify({
        User: User,
        Pass: Pass
      }));
      break;
    case 'Register':
      xhr.open("POST", `Register`, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify({
        User: User,
        Pass: Pass
      }));
      break;
    default:
      break;
  }
}
window.onclick = event => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 