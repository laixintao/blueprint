"use strict";(self.webpackChunk_blueprintjs_docs_app=self.webpackChunk_blueprintjs_docs_app||[]).push([[71431],{7760:function(e,r,t){var a=t(57739).default;Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var u=a(t(93572));function n(e,r,t,a,u){var n=function(e){return"quarter"===e}(r)?u:function(e){return"year"===e||"week"===e||"minute"===e||"second"===e}(r)?a:t;return e+"-"+n}var d={ordinalNumber:function(e,r){var t=Number(e),a=null==r?void 0:r.unit;if(0===t)return n(0,a,"ев","ева","ево");if(t%1e3==0)return n(t,a,"ен","на","но");if(t%100==0)return n(t,a,"тен","тна","тно");var u=t%100;if(u>20||u<10)switch(u%10){case 1:return n(t,a,"ви","ва","во");case 2:return n(t,a,"ри","ра","ро");case 7:case 8:return n(t,a,"ми","ма","мо")}return n(t,a,"ти","та","то")},era:(0,u.default)({values:{narrow:["пр.н.е.","н.е."],abbreviated:["преди н. е.","н. е."],wide:["преди новата ера","новата ера"]},defaultWidth:"wide"}),quarter:(0,u.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-во тримес.","2-ро тримес.","3-то тримес.","4-то тримес."],wide:["1-во тримесечие","2-ро тримесечие","3-то тримесечие","4-то тримесечие"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,u.default)({values:{abbreviated:["яну","фев","мар","апр","май","юни","юли","авг","сеп","окт","ное","дек"],wide:["януари","февруари","март","април","май","юни","юли","август","септември","октомври","ноември","декември"]},defaultWidth:"wide"}),day:(0,u.default)({values:{narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вто","сря","чет","пет","съб"],wide:["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"]},defaultWidth:"wide"}),dayPeriod:(0,u.default)({values:{wide:{am:"преди обяд",pm:"след обяд",midnight:"в полунощ",noon:"на обяд",morning:"сутринта",afternoon:"следобед",evening:"вечерта",night:"през нощта"}},defaultWidth:"wide"})};r.default=d,e.exports=r.default}}]);