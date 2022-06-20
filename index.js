const express=require("express")
const app = express();
const mysql=require("mysql");
const port = 4000;

app.use(express.json());
app.use(express.static("public"));

const connection=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"1234",
    database:"webprograming"
});

connection.connect();

//sql 이용해 영화 테이블 가져오기
app.get("/movies",(req, res)=>{
    connection.query("SELECT * FROM movie", function(error, results, fields){
        if(error) throw error;
        console.log("movies site", results);
        const moviesJson={
            body:{
                movies:results
            },
        };
        res.json(moviesJson);
    });
});

//서버 확인
app.listen(port, function(){
    console.log("html");
});

module.exports=connection;