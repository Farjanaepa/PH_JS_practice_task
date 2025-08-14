function  resultReport( marks ) {
          // You have to write your code here

    if (!Array.isArray(marks)) {
        return "Invalid";
    } else if (marks.length === 0 ){
        return { finalScore:0, pass:0, fail:0 };

    }
    let pass=0;
    let fail=0;
    let totalMark = 0;
    for(let i = 0; i < marks.length; i++){
        totalMark = totalMark + marks[i];
        if (marks[i] >= 40) {
            pass++;
        } else {
            fail++;
        }

    }
    const finalScore = Math.round(totalMark/marks.length);
    return { finalScore, pass, fail };


}


const result = resultReport([99]);
console.log(result);
