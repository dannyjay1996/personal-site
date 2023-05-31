"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[795],{4795:function(e,i,t){t.r(i),t.d(i,{default:function(){return j}});var n=t(9439),a=(t(2791),t(6842)),r=t(184),o=function(e){var i=e.data;return(0,r.jsx)("article",{className:"degree-container",children:(0,r.jsxs)("header",{children:[(0,r.jsx)("h4",{className:"degree",children:i.degree}),(0,r.jsxs)("p",{className:"school",children:[(0,r.jsx)("a",{href:i.link,children:i.school}),", ",i.year,".      GPA: ",i.GPA]})]})})},s=function(e){var i=e.data;return(0,r.jsxs)("div",{className:"education",children:[(0,r.jsx)("div",{className:"link-to",id:"education"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h3",{children:"Education"})}),i.map((function(e){return(0,r.jsx)(o,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,c=t(2773),h=function(e){var i=e.data,t=i.name,n=i.url,a=i.startDate,o=i.summary,s=i.highlights;return(0,r.jsxs)("article",{className:"jobs-container",children:[(0,r.jsxs)("header",{children:[(0,r.jsx)("h4",{children:(0,r.jsx)("a",{href:n,children:t})}),(0,r.jsxs)("p",{className:"daterange",children:[" ",a]})]}),o?(0,r.jsx)(c.Z,{options:{overrides:{p:{props:{className:"summary"}}}},children:o}):null,s?(0,r.jsx)("ul",{className:"points",children:s.map((function(e){return(0,r.jsx)("li",{children:e},e)}))}):null]})},d=function(e){var i=e.data;return(0,r.jsxs)("div",{className:"experience",children:[(0,r.jsx)("div",{className:"link-to",id:"experience"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h3",{children:"Project Experiences"})}),i.map((function(e){return(0,r.jsx)(h,{data:e},"".concat(e.name,"-").concat(e.position))}))]})};d.defaultProps={data:[]};var p=d,u=[{school:"The Chinese University of Hong Kong",degree:"Ph.D. Mechanical and Automation Engineering \uff08CUHK)",link:"https://en.wikipedia.org/wiki/Chinese_University_of_Hong_Kong",year:"Aug 2018 - May 2023",GPA:"3.787/4.0"},{school:"Purdue University",degree:"M.S. Mechanical Engineering",link:"https://en.wikipedia.org/wiki/Purdue_University",year:"Aug 2016 - May 2018",GPA:"3.823/4.0"},{school:"Shanghai Jiao Tong University (SJTU)",degree:"B.S. Mechanical Engineering",link:"https://en.wikipedia.org/wiki/Shanghai_Jiao_Tong_University",year:"Sep 2013 - Jul 2017",GPA:"3.79/4.0"}],g=[{name:"Towards Agile Maneuver for Terrestrial Robots with Spatial Morphable Inertial Appendage",position:"Ph.D.",url:"/Porjects/RoboticTail",startDate:"Sep 2018 - Jan 2023",summary:"Project Description: My Ph.D. thesis project, the objective is to propose novel spatial morphable inertial tail designs with\n    enhanced inertial adjustment capability in three-dimension (3D) space and investigate its capability in assisting agile\n    maneuvers for terrestrial robots. (Supervisor: Prof. AU Kwok Wai Samuel, CUHK)",highlights:[]},{name:"A Novel 3-DoF Large Force Haptic Device for the Wrist Motion",position:"Ph.D.",url:"/Porjects/HapticWrist",startDate:"Sep 2018 - Jan 2023",summary:"Project Description: Personal proposed project, the objective is to design a haptic device capable of providing large output\n    forces, low inertia, high force transparency, high stiffness, and a large range of motion. The project targets potential\n    applications in VR devices, teleoperation masters, and exoskeletons. (CUHK)",highlights:[]},{name:"Teleoperated Legged-Manipulator with Replaceable Instruments",position:"Ph.D.",url:"/Porjects/TeleRepIns",startDate:"Jan 2023 - Until Now",summary:"Project Description: Lab project, we aim at developing a teleoperated legged-manipulator robot system with replaceable\n    instruments for the application in hospitals and logistics warehouses. Now I am the mechanical design group leader.\n    (Supervisor: Prof. AU Kwok Wai Samuel, CUHK)",highlights:[]},{name:"Humanoid Leg Design Based on Parallel Mechanism",position:"Ph.D.",url:"/Porjects/HumanoidLeg",startDate:"Oct 2019 - Until Now",summary:"Project Description: Personal proposed project, the objective is to enhance the performance of humanoid leg joints using\n    parallel mechanisms. In the latest design, I propose the utilization of three motors in the hip joint of the leg to collectively\n    drive the hip pitch movement. (CUHK)",highlights:[]},{name:"Design of a Humanoid Dexterous robot hand",position:"Ph.D.",url:"/Porjects/DexterousHand",startDate:"Jun 2017 - Aug 2017",summary:"Project Description: Lab project, the objective is to develop an innovative drive-by-wire approach for humanoid robot\n    finger design, while simultaneously increasing the degree of freedom (DoF) of the robot hand from 13 to 22. Additionally, \n    we aim to integrate new angle sensors, haptic sensors, and temperature sensors into the design of the robot hand. \n    (Supervisor: Prof. Fuchun Sun, IEEE Fellow, Tsinghua University)",highlights:[]},{name:"A Human-Robot Interactive System Based on Hand Gesture Recognition",position:"Ph.D.",startDate:"Jan 2017 - May 2017",summary:"Project Description: Lab project, the objective is to establish a mutual interactive function between a computer camera and \n    a robotic hand. This system aims to achieve real-time recognition (within 0.05 seconds) of hand gestures, specifically Rock,  \n    Scissors, and Paper. I am the project group leader. (Supervisor: Liang Gong, SJTU)",highlights:[]},{name:"Design of Foldable Four-rotor Unmanned Aerial Vehicles (UAV)",position:"Ph.D.",url:"/Porjects/FoldableUAV",startDate:"Apr 2015 - Aug 2015",summary:"Project Description: Course project, the objective is to develop foldable models of four-rotor UAVs and design their  \n    internal mechanisms for structural coordination and synchronization. I am the project group leader. (Supervisor: Xinming   \n    Zhao, SJTU)",highlights:[]},{name:"Object Recognition and Intelligent Grasping Based on NAO Robot Vision",position:"Ph.D.",startDate:"Feb 2014 - Jul 2014",summary:"Project Description: Lab project, the objective is to program the route planning and grasping motion trajectory planning  \n    strategies for the NAO robot. I am the project group leader. (Supervisor: Chuntao Leng, SJTU)",highlights:[]}],m={Education:function(){return(0,r.jsx)(l,{data:u})},Experience:function(){return(0,r.jsx)(p,{data:g})}},j=function(){return(0,r.jsx)(a.Z,{title:"Resume",description:"Jiajun An's Resume. ",fullPage:"true",children:(0,r.jsx)("article",{className:"post",id:"resume",children:Object.entries(m).map((function(e){var i=(0,n.Z)(e,2),t=i[0],a=i[1];return(0,r.jsx)(a,{},t)}))})})}}}]);
//# sourceMappingURL=795.b5767455.chunk.js.map