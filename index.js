const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000

const Books = [{
    bookName :"rich dad and poor dad",
    price : "400",
    isbn : "",
    authorName : "Tiosaki",
    publisherName:"sir neshb",
    publishDate :"12-1-2019",
    edition : "2nd edition"
},{
    bookName :"herry potter",
    price : "4000",
    isbn : "",
    authorName : "unkonwn",
    publisherName:"sir neshb",
    publishDate :"12-1-2019",
    edition : "6th edition"
},{
    bookName :"learn to earn",
    price : "900",
    isbn : "",
    authorName : "peter lynch",
    publisherName:"sir neshb",
    publishDate :"12-1-2019",
    edition : "3ed edition"
},{
    bookName :"power of subconsiuos mind",
    price : "1000",
    isbn : "",
    authorName : "j hardy",
    publisherName:"sir neshb",
    publishDate :"12-1-2019",
    edition : "7th edition"
}]


app.get("/",async(req,res)=>{
    res.send(Books)
})

app.listen(PORT,()=>{
    console.log(`server is running on port :${PORT} `)
})