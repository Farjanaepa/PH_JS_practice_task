/** Problem 04 - (Delete / Store) */
var fileName= "docx.xpdf";
//write your code here

if (fileName.includes("#") || fileName.endsWith(".pdf") || fileName.endsWith(".docx") ){
    console.log("Store");

} else {
    console.log("Delete");
}