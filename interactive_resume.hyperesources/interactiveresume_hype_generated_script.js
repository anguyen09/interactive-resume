//	HYPE.documents["interactive_resume"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="interactive_resume.hyperesources",c="interactive_resume",e="interactiveresume_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/interactiveresume_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_584","HYPE_dtl_584",!0==(null!=a&&10>a||false==!0)?"HYPE-584.full.min.js":"HYPE-584.thin.min.js"),false==!0&&(a=a||l("HYPE_w_584","HYPE_wdtl_584","HYPE-584.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"dropBeat",source:"function(hypeDocument, element, event) {\t\tvar isActive = $(element).hasClass('active-button')\n\nif(!isActive){\nhypeDocument.startTimelineNamed('pressA1', hypeDocument.kDirectionForward)\n$(element).addClass('active-button');\nvar synth = new Tone.MembraneSynth().toMaster()\nhypeDocument.startTimelineNamed('oomouth');\n//create a loop\nvar loop = new Tone.Loop(function(time){\n\tTone.Draw.schedule(function(){\n\t\t//this callback is invoked from a requestAnimationFrame\n\t\t//and will be invoked close to AudioContext time\n\thypeDocument.startTimelineNamed('pulse_a1');\n\t}, time) //use AudioContext time of the event\n\tsynth.triggerAttackRelease(\"C2\", \"1n\", time)\n}, \"4n\")\n\n//play the loop between 0-2m on the transport\nloop.start(0);\nLoops['kick'] = loop;\n} else {\n$(element).removeClass('active-button');\nhypeDocument.startTimelineNamed('pressA1', hypeDocument.kDirectionReverse)\n\tLoops['kick'].stop();\t\n}\n\n\n\n\n\t\n}",identifier:"137"},{name:"sequenceMusic",source:"function(hypeDocument, element, event) {\t\n\t\n\tvar isActive = $(element).hasClass('active-button')\n\tif(!isActive){\nhypeDocument.startTimelineNamed('press_l', hypeDocument.kDirectionForward)\n$(element).addClass('active-button');\nvar synth = new Tone.MembraneSynth().toMaster();\nvar synth2 = new Tone.MembraneSynth().toMaster();\n//create a loop\n//create a loop\nvar loop = new Tone.Sequence(function(time, note){\n\tsynth.triggerAttackRelease(note, \"1n\", time)\n\tTone.Draw.schedule(function(){\n\t\n\n\n\t}, time) //use AudioContext time of the event\n//subdivisions are given as subarrays\n}, [null,\"E3\",null,\"E3\",null,null, \"A3\",\"A3\"], \"8n\");\n\nvar loop2 = new Tone.Sequence(function(time, note){\n\tsynth2.triggerAttackRelease(note, \"1n\", time)\n\tTone.Draw.schedule(function(){\n\t\thypeDocument.startTimelineNamed('pulse_l')\n\n\t}, time) //use AudioContext time of the event\n//subdivisions are given as subarrays\n}, [null,\"E2\",null,\"E2\",null,null, \"A2\",\"A2\"], \"8n\");\n\n\n//play the loop between 0-2m on the transport\nloop.start(0);\nconsole.log('start');\nloop2.start(0);\nLoops['bass_sequence'] = loop;\nLoops['melody_sequence'] = loop2;\n\n} else {\n$(element).removeClass('active-button');\n\tLoops['bass_sequence'].stop();\t\n\tLoops['melody_sequence'].stop();\n\thypeDocument.startTimelineNamed('press_l', hypeDocument.kDirectionReverse)\n}\n\n}",identifier:"138"},{name:"pressA2",source:"function(hypeDocument, element, event) {\nTone.Transport.schedule(function() {\n\nvar chords = [\n['E3','A3'],\n['D3','F3'],\n['A3','D4'],\n];\n\n\thypeDocument.startTimelineNamed('click_a2');\n\t\nvar rand = 0 ;\n\tmin = Math.ceil(0);\n  max = Math.floor(3);\n  rand = Math.floor(Math.random() * (max - min)) + min;\n  \n  Chord = chords[rand];\nfmSynth.triggerAttack(Chord);\n}, '+0.05')\n\n}",identifier:"149"},{name:"releaseA2",source:"function(hypeDocument, element, event) {\t\n\tfmSynth.triggerRelease(Chord);\t\n\thypeDocument.startTimelineNamed('release_a2');\n}",identifier:"150"},{name:"pressN",source:"function(hypeDocument, element, event) {\t\n\tvar notes = [\n\t'D3',\n\t'F3',\n\t'A3',\n\t'C4',\n\t'D4'\n\t\n];\n\nhypeDocument.startTimelineNamed('press_n');\n\nvar rand = 0 ;\n\tmin = Math.ceil(0);\n  max = Math.floor(5);\n  rand = Math.floor(Math.random() * (max - min)) + min;\n  \n\tnoiseSynth.triggerAttack(notes[rand]);\n\totherSynth.triggerAttack(notes[rand]);\n}",identifier:"151"},{name:"releaseN",source:"function(hypeDocument, element, event) {\tnoiseSynth.triggerRelease();\n\totherSynth.triggerRelease();\n\t\n\thypeDocument.startTimelineNamed('press_n', hypeDocument.kDirectionReverse);\n}",identifier:"152"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_584(c,e,{"1":{n:"jquery-3.2.1.min.js"},"-2":{n:"blank.gif"},"-1":{n:"PIE.htc"},"0":{n:"Tone.min.js"}},h,[],d,[{n:"Untitled Scene",o:"1",X:[0]}],[{o:"3",p:"600px",cA:false,Y:900,Z:450,L:[],c:"#FFFFFF",bY:1,d:900,U:{},T:{"139":{i:"139",n:"pressA1",z:0.08,b:[],a:[{f:"c",y:0,z:0.08,i:"g",e:"#967E78",s:"#FFFEF6",o:"165"},{y:0.08,i:"g",s:"#967E78",z:0,o:"165",f:"c"}],f:30},"159":{i:"159",n:"press_n",z:0.14,b:[],a:[{f:"c",y:0,z:0.14,i:"g",e:"#FFF8DC",s:"#EDDD79",o:"192"},{f:"c",y:0,z:0.14,i:"g",e:"#FFF4AF",s:"#EDDD79",o:"197"},{y:0.14,i:"g",s:"#FFF8DC",z:0,o:"192",f:"c"},{y:0.14,i:"g",s:"#FFF4AF",z:0,o:"197",f:"c"}],f:30},"106":{i:"106",n:"hover_over_a2",z:0.19,b:[],a:[{f:"c",y:0,z:0.19,i:"G",e:"#680A02",s:"#FFFDF3",o:"183"},{f:"c",y:0,z:0.19,i:"g",e:"#FFFEF5",s:"#680902",o:"184"},{y:0.19,i:"G",s:"#680A02",z:0,o:"183",f:"c"},{y:0.19,i:"g",s:"#FFFEF5",z:0,o:"184",f:"c"}],f:30},"143":{i:"143",n:"press_l",z:0.1,b:[],a:[{f:"c",y:0,z:0.1,i:"g",e:"#341D32",s:"#482A45",o:"177"},{y:0.1,i:"g",s:"#341D32",z:0,o:"177",f:"c"}],f:30},"157":{i:"157",n:"release_a2",z:0.1,b:[],a:[{f:"c",y:0,z:0.1,i:"g",e:"#FFFDF2",r:true,s:"#680902",o:"184"},{y:0.1,i:"g",s:"#FFFDF2",z:0,o:"184",f:"c"}],f:30},"76":{f:30,z:1,i:"76",n:"hover_over_l",j:{"0":[[195,-104,195,-104,195,198,195,198]]},a:[{f:"c",y:0,z:0.08,i:"a",e:130,s:-22,o:"180"},{f:"c",y:0,z:0.08,i:"b",e:-135,s:-136,o:"180"},{o:"176",y:0.08,z:0.09,i:"b",e:53,a:"0",f:"c",s:-249},{o:"176",y:0.08,z:0.09,i:"a",e:180.5,a:"0",f:"c",s:180.5},{y:0.08,i:"a",s:130,z:0,o:"180",f:"c"},{y:0.08,i:"b",s:-135,z:0,o:"180",f:"c"},{f:"c",y:0.17,z:0.13,i:"e",e:0.72611748417721533,s:0,o:"179"},{y:0.17,i:"b",s:53,z:0,o:"176",f:"c"},{y:0.17,i:"a",s:180.5,z:0,o:"176",f:"c"},{y:1,i:"e",s:0.72611748417721533,z:0,o:"179",f:"c"}],b:[]},"124":{f:30,z:1.15,i:"124",n:"hover-over-n",j:{"2":[[118,724,118,724,116,271,116,271]]},a:[{f:"c",y:0,z:0.14,i:"b",e:447,s:633,o:"196"},{f:"c",y:0,z:0.14,i:"a",e:8,s:0,o:"196"},{f:"c",y:0,z:1.15,i:"b",e:-111,s:-544,o:"199"},{f:"c",y:0,z:1.15,i:"a",e:-51,s:-51,o:"199"},{f:"c",y:0,z:0.12,i:"a",e:-221,s:0,o:"202"},{y:0,i:"w",s:"",z:0,o:"200",f:"a"},{o:"193",y:0.12,z:1.03,i:"b",e:39,a:"2",f:"c",s:492},{o:"193",y:0.12,z:1.03,i:"a",e:27.5,a:"2",f:"c",s:29.5},{y:0.12,i:"a",s:-221,z:0,o:"202",f:"c"},{y:0.14,i:"b",s:447,z:0,o:"196",f:"c"},{y:0.14,i:"a",s:8,z:0,o:"196",f:"c"},{y:1.15,i:"b",s:-111,z:0,o:"199",f:"c"},{y:1.15,i:"a",s:-51,z:0,o:"199",f:"c"},{y:1.15,i:"b",s:39,z:0,o:"193",f:"c"},{y:1.15,i:"a",s:27.5,z:0,o:"193",f:"c"}],b:[]},"144":{i:"144",n:"pulse_l",z:0.05,b:[],a:[{f:"c",y:0,z:0.05,i:"g",e:"#7A4A76",s:"#482A45",o:"177"},{f:"c",p:2,y:0.05,z:0,i:"ActionHandler",s:{a:[{b:"144",p:3,z:true,symbolOid:"2"}]},o:"144"},{y:0.05,i:"g",s:"#7A4A76",z:0,o:"177",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30},"88":{f:30,z:1.17,i:"88",n:"hover_over_a",j:{"1":[[462,296,462,296,206,294,206,294]]},a:[{o:"164",y:0,z:0.13,i:"b",e:20.5,a:"1",f:"c",s:22.5},{o:"164",y:0,z:0.13,i:"a",e:49.5,a:"1",f:"c",s:305.5},{f:"c",y:0.13,z:0.07,i:"e",e:1,s:0,o:"172"},{f:"c",y:0.13,z:0.07,i:"a",e:57,s:-43,o:"172"},{f:"c",y:0.13,z:0.07,i:"b",e:259,s:260,o:"172"},{y:0.13,i:"b",s:21,z:0,o:"164",f:"c"},{y:0.13,i:"a",s:50,z:0,o:"164",f:"c"},{f:"c",y:0.2,z:0.27,i:"e",e:1,s:0,o:"166"},{y:0.2,i:"e",s:1,z:0,o:"172",f:"c"},{y:0.2,i:"a",s:57,z:0,o:"172",f:"c"},{y:0.2,i:"b",s:259,z:0,o:"172",f:"c"},{y:1.17,i:"e",s:1,z:0,o:"166",f:"c"}],b:[]},"153":{i:"153",n:"click_a2",z:0.1,b:[],a:[{f:"c",y:0,z:0.1,i:"g",e:"#FF7F77",r:true,s:"#680902",o:"184"},{y:0.1,i:"g",s:"#FF7F77",z:0,o:"184",f:"c"}],f:30},"142":{i:"142",n:"pulse_a1",z:0.11,b:[],a:[{f:"c",y:0,z:0.06,i:"b",e:8,s:462,o:"203"},{f:"c",y:0,z:0.06,i:"d",e:561,s:107,o:"203"},{f:"c",y:0.06,z:0.05,i:"b",e:457,s:8,o:"203"},{f:"c",y:0.06,z:0.05,i:"d",e:112,s:561,o:"203"},{y:0.11,i:"b",s:457,z:0,o:"203",f:"c"},{y:0.11,i:"d",s:112,z:0,o:"203",f:"c"}],f:30}},bZ:180,O:["198","199","195","176","180","186","178","177","175","184","192","191","173","165","163","200","185","181","182","164","188","179","183","166","189","196","194","174","170","190","167","169","168","171","172","187","202","197","201","203","193"],n:"Untitled Layout","_":0,v:{"172":{G:"#000000",aU:8,c:184,d:26,aV:8,cY:"0",e:0,s:"Futura,Verdana,sans-serif",r:"inline",t:32,Z:"break-word",w:"Adaptable",bF:"163",j:"absolute",x:"visible",k:"div",y:"preserve",z:7,aS:8,aT:8,a:-43,b:260},"191":{x:"visible",g:"#E8EBED",k:"div",aY:0,c:225,d:509,z:19,bR:0,a:675,j:"absolute",b:-44},"199":{k:"div",x:"visible",c:216,d:1032,z:4,a:-51,j:"absolute",bF:"191",b:-544},"167":{G:"#000000",aU:8,c:129,aV:8,d:26,r:"inline",e:0.29999999999999999,s:"Futura,Verdana,sans-serif",t:18,Z:"break-word",w:"Sound Design<br><br>",bF:"166",j:"absolute",x:"visible",k:"div",y:"preserve",z:6,aS:8,aT:8,a:74,b:96},"186":{c:223,aE:{a:[{p:4,h:"150"}]},d:582,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,w:"",N:1,A:"#D8DDE4",x:"visible",O:1,j:"absolute",k:"div",aB:{a:[{p:4,h:"149"}]},dB:"button",z:8,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",bF:"182",P:1,a:0,b:-49},"200":{c:230,aE:{a:[{p:4,h:"152"}]},d:627,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,bF:"191",A:"#D8DDE4",O:1,x:"visible",j:"absolute",k:"div",aB:{a:[{p:4,h:"151"}]},dB:"button",z:13,C:"#D8DDE4",D:"#D8DDE4",aC:{a:[{b:"124",p:3,z:true,symbolOid:"2"}]},B:"#D8DDE4",P:1,a:-3,aD:{a:[{b:"124",p:3,z:false,symbolOid:"2"}]},b:37},"173":{c:234,d:500,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,bF:"163",A:"#D8DDE4",O:1,x:"visible",j:"absolute",k:"div",aB:{a:[{p:4,h:"137"}]},dB:"button",z:9,C:"#D8DDE4",D:"#D8DDE4",aC:{a:[{b:"88",p:3,z:true,symbolOid:"2"}]},B:"#D8DDE4",P:1,a:-6,aD:{a:[{b:"88",p:3,z:false,symbolOid:"2"}]},b:-16},"192":{c:223,d:538,I:"Solid",J:"Solid",K:"Solid",g:"#EDDD79",L:"Solid",M:1,w:"",N:1,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",bF:"191",C:"#D8DDE4",z:2,O:1,D:"#D8DDE4",P:1,a:0,b:0},"168":{G:"#000000",aU:8,c:144,aV:8,d:26,r:"inline",e:0.33153678797468361,s:"Futura,Verdana,sans-serif",t:18,Z:"break-word",w:"Event Production<br>",bF:"166",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,aT:8,a:10,b:133},"187":{G:"#680A02",aU:8,c:91,aV:8,d:36,r:"inline",s:"Copperplate,sans-serif",t:30,Z:"break-word",w:"Adept",bF:"182",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:68,b:349},"201":{aV:8,w:"NOISY",x:"visible",a:260,Z:"break-word",b:22,y:"preserve",j:"absolute",z:2,yy:"nowrap",s:"Chalkduster,Papyrus,fantasy",aT:8,k:"div",bF:"202",aS:8,t:40,aU:8,G:"#000000",r:"inline"},"174":{G:"#081208",aU:8,aV:8,r:"inline",e:1,s:"Futura,Verdana,sans-serif",t:400,Z:"break-word",w:"A",bF:"163",A:"#000000",x:"visible",yy:"nowrap",B:"#000000",y:"preserve",j:"absolute",C:"#000000",z:5,k:"div",D:"#000000",aS:8,aT:8,a:-67,b:85},"193":{b:492,G:"#000000",c:161,aU:8,d:448,aV:8,r:"inline",s:"Chalkduster,Papyrus,fantasy",t:20,Z:"break-word",w:"Musician, Audiophile, Sound Engineer, Violinist, Multi Instrumentalist, Dancer, Live Looper, Guitar, Bass, Drums, Orch Dork, Indie Bander, Performer, ",bF:"191",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,tX:0.5,aT:8,a:29.5,tY:0.5},"169":{G:"#000000",aU:8,c:258,aV:8,d:26,r:"inline",s:"Futura,Verdana,sans-serif",t:18,Z:"break-word",w:"",bF:"166",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:10,b:117},"180":{G:"#FFFFFF",aU:8,c:279,aV:8,d:597,r:"inline",s:"'Helvetica Neue',Arial,Helvetica,Sans-Serif",t:500,Z:"break-word",w:"L<br>",bF:"175",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:-22,b:-136},"188":{G:"#680A02",aU:8,c:182,aV:8,d:36,r:"inline",s:"Copperplate,sans-serif",t:15,Z:"break-word",w:"7 Years Professional Experience",bF:"182",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:27,b:5},"202":{k:"div",x:"visible",c:295,d:98,z:9,a:0,j:"absolute",bF:"191",b:411},"175":{A:"#AA9D95",B:"#AA9D95",x:"visible",a:220,C:"#AA9D95",b:-44,j:"absolute",D:"#AA9D95",z:25,k:"div",dB:"button",d:527,c:230,aB:{a:[{p:4,h:"138"}]}},"194":{aU:8,G:"#FFFDF2",c:200,H:"none",d:383,aV:8,r:"inline",s:"Futura,Verdana,sans-serif",f:0,t:350,Z:"break-word",v:"normal",aY:0,w:"N<br>",bF:"199",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,aT:8,a:0,b:633},"181":{c:407,d:543,I:"Solid",e:0.52561313291139244,J:"Solid",K:"Solid",g:"#363738",L:"Solid",M:1,N:1,A:"#000000",x:"visible",j:"absolute",B:"#000000",k:"div",O:1,C:"#000000",z:7,P:1,D:"#000000",a:-123,b:0},"189":{G:"#680A02",aU:8,c:182,aV:8,d:36,r:"inline",s:"Copperplate,sans-serif",t:15,Z:"break-word",w:"20+ Previous Clients, and Companies ",bF:"182",j:"absolute",x:"visible",k:"div",y:"preserve",z:5,aS:8,aT:8,a:27,b:43},"203":{c:214,d:107,I:"Solid",e:0.54816060126582278,J:"Solid",K:"Solid",g:"#FFFBF6",L:"Solid",M:1,N:1,bF:"163",A:"#CED3DA",x:"visible",j:"absolute",B:"#CED3DA",k:"div",O:1,C:"#CED3DA",z:3,P:1,D:"#CED3DA",a:4,b:462},"176":{b:-249,G:"#000000",aU:8,c:13,d:274,aV:8,r:"inline",e:1,s:"'Courier New',Courier,Monospace",t:35,Z:"break-word",v:"bold",w:"Learner<br>",bF:"175",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,tX:0.5,aT:8,a:180,tY:0.5},"195":{aU:8,G:"#FFFDF2",c:200,H:"none",d:383,aV:8,r:"inline",s:"Futura,Verdana,sans-serif",f:0,t:350,Z:"break-word",v:"normal",aY:0,w:"N<br>",bF:"199",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:0,b:183},"163":{x:"visible",k:"div",c:230,d:538,z:15,e:1,a:-3,j:"absolute",f:0,b:-8},"182":{x:"visible",k:"div",aD:{a:[{b:"106",p:3,z:false,symbolOid:"2"}]},c:229,d:540,z:30,e:1,a:440,aC:{a:[{b:"106",p:3,z:true,symbolOid:"2"}]},j:"absolute",b:0},"177":{c:223,d:538,I:"None",J:"None",K:"None",g:"#482A45",L:"None",M:0,w:"",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",bF:"175",C:"#D8DDE4",z:1,O:0,D:"#D8DDE4",P:0,a:0,b:0},"196":{aU:8,G:"#FFFDF2",c:200,H:"none",d:383,aV:8,r:"inline",s:"Futura,Verdana,sans-serif",f:0,t:350,Z:"break-word",v:"normal",w:"N<br>",bF:"199",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:0,b:633},"164":{b:22.5,G:"#FFFEF5",aU:8,aV:8,r:"inline",e:1,s:"Futura,Verdana,sans-serif",f:270,t:400,Z:"break-word",w:"A",bF:"163",A:"#000000",yy:"nowrap",x:"visible",j:"absolute",y:"preserve",k:"div",C:"#000000",z:6,B:"#000000",D:"#000000",aS:8,tX:0.5,aT:8,a:305.5,tY:0.5},"183":{G:"#FFFDF3",aU:8,c:193,H:"none",d:328,aV:8,r:"inline",s:"Copperplate,sans-serif",t:400,Z:"break-word",w:"aA",bF:"182",A:"#000000",x:"visible",j:"absolute",B:"#000000",y:"preserve",k:"div",C:"#000000",z:7,aS:8,D:"#000000",aT:8,a:0,b:31},"170":{G:"#000000",aU:8,c:258,aV:8,d:26,r:"inline",e:0.66742484177215189,s:"Futura,Verdana,sans-serif",t:18,Z:"break-word",w:"Full Stack Development<br>",bF:"166",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,aT:8,a:5,b:55},"178":{c:221,d:500,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,w:"",N:1,A:"#D8DDE4",O:1,x:"visible",j:"absolute",k:"div",aB:{a:[{b:"143",p:3,z:false,symbolOid:"2"}]},dB:"button",z:5,C:"#D8DDE4",D:"#D8DDE4",aC:{a:[{b:"76",p:3,z:true,symbolOid:"2"}]},B:"#D8DDE4",bF:"175",P:1,a:0,aD:{a:[{b:"76",p:3,z:false,symbolOid:"2"}]},b:0},"197":{c:265,d:68,I:"Solid",J:"Solid",K:"Solid",g:"#EDDD79",L:"Solid",M:15,N:15,bF:"202",A:"#FFFDF1",x:"visible",j:"absolute",O:15,k:"div",B:"#FFFDF1",C:"#FFFDF1",Q:0,z:1,D:"#FFFDF1",R:"rgba(0, 0, 0, 0.169)",P:15,S:-4,a:225,T:-8,b:0},"165":{c:230,d:538,I:"None",cY:"0",r:"inline",J:"None",f:0,K:"None",g:"#FFFEF6",L:"None",M:0,w:"",N:0,A:"#D8DDE4",x:"visible",j:"absolute",k:"div",O:0,B:"#D8DDE4",C:"#D8DDE4",z:2,bF:"163",D:"#D8DDE4",P:0,a:0,b:0},"184":{c:235,d:582,I:"Solid",J:"Solid",K:"Solid",g:"#680902",L:"Solid",M:1,w:"",N:1,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",bF:"182",C:"#D8DDE4",z:1,O:1,D:"#D8DDE4",P:1,a:0,b:-44},"171":{G:"#000000",aU:8,c:169,aV:8,d:26,r:"inline",e:0.40738726265822778,s:"Futura,Verdana,sans-serif",t:18,Z:"break-word",w:"Community Building<br>",bF:"166",j:"absolute",x:"visible",k:"div",y:"preserve",z:5,aS:8,aT:8,a:34,b:169},"179":{b:68,G:"#FFFEF5",aU:8,c:304,d:454,aV:8,r:"inline",e:0,s:"'Courier New',Courier,Monospace",f:0,t:20,g:"",Z:"break-word",aY:40,w:"PHP, Apache, Linux, Nginx, MYSQL, MongoDB, Javascript, HTML/CSS, Laravel, Silex, Zend, Phalcon, Vue.js, Meteor.js,   Vagrant, Jquery, Bootstrap, Foundation, Ableton, Hype Tumult, Tone.js, ORM, PDO, Domain Driven Design, Agile, SCRUM, German, Spanish, Japanese, Violin, Wordpress, Magento, AWS, APIs, Payment Processors, C++, Java, XML, REST API, Animation, Sound design, PHPUnit, Node.js, Bolt, Blade, Angular.js, Canva, \n ",bF:"175",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:-20,F:"left",bR:0},"190":{G:"#680A02",aU:8,c:182,aV:8,d:36,r:"inline",s:"Copperplate,sans-serif",t:15,Z:"break-word",w:"Passionate about Innovative Creation\n",bF:"182",j:"absolute",x:"visible",k:"div",y:"preserve",z:6,aS:8,aT:8,a:23,b:86},"198":{aU:8,G:"#FFFDF2",c:200,H:"none",d:383,aV:8,r:"inline",s:"Futura,Verdana,sans-serif",f:0,t:350,Z:"break-word",v:"normal",w:"N<br>",bF:"199",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,aT:8,a:0,b:0},"166":{x:"visible",k:"div",c:284,d:211,z:8,e:0,a:15,j:"absolute",bF:"163",b:43},"185":{G:"",c:348,d:543,I:"Solid",e:0.52561313291139244,J:"Solid",K:"Solid",g:"#363738",L:"Solid",M:1,w:"",N:1,A:"#000000",x:"visible",j:"absolute",k:"div",O:1,B:"#000000",C:"#000000",z:9,P:1,D:"#000000",a:-123,b:0}}}],{},g,{},null,false,true,-1,true,true,true,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
