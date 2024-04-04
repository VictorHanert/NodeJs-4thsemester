
window.onload = function() {
    const tocContainer = document.getElementById('toc-container');
    if (tocContainer !== null) {
        const articles = document.querySelectorAll('article');
        const tocList = document.getElementById('toc');

        articles.forEach(function(article) {
            const headings = article.querySelectorAll('h4, h5'); // Find overskrifter i artiklen
            headings.forEach(function(heading) {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.style.textDecoration = 'none';
                link.textContent = heading.textContent;
                link.setAttribute('href', '#' + heading.id); // Link til overskriftens id
                listItem.appendChild(link);
                tocList.appendChild(listItem);
            });
        });
    }
};
