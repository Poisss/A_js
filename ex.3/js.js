document.write('<h1>Задание 1</h1>');
let arr1=[];
let sum=0;
for (let i=0;i<10;i++){
    let rnd= Math.round(Math.random()*100);
    arr1.push(rnd);
    if (i%2===0){
        sum+=arr1[i];
    }
    else{
        sum-=arr1[i];
    }
}
document.write('<br>'+ arr1);
document.write('<p>Сумма</p>'+ sum)
document.write('<h1>Задание 1</h1>');
let arr2=[];
let sum2=0;
for (let i=0;i<5;i++){
    arr2[i]=[];
    for (let j=0;j<10;j++){
        arr2[i][j]=Math.round(Math.random() * 10);
    }
    sum2+=arr2[i][0];
    document.write(arr2[i] +'<br>')
}
document.write('<p>Сумма</p>'+ sum2)

