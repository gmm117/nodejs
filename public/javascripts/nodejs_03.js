var fs = require("fs");


fs.readFile("../../package.json", 'utf8', function (err, data) {
   console.log(data);
});

fs.writeFile("../../README.md", 'nodejs 코딩 연습중입니다.', function (err) {
    if(err) {
        console.log(err);
    }
});
console.log("프로젝트 폴더 안의 package.json 파일을 읽도록 요청했습니다.")