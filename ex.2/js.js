let score=0;
let guestions=[
    ['Сколько лун у планеты Земля?',1],
    ['Сколько лун у планеты Сатурн?',31],
    ['Сколько лун у планеты Венера',0]
];
for(let i=0;i< guestions.length;i++){
    askQuestion(guestions[i]);
    function askQuestion(questions){
        let answer = prompt(questions[0],'');
        if (answer==questions[1]){
            alert('Вверно!');
            score++;
        }
        else {
            alert('неверно. Правльный ответ '+questions[1]);
        }
    }
}
let ch1="7";
let ch2="13";
let ch3="24";
let asa = prompt('Какое ваше любимое число?','');
if(asa===ch1){
    alert("это и мое любимое число");
}
if(asa===ch2 || asa===ch3){
    alert("это несчастливое число");
}
if(asa!==ch1 &&asa!==ch2 &&asa!==ch3){
    alert("Чмсло  является для вас счастливым");
}