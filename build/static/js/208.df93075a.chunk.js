(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[208],{2454:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return b}));var n=t(40),l=t(0),o=t.n(l),s=t(822),c=t(823),r=t(824),i=t(194),d=t(841),m=t(840),u=t(838),f=t(62);function b(){var e=Object(l.useState)(""),a=Object(n.a)(e,2),t=a[0],b=a[1],p=Object(l.useState)(""),v=Object(n.a)(p,2),g=v[0],h=v[1],E=Object(l.useState)(""),O=Object(n.a)(E,2),j=O[0],y=O[1],N=Object(l.useState)(""),x=Object(n.a)(N,2),z=x[0],R=x[1],S=Object(l.useState)(""),T=Object(n.a)(S,2),C=T[0],M=T[1],k=Object(l.useState)(""),w=Object(n.a)(k,2),P=w[0],F=w[1],A=Object(l.useState)(""),D=Object(n.a)(A,2),J=D[0],B=D[1],I=Object(l.useState)(""),L=Object(n.a)(I,2),V=L[0],Y=L[1],q=Object(f.g)();return Object(l.useEffect)((function(){var e,a,t,n,l,o,s,c,r,i,d,m,u,f,p,v;h(null===q||void 0===q||null===(e=q.location)||void 0===e||null===(a=e.data)||void 0===a?void 0:a.email),b(null===q||void 0===q||null===(t=q.location)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.name),y(null===q||void 0===q||null===(l=q.location)||void 0===l||null===(o=l.data)||void 0===o?void 0:o.services),R(null===q||void 0===q||null===(s=q.location)||void 0===s||null===(c=s.data)||void 0===c?void 0:c.mobileNo),M(null===q||void 0===q||null===(r=q.location)||void 0===r||null===(i=r.data)||void 0===i?void 0:i.category),F(null===q||void 0===q||null===(d=q.location)||void 0===d||null===(m=d.data)||void 0===m?void 0:m.subCategoryName),B(null===q||void 0===q||null===(u=q.location)||void 0===u||null===(f=u.data)||void 0===f?void 0:f.enrollmentYear),Y(null===q||void 0===q||null===(p=q.location)||void 0===p||null===(v=p.data)||void 0===v?void 0:v.city)}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{className:""},o.a.createElement(c.a,{xl:12},o.a.createElement(r.a,null,o.a.createElement(s.a,null,o.a.createElement(c.a,{className:"m-1"},o.a.createElement("h3",{className:"py-2"},"Advocate Detail ")),o.a.createElement(c.a,{className:"m-1"},o.a.createElement(i.a,{className:" btn btn-danger float-right ",onClick:function(){return q.push("/app/CaseFinder/account/AdvocateList")}},"Back"))),o.a.createElement("div",{className:"container"}),o.a.createElement(d.a,null,o.a.createElement("div",{className:"container mt-2"},o.a.createElement(s.a,{className:"mb-3 container"},o.a.createElement(c.a,{lg:"6",md:"6",sm:"12"},o.a.createElement(m.a,null,"Name"),o.a.createElement(u.a,{type:"text",disabled:!0,name:"name",value:t,className:"form-control"})),o.a.createElement(c.a,{lg:"6",md:"6",sm:"12"},o.a.createElement(m.a,null,"Phone No"),o.a.createElement(u.a,{type:"number",disabled:!0,name:"phone",value:z,className:"form-control"})),o.a.createElement(c.a,{lg:"6",md:"6",sm:"12"},o.a.createElement(m.a,null,"Services"),o.a.createElement(u.a,{type:"text",disabled:!0,name:"services",value:j,className:"form-control"})),o.a.createElement(c.a,{lg:"6",md:"6",sm:"12"},o.a.createElement(m.a,null,"Email"),o.a.createElement(u.a,{type:"email",disabled:!0,name:"Email",value:g,className:"form-control"})),o.a.createElement(c.a,{lg:"6",md:"6",sm:"12"},o.a.createElement(m.a,null,"City"),o.a.createElement(u.a,{type:"text",disabled:!0,name:"city",value:V,className:"form-control"})),o.a.createElement(c.a,{lg:"6",md:"6",sm:"12"},o.a.createElement(m.a,null,"Enrollment"),o.a.createElement(u.a,{type:"number",disabled:!0,name:"enrollment",value:J,className:"form-control"})),o.a.createElement(c.a,{lg:"6",md:"6",sm:"12"},o.a.createElement(m.a,null,"Category"),o.a.createElement(u.a,{type:"text",disabled:!0,name:"category",value:C,className:"form-control"})),o.a.createElement(c.a,{lg:"6",md:"6",sm:"12"},o.a.createElement(m.a,null,"SubCategory"),o.a.createElement(u.a,{type:"text",disabled:!0,name:"SubCategory",value:P,className:"form-control"})))))))))}},838:function(e,a,t){"use strict";var n=t(6),l=t(7),o=t(18),s=t(19),c=t(0),r=t.n(c),i=t(2),d=t.n(i),m=t(5),u=t.n(m),f=t(4),b=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],p={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:f.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},v=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.focus=t.focus.bind(Object(o.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.type,s=e.bsSize,c=e.valid,i=e.invalid,d=e.tag,m=e.addon,p=e.plaintext,v=e.innerRef,g=Object(l.a)(e,b),h=["radio","checkbox"].indexOf(o)>-1,E=new RegExp("\\D","g"),O=d||("select"===o||"textarea"===o?o:"input"),j="form-control";p?(j+="-plaintext",O=d||"input"):"file"===o?j+="-file":"range"===o?j+="-range":h&&(j=m?null:"form-check-input"),g.size&&E.test(g.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=g.size,delete g.size);var y=Object(f.mapToCssModules)(u()(a,i&&"is-invalid",c&&"is-valid",!!s&&"form-control-"+s,j),t);return("input"===O||d&&"function"===typeof d)&&(g.type=o),g.children&&!p&&"select"!==o&&"string"===typeof O&&"select"!==O&&(Object(f.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),r.a.createElement(O,Object(n.a)({},g,{ref:v,className:y,"aria-invalid":i}))},a}(r.a.Component);v.propTypes=p,v.defaultProps={type:"text"},a.a=v},840:function(e,a,t){"use strict";var n=t(6),l=t(7),o=t(0),s=t.n(o),c=t(2),r=t.n(c),i=t(5),d=t.n(i),m=t(4),u=["className","cssModule","hidden","widths","tag","check","size","for"],f=r.a.oneOfType([r.a.number,r.a.string]),b=r.a.oneOfType([r.a.bool,r.a.string,r.a.number,r.a.shape({size:f,order:f,offset:f})]),p={children:r.a.node,hidden:r.a.bool,check:r.a.bool,size:r.a.string,for:r.a.string,tag:m.tagPropType,className:r.a.string,cssModule:r.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:r.a.array},v={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,o=e.hidden,c=e.widths,r=e.tag,i=e.check,f=e.size,b=e.for,p=Object(l.a)(e,u),v=[];c.forEach((function(a,n){var l=e[a];if(delete p[a],l||""===l){var o,s=!n;if(Object(m.isObject)(l)){var c,r=s?"-":"-"+a+"-";o=g(s,a,l.size),v.push(Object(m.mapToCssModules)(d()(((c={})[o]=l.size||""===l.size,c["order"+r+l.order]=l.order||0===l.order,c["offset"+r+l.offset]=l.offset||0===l.offset,c))),t)}else o=g(s,a,l),v.push(o)}}));var h=Object(m.mapToCssModules)(d()(a,!!o&&"sr-only",!!i&&"form-check-label",!!f&&"col-form-label-"+f,v,!!v.length&&"col-form-label"),t);return s.a.createElement(r,Object(n.a)({htmlFor:b},p,{className:h}))};h.propTypes=p,h.defaultProps=v,a.a=h},841:function(e,a,t){"use strict";var n=t(6),l=t(7),o=t(18),s=t(19),c=t(0),r=t.n(c),i=t(2),d=t.n(i),m=t(5),u=t.n(m),f=t(4),b=["className","cssModule","inline","tag","innerRef"],p={children:d.a.node,inline:d.a.bool,tag:f.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},v=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.submit=t.submit.bind(Object(o.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.inline,s=e.tag,c=e.innerRef,i=Object(l.a)(e,b),d=Object(f.mapToCssModules)(u()(a,!!o&&"form-inline"),t);return r.a.createElement(s,Object(n.a)({},i,{ref:c,className:d}))},a}(c.Component);v.propTypes=p,v.defaultProps={tag:"form"},a.a=v}}]);
//# sourceMappingURL=208.df93075a.chunk.js.map