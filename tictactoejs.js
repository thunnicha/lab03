let box = ["","","","","","","","",""];
var rep = 0;
var end = 0;
function X1() {
    if(end === 1) return false;
    t1.src = 'https://cdn.discordapp.com/attachments/697467896065949746/810142872237768714/yay.png';
    t1.removeEventListener('click',X1);
    box[0] = 'x';
    AI();
    checkein();
  
}
function X2() {
    if(end === 1) return false;
    t2.src = 'https://cdn.discordapp.com/attachments/697467896065949746/810142872237768714/yay.png';
    t2.removeEventListener('click',X2);
    box[1] = 'x';
    AI();
    checkwin();
}

function X3() {
    if(end === 1) return false;
    t3.src = 'https://cdn.discordapp.com/attachments/697467896065949746/810142872237768714/yay.png';
    t3.removeEventListener('click',X3);
    box[2] = 'x';
    AI();
    checkein();
}
function X4() {
    if(end === 1) return false;
    t4.src = 'https://cdn.discordapp.com/attachments/697467896065949746/810142872237768714/yay.png';
    t4.removeEventListener('click',X4);
    box[3] = 'x';
    AI();
    checkwin();
}
function X5() {
    if(end === 1) return false;
    t5.src = 'https://cdn.discordapp.com/attachments/697467896065949746/810142872237768714/yay.png';
    t5.removeEventListener('click',X5);
    box[4] = 'x';
    AI();
    checkwin();
}
function X6() {
    if(end === 1) return false;
    t6.src = 'https://cdn.discordapp.com/attachments/697467896065949746/810142872237768714/yay.png';
    t6.removeEventListener('click',X6);
    box[5] = 'x';
    AI();
    checkwin();
}
function X7() {
    if(end === 1) return false;
    t7.src = 'https://cdn.discordapp.com/attachments/697467896065949746/810142872237768714/yay.png';
    t7.removeEventListener('click',X7);
    box[6] = 'x';
    AI();
    checkwin();
}
function X8() {
    if(end === 1) return false;
    t8.src = 'https://cdn.discordapp.com/attachments/697467896065949746/810142872237768714/yay.png';
    t8.removeEventListener('click',X8);
    box[7] = 'x';
    AI();
    checkwin();
}
function X9() {
    if(end === 1) return false;
    t9.src = 'https://cdn.discordapp.com/attachments/697467896065949746/810142872237768714/yay.png';
    t9.removeEventListener('click',X9);
    box[8] = 'x';
    AI();
    checkwin();
}

const t1 = document.getElementById('1');
t1.addEventListener('click',X1);
const t2 = document.getElementById('2');
t2.addEventListener('click',X2);
const t3 = document.getElementById('3');
t3.addEventListener('click',X3);
const t4 = document.getElementById('4');
t4.addEventListener('click',X4);
const t5 = document.getElementById('5');
t5.addEventListener('click',X5);
const t6 = document.getElementById('6');
t6.addEventListener('click',X6);
const t7 = document.getElementById('7');
t7.addEventListener('click',X7);
const t8 = document.getElementById('8');
t8.addEventListener('click',X8);
const t9 = document.getElementById('9');
t9.addEventListener('click',X9);

function AI(){
    var r = 0;
    do{
     r = Math.floor(Math.random()*9);
     if(rep===4) return; 

    }while(box[r] != "" )
    rep++;
    box[r] = 'o';
    r++; 
    const d = document.getElementById(r);
    d.src='https://cdn.discordapp.com/attachments/697467896065949746/810142861487505464/o.png';

    if(r === 1){
        d.removeEventListener('click',X1);
    }
    if(r === 2){
        d.removeEventListener('click',X2);
    }
    if(r === 3){
        d.removeEventListener('click',X3);
    }
    if(r === 4){
        d.removeEventListener('click',X4);
    }
    if(r === 5){
        d.removeEventListener('click',X5);
    }
    if(r === 6){
        d.removeEventListener('click',X6);
    }
    if(r === 7){
        d.removeEventListener('click',X7);
    }
    if(r === 8){
        d.removeEventListener('click',X8);
    }
    if(r === 9){
        d.removeEventListener('click',X9);
    }
    checkwin();
}

