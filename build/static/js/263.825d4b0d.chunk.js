(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[263],{1244:function(e,a,t){},1691:function(e,a,t){"use strict";t.r(a);var l=t(10),n=t(11),c=t(13),r=t(12),o=t(0),s=t.n(o),m=t(822),u=t(823),i=t(104),d=t(824),b=t(825),p=t(826),E=t(827),f=t(848),h=t(838),v=t(812),x=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement(d.a,null,s.a.createElement(b.a,null,s.a.createElement(p.a,null,"Reactstrap Select")),s.a.createElement(E.a,null,s.a.createElement(m.a,null,s.a.createElement(u.a,{md:"6",sm:"12",className:"my-1"},s.a.createElement(f.a,null,s.a.createElement("h5",{className:"text-bold-600"},"Basic Select"),s.a.createElement(h.a,{type:"select",name:"select",id:"exampleSelect"},s.a.createElement("option",null,"Pulp Fiction"),s.a.createElement("option",null,"Nightcrawler"),s.a.createElement("option",null,"Donnie Darko")))),s.a.createElement(u.a,{md:"6",sm:"12",className:"my-1"},s.a.createElement(f.a,null,s.a.createElement("h5",{className:"text-bold-600"},"Custom Select"),s.a.createElement(v.a,{type:"select",name:"select",id:"exampleSelectCustom"},s.a.createElement("option",null,"Pulp Fiction"),s.a.createElement("option",null,"Nightcrawler"),s.a.createElement("option",null,"Donnie Darko")))),s.a.createElement(u.a,{md:"6",sm:"12",className:"my-1"},s.a.createElement(f.a,null,s.a.createElement("h5",{className:"text-bold-600"},"Multi Select"),s.a.createElement(h.a,{type:"select",name:"select",id:"exampleSelectMulti",multiple:!0},s.a.createElement("option",null,"Square"),s.a.createElement("option",null,"Rectangle"),s.a.createElement("option",null,"Circle"),s.a.createElement("option",null,"Triangle"),s.a.createElement("option",null,"Pentagon")))),s.a.createElement(u.a,{md:"6",sm:"12",className:"my-1"},s.a.createElement(f.a,null,s.a.createElement("h5",{className:"text-bold-600"},"Disabled Select"),s.a.createElement(h.a,{type:"select",name:"select",id:"exampleSelectDisabled",disabled:!0},s.a.createElement("option",null,"Pulp Fiction"),s.a.createElement("option",null,"Nightcrawler"),s.a.createElement("option",null,"Donnie Darko")))))))}}]),t}(s.a.Component),O=t(1144),N=[{value:"ocean",label:"Ocean"},{value:"blue",label:"Blue"},{value:"purple",label:"Purple"},{value:"red",label:"Red"},{value:"orange",label:"Orange"}],y=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement(d.a,null,s.a.createElement(b.a,null,s.a.createElement(p.a,null,"React Select")),s.a.createElement(E.a,null,s.a.createElement("p",null,"React Select is a flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support. You can read it's documentation from "," ",s.a.createElement("a",{className:"my-50",target:"_blank",href:"https://react-select.com/home",rel:"noopener noreferrer"},"here"),"."),s.a.createElement(m.a,null,s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement("h5",{className:"my-1 text-bold-600"},"Basic"),s.a.createElement(O.a,{className:"React",classNamePrefix:"select",defaultValue:N[0],name:"color",options:N})),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement("h5",{className:"my-1 text-bold-600"},"Clearable"),s.a.createElement(O.a,{className:"React",classNamePrefix:"select",defaultValue:N[1],name:"clear",options:N,isClearable:!0})),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement("h5",{className:"my-1 text-bold-600"},"Loading"),s.a.createElement(O.a,{className:"React",classNamePrefix:"select",defaultValue:N[2],name:"loading",options:N,isLoading:!0})),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement("h5",{className:"my-1 text-bold-600"},"Disabled"),s.a.createElement(O.a,{className:"React",classNamePrefix:"select",defaultValue:N[3],name:"disabled",options:N,isDisabled:!0})))))}}]),t}(s.a.Component),g=t(3),j=t(1524),C=t(1528),S=t(1309),F=t.n(S),P=[{value:"ocean",label:"Ocean",color:"#00B8D9",isFixed:!0},{value:"blue",label:"Blue",color:"#0052CC",isFixed:!0},{value:"purple",label:"Purple",color:"#5243AA",isFixed:!0},{value:"red",label:"Red",color:"#FF5630",isFixed:!1},{value:"orange",label:"Orange",color:"#FF8B00",isFixed:!1},{value:"yellow",label:"Yellow",color:"#FFC400",isFixed:!1}],k=[{label:"Ice Creams",options:[{value:"vanilla",label:"Vanilla"},{value:"Dark Chocolate",label:"Dark Chocolate"},{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"salted-caramel",label:"Salted Caramel"}]},{label:"Snacks",options:[{value:"Pizza",label:"Pizza"},{value:"Burger",label:"Burger"},{value:"Pasta",label:"Pasta"},{value:"Pretzel",label:"Pretzel"},{value:"Popcorn",label:"Popcorn"}]}],R=Object(j.a)(),w={control:function(e){return Object(g.a)(Object(g.a)({},e),{},{backgroundColor:"white"})},option:function(e,a){var t=a.data,l=a.isDisabled,n=a.isFocused,c=a.isSelected,r=F()(t.color);return Object(g.a)(Object(g.a)({},e),{},{backgroundColor:l?null:c?t.color:n?r.alpha(.1).css():null,color:l?"#ccc":c?F.a.contrast(r,"white")>2?"white":"black":t.color,cursor:l?"not-allowed":"default",":active":Object(g.a)(Object(g.a)({},e[":active"]),{},{backgroundColor:!l&&(c?t.color:r.alpha(.3).css())})})},multiValue:function(e,a){var t=a.data,l=F()(t.color);return Object(g.a)(Object(g.a)({},e),{},{backgroundColor:l.alpha(.1).css()})},multiValueLabel:function(e,a){var t=a.data;return Object(g.a)(Object(g.a)({},e),{},{color:t.color})},multiValueRemove:function(e,a){var t=a.data;return Object(g.a)(Object(g.a)({},e),{},{color:t.color,":hover":{backgroundColor:t.color,color:"white"}})}},V={multiValue:function(e,a){return a.data.isFixed?Object(g.a)(Object(g.a)({},e),{},{opacity:"0.5"}):e},multiValueLabel:function(e,a){return a.data.isFixed?Object(g.a)(Object(g.a)({},e),{},{color:"#626262",paddingRight:6}):e},multiValueRemove:function(e,a){return a.data.isFixed?Object(g.a)(Object(g.a)({},e),{},{display:"none"}):e}},D=function(e){if(e.length>0)return e.filter((function(e){return e.isFixed})).concat(e.filter((function(e){return!e.isFixed})))},M=function(e){return s.a.createElement("div",{className:"d-flex justify-content-between align-center"},s.a.createElement("strong",null,s.a.createElement("span",null,e.label)),s.a.createElement("span",null,e.options.length))},B=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={value:D([P[0],P[1],P[3]])},e.handleChange=function(e){P.concat(e)},e.handleInputChange=function(){console.group("Input Changed"),console.groupEnd()},e.fixedOnChange=function(a,t){var l=t.action,n=t.removedValue;switch(l){case"remove-value":case"pop-value":if(n.isFixed)return;break;case"clear":a=P.filter((function(e){return e.isFixed}));break;default:return}a=D(a),e.setState({value:a})},e}return Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement(d.a,null,s.a.createElement(b.a,null,s.a.createElement(p.a,null,"Options")),s.a.createElement(E.a,null,s.a.createElement(m.a,null,s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement("h5",{className:"text-bold-600 my-1"},"Multi Select 123"),s.a.createElement(O.a,{defaultValue:[P[2],P[3]],isMulti:!0,name:"colors",options:P,className:"React",classNamePrefix:"select"})),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement("h5",{className:"text-bold-600 my-1"},"Grouped Select"),s.a.createElement(O.a,{defaultValue:P[1],options:k,formatGroupLabel:M,className:"React",classNamePrefix:"select"})),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement("h5",{className:"text-bold-600 my-1"},"Animated Select"),s.a.createElement(O.a,{closeMenuOnSelect:!1,components:R,defaultValue:[P[4],P[5]],isMulti:!0,options:P,className:"React",classNamePrefix:"select"})),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement("h5",{className:"text-bold-600 my-1"},"Colored Select"),s.a.createElement(O.a,{closeMenuOnSelect:!1,defaultValue:[P[0],P[1]],isMulti:!0,options:P,styles:w,className:"React",classNamePrefix:"select"})),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement("h5",{className:"text-bold-600 my-1"},"Creatable Select"),s.a.createElement(C.a,{isClearable:!0,options:P,className:"React",classNamePrefix:"select"})),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement("h5",{className:"text-bold-600 my-1"},"Fixed Options Select"),s.a.createElement(O.a,{value:this.state.value,isMulti:!0,styles:V,isClearable:this.state.value.some((function(e){return!e.isFixed})),name:"colors",className:"React",classNamePrefix:"select",onChange:this.fixedOnChange,options:P})))))}}]),t}(s.a.Component),z=(t(1244),function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,{breadCrumbTitle:"Select",breadCrumbParent:"Form Elements",breadCrumbActive:"Select"}),s.a.createElement(m.a,null,s.a.createElement(u.a,{sm:"12"},s.a.createElement(y,null)),s.a.createElement(u.a,{sm:"12"},s.a.createElement(B,null)),s.a.createElement(u.a,{sm:"12"},s.a.createElement(x,null))))}}]),t}(s.a.Component));a.default=z}}]);
//# sourceMappingURL=263.825d4b0d.chunk.js.map