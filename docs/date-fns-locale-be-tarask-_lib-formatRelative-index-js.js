"use strict";(self.webpackChunk_blueprintjs_docs_app=self.webpackChunk_blueprintjs_docs_app||[]).push([[28264],{29175:function(e,t,a){var r=a(57739).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(93753),n=r(a(77923)),u=["нядзелю","панядзелак","аўторак","сераду","чацьвер","пятніцу","суботу"];function s(e){return"'у "+u[e]+" а' p"}var o={lastWeek:function(e,t,a){var r=(0,c.toDate)(e),o=r.getUTCDay();return(0,n.default)(r,t,a)?s(o):function(e){var t=u[e];switch(e){case 0:case 3:case 5:case 6:return"'у мінулую "+t+" а' p";case 1:case 2:case 4:return"'у мінулы "+t+" а' p"}}(o)},yesterday:"'учора а' p",today:"'сёньня а' p",tomorrow:"'заўтра а' p",nextWeek:function(e,t,a){var r=(0,c.toDate)(e),o=r.getUTCDay();return(0,n.default)(r,t,a)?s(o):function(e){var t=u[e];switch(e){case 0:case 3:case 5:case 6:return"'у наступную "+t+" а' p";case 1:case 2:case 4:return"'у наступны "+t+" а' p"}}(o)},other:"P"},p=function(e,t,a,r){var c=o[e];return"function"==typeof c?c(t,a,r):c};t.default=p,e.exports=t.default}}]);