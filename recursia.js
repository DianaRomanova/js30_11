let t = 0;
function f1(){
    t++;
    console.log(t);
    if (t ===50) return;
    f1();
}
f1();