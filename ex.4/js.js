let kol_s1= 0;
let kol_p1=0;
let name_p1;
let kol_s2= 0;
let kol_p2=0;
let name_p2;
let win=0;
function play_1() {
    name_p1=document.querySelector(".gamer1_name").value;
    document.querySelector(".result_window_plaer1_name").value=name_p1;
    let kub_one = Math.round(Math.random() * 5 + 1);
    let kub_two = Math.round(Math.random() * 5 + 1);
    let kub_free = Math.round(Math.random() * 5 + 1);
    kol_s1 += 1;
    kol_p1 += kub_one + kub_two + kub_free;
    form1.elements.shot.value = kol_s1;
    form1.elements.point.value = kol_p1;
    if(kol_p1<kol_p2){
        document.querySelector(".result_window_win_value").value=name_p2;
    }
    else{
        document.querySelector(".result_window_win_value").value=name_p1;
    }
    document.querySelector(".result_window_plaer1_kol").value=kol_p1;
    switch (kub_one) {
        case 1:
            document.images.namedItem(1).src = "img/dice1.jpg";
            break;
        case 2:
            document.images.namedItem(1).src = "img/dice2.jpg";
            break;
        case 3:
            document.images.namedItem(1).src = "img/dice3.jpg";
            break;
        case 4:
            document.images.namedItem(1).src = "img/dice4.jpg";
            break;
        case 5:
            document.images.namedItem(1).src = "img/dice5.jpg";
            break;
        case 6:
            document.images.namedItem(1).src = "img/dice6.jpg";
            break;

    }
    switch (kub_two) {
        case 1:
            document.images.namedItem(2).src = "img/dice1.jpg";
            break;
        case 2:
            document.images.namedItem(2).src = "img/dice2.jpg";
            break;
        case 3:
            document.images.namedItem(2).src = "img/dice3.jpg";
            break;
        case 4:
            document.images.namedItem(2).src = "img/dice4.jpg";
            break;
        case 5:
            document.images.namedItem(2).src = "img/dice5.jpg";
            break;
        case 6:
            document.images.namedItem(2).src = "img/dice6.jpg";
            break;

    }
    switch (kub_free) {
        case 1:
            document.images.namedItem(3).src = "img/dice1.jpg";
            break;
        case 2:
            document.images.namedItem(3).src = "img/dice2.jpg";
            break;
        case 3:
            document.images.namedItem(3).src = "img/dice3.jpg";
            break;
        case 4:
            document.images.namedItem(3).src = "img/dice4.jpg";
            break;
        case 5:
            document.images.namedItem(3).src = "img/dice5.jpg";
            break;
        case 6:
            document.images.namedItem(3).src = "img/dice6.jpg";
            break;
    }
}
function play_2() {
    name_p2=document.querySelector(".gamer2_name").value;
    document.querySelector(".result_window_plaer2_name").value=name_p2;
    let kub_one = Math.round(Math.random() * 5 + 1);
    let kub_two = Math.round(Math.random() * 5 + 1);
    let kub_free = Math.round(Math.random() * 5 + 1);
    kol_s2 += 1;
    kol_p2 += kub_one + kub_two + kub_free;
    form2.elements.shot.value = kol_s2;
    form2.elements.point.value = kol_p2;
    document.querySelector(".result_window_plaer2_kol").value=kol_p2;
    switch (kub_one) {
        case 1:
            document.images.namedItem(4).src = "img/dice1.jpg";
            break;
        case 2:
            document.images.namedItem(4).src = "img/dice2.jpg";
            break;
        case 3:
            document.images.namedItem(4).src = "img/dice3.jpg";
            break;
        case 4:
            document.images.namedItem(4).src = "img/dice4.jpg";
            break;
        case 5:
            document.images.namedItem(4).src = "img/dice5.jpg";
            break;
        case 6:
            document.images.namedItem(4).src = "img/dice6.jpg";
            break;

    }
    switch (kub_two) {
        case 1:
            document.images.namedItem(5).src = "img/dice1.jpg";
            break;
        case 2:
            document.images.namedItem(5).src = "img/dice2.jpg";
            break;
        case 3:
            document.images.namedItem(5).src = "img/dice3.jpg";
            break;
        case 4:
            document.images.namedItem(5).src = "img/dice4.jpg";
            break;
        case 5:
            document.images.namedItem(5).src = "img/dice5.jpg";
            break;
        case 6:
            document.images.namedItem(5).src = "img/dice6.jpg";
            break;

    }
    switch (kub_free) {
        case 1:
            document.images.namedItem(6).src = "img/dice1.jpg";
            break;
        case 2:
            document.images.namedItem(6).src = "img/dice2.jpg";
            break;
        case 3:
            document.images.namedItem(6).src = "img/dice3.jpg";
            break;
        case 4:
            document.images.namedItem(6).src = "img/dice4.jpg";
            break;
        case 5:
            document.images.namedItem(6).src = "img/dice5.jpg";
            break;
        case 6:
            document.images.namedItem(6).src = "img/dice6.jpg";
            break;
    }
}
