let p = prompt("silahkan pilih batu, kertas atau gunting");
if(p != "kertas" && p != "gunting" &&  p != "batu"){
    alert("inputan anda bukan batu, kertas atau gunting");
    window.location.reload();
}

let com = Math.random();
let pilihanCom = ""

if(com < 0.3){
    pilihanCom = "batu";
}else if( com < 0.6) {
    pilihanCom = "kertas";
}
else{
    pilihanCom = "gunting";
}
document.writeln(`pilihan kamu ${p}`);
document.writeln(`pilihan komputer ${pilihanCom}`);

if(p == pilihanCom){
    alert("hasilnya seri");
}else if(p == "batu"){
    pilihanCom == "kertas" ? alert("anda kalah !") : alert("anda menang !");
    }
else if(p == "kertas"){
    pilihanCom == "batu" ? alert("anda menang") : alert("anda kalah");
    
}else if(p == "gunting"){
    pilihanCom == "batu" ? alert("anda kalah") : alert("anda menang");
}