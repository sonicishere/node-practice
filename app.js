const fs = require("fs");
const path = require("path");
const practiceDir = path.join(__dirname, "practice");
const dataDir = path.join(practiceDir, "data");
const infoFilePath = path.join(dataDir, "info.txt");
const backupFilePath = path.join(dataDir, "backup.txt");
if (!fs.existsSync(practiceDir)) {
    fs.mkdirSync(practiceDir);
}
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}
fs.writeFileSync(infoFilePath, "Name: Mohamed salah \nDate: 2025-12-23\n");
fs.appendFileSync(infoFilePath, "Course: Node.js Fundamentals\n");
if (fs.existsSync(infoFilePath)) {
    const content = fs.readFileSync(infoFilePath, "utf-8");
    console.log("File Content:\n", content);
}
fs.copyFileSync(infoFilePath, backupFilePath);
console.log("Copied to backup.txt");
fs.unlinkSync(backupFilePath);
console.log("backup.txt deleted");
