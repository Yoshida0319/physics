'use strict';

const tawa=document.getElementById('tawaa');
const re=document.getElementById('hitotume');
const re2=document.getElementById('hutatume');
const re3=document.getElementById('resultarea');
const re4=document.getElementById('result');
const bo=document.getElementById('botan');
const boo=document.getElementById('buotton');
const boke=document.getElementById('keisanb');
const no10in1=document.getElementById('no10in1');
const no10in2=document.getElementById('no10in2');
const result_none=document.getElementById('result_none');
const result_onlyx=document.getElementById('result_onlyx');
const result_axb=document.getElementById('result_ax+b');
const result_n2n=document.getElementById('result_n2n');
const result_n1n=document.getElementById('result_n1n');
const ysiki=document.getElementById('ysiki');
const xsiki=document.getElementById('xsiki');
const bsiki=document.getElementById('bsiki');
const result_b=document.getElementById('result_b');
const result_x=document.getElementById('result_x');
const result_x_squared=document.getElementById('result_x_squared');
const result_x_inverse=document.getElementById('result_x_inverse');
const result_y=document.getElementById('result_y');
const result_y_log=document.getElementById('result_y_log');
const result_y_inverse=document.getElementById('result_y_inverse');
const syousai=document.getElementById('syousai');
const keinou=document.getElementById('keinou');
const onlyx_xbar=document.getElementById('onlyx_xbar');
const onlyx_delx=document.getElementById('onlyx_delx');
const x_times=document.getElementById('x_times');
const x_times1=document.getElementById('x_times1');
const onlyx_xbar_sis=document.getElementById('onlyx_xbar_sis');
const onlyx_delx_sis=document.getElementById('onlyx_delx_sis');
const x_times_at=document.getElementById('x_times_at');
const onlyx_percent=document.getElementById('onlyx_percent');
const axb_abar_kek=document.getElementById('ax+b_abar_kek');
const a_times_kek=document.getElementById('a_times_kek');
const axb_bbar_kek=document.getElementById('ax+b_bbar_kek');
const b_times_kek=document.getElementById('b_times_kek');
const axb_bbar=document.getElementById('ax+b_bbar');
const axb_delb=document.getElementById('ax+b_delb');
const axb_abar=document.getElementById('ax+b_abar');
const axb_dela=document.getElementById('ax+b_dela');
const axb_bbar_sis=document.getElementById('ax+b_bbar_sis');
const axb_delb_sis=document.getElementById('ax+b_delb_sis');
const b_times_0=document.getElementById('b_times_0');
const a_times_0=document.getElementById('a_times_0');
const b_times_1=document.getElementById('b_times_1');
const a_times_1=document.getElementById('a_times_1');
const axb_abar_sis=document.getElementById('ax+b_abar_sis');
const axb_dela_sis=document.getElementById('ax+b_dela_sis');
const axb_rr=document.getElementById('ax+b_rr');
var x = [];
var y = [];
var xno = 0;
var yno = 0;
var bar = 0;
var xbar = 0;
var delx = 0;
var delxx = 0;
var b = 0;
var a1 = 0;
var a2 = 0;
var delb = 0;
var dela1 = 0;
var dela2 = 0;
var r = 0;
var a1no = 0;
var a2no = 0;
var bno = 0;
tawa.onkeydown=event=>{
    if(event.key==='Enter'){
       bo.onclick();
    }
}
bo.onclick=()=>{//出力ボタンを押したときの挙動
    const ta=tawa.value;
    const tt=ta.length;
    if(tt===0){
        return;
    }else if(ta<1 || ta>100){
        atai(1)
    }else{
        atai(ta);
    }
}
atai(3);//初期レーンの作成
function atai(ta){
    const tora=document.getElementsByName('test1');
    var tori=[];
    for (let i = 0; i < tora.length; i++){
        tori.push(tora.item(i).value);
    }
    const toraa=document.getElementsByName('test2');
    var torii=[];
    for (let i = 0; i < tora.length; i++){
        torii.push(toraa.item(i).value);
    }
    const atai = {tori:tori, torii:torii};
    sakusei(ta,atai,{xmiss:[],ymiss:[]});
}
function sakusei(a, atai,miss){//レーンの作成
    re.innerText="";
    re2.innerText="";
    var iss = 0;
    for (let i = 0; i < a; i++) {//レーンの作製x
        const paragraph=document.createElement('input');
        paragraph.name="test1";
        paragraph.placeholder=`x${[i+1]}`;
        if(i == miss.xmiss[iss]){//計算ボタン押下後、エラー発生時のアラートx
            paragraph.className="iinpute";
            iss++;
        }else{
            paragraph.className="iinput";
        }
        paragraph.value=`${[atai.tori[i]]}`;//代入
        const pa=document.createElement('br');
        re.appendChild(paragraph);
        re.appendChild(pa);
    }
    iss = 0;
    for (let i = 0; i < a; i++) {//レーンの作製y
        const paragraph=document.createElement('input');
        paragraph.name="test2";
        paragraph.placeholder=`y${[i+1]}`;
        if(i == miss.ymiss[iss]){//計算ボタン押下後、エラー発生時のアラートy
            paragraph.className="iinpute";
            iss++;
        }else{
            paragraph.className="iinput";
        }
        paragraph.value=`${[atai.torii[i]]}`;//代入
        const pa=document.createElement('br');
        re2.appendChild(paragraph);
        re2.appendChild(pa);
    }
}
boo.onclick=()=>{//入れ替えボタンを押したときの挙動
    const tora=document.getElementsByName('test1');
    var tori=[];
    for (let i = 0; i < tora.length; i++){
        tori.push(tora.item(i).value);
    }
    const toraa=document.getElementsByName('test2');
    var torii=[];
    for (let i = 0; i < toraa.length; i++){
        torii.push(toraa.item(i).value);
    }
    const zyou=document.getElementsByName('zyou');//10^nの入れ替え
    var zyu=[];
    zyu.push(zyou.item(0).value)
    zyu.push(zyou.item(1).value)
    no10in1.value = zyu[1];
    no10in2.value = zyu[0];
    const atai = {tori:torii, torii:tori};//入れ替え
    sakusei(tora.length, atai, {xmiss:[], ymiss:[]});
}
boke.onclick=()=>{//計算ボタンを押したときの挙動
    var ror = error();
    console.log("x = ["+x+"] *10^"+xno);
    console.log("y = ["+y+"] *10^"+yno)
    if(x.length == 1){
        if(ror.errox + ror.erroy == 0){
            area(0);
            n1n();
            keinou.innerText = "\\(" + sisya(bar,2) + "\\)";
            MathJax.typeset([keinou]);
        }
        return;
    }
    if(x.length == 2){
        if(ror.errox + ror.erroy == 0){
            area(1);
            keisan();
            senkei();
        }else if(ror.errox == 0){
            area(2);
            keisandel()
            nakusa();
        }
        return;
    }
    if(ror.errox != 0){
        return;
    }else if(ror.erroy != 0){
        area(2);
        keisandel();
        nakusa();
    }else{
        area(3);
        nai3n(bsiki.value, xsiki.value, ysiki.value);
        xysikihen(xsiki.value, ysiki.value);
        keisan();
        keiek()
    }
}
function error(){//数字変換&アラート
    const tora=document.getElementsByName('test1');
    const zyou=document.getElementsByName('zyou');
    x = [];
    for (let i = 0; i < tora.length; i++){
        x.push(parseFloat(tora.item(i).value));
    }
    const toraa=document.getElementsByName('test2');
    y = [];
    for (let i = 0; i < toraa.length; i++){
        y.push(parseFloat(toraa.item(i).value));
    }
    const nna = Number(zyou.item(0).value);
    if(isNaN(nna)){//10^n乗の整数化
        no10in1.value = 0;
        xno = 0;
    }else{
        no10in1.value = Math.floor(nna);
        xno = Math.floor(nna);
    }
    const nnb = Number(zyou.item(1).value);
    if(isNaN(nnb)){
        no10in2.value = 0;
        yno = 0;
    }else{
        no10in2.value = Math.floor(nnb);
        yno = Math.floor(nnb);
    }
    var xmiss = [];
    var ymiss = [];
    for (let i = 0; i < toraa.length; i++){
        if(isNaN(x[i])){
            x[i] = tora.item(i).value;
            xmiss.push(i);
        }
        if(isNaN(y[i])){
            y[i] = toraa.item(i).value;
            ymiss.push(i);
        }
    }
    const missretu = {xmiss:xmiss, ymiss:ymiss};
    const atai = {tori:x, torii:y};
    sakusei(tora.length, atai, missretu)
    return {errox:xmiss.length, erroy:ymiss.length};
}
function area(anai){//結果エリアの表示
    if(result_none.classList.contains('ima')){
        result_none.classList.remove('ima');
    }
    if(result_n1n.classList.contains('ima')){
        if(anai != 0){
            result_n1n.classList.remove('ima');
        }
    }else if(anai == 0){
        result_n1n.classList.add('ima');
    }
    if(result_n2n.classList.contains('ima')){
        if(anai != 1){
            result_n2n.classList.remove('ima');
        }
    }else if(anai == 1){
        result_n2n.classList.add('ima');
    }
    if(result_onlyx.classList.contains('ima')){
        if(anai != 2){
            result_onlyx.classList.remove('ima');
        }
    }else if(anai == 2){
        result_onlyx.classList.add('ima');
    }
    if(result_axb.classList.contains('ima')){
        if(anai != 3){
            result_axb.classList.remove('ima');
        }
    }else if(anai == 3){
        result_axb.classList.add('ima');
    }
}
function nai3n(bro,xro,yro){//LaTexによる式の表示切り替え
    if(result_b.classList.contains('nam')){
        if(Number(bro) == 1){
            for (let i = 0; i < 4; i++) {
                document.getElementsByClassName('rebsult')[i].classList.toggle('nam');
            }
        }
    }else if(Number(bro) == 0){
        for (let i = 0; i < 4; i++) {
            document.getElementsByClassName('rebsult')[i].classList.toggle('nam');
        }
    }
    if(result_x.classList.contains('num')){
        if(Number(xro) != 0){
            result_x.classList.remove('num');
        }
    }else if(Number(xro) == 0){
        result_x.classList.add('num');
    }
    if(result_x_squared.classList.contains('num')){
        if(Number(xro) != 1){
            result_x_squared.classList.remove('num');
        }
    }else if(Number(xro) == 1){
        result_x_squared.classList.add('num');
    }
    if(result_x_inverse.classList.contains('num')){
        if(Number(xro) != 2){
            result_x_inverse.classList.remove('num');
        }
    }else if(Number(xro) == 2){
        result_x_inverse.classList.add('num');
    }
    if(result_y.classList.contains('num')){
        if(Number(yro) != 0){
            result_y.classList.remove('num');
        }
    }else if(Number(yro) == 0){
        result_y.classList.add('num');
    }
    if(result_y_log.classList.contains('num')){
        if(Number(yro) != 1){
            result_y_log.classList.remove('num');
        }
    }else if(Number(yro) == 1){
        result_y_log.classList.add('num');
    }
    if(result_y_inverse.classList.contains('num')){
        if(Number(yro) != 2){
            result_y_inverse.classList.remove('num');
        }
    }else if(Number(yro) == 2){
        result_y_inverse.classList.add('num');
    }
}
function xysikihen(xro,yro){
    for (let i = 0; i < x.length; i++) {
        if(Number(xro) == 1){
            x[i] = x[i]**2;
        }else if(Number(xro) == 2){
            x[i] = 1/x[i];
        }
    }
    for (let i = 0; i < y.length; i++) {
        if(Number(yro) == 1){
            y[i] = Math.log10(y[i]) + yno;
        }else if(Number(yro) == 2){
            y[i] = 1/y[i];
        }
    }
    if(Number(xro) == 2){
        xno = -xno;
    }
    if(Number(yro) == 1){
        yno = 0;
    }else if(Number(yro) == 2){
        yno = -yno;
    }
}
function sisya(asfd, rr){
    asfd = asfd*(10**rr);
    asfd = Math.trunc(Math.round(asfd));
    asfd = asfd/(10**rr);
    return asfd;
}
function n1n(){//相対誤差率
    bar = x[0]/y[0]*10**(xno-yno+2)-100;
}
keinou.onclick=()=>{
    syousai.innerText = bar;
}
onlyx_percent.onclick=()=>{
    syousai.innerText = delxx;
}
axb_abar_kek.onclick=()=>{
    syousai.innerText = a1;
}
axb_bbar_kek.onclick=()=>{
    syousai.innerText = b;
}
axb_bbar.onclick=()=>{
    syousai.innerText = b;
}
axb_abar.onclick=()=>{
    if(Number(bsiki.value) == 0){
        syousai.innerText = a1;
    }else{
        syousai.innerText = a2;
    }
}
axb_delb.onclick=()=>{
    syousai.innerText = delb;
}
axb_dela.onclick=()=>{
    if(Number(bsiki.value) == 0){
        syousai.innerText = dela1;
    }else{
        syousai.innerText = dela2;
    }
}
function keisandel(){//実験標準偏差
    const n = x.length;
    var xsigma = 0;
    for (let i = 0; i < n; i++){
        xsigma += x[i];
    }
    xbar = xsigma/n;
    var ddsigma = 0;
    for (let i = 0; i < n; i++){
        ddsigma += (x[i]-xbar)**2;
    }
    delx = Math.sqrt(ddsigma/(n*(n-1)));
    delxx = 100*delx/xbar;
    console.log({xbar:xbar, delx:delx, delxx:delxx});
}
function keisan(){//すべての計算
    const n = x.length;
    var xsigma = 0;
    var ysigma = 0;
    var xxsigma = 0;
    var yysigma = 0;
    var xysigma = 0;
    for (let i = 0; i < n; i++){
        xsigma += x[i];
        ysigma += y[i];
        xxsigma += x[i]**2;
        yysigma += y[i]**2;
        xysigma += x[i]*y[i];
    }
    b = (xxsigma*ysigma-xsigma*xysigma)/(n*xxsigma-xsigma**2);
    a1 = (n*xysigma-xsigma*ysigma)/(n*xxsigma-xsigma**2);
    a2 = xysigma/xxsigma;
    var d1sigma = 0;
    var d2sigma = 0;
    for (let i = 0; i < n; i++){
        d1sigma += (y[i]-(a1*x[i]+b))**2;
        d2sigma += (y[i]-(a2*x[i]))**2;
    }
    if(n != 2){
        delb = Math.sqrt(d1sigma*xxsigma/((n-2)*(n*xxsigma-xsigma**2)));
        dela1 = Math.sqrt(d1sigma*n/((n-2)*(n*xxsigma-xsigma**2)));
    }
    dela2 = Math.sqrt(d2sigma/((n-1)*xxsigma));
    r = (xysigma*n - xsigma*ysigma)/Math.sqrt((xxsigma*n- xsigma**2)*(yysigma*n - ysigma**2));
    console.log({b:b, a1:a1, a2:a2, delb:delb, dela1:dela1, dela2:dela2, r:r})
}
function ketahen(nas){
    if(nas == 0){
        return{i:0, nas:nas};
    }
    var i = 0;
    while(1 > Math.abs(nas)){
        i--;
        nas = nas*10;
    }
    while(Math.abs(nas) >= 10){
        i++;
        nas = nas/10;
    }
    return {i:i, nas:nas};
}
function jutasikasa(bars, del){//不確かさによる四捨五入
    var keta = ketahen(del)
    var i = keta.i;
    del = keta.nas;
    var del_sis = Math.trunc(Math.round(del));
    if(i < 0){
        bars = bars * (10 ** (-i));
    }else if(i > 0){
        bars = bars / (10 ** i);
    }
    var bar_sis = Math.trunc(Math.round(bars));
    var ketaa = ketahen(bars)
    var j = ketaa.i;
    bars = ketaa.nas;
    if(j < 0){
        del = del * (10 ** (-j));
        del_sis = del_sis * (10 ** (-j));
        bar_sis = bar_sis * (10 ** (-j));
    }else if(j > 0){
        del = del / (10 ** j);
        del_sis = del_sis / (10 ** j);
        bar_sis = bar_sis / (10 ** j);
    }
    var no_sis = i+j;
    return {bars:bars, del:del, bar_sis:bar_sis, del_sis:del_sis, no_sis:no_sis};
}
function nakusa(){//実験標準偏差表示
    onlyx_xbar.innerText = "\\(" + xbar + "\\)";
    onlyx_delx.innerText = "\\(" + delx + "\\)";
    x_times.innerText = "\\(^{" + xno + "}\\)";
    x_times1.innerText = "\\(^{" + xno + "}\\)";
    onlyx_percent.innerText = "\\(" + sisya(delxx,2) + "\\)";
    var jus = jutasikasa(xbar, delx);
    xbar = jus.bars;
    delx = jus.del;
    onlyx_xbar_sis.innerText = "\\(" + jus.bar_sis + "\\)";
    onlyx_delx_sis.innerText = "\\(" + jus.del_sis + "\\)";
    x_times_at.innerText = "\\(^{" + (xno+jus.no_sis) + "}\\)";
    MathJax.typeset([onlyx_xbar, onlyx_delx, x_times, x_times1, onlyx_xbar_sis, onlyx_delx_sis, x_times_at, onlyx_percent]);
}
function senkei(){//線形近似式表示
    var kita = ketahen(a1);
    a1 = kita.nas;
    a1no = kita.i;
    var kuta = ketahen(b);
    b = kuta.nas;
    bno = kuta.i;
    axb_abar_kek.innerText = "\\(" + sisya(a1, 3) + "\\)";
    axb_bbar_kek.innerText = "\\(" + sisya(b, 3) + "\\)";
    a_times_kek.innerText = "\\(^{" + (a1no-xno+yno) + "}\\)";
    b_times_kek.innerText = "\\(^{" + (bno+yno) + "}\\)";
    MathJax.typeset([axb_abar_kek, axb_bbar_kek, a_times_kek, b_times_kek]);
}
function keiek(){//回帰直線
    var zisb = jutasikasa(b, delb);
    b = zisb.bars;
    delb = zisb.del;
    bno = zisb.no_sis + yno;
    axb_bbar.innerText = "\\(" + sisya(b, 5) + "\\)";
    axb_delb.innerText = "\\(" + sisya(delb, 5) + "\\)";
    b_times_0.innerText = "\\(^{" + bno + "}\\)";
    axb_bbar_sis.innerText = "\\(" + zisb.bar_sis + "\\)";
    axb_delb_sis.innerText = "\\(" + zisb.del_sis + "\\)";
    b_times_1.innerText = "\\(^{" + bno + "}\\)";
    MathJax.typeset([axb_bbar, axb_delb, b_times_0, axb_bbar_sis, axb_delb_sis, b_times_1]);
    var zisa1 = jutasikasa(a1, dela1);
    a1 = zisa1.bars;
    dela1 = zisa1.del;
    a1no = zisa1.no_sis + yno - xno;
    var zisa2 = jutasikasa(a2, dela2);
    a2 = zisa2.bars;
    dela2 = zisa2.del;
    a2no = zisa2.no_sis + yno - xno;
    if(Number(bsiki.value) == 0){
        axb_abar.innerText = "\\(" + sisya(a1, 5) + "\\)";
        axb_dela.innerText = "\\(" + sisya(dela1, 5) + "\\)";
        a_times_0.innerText = "\\(^{" + a1no + "}\\)";
        axb_abar_sis.innerText = "\\(" + zisa1.bar_sis + "\\)";
        axb_dela_sis.innerText = "\\(" + zisa1.del_sis + "\\)";
        a_times_1.innerText = "\\(^{" + a1no + "}\\)";
    }else{
        axb_abar.innerText = "\\(" + sisya(a2, 5) + "\\)";
        axb_dela.innerText = "\\(" + sisya(dela2, 5) + "\\)";
        a_times_0.innerText = "\\(^{" + a2no + "}\\)";
        axb_abar_sis.innerText = "\\(" + zisa2.bar_sis + "\\)";
        axb_dela_sis.innerText = "\\(" + zisa2.del_sis + "\\)";
        a_times_1.innerText = "\\(^{" + a2no + "}\\)";
    }
    MathJax.typeset([axb_abar, axb_dela, a_times_0, axb_abar_sis, axb_dela_sis, a_times_1]);
    axb_rr.innerText = "\\(" + r + "\\)";
    MathJax.typeset([axb_rr]);
}