(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[212],{2440:function(e,a,t){"use strict";t.r(a),t.d(a,"EditBrand",(function(){return O}));var n=t(46),s=t(10),r=t(11),i=t(13),l=t(12),o=t(0),c=t.n(o),d=t(824),u=t(822),p=t(823),m=t(194),f=t(827),h=t(841),b=t(840),g=t(838),v=(t(22),t(185)),y=t(62),O=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.handleChange=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){var a,t;e.preventDefault();var n=r.props.match.params.id,s=JSON.parse(localStorage.getItem("userData")),i=new FormData;i.append("user_id",null===s||void 0===s||null===(a=s.Userinfo)||void 0===a?void 0:a.id),i.append("role",null===s||void 0===s||null===(t=s.Userinfo)||void 0===t?void 0:t.role),i.append("brand_name",r.state.name),i.append("description",r.state.desc),i.append("status",r.state.status),i.append("brand_id",n),v.a.post("/editbrandsubmit",i).then((function(e){(null===e||void 0===e?void 0:e.data.success)&&r.props.history.push("/app/freshlist/brand/brandList")})).catch((function(e){console.log(e)}))},r.state={name:"",desc:"",brand_img:"",status:"",selectedFile:null,selectedName:""},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e,a,t=this;console.log(window);var n=this.props.match.params.id,s=JSON.parse(localStorage.getItem("userData")),r=new FormData;r.append("user_id",null===s||void 0===s||null===(e=s.Userinfo)||void 0===e?void 0:e.id),r.append("role",null===s||void 0===s||null===(a=s.Userinfo)||void 0===a?void 0:a.role),r.append("brand_id",n),v.a.post("/getviewbrand",r).then((function(e){var a,n,s,r;console.log(null===(a=e.data)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.brands[0]);var i=null===(s=e.data)||void 0===s||null===(r=s.data)||void 0===r?void 0:r.brands[0];t.setState({name:null===i||void 0===i?void 0:i.brand_name,desc:i.description,status:i.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d.a,null,c.a.createElement(u.a,{className:"m-2"},c.a.createElement(p.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Brand")),c.a.createElement(p.a,null,c.a.createElement(y.b,{render:function(e){var a=e.history;return c.a.createElement(m.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/brand/brandList")}},"Back")}}))),c.a.createElement(f.a,null,c.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(u.a,{className:"mb-2"},c.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},c.a.createElement(b.a,null,"Brand Name"),c.a.createElement(g.a,{type:"text",placeholder:"Branch Name",name:"name",value:this.state.name,onChange:this.changeHandler})),c.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},c.a.createElement(b.a,null,"Description"),c.a.createElement(g.a,{type:"text",placeholder:"Description",name:"desc",value:this.state.desc,onChange:this.changeHandler})),c.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},c.a.createElement(b.a,{className:"mb-1"},"Status"),c.a.createElement("div",{className:"form-label-group",onChange:this.handleChange},c.a.createElement("input",{checked:"Active"===this.state.status,style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),c.a.createElement("span",{style:{marginRight:"20px"}},"Active"),c.a.createElement("input",{checked:"Deactive"===this.state.status,style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),c.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),c.a.createElement(u.a,null,c.a.createElement(m.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update Brand"))))))}}]),t}(o.Component);a.default=O},838:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(18),i=t(19),l=t(0),o=t.n(l),c=t(2),d=t.n(c),u=t(5),p=t.n(u),m=t(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:m.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,i=e.bsSize,l=e.valid,c=e.invalid,d=e.tag,u=e.addon,h=e.plaintext,b=e.innerRef,g=Object(s.a)(e,f),v=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),O=d||("select"===r||"textarea"===r?r:"input"),E="form-control";h?(E+="-plaintext",O=d||"input"):"file"===r?E+="-file":"range"===r?E+="-range":v&&(E=u?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var j=Object(m.mapToCssModules)(p()(a,c&&"is-invalid",l&&"is-valid",!!i&&"form-control-"+i,E),t);return("input"===O||d&&"function"===typeof d)&&(g.type=r),g.children&&!h&&"select"!==r&&"string"===typeof O&&"select"!==O&&(Object(m.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(O,Object(n.a)({},g,{ref:b,className:j,"aria-invalid":c}))},a}(o.a.Component);b.propTypes=h,b.defaultProps={type:"text"},a.a=b},840:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(0),i=t.n(r),l=t(2),o=t.n(l),c=t(5),d=t.n(c),u=t(4),p=["className","cssModule","hidden","widths","tag","check","size","for"],m=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:m,order:m,offset:m})]),h={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.hidden,l=e.widths,o=e.tag,c=e.check,m=e.size,f=e.for,h=Object(s.a)(e,p),b=[];l.forEach((function(a,n){var s=e[a];if(delete h[a],s||""===s){var r,i=!n;if(Object(u.isObject)(s)){var l,o=i?"-":"-"+a+"-";r=g(i,a,s.size),b.push(Object(u.mapToCssModules)(d()(((l={})[r]=s.size||""===s.size,l["order"+o+s.order]=s.order||0===s.order,l["offset"+o+s.offset]=s.offset||0===s.offset,l))),t)}else r=g(i,a,s),b.push(r)}}));var v=Object(u.mapToCssModules)(d()(a,!!r&&"sr-only",!!c&&"form-check-label",!!m&&"col-form-label-"+m,b,!!b.length&&"col-form-label"),t);return i.a.createElement(o,Object(n.a)({htmlFor:f},h,{className:v}))};v.propTypes=h,v.defaultProps=b,a.a=v},841:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(18),i=t(19),l=t(0),o=t.n(l),c=t(2),d=t.n(c),u=t(5),p=t.n(u),m=t(4),f=["className","cssModule","inline","tag","innerRef"],h={children:d.a.node,inline:d.a.bool,tag:m.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,i=e.tag,l=e.innerRef,c=Object(s.a)(e,f),d=Object(m.mapToCssModules)(p()(a,!!r&&"form-inline"),t);return o.a.createElement(i,Object(n.a)({},c,{ref:l,className:d}))},a}(l.Component);b.propTypes=h,b.defaultProps={tag:"form"},a.a=b}}]);
//# sourceMappingURL=212.cb272794.chunk.js.map