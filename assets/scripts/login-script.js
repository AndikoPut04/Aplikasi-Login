/** @module Login-Script */
/** 
* Membuat variabel untuk tampilan form.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
 
 
/** 
* Membuat variabel untuk mengambil input password.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/** 
 * Membuat variabel expectedPassword untuk menyimpan informasi email dan password.
 * @constant {string}
 */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';
 
 
/* Comment :  Menambahkan aksi klik pada button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();
  
  /** 
   * Membuat variabel email untuk menyimpan nilai email dan pass yang 
     didapatkan saat button ditekan.
   * @constant {string}
   */
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;
 
 
  /* Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
   } else {
    showPopUp();
 
  }
});
