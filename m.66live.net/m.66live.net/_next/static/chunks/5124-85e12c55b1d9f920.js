"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5124],{97636:function(e,r,n){var t=n(33454),a=n(92674),s=n(47895),l=n(48103),o=n(3965),i=n(77254);r.Z=e=>{var r=e.className,n=e.children,u=e.color,c=e.loading,A=e.prefix,d=e.suffix,m=e.size,p=void 0===m?"sm":m,h=e.shape,g=void 0===h?"gradient":h,b=e.loadingClassName,f=e.clean,x=(0,s._)(e,["className","children","color","loading","prefix","suffix","size","shape","loadingClassName","clean"]);let R=`btn-${p}`,C=(0,o.useMemo)(()=>"normal"===g?"border-0 rounded":"gradient"===g?"rounded-full":void 0,[g]),N=(0,o.useMemo)(()=>"primary"===u?"btn-primary bg-primary-btn":"primary-gradient"===u?"bg-primary-btn btn-primary-gradient":"neutral"===u?"btn-ghost bg-metal-50 text-metal-700":void 0,[u]),v=(0,o.useMemo)(()=>"xs"===p||"sm"===p?"loading-xs":"md"===p||"lg"===p?"loading-md":void 0,[p]);return(0,l.jsx)("button",(0,a._)((0,t._)({type:"button"},x),{className:void 0!==f&&f?r:(0,i.Z)("btn whitespace-nowrap font-normal",R,C,N,r),children:c?(0,l.jsx)("span",{className:(0,i.Z)("loading loading-spinner",v,b)}):(0,l.jsxs)(l.Fragment,{children:[A,n,d]})}))}},75079:function(e,r,n){n.d(r,{Z:function(){return u}});var t=n(48103),a=n(3965),s=n(81811),l=n(70650),o=n(77254);let i=(0,a.createContext)({closeDropDown:()=>{}}).Provider;function u(e){let r=e.label,n=e.placeholder,u=e.value,c=e.hasError,A=e.disabled,d=e.items,m=e.onChange,p=e.onBlur,h=e.renderOption,g=e.showArrow,b=e.placement,f=void 0===b?"down":b,x=e.summaryClassName,R=e.menuClassName,C=e.menuItemClassName,N=e.className,v=e.children,w=(0,a.useRef)(null),E=()=>{var e;(null===(e=w.current)||void 0===e?void 0:e.open)&&(null==p||p(u)),w.current&&(w.current.open=!1)};(0,l.t$)(w,E);let j=(e,r)=>{let n=null==h?void 0:h(e,r),a="string"==typeof n,s="number"==typeof n;return a||s?(0,t.jsx)("span",{className:"px-2 py-1",children:n}):n};return(0,t.jsxs)("details",{onClick:A?e=>e.preventDefault():void 0,className:(0,o.Z)("group dropdown",N,{"cursor-not-allowed":A,"dropdown-top":"up"===f,"dropdown-bottom":"down"===f}),ref:w,children:[(0,t.jsxs)("summary",{role:"button",className:(0,o.Z)("flex w-full min-w-[6rem] flex-nowrap items-center gap-2 text-metal-700",x,{"btn-error":c,"btn-disabled":A}),children:[(0,t.jsx)("span",{className:"flex-1 whitespace-nowrap text-left",children:null!=r?r:u||n}),g&&(0,t.jsx)(s.Z,{size:14,className:"mr-0.75 transition-all group-open:rotate-180",variant:"Outline"})]}),(0,t.jsx)(i,{value:{closeDropDown:E},children:h&&d?(0,t.jsx)("ul",{role:"menu",className:(0,o.Z)("menu dropdown-content z-20 w-full min-w-[12rem] rounded-box bg-base-100 shadow",R,{"mb-2":"up"===f,"mt-2":"down"===f}),children:d.map(e=>{let r=e.value,n=e.label;return(0,t.jsx)("li",{className:(0,o.Z)("cursor-pointer *:rounded-box hover:*:bg-metal-50",C),onClick:()=>{null==m||m(r),E()},children:j(r,n)},r)})}):(0,t.jsx)("div",{role:"menu",className:(0,o.Z)("menu dropdown-content z-20 w-full min-w-[12rem] rounded-box bg-base-100 shadow",R,{"mb-2":"up"===f,"mt-2":"down"===f}),children:v})})]})}},69325:function(e,r,n){n.d(r,{Z:function(){return i}});var t=n(48103),a=n(95060),s=n(35543),l=n(41852),o=n(77254);function i(e){let r=e.name,n=e.errors,i=e.className,u=e.helperText;return(0,s.Z)(n,r)||u?(0,t.jsx)("div",{className:"label",children:(0,l.Z)(n,r)?(0,t.jsx)(a.B,{name:r,errors:n,render:e=>{let r=e.message;return(0,t.jsx)("span",{className:(0,o.Z)("label-text text-error",i),children:r})}},r):(0,t.jsx)("span",{className:(0,o.Z)("label-text-alt text-metal-500",i),children:u})}):null}},76719:function(e,r,n){n.d(r,{o:function(){return t}});let t={"zh-tw":{src:"/_next/static/media/hk.9d65d90f.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEXuFR7xHCXuHCXuPUXzGyZMaXH0HSfuHCbxHCbrGyX9Hif9GSPvdHnwtbfvZWvvnaDviI0qJ4BBAAAACnRSTlP+87T8LgCw+uovtPspCAAAAAlwSFlzAAD79wAA+/cBZue6bQAAADxJREFUeJwVy8kRwCAMALE1Bp9A0n+1megv1hzuYy4yCq9IrNjXyxB/n7MRhHuOIljrvtpGRkNHsuaQv389eAGpqsaEIAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},"zh-cn":{src:"/_next/static/media/cn.e57df253.png",height:48,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEXPIS3RIS7QIC7RLC7NHyzTIS5MaXHUOC3OIDD86C3OKzDcJTHZSC7nhC7qXjH1vC6P51jtAAAAC3RSTlP+sfb+LusA/i/6L9e/S10AAAAJcEhZcwAAITgAACE4AUWWMWAAAAA8SURBVHicFcpBEoAgDATB2Q0kaED//1vLPjc55NBK7vnU7rnQc52qFt7vicI4iB0YtcEtxmz4cy7ZGvkBNjoBXJIvzgUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},"en-us":{src:"/_next/static/media/en.7174599d.png",height:48,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEX53uDaYGdJfMRBdb87b7zo3OXyydDZRE5MaXFNgcbfRk/74+bZRE7RMz6FoNJsl87/6ejTO0b84eTVPEbs4un/5uk8ecvIQVHmSlTpT1dn0sKdAAAAFHRSTlP9LrH89/kv/gD9r+vw+C4vtbWusiszXgcAAAAJcEhZcwAAITgAACE4AUWWMWAAAABASURBVHicBcEFAsAgDACxQ0uRKbb/f3QJ6bAuXDFx+unXVw12ehcYD6qqS6QSeu9AIW8RkZ2JZcAokWTu1l6TflwWApEEabBAAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},"th-th":{src:"/_next/static/media/th.2033dfec.png",height:48,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEUAP6homNNMaXFZicz/////+/fPLjvPR1HNKTbOKzjOKjf/8u90ot+fnLNkAAAAC3RSTlP9/QCvL+u0Lvj4+HGYmYMAAAAJcEhZcwAAITgAACE4AUWWMWAAAAAuSURBVHicZco5EgAwCMNAzM2Y/783HU3UrkQru7NUPEgyXGwBYE3+jm7WypksfShBAR/zRBQZAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},"vi-vn":{src:"/_next/static/media/vn.99e302d2.png",height:48,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEXRIS7OHS3MIC7XQy3PIS1MaXHUIi7SISzdJTHfYS72xy784C7bHzEZFMYaAAAACHRSTlPz/i/+tACvLpTlLXcAAAAJcEhZcwAAITgAACE4AUWWMWAAAAA2SURBVHicRcuxAcAwCASxe94QsL3/vClSpJfIWLAiCVpqgmrZ6gLN3iNAPseCup7xrR9//ckXIvMBBMYWYYQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}}},55124:function(e,r,n){n.r(r),n.d(r,{default:function(){return Z}});var t=n(96266),a=n(69632),s=n(48103),l=n(3965),o=n(54205),i=n(7833),u=n(70650),c=n(96148),A=n(97636),d=n(69325),m=n(21228),p=n(75079),h=n(76719),g=n(96473);function b(e){let r=e.value,n=e.renderLabel,t=e.hasError,o=e.summaryClassName,i=e.showArrow,u=e.onChange,c=(0,l.useMemo)(()=>Object.entries(g.e1).map(e=>{let r=(0,a._)(e,2);return{value:r[0],label:r[1]}}),[]);return(0,s.jsx)(p.Z,{value:r,summaryClassName:o,items:c,onChange:u,showArrow:i,hasError:t,label:n(r,g.e1[r]),renderOption:(e,r)=>{let n=h.o[e];return(0,s.jsxs)("div",{className:"flex items-center justify-start gap-2",children:[(0,s.jsx)(m.default,{src:n,alt:`${e} image`,width:18,height:18,style:{width:"18px",height:"18px"}}),(0,s.jsx)("span",{children:r})]})}})}function f(e){let r=e.name,n=e.control,t=e.onChange;return(0,s.jsx)(i.Qr,{control:n,name:r,defaultValue:"zh-cn",render:e=>{let r=e.field,n=r.onChange,a=r.value,l=e.fieldState.error;return(0,s.jsx)(b,{showArrow:!0,value:a,renderLabel:e=>(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(m.default,{src:h.o[e],alt:`${e} image`,width:18,height:18,style:{width:"18px",height:"18px"}}),(0,s.jsx)("span",{children:g.e1[e]})]}),summaryClassName:"btn-input btn rounded-box border-metal-100",onChange:e=>{n(e),null==t||t(e)},hasError:!!l})}})}var x=n(92330),R=n(4632),C=n(36599),N=n(92489),v=n(93992),w=n(70472),E=n(30762),j=n(77254);function Z(e){var r;let n=e.withLanguage,c=e.onSuccess,m=e.children,p=e.errorClassName,h=e.className,g=(0,o.useTranslations)(),b=(0,w.tv)(),Z=(0,o.useLocale)(),I=(0,a._)((0,u.Xs)("KEEP_CREDENTIAL",["",""]),2),S=I[0],M=I[1],U=(0,N.Z)(y),z=(0,i.cI)({resolver:U,defaultValues:{language:Z,countryCode:v.M}}),O=z.handleSubmit,T=z.control,D=z.setError,H=z.getValues,L=z.setValue,_=z.formState,B=_.errors,k=_.isDirty,P=(0,C.Z)(),W=P.mutateAsync,F=P.isPending;P.data;let V=(0,E.Z)().setAuth,Q=(r=(0,t._)(function*(e){M(["",""]);let r=yield W({CountryCode:e.countryCode,Phone:e.phoneNumber,Password:e.password});if(r.IsSuccess){let e=r.Data,n=e.UserId,t=e.UserType,a=e.AccessToken,s=sessionStorage.getItem("pre-path-before-auth")||"/";V({userId:n,userRole:t,token:a}),c?c():b.push(s)}else switch(r.Message){case"100003":D("phoneNumber",{message:g("ERROR.100003")});break;case"300003":D("password",{message:g("ERROR.300003")});break;case"300006":D("password",{message:g("PROFILE.AUTH.DEACTIVATED")})}}),function(e){return r.apply(this,arguments)});return(0,l.useEffect)(()=>{if(S.every(Boolean)){let e=(0,a._)(S,2),r=e[0],n=e[1];L("countryCode",r),L("phoneNumber",n)}},[S,L]),(0,s.jsxs)("form",{onSubmit:O(Q),className:(0,j.Z)("flex flex-col gap-4",h),children:[(0,s.jsxs)("div",{className:"form-control w-full",children:[(0,s.jsx)(R.Z,{control:T,names:["countryCode","phoneNumber"]}),(0,s.jsx)(d.Z,{errors:B,name:"phoneNumber",className:p})]}),(0,s.jsxs)("div",{className:"form-control w-full",children:[(0,s.jsx)(x.Z,{name:"password",control:T,placeholder:g("PROFILE.AUTH.ENTER_LOGIN_PASSWORD")}),(0,s.jsx)(d.Z,{errors:B,name:"password",className:p})]}),void 0!==n&&n&&(0,s.jsxs)("div",{className:"form-control w-full",children:[(0,s.jsx)(f,{name:"language",control:T,onChange:e=>{let r=H();M([r.countryCode,r.phoneNumber]),b.replace("/profile/sign-in",{locale:e})}}),(0,s.jsx)(d.Z,{errors:B,name:"language",className:p})]}),m,(0,s.jsx)(A.Z,{type:"submit",color:"primary-gradient",size:"md",loading:F,className:" font-bold desktop:mt-4 mobile:mt-2",disabled:F||!k,children:g("NORMAL.LOGIN")})]})}let y=e=>c.z.object({countryCode:c.z.string({required_error:e("ERROR.FORM.REQUIRED")}).min(1,{message:e("ERROR.FORM.MIN_LENGTH",{count:1})}),phoneNumber:c.z.string({required_error:e("ERROR.FORM.REQUIRED")}).min(6,{message:e("ERROR.FORM.MIN_LENGTH",{count:6})}).regex(/^\d+$/i,{message:e("ERROR.100003")}),password:c.z.string({required_error:e("ERROR.FORM.REQUIRED")}).min(6,{message:e("ERROR.FORM.MIN_LENGTH",{count:6})}),language:c.z.string().nullish().optional()})},36599:function(e,r,n){n.d(r,{Z:function(){return x}});var t=n(69632),a=n(28778),s=n(94770),l=n(70650),o=n(96266),i=n(33454),u=n(92674),c=n(96148),A=n(95740),d=n(62740),m=n(91899);function p(){return(p=(0,o._)(function*(e,r){return yield d.Z.url("/api/User/Login").options({cache:"no-cache"}).post((0,u._)((0,i._)({},e),{Channel:r})).json(e=>(0,m.mg)(h).parseAsync(e))})).apply(this,arguments)}c.z.object({CountryCode:c.z.string().min(1),Phone:c.z.string().min(1).regex(/^\d+$/i),Password:c.z.string().min(6)});let h=c.z.object({UserId:c.z.number(),UserType:c.z.nativeEnum(A.i4),AccessToken:c.z.string(),KeepAliveToken:c.z.string()});var g=n(69045),b=n(10819),f=n(30762);function x(){let e=(0,t._)((0,l._)(g.PR,""),2)[1],r=(0,a.useQueryClient)(),n=(0,b.Z)(),o=(0,f.Z)().setAuth;return(0,s.useMutation)({mutationKey:["/User/Login"],mutationFn:e=>(function(e,r){return p.apply(this,arguments)})(e,n),onSuccess:n=>{n.IsSuccess&&n.Data&&(o({userId:n.Data.UserId,userRole:n.Data.UserType,token:n.Data.AccessToken}),r.invalidateQueries(),e(n.Data.KeepAliveToken))}})}},92330:function(e,r,n){n.d(r,{Z:function(){return d}});var t=n(33454),a=n(92674),s=n(69632),l=n(48103),o=n(3965),i=n(41574),u=n(50360),c=n(7833),A=n(77254);function d(e){let r=e.name,n=e.placeholder,d=e.autoComplete,m=e.disabled,p=e.control,h=e.className,g=(0,s._)((0,o.useState)(!1),2),b=g[0],f=g[1];return(0,l.jsx)(c.Qr,{control:p,name:r,defaultValue:"",render:e=>{let r=e.field,s=e.fieldState.error;return(0,l.jsxs)("div",{className:(0,A.Z)("join",h),children:[(0,l.jsx)("input",(0,a._)((0,t._)({type:b?"text":"password"},r),{disabled:m,autoComplete:null!=d?d:"current-password",className:(0,A.Z)("input join-item input-bordered w-full border-e-0",s?"input-error":"border-metal-100"),placeholder:n})),(0,l.jsx)("button",{type:"button",disabled:m,className:(0,A.Z)("btn-input btn join-item border-s-0",s?"border-error":"border-metal-100"),onClick:()=>f(e=>!e),children:b?(0,l.jsx)(i.Z,{size:20,className:"text-metal-700",variant:"Outline"}):(0,l.jsx)(u.Z,{size:20,className:"text-metal-700",variant:"Outline"})})]})}})}},4632:function(e,r,n){n.d(r,{Z:function(){return d}});var t=n(33454),a=n(92674),s=n(48103),l=n(3965),o=n(54205),i=n(7833),u=n(75079),c=n(93992),A=n(77254);function d(e){let r=e.control,n=e.names,d=e.disabled,m=(0,o.useTranslations)(),p=(0,l.useMemo)(()=>c.n.map(e=>({value:e,label:m(`PROFILE.COUNTRY_CODE.${e}`)})),[m]);return(0,s.jsxs)("div",{className:"flex gap-1.5",children:[(0,s.jsx)(i.Qr,{control:r,name:n[0],defaultValue:c.M,render:e=>{let r=e.field,n=r.onChange,t=r.value,a=e.fieldState.error;return(0,s.jsx)(u.Z,{value:t,className:"flex-1",items:p,onChange:n,disabled:d,hasError:!!a,label:`+${t}`,showArrow:!0,summaryClassName:(0,A.Z)("btn-input btn rounded-box",a?"input-error":"border-metal-100"),renderOption:(e,r)=>(0,s.jsxs)("div",{className:"flex flex-row justify-between ",children:[(0,s.jsx)("span",{children:r}),(0,s.jsxs)("span",{children:["+",e]})]})})}}),(0,s.jsx)(i.Qr,{control:r,name:n[1],defaultValue:"",render:e=>{let r=e.field,n=e.fieldState.error;return(0,s.jsx)("input",(0,a._)((0,t._)({type:"tel",inputMode:"tel"},r),{disabled:d,placeholder:m("PROFILE.AUTH.ENTER_PHONE"),autoComplete:"tel",className:(0,A.Z)("input input-bordered w-full flex-[2]",n?"input-error":"border-metal-100")}))}})]})}},10819:function(e,r,n){n.d(r,{Z:function(){return l}});var t=n(69045),a=n(56682),s=n(40077);function l(){let e=(0,a.f)("mobile");return(0,s.Z)()?e?t.$W.PWAMobile:t.$W.PWADesktop:e?t.$W.WebMobile:t.$W.WebDesktop}},92489:function(e,r,n){n.d(r,{Z:function(){return s}});var t=n(31412),a=n(54205);function s(e){let r=(0,a.useTranslations)();return(0,t.F)(e(r))}},40077:function(e,r,n){var t=n(76920);r.Z=()=>(0,t.Z)(e=>e.isStandalone.current)},56682:function(e,r,n){n.d(r,{Z:function(){return a},f:function(){return s}});var t=n(99180);function a(){return"mobile"===(0,t.Z)("PLATFORM")?"mobile":"desktop"}function s(e){return a()===e}},93992:function(e,r,n){n.d(r,{M:function(){return a},n:function(){return t}});let t=(0,n(99180).Z)("SERVE_COUNTRY_CODE").split(",").map(e=>e.trim().toLowerCase()),a=t[0]},76920:function(e,r,n){let t=(0,n(51626).Ue)(e=>({lang:{current:""},device:{current:"other"},isStandalone:{current:!1},isFirstRender:{current:!0}}));r.Z=t},91899:function(e,r,n){n.d(r,{mg:function(){return a}});var t=n(96148);function a(e){return t.z.discriminatedUnion("IsSuccess",[t.z.object({IsSuccess:t.z.literal(!1),Message:t.z.string()}),t.z.object({IsSuccess:t.z.literal(!0),Message:t.z.string().optional(),Data:e})])}t.z.object({IsSuccess:t.z.boolean(),Message:t.z.string()})}}]);