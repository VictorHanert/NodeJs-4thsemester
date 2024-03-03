const copyrightYear = document.getElementById('copyright-year');
const currentYear = new Date().getFullYear();
const allRightsReserved = "All rights reserved";
copyrightYear.textContent = allRightsReserved + ' ©' + currentYear;