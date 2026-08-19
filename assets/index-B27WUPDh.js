const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/esm-Bt_Y4fFy.js","assets/rolldown-runtime-Dik6OG8R.js","assets/motion-hZNTccxT.js","assets/NotFound-BWds0Wtx.js"])))=>i.map(i=>d[i]);
import{n as fa}from"./rolldown-runtime-Dik6OG8R.js";import{t as ha}from"./react-DR6JgvC1.js";import{a as pa,i as De,n as ga,o as ya,r as xa,t as k}from"./motion-hZNTccxT.js";var va=ha(),l=fa(ya(),1),Tt=(0,l.createContext)(void 0),o=pa(),ba=({children:e})=>{const[t,a]=(0,l.useState)(()=>{if(typeof window>"u")return!1;try{const s=localStorage.getItem("darkMode");if(s!==null)return JSON.parse(s)===!0}catch(s){console.error("Error parsing saved theme:",s)}return window.matchMedia("(prefers-color-scheme: dark)").matches});(0,l.useEffect)(()=>{typeof document>"u"||document.documentElement.classList.toggle("dark",t)},[t]);const r=(0,l.useCallback)(()=>{a(s=>(localStorage.setItem("darkMode",JSON.stringify(!s)),!s))},[]),n=(0,l.useMemo)(()=>({darkMode:t,toggleDarkMode:r}),[t,r]);return(0,o.jsx)(Tt.Provider,{value:n,children:(0,o.jsx)("div",{className:t?"dark":"",children:e})})},Ke=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,St=/^[\\/]{2}/;function wa(e,t){return t+e.replace(/\\/g,"/")}var it="popstate";function lt(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function _a(e={}){function t(r,n){let s=n.state?.masked,{pathname:i,search:c,hash:u}=s||r.location;return $e("",{pathname:i,search:c,hash:u},n.state&&n.state.usr||null,n.state&&n.state.key||"default",s?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function a(r,n){return typeof n=="string"?n:ne(n)}return Ea(t,a,null,e)}function N(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function U(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ka(){return Math.random().toString(36).substring(2,10)}function ct(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function $e(e,t,a=null,r,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?ee(t):t,state:a,key:t&&t.key||r||ka(),mask:n}}function ne({pathname:e="/",search:t="",hash:a=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function ee(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substring(a),e=e.substring(0,a));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Ea(e,t,a,r={}){let{window:n=document.defaultView,v5Compat:s=!1}=r,i=n.history,c="POP",u=null,d=f();d==null&&(d=0,i.replaceState({...i.state,idx:d},""));function f(){return(i.state||{idx:null}).idx}function m(){c="POP";let y=f(),w=y==null?null:y-d;d=y,u&&u({action:c,location:b.location,delta:w})}function g(y,w){c="PUSH";let x=lt(y)?y:$e(b.location,y,w);a&&a(x,y),d=f()+1;let p=ct(x,d),_=b.createHref(x.mask||x);try{i.pushState(p,"",_)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;n.location.assign(_)}s&&u&&u({action:c,location:b.location,delta:1})}function h(y,w){c="REPLACE";let x=lt(y)?y:$e(b.location,y,w);a&&a(x,y),d=f();let p=ct(x,d),_=b.createHref(x.mask||x);i.replaceState(p,"",_),s&&u&&u({action:c,location:b.location,delta:0})}function v(y){return Ta(n,y)}let b={get action(){return c},get location(){return e(n,i)},listen(y){if(u)throw new Error("A history only accepts one active listener");return n.addEventListener(it,m),u=y,()=>{n.removeEventListener(it,m),u=null}},createHref(y){return t(n,y)},createURL:v,encodeLocation(y){let w=v(y);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:g,replace:h,go(y){return i.go(y)}};return b}function Ta(e,t,a=!1){let r="http://localhost";e&&(r=e.location.origin!=="null"?e.location.origin:e.location.href),N(r,"No window.location.(origin|href) available to create URL");let n=typeof t=="string"?t:ne(t);return n=n.replace(/ $/,"%20"),!a&&St.test(n)&&(n=r+n),new URL(n,r)}function jt(e,t,a="/"){return Sa(e,t,a,!1)}function Sa(e,t,a,r,n){let s=G((typeof t=="string"?ee(t):t).pathname||"/",a);if(s==null)return null;let i=n??Ca(e),c=null,u=Fa(s);for(let d=0;c==null&&d<i.length;++d)c=Ba(i[d],u,r);return c}function ja(e,t){let{route:a,pathname:r,params:n}=e;return{id:a.id,pathname:r,params:n,loaderData:t[a.id],handle:a.handle}}function Ca(e){let t=Ct(e);return Na(t),t}function Ct(e,t=[],a=[],r="",n=!1){let s=(i,c,u=n,d)=>{let f={relativePath:d===void 0?i.path||"":d,caseSensitive:i.caseSensitive===!0,childrenIndex:c,route:i};if(f.relativePath.startsWith("/")){if(!f.relativePath.startsWith(r)&&u)return;N(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length)}let m=B([r,f.relativePath]),g=a.concat(f);i.children&&i.children.length>0&&(N(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Ct(i.children,t,g,m,u)),!(i.path==null&&!i.index)&&t.push({path:m,score:Oa(m,i.index),routesMeta:g.map((h,v)=>{let[b,y]=Pt(h.relativePath,h.caseSensitive,v===g.length-1);return{...h,matcher:b,compiledParams:y}})})};return e.forEach((i,c)=>{if(i.path===""||!i.path?.includes("?"))s(i,c);else for(let u of Nt(i.path))s(i,c,!0,u)}),t}function Nt(e){let t=e.split("/");if(t.length===0)return[];let[a,...r]=t,n=a.endsWith("?"),s=a.replace(/\?$/,"");if(r.length===0)return n?[s,""]:[s];let i=Nt(r.join("/")),c=[];return c.push(...i.map(u=>u===""?s:[s,u].join("/"))),n&&c.push(...i),c.map(u=>e.startsWith("/")&&u===""?"/":u)}function Na(e){e.sort((t,a)=>t.score!==a.score?a.score-t.score:za(t.routesMeta.map(r=>r.childrenIndex),a.routesMeta.map(r=>r.childrenIndex)))}var Ra=/^:[\w-]+$/,Pa=/^:[\w-]+/,Ia=3.5,La=3,Ma=2,Aa=1,Da=10,$a=-2,ut=e=>e==="*";function Oa(e,t){let a=e.split("/"),r=a.length;return a.some(ut)&&(r+=$a),t&&(r+=Ma),a.filter(n=>!ut(n)).reduce((n,s)=>n+(Ra.test(s)?La:Pa.test(s)?Ia:s===""?Aa:Da),r)}function za(e,t){return e.length===t.length&&e.slice(0,-1).every((a,r)=>a===t[r])?e[e.length-1]-t[t.length-1]:0}function Ba(e,t,a=!1){let{routesMeta:r}=e,n={},s="/",i=[];for(let c=0;c<r.length;++c){let u=r[c],d=c===r.length-1,f=s==="/"?t:t.slice(s.length)||"/",m={path:u.relativePath,caseSensitive:u.caseSensitive,end:d},g=u.matcher&&u.compiledParams?Rt(m,f,u.matcher,u.compiledParams):ve(m,f),h=u.route;if(!g&&d&&a&&!r[r.length-1].route.index&&(g=ve({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!g)return null;Object.assign(n,g.params),i.push({params:n,pathname:B([s,g.pathname]),pathnameBase:Ua(B([s,g.pathnameBase])),route:h}),g.pathnameBase!=="/"&&(s=B([s,g.pathnameBase]))}return i}function ve(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,r]=Pt(e.path,e.caseSensitive,e.end);return Rt(e,t,a,r)}function Rt(e,t,a,r){let n=t.match(a);if(!n)return null;let s=n[0],i=s.replace(/(.)\/+$/,"$1"),c=n.slice(1);return{params:r.reduce((u,{paramName:d,isOptional:f},m)=>{if(d==="*"){let h=c[m]||"";i=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}const g=c[m];return f&&!g?u[d]=void 0:u[d]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:i,pattern:e}}function Pt(e,t=!1,a=!0){U(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,i,c,u,d)=>{if(r.push({paramName:i,isOptional:c!=null}),c){let f=d.charAt(u+s.length);return f&&f!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(?=\/|$|\()/g,"(?:/$1)?");return e.endsWith("*")?(r.push({paramName:"*"}),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,t?void 0:"i"),r]}function Fa(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return U(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function G(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,r=e.charAt(a);return r&&r!=="/"?null:e.slice(a)||"/"}function Ha(e,t="/"){let{pathname:a,search:r="",hash:n=""}=typeof e=="string"?ee(e):e,s;return a?(a=Lt(a),a.startsWith("/")?s=dt(a.substring(1),"/"):s=dt(a,t)):s=t,{pathname:s,search:Ga(r),hash:Ja(n)}}function dt(e,t){let a=Mt(t).split("/");return e.split("/").forEach(r=>{r===".."?a.length>1&&a.pop():r!=="."&&a.push(r)}),a.length>1?a.join("/"):"/"}function Re(e,t,a,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Va(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}function It(e){let t=Va(e);return t.map((a,r)=>r===t.length-1?a.pathname:a.pathnameBase)}function Ye(e,t,a,r=!1){let n;typeof e=="string"?n=ee(e):(n={...e},N(!n.pathname||!n.pathname.includes("?"),Re("?","pathname","search",n)),N(!n.pathname||!n.pathname.includes("#"),Re("#","pathname","hash",n)),N(!n.search||!n.search.includes("#"),Re("#","search","hash",n)));let s=e===""||n.pathname==="",i=s?"/":n.pathname,c;if(i==null)c=a;else{let m=t.length-1;if(!r&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),m-=1;n.pathname=g.join("/")}c=m>=0?t[m]:"/"}let u=Ha(n,c),d=i&&i!=="/"&&i.endsWith("/"),f=(s||i===".")&&a.endsWith("/");return!u.pathname.endsWith("/")&&(d||f)&&(u.pathname+="/"),u}var Lt=e=>e.replace(/[\\/]{2,}/g,"/"),B=e=>Lt(e.join("/")),Mt=e=>e.replace(/\/+$/,""),Ua=e=>Mt(e).replace(/^\/*/,"/"),Ga=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ja=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Wa=class{status;statusText;data;error;internal;constructor(e,t,a,r=!1){this.status=e,this.statusText=t||"",this.internal=r,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function qa(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Ka(e){return B(e.map(t=>t.route.path).filter(Boolean))||"/"}var At=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Dt(e,t){let a=e;if(typeof a!="string"||!Ke.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let r=a,n=!1;if(At)try{let s=new URL(window.location.href),i=St.test(a)?new URL(wa(a,s.protocol)):new URL(a),c=G(i.pathname,t);i.origin===s.origin&&c!=null?a=c+i.search+i.hash:n=!0}catch{U(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:n,to:a}}var $t=["POST","PUT","PATCH","DELETE"],mo=new Set($t),Ya=["GET",...$t],fo=new Set(Ya),Xa=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Qa(e){try{return Xa.includes(new URL(e).protocol)}catch{return!1}}var te=l.createContext(null);te.displayName="DataRouter";var oe=l.createContext(null);oe.displayName="DataRouterState";var Ot=l.createContext(!1);function Za(){return l.useContext(Ot)}var zt=l.createContext({isTransitioning:!1});zt.displayName="ViewTransition";var er=l.createContext(new Map);er.displayName="Fetchers";var Oe=l.createContext(null);Oe.displayName="Await";var D=l.createContext(null);D.displayName="Navigation";var ie=l.createContext(null);ie.displayName="Location";var W=l.createContext({outlet:null,matches:[],isDataRoute:!1});W.displayName="Route";var Xe=l.createContext(null);Xe.displayName="RouteError";var Bt="REACT_ROUTER_ERROR",tr="REDIRECT",ar="ROUTE_ERROR_RESPONSE";function rr(e){if(e.startsWith(`${Bt}:${tr}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function nr(e){if(e.startsWith(`${Bt}:${ar}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Wa(t.status,t.statusText,t.data)}catch{}}function sr(e,{relative:t}={}){N(le(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:r}=l.useContext(D),{hash:n,pathname:s,search:i}=ce(e,{relative:t}),c=s;return a!=="/"&&(c=s==="/"?a:B([a,s])),r.createHref({pathname:c,search:i,hash:n})}function le(){return l.useContext(ie)!=null}function F(){return N(le(),"useLocation() may be used only in the context of a <Router> component."),l.useContext(ie).location}var Ft="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function or(){let{isDataRoute:e}=l.useContext(W);return e?br():ir()}function ir(){N(le(),"useNavigate() may be used only in the context of a <Router> component.");let e=l.useContext(te),{basename:t,navigator:a}=l.useContext(D),{matches:r}=l.useContext(W),{pathname:n}=F(),s=JSON.stringify(It(r)),i=l.useRef(!1);return l.useLayoutEffect(()=>{i.current=!0}),l.useCallback((c,u={})=>{if(U(i.current,Ft),!i.current)return;if(typeof c=="number"){a.go(c);return}let d=Ye(c,JSON.parse(s),n,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:B([t,d.pathname])),(u.replace?a.replace:a.push)(d,u.state,u)},[t,a,s,n,e])}var ho=l.createContext(null);function ce(e,{relative:t}={}){let{matches:a}=l.useContext(W),{pathname:r}=F(),n=JSON.stringify(It(a));return l.useMemo(()=>Ye(e,JSON.parse(n),r,t==="path"),[e,n,r,t])}function lr(e,t){return Ht(e,t)}function Ht(e,t,a){N(le(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=l.useContext(D),{matches:n}=l.useContext(W),s=n[n.length-1],i=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=F(),d;if(t){let v=typeof t=="string"?ee(t):t;N(c==="/"||v.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${v.pathname}" was given in the \`location\` prop.`),d=v}else d=u;let f=d.pathname||"/",m=f;if(c!=="/"){let v=c.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(v.length).join("/")}let g=a&&a.state.matches.length?a.state.matches.map(v=>Object.assign(v,{route:a.manifest[v.route.id]||v.route})):jt(e,{pathname:m}),h=hr(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},i,v.params),pathname:B([c,r.encodeLocation?r.encodeLocation(v.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?c:B([c,r.encodeLocation?r.encodeLocation(v.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:v.pathnameBase])})),n,a);return t&&h?l.createElement(ie.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...d},navigationType:"POP"}},h):h}function cr(){let e=vr(),t=qa(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null;return l.createElement(l.Fragment,null,l.createElement("h2",null,"Unexpected Application Error!"),l.createElement("h3",{style:{fontStyle:"italic"}},t),a?l.createElement("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},a):null,null)}var ur=l.createElement(cr,null),dr=class extends l.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static contextType=Ot;static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const a=nr(e.digest);a&&(e=a)}let t=e!==void 0?l.createElement(W.Provider,{value:this.props.routeContext},l.createElement(Xe.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?l.createElement(mr,{error:e},t):t}},Pe=new WeakMap;function mr({children:e,error:t}){let{basename:a}=l.useContext(D);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=rr(t.digest);if(r){let n=Pe.get(t);if(n)throw n;let s=Dt(r.location,a),i=s.absoluteURL||s.to;if(Qa(i))throw new Error("Invalid redirect location");if(At&&!Pe.get(t))if(s.isExternal||r.reloadDocument)window.location.href=i;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:r.replace}));throw Pe.set(t,c),c}return l.createElement("meta",{httpEquiv:"refresh",content:`0;url=${i}`})}}return e}function fr({routeContext:e,match:t,children:a}){let r=l.useContext(te);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),l.createElement(W.Provider,{value:e},a)}function hr(e,t=[],a){let r=a?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let n=e,s=r?.errors;if(s!=null){let f=n.findIndex(m=>m.route.id&&s?.[m.route.id]!==void 0);N(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),n=n.slice(0,Math.min(n.length,f+1))}let i=!1,c=-1;if(a&&r){i=r.renderFallback;for(let f=0;f<n.length;f++){let m=n[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=f),m.route.id){let{loaderData:g,errors:h}=r,v=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!h||h[m.route.id]===void 0);if(m.route.lazy||v){a.isStatic&&(i=!0),c>=0?n=n.slice(0,c+1):n=[n[0]];break}}}}let u=a?.onError,d=r&&u?(f,m)=>{u(f,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Ka(r.matches),errorInfo:m})}:void 0;return n.reduceRight((f,m,g)=>{let h,v=!1,b=null,y=null;r&&(h=s&&m.route.id?s[m.route.id]:void 0,b=m.route.errorElement||ur,i&&(c<0&&g===0?(wr("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,y=null):c===g&&(v=!0,y=m.route.hydrateFallbackElement||null)));let w=t.concat(n.slice(0,g+1)),x=()=>{let p;return h?p=b:v?p=y:m.route.Component?p=l.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=f,l.createElement(fr,{match:m,routeContext:{outlet:f,matches:w,isDataRoute:r!=null},children:p})};return r&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?l.createElement(dr,{location:r.location,revalidation:r.revalidation,component:b,error:h,children:x(),routeContext:{outlet:null,matches:w,isDataRoute:!0},onError:d}):x()},null)}function Qe(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pr(e){let t=l.useContext(te);return N(t,Qe(e)),t}function Ze(e){let t=l.useContext(oe);return N(t,Qe(e)),t}function gr(e){let t=l.useContext(W);return N(t,Qe(e)),t}function et(e){let t=gr(e),a=t.matches[t.matches.length-1];return N(a.route.id,`${e} can only be used on routes that contain a unique "id"`),a.route.id}function yr(){return et("useRouteId")}function xr(){let e=Ze("useNavigation");return l.useMemo(()=>{let{matches:t,historyAction:a,...r}=e.navigation;return r},[e.navigation])}function Vt(){let{matches:e,loaderData:t}=Ze("useMatches");return l.useMemo(()=>e.map(a=>ja(a,t)),[e,t])}function vr(){let e=l.useContext(Xe),t=Ze("useRouteError"),a=et("useRouteError");return e!==void 0?e:t.errors?.[a]}function br(){let{router:e}=pr("useNavigate"),t=et("useNavigate"),a=l.useRef(!1);return l.useLayoutEffect(()=>{a.current=!0}),l.useCallback(async(r,n={})=>{U(a.current,Ft),a.current&&(typeof r=="number"?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...n}))},[e,t])}var mt={};function wr(e,t,a){!t&&!mt[e]&&(mt[e]=!0,U(!1,a))}var po=l.memo(_r);function _r({routes:e,manifest:t,future:a,state:r,isStatic:n,onError:s}){return Ht(e,void 0,{manifest:t,state:r,isStatic:n,onError:s,future:a})}function ze(e){N(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ut({basename:e="/",children:t=null,location:a,navigationType:r="POP",navigator:n,static:s=!1,useTransitions:i}){N(!le(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=e.replace(/^\/*/,"/"),u=l.useMemo(()=>({basename:c,navigator:n,static:s,useTransitions:i,future:{}}),[c,n,s,i]);typeof a=="string"&&(a=ee(a));let{pathname:d="/",search:f="",hash:m="",state:g=null,key:h="default",mask:v}=a,b=l.useMemo(()=>{let y=G(d,c);return y==null?null:{location:{pathname:y,search:f,hash:m,state:g,key:h,mask:v},navigationType:r}},[c,d,f,m,g,h,r,v]);return U(b!=null,`<Router basename="${c}"> is not able to match the URL "${d}${f}${m}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:l.createElement(D.Provider,{value:u},l.createElement(ie.Provider,{children:t,value:b}))}function kr({children:e,location:t}){return lr(Be(e),t)}var go=class extends l.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:a}=this.props,r=null,n=0;if(!(a instanceof Promise))n=1,r=Promise.resolve(),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_data",{get:()=>a});else if(this.state.error){n=2;let s=this.state.error;r=Promise.reject().catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_error",{get:()=>s})}else a._tracked?(r=a,n="_error"in r?2:"_data"in r?1:0):(n=0,Object.defineProperty(a,"_tracked",{get:()=>!0}),r=a.then(s=>Object.defineProperty(a,"_data",{get:()=>s}),s=>{this.props.onError?.(s),Object.defineProperty(a,"_error",{get:()=>s})}));if(n===2&&!t)throw r._error;if(n===2)return l.createElement(Oe.Provider,{value:r,children:t});if(n===1)return l.createElement(Oe.Provider,{value:r,children:e});throw r}};function Be(e,t=[]){let a=[];return l.Children.forEach(e,(r,n)=>{if(!l.isValidElement(r))return;let s=[...t,n];if(r.type===l.Fragment){a.push.apply(a,Be(r.props.children,s));return}N(r.type===ze,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`);let i=r.props;N(!i.index||!i.children,"An index route cannot have child routes.");let c={id:i.id||s.join("-"),caseSensitive:i.caseSensitive,element:i.element,Component:i.Component,index:i.index,path:i.path,middleware:i.middleware,loader:i.loader,action:i.action,hydrateFallbackElement:i.hydrateFallbackElement,HydrateFallback:i.HydrateFallback,errorElement:i.errorElement,ErrorBoundary:i.ErrorBoundary,shouldRevalidate:i.shouldRevalidate,handle:i.handle,lazy:i.lazy};i.children&&(c.children=Be(i.children,s)),a.push(c)}),a}var xe="application/x-www-form-urlencoded";function _e(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function Er(e){return _e(e)&&e.tagName.toLowerCase()==="button"}function Tr(e){return _e(e)&&e.tagName.toLowerCase()==="form"}function Sr(e){return _e(e)&&e.tagName.toLowerCase()==="input"}function jr(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Cr(e,t){return e.button===0&&(!t||t==="_self")&&!jr(e)}var pe=null;function Nr(){if(pe===null)try{new FormData(document.createElement("form"),0),pe=!1}catch{pe=!0}return pe}var Rr=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ie(e){return e!=null&&!Rr.has(e)?(U(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xe}"`),null):e}function Pr(e,t){let a,r,n,s,i;if(Tr(e)){let c=e.getAttribute("action");r=c?G(c,t):null,a=e.getAttribute("method")||"get",n=Ie(e.getAttribute("enctype"))||xe,s=new FormData(e)}else if(Er(e)||Sr(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=e.getAttribute("formaction")||c.getAttribute("action");if(r=u?G(u,t):null,a=e.getAttribute("formmethod")||c.getAttribute("method")||"get",n=Ie(e.getAttribute("formenctype"))||Ie(c.getAttribute("enctype"))||xe,s=new FormData(c,e),!Nr()){let{name:d,type:f,value:m}=e;if(f==="image"){let g=d?`${d}.`:"";s.append(`${g}x`,"0"),s.append(`${g}y`,"0")}else d&&s.append(d,m)}}else{if(_e(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a="get",r=null,n=xe,i=e}return s&&n==="text/plain"&&(i=s,s=void 0),{action:r,method:a.toLowerCase(),encType:n,formData:s,body:i}}function tt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}var Ir={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},Lr=/[&><\u2028\u2029]/g;function ft(e){return e.replace(Lr,t=>Ir[t])}function Gt(e,t){let a=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${t}`:a.pathname=`${a.pathname}.${t}`,a}var Mr=(function(){const t=typeof document<"u"&&document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"})(),Ar=function(e){return"/"+e},ht={},at=function(t,a,r){let n=Promise.resolve();if(a&&a.length>0){let d=function(m){return Promise.all(m.map(g=>Promise.resolve(g).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))},f=function(m){return import.meta.resolve?import.meta.resolve(m):new URL(m,import.meta.url).href};const i=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=c?.nonce||c?.getAttribute("nonce");n=d(a.map(m=>{if(m=Ar(m,r),m=f(m),m in ht)return;ht[m]=!0;const g=m.endsWith(".css");for(let v=i.length-1;v>=0;v--){const b=i[v];if(b.href===m&&(!g||b.rel==="stylesheet"))return}const h=document.createElement("link");if(h.rel=g?"stylesheet":Mr,g||(h.as="script"),h.crossOrigin="",h.href=m,u&&h.setAttribute("nonce",u),document.head.appendChild(h),g)return new Promise((v,b)=>{h.addEventListener("load",v),h.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${m}`)))})}))}function s(i){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=i,window.dispatchEvent(c),!c.defaultPrevented)throw i}return n.then(i=>{for(const c of i||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})};async function Dr(e,t){if(e.id in t)return t[e.id];try{let a=await at(()=>import(e.module),[]);return t[e.id]=a,a}catch(a){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $r(e){return e!=null&&typeof e.page=="string"}function Or(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function zr(e,t,a){return Vr((await Promise.all(e.map(async r=>{let n=t.routes[r.route.id];if(n){let s=await Dr(n,a);return s.links?s.links():[]}return[]}))).flat(1).filter(Or).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function pt(e,t,a,r,n,s){let i=(u,d)=>a[d]?u.route.id!==a[d].route.id:!0,c=(u,d)=>a[d].pathname!==u.pathname||a[d].route.path?.endsWith("*")&&a[d].params["*"]!==u.params["*"];return s==="assets"?t.filter((u,d)=>i(u,d)||c(u,d)):s==="data"?t.filter((u,d)=>{let f=r.routes[u.route.id];if(!f||!f.hasLoader)return!1;if(i(u,d)||c(u,d))return!0;if(u.route.shouldRevalidate){let m=u.route.shouldRevalidate({currentUrl:new URL(n.pathname+n.search+n.hash,window.origin),currentParams:a[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function Br(e,t,{includeHydrateFallback:a}={}){return Fr(e.map(r=>{let n=t.routes[r.route.id];if(!n)return[];let s=[n.module];return n.clientActionModule&&(s=s.concat(n.clientActionModule)),n.clientLoaderModule&&(s=s.concat(n.clientLoaderModule)),a&&n.hydrateFallbackModule&&(s=s.concat(n.hydrateFallbackModule)),n.imports&&(s=s.concat(n.imports)),s}).flat(1))}function Fr(e){return[...new Set(e)]}function Hr(e){let t={},a=Object.keys(e).sort();for(let r of a)t[r]=e[r];return t}function Vr(e,t){let a=new Set,r=new Set(t);return e.reduce((n,s)=>{if(t&&!$r(s)&&s.as==="script"&&s.href&&r.has(s.href))return n;let i=JSON.stringify(Hr(s));return a.has(i)||(a.add(i),n.push({key:i,link:s})),n},[])}function Ur(){let e=l.useContext(te);return tt(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Gr(){let e=l.useContext(oe);return tt(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var ke=l.createContext(void 0);ke.displayName="FrameworkContext";function rt(){let e=l.useContext(ke);return tt(e,"You must render this element inside a <HydratedRouter> element"),e}function Jr(e,t){let a=l.useContext(ke),[r,n]=l.useState(!1),[s,i]=l.useState(!1),{onFocus:c,onBlur:u,onMouseEnter:d,onMouseLeave:f,onTouchStart:m}=t,g=l.useRef(null);l.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let b=w=>{w.forEach(x=>{i(x.isIntersecting)})},y=new IntersectionObserver(b,{threshold:.5});return g.current&&y.observe(g.current),()=>{y.disconnect()}}},[e]),l.useEffect(()=>{if(r){let b=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(b)}}},[r]);let h=()=>{n(!0)},v=()=>{n(!1),i(!1)};return a?e!=="intent"?[s,g,{}]:[s,g,{onFocus:ae(c,h),onBlur:ae(u,v),onMouseEnter:ae(d,h),onMouseLeave:ae(f,v),onTouchStart:ae(m,h)}]:[!1,g,{}]}function ae(e,t){return a=>{e&&e(a),a.defaultPrevented||t(a)}}function Wr({page:e,...t}){let a=Za(),{nonce:r}=rt(),{router:n}=Ur(),s=l.useMemo(()=>jt(n.routes,e,n.basename),[n.routes,e,n.basename]);return s?(t.nonce==null&&r&&(t={...t,nonce:r}),a?l.createElement(Kr,{page:e,matches:s,...t}):l.createElement(Yr,{page:e,matches:s,...t})):null}function qr(e){let{manifest:t,routeModules:a}=rt(),[r,n]=l.useState([]);return l.useEffect(()=>{let s=!1;return zr(e,t,a).then(i=>{s||n(i)}),()=>{s=!0}},[e,t,a]),r}function Kr({page:e,matches:t,...a}){let r=F(),n=l.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let s=Gt(e,"rsc"),i=!1,c=[];for(let u of t)typeof u.route.shouldRevalidate=="function"?i=!0:c.push(u.route.id);return i&&c.length>0&&s.searchParams.set("_routes",c.join(",")),[s.pathname+s.search]},[e,r,t]);return l.createElement(l.Fragment,null,n.map(s=>l.createElement("link",{key:s,rel:"prefetch",as:"fetch",href:s,...a})))}function Yr({page:e,matches:t,...a}){let r=F(),{manifest:n,routeModules:s}=rt(),{loaderData:i,matches:c}=Gr(),u=l.useMemo(()=>pt(e,t,c,n,r,"data"),[e,t,c,n,r]),d=l.useMemo(()=>pt(e,t,c,n,r,"assets"),[e,t,c,n,r]),f=l.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let h=new Set,v=!1;if(t.forEach(y=>{let w=n.routes[y.route.id];!w||!w.hasLoader||(!u.some(x=>x.route.id===y.route.id)&&y.route.id in i&&s[y.route.id]?.shouldRevalidate||w.hasClientLoader?v=!0:h.add(y.route.id))}),h.size===0)return[];let b=Gt(e,"data");return v&&h.size>0&&b.searchParams.set("_routes",t.filter(y=>h.has(y.route.id)).map(y=>y.route.id).join(",")),[b.pathname+b.search]},[i,r,n,u,t,e,s]),m=l.useMemo(()=>Br(d,n),[d,n]),g=qr(d);return l.createElement(l.Fragment,null,f.map(h=>l.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...a})),m.map(h=>l.createElement("link",{key:h,rel:"modulepreload",href:h,...a})),g.map(({key:h,link:v})=>l.createElement("link",{key:h,nonce:a.nonce,...v,crossOrigin:v.crossOrigin??a.crossOrigin})))}function Xr(...e){return t=>{e.forEach(a=>{typeof a=="function"?a(t):a!=null&&(a.current=t)})}}var Qr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Qr&&(window.__reactRouterVersion="8.3.0")}catch{}function Zr({basename:e,children:t,useTransitions:a,window:r}){let n=l.useRef(null);n.current==null&&(n.current=_a({window:r,v5Compat:!0}));let s=n.current,[i,c]=l.useState({action:s.action,location:s.location}),u=l.useCallback(d=>{a===!1?c(d):l.startTransition(()=>c(d))},[a]);return l.useLayoutEffect(()=>s.listen(u),[s,u]),l.createElement(Ut,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:s,useTransitions:a})}function en({basename:e,children:t,history:a,useTransitions:r}){let[n,s]=l.useState({action:a.action,location:a.location}),i=l.useCallback(c=>{r===!1?s(c):l.startTransition(()=>s(c))},[r]);return l.useLayoutEffect(()=>a.listen(i),[a,i]),l.createElement(Ut,{basename:e,children:t,location:n.location,navigationType:n.action,navigator:a,useTransitions:r})}en.displayName="unstable_HistoryRouter";var Jt=l.forwardRef(function({onClick:t,discover:a="render",prefetch:r="none",relative:n,reloadDocument:s,replace:i,mask:c,state:u,target:d,to:f,preventScrollReset:m,viewTransition:g,defaultShouldRevalidate:h,...v},b){let{basename:y,navigator:w,useTransitions:x}=l.useContext(D),p=typeof f=="string"&&Ke.test(f),_=Dt(f,y);f=_.to;let T=sr(f,{relative:n}),C=F(),E=null;if(c){let z=Ye(c,[],C.mask?C.mask.pathname:"/",!0);y!=="/"&&(z.pathname=z.pathname==="/"?y:B([y,z.pathname])),E=w.createHref(z)}let[S,R,A]=Jr(r,v),O=sn(f,{replace:i,mask:c,state:u,target:d,preventScrollReset:m,relative:n,viewTransition:g,defaultShouldRevalidate:h,useTransitions:x});function Z(z){t&&t(z),z.defaultPrevented||O(z)}let H=!(_.isExternal||s),fe=l.createElement("a",{...v,...A,href:(H?E:void 0)||_.absoluteURL||T,onClick:H?Z:t,ref:Xr(b,R),target:d,"data-discover":!p&&a==="render"?"true":void 0});return S&&!p?l.createElement(l.Fragment,null,fe,l.createElement(Wr,{page:T})):fe});Jt.displayName="Link";var tn=l.forwardRef(function({"aria-current":t="page",caseSensitive:a=!1,className:r="",end:n=!1,style:s,to:i,viewTransition:c,children:u,...d},f){let m=ce(i,{relative:d.relative}),g=F(),h=l.useContext(oe),{navigator:v,basename:b}=l.useContext(D),y=h!=null&&fn(m)&&c===!0,w=v.encodeLocation?v.encodeLocation(m).pathname:m.pathname,x=g.pathname,p=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;a||(x=x.toLowerCase(),p=p?p.toLowerCase():null,w=w.toLowerCase()),p&&b&&(p=G(p,b)||p);const _=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let T=x===w||!n&&x.startsWith(w)&&x.charAt(_)==="/",C=p!=null&&(p===w||!n&&p.startsWith(w)&&p.charAt(_)==="/"),E={isActive:T,isPending:C,isTransitioning:y},S=T?t:void 0,R;typeof r=="function"?R=r(E):R=[r,T?"active":null,C?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let A=typeof s=="function"?s(E):s;return l.createElement(Jt,{...d,"aria-current":S,className:R,ref:f,style:A,to:i,viewTransition:c},typeof u=="function"?u(E):u)});tn.displayName="NavLink";var an=l.forwardRef(({discover:e="render",fetcherKey:t,navigate:a,reloadDocument:r,replace:n,state:s,method:i="get",action:c,onSubmit:u,relative:d,preventScrollReset:f,viewTransition:m,defaultShouldRevalidate:g,...h},v)=>{let{useTransitions:b}=l.useContext(D),y=cn(),w=un(c,{relative:d}),x=i.toLowerCase()==="get"?"get":"post",p=typeof c=="string"&&Ke.test(c),_=T=>{if(u&&u(T),T.defaultPrevented)return;T.preventDefault();let C=T.nativeEvent.submitter,E=C?.getAttribute("formmethod")||i,S=()=>y(C||T.currentTarget,{fetcherKey:t,method:E,navigate:a,replace:n,state:s,relative:d,preventScrollReset:f,viewTransition:m,defaultShouldRevalidate:g});b&&a!==!1?l.startTransition(()=>S()):S()};return l.createElement("form",{ref:v,method:x,action:w,onSubmit:r?u:_,...h,"data-discover":!p&&e==="render"?"true":void 0})});an.displayName="Form";function rn({getKey:e,storageKey:t,...a}){let r=l.useContext(ke),{basename:n}=l.useContext(D),s=F(),i=Vt();dn({getKey:e,storageKey:t});let c=l.useMemo(()=>{if(!r||!e)return null;let d=He(s,i,n,e);return d!==s.key?d:null},[]);if(!r||r.isSpaMode)return null;let u=((d,f)=>{if(!window.history.state||!window.history.state.key){let m=Math.random().toString(32).slice(2);window.history.replaceState({key:m},"")}try{let m=JSON.parse(sessionStorage.getItem(d)||"{}")[f||window.history.state.key];typeof m=="number"&&window.scrollTo(0,m)}catch(m){console.error(m),sessionStorage.removeItem(d)}}).toString();return a.nonce==null&&r?.nonce&&(a.nonce=r.nonce),l.createElement("script",{...a,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${u})(${ft(JSON.stringify(t||Fe))}, ${ft(JSON.stringify(c))})`}})}rn.displayName="ScrollRestoration";function Wt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nt(e){let t=l.useContext(te);return N(t,Wt(e)),t}function nn(e){let t=l.useContext(oe);return N(t,Wt(e)),t}function sn(e,{target:t,replace:a,mask:r,state:n,preventScrollReset:s,relative:i,viewTransition:c,defaultShouldRevalidate:u,useTransitions:d}={}){let f=or(),m=F(),g=ce(e,{relative:i});return l.useCallback(h=>{if(Cr(h,t)){h.preventDefault();let v=a!==void 0?a:ne(m)===ne(g),b=()=>f(e,{replace:v,mask:r,state:n,preventScrollReset:s,relative:i,viewTransition:c,defaultShouldRevalidate:u});d?l.startTransition(()=>b()):b()}},[m,f,g,a,r,n,t,e,s,i,c,u,d])}var on=0,ln=()=>`__${String(++on)}__`;function cn(){let{router:e}=nt("useSubmit"),{basename:t}=l.useContext(D),a=yr(),r=e.fetch,n=e.navigate;return l.useCallback(async(s,i={})=>{let{action:c,method:u,encType:d,formData:f,body:m}=Pr(s,t);i.navigate===!1?await r(i.fetcherKey||ln(),a,i.action||c,{defaultShouldRevalidate:i.defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:f,body:m,formMethod:i.method||u,formEncType:i.encType||d,flushSync:i.flushSync}):await n(i.action||c,{defaultShouldRevalidate:i.defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:f,body:m,formMethod:i.method||u,formEncType:i.encType||d,replace:i.replace,state:i.state,fromRouteId:a,flushSync:i.flushSync,viewTransition:i.viewTransition})},[r,n,t,a])}function un(e,{relative:t}={}){let{basename:a}=l.useContext(D),r=l.useContext(W);N(r,"useFormAction must be used inside a RouteContext");let[n]=r.matches.slice(-1),s={...ce(e||".",{relative:t})},i=F();if(e==null){s.search=i.search;let c=new URLSearchParams(s.search),u=c.getAll("index");if(u.some(d=>d==="")){c.delete("index"),u.filter(f=>f).forEach(f=>c.append("index",f));let d=c.toString();s.search=d?`?${d}`:""}}return(!e||e===".")&&n.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(s.pathname=s.pathname==="/"?a:B([a,s.pathname])),ne(s)}var Fe="react-router-scroll-positions",ge={};function He(e,t,a,r){let n=null;return r&&(a!=="/"?n=r({...e,pathname:G(e.pathname,a)||e.pathname},t):n=r(e,t)),n==null&&(n=e.key),n}function dn({getKey:e,storageKey:t}={}){let{router:a}=nt("useScrollRestoration"),{restoreScrollPosition:r,preventScrollReset:n}=nn("useScrollRestoration"),{basename:s}=l.useContext(D),i=F(),c=Vt(),u=xr();l.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),mn(l.useCallback(()=>{if(u.state==="idle"){let d=He(i,c,s,e);ge[d]=window.scrollY}try{sessionStorage.setItem(t||Fe,JSON.stringify(ge))}catch(d){U(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${d}).`)}window.history.scrollRestoration="auto"},[u.state,e,s,i,c,t])),typeof document<"u"&&(l.useLayoutEffect(()=>{try{let d=sessionStorage.getItem(t||Fe);d&&(ge=JSON.parse(d))}catch{}},[t]),l.useLayoutEffect(()=>{let d=a?.enableScrollRestoration(ge,()=>window.scrollY,e?(f,m)=>He(f,m,s,e):void 0);return()=>d&&d()},[a,s,e]),l.useLayoutEffect(()=>{if(r!==!1){if(typeof r=="number"){window.scrollTo(0,r);return}try{if(i.hash){let d=document.getElementById(decodeURIComponent(i.hash.slice(1)));if(d){d.scrollIntoView();return}}}catch{U(!1,`"${i.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}n!==!0&&window.scrollTo(0,0)}},[i,r,n]))}function mn(e,t){let{capture:a}=t||{};l.useEffect(()=>{let r=a!=null?{capture:a}:void 0;return window.addEventListener("pagehide",e,r),()=>{window.removeEventListener("pagehide",e,r)}},[e,a])}function fn(e,{relative:t}={}){let a=l.useContext(zt);N(a!=null,"`useViewTransitionState` must be used within `react-router/dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=nt("useViewTransitionState"),n=ce(e,{relative:t});if(!a.isTransitioning)return!1;let s=G(a.currentLocation.pathname,r)||a.currentLocation.pathname,i=G(a.nextLocation.pathname,r)||a.nextLocation.pathname;return ve(n.pathname,i)!=null||ve(n.pathname,s)!=null}var hn=({onComplete:e})=>{const[t,a]=(0,l.useState)(!0);return(0,l.useEffect)(()=>{const r=setTimeout(()=>{a(!1),setTimeout(e,500)},2e3);return()=>clearTimeout(r)},[e]),(0,o.jsxs)(k.div,{initial:{opacity:1},animate:{opacity:t?1:0},exit:{opacity:0},className:"fixed inset-0 z-50 bg-black flex items-center justify-center",role:"status","aria-label":t?"Loading":"Loading complete",children:[(0,o.jsx)(k.img,{src:"/logo.webp",alt:"Portfolio loading animation",className:"w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64",initial:{y:0,scale:1,rotate:0},animate:{y:t?[0,-20,0,-20,0]:-250,scale:t?[1,1.2,1,1.2,1]:.5,rotate:t?0:720},transition:{duration:t?3:1,ease:"easeInOut",times:t?[0,.25,.5,.75,1]:[0,1]}}),t&&(0,o.jsx)(k.div,{className:"absolute inset-0",initial:{opacity:0},animate:{opacity:[0,.4,.6,.4,0]},transition:{repeat:2,duration:1,ease:"easeInOut"},style:{background:"linear-gradient(to right, #ff2e97, #00e5ff)"}})]})},$=()=>{const e=(0,l.useContext)(Tt);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},Ve=(e,t)=>{e.preventDefault();const a=document.getElementById(t);if(a){const r=a.getBoundingClientRect().top+window.scrollY+-50;window.scrollTo({top:r,behavior:"smooth"})}},qt={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},gt=l.createContext&&l.createContext(qt),pn=["attr","size","title"];function gn(e,t){if(e==null)return{};var a,r,n=yn(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function yn(e,t){if(e==null)return{};var a={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;a[r]=e[r]}return a}function be(){return be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},be.apply(null,arguments)}function yt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function we(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?yt(Object(a),!0).forEach(function(r){xn(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):yt(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function xn(e,t,a){return(t=vn(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function vn(e){var t=bn(e,"string");return typeof t=="symbol"?t:t+""}function bn(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Kt(e){return e&&e.map((t,a)=>l.createElement(t.tag,we({key:a},t.attr),Kt(t.child)))}function L(e){return t=>l.createElement(wn,be({attr:we({},e.attr)},t),Kt(e.child))}function wn(e){var t=a=>{var r=e.attr,n=e.size,s=e.title,i=gn(e,pn),c=n||a.size||"1em",u;return a.className&&(u=a.className),e.className&&(u=(u?u+" ":"")+e.className),l.createElement("svg",be({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,r,i,{className:u,style:we(we({color:e.color||a.color},a.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&l.createElement("title",null,s),e.children)};return gt!==void 0?l.createElement(gt.Consumer,null,a=>t(a)):t(qt)}function _n(e){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(e)}function kn(e){return L({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function En(e){return L({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function Tn(e){return L({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function Sn(e){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}function jn(e){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function Cn(e){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function Ue(e){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(e)}function Nn(e){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function Rn(e){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function Pn(e){return L({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(e)}function In(e){return L({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}var Le=["home","about","experience","education","skills","certificates","projects","languages","contact"],xt=e=>e.charAt(0).toUpperCase()+e.slice(1),Ln=[{name:"GitHub",url:"https://github.com/trencho",ariaLabel:"GitHub Profile"},{name:"LinkedIn",url:"https://www.linkedin.com/in/aleksandar-trenchevski-593b45168/",ariaLabel:"LinkedIn Profile"}],re={filename:"/CV - Aleksandar Trenchevski.pdf",label:"Download CV"},V={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6}}},Mn={hidden:{opacity:0,x:-50},visible:{opacity:1,x:0,transition:{duration:1}}},K={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},Me={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},I={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},An={hidden:{opacity:0,scale:.8,rotate:-10},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.6,ease:"easeOut"}}},vt={initial:{scale:1,rotate:0,opacity:1},animate:{scale:[1,1.2,1],rotate:[0,360],opacity:1,transition:{duration:.8,ease:"easeInOut"}},exit:{scale:.8,opacity:0,rotate:180,transition:{duration:.4,ease:"easeInOut"}}},Dn=e=>{const[t,a]=(0,l.useState)(e[0]??"");return(0,l.useEffect)(()=>{const r=e.map(s=>document.getElementById(s)).filter(s=>s!==null);if(r.length===0)return;const n=new IntersectionObserver(s=>{const i=s.filter(c=>c.isIntersecting).sort((c,u)=>c.boundingClientRect.top-u.boundingClientRect.top);i[0]&&a(i[0].target.id)},{rootMargin:"-40% 0px -55% 0px",threshold:0});return r.forEach(s=>n.observe(s)),()=>n.disconnect()},[e]),t},$n=()=>{const{darkMode:e,toggleDarkMode:t}=$(),[a,r]=(0,l.useState)(!1),n=Dn(Le),s=()=>r(!a),i=()=>r(!1);return(0,l.useEffect)(()=>{if(!a)return;const c=u=>{u.key==="Escape"&&r(!1)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[a]),(0,o.jsxs)("nav",{className:`p-5 fixed w-full top-0 z-10 backdrop-blur-md shadow-md transition-colors duration-300 ${e?"bg-[#0d0221]/90 text-white":"bg-white/90 text-gray-900"}`,"aria-label":"Main navigation",children:[(0,o.jsxs)("div",{className:"container mx-auto flex justify-between items-center",children:[(0,o.jsx)("div",{className:"sm:hidden",children:(0,o.jsxs)("button",{id:"toggleButton",onClick:s,"aria-label":a?"Close navigation menu":"Open navigation menu","aria-expanded":a,"aria-controls":"mobile-menu",className:"relative flex flex-col items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2",children:[(0,o.jsx)("div",{className:`transition-transform duration-300 ease-in-out w-6 h-0.5 bg-current ${a?"rotate-45 translate-y-1.5":""}`,"aria-hidden":"true"}),(0,o.jsx)("div",{className:`transition-opacity duration-300 ease-in-out w-6 h-0.5 bg-current my-1 ${a?"opacity-0":""}`,"aria-hidden":"true"}),(0,o.jsx)("div",{className:`transition-transform duration-300 ease-in-out w-6 h-0.5 bg-current ${a?"-rotate-45 -translate-y-1.5":""}`,"aria-hidden":"true"})]})}),(0,o.jsx)("div",{className:"hidden sm:flex flex-1 justify-center space-x-4 lg:space-x-6",children:Le.map(c=>{const u=n===c;return(0,o.jsxs)("a",{href:`#${c}`,onClick:d=>{Ve(d,c)},className:`relative text-sm sm:text-lg font-semibold group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded px-2 py-1 transition-colors ${u?e?"text-cyan-400":"text-fuchsia-700":e?"hover:text-gray-400":"hover:text-gray-600"}`,"aria-label":`Navigate to ${c} section`,"aria-current":u?"true":void 0,children:[xt(c),(0,o.jsx)("span",{className:`absolute bottom-0 left-0 w-full h-0.5 transform transition-transform duration-500 ease-in-out origin-left group-hover:scale-x-100 ${u?"scale-x-100":"scale-x-0"} ${e?"bg-cyan-400":"bg-fuchsia-600"}`,"aria-hidden":"true"})]},c)})}),(0,o.jsxs)("div",{className:"flex items-center gap-3",children:[(0,o.jsxs)("a",{href:re.filename,download:!0,className:`hidden sm:flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 ${e?"bg-fuchsia-700 text-white hover:bg-fuchsia-600 shadow-[0_0_16px_rgba(217,70,239,0.35)]":"bg-black text-white hover:bg-gray-800"}`,"aria-label":"Download CV",children:[(0,o.jsx)(Ue,{"aria-hidden":"true"}),(0,o.jsx)("span",{children:"CV"})]}),(0,o.jsx)("button",{onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",className:"flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded p-1",children:(0,o.jsx)(De,{mode:"wait",children:e?(0,o.jsx)(k.div,{initial:"initial",animate:"animate",exit:"exit",variants:vt,"aria-hidden":"true",children:(0,o.jsx)(Sn,{size:24})},"sun"):(0,o.jsx)(k.div,{initial:"initial",animate:"animate",exit:"exit",variants:vt,"aria-hidden":"true",children:(0,o.jsx)(jn,{size:24})},"moon")})})]})]}),(0,o.jsx)(De,{children:a&&(0,o.jsx)(k.div,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:-100},transition:{duration:.3,ease:"easeInOut"},className:`absolute top-16 left-0 w-full backdrop-blur-md shadow-md ${e?"bg-[#0d0221]/90 text-white":"bg-white/90 text-gray-900"}`,id:"mobile-menu",children:(0,o.jsxs)("ul",{className:"flex flex-col space-y-4 py-4 px-6",children:[Le.map(c=>{const u=n===c;return(0,o.jsx)("li",{children:(0,o.jsxs)("a",{href:`#${c}`,onClick:d=>{Ve(d,c),i()},className:`relative text-lg font-semibold group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded px-2 py-1 block ${u?e?"text-cyan-400":"text-fuchsia-700":e?"hover:text-gray-400":"hover:text-gray-600"}`,"aria-current":u?"true":void 0,children:[xt(c),(0,o.jsx)("span",{className:`absolute bottom-0 left-0 w-full h-0.5 transform transition-transform duration-500 ease-in-out origin-left group-hover:scale-x-100 ${u?"scale-x-100":"scale-x-0"} ${e?"bg-cyan-400":"bg-fuchsia-600"}`,"aria-hidden":"true"})]})},c)}),(0,o.jsx)("li",{children:(0,o.jsxs)("a",{href:re.filename,download:!0,onClick:i,className:`flex items-center gap-2 text-lg font-semibold px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded ${e?"hover:text-gray-400":"hover:text-gray-600"}`,children:[(0,o.jsx)(Ue,{"aria-hidden":"true"}),(0,o.jsx)("span",{children:re.label})]})})]})})})]})},On=()=>{const e="Software Engineer",t=ga(),[a,r]=(0,l.useState)(""),[n,s]=(0,l.useState)(!1),i=new Date("2018-07-15"),c=new Date().getFullYear()-i.getFullYear(),{darkMode:u}=$(),d=[`${c}+ years experience`,"Backend & Data Engineering","Java · Python · Spring · Spark","Skopje, North Macedonia"];return(0,l.useEffect)(()=>{if(t)return;let f=0,m;const g=()=>{f<=17&&(r(e.slice(0,f)),f++,m=setTimeout(g,100))};return g(),()=>clearTimeout(m)},[t]),(0,o.jsxs)(k.section,{className:"min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 space-y-6 pt-16 lg:p-12 animate-smoothFadeIn",initial:"hidden",animate:"visible",variants:K,children:[(0,o.jsxs)(k.div,{className:"relative w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full border-4 border-white shadow-lg mt-4 sm:mt-8",variants:V,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[(0,o.jsxs)("picture",{children:[(0,o.jsx)("source",{srcSet:"/profile.webp",type:"image/webp"}),(0,o.jsx)("img",{src:"/profile.jpg",alt:"Aleksandar profile picture",className:`absolute top-0 left-0 w-full h-full object-cover rounded-full transition-opacity duration-500 ease-in-out select-none ${n?"opacity-0":"opacity-100"}`,width:"648",height:"648",loading:"eager",fetchPriority:"high"})]}),(0,o.jsxs)("picture",{children:[(0,o.jsx)("source",{srcSet:"/logo.webp",type:"image/webp"}),(0,o.jsx)("img",{src:"/logo.png",alt:"","aria-hidden":"true",className:`absolute top-0 left-0 w-full h-full object-cover rounded-full transition-opacity duration-500 ease-in-out select-none ${n?"opacity-100":"opacity-0"}`,width:"200",height:"200",loading:"lazy",decoding:"async"})]})]}),(0,o.jsx)(k.div,{className:`w-full max-w-lg sm:max-w-3xl p-4 sm:p-8 rounded-lg shadow-lg flex justify-center items-center ${u?"bg-[#1a0b2e]/80 text-white border border-fuchsia-500/20 shadow-[0_0_30px_rgba(217,70,239,0.15)]":"bg-white/70 text-gray-700"}`,variants:Mn,children:(0,o.jsxs)("div",{className:"text-center space-y-4 sm:space-y-6 max-w-xl leading-relaxed",children:[(0,o.jsxs)("h1",{className:`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 ${u?"text-white":"text-gray-900"}`,children:["Hello, my name is Aleksandar and I'm a"," ",(0,o.jsx)("span",{className:`${u?"text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.55)]":"text-fuchsia-600"}`,children:typeof window>"u"||t?e:a})," "]}),(0,o.jsx)("p",{className:"text-base sm:text-lg lg:text-xl leading-relaxed",children:"I build RESTful APIs and large-scale data pipelines across insurance, banking, telecom and healthcare. Currently a Data Engineer at Encora, designing ETL workflows on Azure Databricks and Apache Spark."}),(0,o.jsx)(k.ul,{className:"flex flex-wrap justify-center gap-2",variants:V,"aria-label":"Highlights",children:d.map(f=>(0,o.jsx)("li",{className:`rounded-full px-3 py-1 text-xs sm:text-sm font-medium select-none ${u?"bg-fuchsia-500/10 text-cyan-300 border border-cyan-400/20":"bg-fuchsia-100 text-fuchsia-800"}`,children:f},f))}),(0,o.jsxs)(k.div,{className:"flex flex-col sm:flex-row items-center justify-center gap-4 mt-4",variants:V,children:[(0,o.jsxs)("a",{href:"#contact",onClick:f=>{Ve(f,"contact")},className:`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 mb-2 sm:mb-0 select-none ${u?"bg-fuchsia-700 text-white hover:bg-fuchsia-600 shadow-[0_0_20px_rgba(217,70,239,0.35)]":"bg-black text-white hover:bg-gray-800"}`,children:[(0,o.jsx)("span",{children:"Contact me here"}),(0,o.jsx)(In,{"aria-hidden":"true"})]}),(0,o.jsxs)("a",{href:re.filename,className:`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 mb-2 sm:mb-0 select-none ${u?"bg-fuchsia-700 text-white hover:bg-fuchsia-600 shadow-[0_0_20px_rgba(217,70,239,0.35)]":"bg-black text-white hover:bg-gray-800"}`,download:!0,children:[(0,o.jsx)("span",{children:re.label}),(0,o.jsx)(Ue,{"aria-hidden":"true"})]}),(0,o.jsx)("div",{className:"flex space-x-4 mt-4 sm:mt-0",children:Ln.map(f=>{const m=f.name==="GitHub"?En:kn;return(0,o.jsxs)("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",className:`group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full text-white transition
                    ${u?"bg-purple-800 hover:bg-purple-700":"bg-black hover:bg-gray-800"}`,"aria-label":f.ariaLabel,children:[(0,o.jsx)(m,{className:"text-xl","aria-hidden":"true"}),(0,o.jsx)("span",{className:`absolute bottom-full mb-2 hidden w-auto px-2 py-1 text-xs text-white rounded opacity-0 group-hover:block group-hover:opacity-100 transition-opacity
                      ${u?"bg-purple-800":"bg-black"}`,children:f.name})]},f.name)})})]})]})})]})},q=e=>e?"bg-[#1a0b2e]/70 border border-fuchsia-500/15":"bg-white/70",zn=()=>{const{darkMode:e}=$();return(0,o.jsx)(k.section,{className:`flex justify-center items-center p-4 sm:p-8 lg:p-12 animate-smoothFadeIn ${e?"text-white":"text-gray-700"}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:K,children:(0,o.jsxs)(k.div,{className:`w-full max-w-lg sm:max-w-3xl p-4 sm:p-8 rounded-lg shadow-lg ${q(e)}`,variants:K,children:[(0,o.jsx)(k.h2,{className:"text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6",variants:I,children:"About Me"}),(0,o.jsxs)(k.div,{className:"text-center hyphens-auto max-w-lg sm:max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-8",variants:K,children:[(0,o.jsxs)(k.p,{className:"text-base sm:text-lg lg:text-xl leading-relaxed mb-4",variants:I,children:["I'm a software engineer focused on ",(0,o.jsx)("b",{children:"backend"})," and"," ",(0,o.jsx)("b",{children:"data engineering"}),". I've designed and shipped"," ",(0,o.jsx)("b",{children:"RESTful APIs"})," and, more recently, large-scale"," ",(0,o.jsx)("b",{children:"ETL pipelines"})," — building data workflows on"," ",(0,o.jsx)("b",{children:"Azure Databricks"})," and ",(0,o.jsx)("b",{children:"Apache Spark"})," for the insurance sector, after years of ",(0,o.jsx)("b",{children:"Java/Spring"})," development across banking (3DS secure payments), telecommunications and healthcare."]}),(0,o.jsxs)(k.p,{className:"text-base sm:text-lg lg:text-xl leading-relaxed mb-4",variants:I,children:["My work spans the full delivery cycle: modelling data and APIs, containerising with ",(0,o.jsx)("b",{children:"Docker"})," and ",(0,o.jsx)("b",{children:"Kubernetes"}),", and shipping through ",(0,o.jsx)("b",{children:"CI/CD"}),". I've collaborated directly with international clients across ",(0,o.jsx)("b",{children:"Europe and the US"}),", translating business requirements into maintainable, production-ready systems."]}),(0,o.jsxs)(k.p,{className:"text-base sm:text-lg lg:text-xl leading-relaxed mb-4",variants:I,children:["I hold a"," ",(0,o.jsx)("b",{children:"Master's in Electrical Engineering and Information Technologies"}),", where my thesis on monitoring atmospheric impacts and predicting air pollution grew into open-source machine-learning projects. I value ",(0,o.jsx)("b",{children:"clean, well-tested code"}),", pragmatic design and continuous learning — and I'm comfortable explaining technical trade-offs to both engineers and non-technical stakeholders."]})]})]})})},Bn=[{company:"Encora Inc.",period:"Mar 2023 – Present",location:"Skopje, North Macedonia",roles:[{title:"Data Engineer",projects:[{name:"Hiscox — Insurance data platform",description:"Building ETL pipelines on Azure Databricks and Apache Spark to ingest, transform and validate insurance data from multiple sources, with automated workflows feeding Azure Data Lake for scalable storage and analytics.",technologies:["Python","SQL","PySpark","Apache Spark","Databricks","Delta Lake","Azure Data Factory"],buildTools:["Databricks Asset Bundles"],versionControl:["Git","Azure DevOps"]}]},{title:"Java Engineer",projects:[{name:'Brandwatch — "Publish" module',description:`Delivered Java/Spring services for Brandwatch's social-media "Publish" module for planning, creating and distributing content.`,technologies:["Java","Spring Boot","PostgreSQL","Docker","Kubernetes"],buildTools:["Gradle","Maven"],versionControl:["Git","GitHub"]},{name:"Cox Networks — Telecom middleware",description:"Built middleware for Cox Networks, a mobile network operator, that receives, processes and serves data from the carrier's systems.",technologies:["Java","Spring Boot","JDBC","JAX-RS","Oracle DB"],buildTools:["Gradle"],versionControl:["Git","Bitbucket"]}]}]},{company:"Netcetera",period:"Dec 2021 – Mar 2023",location:"Skopje, North Macedonia",roles:[{title:"Java Engineer",projects:[{name:"3DS Secure digital payments",description:"Developed banking software for 3DS Secure digital payments, handling authentication flows for online card transactions.",technologies:["Java","Spring Boot","Spring Batch","Hibernate","Microsoft SQL Server"],buildTools:["Maven"],versionControl:["Git","Bitbucket"]}]}]},{company:"Medical IT Revolution",period:"Jul 2018 – Dec 2021",location:"Skopje, North Macedonia",roles:[{title:"Java Engineer",projects:[{name:"Medical Portal",description:"Built a medical application for hospitals in the Netherlands handling patient admissions and examination scheduling based on diagnosis, supporting client requests and delivering optimal software solutions.",technologies:["Java EE","JDBC","IBM Db2","JavaServer Pages"],buildTools:["Maven"],versionControl:["SVN"]}]}]}],Fn=()=>{const{darkMode:e}=$(),t=e?"text-cyan-400":"text-fuchsia-600";return(0,o.jsx)(k.section,{className:`flex justify-center animate-smoothFadeIn ${e?"text-white":"text-gray-700"}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:K,children:(0,o.jsxs)("div",{className:"w-full max-w-lg sm:max-w-3xl",children:[(0,o.jsx)(k.h2,{className:`text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 ${e?"text-white":"text-gray-900"}`,variants:I,children:"Experience"}),(0,o.jsx)("ol",{className:"relative border-s-2 border-gray-400/40 ms-3 sm:ms-4 space-y-8 sm:space-y-10",children:Bn.map(a=>{const r=a.roles.length>1;return(0,o.jsxs)(k.li,{className:"ms-6 sm:ms-8",variants:I,children:[(0,o.jsx)("span",{className:`absolute -start-2.25 flex h-4 w-4 rounded-full border-2 ${e?"bg-cyan-400 border-[#0d0221] shadow-[0_0_10px_rgba(34,211,238,0.7)]":"bg-fuchsia-500 border-white"}`,"aria-hidden":"true"}),(0,o.jsxs)("div",{className:`rounded-lg shadow-lg p-5 sm:p-6 ${q(e)}`,children:[(0,o.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1",children:[(0,o.jsx)("h3",{className:"text-lg sm:text-xl font-semibold",children:r?a.company:(0,o.jsxs)(o.Fragment,{children:[a.roles[0]?.title,(0,o.jsxs)("span",{className:t,children:[" · ",a.company]})]})}),(0,o.jsx)("span",{className:"text-sm sm:text-base whitespace-nowrap opacity-80",children:a.period})]}),(0,o.jsx)("p",{className:"text-sm sm:text-base opacity-80 mb-4",children:a.location}),(0,o.jsx)("div",{className:"space-y-6",children:a.roles.map(n=>(0,o.jsxs)("div",{children:[r&&(0,o.jsx)("h4",{className:`text-base sm:text-lg font-semibold mb-3 ${t}`,children:n.title}),(0,o.jsx)("ul",{className:r?"space-y-4 border-s-2 border-gray-400/25 ps-4 sm:ps-5":"space-y-4",children:n.projects.map(s=>(0,o.jsxs)("li",{children:[(0,o.jsx)("h5",{className:"text-base font-semibold",children:s.name}),(0,o.jsx)("p",{className:"text-base leading-relaxed mt-1 mb-3",children:s.description}),(0,o.jsx)("div",{className:"flex flex-wrap gap-2",children:s.technologies.map(i=>(0,o.jsx)("span",{className:"bg-[#2a0a4a] text-fuchsia-100 rounded-full px-3 py-1 text-xs sm:text-sm font-medium select-none",children:i},i))}),(0,o.jsx)("div",{className:"mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 text-xs sm:text-sm",children:[{label:"Build",items:s.buildTools},{label:"Version control",items:s.versionControl}].map(({label:i,items:c})=>c.length>0?(0,o.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,o.jsx)("span",{className:"opacity-90 font-medium",children:i}),c.map(u=>(0,o.jsx)("span",{className:"rounded-full border border-gray-400/50 px-2.5 py-0.5 select-none",children:u},u))]},i):null)})]},s.name))})]},n.title))})]})]},a.company)})})]})})},Hn=[{degree:"Master of Electrical Engineering and Information Technologies",institution:"Ss. Cyril and Methodius University of Skopje",period:"2018 – 2021",thesis:"Design, implementation and assessment of a system for monitoring atmospheric impacts and predicting air pollution"},{degree:"Bachelor of Electrical Engineering and Information Technologies",institution:"Ss. Cyril and Methodius University of Skopje",period:"2014 – 2018",thesis:"Web system for collecting and processing data for student services"}],bt=[{title:"Prediction of Air Pollution Concentration Using Weather Data and Regression Models",url:"https://dx.doi.org/10.25673/32749"}],Vn=()=>{const{darkMode:e}=$(),t=e?"text-cyan-400":"text-fuchsia-600",a=`rounded-lg shadow-lg p-5 sm:p-6 ${q(e)}`;return(0,o.jsx)(k.section,{className:`flex justify-center animate-smoothFadeIn ${e?"text-white":"text-gray-700"}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:K,children:(0,o.jsxs)("div",{className:"w-full max-w-lg sm:max-w-3xl",children:[(0,o.jsx)(k.h2,{className:`text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 ${e?"text-white":"text-gray-900"}`,variants:I,children:"Education"}),(0,o.jsx)("div",{className:"space-y-6",children:Hn.map(r=>(0,o.jsxs)(k.div,{className:a,variants:I,children:[(0,o.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1",children:[(0,o.jsx)("h3",{className:"text-lg sm:text-xl font-semibold",children:r.degree}),(0,o.jsx)("span",{className:"text-sm sm:text-base whitespace-nowrap opacity-80",children:r.period})]}),(0,o.jsx)("p",{className:`text-sm sm:text-base font-medium ${t}`,children:r.institution}),(0,o.jsxs)("p",{className:"text-base leading-relaxed mt-2",children:[(0,o.jsx)("span",{className:"opacity-80",children:"Thesis: "}),(0,o.jsx)("span",{className:"italic",children:r.thesis})]})]},r.degree))}),bt.length>0&&(0,o.jsxs)(k.div,{className:"mt-10",variants:I,children:[(0,o.jsx)("h3",{className:`text-xl sm:text-2xl font-bold text-center mb-6 ${e?"text-white":"text-gray-900"}`,children:"Publications"}),(0,o.jsx)("ul",{className:"space-y-4",children:bt.map(r=>(0,o.jsx)("li",{className:a,children:(0,o.jsx)("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",className:`text-base leading-relaxed font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded ${t}`,children:r.title})},r.title))})]})]})})},Un=[{title:"Java",imageSrc:"image-skills/backend/java.png",categories:["Backend"]},{title:"Python",imageSrc:"image-skills/backend/python.png",categories:["Backend"]},{title:"Spring",imageSrc:"image-skills/backend/spring.png",categories:["Backend"]},{title:"FastAPI",imageSrc:"image-skills/backend/fastapi.png",categories:["Backend"]},{title:"Flask",imageSrc:"image-skills/backend/flask.png",categories:["Backend"]},{title:"JavaScript",imageSrc:"image-skills/frontend/javascript.png",categories:["Frontend"]},{title:"TypeScript",imageSrc:"image-skills/frontend/typescript.png",categories:["Frontend"]},{title:"React",imageSrc:"image-skills/frontend/react.png",categories:["Frontend"]},{title:"Vue.js",imageSrc:"image-skills/frontend/vuejs.png",categories:["Frontend"]},{title:"Microsoft SQL Server",imageSrc:"image-skills/databases/microsoft-sql-server.png",categories:["Databases"]},{title:"MongoDB",imageSrc:"image-skills/databases/mongodb.png",categories:["Databases"]},{title:"MySQL",imageSrc:"image-skills/databases/mysql.png",categories:["Databases"]},{title:"Oracle DB",imageSrc:"image-skills/databases/oracle-db.png",categories:["Databases"]},{title:"PostgreSQL",imageSrc:"image-skills/databases/postgresql.png",categories:["Databases"]},{title:"Docker",imageSrc:"image-skills/devops/docker.png",categories:["DevOps"]},{title:"Kubernetes",imageSrc:"image-skills/devops/kubernetes.png",categories:["DevOps"]},{title:"Nginx",imageSrc:"image-skills/devops/nginx.png",categories:["DevOps"]},{title:"Git",imageSrc:"image-skills/tools/git.png",categories:["Tools"]},{title:"GitHub",imageSrc:"image-skills/tools/github.png",categories:["Tools"]},{title:"GitHub Actions",imageSrc:"image-skills/tools/github-actions.png",categories:["Tools"]},{title:"Gunicorn",imageSrc:"image-skills/tools/gunicorn.png",categories:["Tools"]},{title:"Lombok",imageSrc:"image-skills/tools/lombok.png",categories:["Tools"]},{title:"Maven",imageSrc:"image-skills/tools/maven.png",categories:["Tools"]},{title:"Postman",imageSrc:"image-skills/tools/postman.png",categories:["Tools"]},{title:"Pytest",imageSrc:"image-skills/tools/pytest.png",categories:["Tools"]},{title:"Swagger",imageSrc:"image-skills/tools/swagger.png",categories:["Tools"]},{title:"Vite",imageSrc:"image-skills/tools/vite.png",categories:["Tools"]},{title:"Matplotlib",imageSrc:"image-skills/data-science/matplotlib.png",categories:["Data Science"]},{title:"NumPy",imageSrc:"image-skills/data-science/numpy.png",categories:["Data Science"]},{title:"Pandas",imageSrc:"image-skills/data-science/pandas.png",categories:["Data Engineering","Data Science"]},{title:"Scikit-learn",imageSrc:"image-skills/data-science/scikit-learn.png",categories:["Data Science"]},{title:"Scipy",imageSrc:"image-skills/data-science/scipy.png",categories:["Data Science"]},{title:"Apache Spark",imageSrc:"image-skills/data-engineering/apache-spark.png",categories:["Data Engineering"]},{title:"Azure Blob Storage",imageSrc:"image-skills/data-engineering/azure-blob-storage.png",categories:["Data Engineering"]},{title:"Azure Data Factory",imageSrc:"image-skills/data-engineering/azure-data-factory.png",categories:["Data Engineering"]},{title:"Azure Data Lake",imageSrc:"image-skills/data-engineering/azure-data-lake.png",categories:["Data Engineering"]},{title:"Databricks",imageSrc:"image-skills/data-engineering/databricks.png",categories:["Data Engineering"]},{title:"Delta Lake",imageSrc:"image-skills/data-engineering/delta-lake.png",categories:["Data Engineering"]}],Gn=["Frontend","Backend","Databases","Tools","DevOps","Data Science","Data Engineering"],wt=Un,Jn=()=>{const{darkMode:e}=$(),[t,a]=(0,l.useState)("All"),r=(0,l.useMemo)(()=>t==="All"?wt:wt.filter(s=>s.categories.includes(t)),[t]),n=s=>{a(s==="All"?"All":s)};return(0,o.jsx)(k.section,{className:`flex max-w-6xl mx-auto justify-center items-center p-4 sm:p-6 lg:p-12 skills-section ${e?"dark-mode":"light-mode"}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:Me,children:(0,o.jsxs)(k.div,{className:`w-full max-w-lg sm:max-w-6xl p-4 sm:p-8 rounded-lg shadow-lg ${q(e)}`,variants:Me,children:[(0,o.jsx)(k.h2,{className:"text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6",variants:I,children:"Skills"}),(0,o.jsxs)(k.div,{className:"glass-card p-8 sm:p-12 lg:p-16",variants:I,children:[(0,o.jsxs)("div",{className:"flex flex-wrap justify-center gap-4 mb-12",role:"tablist","aria-label":"Filter skills by category",children:[(0,o.jsx)("button",{onClick:()=>n("All"),role:"tab","aria-selected":t==="All","aria-controls":"skills-All",className:`px-6 py-3 rounded-xl font-medium transition-all duration-300 border cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${t==="All"?e?"bg-cyan-500/30 text-white border-cyan-400/50 focus:ring-cyan-400 shadow-lg shadow-cyan-500/20":"bg-fuchsia-500/30 text-black border-fuchsia-400/50 focus:ring-fuchsia-400 shadow-lg":e?"bg-cyan-500/15 text-white hover:bg-cyan-500/25 border-cyan-400/30 hover:scale-105":"bg-fuchsia-500/20 text-black hover:bg-fuchsia-500/30 border-fuchsia-400/30 hover:scale-105"}`,children:"All"}),Gn.map(s=>(0,o.jsx)("button",{onClick:()=>n(s),role:"tab","aria-selected":t===s,"aria-controls":`skills-${s}`,className:`px-6 py-3 rounded-xl font-medium transition-all duration-300 border cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${t===s?e?"bg-cyan-500/30 text-white border-cyan-400/50 focus:ring-cyan-400 shadow-lg shadow-cyan-500/20":"bg-fuchsia-500/30 text-black border-fuchsia-400/50 focus:ring-fuchsia-400 shadow-lg":e?"bg-cyan-500/15 text-white hover:bg-cyan-500/25 border-cyan-400/30 hover:scale-105":"bg-fuchsia-500/20 text-black hover:bg-fuchsia-500/30 border-fuchsia-400/30 hover:scale-105"}`,children:s},s))]}),(0,o.jsx)(k.div,{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6",role:"tabpanel",id:`skills-${t}`,"aria-label":`${t} skills`,variants:Me,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:r.map(s=>(0,o.jsxs)(k.div,{className:`flex flex-col items-center space-y-3 p-4 rounded-2xl transition-all duration-300 hover:scale-105 group ${e?"bg-[#241041] hover:bg-[#33165c]":"bg-gray-100 hover:bg-gray-200"}`,variants:I,whileHover:{y:-5},role:"img","aria-label":`${s.title} skill`,children:[(0,o.jsx)("div",{className:"w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden bg-linear-to-br from-fuchsia-500/20 to-cyan-500/20 p-2 border border-fuchsia-400/30",children:(0,o.jsxs)("picture",{children:[(0,o.jsx)("source",{srcSet:s.imageSrc.replace(/\.png$/,".webp"),type:"image/webp"}),(0,o.jsx)("img",{src:s.imageSrc,alt:`${s.title} logo`,className:"w-full h-full object-contain",width:"80",height:"80",loading:"lazy",decoding:"async"})]})}),(0,o.jsx)("span",{className:`text-sm font-medium text-center transition-colors duration-300 ${e?"text-white/80 group-hover:text-white":"text-black/80 group-hover:text-black"}`,children:s.title})]},s.title))},t),r.length===0&&(0,o.jsx)(k.div,{className:"text-center py-16",variants:I,children:(0,o.jsx)("p",{className:`text-lg ${e?"text-white/80":"text-gray-700"}`,children:"No skills found for the selected category."})})]})]})})},Wn=[{title:"Databricks Certified Data Engineer Associate",imageSrc:"image-skills/certificates/databricks-data-engineer-associate.png",url:"https://credentials.databricks.com/ecb77163-c63a-45f7-a02f-7747fe0ad658#acc.vuI371hQ"},{title:"Databricks Certified Data Engineer Professional",imageSrc:"image-skills/certificates/databricks-data-engineer-professional.png",url:"https://credentials.databricks.com/40252957-e8c8-4c3d-8170-c7655543c307#acc.Q6Kku94J"}],qn=()=>{const{darkMode:e}=$();return(0,o.jsxs)("section",{className:"p-4 sm:p-6 lg:p-8",children:[(0,o.jsx)("h2",{className:`p-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center ${e?"text-white":"text-gray-900"}`,children:"Certificates"}),(0,o.jsx)("div",{className:"max-w-6xl mx-auto flex justify-center gap-6 sm:gap-8 text-center",children:Wn.map((t,a)=>{const r=(0,o.jsxs)(k.div,{className:`w-48 sm:w-56 lg:w-72 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 ${q(e)} ${e?"hover:bg-[#241041]":"hover:bg-white/85"}`,variants:I,whileInView:{opacity:1,y:0},initial:{opacity:0,y:10},viewport:{once:!0},transition:{duration:.2,delay:a*.03},children:[(0,o.jsxs)("picture",{children:[(0,o.jsx)("source",{srcSet:t.imageSrc.replace(/\.png$/,".webp"),type:"image/webp"}),(0,o.jsx)("img",{src:t.imageSrc,alt:t.title,width:"128",height:"128",loading:"lazy",decoding:"async",className:"mx-auto w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain select-none"})]}),(0,o.jsx)("h3",{className:`mt-4 text-lg sm:text-xl font-medium text-center line-clamp-2 ${e?"text-white":"text-black"}`,children:t.title})]});return(0,o.jsx)(l.Fragment,{children:t.url?(0,o.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer","aria-label":t.title,children:r}):r},t.title)})})]})},Kn=[{title:"Air Quality REST API",description:"A Flask REST API that trains and serves machine-learning models to predict air quality from weather and sensor data. Containerised with Docker and deployed on Kubernetes behind Nginx and Gunicorn, with a Swagger-documented API.",links:[{label:"View Code",url:"https://github.com/trencho/air-quality-rest-api"}],technologies:["Python","Flask","Scikit-learn","Pandas","NumPy","MongoDB","Docker","Kubernetes","Nginx","Gunicorn","Swagger"],imageSrc:"image-projects/air-quality-rest-api.png"},{title:"Crypto Prophet",description:"A FastAPI service that trains machine-learning models to forecast cryptocurrency prices, exposing predictions through a documented REST API. Packaged with Docker for reproducible deployments.",links:[{label:"View Code",url:"https://github.com/trencho/crypto-prophet"}],technologies:["Python","FastAPI","Scikit-learn","Pandas","NumPy","Docker","Swagger"],imageSrc:"image-projects/crypto-prophet.png"},{title:"Task Manager",description:"A full-stack task-management app: a Spring Boot REST API with secured authentication and MongoDB persistence, paired with a Vue.js frontend for registering, logging in and managing tasks.",links:[{label:"Backend",url:"https://github.com/trencho/task-manager-backend"},{label:"Frontend",url:"https://github.com/trencho/task-manager-frontend"}],technologies:["Java","Spring Boot","Spring Security","MongoDB","Vue.js","JavaScript","Docker"],imageSrc:"image-projects/task-manager.png"}];function Yn(e){return L({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"},child:[]}]})(e)}var Xn=()=>{const{darkMode:e}=$();return(0,o.jsxs)("section",{className:"py-8 sm:py-12",children:[(0,o.jsx)("h2",{className:`text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 ${e?"text-white":"text-gray-900"}`,children:"My Projects"}),(0,o.jsx)("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 md:px-8",children:Kn.map((t,a)=>(0,o.jsxs)(k.div,{className:`flex flex-col md:flex-row mb-10 sm:mb-12 shadow-lg rounded-lg p-6 ${q(e)} ${a%2!==0?"md:flex-row-reverse":""}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:An,transition:{delay:a*.2},children:[(0,o.jsx)(k.div,{className:"w-full md:w-1/2 p-4 flex justify-center items-center",whileHover:{scale:1.1,rotate:2},transition:{duration:.3},children:(0,o.jsxs)("picture",{children:[(0,o.jsx)("source",{srcSet:t.imageSrc.replace(/\.png$/,".webp"),type:"image/webp"}),(0,o.jsx)("img",{src:t.imageSrc,alt:t.title,width:"240",height:"240",loading:"lazy",decoding:"async",className:"w-48 h-48 sm:w-60 sm:h-60 object-contain rounded-lg shadow-2xl select-none"})]})}),(0,o.jsxs)("div",{className:"w-full md:w-1/2 p-4 flex flex-col justify-center",children:[(0,o.jsx)("h3",{className:"text-xl sm:text-2xl font-semibold mb-4",children:t.title}),(0,o.jsx)("p",{className:"mb-4",children:t.description}),(0,o.jsx)("div",{className:"flex flex-wrap gap-2 mb-4",children:t.technologies.map(r=>(0,o.jsx)("span",{className:"bg-[#2a0a4a] text-fuchsia-100 rounded-full px-3 py-1 text-sm font-medium select-none",children:r},r))}),(0,o.jsx)("div",{className:"flex flex-wrap gap-4",children:t.links.map(r=>(0,o.jsxs)("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",className:`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 select-none ${e?"bg-fuchsia-700 text-white hover:bg-fuchsia-600 shadow-[0_0_20px_rgba(217,70,239,0.35)]":"bg-black text-white hover:bg-gray-800"}`,"aria-label":`${t.title} – ${r.label}`,children:[(0,o.jsx)("span",{children:r.label}),(0,o.jsx)(Yn,{className:"text-xl","aria-hidden":"true"})]},r.url))})]})]},t.title))})]})},Qn=[{name:"English",proficiency:"Full professional proficiency"},{name:"Serbian",proficiency:"Professional working proficiency"},{name:"German",proficiency:"Limited working proficiency"}],Zn=()=>{const{darkMode:e}=$(),t=e?"text-cyan-400":"text-fuchsia-600";return(0,o.jsx)(k.section,{className:`flex justify-center animate-smoothFadeIn ${e?"text-white":"text-gray-700"}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:K,children:(0,o.jsxs)("div",{className:"w-full max-w-lg sm:max-w-3xl",children:[(0,o.jsx)(k.h2,{className:`text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 ${e?"text-white":"text-gray-900"}`,variants:I,children:"Languages"}),(0,o.jsx)("div",{className:"grid gap-6 sm:grid-cols-3",children:Qn.map(a=>(0,o.jsxs)(k.div,{className:`rounded-lg shadow-lg p-5 sm:p-6 text-center ${q(e)}`,variants:I,children:[(0,o.jsx)("h3",{className:"text-lg sm:text-xl font-semibold",children:a.name}),(0,o.jsx)("p",{className:`text-sm sm:text-base mt-1 ${t}`,children:a.proficiency})]},a.name))})]})})};function Yt(e){var t,a,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(a=Yt(e[t]))&&(r&&(r+=" "),r+=a)}else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function Y(){for(var e,t,a=0,r="",n=arguments.length;a<n;a++)(e=arguments[a])&&(t=Yt(e))&&(r&&(r+=" "),r+=t);return r}var ue=e=>typeof e=="number"&&!isNaN(e),Q=e=>typeof e=="string",J=e=>typeof e=="function",es=e=>Q(e)||ue(e),Ge=e=>Q(e)||J(e)?e:null,ts=(e,t)=>e===!1||ue(e)&&e>0?e:t,Je=e=>(0,l.isValidElement)(e)||Q(e)||J(e)||ue(e);function as(e,t,a=300){let{scrollHeight:r,style:n}=e;requestAnimationFrame(()=>{n.minHeight="initial",n.height=r+"px",n.transition=`all ${a}ms`,requestAnimationFrame(()=>{n.height="0",n.padding="0",n.margin="0",setTimeout(t,a)})})}function Ee({enter:e,exit:t,appendPosition:a=!1,collapse:r=!0,collapseDuration:n=300}){return function({children:s,position:i,preventExitTransition:c,done:u,nodeRef:d,isIn:f,playToast:m}){let g=a?`${e}--${i}`:e,h=a?`${t}--${i}`:t,v=(0,l.useRef)(0);return(0,l.useLayoutEffect)(()=>{let b=d.current,y=g.split(" "),w=x=>{x.target===d.current&&(m(),b.removeEventListener("animationend",w),b.removeEventListener("animationcancel",w),v.current===0&&x.type!=="animationcancel"&&b.classList.remove(...y))};b.classList.add(...y),b.addEventListener("animationend",w),b.addEventListener("animationcancel",w)},[]),(0,l.useEffect)(()=>{let b=d.current,y=()=>{b.removeEventListener("animationend",y),r?as(b,u,n):u()};f||(c?y():(v.current=1,b.className+=` ${h}`,b.addEventListener("animationend",y)))},[f]),l.createElement(l.Fragment,null,s)}}function _t(e,t){return{content:Xt(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function Xt(e,t,a=!1){return(0,l.isValidElement)(e)&&!Q(e.type)?(0,l.cloneElement)(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:a}):J(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:a}):e}function rs({closeToast:e,theme:t,ariaLabel:a="close"}){return l.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":a},l.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function ns({delay:e,isRunning:t,closeToast:a,type:r="default",hide:n,className:s,controlledProgress:i,progress:c,rtl:u,isIn:d,theme:f}){let m=n||i&&c===0,g={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};i&&(g.transform=`scaleX(${c})`);let h=Y("Toastify__progress-bar",i?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":u}),v=J(s)?s({rtl:u,type:r,defaultClassName:h}):Y(h,s),b={[i&&c>=1?"onTransitionEnd":"onAnimationEnd"]:i&&c<1?null:()=>{d&&a()}};return l.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":m},l.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${r}`}),l.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer","aria-valuenow":i?Math.round(c*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:v,style:g,...b}))}var ss=1,Qt=()=>`${ss++}`;function os(e,t,a){let r=1,n=0,s=[],i=[],c=t,u=new Map,d=new Set,f=x=>(d.add(x),()=>d.delete(x)),m=()=>{i=Array.from(u.values()),d.forEach(x=>x())},g=({containerId:x,toastId:p,updateId:_})=>{let T=x?x!==e:e!==1,C=u.has(p)&&_==null;return T||C},h=(x,p)=>{u.forEach(_=>{var T;(p==null||p===_.props.toastId)&&((T=_.toggle)==null||T.call(_,x))})},v=x=>{var p,_;x.isActive&&((_=(p=x.props)==null?void 0:p.onClose)==null||_.call(p,x.removalReason),x.isActive=!1,a(_t(x,"removed")))},b=x=>{if(x==null)u.forEach(v);else{let p=u.get(x);p&&v(p)}m()},y=()=>{n-=s.length,s=[]},w=x=>{var p,_;let{toastId:T,updateId:C}=x.props,E=C==null;x.staleId&&u.delete(x.staleId),x.isActive=!0,u.set(T,x),m(),a(_t(x,E?"added":"updated")),E&&((_=(p=x.props).onOpen)==null||_.call(p))};return{id:e,props:c,observe:f,toggle:h,removeToast:b,toasts:u,clearQueue:y,buildToast:(x,p)=>{if(g(p))return;let{toastId:_,updateId:T,data:C,staleId:E,delay:S}=p,R=T==null;R&&n++;let A={...c,style:c.toastStyle,key:r++,...Object.fromEntries(Object.entries(p).filter(([Z,H])=>H!=null)),toastId:_,updateId:T,data:C,isIn:!1,className:Ge(p.className||c.toastClassName),progressClassName:Ge(p.progressClassName||c.progressClassName),autoClose:p.isLoading?!1:ts(p.autoClose,c.autoClose),closeToast(Z){let H=u.get(_);H&&(H.removalReason=Z,b(_))},deleteToast(){if(u.get(_)!=null){if(u.delete(_),n--,n<0&&(n=0),s.length>0){w(s.shift());return}m()}}};A.closeButton=c.closeButton,p.closeButton===!1||Je(p.closeButton)?A.closeButton=p.closeButton:p.closeButton===!0&&(A.closeButton=Je(c.closeButton)?c.closeButton:!0);let O={content:x,props:A,staleId:E};c.limit&&c.limit>0&&n>c.limit&&R?s.push(O):ue(S)?setTimeout(()=>{w(O)},S):w(O)},setProps(x){c=x},setToggle:(x,p)=>{let _=u.get(x);_&&(_.toggle=p)},isToastActive:x=>{var p;return(p=u.get(x))==null?void 0:p.isActive},getSnapshot:()=>i}}var M=new Map,se=[],We=new Set,is=e=>We.forEach(t=>t(e)),Zt=()=>M.size>0;function ls(){se.forEach(e=>ta(e.content,e.options)),se=[]}var cs=(e,{containerId:t})=>{var a;return(a=M.get(t||1))==null?void 0:a.toasts.get(e)};function ea(e,t){var a;if(t)return!!((a=M.get(t))!=null&&a.isToastActive(e));let r=!1;return M.forEach(n=>{n.isToastActive(e)&&(r=!0)}),r}function us(e){if(!Zt()){se=se.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||es(e))M.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=M.get(e.containerId);t?t.removeToast(e.id):M.forEach(a=>{a.removeToast(e.id)})}}var ds=(e={})=>{M.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function ta(e,t){Je(e)&&(Zt()||se.push({content:e,options:t}),M.forEach(a=>{a.buildToast(e,t)}))}function ms(e){var t;(t=M.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function aa(e,t){M.forEach(a=>{(t==null||!(t!=null&&t.containerId)||t?.containerId===a.id)&&a.toggle(e,t?.id)})}function fs(e){let t=e.containerId||1;return{subscribe(a){let r=os(t,e,is);M.set(t,r);let n=r.observe(a);return ls(),()=>{n(),M.delete(t)}},setProps(a){var r;(r=M.get(t))==null||r.setProps(a)},getSnapshot(){var a;return(a=M.get(t))==null?void 0:a.getSnapshot()}}}function hs(e){return We.add(e),()=>{We.delete(e)}}function ps(e){return e&&(Q(e.toastId)||ue(e.toastId))?e.toastId:Qt()}function de(e,t){return ta(e,t),t.toastId}function Te(e,t){return{...t,type:t&&t.type||e,toastId:ps(t)}}function Se(e){return(t,a)=>de(t,Te(e,a))}function j(e,t){return de(e,Te("default",t))}j.loading=(e,t)=>de(e,Te("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function gs(e,{pending:t,error:a,success:r},n){let s;t&&(s=Q(t)?j.loading(t,n):j.loading(t.render,{...n,...t}));let i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(d,f,m)=>{if(f==null){j.dismiss(s);return}let g={type:d,...i,...n,data:m},h=Q(f)?{render:f}:f;return s?j.update(s,{...g,...h}):j(h.render,{...g,...h}),m},u=J(e)?e():e;return u.then(d=>c("success",r,d)).catch(d=>c("error",a,d)),u}j.promise=gs;j.success=Se("success");j.info=Se("info");j.error=Se("error");j.warning=Se("warning");j.warn=j.warning;j.dark=(e,t)=>de(e,Te("default",{theme:"dark",...t}));function ys(e){us(e)}j.dismiss=ys;j.clearWaitingQueue=ds;j.isActive=ea;j.update=(e,t={})=>{let a=cs(e,t);if(a){let{props:r,content:n}=a,s={delay:100,...r,...t,toastId:t.toastId||e,updateId:Qt()};s.toastId!==e&&(s.staleId=e);let i=s.render||n;delete s.render,de(i,s)}};j.done=e=>{j.update(e,{progress:1})};j.onChange=hs;j.play=e=>aa(!0,e);j.pause=e=>aa(!1,e);function xs(e){var t;let{subscribe:a,getSnapshot:r,setProps:n}=(0,l.useRef)(fs(e)).current;n(e);let s=(t=(0,l.useSyncExternalStore)(a,r,r))==null?void 0:t.slice();function i(c){if(!s)return[];let u=new Map;return e.newestOnTop&&s.reverse(),s.forEach(d=>{let{position:f}=d.props;u.has(f)||u.set(f,[]),u.get(f).push(d)}),Array.from(u,d=>c(d[0],d[1]))}return{getToastToRender:i,isToastActive:ea,count:s?.length}}function vs(e){let[t,a]=(0,l.useState)(!1),[r,n]=(0,l.useState)(!1),s=(0,l.useRef)(null),i=(0,l.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:c,pauseOnHover:u,closeToast:d,onClick:f,closeOnClick:m}=e;ms({id:e.toastId,containerId:e.containerId,fn:a}),(0,l.useEffect)(()=>{if(e.pauseOnFocusLoss)return g(),()=>{h()}},[e.pauseOnFocusLoss]);function g(){document.hasFocus()||w(),window.addEventListener("focus",y),window.addEventListener("blur",w)}function h(){window.removeEventListener("focus",y),window.removeEventListener("blur",w)}function v(E){if(e.draggable===!0||e.draggable===E.pointerType){x();let S=s.current;i.canCloseOnClick=!0,i.canDrag=!0,S.style.transition="none",e.draggableDirection==="x"?(i.start=E.clientX,i.removalDistance=S.offsetWidth*(e.draggablePercent/100)):(i.start=E.clientY,i.removalDistance=S.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function b(E){let{top:S,bottom:R,left:A,right:O}=s.current.getBoundingClientRect();E.pointerType==="mouse"&&e.pauseOnHover&&E.clientX>=A&&E.clientX<=O&&E.clientY>=S&&E.clientY<=R?w():y()}function y(){a(!0)}function w(){a(!1)}function x(){i.didMove=!1,document.addEventListener("pointermove",_),document.addEventListener("pointerup",T)}function p(){document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",T)}function _(E){let S=s.current;if(i.canDrag&&S){i.didMove=!0,t&&w(),e.draggableDirection==="x"?i.delta=E.clientX-i.start:i.delta=E.clientY-i.start,i.start!==E.clientX&&(i.canCloseOnClick=!1);let R=e.draggableDirection==="x"?`${i.delta}px, var(--y)`:`0, calc(${i.delta}px + var(--y))`;S.style.transform=`translate3d(${R},0)`,S.style.opacity=`${1-Math.abs(i.delta/i.removalDistance)}`}}function T(){p();let E=s.current;if(i.canDrag&&i.didMove&&E){if(i.canDrag=!1,Math.abs(i.delta)>i.removalDistance){n(!0),e.closeToast(!0),e.collapseAll();return}E.style.transition="transform 0.2s, opacity 0.2s",E.style.removeProperty("transform"),E.style.removeProperty("opacity")}}let C={onPointerDown:v,onPointerUp:b};return c&&u&&(C.onMouseEnter=w,e.stacked||(C.onMouseLeave=y)),m&&(C.onClick=E=>{f&&f(E),i.canCloseOnClick&&d(!0)}),{playToast:y,pauseToast:w,isRunning:t,preventExitTransition:r,toastRef:s,eventHandlers:C}}var ra=typeof window<"u"?l.useLayoutEffect:l.useEffect,je=({theme:e,type:t,isLoading:a,...r})=>l.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function bs(e){return l.createElement(je,{...e},l.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function ws(e){return l.createElement(je,{...e},l.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function _s(e){return l.createElement(je,{...e},l.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function ks(e){return l.createElement(je,{...e},l.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function Es(){return l.createElement("div",{className:"Toastify__spinner"})}var qe={info:ws,warning:bs,success:_s,error:ks,spinner:Es},Ts=e=>e in qe;function Ss({theme:e,type:t,isLoading:a,icon:r}){let n=null,s={theme:e,type:t};return r===!1||(J(r)?n=r({...s,isLoading:a}):(0,l.isValidElement)(r)?n=(0,l.cloneElement)(r,s):a?n=qe.spinner():Ts(t)&&(n=qe[t](s))),n}var js=e=>{let{isRunning:t,preventExitTransition:a,toastRef:r,eventHandlers:n,playToast:s}=vs(e),{closeButton:i,children:c,autoClose:u,onClick:d,type:f,hideProgressBar:m,closeToast:g,transition:h,position:v,className:b,style:y,progressClassName:w,updateId:x,role:p,progress:_,rtl:T,toastId:C,deleteToast:E,isIn:S,isLoading:R,closeOnClick:A,theme:O,ariaLabel:Z}=e,H=Y("Toastify__toast",`Toastify__toast-theme--${O}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":T},{"Toastify__toast--close-on-click":A}),fe=J(b)?b({rtl:T,position:v,type:f,defaultClassName:H}):Y(H,b),z=Ss(e),ot=!!_||!u,Ne={closeToast:g,type:f,theme:O},he=null;return i===!1||(J(i)?he=i(Ne):(0,l.isValidElement)(i)?he=(0,l.cloneElement)(i,Ne):he=rs(Ne)),l.createElement(h,{isIn:S,done:E,position:v,preventExitTransition:a,nodeRef:r,playToast:s},l.createElement("div",{id:C,tabIndex:0,onClick:d,"data-in":S,className:fe,...n,style:y,ref:r,...S&&{role:p,"aria-label":Z}},z!=null&&l.createElement("div",{className:Y("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},z),Xt(c,e,!t),he,!e.customProgressBar&&l.createElement(ns,{...x&&!ot?{key:`p-${x}`}:{},rtl:T,theme:O,delay:u,isRunning:t,isIn:S,closeToast:g,hide:m,type:f,className:w,controlledProgress:ot,progress:_||0})))},Ce=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),Cs=Ee(Ce("bounce",!0)),yo=Ee(Ce("slide",!0)),xo=Ee(Ce("zoom")),vo=Ee(Ce("flip")),Ns={position:"top-right",transition:Cs,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Rs(e){let t={...Ns,...e},a=e.stacked,[r,n]=(0,l.useState)(!0),s=(0,l.useRef)(null),{getToastToRender:i,isToastActive:c,count:u}=xs(t),{className:d,style:f,rtl:m,containerId:g,hotKeys:h}=t;function v(y){let w=Y("Toastify__toast-container",`Toastify__toast-container--${y}`,{"Toastify__toast-container--rtl":m});return J(d)?d({position:y,rtl:m,defaultClassName:w}):Y(w,Ge(d))}function b(){a&&(n(!0),j.play())}return ra(()=>{var y;if(a){let w=s.current.querySelectorAll('[data-in="true"]'),x=12,p=(y=t.position)==null?void 0:y.includes("top"),_=0,T=0;Array.from(w).reverse().forEach((C,E)=>{let S=C;S.classList.add("Toastify__toast--stacked"),E>0&&(S.dataset.collapsed=`${r}`),S.dataset.pos||(S.dataset.pos=p?"top":"bot");let R=_*(r?.2:1)+(r?0:x*E),A=Math.max(.5,1-(r?T:0));S.style.setProperty("--y",`${p?R:R*-1}px`),S.style.setProperty("--g",`${x}`),S.style.setProperty("--s",`${A}`),_+=S.offsetHeight,T+=.025})}},[r,u,a]),(0,l.useEffect)(()=>{function y(w){var x;let p=s.current;h(w)&&((x=p?.querySelector('[tabIndex="0"]'))==null||x.focus(),n(!1),j.pause()),w.key==="Escape"&&(document.activeElement===p||p!=null&&p.contains(document.activeElement))&&(n(!0),j.play())}return document.addEventListener("keydown",y),()=>{document.removeEventListener("keydown",y)}},[h]),l.createElement("section",{ref:s,className:"Toastify",id:g,onMouseEnter:()=>{a&&(n(!1),j.pause())},onMouseLeave:b,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},i((y,w)=>{let x=w.length?{...f}:{...f,pointerEvents:"none"};return l.createElement("div",{tabIndex:-1,className:v(y),"data-stacked":a,style:x,key:`c-${y}`},w.map(({content:p,props:_})=>l.createElement(js,{..._,stacked:a,collapseAll:b,isIn:c(_.toastId,_.containerId),key:`t-${_.key}`},p)))}))}var Ps=`:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: hsl(6, 78%, 57%);
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index));
  position: fixed;
  width: var(--toastify-container-width);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.Toastify__toast-container--top-left {
  top: var(--toastify-toast-top);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--top-center {
  top: var(--toastify-toast-top);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--top-right {
  top: var(--toastify-toast-top);
  right: var(--toastify-toast-right);
  align-items: end;
}
.Toastify__toast-container--bottom-left {
  bottom: var(--toastify-toast-bottom);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--bottom-center {
  bottom: var(--toastify-toast-bottom);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--bottom-right {
  bottom: var(--toastify-toast-bottom);
  right: var(--toastify-toast-right);
  align-items: end;
}

.Toastify__toast {
  --y: 0px;
  position: relative;
  touch-action: none;
  width: var(--toastify-toast-width);
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: var(--toastify-toast-padding);
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-toast-shadow);
  max-height: var(--toastify-toast-max-height);
  font-family: var(--toastify-font-family);
  /* webkit only issue #791 */
  z-index: 0;
  /* inner swag */
  display: flex;
  flex: 1 auto;
  align-items: center;
  word-break: break-word;
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    left: env(safe-area-inset-left);
    margin: 0;
  }
  .Toastify__toast-container--top-left,
  .Toastify__toast-container--top-center,
  .Toastify__toast-container--top-right {
    top: env(safe-area-inset-top);
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left,
  .Toastify__toast-container--bottom-center,
  .Toastify__toast-container--bottom-right {
    bottom: env(safe-area-inset-bottom);
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: env(safe-area-inset-right);
    left: initial;
  }
  .Toastify__toast {
    --toastify-toast-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
}

.Toastify__toast-container[data-stacked='true'] {
  width: var(--toastify-toast-width);
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container[data-stacked='true'] {
    width: 100vw;
  }
}

.Toastify__toast--stacked {
  position: absolute;
  width: 100%;
  transform: translate3d(0, var(--y), 0) scale(var(--s));
  transition: transform 0.3s;
}

.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,
.Toastify__toast--stacked[data-collapsed] .Toastify__close-button {
  transition: opacity 0.1s;
}

.Toastify__toast--stacked[data-collapsed='false'] {
  overflow: visible;
}

.Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
  opacity: 0;
}

.Toastify__toast--stacked:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: calc(var(--g) * 1px);
  bottom: 100%;
}

.Toastify__toast--stacked[data-pos='top'] {
  top: 0;
}

.Toastify__toast--stacked[data-pos='bot'] {
  bottom: 0;
}

.Toastify__toast--stacked[data-pos='bot'].Toastify__toast--stacked:before {
  transform-origin: top;
}

.Toastify__toast--stacked[data-pos='top'].Toastify__toast--stacked:before {
  transform-origin: bottom;
}

.Toastify__toast--stacked:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  transform: scaleY(3);
  z-index: -1;
}

.Toastify__toast--rtl {
  direction: rtl;
}

.Toastify__toast--close-on-click {
  cursor: pointer;
}

.Toastify__toast-icon {
  margin-inline-end: 10px;
  width: 22px;
  flex-shrink: 0;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  z-index: 1;
}

.Toastify__toast--rtl .Toastify__close-button {
  left: 6px;
  right: unset;
}

.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}

.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  transform-origin: left;
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}

.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
  border-bottom-left-radius: initial;
}

.Toastify__progress-bar--wrp {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: var(--toastify-toast-bd-radius);
  border-bottom-right-radius: var(--toastify-toast-bd-radius);
}

.Toastify__progress-bar--wrp[data-hidden='true'] {
  opacity: 0;
}

.Toastify__progress-bar--bg {
  opacity: var(--toastify-color-progress-bgo);
  width: 100%;
  height: 100%;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.Toastify__bounce-enter--top-left,
.Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--top-right,
.Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left,
.Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--top-right,
.Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, var(--y), 0) scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipOut {
  from {
    transform: translate3d(0, var(--y), 0) perspective(400px);
  }
  30% {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}

.Toastify__slide-enter--top-left,
.Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--top-right,
.Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left,
.Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-right,
.Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,kt=new Map,Is=(e,t)=>{ra(()=>{if(!e||typeof document>"u")return;let a=document,r=kt.get(a);if(r){t&&r.setAttribute("nonce",t);return}let n=a.createElement("style");n.textContent=e,t&&n.setAttribute("nonce",t),a.head.appendChild(n),kt.set(a,n)},[t])};function Ls(e){return Is(Ps,e.nonce),l.createElement(Rs,{...e})}var X={emailjs:{serviceId:"service_2936zzf",templateId:"template_q859oph",publicKey:"YDO5GNDdewVvMoyTz"},recaptcha:{siteKey:"6LeJDrIqAAAAAAJz4msjc88QwwlPf-Qge27d_t7a"},contact:{email:"atrenchevski@gmail.com"}},Ms=()=>{const e=["VITE_CONTACT_EMAIL","VITE_EMAILJS_SERVICE_ID","VITE_EMAILJS_TEMPLATE_ID","VITE_EMAILJS_PUBLIC_KEY","VITE_RECAPTCHA_SITE_KEY"].filter(t=>!{BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_CONTACT_EMAIL:"atrenchevski@gmail.com",VITE_EMAILJS_PUBLIC_KEY:"YDO5GNDdewVvMoyTz",VITE_EMAILJS_SERVICE_ID:"service_2936zzf",VITE_EMAILJS_TEMPLATE_ID:"template_q859oph",VITE_RECAPTCHA_SITE_KEY:"6LeJDrIqAAAAAAJz4msjc88QwwlPf-Qge27d_t7a"}[t]);if(e.length>0){const t=`Missing required environment variables: ${e.join(", ")}. Please check your .env file.`;if(typeof window<"u")throw new Error(t);console.warn(t)}},me=class{constructor(e=0,t="Network Error"){this.status=e,this.text=t}},As=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},P={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:As()},st=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},Ds=(e,t="https://api.emailjs.com")=>{if(!e)return;const a=st(e);P.publicKey=a.publicKey,P.blockHeadless=a.blockHeadless,P.storageProvider=a.storageProvider,P.blockList=a.blockList,P.limitRate=a.limitRate,P.origin=a.origin||t},na=async(e,t,a={})=>{const r=await fetch(P.origin+e,{method:"POST",headers:a,body:t}),n=await r.text(),s=new me(r.status,n);if(r.ok)return s;throw s},sa=(e,t,a)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||typeof a!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},$s=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},oa=e=>e.webdriver||!e.languages||e.languages.length===0,ia=()=>new me(451,"Unavailable For Headless Browser"),Os=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},zs=e=>!e.list?.length||!e.watchVariable,Bs=(e,t)=>e instanceof FormData?e.get(t):e[t],la=(e,t)=>{if(zs(e))return!1;Os(e.list,e.watchVariable);const a=Bs(t,e.watchVariable);return typeof a!="string"?!1:e.list.includes(a)},ca=()=>new me(403,"Forbidden"),Fs=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},Hs=async(e,t,a)=>{const r=Number(await a.get(e)||0);return t-Date.now()+r},ua=async(e,t,a)=>{if(!t.throttle||!a)return!1;Fs(t.throttle,t.id);const r=t.id||e;return await Hs(r,t.throttle,a)>0?!0:(await a.set(r,Date.now().toString()),!1)},da=()=>new me(429,"Too Many Requests"),Vs=async(e,t,a,r)=>{const n=st(r),s=n.publicKey||P.publicKey,i=n.blockHeadless||P.blockHeadless,c=n.storageProvider||P.storageProvider,u={...P.blockList,...n.blockList},d={...P.limitRate,...n.limitRate};return i&&oa(navigator)?Promise.reject(ia()):(sa(s,e,t),$s(a),a&&la(u,a)?Promise.reject(ca()):await ua(location.pathname,d,c)?Promise.reject(da()):na("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:e,template_id:t,template_params:a}),{"Content-type":"application/json"}))},Us=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Gs=e=>typeof e=="string"?document.querySelector(e):e,Js=async(e,t,a,r)=>{const n=st(r),s=n.publicKey||P.publicKey,i=n.blockHeadless||P.blockHeadless,c=P.storageProvider||n.storageProvider,u={...P.blockList,...n.blockList},d={...P.limitRate,...n.limitRate};if(i&&oa(navigator))return Promise.reject(ia());const f=Gs(a);sa(s,e,t),Us(f);const m=new FormData(f);return la(u,m)?Promise.reject(ca()):await ua(location.pathname,d,c)?Promise.reject(da()):(m.append("lib_version","4.4.1"),m.append("service_id",e),m.append("template_id",t),m.append("user_id",s),na("/api/v1.0/email/send-form",m))},Ws={init:Ds,send:Vs,sendForm:Js,EmailJSResponseStatus:me};Ms();var Ae={serviceId:X.emailjs.serviceId,templateId:X.emailjs.templateId,publicKey:X.emailjs.publicKey},qs=async(e,t)=>{try{return{success:!0,data:await Ws.send(Ae.serviceId,Ae.templateId,{name:e.name,email:e.email,message:e.message,to_name:"Aleksandar Trenchevski",to_email:X.contact.email,"g-recaptcha-response":t},Ae.publicKey)}}catch(a){const r=a instanceof Error?a.message:"Failed to send email";return console.error("Email send error:",a),{success:!1,error:r}}},Ks=(e={})=>{const{threshold:t=.1,rootMargin:a="0px",triggerOnce:r=!0}=e,[n,s]=(0,l.useState)(!1),[i,c]=(0,l.useState)(!1),u=(0,l.useRef)(null),d=(0,l.useRef)(!1);return(0,l.useEffect)(()=>{const f=u.current;if(!f)return;const m=new IntersectionObserver(([g])=>{if(!g)return;const h=g.isIntersecting;s(h),h&&!d.current&&(d.current=!0,c(!0))},{threshold:t,rootMargin:a});return m.observe(f),()=>{m.unobserve(f),m.disconnect()}},[t,a]),{ref:u,isIntersecting:r?i:n}},Ys=({onChange:e,theme:t="dark",widgetRef:a})=>{const r=X.recaptcha.siteKey,[n,s]=(0,l.useState)(!1),[i,c]=(0,l.useState)(null),{ref:u,isIntersecting:d}=Ks({rootMargin:"100px",triggerOnce:!0,threshold:.01}),f=t==="dark"?"text-white/60":"text-gray-600";return(0,l.useEffect)(()=>{!r||!d||n||(async()=>{try{const m=(await at(()=>import("./esm-Bt_Y4fFy.js"),__vite__mapDeps([0,1,2]))).default;c(()=>m),s(!0)}catch(m){console.error("Failed to load reCAPTCHA:",m)}})()},[r,d,n]),(0,o.jsx)("div",{ref:u,className:"flex flex-col items-center justify-center min-h-19.5",children:r?i?(0,o.jsx)(i,{ref:a,sitekey:r,onChange:e,theme:t}):(0,o.jsx)("div",{className:`flex items-center justify-center text-sm ${f}`,children:"Loading verification..."}):(0,o.jsx)("div",{className:`flex items-center justify-center text-sm text-center ${f}`,children:"Verification is unavailable right now."})})},ma=e=>({position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:e?"dark":"light"}),ye=(e,t)=>{j.error(e,ma(t))},Xs=(e,t)=>{j.success(e,ma(t))},Et=({id:e,label:t,icon:a,type:r,value:n,error:s,darkMode:i,onChange:c})=>(0,o.jsxs)(k.div,{className:"mb-4 sm:mb-6",variants:V,children:[(0,o.jsxs)("label",{htmlFor:e,className:`block text-sm sm:text-base font-semibold mb-2 ${i?"text-white":"text-gray-700"}`,children:[a,t]}),(0,o.jsx)("input",{id:e,type:r,name:e,value:n,onChange:c,"aria-invalid":s?!0:void 0,"aria-describedby":s?`${e}-error`:void 0,className:`w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${s?"border-red-500 focus:ring-red-400":i?"bg-[#241041] border-fuchsia-500/25 text-white focus:ring-cyan-400":"focus:ring-fuchsia-400"}`,required:!0}),s&&(0,o.jsx)("p",{id:`${e}-error`,className:"text-red-500 text-sm mt-1",role:"alert",children:s})]}),Qs=()=>{const[e,t]=(0,l.useState)({name:"",email:"",message:""}),[a,r]=(0,l.useState)(!1),[n,s]=(0,l.useState)(null),i=(0,l.useRef)(null),[c,u]=(0,l.useState)(!1),[d,f]=(0,l.useState)(!1),[m,g]=(0,l.useState)({}),{darkMode:h}=$(),v=()=>{const p={},E=e.name.trim(),S=e.email.trim(),R=e.message.trim();return E?E.length<2&&(p.name="Name must be at least 2 characters"):p.name="Name is required",S?(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(S)||S.length>254)&&(p.email="Please enter a valid email address"):p.email="Email is required",R?R.length<10?p.message="Message must be at least 10 characters":R.length>5e3&&(p.message="Message cannot exceed 5000 characters"):p.message="Message is required",g(p),Object.keys(p).length===0},b=p=>{const{name:_,value:T}=p.target;t(C=>({...C,[_]:T})),m[_]&&g(C=>({...C,[_]:""}))},y=p=>{s(p)},w=()=>{t({name:"",email:"",message:""}),g({}),i.current?.reset(),s(null),r(!1),u(!1)},x=async p=>{if(p.preventDefault(),!v()){ye("Please fix the form errors before submitting.",h);return}if(!n){ye("Please complete the CAPTCHA to proceed.",h);return}f(!0);try{const _=await qs(e,n);_.success?(r(!0),u(!0),Xs("Message sent successfully! I'll get back to you soon.",h)):(i.current?.reset(),s(null),ye(`Failed to send message: ${_.error}. Please try again or contact me directly.`,h))}catch(_){console.error("Form submission error:",_),i.current?.reset(),s(null),ye("An unexpected error occurred. Please try again.",h)}finally{f(!1)}};return(0,o.jsxs)(k.section,{className:`p-6 sm:p-8 md:p-10 lg:p-16 rounded-lg shadow-lg max-w-4xl mx-auto my-8 md:my-12 ${q(h)}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{staggerChildren:.2},children:[(0,o.jsx)(Ls,{}),(0,o.jsx)(k.h2,{className:`text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center ${h?"text-white":"text-gray-900"}`,variants:V,children:"Get In Touch"}),(0,o.jsxs)(k.p,{className:`text-base sm:text-lg lg:text-xl text-center mb-8 sm:mb-10 p-4 rounded-lg ${h?"bg-[#241041] text-white":"bg-gray-50 text-gray-600"}`,variants:V,children:["Feel free to contact me directly at"," ",(0,o.jsx)("a",{href:`mailto:${X.contact.email}`,className:`font-semibold ${h?"text-cyan-400":"text-fuchsia-600"}`,children:X.contact.email})," ","or by filling out the form below. I'll get back to you as soon as I can."]}),c&&(0,o.jsxs)(k.div,{className:`text-center p-4 sm:p-6 rounded-lg shadow-md max-w-md mx-auto flex flex-col items-center justify-center ${h?"bg-green-900 border-green-600":"bg-green-50 border-green-400"}`,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5},role:"status","aria-live":"polite",children:[(0,o.jsx)(Rn,{className:`text-4xl mb-4 ${h?"text-green-400":"text-green-500"}`,"aria-hidden":"true"}),(0,o.jsx)("span",{className:`text-base sm:text-lg font-semibold mb-2 ${h?"text-white":"text-gray-900"}`,children:"Thank you! Your message has been sent successfully."}),(0,o.jsx)("button",{type:"button",onClick:w,className:`mt-4 px-6 py-2 rounded-full font-semibold transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 ${h?"bg-purple-800 text-white hover:bg-purple-700 focus:ring-cyan-400":"bg-black text-white hover:bg-gray-800 focus:ring-fuchsia-500"}`,children:"Send another message"})]}),!a&&(0,o.jsxs)(k.form,{onSubmit:p=>{x(p)},className:`max-w-lg w-full p-6 sm:p-8 rounded-lg shadow-md mx-auto ${h?"bg-[#160a2e] text-white border border-cyan-500/15":"bg-white"}`,initial:"hidden",animate:"visible",variants:V,noValidate:!0,children:[(0,o.jsx)(Et,{id:"name",label:"Your Name",icon:(0,o.jsx)(Tn,{className:"text-gray-500 mr-2 text-lg","aria-hidden":"true"}),type:"text",value:e.name,error:m.name,darkMode:h,onChange:b}),(0,o.jsx)(Et,{id:"email",label:"Your Email",icon:(0,o.jsx)(Cn,{className:"text-gray-500 mr-2 text-lg","aria-hidden":"true"}),type:"email",value:e.email,error:m.email,darkMode:h,onChange:b}),(0,o.jsxs)(k.div,{className:"mb-4 sm:mb-6",variants:V,children:[(0,o.jsxs)("label",{htmlFor:"message",className:`block text-sm sm:text-base font-semibold mb-2 ${h?"text-white":"text-gray-700"}`,children:[(0,o.jsx)(Nn,{className:"text-gray-500 mr-2 text-lg","aria-hidden":"true"}),"Your Message"]}),(0,o.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:b,maxLength:5e3,"aria-invalid":m.message?!0:void 0,"aria-describedby":m.message?"message-error":void 0,className:`w-full p-2 sm:p-3 h-24 sm:h-32 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${m.message?"border-red-500 focus:ring-red-400":h?"bg-[#241041] border-fuchsia-500/25 text-white focus:ring-cyan-400":"focus:ring-fuchsia-400"}`,required:!0}),(0,o.jsxs)("div",{className:"mt-1 flex items-center justify-between",children:[m.message?(0,o.jsx)("p",{id:"message-error",className:"text-red-500 text-sm",role:"alert",children:m.message}):(0,o.jsx)("span",{}),(0,o.jsxs)("span",{className:`text-xs ${h?"text-gray-300":"text-gray-500"}`,"aria-live":"polite",children:[e.message.length,"/5000"]})]})]}),(0,o.jsxs)(k.div,{className:"flex flex-col items-center justify-center",variants:V,children:[(0,o.jsx)(Ys,{widgetRef:i,onChange:y,theme:h?"dark":"light"}),(0,o.jsxs)(k.button,{type:"submit",disabled:d,className:`mt-6 px-6 py-3 rounded-full font-semibold transition flex items-center justify-center space-x-2 select-none ${d?h?"bg-gray-700 text-gray-400 cursor-not-allowed":"bg-gray-400 text-gray-600 cursor-not-allowed":h?"bg-fuchsia-700 text-white hover:bg-fuchsia-600 shadow-[0_0_20px_rgba(217,70,239,0.35)] cursor-pointer":"bg-black text-white hover:bg-gray-800 cursor-pointer"}`,variants:V,"aria-busy":d,children:[d&&(0,o.jsx)(k.div,{className:"w-4 h-4 border-2 border-current border-t-transparent rounded-full",animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},"aria-hidden":"true"}),(0,o.jsx)("span",{children:d?"Sending...":"Send Message"})]})]})]})]})},Zs=()=>{const[e,t]=(0,l.useState)(!1),{darkMode:a}=$(),r=(0,l.useRef)(null),n=()=>{r.current&&clearTimeout(r.current),r.current=setTimeout(()=>{t(window.scrollY>100)},150)},s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(0,l.useEffect)(()=>(window.addEventListener("scroll",n,{passive:!0}),()=>{window.removeEventListener("scroll",n),r.current&&clearTimeout(r.current)}),[]),(0,o.jsx)(De,{children:e&&(0,o.jsx)(k.button,{onClick:s,className:"fixed bottom-8 right-6 sm:bottom-10 sm:right-8 md:bottom-12 md:right-10 lg:bottom-16 lg:right-10 text-[#0d0221] rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center shadow-lg cursor-pointer",title:"Back to Top","aria-label":"Back to top",initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},transition:{type:"spring",stiffness:300,damping:20},style:{background:a?"#22d3ee":"#d946ef"},whileHover:{scale:1.2},children:(0,o.jsx)(Pn,{"aria-hidden":"true"})})})};function eo(e){return L({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(e)}function to(e){return L({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"},child:[]}]})(e)}function ao(e){return L({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"},child:[]}]})(e)}var ro=()=>{const{darkMode:e}=$();return(0,o.jsxs)("footer",{className:`p-4 text-center ${e?"text-white":"text-gray-900"}`,children:[(0,o.jsxs)("p",{className:"text-xs sm:text-base",children:["© Aleksandar Trenchevski ",new Date().getFullYear(),". All rights reserved."]}),(0,o.jsxs)("div",{className:"mt-4",children:[(0,o.jsx)("span",{className:"text-xs sm:text-sm",children:"Built with:"}),(0,o.jsxs)("div",{className:"flex justify-center items-center mt-2 space-x-2 sm:space-x-4 text-xs sm:text-sm",children:[(0,o.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,o.jsx)(_n,{className:"text-blue-500"}),(0,o.jsx)("span",{children:"React"})]}),(0,o.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,o.jsx)(to,{className:"text-blue-400"}),(0,o.jsx)("span",{children:"Tailwind CSS"})]}),(0,o.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,o.jsx)(ao,{className:"text-pink-500"}),(0,o.jsx)("span",{children:"Motion"})]}),(0,o.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,o.jsx)(eo,{className:"text-blue-600"}),(0,o.jsx)("span",{children:"TypeScript"})]})]})]})]})},no=()=>{const{darkMode:e}=$();return(0,o.jsxs)("div",{className:`text-gray-900 ${e?"text-white bg-linear-to-br from-[#0d0221] via-[#2a0a4a] to-[#0d0221]":"text-gray-800 bg-linear-to-br from-amber-300 via-pink-400 to-purple-400"}`,children:[(0,o.jsx)("a",{href:"#home",className:"sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-black focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400",children:"Skip to content"}),(0,o.jsx)($n,{}),(0,o.jsx)("section",{id:"home",className:"p-8",children:(0,o.jsx)(On,{})}),(0,o.jsx)("section",{id:"about",className:"p-8",children:(0,o.jsx)(zn,{})}),(0,o.jsx)("section",{id:"experience",className:"p-8",children:(0,o.jsx)(Fn,{})}),(0,o.jsx)("section",{id:"education",className:"p-8",children:(0,o.jsx)(Vn,{})}),(0,o.jsx)("section",{id:"skills",className:"p-8",children:(0,o.jsx)(Jn,{})}),(0,o.jsx)("section",{id:"certificates",className:"p-8",children:(0,o.jsx)(qn,{})}),(0,o.jsx)("section",{id:"projects",className:"p-8",children:(0,o.jsx)(Xn,{})}),(0,o.jsx)("section",{id:"languages",className:"p-8",children:(0,o.jsx)(Zn,{})}),(0,o.jsx)("section",{id:"contact",className:"p-8",children:(0,o.jsx)(Qs,{})}),(0,o.jsx)(Zs,{}),(0,o.jsx)(ro,{})]})},so=class extends l.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("Error caught by Error Boundary:",e,t)}handleReset=()=>{this.setState({hasError:!1,error:null})};render(){return this.state.hasError?(0,o.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-linear-to-r from-red-500 to-red-700 p-4",role:"alert","aria-live":"assertive",children:(0,o.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center",children:[(0,o.jsx)("h2",{className:"text-2xl font-bold text-red-600 mb-4",children:"Oops! Something went wrong"}),(0,o.jsx)("p",{className:"text-gray-600 mb-4",children:"We're sorry for the inconvenience. Please try refreshing the page or contact support if the problem persists."}),this.state.error&&(0,o.jsxs)("details",{className:"text-left mb-6",children:[(0,o.jsx)("summary",{className:"cursor-pointer text-sm text-gray-500 hover:text-gray-700",children:"Error details"}),(0,o.jsx)("pre",{className:"mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto max-h-32",children:this.state.error.toString()})]}),(0,o.jsx)("button",{onClick:this.handleReset,className:"bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition",children:"Try Again"})]})}):this.props.children}},oo=(0,l.lazy)(()=>at(()=>import("./NotFound-BWds0Wtx.js"),__vite__mapDeps([3,2,1]))),io=()=>{const[e,t]=(0,l.useState)(!0),a=()=>{t(!1)};return(0,o.jsx)(so,{children:(0,o.jsx)(xa,{reducedMotion:"user",children:(0,o.jsx)(ba,{children:(0,o.jsx)(Zr,{children:(0,o.jsxs)("div",{className:"App",children:[e&&(0,o.jsx)(hn,{onComplete:a}),!e&&(0,o.jsx)(l.Suspense,{fallback:null,children:(0,o.jsxs)(kr,{children:[(0,o.jsx)(ze,{path:"/",element:(0,o.jsx)(no,{})}),(0,o.jsx)(ze,{path:"*",element:(0,o.jsx)(oo,{})})]})})]})})})})})};(0,va.createRoot)(document.getElementById("root")).render((0,o.jsx)(l.StrictMode,{children:(0,o.jsx)(io,{})}));export{$ as n,Jt as r,q as t};
