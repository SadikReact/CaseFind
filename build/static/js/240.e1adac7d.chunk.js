(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[240],{2445:function(e,a,t){"use strict";t.r(a);var l=t(10),n=t(11),c=t(13),r=t(12),m=t(0),s=t.n(m),u=t(822),i=t(823),o=t(824),E=t(194),d=t(827),h=(t(22),t(919),t(582),t(185)),v=t(62),b=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={data:{}},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;h.a.get("/admin/viewone_addbatch/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e,a,t,l,n,c;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement(u.a,null,s.a.createElement(i.a,{sm:"12"})),s.a.createElement(o.a,{className:"overflow-hidden app-ecommerce-details"},s.a.createElement(u.a,{className:"m-2"},s.a.createElement(i.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View")),s.a.createElement(i.a,null,s.a.createElement(v.b,{render:function(e){var a=e.history;return s.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/batch/batchList")}},"Back")}}))),s.a.createElement(d.a,{className:"pb-0"},s.a.createElement(u.a,{className:"m-2"},s.a.createElement(i.a,{sm:"12",className:"my-1"},s.a.createElement(u.a,{className:"m-3"},s.a.createElement(i.a,{sm:"8"},s.a.createElement(u.a,{className:"m-2"},s.a.createElement(i.a,null,s.a.createElement("h6",null,"Batch Number")),s.a.createElement(i.a,null,s.a.createElement("h6",null,s.a.createElement("b",null,null===(e=this.state.data)||void 0===e?void 0:e.batch)))),s.a.createElement(u.a,{className:"m-2"},s.a.createElement(i.a,null,s.a.createElement("h6",null,"Rack Number")),s.a.createElement(i.a,null,s.a.createElement("h6",null,s.a.createElement("b",null,null===(a=this.state.data)||void 0===a?void 0:a.rack_no)))),s.a.createElement(u.a,{className:"m-2"},s.a.createElement(i.a,null,s.a.createElement("h6",null,"Shelf Life")),s.a.createElement(i.a,null,s.a.createElement("h6",null,s.a.createElement("b",null,null===(t=this.state.data)||void 0===t?void 0:t.shelf_life)))),s.a.createElement(u.a,{className:"m-2"},s.a.createElement(i.a,null,s.a.createElement("h6",null,"Expiry Date")),s.a.createElement(i.a,null,s.a.createElement("h6",null,s.a.createElement("b",null,null===(l=this.state.data)||void 0===l?void 0:l.expiry_date)))),s.a.createElement(u.a,{className:"m-2"},s.a.createElement(i.a,null,s.a.createElement("h6",null,"Stock")),s.a.createElement(i.a,null,s.a.createElement("h6",null,s.a.createElement("b",null,null===(n=this.state.data)||void 0===n?void 0:n.stock)))),s.a.createElement(u.a,{className:"m-2"},s.a.createElement(i.a,null,s.a.createElement("h6",null,"Notify")),s.a.createElement(i.a,null,s.a.createElement("h6",null,s.a.createElement("b",null,null===(c=this.state.data)||void 0===c?void 0:c.notify))))))))))))}}]),t}(s.a.Component);a.default=b},919:function(e,a,t){}}]);
//# sourceMappingURL=240.e1adac7d.chunk.js.map