function checkwin(){
    /*AI win*/
    if(box[0] === 'o' && box[1] ==='o' &&box[2] ==='o'){
        document.getElementById('whowin').innerHTML = 'Computer win!';
        end = 1;
    }
    if(box[3] === 'o' && box[4] ==='o' &&box[5] ==='o'){
        document.getElementById('whowin').innerHTML = 'Computer win!';
        end = 1;
    }
    if(box[6] === 'o' && box[7] ==='o' &&box[8] ==='o'){
        document.getElementById('whowin').innerHTML = 'Computer win!';
        end = 1;
    }
    if(box[1] === 'o' && box[4] ==='o' &&box[7] ==='o'){
        document.getElementById('whowin').innerHTML = 'Computer win!';
        end = 1;
    }
    if(box[0] === 'o' && box[3] ==='o' &&box[6] ==='o'){
        document.getElementById('whowin').innerHTML = 'Computer win!';
        end = 1;
    }
    if(box[2] === 'o' && box[5] ==='o' &&box[8] ==='o'){
        document.getElementById('whowin').innerHTML = 'Computer win!';
        end = 1;
    }
    if(box[0] === 'o' && box[4] ==='o' &&box[8] ==='o'){
        document.getElementById('whowin').innerHTML = 'Computer win!';
        end = 1;
    }
    if(box[2] === 'o' && box[4] ==='o' &&box[6] ==='o'){
        document.getElementById('whowin').innerHTML = 'Computer win!';
        end = 1;
    }
    /*player*/
    if(box[0] === 'x' && box[1] ==='x' &&box[2] ==='x'){
        document.getElementById('whowin').innerHTML = 'Player win!';
        end = 1;
    }
    if(box[3] === 'x' && box[4] ==='x' &&box[5] ==='x'){
        document.getElementById('whowin').innerHTML = 'Player win!';
        end = 1;
    }
    if(box[6] === 'x' && box[7] ==='x' &&box[8] ==='x'){
        document.getElementById('whowin').innerHTML = 'Player win!';
        end = 1;
    }
    if(box[1] === 'x' && box[4] ==='x' &&box[7] ==='x'){
        document.getElementById('whowin').innerHTML = 'Player win!';
        end = 1;
    }
    if(box[0] === 'x' && box[3] ==='x' &&box[6] ==='x'){
        document.getElementById('whowin').innerHTML = 'Player win!';
        end = 1;
    }
    if(box[2] === 'x' && box[5] ==='x' &&box[8] ==='x'){
        document.getElementById('whowin').innerHTML = 'Player win!';
        end = 1;
    }
    if(box[0] === 'x' && box[4] ==='x' &&box[8] ==='x'){
        document.getElementById('whowin').innerHTML = 'Player win!';
        end = 1;
    }

    if(box[0] === 'x' && box[1] ==='x' &&box[2] ==='x'){
        document.getElementById('whowin').innerHTML = 'Player win!';
        end = 1;
    }
    if(box[3] === 'x' && box[4] ==='x' &&box[5] ==='x'){
        document.getElementById('playerwin').innerHTML = 'Player win!';
        end = 1;
    }
    if(box[6] === 'x' && box[7] ==='x' &&box[8] ==='x'){
        document.getElementById('whowin').innerHTML = 'Player win!';
        end = 1;
    }
    if(box[1] === 'x' && box[4] ==='x' &&box[7] ==='x'){
        document.getElementById('whowin').innerHTML = 'Player win!';
        end = 1;
    }
    if(box[0] === 'x' && box[3] ==='x' &&box[6] ==='x'){
        document.getElementById('whowin').innerHTML = 'Player win!';
        end = 1;
    }
    if(box[2] === 'x' && box[5] ==='x' &&box[8] ==='x'){
        document.getElementById('whowin').innerHTML = 'Player win!';
        end = 1;
    }
    if(box[0] === 'x' && box[4] ==='x' &&box[8] ==='x'){
        document.getElementById('whowin').innerHTML = 'Player win!';
        end = 1;
    }
    if(box[2] === 'x' && box[4] ==='x' &&box[6] ==='x'){
        document.getElementById('whowin').innerHTML = 'Player win!';
        end = 1;
    }

    
}

