(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9298,8805],{64998:function(e,t,n){Promise.resolve().then(n.bind(n,92280)),Promise.resolve().then(n.bind(n,76753))},6444:function(e,t,n){"use strict";function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(null,arguments)}n.d(t,{g:function(){return s}})},92280:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var s=n(47895),r=n(6444),a=n(3965),l=n(28830);function o(e){let t=e.locale,n=(0,s._)(e,["locale"]);if(!t)throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl-docs.vercel.app/docs/configuration#locale");return a.createElement(l.IntlProvider,(0,r.g)({locale:t},n))}},76753:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var s=n(69632),r=n(48103),a=n(95740),l=n(63834),o=n(70472),i=function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=(0,o.jD)();return e.every(e=>!n.startsWith(`${e}`))&&t},c=function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=(0,o.jD)();return e.some(e=>new RegExp(e).test(n))&&t},u=n(74125),d=n(56682),h=n(3965),p=n(94895),f=n(92406),g=n(77254),m=n(84734),w=n(54205),v=n(65051),x=e=>{let t=e.className,n=(0,w.useLocale)(),s=(0,v.useParams)().streamerId,a=(0,m.useQuery)({queryKey:["/Live/BetEvents",s],queryFn:()=>(0,p.Gp)(+s)}).data,l=(null==a?void 0:a.Data.filter(e=>20===e.State))||[];return l.length>0&&(0,r.jsxs)("div",{className:(0,g.Z)("relative",t),onClick:()=>{history.replaceState(null,"","#bet-event"),window.dispatchEvent(new HashChangeEvent("hashchange"))},children:[(0,r.jsx)("button",{type:"button",children:(0,r.jsx)(f.default,{src:`/assets/bet-event/bet-event_${n}.png`,alt:"go-bet-event",width:70,height:70})}),(0,r.jsx)("span",{className:"absolute bottom-6 right-0 rounded-full border border-white bg-[#FF0013] px-1.5 py-0.5 text-xs text-neutral-0 shadow",children:l.length})]})},b=n(12585),Z=n(75175),j=n(69045),N=n(66484),_=n(68503),y=n(29272),P=e=>{let t=e.className,n=(0,w.useLocale)(),a=(0,l.Z)().token,i=(0,o.tv)(),c=(0,_.ZP)(e=>e.toggleSignInModal),u=(0,s._)((0,h.useState)("true"!==Z.Z.get(j.J1)),2),d=u[0],p=u[1];return(0,y.Z)(d).readyToRender&&(0,r.jsxs)("div",{className:(0,g.Z)("relative size-[70px] cursor-pointer",t),children:[(0,r.jsx)(b.Z,{variant:"Bold",width:16,height:16,className:"absolute right-0 top-0 text-neutral-0",onClick:()=>{let e=(0,N.Xn)().endOf("day").toDate();Z.Z.set(j.J1,"true",{expires:e,secure:!0,sameSite:"strict"}),p(!1)}}),(0,r.jsx)("button",{onClick:()=>{a?i.push("/profile/missions"):c(!0)},children:(0,r.jsx)(f.default,{className:"size-full",src:`assets/punch-in/punch-in_${n}.svg`,alt:"punch in"})})]})},S=n(40077),E=n(21279),C=e=>{let t=e.className,n=(0,E.Z)().install,s=(0,S.Z)();return(0,y.Z)(!s).readyToRender&&(0,r.jsx)("button",{className:(0,g.Z)("rounded-lg shadow-[0px_2px_3px_0px_rgba(1,13,87,0.2)]",t),onClick:n,children:(0,r.jsx)(f.default,{src:"/assets/download-pwa.png",width:40,height:40,alt:"download_pwa"})})},O=()=>{let e=(0,d.f)("mobile"),t=(0,l.Z)().token,n=(0,u.Z)(e=>e.Mission.IsSigned).data,o=(0,u.Z)(e=>e.UserInfo.UserType===a.i4.member||e.UserInfo.UserType===a.i4.guest).data,p=i(["/profile","/live/"],e),f=i(["/profile"],!n),g=c(["/live/"],e),m=(0,s._)((0,h.useState)(!0),2),w=m[0],v=m[1];return(0,h.useEffect)(()=>{let e=()=>{"#chat-room"===window.location.hash?v(!0):v(!1)};return window.addEventListener("hashchange",e),()=>{window.removeEventListener("hashchange",e)}},[]),(0,r.jsxs)("aside",{className:"fixed right-0 z-100 flex flex-col items-end gap-5 bottom-safe-offset-20",children:[p&&(0,r.jsx)(C,{className:"mr-5"}),(o&&f||!t)&&(0,r.jsx)(P,{className:"mr-2"}),g&&w&&(0,r.jsx)(x,{className:"mr-2"})]})}},61384:function(e,t,n){"use strict";n.d(t,{S:function(){return c}});var s=n(48103),r=n(954),a=n(17831),l=n(92406),o=n(76920);let i=e=>{let t=e.isOpen,n=e.onClose,r=o.Z.getState().lang.current;return(0,s.jsx)(a.Z,{className:"p-0",isOpen:t,onClose:()=>{n()},children:(0,s.jsx)(l.default,{src:`/assets/pwa-guide/pwa-guide_${r}.png`,alt:"pwa guide",width:336,height:525})})},c={open:()=>{let e=document.createDocumentFragment(),t=(0,r.createRoot)(e);t.render((0,s.jsx)(i,{isOpen:!0,onClose:()=>{t.unmount()}}))}}},40077:function(e,t,n){"use strict";var s=n(76920);t.Z=()=>(0,s.Z)(e=>e.isStandalone.current)},21279:function(e,t,n){"use strict";var s=n(96266),r=n(54205),a=n(61384),l=n(76920),o=n(90222),i=n(15438);t.Z=()=>{var e;let t=(0,r.useTranslations)("NORMAL"),n=(0,i.Z)(e=>e.show),c=(0,l.Z)(e=>e.device).current,u=(0,o.Z)(),d=u.installed,h=u.pwaPromptInstall,p=u.toggleShowPwaPrompt,f="ios"===c;return{install:(e=(0,s._)(function*(){if(f)a.S.open();else if(h.current)h.current.prompt(),"accepted"===(yield h.current.userChoice).outcome&&p(!1);else if(d){let e=window.location.hostname;window.open(`https://${e}`)}else n({type:"info",message:t("SYSTEM_NOT_SUPPORT")})}),function(){return e.apply(this,arguments)})}}},90222:function(e,t,n){"use strict";let s=(0,n(51626).Ue)(e=>({installed:!1,pwaPromptInstall:{current:null},showPwaPrompt:!1,toggleShowPwaPrompt:t=>e({showPwaPrompt:t}),setInstalled:t=>e({installed:t})}));t.Z=s}},function(e){e.O(0,[38,4564,8311,7798,4206,915,497,6148,2008,4734,6379,8827,7248,5676,6809,1744],function(){return e(e.s=64998)}),_N_E=e.O()}]);