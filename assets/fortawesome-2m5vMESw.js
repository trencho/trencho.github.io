import{a as pe,t as _n}from"./rolldown-runtime-W-g5d7YK.js";var he=_n((n=>{var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),f=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),h=Symbol.for("react.activity"),S=Symbol.iterator;function w(s){return s===null||typeof s!="object"?null:(s=S&&s[S]||s["@@iterator"],typeof s=="function"?s:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,z={};function C(s,c,y){this.props=s,this.context=c,this.refs=z,this.updater=y||F}C.prototype.isReactComponent={},C.prototype.setState=function(s,c){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,c,"setState")},C.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function T(){}T.prototype=C.prototype;function N(s,c,y){this.props=s,this.context=c,this.refs=z,this.updater=y||F}var x=N.prototype=new T;x.constructor=N,I(x,C.prototype),x.isPureReactComponent=!0;var pn=Array.isArray;function J(){}var k={H:null,A:null,T:null,S:null},pt=Object.prototype.hasOwnProperty;function Nn(s,c,y){var b=y.ref;return{$$typeof:t,type:s,key:c,ref:b!==void 0?b:null,props:y}}function ue(s,c){return Nn(s.type,c,s.props)}function Rn(s){return typeof s=="object"&&s!==null&&s.$$typeof===t}function ce(s){var c={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(y){return c[y]})}var ht=/\/+/g;function Ln(s,c){return typeof s=="object"&&s!==null&&s.key!=null?ce(""+s.key):c.toString(36)}function me(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(J,J):(s.status="pending",s.then(function(c){s.status==="pending"&&(s.status="fulfilled",s.value=c)},function(c){s.status==="pending"&&(s.status="rejected",s.reason=c)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function nn(s,c,y,b,A){var E=typeof s;(E==="undefined"||E==="boolean")&&(s=null);var P=!1;if(s===null)P=!0;else switch(E){case"bigint":case"string":case"number":P=!0;break;case"object":switch(s.$$typeof){case t:case a:P=!0;break;case m:return P=s._init,nn(P(s._payload),c,y,b,A)}}if(P)return A=A(s),P=b===""?"."+Ln(s,0):b,pn(A)?(y="",P!=null&&(y=P.replace(ht,"$&/")+"/"),nn(A,c,y,"",function(ge){return ge})):A!=null&&(Rn(A)&&(A=ue(A,y+(A.key==null||s&&s.key===A.key?"":(""+A.key).replace(ht,"$&/")+"/")+P)),c.push(A)),1;P=0;var D=b===""?".":b+":";if(pn(s))for(var j=0;j<s.length;j++)b=s[j],E=D+Ln(b,j),P+=nn(b,c,y,E,A);else if(j=w(s),typeof j=="function")for(s=j.call(s),j=0;!(b=s.next()).done;)b=b.value,E=D+Ln(b,j++),P+=nn(b,c,y,E,A);else if(E==="object"){if(typeof s.then=="function")return nn(me(s),c,y,b,A);throw c=String(s),Error("Objects are not valid as a React child (found: "+(c==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":c)+"). If you meant to render a collection of children, use an array instead.")}return P}function hn(s,c,y){if(s==null)return s;var b=[],A=0;return nn(s,b,"","",function(E){return c.call(y,E,A++)}),b}function de(s){if(s._status===-1){var c=s._result;c=c(),c.then(function(y){(s._status===0||s._status===-1)&&(s._status=1,s._result=y)},function(y){(s._status===0||s._status===-1)&&(s._status=2,s._result=y)}),s._status===-1&&(s._status=0,s._result=c)}if(s._status===1)return s._result.default;throw s._result}var bt=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var c=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(c))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)},ve={map:hn,forEach:function(s,c,y){hn(s,function(){c.apply(this,arguments)},y)},count:function(s){var c=0;return hn(s,function(){c++}),c},toArray:function(s){return hn(s,function(c){return c})||[]},only:function(s){if(!Rn(s))throw Error("React.Children.only expected to receive a single React element child.");return s}};n.Activity=h,n.Children=ve,n.Component=C,n.Fragment=e,n.Profiler=i,n.PureComponent=N,n.StrictMode=r,n.Suspense=d,n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,n.__COMPILER_RUNTIME={__proto__:null,c:function(s){return k.H.useMemoCache(s)}},n.cache=function(s){return function(){return s.apply(null,arguments)}},n.cacheSignal=function(){return null},n.cloneElement=function(s,c,y){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var b=I({},s.props),A=s.key;if(c!=null)for(E in c.key!==void 0&&(A=""+c.key),c)!pt.call(c,E)||E==="key"||E==="__self"||E==="__source"||E==="ref"&&c.ref===void 0||(b[E]=c[E]);var E=arguments.length-2;if(E===1)b.children=y;else if(1<E){for(var P=Array(E),D=0;D<E;D++)P[D]=arguments[D+2];b.children=P}return Nn(s.type,A,b)},n.createContext=function(s){return s={$$typeof:f,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:o,_context:s},s},n.createElement=function(s,c,y){var b,A={},E=null;if(c!=null)for(b in c.key!==void 0&&(E=""+c.key),c)pt.call(c,b)&&b!=="key"&&b!=="__self"&&b!=="__source"&&(A[b]=c[b]);var P=arguments.length-2;if(P===1)A.children=y;else if(1<P){for(var D=Array(P),j=0;j<P;j++)D[j]=arguments[j+2];A.children=D}if(s&&s.defaultProps)for(b in P=s.defaultProps,P)A[b]===void 0&&(A[b]=P[b]);return Nn(s,E,A)},n.createRef=function(){return{current:null}},n.forwardRef=function(s){return{$$typeof:l,render:s}},n.isValidElement=Rn,n.lazy=function(s){return{$$typeof:m,_payload:{_status:-1,_result:s},_init:de}},n.memo=function(s,c){return{$$typeof:v,type:s,compare:c===void 0?null:c}},n.startTransition=function(s){var c=k.T,y={};k.T=y;try{var b=s(),A=k.S;A!==null&&A(y,b),typeof b=="object"&&b!==null&&typeof b.then=="function"&&b.then(J,bt)}catch(E){bt(E)}finally{c!==null&&y.types!==null&&(c.types=y.types),k.T=c}},n.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},n.use=function(s){return k.H.use(s)},n.useActionState=function(s,c,y){return k.H.useActionState(s,c,y)},n.useCallback=function(s,c){return k.H.useCallback(s,c)},n.useContext=function(s){return k.H.useContext(s)},n.useDebugValue=function(){},n.useDeferredValue=function(s,c){return k.H.useDeferredValue(s,c)},n.useEffect=function(s,c){return k.H.useEffect(s,c)},n.useEffectEvent=function(s){return k.H.useEffectEvent(s)},n.useId=function(){return k.H.useId()},n.useImperativeHandle=function(s,c,y){return k.H.useImperativeHandle(s,c,y)},n.useInsertionEffect=function(s,c){return k.H.useInsertionEffect(s,c)},n.useLayoutEffect=function(s,c){return k.H.useLayoutEffect(s,c)},n.useMemo=function(s,c){return k.H.useMemo(s,c)},n.useOptimistic=function(s,c){return k.H.useOptimistic(s,c)},n.useReducer=function(s,c,y){return k.H.useReducer(s,c,y)},n.useRef=function(s){return k.H.useRef(s)},n.useState=function(s){return k.H.useState(s)},n.useSyncExternalStore=function(s,c,y){return k.H.useSyncExternalStore(s,c,y)},n.useTransition=function(){return k.H.useTransition()},n.version="19.2.7"})),be=_n(((n,t)=>{t.exports=he()})),ye=_n((n=>{var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function e(r,i,o){var f=null;if(o!==void 0&&(f=""+o),i.key!==void 0&&(f=""+i.key),"key"in i){o={};for(var l in i)l!=="key"&&(o[l]=i[l])}else o=i;return i=o.ref,{$$typeof:t,type:r,key:f,ref:i!==void 0?i:null,props:o}}n.Fragment=a,n.jsx=e,n.jsxs=e})),xe=_n(((n,t)=>{t.exports=ye()})),zn=pe(be(),1);function Wn(n,t){(t==null||t>n.length)&&(t=n.length);for(var a=0,e=Array(t);a<t;a++)e[a]=n[a];return e}function Se(n){if(Array.isArray(n))return n}function we(n){if(Array.isArray(n))return Wn(n)}function Ae(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function yt(n,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,Zt(e.key),e)}}function Ee(n,t,a){return t&&yt(n.prototype,t),a&&yt(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n}function wn(n,t){var a=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!a){if(Array.isArray(n)||(a=rt(n))||t&&n&&typeof n.length=="number"){a&&(n=a);var e=0,r=function(){};return{s:r,n:function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,f=!1;return{s:function(){a=a.call(n)},n:function(){var l=a.next();return o=l.done,l},e:function(l){f=!0,i=l},f:function(){try{o||a.return==null||a.return()}finally{if(f)throw i}}}}function p(n,t,a){return(t=Zt(t))in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function ke(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Ie(n,t){var a=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var e,r,i,o,f=[],l=!0,d=!1;try{if(i=(a=a.call(n)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(e=i.call(a)).done)&&(f.push(e.value),f.length!==t);l=!0);}catch(v){d=!0,r=v}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(d)throw r}}return f}}function Pe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _e(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xt(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),a.push.apply(a,e)}return a}function u(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?xt(Object(a),!0).forEach(function(e){p(n,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):xt(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function Cn(n,t){return Se(n)||Ie(n,t)||rt(n,t)||Pe()}function M(n){return we(n)||ke(n)||rt(n)||_e()}function ze(n,t){if(typeof n!="object"||!n)return n;var a=n[Symbol.toPrimitive];if(a!==void 0){var e=a.call(n,t||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function Zt(n){var t=ze(n,"string");return typeof t=="symbol"?t:t+""}function kn(n){"@babel/helpers - typeof";return kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},kn(n)}function rt(n,t){if(n){if(typeof n=="string")return Wn(n,t);var a={}.toString.call(n).slice(8,-1);return a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set"?Array.from(n):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Wn(n,t):void 0}}var St=function(){},it={},na={},ta=null,aa={mark:St,measure:St};try{typeof window<"u"&&(it=window),typeof document<"u"&&(na=document),typeof MutationObserver<"u"&&(ta=MutationObserver),typeof performance<"u"&&(aa=performance)}catch{}var wt=(it.navigator||{}).userAgent,At=wt===void 0?"":wt,V=it,_=na,Et=ta,bn=aa;V.document;var X=!!_.documentElement&&!!_.head&&typeof _.addEventListener=="function"&&typeof _.createElement=="function",ea=~At.indexOf("MSIE")||~At.indexOf("Trident/"),yn,Ce=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Fe=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,ra={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Te={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ia=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],O="classic",dn="duotone",oa="sharp",sa="sharp-duotone",fa="chisel",la="etch",ua="graphite",ca="jelly",ma="jelly-duo",da="jelly-fill",va="mosaic",ga="notdog",pa="notdog-duo",ha="pixel",ba="slab",ya="slab-duo",xa="slab-press",Sa="slab-press-duo",wa="thumbprint",Aa="utility",Ea="utility-duo",ka="utility-fill",Ia="vellum",Pa="whiteboard",Oe="Classic",je="Duotone",Ne="Sharp",Re="Sharp Duotone",Le="Chisel",Me="Etch",De="Graphite",$e="Jelly",Ye="Jelly Duo",Ue="Jelly Fill",We="Mosaic",He="Notdog",Xe="Notdog Duo",Ge="Pixel",Ve="Slab",qe="Slab Duo",Be="Slab Press",Je="Slab Press Duo",Ke="Thumbprint",Qe="Utility",Ze="Utility Duo",nr="Utility Fill",tr="Vellum",ar="Whiteboard",_a=[O,dn,oa,sa,fa,la,ua,ca,ma,da,va,ga,pa,ha,ba,ya,xa,Sa,wa,Aa,Ea,ka,Ia,Pa];yn={},p(p(p(p(p(p(p(p(p(p(yn,O,Oe),dn,je),oa,Ne),sa,Re),fa,Le),la,Me),ua,De),ca,$e),ma,Ye),da,Ue),p(p(p(p(p(p(p(p(p(p(yn,va,We),ga,He),pa,Xe),ha,Ge),ba,Ve),ya,qe),xa,Be),Sa,Je),wa,Ke),Aa,Qe),p(p(p(p(yn,Ea,Ze),ka,nr),Ia,tr),Pa,ar);var er={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},rr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},ir=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),or={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},za=["fak","fa-kit","fakd","fa-kit-duotone"],kt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},sr=["kit"];p(p({},"kit","Kit"),"kit-duotone","Kit Duotone");var fr={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},lr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ur={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},It={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},xn,Sn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},cr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"];xn={},p(p(p(p(p(p(p(p(p(p(xn,"classic","Classic"),"duotone","Duotone"),"sharp","Sharp"),"sharp-duotone","Sharp Duotone"),"chisel","Chisel"),"etch","Etch"),"graphite","Graphite"),"jelly","Jelly"),"jelly-duo","Jelly Duo"),"jelly-fill","Jelly Fill"),p(p(p(p(p(p(p(p(p(p(xn,"mosaic","Mosaic"),"notdog","Notdog"),"notdog-duo","Notdog Duo"),"pixel","Pixel"),"slab","Slab"),"slab-duo","Slab Duo"),"slab-press","Slab Press"),"slab-press-duo","Slab Press Duo"),"thumbprint","Thumbprint"),"utility","Utility"),p(p(p(p(xn,"utility-duo","Utility Duo"),"utility-fill","Utility Fill"),"vellum","Vellum"),"whiteboard","Whiteboard");p(p({},"kit","Kit"),"kit-duotone","Kit Duotone");var mr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},dr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Hn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Ca=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(cr,["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"]),vr=["solid","regular","light","thin","duotone","brands","semibold"],Fa=[1,2,3,4,5,6,7,8,9,10],gr=Fa.concat([11,12,13,14,15,16,17,18,19,20]),pr=[].concat(M(Object.keys(dr)),vr,["aw","fw","pull-left","pull-right"],["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",Sn.GROUP,Sn.SWAP_OPACITY,Sn.PRIMARY,Sn.SECONDARY]).concat(Fa.map(function(n){return"".concat(n,"x")})).concat(gr.map(function(n){return"w-".concat(n)})),hr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},W="___FONT_AWESOME___",Xn=16,Ta="fa",Oa="svg-inline--fa",Z="data-fa-i2svg",Gn="data-fa-pseudo-element",br="data-fa-pseudo-element-pending",ot="data-prefix",st="data-icon",Pt="fontawesome-i2svg",yr="async",xr=["HTML","HEAD","STYLE","SCRIPT"],ja=["::before","::after",":before",":after"],Na=(function(){try{return!0}catch{return!1}})();function vn(n){return new Proxy(n,{get:function(a,e){return e in a?a[e]:a[O]}})}var Ra=u({},ra);Ra[O]=u(u(u(u({},{"fa-duotone":"duotone"}),ra[O]),kt.kit),kt["kit-duotone"]);var Sr=vn(Ra),Vn=u({},or);Vn[O]=u(u(u(u({},{duotone:"fad"}),Vn[O]),It.kit),It["kit-duotone"]);var _t=vn(Vn),qn=u({},Hn);qn[O]=u(u({},qn[O]),ur.kit);var ft=vn(qn),Bn=u({},mr);Bn[O]=u(u({},Bn[O]),fr.kit);vn(Bn);var wr=Ce,La="fa-layers-text",Ar=Fe;vn(u({},er));var Er=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Mn=Te,kr=[].concat(M(sr),M(pr)),ln=V.FontAwesomeConfig||{};function Ir(n){var t=_.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}function Pr(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}_&&typeof _.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(n){var t=Cn(n,2),a=t[0],e=t[1],r=Pr(Ir(a));r!=null&&(ln[e]=r)});var Ma={styleDefault:"solid",familyDefault:O,cssPrefix:Ta,replacementClass:Oa,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ln.familyPrefix&&(ln.cssPrefix=ln.familyPrefix);var rn=u(u({},Ma),ln);rn.autoReplaceSvg||(rn.observeMutations=!1);var g={};Object.keys(Ma).forEach(function(n){Object.defineProperty(g,n,{enumerable:!0,set:function(a){rn[n]=a,un.forEach(function(e){return e(g)})},get:function(){return rn[n]}})});Object.defineProperty(g,"familyPrefix",{enumerable:!0,set:function(t){rn.cssPrefix=t,un.forEach(function(a){return a(g)})},get:function(){return rn.cssPrefix}});V.FontAwesomeConfig=g;var un=[];function _r(n){return un.push(n),function(){un.splice(un.indexOf(n),1)}}var G=Xn,Y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function zr(n){if(!(!n||!X)){var t=_.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var a=_.head.childNodes,e=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return _.head.insertBefore(t,e),n}}var Cr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function zt(){for(var n=12,t="";n-- >0;)t+=Cr[Math.random()*62|0];return t}function sn(n){for(var t=[],a=(n||[]).length>>>0;a--;)t[a]=n[a];return t}function lt(n){return n.classList?sn(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Da(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fr(n){return Object.keys(n||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Da(n[a]),'" ')},"").trim()}function Fn(n){return Object.keys(n||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(n[a].trim(),";")},"")}function ut(n){return n.size!==Y.size||n.x!==Y.x||n.y!==Y.y||n.rotate!==Y.rotate||n.flipX||n.flipY}function Tr(n){var t=n.transform,a=n.containerWidth,e=n.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),f="rotate(".concat(t.rotate," 0 0)");return{outer:r,inner:{transform:"".concat(i," ").concat(o," ").concat(f)},path:{transform:"translate(".concat(e/2*-1," -256)")}}}function Or(n){var t=n.transform,a=n.width,e=a===void 0?Xn:a,r=n.height,i=r===void 0?Xn:r,o=n.startCentered,f=o===void 0?!1:o,l="";return f&&ea?l+="translate(".concat(t.x/G-e/2,"em, ").concat(t.y/G-i/2,"em) "):f?l+="translate(calc(-50% + ".concat(t.x/G,"em), calc(-50% + ").concat(t.y/G,"em)) "):l+="translate(".concat(t.x/G,"em, ").concat(t.y/G,"em) "),l+="scale(".concat(t.size/G*(t.flipX?-1:1),", ").concat(t.size/G*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var jr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function $a(){var n=Ta,t=Oa,a=g.cssPrefix,e=g.replacementClass,r=jr;if(a!==n||e!==t){var i=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),f=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(f,".".concat(e))}return r}var Ct=!1;function Dn(){g.autoAddCss&&!Ct&&(zr($a()),Ct=!0)}var Nr={mixout:function(){return{dom:{css:$a,insertCss:Dn}}},hooks:function(){return{beforeDOMElementCreation:function(){Dn()},beforeI2svg:function(){Dn()}}}},H=V||{};H[W]||(H[W]={});H[W].styles||(H[W].styles={});H[W].hooks||(H[W].hooks={});H[W].shims||(H[W].shims=[]);var L=H[W],Ya=[],Ua=function(){_.removeEventListener("DOMContentLoaded",Ua),In=1,Ya.map(function(t){return t()})},In=!1;X&&(In=(_.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_.readyState),In||_.addEventListener("DOMContentLoaded",Ua));function Rr(n){X&&(In?setTimeout(n,0):Ya.push(n))}function gn(n){var t=n.tag,a=n.attributes,e=a===void 0?{}:a,r=n.children,i=r===void 0?[]:r;return typeof n=="string"?Da(n):"<".concat(t," ").concat(Fr(e),">").concat(i.map(gn).join(""),"</").concat(t,">")}function Ft(n,t,a){if(n&&n[t]&&n[t][a])return{prefix:t,iconName:a,icon:n[t][a]}}var Lr=function(t,a){return function(e,r,i,o){return t.call(a,e,r,i,o)}},$n=function(t,a,e,r){var i=Object.keys(t),o=i.length,f=r!==void 0?Lr(a,r):a,l,d,v;for(e===void 0?(l=1,v=t[i[0]]):(l=0,v=e);l<o;l++)d=i[l],v=f(v,t[d],d,t);return v};function Wa(n){return M(n).length!==1?null:n.codePointAt(0).toString(16)}function Tt(n){return Object.keys(n).reduce(function(t,a){var e=n[a];return e.icon?t[e.iconName]=e.icon:t[a]=e,t},{})}function Jn(n,t){var a=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,e=a===void 0?!1:a,r=Tt(t);typeof L.hooks.addPack=="function"&&!e?L.hooks.addPack(n,Tt(t)):L.styles[n]=u(u({},L.styles[n]||{}),r),n==="fas"&&Jn("fa",t)}var mn=L.styles,Mr=L.shims,Ha=Object.keys(ft),Dr=Ha.reduce(function(n,t){return n[t]=Object.keys(ft[t]),n},{}),ct=null,Xa={},Ga={},Va={},qa={},Ba={};function $r(n){return~kr.indexOf(n)}function Yr(n,t){var a=t.split("-"),e=a[0],r=a.slice(1).join("-");return e===n&&r!==""&&!$r(r)?r:null}var Ja=function(){var t=function(i){return $n(mn,function(o,f,l){return o[l]=$n(f,i,{}),o},{})};Xa=t(function(r,i,o){return i[3]&&(r[i[3]]=o),i[2]&&i[2].filter(function(f){return typeof f=="number"}).forEach(function(f){r[f.toString(16)]=o}),r}),Ga=t(function(r,i,o){return r[o]=o,i[2]&&i[2].filter(function(f){return typeof f=="string"}).forEach(function(f){r[f]=o}),r}),Ba=t(function(r,i,o){var f=i[2];return r[o]=o,f.forEach(function(l){r[l]=o}),r});var a="far"in mn||g.autoFetchSvg,e=$n(Mr,function(r,i){var o=i[0],f=i[1],l=i[2];return f==="far"&&!a&&(f="fas"),typeof o=="string"&&(r.names[o]={prefix:f,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:f,iconName:l}),r},{names:{},unicodes:{}});Va=e.names,qa=e.unicodes,ct=Tn(g.styleDefault,{family:g.familyDefault})};_r(function(n){ct=Tn(n.styleDefault,{family:g.familyDefault})});Ja();function mt(n,t){return(Xa[n]||{})[t]}function Ur(n,t){return(Ga[n]||{})[t]}function K(n,t){return(Ba[n]||{})[t]}function Ka(n){return Va[n]||{prefix:null,iconName:null}}function Wr(n){var t=qa[n],a=mt("fas",n);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function q(){return ct}var Qa=function(){return{prefix:null,iconName:null,rest:[]}};function Hr(n){var t=O,a=Ha.reduce(function(e,r){return e[r]="".concat(g.cssPrefix,"-").concat(r),e},{});return _a.forEach(function(e){(n.includes(a[e])||n.some(function(r){return Dr[e].includes(r)}))&&(t=e)}),t}function Tn(n){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,a=t===void 0?O:t,e=Sr[a][n];if(a===dn&&!n)return"fad";var r=_t[a][n]||_t[a][e],i=n in L.styles?n:null;return r||i||null}function Xr(n){var t=[],a=null;return n.forEach(function(e){var r=Yr(g.cssPrefix,e);r?a=r:e&&t.push(e)}),{iconName:a,rest:t}}function Ot(n){return n.sort().filter(function(t,a,e){return e.indexOf(t)===a})}var jt=Ca.concat(za);function On(n){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,a=t===void 0?!1:t,e=null,r=Ot(n.filter(function(v){return jt.includes(v)})),i=Ot(n.filter(function(v){return!jt.includes(v)})),o=Cn(r.filter(function(v){return e=v,!ia.includes(v)}),1)[0],f=o===void 0?null:o,l=Hr(r),d=u(u({},Xr(i)),{},{prefix:Tn(f,{family:l})});return u(u(u({},d),Br({values:n,family:l,styles:mn,config:g,canonical:d,givenPrefix:e})),Gr(a,e,d))}function Gr(n,t,a){var e=a.prefix,r=a.iconName;if(n||!e||!r)return{prefix:e,iconName:r};var i=t==="fa"?Ka(r):{},o=K(e,r);return r=i.iconName||o||r,e=i.prefix||e,e==="far"&&!mn.far&&mn.fas&&!g.autoFetchSvg&&(e="fas"),{prefix:e,iconName:r}}var Vr=_a.filter(function(n){return n!==O||n!==dn}),qr=Object.keys(Hn).filter(function(n){return n!==O}).map(function(n){return Object.keys(Hn[n])}).flat();function Br(n){var t=n.values,a=n.family,e=n.canonical,r=n.givenPrefix,i=r===void 0?"":r,o=n.styles,f=o===void 0?{}:o,l=n.config,d=l===void 0?{}:l,v=a===dn,m=t.includes("fa-duotone")||t.includes("fad"),h=d.familyDefault==="duotone",S=e.prefix==="fad"||e.prefix==="fa-duotone";return!v&&(m||h||S)&&(e.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(e.prefix="fab"),!e.prefix&&Vr.includes(a)&&(Object.keys(f).find(function(w){return qr.includes(w)})||d.autoFetchSvg)&&(e.prefix=ir.get(a).defaultShortPrefixId,e.iconName=K(e.prefix,e.iconName)||e.iconName),(e.prefix==="fa"||i==="fa")&&(e.prefix=q()||"fas"),e}var Jr=(function(){function n(){Ae(this,n),this.definitions={}}return Ee(n,[{key:"add",value:function(){for(var a=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(f){a.definitions[f]=u(u({},a.definitions[f]||{}),o[f]),Jn(f,o[f]);var l=ft[O][f];l&&Jn(l,o[f]),Ja()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],f=o.prefix,l=o.iconName,d=o.icon,v=d[2];a[f]||(a[f]={}),v.length>0&&v.forEach(function(m){typeof m=="string"&&(a[f][m]=d)}),a[f][l]=d}),a}}])})(),Nt=[],an={},en={},Kr=Object.keys(en);function Qr(n,t){var a=t.mixoutsTo;return Nt=n,an={},Object.keys(en).forEach(function(e){Kr.indexOf(e)===-1&&delete en[e]}),Nt.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),kn(r[o])==="object"&&Object.keys(r[o]).forEach(function(f){a[o]||(a[o]={}),a[o][f]=r[o][f]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(o){an[o]||(an[o]=[]),an[o].push(i[o])})}e.provides&&e.provides(en)}),a}function Kn(n,t){for(var a=arguments.length,e=new Array(a>2?a-2:0),r=2;r<a;r++)e[r-2]=arguments[r];return(an[n]||[]).forEach(function(i){t=i.apply(null,[t].concat(e))}),t}function Q(n){for(var t=arguments.length,a=new Array(t>1?t-1:0),e=1;e<t;e++)a[e-1]=arguments[e];(an[n]||[]).forEach(function(r){r.apply(null,a)})}function B(){var n=arguments[0],t=Array.prototype.slice.call(arguments,1);return en[n]?en[n].apply(null,t):void 0}function Qn(n){n.prefix==="fa"&&(n.prefix="fas");var t=n.iconName,a=n.prefix||q();if(t)return t=K(a,t)||t,Ft(Za.definitions,a,t)||Ft(L.styles,a,t)}var Za=new Jr,R={noAuto:function(){g.autoReplaceSvg=!1,g.observeMutations=!1,Q("noAuto")},config:g,dom:{i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return X?(Q("beforeI2svg",t),B("pseudoElements2svg",t),B("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,Rr(function(){Zr({autoReplaceSvgRoot:a}),Q("watch",t)})}},parse:{icon:function(t){if(t===null)return null;if(kn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:K(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],e=Tn(t[0]);return{prefix:e,iconName:K(e,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(g.cssPrefix,"-"))>-1||t.match(wr))){var r=On(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||q(),iconName:K(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=q();return{prefix:i,iconName:K(i,t)||t}}}},library:Za,findIconDefinition:Qn,toHtml:gn},Zr=function(){var t=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,a=t===void 0?_:t;(Object.keys(L.styles).length>0||g.autoFetchSvg)&&X&&g.autoReplaceSvg&&R.dom.i2svg({node:a})};function jn(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(e){return gn(e)})}}),Object.defineProperty(n,"node",{get:function(){if(X){var e=_.createElement("div");return e.innerHTML=n.html,e.children}}}),n}function ni(n){var t=n.children,a=n.main,e=n.mask,r=n.attributes,i=n.styles,o=n.transform;if(ut(o)&&a.found&&!e.found){var f={x:a.width/a.height/2,y:.5};r.style=Fn(u(u({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function ti(n){var t=n.prefix,a=n.iconName,e=n.children,r=n.attributes,i=n.symbol,o=i===!0?"".concat(t,"-").concat(g.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:e}]}]}function ai(n){return["aria-label","aria-labelledby","title","role"].some(function(t){return t in n})}function dt(n){var t=n.icons,a=t.main,e=t.mask,r=n.prefix,i=n.iconName,o=n.transform,f=n.symbol,l=n.maskId,d=n.extra,v=n.watchable,m=v===void 0?!1:v,h=e.found?e:a,S=h.width,w=h.height,F=[g.replacementClass,i?"".concat(g.cssPrefix,"-").concat(i):""].filter(function(x){return d.classes.indexOf(x)===-1}).filter(function(x){return x!==""||!!x}).concat(d.classes).join(" "),I={children:[],attributes:u(u({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:F,role:d.attributes.role||"img",viewBox:"0 0 ".concat(S," ").concat(w)})};!ai(d.attributes)&&!d.attributes["aria-hidden"]&&(I.attributes["aria-hidden"]="true"),m&&(I.attributes[Z]="");var z=u(u({},I),{},{prefix:r,iconName:i,main:a,mask:e,maskId:l,transform:o,symbol:f,styles:u({},d.styles)}),C=e.found&&a.found?B("generateAbstractMask",z)||{children:[],attributes:{}}:B("generateAbstractIcon",z)||{children:[],attributes:{}},T=C.children,N=C.attributes;return z.children=T,z.attributes=N,f?ti(z):ni(z)}function Rt(n){var t=n.content,a=n.width,e=n.height,r=n.transform,i=n.extra,o=n.watchable,f=o===void 0?!1:o,l=u(u({},i.attributes),{},{class:i.classes.join(" ")});f&&(l[Z]="");var d=u({},i.styles);ut(r)&&(d.transform=Or({transform:r,startCentered:!0,width:a,height:e}),d["-webkit-transform"]=d.transform);var v=Fn(d);v.length>0&&(l.style=v);var m=[];return m.push({tag:"span",attributes:l,children:[t]}),m}function ei(n){var t=n.content,a=n.extra,e=u(u({},a.attributes),{},{class:a.classes.join(" ")}),r=Fn(a.styles);r.length>0&&(e.style=r);var i=[];return i.push({tag:"span",attributes:e,children:[t]}),i}var Yn=L.styles;function Zn(n){var t=n[0],a=n[1],e=Cn(n.slice(4),1)[0],r=null;return Array.isArray(e)?r={tag:"g",attributes:{class:"".concat(g.cssPrefix,"-").concat(Mn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Mn.SECONDARY),fill:"currentColor",d:e[0]}},{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Mn.PRIMARY),fill:"currentColor",d:e[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:e}},{found:!0,width:t,height:a,icon:r}}var ri={found:!1,width:512,height:512};function ii(n,t){!Na&&!g.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(t,'" is missing.'))}function nt(n,t){var a=t;return t==="fa"&&g.styleDefault!==null&&(t=q()),new Promise(function(e,r){if(a==="fa"){var i=Ka(n)||{};n=i.iconName||n,t=i.prefix||t}if(n&&t&&Yn[t]&&Yn[t][n]){var o=Yn[t][n];return e(Zn(o))}ii(n,t),e(u(u({},ri),{},{icon:g.showMissingIcons&&n?B("missingIconAbstract")||{}:{}}))})}var Lt=function(){},tt=g.measurePerformance&&bn&&bn.mark&&bn.measure?bn:{mark:Lt,measure:Lt},fn='FA "7.3.0"',oi=function(t){return tt.mark("".concat(fn," ").concat(t," begins")),function(){return ne(t)}},ne=function(t){tt.mark("".concat(fn," ").concat(t," ends")),tt.measure("".concat(fn," ").concat(t),"".concat(fn," ").concat(t," begins"),"".concat(fn," ").concat(t," ends"))},vt={begin:oi,end:ne},An=function(){};function Mt(n){return typeof(n.getAttribute?n.getAttribute(Z):null)=="string"}function si(n){var t=n.getAttribute?n.getAttribute(ot):null,a=n.getAttribute?n.getAttribute(st):null;return t&&a}function fi(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(g.replacementClass)}function li(){return g.autoReplaceSvg===!0?En.replace:En[g.autoReplaceSvg]||En.replace}function ui(n){return _.createElementNS("http://www.w3.org/2000/svg",n)}function ci(n){return _.createElement(n)}function te(n){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,a=t===void 0?n.tag==="svg"?ui:ci:t;if(typeof n=="string")return _.createTextNode(n);var e=a(n.tag);return Object.keys(n.attributes||[]).forEach(function(r){e.setAttribute(r,n.attributes[r])}),(n.children||[]).forEach(function(r){e.appendChild(te(r,{ceFn:a}))}),e}function mi(n){var t=" ".concat(n.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var En={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore(te(r),a)}),a.getAttribute(Z)===null&&g.keepOriginalSource){var e=_.createComment(mi(a));a.parentNode.replaceChild(e,a)}else a.remove()},nest:function(t){var a=t[0],e=t[1];if(~lt(a).indexOf(g.replacementClass))return En.replace(t);var r=new RegExp("".concat(g.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(f,l){return l===g.replacementClass||l.match(r)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=e.map(function(f){return gn(f)}).join(`
`);a.setAttribute(Z,""),a.innerHTML=o}};function Dt(n){n()}function ae(n,t){var a=typeof t=="function"?t:An;if(n.length===0)a();else{var e=Dt;g.mutateApproach===yr&&(e=V.requestAnimationFrame||Dt),e(function(){var r=li(),i=vt.begin("mutate");n.map(r),i(),a()})}}var gt=!1;function ee(){gt=!0}function at(){gt=!1}var Pn=null;function $t(n){if(Et&&g.observeMutations){var t=n.treeCallback,a=t===void 0?An:t,e=n.nodeCallback,r=e===void 0?An:e,i=n.pseudoElementsCallback,o=i===void 0?An:i,f=n.observeMutationsRoot,l=f===void 0?_:f;Pn=new Et(function(d){if(!gt){var v=q();sn(d).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Mt(m.addedNodes[0])&&(g.searchPseudoElements&&o(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&g.searchPseudoElements&&o([m.target],!0),m.type==="attributes"&&Mt(m.target)&&~Er.indexOf(m.attributeName))if(m.attributeName==="class"&&si(m.target)){var h=On(lt(m.target)),S=h.prefix,w=h.iconName;m.target.setAttribute(ot,S||v),w&&m.target.setAttribute(st,w)}else fi(m.target)&&r(m.target)})}}),X&&Pn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function di(){Pn&&Pn.disconnect()}function vi(n){var t=n.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(e,r){var i=r.split(":"),o=i[0],f=i.slice(1);return o&&f.length>0&&(e[o]=f.join(":").trim()),e},{})),a}function gi(n){var t=n.getAttribute("data-prefix"),a=n.getAttribute("data-icon"),e=n.innerText!==void 0?n.innerText.trim():"",r=On(lt(n));return r.prefix||(r.prefix=q()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=Ur(r.prefix,n.innerText)||mt(r.prefix,Wa(n.innerText))),!r.iconName&&g.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=n.firstChild.data)),r}function pi(n){return sn(n.attributes).reduce(function(t,a){return t.name!=="class"&&t.name!=="style"&&(t[a.name]=a.value),t},{})}function hi(){return{iconName:null,prefix:null,transform:Y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Yt(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=gi(n),e=a.iconName,r=a.prefix,i=a.rest,o=pi(n),f=Kn("parseNodeAttributes",{},n);return u({iconName:e,prefix:r,transform:Y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:t.styleParser?vi(n):[],attributes:o}},f)}var bi=L.styles;function re(n){var t=g.autoReplaceSvg==="nest"?Yt(n,{styleParser:!1}):Yt(n);return~t.extra.classes.indexOf(La)?B("generateLayersText",n,t):B("generateSvgReplacementMutation",n,t)}function yi(){return[].concat(M(za),M(Ca))}function Ut(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!X)return Promise.resolve();var a=_.documentElement.classList,e=function(m){return a.add("".concat(Pt,"-").concat(m))},r=function(m){return a.remove("".concat(Pt,"-").concat(m))},i=g.autoFetchSvg?yi():ia.concat(Object.keys(bi));i.includes("fa")||i.push("fa");var o=[".".concat(La,":not([").concat(Z,"])")].concat(i.map(function(v){return".".concat(v,":not([").concat(Z,"])")})).join(", ");if(o.length===0)return Promise.resolve();var f=[];try{f=sn(n.querySelectorAll(o))}catch{}if(f.length>0)e("pending"),r("complete");else return Promise.resolve();var l=vt.begin("onTree"),d=f.reduce(function(v,m){try{var h=re(m);h&&v.push(h)}catch(S){Na||S.name==="MissingIcon"&&console.error(S)}return v},[]);return new Promise(function(v,m){Promise.all(d).then(function(h){ae(h,function(){e("active"),e("complete"),r("pending"),typeof t=="function"&&t(),l(),v()})}).catch(function(h){l(),m(h)})})}function xi(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;re(n).then(function(a){a&&ae([a],t)})}function Si(n){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(t||{}).icon?t:Qn(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Qn(r||{})),n(e,u(u({},a),{},{mask:r}))}}var wi=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,r=e===void 0?Y:e,i=a.symbol,o=i===void 0?!1:i,f=a.mask,l=f===void 0?null:f,d=a.maskId,v=d===void 0?null:d,m=a.classes,h=m===void 0?[]:m,S=a.attributes,w=S===void 0?{}:S,F=a.styles,I=F===void 0?{}:F;if(t){var z=t.prefix,C=t.iconName,T=t.icon;return jn(u({type:"icon"},t),function(){return Q("beforeDOMElementCreation",{iconDefinition:t,params:a}),dt({icons:{main:Zn(T),mask:l?Zn(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:z,iconName:C,transform:u(u({},Y),r),symbol:o,maskId:v,extra:{attributes:w,styles:I,classes:h}})})}},Ai={mixout:function(){return{icon:Si(wi)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Ut,a.nodeCallback=xi,a}}},provides:function(t){t.i2svg=function(a){var e=a.node,r=e===void 0?_:e,i=a.callback;return Ut(r,i===void 0?function(){}:i)},t.generateSvgReplacementMutation=function(a,e){var r=e.iconName,i=e.prefix,o=e.transform,f=e.symbol,l=e.mask,d=e.maskId,v=e.extra;return new Promise(function(m,h){Promise.all([nt(r,i),l.iconName?nt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var w=Cn(S,2),F=w[0],I=w[1];m([a,dt({icons:{main:F,mask:I},prefix:i,iconName:r,transform:o,symbol:f,maskId:d,extra:v,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(a){var e=a.children,r=a.attributes,i=a.main,o=a.transform,f=a.styles,l=Fn(f);l.length>0&&(r.style=l);var d;return ut(o)&&(d=B("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),e.push(d||i.icon),{children:e,attributes:r}}}},Ei={mixout:function(){return{layer:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return jn({type:"layer"},function(){Q("beforeDOMElementCreation",{assembler:a,params:e});var o=[];return a(function(f){Array.isArray(f)?f.map(function(l){o=o.concat(l.abstract)}):o=o.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(g.cssPrefix,"-layers")].concat(M(i)).join(" ")},children:o}]})}}}},ki={mixout:function(){return{counter:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,o=e.classes,f=o===void 0?[]:o,l=e.attributes,d=l===void 0?{}:l,v=e.styles,m=v===void 0?{}:v;return jn({type:"counter",content:a},function(){return Q("beforeDOMElementCreation",{content:a,params:e}),ei({content:a.toString(),title:i,extra:{attributes:d,styles:m,classes:["".concat(g.cssPrefix,"-layers-counter")].concat(M(f))}})})}}}},Ii={mixout:function(){return{text:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?Y:r,o=e.classes,f=o===void 0?[]:o,l=e.attributes,d=l===void 0?{}:l,v=e.styles,m=v===void 0?{}:v;return jn({type:"text",content:a},function(){return Q("beforeDOMElementCreation",{content:a,params:e}),Rt({content:a,transform:u(u({},Y),i),extra:{attributes:d,styles:m,classes:["".concat(g.cssPrefix,"-layers-text")].concat(M(f))}})})}}},provides:function(t){t.generateLayersText=function(a,e){var r=e.transform,i=e.extra,o=null,f=null;if(ea){var l=parseInt(getComputedStyle(a).fontSize,10),d=a.getBoundingClientRect();o=d.width/l,f=d.height/l}return Promise.resolve([a,Rt({content:a.innerHTML,width:o,height:f,transform:r,extra:i,watchable:!0})])}}},ie=new RegExp('"',"ug"),Wt=[1105920,1112319],Ht=u(u(u(u({},{FontAwesome:{normal:"fas",400:"fas"}}),rr),hr),lr),et=Object.keys(Ht).reduce(function(n,t){return n[t.toLowerCase()]=Ht[t],n},{}),Pi=Object.keys(et).reduce(function(n,t){var a=et[t];return n[t]=a[900]||M(Object.entries(a))[0][1],n},{});function _i(n){return Wa(M(n.replace(ie,""))[0]||"")}function zi(n){var t=n.getPropertyValue("font-feature-settings").includes("ss01"),a=n.getPropertyValue("content").replace(ie,""),e=a.codePointAt(0),r=e>=Wt[0]&&e<=Wt[1],i=a.length===2?a[0]===a[1]:!1;return r||i||t}function Ci(n,t){var a=n.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(t),r=isNaN(e)?"normal":e;return(et[a]||{})[r]||Pi[a]}function Xt(n,t){var a="".concat(br).concat(t.replace(":","-"));return new Promise(function(e,r){if(n.getAttribute(a)!==null)return e();var i=sn(n.children).filter(function(x){return x.getAttribute(Gn)===t})[0],o=V.getComputedStyle(n,t),f=o.getPropertyValue("font-family"),l=f.match(Ar),d=o.getPropertyValue("font-weight"),v=o.getPropertyValue("content");if(i&&!l)return n.removeChild(i),e();if(l&&v!=="none"&&v!==""){var m=o.getPropertyValue("content"),h=Ci(f,d),S=_i(m),w=l[0].startsWith("FontAwesome"),F=zi(o),I=mt(h,S),z=I;if(w){var C=Wr(S);C.iconName&&C.prefix&&(I=C.iconName,h=C.prefix)}if(I&&!F&&(!i||i.getAttribute(ot)!==h||i.getAttribute(st)!==z)){n.setAttribute(a,z),i&&n.removeChild(i);var T=hi(),N=T.extra;N.attributes[Gn]=t,nt(I,h).then(function(x){var pn=dt(u(u({},T),{},{icons:{main:x,mask:Qa()},prefix:h,iconName:z,extra:N,watchable:!0})),J=_.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?n.insertBefore(J,n.firstChild):n.appendChild(J),J.outerHTML=pn.map(function(k){return gn(k)}).join(`
`),n.removeAttribute(a),e()}).catch(r)}else e()}else e()})}function Fi(n){return Promise.all([Xt(n,"::before"),Xt(n,"::after")])}function Ti(n){return n.parentNode!==document.head&&!~xr.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Gn)&&(!n.parentNode||n.parentNode.tagName!=="svg")}var Oi=function(t){return!!t&&ja.some(function(a){return t.includes(a)})},ji=function(t){if(!t)return[];var a=new Set,e=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});e=e.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(d){return d.trim()})});var r=wn(e),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if(Oi(o)){var f=ja.reduce(function(l,d){return l.replace(d,"")},o);f!==""&&f!=="*"&&a.add(f)}}}catch(l){r.e(l)}finally{r.f()}return a};function Gt(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(X){var a;if(t)a=n;else if(g.searchPseudoElementsFullScan)a=n.querySelectorAll("*");else{var e=new Set,r=wn(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;try{var f=wn(o.cssRules),l;try{for(f.s();!(l=f.n()).done;){var d=l.value,v=wn(ji(d.selectorText)),m;try{for(v.s();!(m=v.n()).done;){var h=m.value;e.add(h)}}catch(w){v.e(w)}finally{v.f()}}}catch(w){f.e(w)}finally{f.f()}}catch(w){g.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(w.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(w){r.e(w)}finally{r.f()}if(!e.size)return;var S=Array.from(e).join(", ");try{a=n.querySelectorAll(S)}catch{}}return new Promise(function(w,F){var I=sn(a).filter(Ti).map(Fi),z=vt.begin("searchPseudoElements");ee(),Promise.all(I).then(function(){z(),at(),w()}).catch(function(){z(),at(),F()})})}}var Ni={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Gt,a}}},provides:function(t){t.pseudoElements2svg=function(a){var e=a.node,r=e===void 0?_:e;g.searchPseudoElements&&Gt(r)}}},Vt=!1,Ri={mixout:function(){return{dom:{unwatch:function(){ee(),Vt=!0}}}},hooks:function(){return{bootstrap:function(){$t(Kn("mutationObserverCallbacks",{}))},noAuto:function(){di()},watch:function(a){var e=a.observeMutationsRoot;Vt?at():$t(Kn("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},qt=function(t){return t.toLowerCase().split(" ").reduce(function(a,e){var r=e.toLowerCase().split("-"),i=r[0],o=r.slice(1).join("-");if(i&&o==="h")return a.flipX=!0,a;if(i&&o==="v")return a.flipY=!0,a;if(o=parseFloat(o),isNaN(o))return a;switch(i){case"grow":a.size=a.size+o;break;case"shrink":a.size=a.size-o;break;case"left":a.x=a.x-o;break;case"right":a.x=a.x+o;break;case"up":a.y=a.y-o;break;case"down":a.y=a.y+o;break;case"rotate":a.rotate=a.rotate+o;break}return a},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Li={mixout:function(){return{parse:{transform:function(a){return qt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-transform");return r&&(a.transform=qt(r)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var e=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,f={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),d="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),v="rotate(".concat(r.rotate," 0 0)"),m={outer:f,inner:{transform:"".concat(l," ").concat(d," ").concat(v)},path:{transform:"translate(".concat(o/2*-1," -256)")}};return{tag:"g",attributes:u({},m.outer),children:[{tag:"g",attributes:u({},m.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:u(u({},e.icon.attributes),m.path)}]}]}}}},Un={x:0,y:0,width:"100%",height:"100%"};function Bt(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function Mi(n){return n.tag==="g"?n.children:[n]}Qr([Nr,Ai,Ei,ki,Ii,Ni,Ri,Li,{hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-mask"),i=r?On(r.split(" ").map(function(o){return o.trim()})):Qa();return i.prefix||(i.prefix=q()),a.mask=i,a.maskId=e.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var e=a.children,r=a.attributes,i=a.main,o=a.mask,f=a.maskId,l=a.transform,d=i.width,v=i.icon,m=o.width,h=o.icon,S=Tr({transform:l,containerWidth:m,iconWidth:d}),w={tag:"rect",attributes:u(u({},Un),{},{fill:"white"})},F=v.children?{children:v.children.map(Bt)}:{},I={tag:"g",attributes:u({},S.inner),children:[Bt(u({tag:v.tag,attributes:u(u({},v.attributes),S.path)},F))]},z={tag:"g",attributes:u({},S.outer),children:[I]},C="mask-".concat(f||zt()),T="clip-".concat(f||zt()),N={tag:"mask",attributes:u(u({},Un),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,z]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:Mi(h)},N]};return e.push(x,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(C,")")},Un)}),{children:e,attributes:r}}}},{provides:function(t){var a=!1;V.matchMedia&&(a=V.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),f={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||f.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(f),e.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||e.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-symbol");return a.symbol=r===null?!1:r===""?!0:r,a}}}}],{mixoutsTo:R});var fo=R.noAuto,on=R.config,lo=R.library,uo=R.dom,oe=R.parse,co=R.findIconDefinition,mo=R.toHtml,Di=R.icon,vo=R.layer,go=R.text,po=R.counter,ho=xe();function $i(n){return n=n-0,n===n}function se(n){return $i(n)?n:(n=n.replace(/[_-]+(.)?/g,(t,a)=>a?a.toUpperCase():""),n.charAt(0).toLowerCase()+n.slice(1))}var Yi=(n,t)=>zn.createElement("stop",{key:`${t}-${n.offset}`,offset:n.offset,stopColor:n.color,...n.opacity!==void 0&&{stopOpacity:n.opacity}});function Ui(n){return n.charAt(0).toUpperCase()+n.slice(1)}var tn=new Map,Wi=1e3;function Hi(n){if(tn.has(n))return tn.get(n);const t={};let a=0;const e=n.length;for(;a<e;){const r=n.indexOf(";",a),i=r===-1?e:r,o=n.slice(a,i).trim();if(o){const f=o.indexOf(":");if(f>0){const l=o.slice(0,f).trim(),d=o.slice(f+1).trim();if(l&&d){const v=se(l);t[v.startsWith("webkit")?Ui(v):v]=d}}}a=i+1}if(tn.size===Wi){const r=tn.keys().next().value;r&&tn.delete(r)}return tn.set(n,t),t}function fe(n,t,a={}){if(typeof t=="string")return t;const e=(t.children||[]).map(m=>{let h=m;return("fill"in a||a.gradientFill)&&m.tag==="path"&&"fill"in m.attributes&&(h={...m,attributes:{...m.attributes,fill:void 0}}),fe(n,h)}),r=t.attributes||{},i={};for(const[m,h]of Object.entries(r))switch(!0){case m==="class":i.className=h;break;case m==="style":i.style=Hi(String(h));break;case m.startsWith("aria-"):case m.startsWith("data-"):i[m.toLowerCase()]=h;break;default:i[se(m)]=h}const{style:o,role:f,"aria-label":l,gradientFill:d,...v}=a;if(o&&(i.style=i.style?{...i.style,...o}:o),f&&(i.role=f),l&&(i["aria-label"]=l,i["aria-hidden"]="false"),d){i.fill=`url(#${d.id})`;const{type:m,stops:h=[],...S}=d;e.unshift(n(m==="linear"?"linearGradient":"radialGradient",{...S,id:d.id},h.map(Yi)))}return n(t.tag,{...i,...v},...e)}var Xi=fe.bind(null,zn.createElement),Jt=(n,t)=>{const a=(0,zn.useId)();return n||(t?a:void 0)},Gi=class{constructor(n="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&!1}catch{}this.scope=n,this.enabled=t}log(...n){this.enabled&&console.log(`[${this.scope}]`,...n)}warn(...n){this.enabled&&console.warn(`[${this.scope}]`,...n)}error(...n){this.enabled&&console.error(`[${this.scope}]`,...n)}};typeof process<"u"&&{}.FA_VERSION;var Vi="searchPseudoElementsFullScan"in on&&typeof on.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",qi=Number.parseInt(Vi)>=7,Bi=()=>qi,cn="fa",U={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},Ji={left:"fa-pull-left",right:"fa-pull-right"},Ki={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Qi={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},$={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"},Zi={default:"fa-layers"};function no(n){const t=on.cssPrefix||on.familyPrefix||cn;return t===cn?n:n.replace(new RegExp(String.raw`(?<=^|\s)${cn}-`,"g"),`${t}-`)}function to(n){const{beat:t,fade:a,beatFade:e,bounce:r,shake:i,spin:o,spinPulse:f,spinReverse:l,pulse:d,fixedWidth:v,inverse:m,border:h,flip:S,size:w,rotation:F,pull:I,swapOpacity:z,rotateBy:C,widthAuto:T,className:N}=n,x=[];return N&&x.push(...N.split(" ")),t&&x.push(U.beat),a&&x.push(U.fade),e&&x.push(U.beatFade),r&&x.push(U.bounce),i&&x.push(U.shake),o&&x.push(U.spin),l&&x.push(U.spinReverse),f&&x.push(U.spinPulse),d&&x.push(U.pulse),v&&x.push($.fixedWidth),m&&x.push($.inverse),h&&x.push($.border),S===!0&&x.push($.flip),(S==="horizontal"||S==="both")&&x.push($.flipHorizontal),(S==="vertical"||S==="both")&&x.push($.flipVertical),w!=null&&x.push(Qi[w]),F!=null&&F!==0&&x.push(Ki[F]),I!=null&&x.push(Ji[I]),z&&x.push($.swapOpacity),Bi()?(C&&x.push($.rotateBy),T&&x.push($.widthAuto),(on.cssPrefix||on.familyPrefix||cn)===cn?x:x.map(no)):x}var ao=n=>typeof n=="object"&&"icon"in n&&!!n.icon;function Kt(n){if(n)return ao(n)?n:oe.icon(n)}function eo(n){return Object.keys(n)}var Qt=new Gi("FontAwesomeIcon"),le={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},ro=new Set(Object.keys(le)),io=zn.forwardRef((n,t)=>{const a={...le,...n},{icon:e,mask:r,symbol:i,title:o,titleId:f,maskId:l,transform:d}=a,v=Jt(l,!!r),m=Jt(f,!!o),h=Kt(e);if(!h)return Qt.error("Icon lookup is undefined",e),null;const S=to(a),w=typeof d=="string"?oe.transform(d):d,F=Kt(r),I=Di(h,{...S.length>0&&{classes:S},...w&&{transform:w},...F&&{mask:F},symbol:i,title:o,titleId:m,maskId:v});if(!I)return Qt.error("Could not find icon",h),null;const{abstract:z}=I,C={ref:t};for(const T of eo(a))ro.has(T)||(C[T]=a[T]);return Xi(z[0],C)});io.displayName="FontAwesomeIcon";var bo=`${Zi.default} ${$.fixedWidth}`,yo={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},xo={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},So={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]},wo={prefix:"fas",iconName:"arrow-right",icon:[512,512,[8594],"f061","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},oo={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z"]},Ao=oo,Eo={prefix:"fas",iconName:"comment-dots",icon:[512,512,[128172,62075,"commenting"],"f4ad","M256 480c141.4 0 256-107.5 256-240S397.4 0 256 0 0 107.5 0 240c0 54.3 19.2 104.3 51.6 144.5L2.8 476.8c-4.8 9-3.3 20 3.6 27.5s17.8 9.8 27.1 5.8l118.4-50.7C183.7 472.6 218.9 480 256 480zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},ko={prefix:"fas",iconName:"download",icon:[448,512,[],"f019","M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},Io={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M216.5 362.5c-66-8-112.5-55.5-112.5-117 0-25 9-52 24-70-6.5-16.5-5.5-51.5 2-66 20-2.5 47 8 63 22.5 19-6 39-9 63.5-9s44.5 3 62.5 8.5c15.5-14 43-24.5 63-22 7 13.5 8 48.5 1.5 65.5 16 19 24.5 44.5 24.5 70.5 0 61.5-46.5 108-113.5 116.5 17 11 28.5 35 28.5 62.5l0 52C323 491.5 335.5 500 350.5 494 441 459.5 512 369 512 257 512 115.5 397 0 255.5 0S0 115.5 0 257c0 111 70.5 203 165.5 237.5 13.5 5 26.5-4 26.5-17.5l0-40c-7 3-16 5-24 5-33 0-52.5-18-66.5-51.5-5.5-13.5-11.5-21.5-23-23-6-.5-8-3-8-6 0-6 10-10.5 20-10.5 14.5 0 27 9 40 27.5 10 14.5 20.5 21 33 21s20.5-4.5 32-16c8.5-8.5 15-16 21-21z"]},Po={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"]};export{Ao as a,yo as c,xe as d,be as f,xo as i,So as l,Po as n,Eo as o,wo as r,ko as s,Io as t,io as u};
