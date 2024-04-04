const copyrightYear = document.getElementById('copyright-year');
const currentYear = new Date().getFullYear();
        
copyrightYear.textContent = '©' + currentYear;