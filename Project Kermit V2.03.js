var menu = document.createElement("div");
menu.innerHTML = `<div style="width:240px; left: 1px; top: 1px; background-color: #282828EB; color: white; outline: transparent 1px; position:absolute; z-index: 99999; border-radius: 10px;">
<div id="gui">
</div> <h1 style="font-size: 32px;">Fireflight</h1>
<br>
<h3 style="font-size: 19px; font-style: normal !important; color: white !important;">Skipper</h3>
<button onclick="skip()">Skip</button>
<br><br>
<h1 style="font-size: 12px; font-style: normal !important; color: white !important;"></h1>
</div>`

// minified drag element code
function dragElement(e){var t=0,n=0,o=0,r=0;function s(e){(e=e||window.event).preventDefault(),o=e.clientX,r=e.clientY,document.onmouseup=i,document.onmousemove=c}function c(s){(s=s||window.event).preventDefault(),t=o-s.clientX,n=r-s.clientY,o=s.clientX,r=s.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function i(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=s:e.onmousedown=s}

// specifies what element to drag
dragElement(menu.firstElementChild);
document.body.appendChild(menu);

// runs modified app 21 chunk on startup, required for skipper to work
fetch('https://raw.githubusercontent.com/notplu/Nullify/main/Data/appchunk/app-21.chunk.js').then(r => r.text()).then(r => eval(r))

// skipper code
function skip() {
	alert('Click Ok If Your Ready')
console.log("javascript:function _0x54f5(_0x4c9444,_0x4ac2af){const _0x17ddb2=_0x380f();return _0x54f5=function(_0x19dcc8,_0x9a0e40){_0x19dcc8=_0x19dcc8-0x8e;let _0x227425=_0x17ddb2[_0x19dcc8];return _0x227425;},_0x54f5(_0x4c9444,_0x4ac2af);}function _0x380f(){const _0x378644=['4171185PbwjuA','return\x20(function()\x20','search','5022212nNDxnN','{}.constructor(\x22return\x20this\x22)(\x20)','iframe','prototype','log','error','(((.+)+)+)+$','console','https://raw.githubusercontent.com/sysplu/Nullify/main/src/main.js','#U3Yq73','appendChild','18370weTWYU','201365CDUwAl','apply','10kSarUU','bind','710569iOGDqM','__proto__','contentWindow','2BdVBzH','display','21QJQsgN','none','3587043RPUKBC','style','3001304NoJSZJ','trace','catch','toString','warn','table','U3Yq73','66qdZbUl','get','https://login.i-ready.com/','querySelector','2508jetZRn','fetch','constructor','then','exception','info'];_0x380f=function(){return _0x378644;};return _0x380f();}const _0xadefc0=_0x54f5;(function(_0x507ca9,_0x365979){const _0x2a1e1a=_0x54f5,_0x105b91=_0x507ca9();while(!![]){try{const _0x43c327=parseInt(_0x2a1e1a(0xaa))/0x1+-parseInt(_0x2a1e1a(0xad))/0x2*(parseInt(_0x2a1e1a(0xb1))/0x3)+parseInt(_0x2a1e1a(0x9a))/0x4+-parseInt(_0x2a1e1a(0xa6))/0x5*(parseInt(_0x2a1e1a(0xba))/0x6)+-parseInt(_0x2a1e1a(0xaf))/0x7*(-parseInt(_0x2a1e1a(0xb3))/0x8)+parseInt(_0x2a1e1a(0x97))/0x9*(-parseInt(_0x2a1e1a(0xa8))/0xa)+parseInt(_0x2a1e1a(0xa5))/0xb*(-parseInt(_0x2a1e1a(0x91))/0xc);if(_0x43c327===_0x365979)break;else _0x105b91['push'](_0x105b91['shift']());}catch(_0x5c4471){_0x105b91['push'](_0x105b91['shift']());}}}(_0x380f,0x9c5b0));const _0x3d141d=(function(){let _0x3b4fcd=!![];return function(_0x2843ca,_0x598a6a){const _0x228da5=_0x3b4fcd?function(){if(_0x598a6a){const _0x1eae74=_0x598a6a['apply'](_0x2843ca,arguments);return _0x598a6a=null,_0x1eae74;}}:function(){};return _0x3b4fcd=![],_0x228da5;};}()),_0x108e71=_0x3d141d(this,function(){const _0x3001d5=_0x54f5;return _0x108e71[_0x3001d5(0xb6)]()['search']('(((.+)+)+)+$')[_0x3001d5(0xb6)]()[_0x3001d5(0x93)](_0x108e71)[_0x3001d5(0x99)](_0x3001d5(0xa0));});_0x108e71();const _0x9a0e40=(function(){let _0x19a019=!![];return function(_0x122e62,_0x48c927){const _0x16892c=_0x19a019?function(){const _0x3707ca=_0x54f5;if(_0x48c927){const _0x6eb7c3=_0x48c927[_0x3707ca(0xa7)](_0x122e62,arguments);return _0x48c927=null,_0x6eb7c3;}}:function(){};return _0x19a019=![],_0x16892c;};}()),_0x19dcc8=_0x9a0e40(this,function(){const _0x4c4646=_0x54f5;let _0x5844cb;try{const _0x565505=Function(_0x4c4646(0x98)+_0x4c4646(0x9b)+');');_0x5844cb=_0x565505();}catch(_0x404f45){_0x5844cb=window;}const _0x39ccf2=_0x5844cb[_0x4c4646(0xa1)]=_0x5844cb[_0x4c4646(0xa1)]||{},_0x16d310=[_0x4c4646(0x9e),_0x4c4646(0xb7),_0x4c4646(0x96),_0x4c4646(0x9f),_0x4c4646(0x95),_0x4c4646(0xb8),_0x4c4646(0xb4)];for(let _0xdc9bb5=0x0;_0xdc9bb5<_0x16d310['length'];_0xdc9bb5++){const _0x12b77a=_0x9a0e40[_0x4c4646(0x93)][_0x4c4646(0x9d)][_0x4c4646(0xa9)](_0x9a0e40),_0x5b8d1a=_0x16d310[_0xdc9bb5],_0x56dd77=_0x39ccf2[_0x5b8d1a]||_0x12b77a;_0x12b77a[_0x4c4646(0xab)]=_0x9a0e40[_0x4c4646(0xa9)](_0x9a0e40),_0x12b77a[_0x4c4646(0xb6)]=_0x56dd77[_0x4c4646(0xb6)]['bind'](_0x56dd77),_0x39ccf2[_0x5b8d1a]=_0x12b77a;}});_0x19dcc8();try{if(document[_0xadefc0(0x90)](_0xadefc0(0xa3))===null){let iframe=document['createElement'](_0xadefc0(0x9c));iframe['src']=_0xadefc0(0x8f),iframe['id']=_0xadefc0(0xb9),iframe[_0xadefc0(0xb2)][_0xadefc0(0xae)]=_0xadefc0(0xb0),document['body'][_0xadefc0(0xa4)](iframe),iframe['onload']=()=>{const _0x5777e2=_0xadefc0;window[_0x5777e2(0x8e)]=async(_0x2a1cca,_0x441e01)=>{return new Promise((_0x221243,_0x497907)=>{const _0x3511cd=_0x54f5;U3Yq73[_0x3511cd(0xac)][_0x3511cd(0x92)](_0x2a1cca,_0x441e01)[_0x3511cd(0x94)](_0x542415=>{_0x221243(_0x542415);})[_0x3511cd(0xb5)](_0x28799b=>{_0x497907(_0x28799b);});});},get('https://raw.githubusercontent.com/sysplu/Nullify/main/src/main.js')[_0x5777e2(0x94)](_0x230289=>_0x230289['text']())['then'](_0xd96b0c=>eval(_0xd96b0c))['catch'](_0x30a455=>alert(_0x30a455));};}else get(_0xadefc0(0xa2))[_0xadefc0(0x94)](_0x344e55=>_0x344e55['text']())[_0xadefc0(0x94)](_0x21ad45=>eval(_0x21ad45))[_0xadefc0(0xb5)](_0x7c3551=>alert(_0x7c3551));}catch(_0x859f92){alert('Error\x20while\x20loading\x20nullify.\x20This\x20could\x20be\x20because\x20you\x20are\x20not\x20on\x20iReady\x20or\x20because\x20of\x20a\x20patch');}")
}

// farmer code
function farm() {
    alert('Farmer has been enabled!');
    localStorage.farm = stillthere = false
}

// iframe code
function iframe() {
    alert('This opens a new lesson that you can click the wrong answers and see the correct ones. ');
    alert('YOU HAVE TO OPEN THIS IN A LESSON OR IT DOES NOT FETCH.');
    open(html5Iframe.src);
}