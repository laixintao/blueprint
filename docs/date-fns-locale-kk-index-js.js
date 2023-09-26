"use strict";(self.webpackChunk_blueprintjs_docs_app=self.webpackChunk_blueprintjs_docs_app||[]).push([[29546,48801,35597,54223,50219,45502],{77923:function(e,t,i){var n=i(57739).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i){(0,a.default)(2,arguments);var n=(0,u.default)(e,i),r=(0,u.default)(t,i);return n.getTime()===r.getTime()};var a=n(i(91562)),u=n(i(60670));e.exports=t.default},64898:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={lessThanXSeconds:{regular:{one:"1 секундтан аз",singularNominative:"{{count}} секундтан аз",singularGenitive:"{{count}} секундтан аз",pluralGenitive:"{{count}} секундтан аз"},future:{one:"бір секундтан кейін",singularNominative:"{{count}} секундтан кейін",singularGenitive:"{{count}} секундтан кейін",pluralGenitive:"{{count}} секундтан кейін"}},xSeconds:{regular:{singularNominative:"{{count}} секунд",singularGenitive:"{{count}} секунд",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунд бұрын",singularGenitive:"{{count}} секунд бұрын",pluralGenitive:"{{count}} секунд бұрын"},future:{singularNominative:"{{count}} секундтан кейін",singularGenitive:"{{count}} секундтан кейін",pluralGenitive:"{{count}} секундтан кейін"}},halfAMinute:function(e){return null!=e&&e.addSuffix?e.comparison&&e.comparison>0?"жарты минут ішінде":"жарты минут бұрын":"жарты минут"},lessThanXMinutes:{regular:{one:"1 минуттан аз",singularNominative:"{{count}} минуттан аз",singularGenitive:"{{count}} минуттан аз",pluralGenitive:"{{count}} минуттан аз"},future:{one:"минуттан кем ",singularNominative:"{{count}} минуттан кем",singularGenitive:"{{count}} минуттан кем",pluralGenitive:"{{count}} минуттан кем"}},xMinutes:{regular:{singularNominative:"{{count}} минут",singularGenitive:"{{count}} минут",pluralGenitive:"{{count}} минут"},past:{singularNominative:"{{count}} минут бұрын",singularGenitive:"{{count}} минут бұрын",pluralGenitive:"{{count}} минут бұрын"},future:{singularNominative:"{{count}} минуттан кейін",singularGenitive:"{{count}} минуттан кейін",pluralGenitive:"{{count}} минуттан кейін"}},aboutXHours:{regular:{singularNominative:"шамамен {{count}} сағат",singularGenitive:"шамамен {{count}} сағат",pluralGenitive:"шамамен {{count}} сағат"},future:{singularNominative:"шамамен {{count}} сағаттан кейін",singularGenitive:"шамамен {{count}} сағаттан кейін",pluralGenitive:"шамамен {{count}} сағаттан кейін"}},xHours:{regular:{singularNominative:"{{count}} сағат",singularGenitive:"{{count}} сағат",pluralGenitive:"{{count}} сағат"}},xDays:{regular:{singularNominative:"{{count}} күн",singularGenitive:"{{count}} күн",pluralGenitive:"{{count}} күн"},future:{singularNominative:"{{count}} күннен кейін",singularGenitive:"{{count}} күннен кейін",pluralGenitive:"{{count}} күннен кейін"}},aboutXWeeks:{type:"weeks",one:"шамамен 1 апта",other:"шамамен {{count}} апта"},xWeeks:{type:"weeks",one:"1 апта",other:"{{count}} апта"},aboutXMonths:{regular:{singularNominative:"шамамен {{count}} ай",singularGenitive:"шамамен {{count}} ай",pluralGenitive:"шамамен {{count}} ай"},future:{singularNominative:"шамамен {{count}} айдан кейін",singularGenitive:"шамамен {{count}} айдан кейін",pluralGenitive:"шамамен {{count}} айдан кейін"}},xMonths:{regular:{singularNominative:"{{count}} ай",singularGenitive:"{{count}} ай",pluralGenitive:"{{count}} ай"}},aboutXYears:{regular:{singularNominative:"шамамен {{count}} жыл",singularGenitive:"шамамен {{count}} жыл",pluralGenitive:"шамамен {{count}} жыл"},future:{singularNominative:"шамамен {{count}} жылдан кейін",singularGenitive:"шамамен {{count}} жылдан кейін",pluralGenitive:"шамамен {{count}} жылдан кейін"}},xYears:{regular:{singularNominative:"{{count}} жыл",singularGenitive:"{{count}} жыл",pluralGenitive:"{{count}} жыл"},future:{singularNominative:"{{count}} жылдан кейін",singularGenitive:"{{count}} жылдан кейін",pluralGenitive:"{{count}} жылдан кейін"}},overXYears:{regular:{singularNominative:"{{count}} жылдан астам",singularGenitive:"{{count}} жылдан астам",pluralGenitive:"{{count}} жылдан астам"},future:{singularNominative:"{{count}} жылдан астам",singularGenitive:"{{count}} жылдан астам",pluralGenitive:"{{count}} жылдан астам"}},almostXYears:{regular:{singularNominative:"{{count}} жылға жақын",singularGenitive:"{{count}} жылға жақын",pluralGenitive:"{{count}} жылға жақын"},future:{singularNominative:"{{count}} жылдан кейін",singularGenitive:"{{count}} жылдан кейін",pluralGenitive:"{{count}} жылдан кейін"}}};function n(e,t){if(e.one&&1===t)return e.one;var i=t%10,n=t%100;return 1===i&&11!==n?e.singularNominative.replace("{{count}}",String(t)):i>=2&&i<=4&&(n<10||n>20)?e.singularGenitive.replace("{{count}}",String(t)):e.pluralGenitive.replace("{{count}}",String(t))}var a=function(e,t,a){var u=i[e];return"function"==typeof u?u(a):"weeks"===u.type?1===t?u.one:u.other.replace("{{count}}",String(t)):null!=a&&a.addSuffix?a.comparison&&a.comparison>0?u.future?n(u.future,t):n(u.regular,t)+" кейін":u.past?n(u.past,t):n(u.regular,t)+" бұрын":n(u.regular,t)};t.default=a,e.exports=t.default},29358:function(e,t,i){var n=i(57739).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i(62750)),u={date:(0,a.default)({formats:{full:"EEEE, do MMMM y 'ж.'",long:"do MMMM y 'ж.'",medium:"d MMM y 'ж.'",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:(0,a.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,a.default)({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})};t.default=u,e.exports=t.default},33832:function(e,t,i){var n=i(57739).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i(77923)),u=["жексенбіде","дүйсенбіде","сейсенбіде","сәрсенбіде","бейсенбіде","жұмада","сенбіде"];function r(e){return"'"+u[e]+" сағат' p'-де'"}var o={lastWeek:function(e,t,i){var n=e.getUTCDay();return(0,a.default)(e,t,i)?r(n):function(e){return"'өткен "+u[e]+" сағат' p'-де'"}(n)},yesterday:"'кеше сағат' p'-де'",today:"'бүгін сағат' p'-де'",tomorrow:"'ертең сағат' p'-де'",nextWeek:function(e,t,i){var n=e.getUTCDay();return(0,a.default)(e,t,i)?r(n):function(e){return"'келесі "+u[e]+" сағат' p'-де'"}(n)},other:"P"},l=function(e,t,i,n){var a=o[e];return"function"==typeof a?a(t,i,n):a};t.default=l,e.exports=t.default},98515:function(e,t,i){var n=i(57739).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i(93572)),u={0:"-ші",1:"-ші",2:"-ші",3:"-ші",4:"-ші",5:"-ші",6:"-шы",7:"-ші",8:"-ші",9:"-шы",10:"-шы",20:"-шы",30:"-шы",40:"-шы",50:"-ші",60:"-шы",70:"-ші",80:"-ші",90:"-шы",100:"-ші"},r={ordinalNumber:function(e,t){var i=Number(e),n=i>=100?100:null;return i+(u[i]||u[i%10]||n&&u[n]||"")},era:(0,a.default)({values:{narrow:["б.з.д.","б.з."],abbreviated:["б.з.д.","б.з."],wide:["біздің заманымызға дейін","біздің заманымыз"]},defaultWidth:"wide"}),quarter:(0,a.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-ші тоқ.","2-ші тоқ.","3-ші тоқ.","4-ші тоқ."],wide:["1-ші тоқсан","2-ші тоқсан","3-ші тоқсан","4-ші тоқсан"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,a.default)({values:{narrow:["Қ","А","Н","С","М","М","Ш","Т","Қ","Қ","Қ","Ж"],abbreviated:["қаң","ақп","нау","сәу","мам","мау","шіл","там","қыр","қаз","қар","жел"],wide:["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан"]},defaultWidth:"wide",formattingValues:{narrow:["Қ","А","Н","С","М","М","Ш","Т","Қ","Қ","Қ","Ж"],abbreviated:["қаң","ақп","нау","сәу","мам","мау","шіл","там","қыр","қаз","қар","жел"],wide:["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан"]},defaultFormattingWidth:"wide"}),day:(0,a.default)({values:{narrow:["Ж","Д","С","С","Б","Ж","С"],short:["жс","дс","сс","ср","бс","жм","сб"],abbreviated:["жс","дс","сс","ср","бс","жм","сб"],wide:["жексенбі","дүйсенбі","сейсенбі","сәрсенбі","бейсенбі","жұма","сенбі"]},defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:{narrow:{am:"ТД",pm:"ТК",midnight:"түн ортасы",noon:"түс",morning:"таң",afternoon:"күндіз",evening:"кеш",night:"түн"},wide:{am:"ТД",pm:"ТК",midnight:"түн ортасы",noon:"түс",morning:"таң",afternoon:"күндіз",evening:"кеш",night:"түн"}},defaultWidth:"any",formattingValues:{narrow:{am:"ТД",pm:"ТК",midnight:"түн ортасында",noon:"түс",morning:"таң",afternoon:"күн",evening:"кеш",night:"түн"},wide:{am:"ТД",pm:"ТК",midnight:"түн ортасында",noon:"түсте",morning:"таңертең",afternoon:"күндіз",evening:"кеште",night:"түнде"}},defaultFormattingWidth:"wide"})};t.default=r,e.exports=t.default},7964:function(e,t,i){var n=i(57739).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i(7998)),u={ordinalNumber:(0,n(i(9254)).default)({matchPattern:/^(\d+)(-?(ші|шы))?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,a.default)({matchPatterns:{narrow:/^((б )?з\.?\s?д\.?)/i,abbreviated:/^((б )?з\.?\s?д\.?)/i,wide:/^(біздің заманымызға дейін|біздің заманымыз|біздің заманымыздан)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^б/i,/^з/i]},defaultParseWidth:"any"}),quarter:(0,a.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?ші)? тоқ.?/i,wide:/^[1234](-?ші)? тоқсан/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,a.default)({matchPatterns:{narrow:/^(қ|а|н|с|м|мау|ш|т|қыр|қаз|қар|ж)/i,abbreviated:/^(қаң|ақп|нау|сәу|мам|мау|шіл|там|қыр|қаз|қар|жел)/i,wide:/^(қаңтар|ақпан|наурыз|сәуір|мамыр|маусым|шілде|тамыз|қыркүйек|қазан|қараша|желтоқсан)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^қ/i,/^а/i,/^н/i,/^с/i,/^м/i,/^м/i,/^ш/i,/^т/i,/^қ/i,/^қ/i,/^қ/i,/^ж/i],abbreviated:[/^қаң/i,/^ақп/i,/^нау/i,/^сәу/i,/^мам/i,/^мау/i,/^шіл/i,/^там/i,/^қыр/i,/^қаз/i,/^қар/i,/^жел/i],any:[/^қ/i,/^а/i,/^н/i,/^с/i,/^м/i,/^м/i,/^ш/i,/^т/i,/^қ/i,/^қ/i,/^қ/i,/^ж/i]},defaultParseWidth:"any"}),day:(0,a.default)({matchPatterns:{narrow:/^(ж|д|с|с|б|ж|с)/i,short:/^(жс|дс|сс|ср|бс|жм|сб)/i,wide:/^(жексенбі|дүйсенбі|сейсенбі|сәрсенбі|бейсенбі|жұма|сенбі)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ж/i,/^д/i,/^с/i,/^с/i,/^б/i,/^ж/i,/^с/i],short:[/^жс/i,/^дс/i,/^сс/i,/^ср/i,/^бс/i,/^жм/i,/^сб/i],any:[/^ж[ек]/i,/^д[үй]/i,/^сe[й]/i,/^сә[р]/i,/^б[ей]/i,/^ж[ұм]/i,/^се[н]/i]},defaultParseWidth:"any"}),dayPeriod:(0,a.default)({matchPatterns:{narrow:/^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i,wide:/^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i,any:/^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^ТД/i,pm:/^ТК/i,midnight:/^түн орта/i,noon:/^күндіз/i,morning:/таң/i,afternoon:/түс/i,evening:/кеш/i,night:/түн/i}},defaultParseWidth:"any"})};t.default=u,e.exports=t.default},36212:function(e,t,i){var n=i(57739).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i(64898)),u=n(i(29358)),r=n(i(33832)),o=n(i(98515)),l=n(i(7964)),d={code:"kk",formatDistance:a.default,formatLong:u.default,formatRelative:r.default,localize:o.default,match:l.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=d,e.exports=t.default}}]);