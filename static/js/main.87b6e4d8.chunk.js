(this.webpackJsonperoom=this.webpackJsonperoom||[]).push([[0],{35:function(e,t,s){},60:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(27),c=s.n(i),r=s(10),o=s(2),l=(s(35),s(28)),d=s.n(l),p=s(0),h=function(e){var t=Object(o.e)();return d.a.get("http://13.125.132.62:5000/test",{headers:{withCredentials:!0,"Access-Control-Allow-Origin":"*"}}).then((function(e){console.log(e)})).catch((function(e){console.dir(e)})),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{children:"\uac04\ub2e8\ud55c \ud14c\uc2a4\ud2b8 \uc124\uba85"}),Object(p.jsx)("div",{id:"homeTitle",children:"MDTI \ud14c\uc2a4\ud2b8"}),Object(p.jsx)("img",{id:"homeImg",src:"https://source.unsplash.com/random",alt:"img",width:"310px",height:"230px"}),Object(p.jsx)("button",{id:"homeStartBtn",onClick:function(){t.push("/test")},children:"\uc2dc\uc791\ud558\uae30"}),Object(p.jsx)("p",{id:"homeCountApply",children:"00\uba85\uc758 \uccad\ub144\ub4e4\uc774 \ucc38\uc5ec\ud588\uc5b4\uc694"})]})},m=s(14),j=s(8),u=function(e){var t=e.width,s=e.percent*t;return Object(p.jsx)("div",{className:"progress-div",style:{width:t},children:Object(p.jsx)("div",{style:{width:"".concat(s,"px")},className:"progress"})})},b=[0,0,0,0,0,0,0,0,0,0,0,0],x=function(e){var t=Object(o.e)(),s=a.a.useState(0),n=Object(m.a)(s,2),i=n[0],c=n[1],r=function(e){i<11?c(i+1):11===i&&t.push({pathname:"/result",state:{select:b}}),j.qnaList[i].a[e].type.map((function(e){b[e]++}))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(u,{width:300,percent:i/11}),Object(p.jsxs)("h1",{id:"testQuestionNum",children:["Q",i+1,"."]}),Object(p.jsx)("h1",{id:"testQuestion",children:j.qnaList[i].q}),Object(p.jsx)("div",{class:"testAnswer",onClick:function(){r(0)},children:Object(p.jsx)("div",{class:"testAnswerP",children:j.qnaList[i].a[0].answer})}),Object(p.jsx)("div",{class:"testAnswer",onClick:function(){r(1)},children:Object(p.jsx)("div",{class:"testAnswerP",children:j.qnaList[i].a[1].answer})}),Object(p.jsx)("div",{class:"testAnswer",onClick:function(){r(2)},children:Object(p.jsx)("div",{class:"testAnswerP",children:j.qnaList[i].a[2].answer})})]})};function w(e){var t=e.msg,s=void 0===t?"\uba54\uc138\uc9c0 \uc5c6\uc74c":t;return Object(p.jsx)("div",{className:"toast",children:s})}var O=function(){window.Kakao.Link.sendDefault({objectType:"feed",content:{title:"\uc624\ub298\uc758 \ub514\uc800\ud2b8",description:"\uc544\uba54\ub9ac\uce74\ub178, \ube75, \ucf00\uc775",imageUrl:"http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",link:{mobileWebUrl:"https://developers.kakao.com",androidExecutionParams:"test"}},itemContent:{profileText:"Kakao",profileImageUrl:"http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",titleImageUrl:"http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",titleImageText:"Cheese cake",titleImageCategory:"Cake",items:[{item:"Cake1",itemOp:"1000\uc6d0"},{item:"Cake2",itemOp:"2000\uc6d0"},{item:"Cake3",itemOp:"3000\uc6d0"},{item:"Cake4",itemOp:"4000\uc6d0"},{item:"Cake5",itemOp:"5000\uc6d0"}],sum:"\ucd1d \uacb0\uc81c\uae08\uc561",sumOp:"15000\uc6d0"},social:{likeCount:10,commentCount:20,sharedCount:30},buttons:[{title:"\uc6f9\uc73c\ub85c \uc774\ub3d9",link:{mobileWebUrl:"https://developers.kakao.com"}},{title:"\uc571\uc73c\ub85c \uc774\ub3d9",link:{mobileWebUrl:"https://developers.kakao.com"}}]})},g=function(){window.open("https://twitter.com/intent/tweet?text=\uce90\uce58\uc5c5! \uc9c0\uae08 \ubc14\ub85c MDTI \ud14c\uc2a4\ud2b8 \ud558\ub7ec\uac00\uae30&url=https://cks3066.github.io/YoutheRoom/                                             &hashtags=\uccad\ub144\uc774\ub8f8,\uce90\uce58\uc5c5,MyDream,MDTI")},k=function(){window.open("http://www.facebook.com/sharer/sharer.php?u=https://cks3066.github.io/YoutheRoom/")},y=s.p+"static/media/facebook.4f037d96.png",f=s.p+"static/media/kakao.6af80cbc.png",v=s.p+"static/media/twitter.28b4dce4.png",C=s.p+"static/media/link.1abb6f17.png",q=function(e){!function(e){var t=document.createElement("textarea");document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t)}("https://cks3066.github.io/YoutheRoom/"),e("complete")},I=function(e){var t=null,s=Object(o.e)();void 0===e.location.state?s.push("/"):t=e.location.state.select;var n=function(e){var t=Math.max.apply(null,e),s=0;return e.forEach((function(e,n){e===t&&(s=n)})),s}(t),i=a.a.useState(!1),c=Object(m.a)(i,2),r=c[0],l=c[1],d=function(){r||l(!0)};return a.a.useEffect((function(){r&&setTimeout((function(){l(!1)}),1e3)}),[r]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{id:"resultTitle",children:"\uc9c4\ub85c\ub2e8\uacc4 \uacb0\uacfc"}),Object(p.jsx)("div",{id:"resultSimple",children:j.infoList[n].name}),Object(p.jsx)("img",{src:"https://source.unsplash.com/random",alt:"img",width:"310px",height:"230px"}),Object(p.jsx)("div",{id:"resultMain_Title",children:j.infoList[n].name}),Object(p.jsx)("div",{id:"resultMain",children:j.infoList[n].desc}),Object(p.jsx)("div",{id:"resultProgramTitle",children:"\ub098\uc640 \ub9de\ub294 \ud504\ub85c\uadf8\ub7a8\uc740?"}),Object(p.jsxs)("div",{class:"resultPrograms",children:[Object(p.jsx)("p",{id:"programName",children:"\ud504\ub85c\uadf8\ub7a8 \uc774\ub984"}),Object(p.jsx)("p",{id:"programDetail",children:"\ud504\ub85c\uadf8\ub7a8 \uc124\uba85 \uc5b4\uca4c\uad6c \uc800\uca4c\uad6c"})]}),Object(p.jsxs)("div",{class:"resultPrograms",children:[Object(p.jsx)("p",{id:"programName",children:"\ud504\ub85c\uadf8\ub7a8 \uc774\ub984"}),Object(p.jsx)("p",{id:"programDetail",children:"\ud504\ub85c\uadf8\ub7a8 \uc124\uba85 \uc5b4\uca4c\uad6c \uc800\uca4c\uad6c"})]}),Object(p.jsxs)("div",{class:"resultPrograms",children:[Object(p.jsx)("p",{id:"programName",children:"\ud504\ub85c\uadf8\ub7a8 \uc774\ub984"}),Object(p.jsx)("p",{id:"programDetail",children:"\ud504\ub85c\uadf8\ub7a8 \uc124\uba85 \uc5b4\uca4c\uad6c \uc800\uca4c\uad6c"})]}),Object(p.jsx)("div",{id:"moreProgram",children:Object(p.jsx)("p",{children:"\ub098\uc640 \ub9de\ub294 \ud504\ub85c\uadf8\ub7a8 \ub354 \ubcf4\uae30"})}),Object(p.jsx)("img",{src:"https://source.unsplash.com/random",alt:"img",width:"310px",height:"230px"}),Object(p.jsx)("div",{id:"resultShare",children:"\uacb0\uacfc \uacf5\uc720\ud558\uae30"}),Object(p.jsxs)("div",{id:"shareContainer",children:[Object(p.jsx)("img",{class:"shareIcon",src:f,alt:"kakaotalk",width:"65px",height:"65px",onClick:O}),Object(p.jsx)("img",{class:"shareIcon",src:y,alt:"facebook",width:"65px",height:"65px",onClick:k}),Object(p.jsx)("img",{class:"shareIcon",src:v,alt:"twitter",width:"65px",height:"65px",onClick:g}),Object(p.jsx)("input",{type:"hidden",id:"urlInput",class:"url-input"}),Object(p.jsx)("img",{class:"shareIcon",src:C,alt:"link",width:"65px",height:"65px",onClick:function(){q(d)}}),r&&Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(w,{msg:"\ud074\ub9ac\ubcf4\ub4dc\uc5d0 URL\uc774 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4."})})]}),Object(p.jsxs)("div",{id:"resultBtnContainer",children:[Object(p.jsx)("button",{id:"resultRetry",children:"\ub2e4\uc2dc\ud558\uae30"}),Object(p.jsx)("button",{id:"resultAll",children:"\uc804\uccb4 \uc720\ud615 \ubcf4\uae30"})]})]})};var N=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(r.a,{children:[Object(p.jsx)(o.a,{path:"/",exact:!0,component:h}),Object(p.jsx)(o.a,{path:"/test",exact:!0,component:x}),Object(p.jsx)(o.a,{path:"/result",exact:!0,component:I})]})})};c.a.render(Object(p.jsx)(N,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('{"qnaList":[{"q":"\uc774\uc131 \uc0ac\uc774\uc5d0 \uc9c4\uc815\ud55c \uce5c\uad6c\ub294 \uc788\ub2e4, \uc5c6\ub2e4?","a":[{"answer":"a. \uc774\uc131 \uc0ac\uc774\uc5d0 \uce5c\uad6c\uac00 \uc5b4\ub528\uc5b4? \uc808\ub300 \uc5c6\uc5b4","type":[1,2,4,9]},{"answer":"b. \uce5c\uad6c \uc788\uc9c0, \uc808\ub300 \uc774\uc131\uc73c\ub85c\ub9cc \uc548 \ubcf4\uc77c\ubfd0","type":[0,3,6,5,10,8]},{"answer":"c. \ub09c \uc798 \ubaa8\ub974\uaca0\uc5b4..","type":[7,11]}]},{"q":"\uc88b\uc544\ud558\ub294 \uc0ac\ub78c\uc774 \uc0dd\uaca8 \uc5f0\ub77d\ud558\uace0\uc790 \ud55c\ub2e4 ","a":[{"answer":"a. \ubc14\ub85c \uba3c\uc800 \uc5f0\ub77d\ud55c\ub2e4.","type":[0,3,2,8]},{"answer":"b. \uc5b8\uc81c \uc5f0\ub77d\ud560\uc9c0, \uc5b4\ub5bb\uac8c \ub9d0\ud560\uc9c0 \uc2ec\uc0ac\uc219\uace0\ud558\uc5ec \uc5f0\ub77d\ud55c\ub2e4.","type":[1,6,5,10]},{"answer":"c. \uc0c1\ub300\ubc29\uc5d0\uac8c \uba3c\uc800 \uc5f0\ub77d \uc62c \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub9b0\ub2e4.","type":[7,4,9,11]}]},{"q":"\ub2f9\uc2e0\uc758 \uace0\ubc31 \uc2a4\ud0c0\uc77c\uc740?","a":[{"answer":"a. \ud638\uac10\uc774 \ubcf4\uc774\uba74 \ubc14\ub85c \uace0\ubc31\ud55c\ub2e4","type":[1,3,2,10,8]},{"answer":"b. \uc0c1\ub300\ubc29\uc774 \uace0\ubc31\ud560 \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub9b0\ub2e4","type":[7,9,11]},{"answer":"c. \uc644\ubcbd\ud55c \ubd84\uc704\uae30, \uc644\ubcbd\ud55c \ud0c0\uc774\ubc0d\uc5d0\uc11c \uace0\ubc31\ud55c\ub2e4.","type":[0,6,5,4]}]},{"q":"\ud638\uac10\uac00\ub294 \uace0\ubc31 \uba58\ud2b8\ub97c \uace0\ub978\ub2e4\uba74?","a":[{"answer":"a. \ubc15\ub825 \uadf8 \uc790\uccb4, \\"\uc57c \ub098\ub791 \uc0ac\uadc0\uc790\\" ","type":[1,2,4]},{"answer":"b. \uc12c\uc138\ud55c \\"\ub098 \ub108 \ub9ce\uc774 \uc88b\uc544\ud574, \ub098\ub791 \uc0ac\uadc8\ub798?\\" ","type":[7,10,8,9,11]},{"answer":"c. \uc13c\uc2a4\uc788\ub294 \\"\uc6b0\ub9ac \ub0b4\uc77c\uc740 \uc5f0\uc778\uc73c\ub85c \ub9cc\ub0a0\uae4c\uc694\\" ","type":[0,3,6,5]}]},{"q":"\uc624\ub298 \uc5f0\uc778\uacfc \uccab \ub370\uc774\ud2b8 \ud558\ub294 \ub0a0\uc774\ub2e4. \uccab \ub0a0 \ud5c8\uc6a9\ud560 \uc218 \uc788\ub294 \uc2a4\ud0a8\uc2ed\uc758 \ubc94\uc704\ub294?","a":[{"answer":"a. \uc465\uc2a4\ub7ec\uc6cc.. \uc190 \uc7a1\uae30 \uc815\ub3c4??","type":[1,7,10,4,9]},{"answer":"b. \uc694\uc998 \uc2dc\ub300\uac00 \uc5b4\ub290 \ub54c\uc778\ub370, \uac00\ubcbc\uc6b4 \ubf40\ubf40\uae4c\uc9c0 \uac00\ub2a5\uc774\uc57c","type":[0,3,6,11]},{"answer":"c. \uc5b4\ucc28\ud53c \ub0b4 \uc5f0\uc778\uc778\ub370 \uc65c?? \ubaa8\ub4e0 \uc2a4\ud0a8\uc2ed \ub2e4 \ub3fc!","type":[2,5,8]}]},{"q":"\uae30\ub150\uc77c\uc774 \ub2e4\uac00\uc628\ub2e4. \ub2f9\uc2e0\uc740 \uc5b4\ub5bb\uac8c \ud560 \uac83\uc778\uac00? (ex - 100, 200\uc77c)","a":[{"answer":"a. \ubb34\uc2a8 \uae30\ub150\uc77c\uc774\uc57c, \uadf8\ub0e5 \ud3c9\uc18c\ucc98\ub7fc \ud574","type":[4,9,11]},{"answer":"b. \ub9db\uc788\ub294 \ubc25\uc774\ub098 \uc0ac\uc904\uae4c? \uc544\ub2c8\uba74 \uaf43\uc774\ub77c\ub3c4?","type":[0,3,6,10]},{"answer":"c. \uc774\ubbf8 \uae5c\uc9dd \uc774\ubca4\ud2b8 \ub2e4 \uc900\ube44\ud574\ub1a8\uc5b4","type":[1,7,2,5,8]}]},{"q":"\uc5f0\uc778\uc774 \uc624\ub298 \uba38\ub9ac\ub97c \ubc14\uafb8\uace0 \uc637\ub3c4 \uc0c8\ub85c \uc0c0\ub2e4","a":[{"answer":"a. \ub208\uce58 \ubabb \ucc44\uace0 \uadf8\ub0e5 \uc788\ub294\ub2e4","type":[1,7,11]},{"answer":"b. \ub208\uce58\ub294 \ucc44\ub098 \ub9d0\uc740 \uaebc\ub0b4\uc9c0 \uc54a\ub294\ub2e4","type":[2,4,9]},{"answer":"c. \\"\uc624 \ub300\ubc15 \uc624\ub298 \uba38\ub9ac\ub3c4 \ubc14\uafb8\uace0 \uc637\ub3c4 \uc0c8\ub85c \uc0c0\ub124?\\"\ub77c\uace0 \ud558\uba70 \ub2e8\ubc88\uc5d0 \ub208\uce58\ucc48\ub2e4","type":[0,3,6,5,10,8]}]},{"q":"\uc5f0\uc778\uc774 \ub370\uc774\ud2b8\uac00 \ub05d\ub09c \ud6c4, \uc9d1\uc5d0 \ub370\ub824\ub2e4 \ub2ec\ub77c\uace0 \ud55c\ub2e4","a":[{"answer":"a. \uac01\uc790 \ub9cc\ub0ac\ub358 \uc7a5\uc18c\uc5d0\uc11c \ud5e4\uc5b4\uc9c4\ub2e4.","type":[0,4,9]},{"answer":"b. \uc5f0\uc778\uc774 \uc0b4\uace0 \uc788\ub294 \uc9d1\uc758 \uc5ed\uc774\ub098 \uc815\ub958\uc7a5\uae4c\uc9c0 \ub370\ub824\ub2e4\uc900\ub2e4.","type":[3,2,6,5,10,8]},{"answer":"c. \uc9d1 \uc55e\uae4c\uc9c0 \ub370\ub824\ub2e4\uc900\ub2e4.","type":[1,7,11]}]},{"q":"\uc5f0\uc778\uc5d0\uac8c \ud558\ub8e8\uc885\uc77c \uc5f0\ub77d\uc774 \uc548 \uc628\ub2e4..","a":[{"answer":"a. \ubb50.. \uc5b8\uc820\uac00 \uc5f0\ub77d \uc624\uaca0\uc9c0. \ub0b4\uac00 \ud560 \uc77c \ud558\uba70 \uae30\ub2e4\ub9b0\ub2e4","type":[7,0,5,9]},{"answer":"b. \ucd08\uc870\ud574\uc11c \ub9c8\uc74c \uc878\uc774\uba70 \uc778\uc2a4\ud0c0, \ud398\ubd81, \uce74\ud1a1 \ub4f1 \ubaa8\ub4e0 SNS \ub2e4 \ub4e4\uc5b4\uac00\ubcf8\ub2e4.","type":[1,3,6,11]},{"answer":"c. \uc5f0\uc778\uc5d0\uac8c \uc5f0\ub77d \uc62c \ub54c\uae4c\uc9c0 \ubb34\ud55c \uce74\ud1a1, \ubb34\ud55c \uc804\ud654","type":[2,10,8,4]}]},{"q":"\uc5f0\uc778\uc774 \uc5f0\ub77d\ub3c4 \uc5c6\uc774 \ubcf4\uace0\uc2f6\ub2e4\uace0 \uc6b0\ub9ac\uc9d1 \uc55e\uc5d0 \uc640\uc11c \uae30\ub2e4\ub9b0\ub2e4. ","a":[{"answer":"a. \uc544\ub2c8 \uac11\uc790\uae30 \uc624\uba74 \uc5b4\ub5a1\ud574.. \ud558 \ub098 \uc900\ube44\ub3c4 \uc548 \ud588\ub294\ub370 \uc65c \uc640. \uc9dc\uc99d\ub098\ub124","type":[4,9,11]},{"answer":"b. \uc544 \uadf8\ub798?? \ub098 \ud560 \uac83\ub4e4 \uc880\ub9cc \ub9c8\ubb34\ub9ac\ud558\uace0 \ub098\uac08\uac8c","type":[0,2,6,5]},{"answer":"c. \ud5d0 \ub300\ubc15, \uc5b4\ub514\uc57c?? \ub2f9\uc7a5 \ub098\uac08\uac8c!","type":[1,7,3,10,8]}]},{"q":"\ub0b4\uac00 \ucd94\uad6c\ud558\ub294 \uc5f0\uc560\uad00\uc740? ","a":[{"answer":"a. \uac01\uc790 \ud560 \uac83 \ud558\uba70, \ud3c9\uc548\ud558\uace0 \uc548\uc815\uc801\uc778 \uc5f0\uc560\uac00 \uc88b\ub2e4.","type":[1,4,9,11]},{"answer":"b. \ubcf4\uace0\uc2f6\uc744 \ub54c \ubcf4\uace0, \ub370\uc774\ud2b8\ub3c4 \ub9ce\uc774 \ud558\uace0 \uaf41\ub0e5\uaf41\ub0e5\ud558\ub294 \uc5f0\uc560\uac00 \uc88b\uc544.","type":[7,0,3,6,10]},{"answer":"c. \uc5f0\uc560\ub294 \ub9c8\uc74c\uac00\ub294\ub300\ub85c! \ubd88\ud0c0\uc624\ub974\ub294 \uc5f0\uc560\uac00 \ucd5c\uace0\uc9c0.","type":[2,5,8]}]},{"q":"\uc5f0\uc778\uacfc \ub370\uc774\ud2b8 \ub3c4\uc911 \ud654\ub97c \ucc38\uc744 \uc218 \uc5c6\uc744\ub9cc\ud07c \uc2ec\ud558\uac8c \uc2f8\uc6e0\ub2e4. \uc5b4\ub5bb\uac8c \ud560 \uac83\uc778\uac00?","a":[{"answer":"a. \\"\uc544 \ud654\ub098\ub124. \ub530\ub77c\uc624\uc9c0\ub9c8 \uc624\ub298 \uc9d1 \uac08 \uac70\ub2c8\uae4c.\\" \ub77c\uace0 \ub9d0\ud558\uba70 \uc9d1\uc73c\ub85c \uac04\ub2e4.","type":[3,6,4,9]},{"answer":"b. \\"\uc57c! \ub108 \ud654\ub0b4\uc9c0\ub9c8. \ub108 \uc798\ubabb\uc774\uc9c0. \ub0b4\uac00 \ubb58 \uc798\ubabb\ud588\ub294\ub370?\\" \uc18c\ub9ac\uc9c0\ub974\uba70 \ub05d\uae4c\uc9c0 \ubd88\uac19\uc774 \ud654\ub0b8\ub2e4.","type":[0,2,5,10,8]},{"answer":"c. \\"\uc544\ub2c8 \uadf8\uac74 \uc544\ub2c8\uace0, \ud558..\\" \uc870\uc6a9\ud788 \uc6b4\ub2e4.","type":[1,7,11]}]}],"infoList":[{"name":"\uc5f0\uc560 \ubb50 \uc2dd\uc740 \uc8fd \uba39\uae30\uc8e0, \uc5f0\uc560 \uc7ac\ub2a5 \ub9cc\ub545 <\uc950>","desc":"\uc5f0\uc560\uc758 \ud504\ub85c\uc7ac\ub2a5\ub7ec\uc778 \ub2f9\uc2e0! \uc950\uc5d0 \ud574\ub2f9\ud558\ub294 \ub2f9\uc2e0\uc740 \uc5f0\uc560\uc758 \ubaa8\ub4e0 \uac83\ub4e4\uc744 \uc54c\uace0 \uc788\uc5b4, \uc27d\uac8c \uc5f0\uc560\uc5d0 \uc131\uacf5\ud558\ub294 \uc2a4\ud0c0\uc77c\uc774\ub78d\ub2c8\ub2e4. \uc8fc\ub85c \ud3ec\ubd80\uac00 \ud06c\uace0 \uc131\uaca9\uc774 \ub099\ucc9c\uc801\uc778 \uc131\ud5a5\uc744 \uac00\uc9c0\uace0 \uc788\uace0, \ub17c\ub9ac\uc801\uc774\uba74\uc11c \ub450\ub1cc\ud68c\uc804\uc774 \ub9e4\uc6b0 \ube60\ub974\ub2e4\uace0 \ud560 \uc218 \uc788\uc5b4\uc694. \ub9d0\uc7ac\uc8fc \ub610\ud55c \uc88b\uc544 \uc0ac\uad50\uc131\uc774 \uc88b\uace0 \uc720\ucf8c\ud558\uc9c0\ub9cc \ud654\ub824\ud55c \uac83\uc744 \uc88b\uc544\ud574 \ud5c8\uc601\uc2ec\uc744 \ubd80\ub9ac\uac70\ub098 \uc0ac\uce58\ub97c \ubd80\ub9ac\uae30 \ub54c\ubb38\uc5d0 \uc774 \uc810\ub4e4\uc744 \uc8fc\uc758\ud574\uc57c \ub3fc\uc694. \ub6f0\uc5b4\ub09c \ub2a5\ub825\uc5d0 \uc790\ub9cc\ud558\ub294 \uacbd\uc6b0\ub3c4 \uc885\uc885 \uc788\uae30 \ub54c\ubb38\uc5d0 \uacb8\uc190\uc774 \ud544\uc694\ud558\ub2f5\ub2c8\ub2e4! "},{"name":"\ub09c \ub108\ub9cc \ubd10, \uc815\uc9c1\ud55c \uc5f0\uc560 \uc2a4\ud0c0\uc77c\uc758 <\uc18c>","desc":"\uc5f0\uc560 \uc720\ud615\uc758 \uc9c4\uad6d\uc778 \ub2f9\uc2e0! \uc18c\uc5d0 \ud574\ub2f9\ud558\ub294 \ub2f9\uc2e0\uc740 \uc0c1\ub300\ubc29\ub9cc \ubc14\ub77c\ubcf4\ub294 \ud574\ubc14\ub77c\uae30 \uc5f0\uc560 \uc2a4\ud0c0\uc77c\uc774\ub78d\ub2c8\ub2e4. \ub9e4\uc0ac\uc5d0 \ub048\uae30\uac00 \uc788\uc5b4 \uc5f0\uc560\ub97c \ud560 \ub54c \uc131\uc2e4\ud558\uace0 \uc9c4\uc2ec\uc744 \ub2e4\ud558\ub294 \uc131\ud5a5\uc744 \uac00\uc9c0\uace0, \uc628\ud654\ud558\uba70 \ub530\ub73b\ud55c \ub9c8\uc74c\uc744 \uac00\uc9c0\uace0 \uc788\uc5b4\uc694. \ud55c \ubc88 \uc88b\uc544\ud558\uba74 \ub05d\uae4c\uc9c0 \uc88b\uc544\ud558\ub294 \uc758\ub9ac\ud30c\uc9c0\ub9cc \uc790\uc874\uc2ec\uc774 \uc314 \uc740\uadfc\ud788 \uace0\uc9d1\uc774 \uac15\ud558\ub2f5\ub2c8\ub2e4. \ub610\ud55c \uc6b1\ud558\ub294 \uc131\uc9c8\uc774 \uc788\uc5b4 \uc774\ub7f0 \ubd80\ubd84\ub4e4\uc744 \uc870\uc2ec\ud574\uc57c \ud558\uace0, \uc9c8\ud22c\uc2ec\uc774 \ub9ce\uc544 \uc0ac\ub791\uc774 \uc9d1\ucc29\uc73c\ub85c \ubc14\ub014 \uc218 \uc788\uc5b4 \uc8fc\uc758\ud574\uc57c \ub41c\ub2f5\ub2c8\ub2e4! "},{"name":"\uc57c \uc0ac\uadc0\uc790, \uc0ac\ub791\uc744 \uc7c1\ucde8\ud558\ub294 <\ud638\ub791\uc774>","desc":"\ud55c \ubc88 \uc88b\uc544\ud558\ub294 \uc0ac\ub78c\uc774 \uc788\uc73c\uba74 \ub0b4 \uc0ac\ub78c\uc73c\ub85c \ub9cc\ub4dc\ub294 \ub2f9\uc2e0! \ud638\ub791\uc774\uc5d0 \ud574\ub2f9\ud558\ub294 \ub2f9\uc2e0\uc740 \uc378\ubd80\ud130 \uc0ac\ub791\uae4c\uc9c0 \ud55c \ubc88\uc5d0 \uc9c1\uc9c4\ud558\ub294 \uc2a4\ud0c0\uc77c\uc774\ub78d\ub2c8\ub2e4. \uc5f0\uc560\ud560 \ub54c \uc8fc\ub85c \uc774\ub044\ub294 \uc131\ud5a5\uc744 \uac00\uc9c0\uace0 \uc788\uace0, \uc2dc\uc6d0\uc2dc\uc6d0\ud55c \uc131\uaca9\uacfc \uc720\ucf8c\ud55c \uc131\uaca9\uc744 \uac00\uc9c0\uace0 \uc788\uc5b4\uc694. \ub300\ucabd\uac19\uc740 \uc131\uaca9\uc5d0\ub2e4 \uc2e4\uc218\ub97c \uc6a9\ub0a9\ud558\ub294 \ub300\uc778\ubc30\uc9c0\ub9cc \uc720\ud639\uc5d0 \uc57d\ud558\uace0 \ud5c8\uc601\ub54c\ubb38\uc5d0 \ub4e4\ub728\ub294 \uc131\uaca9\uc774\ub77c \ub2e4\ub978 \uc774\uc131\uc758 \uc811\uadfc\uc5d0 \uc8fc\uc758\ud574\uc57c \ub3fc\uc694. \ub610\ud55c \ub0b4\uac00 \ud55c \ub9d0\ub85c \uc778\ud574 \uc0c1\ub300\ubc29\uc774 \uc0c1\ucc98\ub97c \ubc1b\uc744 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0, \ud56d\uc0c1 \ub9d0 \uc870\uc2ec\uc774 \ud544\uc694\ud558\ub2f5\ub2c8\ub2e4!"},{"name":"\uc774\uac74 \uc5b4\ub54c? \ub09c \uc5b4\ub54c? \ub3c5\ud2b9\ud55c \ub9e4\ub825\uc744 \uac00\uc9c4 <\ud1a0\ub07c>","desc":"\uc0c1\ub300\ubc29\uc744 \ud640\ub9ac\uac8c \ub9cc\ub4dc\ub294 \ub2f9\uc2e0! \uc2e0\ube44\ub86d\uace0 \ub3c5\ud2b9\ud55c \ub9e4\ub825\uc744 \uac00\uc838, \uc0c1\ub300\ubc29\uc774 \ud479 \ube60\uc9c0\uac8c \ub9cc\ub4dc\ub294 \uc2a4\ud0c0\uc77c\uc774\uc5d0\uc694. \uc9c1\uac10\uc774 \ubc1c\ub2ec\ub418\uc5b4 \uc190\uc7ac\uc8fc\uac00 \ub6f0\uc5b4\ub09c \ud3b8\uc774\uace0, \uc5f0\uc560\ud560 \ub54c \ud1b5\ud1b5 \ud280\ub294 \ubaa8\uc2b5\ub4e4\uc744 \ub9ce\uc774 \ubcf4\uc5ec\uc900\ub2f5\ub2c8\ub2e4. \uc720\uc21c\ud558\uace0 \ub099\ucc9c\uc801\uc778 \uc131\ud5a5\uc774\uc9c0\ub9cc, \uc790\uce6b\uc798\ubabb\ud558\uba74 \uc0c1\ub300\ubc29\uc5d0\uac8c \ucc9c\uc9c4\ub09c\ub9cc\ud55c \uc544\uc774\ucc98\ub7fc \ubcf4\uc77c \uc218 \uc788\ub294 \uc810\uc744 \uc8fc\uc758\ud574\uc57c \ub3fc\uc694. \ub610\ud55c \uac10\uc815 \uae30\ubcf5\uc774 \uc2ec\ud55c \ud3b8\uc774\ub77c \ubcc0\ub355\uc2a4\ub7ec\uc6b4 \ub9c8\uc74c\uc744 \uac00\uc9c8 \uc218 \uc788\uc5b4, \uc774\ub7f0 \ubd80\ubd84\ub4e4\uc5d0 \uc2e0\uacbd\uc744 \uc4f4\ub2e4\uba74 \uc88b\uc740 \uc5f0\uc560\ub97c \ud560 \uc218 \uc788\uc5b4\uc694."},{"name":"\uacb0\ud63c\uc740 \uc5b8\uc81c\ucbe4 \ud560\uae4c \uc2e0\ud63c\uc5ec\ud589\uc740 \uc5b4\ub514\ub85c?, \uc774\uc0c1\uc801\uc778 \uc5f0\uc560\uad00\uc758 \uc18c\uc720\uc790 <\uc6a9>","desc":"\uc0c1\ub300\ubc29\uacfc\uc758 \ubbf8\ub798\ub97c \uafc8\uafb8\ub294 \ub2f9\uc2e0! \ud604\uc2e4\uc801\uc778 \uc5f0\uc560\ubcf4\ub2e4\ub294, \ubbf8\ub798\uc5d0 \ub300\ud55c \uc774\uc0c1\uc801\uc778 \uc5f0\uc560\uad00\uc744 \uac00\uc9c0\uace0 \uc788\uc5b4\uc694. \ub9e4\uc77c\ub9e4\uc77c \uc0ac\ub791\ud558\ub294 \uc0ac\ub78c\uacfc \ubcf4\ub0bc \ubbf8\ub798\ub97c \uc0dd\uac01\ud558\uae30 \ub54c\ubb38\uc5d0, \uc88b\uc740 \uc2e0\ub791\uac10\uc774 \ub420 \uc218 \uc788\ub294 \uc790\uc9c8\uc774 \uc788\ub2f5\ub2c8\ub2e4. \ub610\ud55c \uc77c\uc801\uc73c\ub85c\ub098 \uc0ac\ub791\uc73c\ub85c\ub098 \uc57c\ub9dd\uc774 \ucee4, \ud06c\uac8c \uc131\uacf5\ud560 \ud655\ub960\uc774 \ub192\uace0 \ub9ac\ub354\uc2ed\uc774 \ub9e4\uc6b0 \ub6f0\uc5b4\ub098\ub2f5\ub2c8\ub2e4. \ub2e4\ub9cc \ub192\uc740 \uc774\uc0c1\uc5d0 \ube44\ud574\uc11c \ud604\uc2e4\uc774 \uc790\uc2e0\uc758 \ub9c8\uc74c\uc5d0 \ub4e4\uc9c0 \uc54a\uc73c\uba74 \ud5c8\uc138\ub97c \ubd80\ub9ac\uac70\ub098 \uc0ac\ub78c\ub4e4\uc744 \ubb34\uc2dc\ud558\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc73c\ub2c8 \uc774\uc810\ub4e4\uc744 \uc8fc\uc758\ud558\uba74 \uc88b\uc744 \uac83 \uac19\uc544\uc694!"},{"name":"\uae30\ub150\uc77c\uc5d0 \ubb34\uc2a8 \uc774\ubca4\ud2b8 \ud560\uae4c, \uc774\ubca4\ud2b8 \ud50c\ub798\ub108 <\ubc40>","desc":"\uc0c1\ub300\ubc29\uc758 \uae30\ub150\uc77c\uc744 \ucc59\uae30\uba70 \uae5c\uc9dd \ub180\ub77c\uac8c \ud558\ub294 \ub2f9\uc2e0!, \uc544\uc774\ub514\uc5b4\uac00 \ub6f0\uc5b4\ub098\uace0 \ub0a8\ub2e4\ub978 \uac10\uac01\uc774 \uc788\uc5b4, \uc0c1\ub300\ubc29\uc5d0\uac8c \ub9ce\uc740 \uc774\ubca4\ud2b8\ub97c \ud574\uc8fc\ub294 \uc2a4\ud0c0\uc77c\uc774\uc5d0\uc694. \uc5f0\uc560\ud560 \ub54c \ub208\uce58\ub3c4 \ube60\ub974\uace0, \uac10\ub3d9\uc744 \uc904 \uc218 \uc788\uc5b4 \uc0c1\ub300\ubc29\uc774 \ub9e4\uc77c \ud589\ubcf5\ud558\ub2f5\ub2c8\ub2e4. \uc804\uccb4\uc801\uc73c\ub85c \ud654\ub824\ud55c \uc5f0\uc560\ub97c \ud558\uc9c0\ub9cc, \uc740\uadfc\ud788 \ube44\ubc00\uc774 \ub9ce\uace0 \uc6b0\uc720\ubd80\ub2e8\ud55c \uc131\uaca9\uc744 \uac00\uc9c0\uace0 \uc788\ub2f5\ub2c8\ub2e4. \ub610\ud55c \uadc0\uac00 \ub9e4\uc6b0 \uc587\uc544 \ub0a8\uc758 \uc774\uc57c\uae30\ub97c \uace7\uc774 \uace7\ub300\ub85c \ubbff\uc5b4, \uc0c1\ub300\ubc29\uc744 \uc758\uc2ec\ud558\uae30\ub3c4 \ud558\uae30 \ub54c\ubb38\uc5d0 \uc870\uc2ec\ud574\uc57c \ub41c\ub2f5\ub2c8\ub2e4!"},{"name":"\uc5b4 \uc624\ub298 \uba38\ub9ac \ubc14\uafe8\ub124 \uc798 \uc5b4\uc6b8\ub9b0\ub2e4, \uc13c\uc2a4\uac00 \ub6f0\uc5b4\ub09c <\ub9d0>","desc":"\uc5f0\uc560\ud560 \ub54c, \uc13c\uc2a4\uac00 \ub118\uccd0\ub098\ub294 \ub2f9\uc2e0! \ub9d0\uc7ac\uc8fc\uac00 \ub6f0\uc5b4\ub098\uba70 \ucc98\uc138\uc220\uc774 \ub6f0\uc5b4\ub098, \uc0c1\ub300\ubc29\uc758 \ud638\uac10\uc744 \uae08\ubc29 \uc5bb\ub294\ub2f5\ub2c8\ub2e4. \ub099\ucc9c\uc801\uc774\uace0 \uc720\uc5f0\ud55c \uc131\uaca9\uc744 \uac00\uc9c0\uace0 \uc788\uc73c\uba70, \uad6c\uc18d\ubc1b\ub294 \uac83\uc744 \uc2eb\uc5b4\ud558\ub294 \uc2a4\ud0c0\uc77c\uc774\uc5d0\uc694. \uc18c\uc911\ud55c \uc0ac\ub78c\ub4e4\uc744 \uc704\ud574 \ud76c\uc0dd\ud560 \uc904\ub3c4 \uc54c\uc9c0\ub9cc, \ucf8c\ub7b5 \uc9c0\ud5a5\uc801\uc778 \uacbd\uc6b0\uac00 \ub9ce\uc544 \uc0ac\uce58\uc640 \ud5c8\uc601\uc5d0 \ubb3c\ub4dc\ub294 \uacbd\uc6b0\uac00 \ub2e4\ubc18\uc218\uc785\ub2c8\ub2e4. \ud55c\ud0d5 \uc8fc\uc758\uc5d0 \ube60\uc838 \uc27d\uac8c \ub9dd\uac00\uc9c8 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc774 \uc810\uc744 \uc8fc\uc758\ud574\uc57c \ub41c\ub2f5\ub2c8\ub2e4!"},{"name":"\ub09c \ub108\ub791 \ud558\ub294 \uac83\ub4e4 \ub2e4 \uc88b\uc544, \uc21c\uc885\uc801\uc778 <\uc591>","desc":"\uc5f0\uc560\ud560 \ub54c \ubaa8\ub4e0 \uac78 \ub9de\ucdb0\uc8fc\ub824\uace0 \ud558\ub294 \ub2f9\uc2e0! \ub2e4\uc815\ud55c \ub290\ub08c\uacfc \uc0c1\ub0e5\ud55c \ubaa8\uc2b5\uc744 \uac00\uc9c0\uace0 \uc788\uc5b4, \uc0c1\ub300\ubc29 \uc785\uc7a5\uc5d0\uc11c \ud3b8\uc548\ud55c \ub290\ub08c\uc744 \ubc1b\uc744 \uc218 \uc788\ub2f5\ub2c8\ub2e4. \ud0c0\uc624\ub974\ub294 \uc5f0\uc560\ubcf4\ub2e4\ub294 \uc548\uc815\uc801\uc778 \uc5f0\uc560\ub97c \ucd94\uad6c\ud558\uace0, \uc0c1\ub300\ubc29\uc5d0\uac8c \ub9c8\uc74c\uc744 \uc5ec\ub294 \uc21c\uac04 \uc9c4\uc2ec\uc73c\ub85c \uc0ac\ub791\uc5d0 \ud479 \ube60\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \uac15\uc778\ud55c \uc0dd\uc874\ub825\uacfc \uc218\uc644\uc774 \uc88b\uc73c\ub098, \ud55c\ud3b8\uc73c\ub85c\ub294 \uc790\uc2e0\uc774 \uc6d0\ud558\ub294 \ubc14\ub97c \ubaa8\ub450 \uc7c1\ucde8\ud558\ub824\ub294 \uace0\uc9d1\uc774 \uc788\uc5b4\uc694. \uc774 \uace0\uc9d1\uc774 \uc2ec\ud574\uc9c0\uba74 \ub2e4\ub978 \uc0ac\ub78c \ub208\uc5d0\uc11c\ub294 \uacc4\uc0b0\uc801\uc778 \uc0ac\ub78c\ucc98\ub7fc \ubcf4\uc5ec \ub9e4\ub825\uc744 \uc783\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4!"},{"name":"\ub09c \ub2f9\uc2e0\uc758 \uc5f0\uc608\uc778, \ub07c\uac00 \ub118\uce58\ub294 \uc7ac\uc8fc\uafbc <\uc6d0\uc22d\uc774>","desc":"\uc9c0\uce58\uace0 \ud798\ub4e4 \ub54c \uc5b8\uc81c\ub098 \ud589\ubcf5\uc744 \uc8fc\ub294 \ub2f9\uc2e0! \uc815\ub9d0 \ub07c\uac00 \ub9ce\uace0 \ub9d0\uc7ac\uc8fc\uac00 \ub9ce\ub2e4\ubcf4\ub2c8 \ud314\ubc29\ubbf8\uc778\uc774\ub77c\ub294 \uc18c\ub9ac\ub97c \ub9ce\uc774 \ub4e3\ub294 \ud3b8\uc774\ub78d\ub2c8\ub2e4. \ub610\ud55c \ub2e4\uc7ac\ub2e4\ub2a5\ud558\uace0 \ucd1d\uba85\ud558\uc5ec \uc5b4\ub5a4 \uc77c\uc774\ub4e0\uc9c0 \uc798\ud560 \uc218 \uc788\uace0, \uc720\uba38 \uac10\uac01\ub3c4 \ub6f0\uc5b4\ub098 \uc8fc\ubcc0 \uc0ac\ub78c\ub4e4\uc774 \ub9ce\uc774 \ub530\ub974\ub294 \ub9c8\ub2f9\ubc1c \ud0c0\uc785\uc785\ub2c8\ub2e4. \uc5f0\uc560\ud560 \ub54c \uc0c1\ub300\ubc29\uc758 \uae30\ubd84\uc744 \uc798 \ub9de\ucdb0\uc8fc\uace0 \uc990\uac70\uc6b4 \ubd84\uc704\uae30\ub97c \uc720\uc9c0\ud558\ub098, \ub2e4\uc18c \ubcf8\uc778\uc758 \uccb4\uba74\uc744 \uc911\uc2dc\ud558\ub294 \uacbd\ud5a5\uc774 \uc788\uc5b4\uc694. \uc774 \uc810 \ub54c\ubb38\uc5d0 \uc794\uba38\ub9ac\ub97c \uad74\ub9ac\ub2e4 \ud0c0\uc778\uc5d0\uac8c \uad50\ud65c\ud558\ub2e4\ub294 \uc778\uc0c1\uc744 \uc8fc\uac8c \ub420 \uc218\ub3c4 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc870\uae08 \uc870\uc2ec\ud558\uba74 \uc88b\uc744 \uac83 \uac19\uc544\uc694!"},{"name":"\uc774\uac74 \uc774\uac70\uace0 \uc800\uac74 \uc800\uac70\uc9c0 , \uacf5\uacfc\uc0ac \ud655\uc2e4\ud55c <\ub2ed>","desc":"\uae54\ub054\ud55c \uc5f0\uc560\ub97c \ucd94\uad6c\ud558\uba70 \ub9fa\uace0 \ub04a\ub294 \uac83\uc774 \ud655\uc2e4\ud55c \ub2f9\uc2e0! \ub2e8\uc544\ud558\uace0 \uace0\uace0\ud55c \uc774\ubbf8\uc9c0\ub97c \uac00\uc9c0\uace0 \uc788\uc5b4 \uc6b0\uc544\ud55c \ub9e4\ub825\uc744 \ud45c\ucd9c\ud558\ub294 \ud3b8\uc774\ub78d\ub2c8\ub2e4. \uc9d1\uc911\ub825\uacfc \uae30\uc5b5\ub825\uc774 \uc88b\uc544 \uc0c1\ub300\ubc29\uacfc \uc788\uc5c8\ub358 \uc77c\ub4e4\uc744 \ub2e4 \uae30\uc5b5\ud574\uc8fc\ub294 \ud3b8\uc774\uace0, \uac89\uc73c\ub85c\ub294 \ubb34\ub69d\ub69d\ud558\ub098 \uc740\uadfc\ud788 \uac10\uc218\uc131\uc774 \ud48d\ubd80\ud558\ub2f5\ub2c8\ub2e4. \ub2e4\ub9cc \uc790\uc2e0\uc774 \uc0dd\uac01\ud55c \uc120\uc744 \ubc97\uc5b4\ub098\uba74 \ub0c9\uc18c\uc801\uc73c\ub85c \ubc14\ub00c\uace0, \ud3c9\uc18c \uc9c1\uc124\uc801\uc778 \ud3b8\uc774\ub77c \ucc28\uac11\ub2e4\ub294 \uc778\uc0c1\uc744 \ub9ce\uc774 \uc904 \uc218 \uc788\uc5b4\uc694. \uc12c\uc138\ud55c \uc0ac\ub78c\uc774\uae30 \ub54c\ubb38\uc5d0 \uc608\ubbfc\ud55c \uacbd\uc6b0\uac00 \ub9ce\uc73c\ub2c8 \ub9c8\uc74c\uc744 \ud3c9\uc548\ud788 \ub2e4\uc2a4\ub9ac\uace0, \uc0c1\ub300\ubc29\uc5d0\uac8c \uc880\ub9cc \ub354 \ub530\ub73b\ud558\uac8c \ub300\ud558\uba74 \uc88b\uc744 \uac83 \uac19\uc544\uc694!"},{"name":"\ub09c \ub124\uac00 \uc88b\uc544 \ub108\ubb34 \uc88b\uc544, \uc560\uad50\ub9cc\ub545 <\uac1c>","desc":"\uc560\uad50\uc7c1\uc774 \uadf8 \uc790\uccb4\uc778 \ub2f9\uc2e0! \ub465\uae00\ub465\uae00\ud558\uac8c \ucc98\uc138\ub97c \uc798 \ud558\uace0, \ubd99\uc784\uc131\uc774 \ub9e4\uc6b0 \uc88b\uc544 \uc0ac\uad50\uc131\uc774 \ub9e4\uc6b0 \ub6f0\uc5b4\ub09c \ud3b8\uc774\ub78d\ub2c8\ub2e4. \ub610\ud55c \uad81\uae08\ud55c \uac83\uc744 \ucc38\uc9c0 \ubabb\ud574 \ud638\uae30\uc2ec\uc774 \ub9ce\uace0, \uac15\uc544\uc9c0\uac19\uc774 \uc0c1\ub300\ubc29\uc5d0\uac8c \ucc30\uc2f9 \ub2ec\ub77c\ubd99\ub294 \uac83\uc744 \uc88b\uc544\ud558\ub294 \uc2a4\ud0c0\uc77c\uc774\uc5d0\uc694. \uc131\uaca9\uc774 \ub9e4\uc6b0 \ucf8c\ud65c\ud558\ub098, \uac10\uc815\uc758 \uae30\ubcf5\uc774 \uc740\uadfc\ud788 \uc2ec\ud574 \uc0c1\ub300\ubc29\uc774 \ud558\ub294 \ub9d0\uc5d0 \ub300\ud574 \ud06c\uac8c \uc0c1\ucc98\ubc1b\ub294 \ud3b8\uc785\ub2c8\ub2e4. \ub610\ud55c \uc131\uaca9\uc774 \uae09\ud55c \uacbd\uc6b0\uac00 \ub9ce\uc544, \ucc28\ubd84\ud558\uac8c \ud589\ub3d9\uc744 \ud558\uc9c0 \ubabb\ud558\ub294 \ud3b8\uc774\uae30 \ub54c\ubb38\uc5d0 \uc774 \uc810\uc744 \uc880\ub9cc \uc870\uc2ec\ud558\uba74 \uc88b\uc744 \uac83 \uac19\uc544\uc694! "},{"name":"\uc0b0\uc740 \uc0b0\uc774\uc694 \uc5f0\uc560\ub294 \uc5f0\uc560\ub85c\ub2e4, \ub290\uae0b\ud558\uace0 \uc628\uc21c\ud55c <\ub3fc\uc9c0>","desc":"\ub2e8\uc544\ud558\uace0 \uace0\uc0c1\ud55c \ud488\uaca9\uc744 \uac00\uc9c4 \ub2f9\uc2e0! \ub9c8\uc74c\uc744 \uba39\uc744 \ub54c \ub290\uae0b\ud558\uac8c \ud589\ub3d9\ud558\uace0, \uc0c1\ub300\ubc29\uc5d0 \ub300\ud55c \ubc30\ub824\uac00 \uc0c1\ub2f9\ud788 \ub9ce\uc544 \uc628\ud654\ud55c \uc131\ud488\uc744 \uac00\uc9c0\uace0 \uc788\uc5b4\uc694. \ub610\ud55c \uc194\uc9c1\ud55c \uc131\uaca9\uc73c\ub85c \uc2e0\ub8b0\ub97c \ubc1b\uc744 \uc218 \uc788\ub294 \ud0c0\uc785\uc774\uba70, \uc5b4\ub5a0\ud55c \uc77c\uc744 \ud558\ub4e0 \ucc45\uc784\uac10\uc774 \uac15\ud574 \ubb34\uc0ac\ud788 \ub9c8\ubb34\ub9ac\ud55c\ub2f5\ub2c8\ub2e4. \ud604\uc2e4\uc801\uc778 \uc131\ud5a5\uc774 \uac15\ud574 \uc2e4\ub9ac\ub97c \uc798 \ucc59\uae30\ub098, \ud45c\ud604\ub825\uc774 \ub2e4\uc18c \ubd80\uc871\ud574 \uc0c1\ub300\ubc29\uc774 \uc0ac\ub791\ubc1b\ub294\ub2e4\ub294 \uac10\uc815\uc744 \ubabb \ub290\ub084\uc218\ub3c4 \uc788\uc5b4\uc694. \uc740\uadfc\ud788 \uc9c8\ud22c\uc2ec\uc774 \uac15\ud558\uace0 \uace0\uc9c0\uc2dd\ud55c \uba74\uc774 \uac15\ud574, \ub204\uac00 \uc790\uae30\uc5d0\uac8c \uc798\ubabb\ud558\uba74 \uc9c0\uad6c \ub05d\uae4c\uc9c0 \ubcf5\uc218 \ud560 \uc218 \uc788\uc744 \uc815\ub3c4\uc774\uae30 \ub54c\ubb38\uc5d0 \uc774 \uc810\uc744 \uc870\uc2ec\ud574\uc57c \ud55c\ub2f5\ub2c8\ub2e4! "}]}')}},[[60,1,2]]]);
//# sourceMappingURL=main.87b6e4d8.chunk.js.map