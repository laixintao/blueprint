"use strict";(self.webpackChunk_blueprintjs_docs_app=self.webpackChunk_blueprintjs_docs_app||[]).push([[52570,36694,9698,62460,46430,47302],{34257:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lessThanXSeconds:{one:"1 сониядан кам",other:"{{count}} сониядан кам"},xSeconds:{one:"1 сония",other:"{{count}} сония"},halfAMinute:"ярим дақиқа",lessThanXMinutes:{one:"1 дақиқадан кам",other:"{{count}} дақиқадан кам"},xMinutes:{one:"1 дақиқа",other:"{{count}} дақиқа"},aboutXHours:{one:"тахминан 1 соат",other:"тахминан {{count}} соат"},xHours:{one:"1 соат",other:"{{count}} соат"},xDays:{one:"1 кун",other:"{{count}} кун"},aboutXWeeks:{one:"тахминан 1 хафта",other:"тахминан {{count}} хафта"},xWeeks:{one:"1 хафта",other:"{{count}} хафта"},aboutXMonths:{one:"тахминан 1 ой",other:"тахминан {{count}} ой"},xMonths:{one:"1 ой",other:"{{count}} ой"},aboutXYears:{one:"тахминан 1 йил",other:"тахминан {{count}} йил"},xYears:{one:"1 йил",other:"{{count}} йил"},overXYears:{one:"1 йилдан кўп",other:"{{count}} йилдан кўп"},almostXYears:{one:"деярли 1 йил",other:"деярли {{count}} йил"}},i=function(e,t,i){var n,r=a[e];return n="string"==typeof r?r:1===t?r.one:r.other.replace("{{count}}",String(t)),null!=i&&i.addSuffix?i.comparison&&i.comparison>0?n+"дан кейин":n+" олдин":n};t.default=i,e.exports=t.default},5601:function(e,t,a){var i=a(57739).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(62750)),r={date:(0,n.default)({formats:{full:"EEEE, do MMMM, y",long:"do MMMM, y",medium:"d MMM, y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})};t.default=r,e.exports=t.default},59638:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lastWeek:"'ўтган' eeee p 'да'",yesterday:"'кеча' p 'да'",today:"'бугун' p 'да'",tomorrow:"'эртага' p 'да'",nextWeek:"eeee p 'да'",other:"P"},i=function(e,t,i,n){return a[e]};t.default=i,e.exports=t.default},46294:function(e,t,a){var i=a(57739).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(93572)),r={ordinalNumber:function(e,t){return String(e)},era:(0,n.default)({values:{narrow:["М.А","М"],abbreviated:["М.А","М"],wide:["Милоддан Аввалги","Милодий"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-чор.","2-чор.","3-чор.","4-чор."],wide:["1-чорак","2-чорак","3-чорак","4-чорак"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,n.default)({values:{narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"],wide:["январ","феврал","март","апрел","май","июн","июл","август","сентабр","октабр","ноябр","декабр"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["Я","Д","С","Ч","П","Ж","Ш"],short:["як","ду","се","чо","па","жу","ша"],abbreviated:["якш","душ","сеш","чор","пай","жум","шан"],wide:["якшанба","душанба","сешанба","чоршанба","пайшанба","жума","шанба"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{any:{am:"П.О.",pm:"П.К.",midnight:"ярим тун",noon:"пешин",morning:"эрталаб",afternoon:"пешиндан кейин",evening:"кечаси",night:"тун"}},defaultWidth:"any",formattingValues:{any:{am:"П.О.",pm:"П.К.",midnight:"ярим тун",noon:"пешин",morning:"эрталаб",afternoon:"пешиндан кейин",evening:"кечаси",night:"тун"}},defaultFormattingWidth:"any"})};t.default=r,e.exports=t.default},22826:function(e,t,a){var i=a(57739).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(7998)),r={ordinalNumber:(0,i(a(9254)).default)({matchPattern:/^(\d+)(чи)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(м\.а|м\.)/i,abbreviated:/^(м\.а|м\.)/i,wide:/^(милоддан аввал|милоддан кейин)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^м/i,/^а/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]-чор./i,wide:/^[1234]-чорак/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[яфмамииасонд]/i,abbreviated:/^(янв|фев|мар|апр|май|июн|июл|авг|сен|окт|ноя|дек)/i,wide:/^(январ|феврал|март|апрел|май|июн|июл|август|сентабр|октабр|ноябр|декабр)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^я/i,/^ф/i,/^м/i,/^а/i,/^м/i,/^и/i,/^и/i,/^а/i,/^с/i,/^о/i,/^н/i,/^д/i],any:[/^я/i,/^ф/i,/^мар/i,/^ап/i,/^май/i,/^июн/i,/^июл/i,/^ав/i,/^с/i,/^о/i,/^н/i,/^д/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[ядсчпжш]/i,short:/^(як|ду|се|чо|па|жу|ша)/i,abbreviated:/^(якш|душ|сеш|чор|пай|жум|шан)/i,wide:/^(якшанба|душанба|сешанба|чоршанба|пайшанба|жума|шанба)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^я/i,/^д/i,/^с/i,/^ч/i,/^п/i,/^ж/i,/^ш/i],any:[/^як/i,/^ду/i,/^се/i,/^чор/i,/^пай/i,/^жу/i,/^шан/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{any:/^(п\.о\.|п\.к\.|ярим тун|пешиндан кейин|(эрталаб|пешиндан кейин|кечаси|тун))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^п\.о\./i,pm:/^п\.к\./i,midnight:/^ярим тун/i,noon:/^пешиндан кейин/i,morning:/эрталаб/i,afternoon:/пешиндан кейин/i,evening:/кечаси/i,night:/тун/i}},defaultParseWidth:"any"})};t.default=r,e.exports=t.default},73478:function(e,t,a){var i=a(57739).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(34257)),r=i(a(5601)),o=i(a(59638)),d=i(a(46294)),u=i(a(22826)),l={code:"uz-Cyrl",formatDistance:n.default,formatLong:r.default,formatRelative:o.default,localize:d.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=l,e.exports=t.default}}]);