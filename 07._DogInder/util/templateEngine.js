import fs from "fs";

export function readPage(path) {
    return fs.readFileSync(path).toString();
}

// nullish coalescing operator (??)
const value = "";

console.log(value ?? "some other value");
console.log(value || "some other value"); // type coercion - takes falsy values

const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

export function renderPage(page, config={}) {
    // header inde i function
    const header = fs.readFileSync("./public/components/header/header.html").toString();
    return header.replace("$TAB_TITLE$", config.tabTitle ?? "DogInder")
                .replace("$CSS_LINKS$", config.CSSLinks ?? "")
     + page 
     + footer;
}