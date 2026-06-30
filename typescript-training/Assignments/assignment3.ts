let studentName: string[]=["Suresh","Mahesh","Naresh"]
let marks:number[]=[75, 80, 82];
let updatedMarks:number[]=[]
let total:number=0;
for (let i =0;i<marks.length-1;i++){

    updatedMarks[i]=marks[i]!+10;
   total+=updatedMarks[i]!;
   console.log(`${studentName[i]} : ${updatedMarks[i]}`)
}

let average:number=total/updatedMarks.length;
console.log(`Average marks are as ${average}`)