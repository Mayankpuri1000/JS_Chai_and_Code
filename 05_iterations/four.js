const myObject = { 
    js: "Javascript", 
    cpp: "C++", 
    rb: "Ruby", 
    swift: "Swift by Apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(programming[key]);
    
}
