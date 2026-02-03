const lang = {
    js : "javascript",
    cpp : "c plus plus",
    r : "rust"
}
for (const key in lang) {
    console.log(`${key} shortcut for ${lang[key]}`);
}