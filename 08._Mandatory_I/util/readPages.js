import { readPage, renderPage } from './templateEngine.js';

const homepage = readPage("./public/pages/homepage/homepage.html").toString();
export const homepagePage = renderPage(homepage);

const assignment_description = readPage("./public/pages/assignment_description/assignment_description.html").toString();
export const assignment_descriptionPage = renderPage(assignment_description);

const week1 = readPage("./public/pages/documentation/week1.html").toString();
export const week1Page = renderPage(week1, {
    tabTitle: "Node.js - week1",
    JSScripts: "<script src='/assets/js/toc.js'></script>"
});

const week2 = readPage("./public/pages/documentation/week2.html").toString();
export const week2Page = renderPage(week2, {
    tabTitle: "Node.js - week2",
    JSScripts: "<script src='/assets/js/toc.js'></script>"
});

const week3 = readPage("./public/pages/documentation/week3.html").toString();
export const week3Page = renderPage(week3, {
    tabTitle: "Node.js - week3",
    JSScripts: "<script src='/assets/js/toc.js'></script>"
});

const week4 = readPage("./public/pages/documentation/week4.html").toString();
export const week4Page = renderPage(week4, {
    tabTitle: "Node.js - week4",
    JSScripts: "<script src='/assets/js/toc.js'></script>"
});

const week5 = readPage("./public/pages/documentation/week5.html").toString();
export const week5Page = renderPage(week5, {
    tabTitle: "Node.js - week5",
    JSScripts: "<script src='/assets/js/toc.js'></script>"
});

const week6 = readPage("./public/pages/documentation/week6.html").toString();
export const week6Page = renderPage(week6, {
    tabTitle: "Node.js - week6",
    JSScripts: "<script src='/assets/js/toc.js'></script>"
});

const week7 = readPage("./public/pages/documentation/week7.html").toString();
export const week7Page = renderPage(week7, {
    tabTitle: "Node.js - week7",
    JSScripts: "<script src='/assets/js/toc.js'></script>"
});
