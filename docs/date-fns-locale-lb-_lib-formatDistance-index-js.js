"use strict";(self.webpackChunk_blueprintjs_docs_app=self.webpackChunk_blueprintjs_docs_app||[]).push([[51443],{71366:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={lessThanXSeconds:{standalone:{one:"manner wéi eng Sekonn",other:"manner wéi {{count}} Sekonnen"},withPreposition:{one:"manner wéi enger Sekonn",other:"manner wéi {{count}} Sekonnen"}},xSeconds:{standalone:{one:"eng Sekonn",other:"{{count}} Sekonnen"},withPreposition:{one:"enger Sekonn",other:"{{count}} Sekonnen"}},halfAMinute:{standalone:"eng hallef Minutt",withPreposition:"enger hallwer Minutt"},lessThanXMinutes:{standalone:{one:"manner wéi eng Minutt",other:"manner wéi {{count}} Minutten"},withPreposition:{one:"manner wéi enger Minutt",other:"manner wéi {{count}} Minutten"}},xMinutes:{standalone:{one:"eng Minutt",other:"{{count}} Minutten"},withPreposition:{one:"enger Minutt",other:"{{count}} Minutten"}},aboutXHours:{standalone:{one:"ongeféier eng Stonn",other:"ongeféier {{count}} Stonnen"},withPreposition:{one:"ongeféier enger Stonn",other:"ongeféier {{count}} Stonnen"}},xHours:{standalone:{one:"eng Stonn",other:"{{count}} Stonnen"},withPreposition:{one:"enger Stonn",other:"{{count}} Stonnen"}},xDays:{standalone:{one:"een Dag",other:"{{count}} Deeg"},withPreposition:{one:"engem Dag",other:"{{count}} Deeg"}},aboutXWeeks:{standalone:{one:"ongeféier eng Woch",other:"ongeféier {{count}} Wochen"},withPreposition:{one:"ongeféier enger Woche",other:"ongeféier {{count}} Wochen"}},xWeeks:{standalone:{one:"eng Woch",other:"{{count}} Wochen"},withPreposition:{one:"enger Woch",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"ongeféier ee Mount",other:"ongeféier {{count}} Méint"},withPreposition:{one:"ongeféier engem Mount",other:"ongeféier {{count}} Méint"}},xMonths:{standalone:{one:"ee Mount",other:"{{count}} Méint"},withPreposition:{one:"engem Mount",other:"{{count}} Méint"}},aboutXYears:{standalone:{one:"ongeféier ee Joer",other:"ongeféier {{count}} Joer"},withPreposition:{one:"ongeféier engem Joer",other:"ongeféier {{count}} Joer"}},xYears:{standalone:{one:"ee Joer",other:"{{count}} Joer"},withPreposition:{one:"engem Joer",other:"{{count}} Joer"}},overXYears:{standalone:{one:"méi wéi ee Joer",other:"méi wéi {{count}} Joer"},withPreposition:{one:"méi wéi engem Joer",other:"méi wéi {{count}} Joer"}},almostXYears:{standalone:{one:"bal ee Joer",other:"bal {{count}} Joer"},withPreposition:{one:"bal engem Joer",other:"bal {{count}} Joer"}}},t=["d","h","n","t","z"],r=["a,","e","i","o","u"],i=[0,1,2,3,8,9],a=[40,50,60,70];function u(e){var n=e.charAt(0).toLowerCase();if(-1!=r.indexOf(n)||-1!=t.indexOf(n))return!0;var o=e.split(" ")[0],u=parseInt(o);return!isNaN(u)&&-1!=i.indexOf(u%10)&&-1==a.indexOf(parseInt(o.substring(0,2)))}var s=function(e,n,t){var r,i=o[e],a=null!=t&&t.addSuffix?i.withPreposition:i.standalone;return r="string"==typeof a?a:1===n?a.one:a.other.replace("{{count}}",String(n)),null!=t&&t.addSuffix?t.comparison&&t.comparison>0?"a"+(u(r)?"n":"")+" "+r:"viru"+(u(r)?"n":"")+" "+r:r};n.default=s,e.exports=n.default}}]);