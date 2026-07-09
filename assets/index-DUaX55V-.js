const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/esm-uhhtIFB7.js","assets/rolldown-runtime-W-g5d7YK.js","assets/motion-BSFg4EIn.js","assets/NotFound-BJEJo2ud.js"])))=>i.map(i=>d[i]);
import{a as da}from"./rolldown-runtime-W-g5d7YK.js";import{t as ma}from"./react-DRaUvBpJ.js";import{a as fa,i as Ae,n as ha,o as pa,r as ga,t as k}from"./motion-BSFg4EIn.js";var ya=ma(),l=da(pa(),1),kt=(0,l.createContext)(void 0),i=fa(),xa=({children:e})=>{const[t,a]=(0,l.useState)(()=>{if(typeof window>"u")return!1;try{const s=localStorage.getItem("darkMode");if(s!==null)return JSON.parse(s)===!0}catch(s){console.error("Error parsing saved theme:",s)}return window.matchMedia("(prefers-color-scheme: dark)").matches});(0,l.useEffect)(()=>{typeof document>"u"||document.documentElement.classList.toggle("dark",t)},[t]);const r=(0,l.useCallback)(()=>{a(s=>(localStorage.setItem("darkMode",JSON.stringify(!s)),!s))},[]),n=(0,l.useMemo)(()=>({darkMode:t,toggleDarkMode:r}),[t,r]);return(0,i.jsx)(kt.Provider,{value:n,children:(0,i.jsx)("div",{className:t?"dark":"",children:e})})},qe=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Et=/^[\\/]{2}/;function va(e,t){return t+e.replace(/\\/g,"/")}var it="popstate";function ot(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function ba(e={}){function t(r,n){let s=n.state?.masked,{pathname:o,search:c,hash:u}=s||r.location;return De("",{pathname:o,search:c,hash:u},n.state&&n.state.usr||null,n.state&&n.state.key||"default",s?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function a(r,n){return typeof n=="string"?n:re(n)}return _a(t,a,null,e)}function C(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function U(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function wa(){return Math.random().toString(36).substring(2,10)}function lt(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function De(e,t,a=null,r,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Z(t):t,state:a,key:t&&t.key||r||wa(),mask:n}}function re({pathname:e="/",search:t="",hash:a=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function Z(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substring(a),e=e.substring(0,a));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function _a(e,t,a,r={}){let{window:n=document.defaultView,v5Compat:s=!1}=r,o=n.history,c="POP",u=null,d=m();d==null&&(d=0,o.replaceState({...o.state,idx:d},""));function m(){return(o.state||{idx:null}).idx}function f(){c="POP";let y=m(),w=y==null?null:y-d;d=y,u&&u({action:c,location:b.location,delta:w})}function h(y,w){c="PUSH";let p=ot(y)?y:De(b.location,y,w);a&&a(p,y),d=m()+1;let x=lt(p,d),_=b.createHref(p.mask||p);try{o.pushState(x,"",_)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;n.location.assign(_)}s&&u&&u({action:c,location:b.location,delta:1})}function g(y,w){c="REPLACE";let p=ot(y)?y:De(b.location,y,w);a&&a(p,y),d=m();let x=lt(p,d),_=b.createHref(p.mask||p);o.replaceState(x,"",_),s&&u&&u({action:c,location:b.location,delta:0})}function v(y){return ka(n,y)}let b={get action(){return c},get location(){return e(n,o)},listen(y){if(u)throw new Error("A history only accepts one active listener");return n.addEventListener(it,f),u=y,()=>{n.removeEventListener(it,f),u=null}},createHref(y){return t(n,y)},createURL:v,encodeLocation(y){let w=v(y);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:h,replace:g,go(y){return o.go(y)}};return b}function ka(e,t,a=!1){let r="http://localhost";e&&(r=e.location.origin!=="null"?e.location.origin:e.location.href),C(r,"No window.location.(origin|href) available to create URL");let n=typeof t=="string"?t:re(t);return n=n.replace(/ $/,"%20"),!a&&Et.test(n)&&(n=r+n),new URL(n,r)}function Tt(e,t,a="/"){return Ea(e,t,a,!1)}function Ea(e,t,a,r,n){let s=G((typeof t=="string"?Z(t):t).pathname||"/",a);if(s==null)return null;let o=n??Sa(e),c=null,u=$a(s);for(let d=0;c==null&&d<o.length;++d)c=Da(o[d],u,r);return c}function Ta(e,t){let{route:a,pathname:r,params:n}=e;return{id:a.id,pathname:r,params:n,loaderData:t[a.id],handle:a.handle}}function Sa(e){let t=St(e);return ja(t),t}function St(e,t=[],a=[],r="",n=!1){let s=(o,c,u=n,d)=>{let m={relativePath:d===void 0?o.path||"":d,caseSensitive:o.caseSensitive===!0,childrenIndex:c,route:o};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(r)&&u)return;C(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length)}let f=F([r,m.relativePath]),h=a.concat(m);o.children&&o.children.length>0&&(C(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),St(o.children,t,h,f,u)),!(o.path==null&&!o.index)&&t.push({path:f,score:Ma(f,o.index),routesMeta:h.map((g,v)=>{let[b,y]=Ct(g.relativePath,g.caseSensitive,v===h.length-1);return{...g,matcher:b,compiledParams:y}})})};return e.forEach((o,c)=>{if(o.path===""||!o.path?.includes("?"))s(o,c);else for(let u of jt(o.path))s(o,c,!0,u)}),t}function jt(e){let t=e.split("/");if(t.length===0)return[];let[a,...r]=t,n=a.endsWith("?"),s=a.replace(/\?$/,"");if(r.length===0)return n?[s,""]:[s];let o=jt(r.join("/")),c=[];return c.push(...o.map(u=>u===""?s:[s,u].join("/"))),n&&c.push(...o),c.map(u=>e.startsWith("/")&&u===""?"/":u)}function ja(e){e.sort((t,a)=>t.score!==a.score?a.score-t.score:Aa(t.routesMeta.map(r=>r.childrenIndex),a.routesMeta.map(r=>r.childrenIndex)))}var Na=/^:[\w-]+$/,Ca=3,Ra=2,Pa=1,Ia=10,La=-2,ct=e=>e==="*";function Ma(e,t){let a=e.split("/"),r=a.length;return a.some(ct)&&(r+=La),t&&(r+=Ra),a.filter(n=>!ct(n)).reduce((n,s)=>n+(Na.test(s)?Ca:s===""?Pa:Ia),r)}function Aa(e,t){return e.length===t.length&&e.slice(0,-1).every((a,r)=>a===t[r])?e[e.length-1]-t[t.length-1]:0}function Da(e,t,a=!1){let{routesMeta:r}=e,n={},s="/",o=[];for(let c=0;c<r.length;++c){let u=r[c],d=c===r.length-1,m=s==="/"?t:t.slice(s.length)||"/",f={path:u.relativePath,caseSensitive:u.caseSensitive,end:d},h=u.matcher&&u.compiledParams?Nt(f,m,u.matcher,u.compiledParams):xe(f,m),g=u.route;if(!h&&d&&a&&!r[r.length-1].route.index&&(h=xe({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},m)),!h)return null;Object.assign(n,h.params),o.push({params:n,pathname:F([s,h.pathname]),pathnameBase:Ba(F([s,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(s=F([s,h.pathnameBase]))}return o}function xe(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,r]=Ct(e.path,e.caseSensitive,e.end);return Nt(e,t,a,r)}function Nt(e,t,a,r){let n=t.match(a);if(!n)return null;let s=n[0],o=s.replace(/(.)\/+$/,"$1"),c=n.slice(1);return{params:r.reduce((u,{paramName:d,isOptional:m},f)=>{if(d==="*"){let g=c[f]||"";o=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}const h=c[f];return m&&!h?u[d]=void 0:u[d]=(h||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function Ct(e,t=!1,a=!0){U(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,c,u,d)=>{if(r.push({paramName:o,isOptional:c!=null}),c){let m=d.charAt(u+s.length);return m&&m!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,t?void 0:"i"),r]}function $a(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return U(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function G(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,r=e.charAt(a);return r&&r!=="/"?null:e.slice(a)||"/"}function Oa(e,t="/"){let{pathname:a,search:r="",hash:n=""}=typeof e=="string"?Z(e):e,s;return a?(a=Pt(a),a.startsWith("/")?s=ut(a.substring(1),"/"):s=ut(a,t)):s=t,{pathname:s,search:Fa(r),hash:Ha(n)}}function ut(e,t){let a=It(t).split("/");return e.split("/").forEach(r=>{r===".."?a.length>1&&a.pop():r!=="."&&a.push(r)}),a.length>1?a.join("/"):"/"}function Ce(e,t,a,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function za(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}function Rt(e){let t=za(e);return t.map((a,r)=>r===t.length-1?a.pathname:a.pathnameBase)}function Ke(e,t,a,r=!1){let n;typeof e=="string"?n=Z(e):(n={...e},C(!n.pathname||!n.pathname.includes("?"),Ce("?","pathname","search",n)),C(!n.pathname||!n.pathname.includes("#"),Ce("#","pathname","hash",n)),C(!n.search||!n.search.includes("#"),Ce("#","search","hash",n)));let s=e===""||n.pathname==="",o=s?"/":n.pathname,c;if(o==null)c=a;else{let f=t.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;n.pathname=h.join("/")}c=f>=0?t[f]:"/"}let u=Oa(n,c),d=o&&o!=="/"&&o.endsWith("/"),m=(s||o===".")&&a.endsWith("/");return!u.pathname.endsWith("/")&&(d||m)&&(u.pathname+="/"),u}var Pt=e=>e.replace(/[\\/]{2,}/g,"/"),F=e=>Pt(e.join("/")),It=e=>e.replace(/\/+$/,""),Ba=e=>It(e).replace(/^\/*/,"/"),Fa=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ha=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Va=class{status;statusText;data;error;internal;constructor(e,t,a,r=!1){this.status=e,this.statusText=t||"",this.internal=r,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function Ua(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Ga(e){return F(e.map(t=>t.route.path).filter(Boolean))||"/"}var Lt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Mt(e,t){let a=e;if(typeof a!="string"||!qe.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let r=a,n=!1;if(Lt)try{let s=new URL(window.location.href),o=Et.test(a)?new URL(va(a,s.protocol)):new URL(a),c=G(o.pathname,t);o.origin===s.origin&&c!=null?a=c+o.search+o.hash:n=!0}catch{U(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:n,to:a}}var At=["POST","PUT","PATCH","DELETE"],oi=new Set(At),Ja=["GET",...At],li=new Set(Ja),Wa=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function qa(e){try{return Wa.includes(new URL(e).protocol)}catch{return!1}}var ee=l.createContext(null);ee.displayName="DataRouter";var se=l.createContext(null);se.displayName="DataRouterState";var Dt=l.createContext(!1);function Ka(){return l.useContext(Dt)}var $t=l.createContext({isTransitioning:!1});$t.displayName="ViewTransition";var Ya=l.createContext(new Map);Ya.displayName="Fetchers";var $e=l.createContext(null);$e.displayName="Await";var D=l.createContext(null);D.displayName="Navigation";var ie=l.createContext(null);ie.displayName="Location";var W=l.createContext({outlet:null,matches:[],isDataRoute:!1});W.displayName="Route";var Ye=l.createContext(null);Ye.displayName="RouteError";var Ot="REACT_ROUTER_ERROR",Xa="REDIRECT",Qa="ROUTE_ERROR_RESPONSE";function Za(e){if(e.startsWith(`${Ot}:${Xa}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function er(e){if(e.startsWith(`${Ot}:${Qa}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Va(t.status,t.statusText,t.data)}catch{}}function tr(e,{relative:t}={}){C(oe(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:r}=l.useContext(D),{hash:n,pathname:s,search:o}=le(e,{relative:t}),c=s;return a!=="/"&&(c=s==="/"?a:F([a,s])),r.createHref({pathname:c,search:o,hash:n})}function oe(){return l.useContext(ie)!=null}function H(){return C(oe(),"useLocation() may be used only in the context of a <Router> component."),l.useContext(ie).location}var zt="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ar(){let{isDataRoute:e}=l.useContext(W);return e?gr():rr()}function rr(){C(oe(),"useNavigate() may be used only in the context of a <Router> component.");let e=l.useContext(ee),{basename:t,navigator:a}=l.useContext(D),{matches:r}=l.useContext(W),{pathname:n}=H(),s=JSON.stringify(Rt(r)),o=l.useRef(!1);return l.useLayoutEffect(()=>{o.current=!0}),l.useCallback((c,u={})=>{if(U(o.current,zt),!o.current)return;if(typeof c=="number"){a.go(c);return}let d=Ke(c,JSON.parse(s),n,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:F([t,d.pathname])),(u.replace?a.replace:a.push)(d,u.state,u)},[t,a,s,n,e])}var ci=l.createContext(null);function le(e,{relative:t}={}){let{matches:a}=l.useContext(W),{pathname:r}=H(),n=JSON.stringify(Rt(a));return l.useMemo(()=>Ke(e,JSON.parse(n),r,t==="path"),[e,n,r,t])}function nr(e,t){return Bt(e,t)}function Bt(e,t,a){C(oe(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=l.useContext(D),{matches:n}=l.useContext(W),s=n[n.length-1],o=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=H(),d;if(t){let v=typeof t=="string"?Z(t):t;C(c==="/"||v.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${v.pathname}" was given in the \`location\` prop.`),d=v}else d=u;let m=d.pathname||"/",f=m;if(c!=="/"){let v=c.replace(/^\//,"").split("/");f="/"+m.replace(/^\//,"").split("/").slice(v.length).join("/")}let h=a&&a.state.matches.length?a.state.matches.map(v=>Object.assign(v,{route:a.manifest[v.route.id]||v.route})):Tt(e,{pathname:f}),g=ur(h&&h.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:F([c,r.encodeLocation?r.encodeLocation(v.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?c:F([c,r.encodeLocation?r.encodeLocation(v.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:v.pathnameBase])})),n,a);return t&&g?l.createElement(ie.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...d},navigationType:"POP"}},g):g}function sr(){let e=pr(),t=Ua(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null;return l.createElement(l.Fragment,null,l.createElement("h2",null,"Unexpected Application Error!"),l.createElement("h3",{style:{fontStyle:"italic"}},t),a?l.createElement("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},a):null,null)}var ir=l.createElement(sr,null),or=class extends l.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static contextType=Dt;static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const a=er(e.digest);a&&(e=a)}let t=e!==void 0?l.createElement(W.Provider,{value:this.props.routeContext},l.createElement(Ye.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?l.createElement(lr,{error:e},t):t}},Re=new WeakMap;function lr({children:e,error:t}){let{basename:a}=l.useContext(D);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=Za(t.digest);if(r){let n=Re.get(t);if(n)throw n;let s=Mt(r.location,a),o=s.absoluteURL||s.to;if(qa(o))throw new Error("Invalid redirect location");if(Lt&&!Re.get(t))if(s.isExternal||r.reloadDocument)window.location.href=o;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:r.replace}));throw Re.set(t,c),c}return l.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o}`})}}return e}function cr({routeContext:e,match:t,children:a}){let r=l.useContext(ee);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),l.createElement(W.Provider,{value:e},a)}function ur(e,t=[],a){let r=a?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let n=e,s=r?.errors;if(s!=null){let m=n.findIndex(f=>f.route.id&&s?.[f.route.id]!==void 0);C(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),n=n.slice(0,Math.min(n.length,m+1))}let o=!1,c=-1;if(a&&r){o=r.renderFallback;for(let m=0;m<n.length;m++){let f=n[m];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=m),f.route.id){let{loaderData:h,errors:g}=r,v=f.route.loader&&!h.hasOwnProperty(f.route.id)&&(!g||g[f.route.id]===void 0);if(f.route.lazy||v){a.isStatic&&(o=!0),c>=0?n=n.slice(0,c+1):n=[n[0]];break}}}}let u=a?.onError,d=r&&u?(m,f)=>{u(m,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Ga(r.matches),errorInfo:f})}:void 0;return n.reduceRight((m,f,h)=>{let g,v=!1,b=null,y=null;r&&(g=s&&f.route.id?s[f.route.id]:void 0,b=f.route.errorElement||ir,o&&(c<0&&h===0?(yr("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,y=null):c===h&&(v=!0,y=f.route.hydrateFallbackElement||null)));let w=t.concat(n.slice(0,h+1)),p=()=>{let x;return g?x=b:v?x=y:f.route.Component?x=l.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=m,l.createElement(cr,{match:f,routeContext:{outlet:m,matches:w,isDataRoute:r!=null},children:x})};return r&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?l.createElement(or,{location:r.location,revalidation:r.revalidation,component:b,error:g,children:p(),routeContext:{outlet:null,matches:w,isDataRoute:!0},onError:d}):p()},null)}function Xe(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function dr(e){let t=l.useContext(ee);return C(t,Xe(e)),t}function Qe(e){let t=l.useContext(se);return C(t,Xe(e)),t}function mr(e){let t=l.useContext(W);return C(t,Xe(e)),t}function Ze(e){let t=mr(e),a=t.matches[t.matches.length-1];return C(a.route.id,`${e} can only be used on routes that contain a unique "id"`),a.route.id}function fr(){return Ze("useRouteId")}function hr(){let e=Qe("useNavigation");return l.useMemo(()=>{let{matches:t,historyAction:a,...r}=e.navigation;return r},[e.navigation])}function Ft(){let{matches:e,loaderData:t}=Qe("useMatches");return l.useMemo(()=>e.map(a=>Ta(a,t)),[e,t])}function pr(){let e=l.useContext(Ye),t=Qe("useRouteError"),a=Ze("useRouteError");return e!==void 0?e:t.errors?.[a]}function gr(){let{router:e}=dr("useNavigate"),t=Ze("useNavigate"),a=l.useRef(!1);return l.useLayoutEffect(()=>{a.current=!0}),l.useCallback(async(r,n={})=>{U(a.current,zt),a.current&&(typeof r=="number"?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...n}))},[e,t])}var dt={};function yr(e,t,a){!t&&!dt[e]&&(dt[e]=!0,U(!1,a))}var ui=l.memo(xr);function xr({routes:e,manifest:t,future:a,state:r,isStatic:n,onError:s}){return Bt(e,void 0,{manifest:t,state:r,isStatic:n,onError:s,future:a})}function Oe(e){C(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ht({basename:e="/",children:t=null,location:a,navigationType:r="POP",navigator:n,static:s=!1,useTransitions:o}){C(!oe(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=e.replace(/^\/*/,"/"),u=l.useMemo(()=>({basename:c,navigator:n,static:s,useTransitions:o,future:{}}),[c,n,s,o]);typeof a=="string"&&(a=Z(a));let{pathname:d="/",search:m="",hash:f="",state:h=null,key:g="default",mask:v}=a,b=l.useMemo(()=>{let y=G(d,c);return y==null?null:{location:{pathname:y,search:m,hash:f,state:h,key:g,mask:v},navigationType:r}},[c,d,m,f,h,g,r,v]);return U(b!=null,`<Router basename="${c}"> is not able to match the URL "${d}${m}${f}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:l.createElement(D.Provider,{value:u},l.createElement(ie.Provider,{children:t,value:b}))}function vr({children:e,location:t}){return nr(ze(e),t)}var di=class extends l.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:a}=this.props,r=null,n=0;if(!(a instanceof Promise))n=1,r=Promise.resolve(),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_data",{get:()=>a});else if(this.state.error){n=2;let s=this.state.error;r=Promise.reject().catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_error",{get:()=>s})}else a._tracked?(r=a,n="_error"in r?2:"_data"in r?1:0):(n=0,Object.defineProperty(a,"_tracked",{get:()=>!0}),r=a.then(s=>Object.defineProperty(a,"_data",{get:()=>s}),s=>{this.props.onError?.(s),Object.defineProperty(a,"_error",{get:()=>s})}));if(n===2&&!t)throw r._error;if(n===2)return l.createElement($e.Provider,{value:r,children:t});if(n===1)return l.createElement($e.Provider,{value:r,children:e});throw r}};function ze(e,t=[]){let a=[];return l.Children.forEach(e,(r,n)=>{if(!l.isValidElement(r))return;let s=[...t,n];if(r.type===l.Fragment){a.push.apply(a,ze(r.props.children,s));return}C(r.type===Oe,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`);let o=r.props;C(!o.index||!o.children,"An index route cannot have child routes.");let c={id:o.id||s.join("-"),caseSensitive:o.caseSensitive,element:o.element,Component:o.Component,index:o.index,path:o.path,middleware:o.middleware,loader:o.loader,action:o.action,hydrateFallbackElement:o.hydrateFallbackElement,HydrateFallback:o.HydrateFallback,errorElement:o.errorElement,ErrorBoundary:o.ErrorBoundary,shouldRevalidate:o.shouldRevalidate,handle:o.handle,lazy:o.lazy};o.children&&(c.children=ze(o.children,s)),a.push(c)}),a}var ye="application/x-www-form-urlencoded";function we(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function br(e){return we(e)&&e.tagName.toLowerCase()==="button"}function wr(e){return we(e)&&e.tagName.toLowerCase()==="form"}function _r(e){return we(e)&&e.tagName.toLowerCase()==="input"}function kr(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Er(e,t){return e.button===0&&(!t||t==="_self")&&!kr(e)}var he=null;function Tr(){if(he===null)try{new FormData(document.createElement("form"),0),he=!1}catch{he=!0}return he}var Sr=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Pe(e){return e!=null&&!Sr.has(e)?(U(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ye}"`),null):e}function jr(e,t){let a,r,n,s,o;if(wr(e)){let c=e.getAttribute("action");r=c?G(c,t):null,a=e.getAttribute("method")||"get",n=Pe(e.getAttribute("enctype"))||ye,s=new FormData(e)}else if(br(e)||_r(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=e.getAttribute("formaction")||c.getAttribute("action");if(r=u?G(u,t):null,a=e.getAttribute("formmethod")||c.getAttribute("method")||"get",n=Pe(e.getAttribute("formenctype"))||Pe(c.getAttribute("enctype"))||ye,s=new FormData(c,e),!Tr()){let{name:d,type:m,value:f}=e;if(m==="image"){let h=d?`${d}.`:"";s.append(`${h}x`,"0"),s.append(`${h}y`,"0")}else d&&s.append(d,f)}}else{if(we(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a="get",r=null,n=ye,o=e}return s&&n==="text/plain"&&(o=s,s=void 0),{action:r,method:a.toLowerCase(),encType:n,formData:s,body:o}}function et(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}var Nr={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},Cr=/[&><\u2028\u2029]/g;function mt(e){return e.replace(Cr,t=>Nr[t])}function Vt(e,t){let a=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${t}`:a.pathname=`${a.pathname}.${t}`,a}var Rr=(function(){const t=typeof document<"u"&&document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"})(),Pr=function(e){return"/"+e},ft={},tt=function(t,a,r){let n=Promise.resolve();if(a&&a.length>0){let d=function(f){return Promise.all(f.map(h=>Promise.resolve(h).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))},m=function(f){return import.meta.resolve?import.meta.resolve(f):new URL(f,new URL("../../../src/node/plugins/importAnalysisBuild.ts",import.meta.url)).href};const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=c?.nonce||c?.getAttribute("nonce");n=d(a.map(f=>{if(f=Pr(f,r),f=m(f),f in ft)return;ft[f]=!0;const h=f.endsWith(".css");for(let v=o.length-1;v>=0;v--){const b=o[v];if(b.href===f&&(!h||b.rel==="stylesheet"))return}const g=document.createElement("link");if(g.rel=h?"stylesheet":Rr,h||(g.as="script"),g.crossOrigin="",g.href=f,u&&g.setAttribute("nonce",u),document.head.appendChild(g),h)return new Promise((v,b)=>{g.addEventListener("load",v),g.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${f}`)))})}))}function s(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return n.then(o=>{for(const c of o||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})};async function Ir(e,t){if(e.id in t)return t[e.id];try{let a=await tt(()=>import(e.module),[]);return t[e.id]=a,a}catch(a){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Lr(e){return e!=null&&typeof e.page=="string"}function Mr(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Ar(e,t,a){return zr((await Promise.all(e.map(async r=>{let n=t.routes[r.route.id];if(n){let s=await Ir(n,a);return s.links?s.links():[]}return[]}))).flat(1).filter(Mr).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function ht(e,t,a,r,n,s){let o=(u,d)=>a[d]?u.route.id!==a[d].route.id:!0,c=(u,d)=>a[d].pathname!==u.pathname||a[d].route.path?.endsWith("*")&&a[d].params["*"]!==u.params["*"];return s==="assets"?t.filter((u,d)=>o(u,d)||c(u,d)):s==="data"?t.filter((u,d)=>{let m=r.routes[u.route.id];if(!m||!m.hasLoader)return!1;if(o(u,d)||c(u,d))return!0;if(u.route.shouldRevalidate){let f=u.route.shouldRevalidate({currentUrl:new URL(n.pathname+n.search+n.hash,window.origin),currentParams:a[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function Dr(e,t,{includeHydrateFallback:a}={}){return $r(e.map(r=>{let n=t.routes[r.route.id];if(!n)return[];let s=[n.module];return n.clientActionModule&&(s=s.concat(n.clientActionModule)),n.clientLoaderModule&&(s=s.concat(n.clientLoaderModule)),a&&n.hydrateFallbackModule&&(s=s.concat(n.hydrateFallbackModule)),n.imports&&(s=s.concat(n.imports)),s}).flat(1))}function $r(e){return[...new Set(e)]}function Or(e){let t={},a=Object.keys(e).sort();for(let r of a)t[r]=e[r];return t}function zr(e,t){let a=new Set,r=new Set(t);return e.reduce((n,s)=>{if(t&&!Lr(s)&&s.as==="script"&&s.href&&r.has(s.href))return n;let o=JSON.stringify(Or(s));return a.has(o)||(a.add(o),n.push({key:o,link:s})),n},[])}function Br(){let e=l.useContext(ee);return et(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Fr(){let e=l.useContext(se);return et(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var _e=l.createContext(void 0);_e.displayName="FrameworkContext";function at(){let e=l.useContext(_e);return et(e,"You must render this element inside a <HydratedRouter> element"),e}function Hr(e,t){let a=l.useContext(_e),[r,n]=l.useState(!1),[s,o]=l.useState(!1),{onFocus:c,onBlur:u,onMouseEnter:d,onMouseLeave:m,onTouchStart:f}=t,h=l.useRef(null);l.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let b=w=>{w.forEach(p=>{o(p.isIntersecting)})},y=new IntersectionObserver(b,{threshold:.5});return h.current&&y.observe(h.current),()=>{y.disconnect()}}},[e]),l.useEffect(()=>{if(r){let b=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(b)}}},[r]);let g=()=>{n(!0)},v=()=>{n(!1),o(!1)};return a?e!=="intent"?[s,h,{}]:[s,h,{onFocus:te(c,g),onBlur:te(u,v),onMouseEnter:te(d,g),onMouseLeave:te(m,v),onTouchStart:te(f,g)}]:[!1,h,{}]}function te(e,t){return a=>{e&&e(a),a.defaultPrevented||t(a)}}function Vr({page:e,...t}){let a=Ka(),{nonce:r}=at(),{router:n}=Br(),s=l.useMemo(()=>Tt(n.routes,e,n.basename),[n.routes,e,n.basename]);return s?(t.nonce==null&&r&&(t={...t,nonce:r}),a?l.createElement(Gr,{page:e,matches:s,...t}):l.createElement(Jr,{page:e,matches:s,...t})):null}function Ur(e){let{manifest:t,routeModules:a}=at(),[r,n]=l.useState([]);return l.useEffect(()=>{let s=!1;return Ar(e,t,a).then(o=>{s||n(o)}),()=>{s=!0}},[e,t,a]),r}function Gr({page:e,matches:t,...a}){let r=H(),n=l.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let s=Vt(e,"rsc"),o=!1,c=[];for(let u of t)typeof u.route.shouldRevalidate=="function"?o=!0:c.push(u.route.id);return o&&c.length>0&&s.searchParams.set("_routes",c.join(",")),[s.pathname+s.search]},[e,r,t]);return l.createElement(l.Fragment,null,n.map(s=>l.createElement("link",{key:s,rel:"prefetch",as:"fetch",href:s,...a})))}function Jr({page:e,matches:t,...a}){let r=H(),{manifest:n,routeModules:s}=at(),{loaderData:o,matches:c}=Fr(),u=l.useMemo(()=>ht(e,t,c,n,r,"data"),[e,t,c,n,r]),d=l.useMemo(()=>ht(e,t,c,n,r,"assets"),[e,t,c,n,r]),m=l.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let g=new Set,v=!1;if(t.forEach(y=>{let w=n.routes[y.route.id];!w||!w.hasLoader||(!u.some(p=>p.route.id===y.route.id)&&y.route.id in o&&s[y.route.id]?.shouldRevalidate||w.hasClientLoader?v=!0:g.add(y.route.id))}),g.size===0)return[];let b=Vt(e,"data");return v&&g.size>0&&b.searchParams.set("_routes",t.filter(y=>g.has(y.route.id)).map(y=>y.route.id).join(",")),[b.pathname+b.search]},[o,r,n,u,t,e,s]),f=l.useMemo(()=>Dr(d,n),[d,n]),h=Ur(d);return l.createElement(l.Fragment,null,m.map(g=>l.createElement("link",{key:g,rel:"prefetch",as:"fetch",href:g,...a})),f.map(g=>l.createElement("link",{key:g,rel:"modulepreload",href:g,...a})),h.map(({key:g,link:v})=>l.createElement("link",{key:g,nonce:a.nonce,...v,crossOrigin:v.crossOrigin??a.crossOrigin})))}function Wr(...e){return t=>{e.forEach(a=>{typeof a=="function"?a(t):a!=null&&(a.current=t)})}}var qr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qr&&(window.__reactRouterVersion="8.1.0")}catch{}function Kr({basename:e,children:t,useTransitions:a,window:r}){let n=l.useRef(null);n.current==null&&(n.current=ba({window:r,v5Compat:!0}));let s=n.current,[o,c]=l.useState({action:s.action,location:s.location}),u=l.useCallback(d=>{a===!1?c(d):l.startTransition(()=>c(d))},[a]);return l.useLayoutEffect(()=>s.listen(u),[s,u]),l.createElement(Ht,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:s,useTransitions:a})}function Yr({basename:e,children:t,history:a,useTransitions:r}){let[n,s]=l.useState({action:a.action,location:a.location}),o=l.useCallback(c=>{r===!1?s(c):l.startTransition(()=>s(c))},[r]);return l.useLayoutEffect(()=>a.listen(o),[a,o]),l.createElement(Ht,{basename:e,children:t,location:n.location,navigationType:n.action,navigator:a,useTransitions:r})}Yr.displayName="unstable_HistoryRouter";var Ut=l.forwardRef(function({onClick:t,discover:a="render",prefetch:r="none",relative:n,reloadDocument:s,replace:o,mask:c,state:u,target:d,to:m,preventScrollReset:f,viewTransition:h,defaultShouldRevalidate:g,...v},b){let{basename:y,navigator:w,useTransitions:p}=l.useContext(D),x=typeof m=="string"&&qe.test(m),_=Mt(m,y);m=_.to;let T=tr(m,{relative:n}),N=H(),E=null;if(c){let z=Ke(c,[],N.mask?N.mask.pathname:"/",!0);y!=="/"&&(z.pathname=z.pathname==="/"?y:F([y,z.pathname])),E=w.createHref(z)}let[S,R,A]=Hr(r,v),O=tn(m,{replace:o,mask:c,state:u,target:d,preventScrollReset:f,relative:n,viewTransition:h,defaultShouldRevalidate:g,useTransitions:p});function Q(z){t&&t(z),z.defaultPrevented||O(z)}let V=!(_.isExternal||s),me=l.createElement("a",{...v,...A,href:(V?E:void 0)||_.absoluteURL||T,onClick:V?Q:t,ref:Wr(b,R),target:d,"data-discover":!x&&a==="render"?"true":void 0});return S&&!x?l.createElement(l.Fragment,null,me,l.createElement(Vr,{page:T})):me});Ut.displayName="Link";var Xr=l.forwardRef(function({"aria-current":t="page",caseSensitive:a=!1,className:r="",end:n=!1,style:s,to:o,viewTransition:c,children:u,...d},m){let f=le(o,{relative:d.relative}),h=H(),g=l.useContext(se),{navigator:v,basename:b}=l.useContext(D),y=g!=null&&cn(f)&&c===!0,w=v.encodeLocation?v.encodeLocation(f).pathname:f.pathname,p=h.pathname,x=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;a||(p=p.toLowerCase(),x=x?x.toLowerCase():null,w=w.toLowerCase()),x&&b&&(x=G(x,b)||x);const _=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let T=p===w||!n&&p.startsWith(w)&&p.charAt(_)==="/",N=x!=null&&(x===w||!n&&x.startsWith(w)&&x.charAt(w.length)==="/"),E={isActive:T,isPending:N,isTransitioning:y},S=T?t:void 0,R;typeof r=="function"?R=r(E):R=[r,T?"active":null,N?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let A=typeof s=="function"?s(E):s;return l.createElement(Ut,{...d,"aria-current":S,className:R,ref:m,style:A,to:o,viewTransition:c},typeof u=="function"?u(E):u)});Xr.displayName="NavLink";var Qr=l.forwardRef(({discover:e="render",fetcherKey:t,navigate:a,reloadDocument:r,replace:n,state:s,method:o="get",action:c,onSubmit:u,relative:d,preventScrollReset:m,viewTransition:f,defaultShouldRevalidate:h,...g},v)=>{let{useTransitions:b}=l.useContext(D),y=nn(),w=sn(c,{relative:d}),p=o.toLowerCase()==="get"?"get":"post",x=typeof c=="string"&&qe.test(c),_=T=>{if(u&&u(T),T.defaultPrevented)return;T.preventDefault();let N=T.nativeEvent.submitter,E=N?.getAttribute("formmethod")||o,S=()=>y(N||T.currentTarget,{fetcherKey:t,method:E,navigate:a,replace:n,state:s,relative:d,preventScrollReset:m,viewTransition:f,defaultShouldRevalidate:h});b&&a!==!1?l.startTransition(()=>S()):S()};return l.createElement("form",{ref:v,method:p,action:w,onSubmit:r?u:_,...g,"data-discover":!x&&e==="render"?"true":void 0})});Qr.displayName="Form";function Zr({getKey:e,storageKey:t,...a}){let r=l.useContext(_e),{basename:n}=l.useContext(D),s=H(),o=Ft();on({getKey:e,storageKey:t});let c=l.useMemo(()=>{if(!r||!e)return null;let d=Fe(s,o,n,e);return d!==s.key?d:null},[]);if(!r||r.isSpaMode)return null;let u=((d,m)=>{if(!window.history.state||!window.history.state.key){let f=Math.random().toString(32).slice(2);window.history.replaceState({key:f},"")}try{let f=JSON.parse(sessionStorage.getItem(d)||"{}")[m||window.history.state.key];typeof f=="number"&&window.scrollTo(0,f)}catch(f){console.error(f),sessionStorage.removeItem(d)}}).toString();return a.nonce==null&&r?.nonce&&(a.nonce=r.nonce),l.createElement("script",{...a,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${u})(${mt(JSON.stringify(t||Be))}, ${mt(JSON.stringify(c))})`}})}Zr.displayName="ScrollRestoration";function Gt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rt(e){let t=l.useContext(ee);return C(t,Gt(e)),t}function en(e){let t=l.useContext(se);return C(t,Gt(e)),t}function tn(e,{target:t,replace:a,mask:r,state:n,preventScrollReset:s,relative:o,viewTransition:c,defaultShouldRevalidate:u,useTransitions:d}={}){let m=ar(),f=H(),h=le(e,{relative:o});return l.useCallback(g=>{if(Er(g,t)){g.preventDefault();let v=a!==void 0?a:re(f)===re(h),b=()=>m(e,{replace:v,mask:r,state:n,preventScrollReset:s,relative:o,viewTransition:c,defaultShouldRevalidate:u});d?l.startTransition(()=>b()):b()}},[f,m,h,a,r,n,t,e,s,o,c,u,d])}var an=0,rn=()=>`__${String(++an)}__`;function nn(){let{router:e}=rt("useSubmit"),{basename:t}=l.useContext(D),a=fr(),r=e.fetch,n=e.navigate;return l.useCallback(async(s,o={})=>{let{action:c,method:u,encType:d,formData:m,body:f}=jr(s,t);o.navigate===!1?await r(o.fetcherKey||rn(),a,o.action||c,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:m,body:f,formMethod:o.method||u,formEncType:o.encType||d,flushSync:o.flushSync}):await n(o.action||c,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:m,body:f,formMethod:o.method||u,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:a,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,n,t,a])}function sn(e,{relative:t}={}){let{basename:a}=l.useContext(D),r=l.useContext(W);C(r,"useFormAction must be used inside a RouteContext");let[n]=r.matches.slice(-1),s={...le(e||".",{relative:t})},o=H();if(e==null){s.search=o.search;let c=new URLSearchParams(s.search),u=c.getAll("index");if(u.some(d=>d==="")){c.delete("index"),u.filter(m=>m).forEach(m=>c.append("index",m));let d=c.toString();s.search=d?`?${d}`:""}}return(!e||e===".")&&n.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(s.pathname=s.pathname==="/"?a:F([a,s.pathname])),re(s)}var Be="react-router-scroll-positions",pe={};function Fe(e,t,a,r){let n=null;return r&&(a!=="/"?n=r({...e,pathname:G(e.pathname,a)||e.pathname},t):n=r(e,t)),n==null&&(n=e.key),n}function on({getKey:e,storageKey:t}={}){let{router:a}=rt("useScrollRestoration"),{restoreScrollPosition:r,preventScrollReset:n}=en("useScrollRestoration"),{basename:s}=l.useContext(D),o=H(),c=Ft(),u=hr();l.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),ln(l.useCallback(()=>{if(u.state==="idle"){let d=Fe(o,c,s,e);pe[d]=window.scrollY}try{sessionStorage.setItem(t||Be,JSON.stringify(pe))}catch(d){U(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${d}).`)}window.history.scrollRestoration="auto"},[u.state,e,s,o,c,t])),typeof document<"u"&&(l.useLayoutEffect(()=>{try{let d=sessionStorage.getItem(t||Be);d&&(pe=JSON.parse(d))}catch{}},[t]),l.useLayoutEffect(()=>{let d=a?.enableScrollRestoration(pe,()=>window.scrollY,e?(m,f)=>Fe(m,f,s,e):void 0);return()=>d&&d()},[a,s,e]),l.useLayoutEffect(()=>{if(r!==!1){if(typeof r=="number"){window.scrollTo(0,r);return}try{if(o.hash){let d=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(d){d.scrollIntoView();return}}}catch{U(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}n!==!0&&window.scrollTo(0,0)}},[o,r,n]))}function ln(e,t){let{capture:a}=t||{};l.useEffect(()=>{let r=a!=null?{capture:a}:void 0;return window.addEventListener("pagehide",e,r),()=>{window.removeEventListener("pagehide",e,r)}},[e,a])}function cn(e,{relative:t}={}){let a=l.useContext($t);C(a!=null,"`useViewTransitionState` must be used within `react-router/dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=rt("useViewTransitionState"),n=le(e,{relative:t});if(!a.isTransitioning)return!1;let s=G(a.currentLocation.pathname,r)||a.currentLocation.pathname,o=G(a.nextLocation.pathname,r)||a.nextLocation.pathname;return xe(n.pathname,o)!=null||xe(n.pathname,s)!=null}var un=({onComplete:e})=>{const[t,a]=(0,l.useState)(!0);return(0,l.useEffect)(()=>{const r=setTimeout(()=>{a(!1),setTimeout(e,500)},2e3);return()=>clearTimeout(r)},[e]),(0,i.jsxs)(k.div,{initial:{opacity:1},animate:{opacity:t?1:0},exit:{opacity:0},className:"fixed inset-0 z-50 bg-black flex items-center justify-center",role:"status","aria-label":t?"Loading":"Loading complete",children:[(0,i.jsx)(k.img,{src:"/logo.webp",alt:"Portfolio loading animation",className:"w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64",initial:{y:0,scale:1,rotate:0},animate:{y:t?[0,-20,0,-20,0]:-250,scale:t?[1,1.2,1,1.2,1]:.5,rotate:t?0:720},transition:{duration:t?3:1,ease:"easeInOut",times:t?[0,.25,.5,.75,1]:[0,1]}}),t&&(0,i.jsx)(k.div,{className:"absolute inset-0",initial:{opacity:0},animate:{opacity:[0,.4,.6,.4,0]},transition:{repeat:2,duration:1,ease:"easeInOut"},style:{background:"linear-gradient(to right, #ff2e97, #00e5ff)"}})]})},$=()=>{const e=(0,l.useContext)(kt);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},He=(e,t)=>{e.preventDefault();const a=document.getElementById(t);if(a){const r=a.getBoundingClientRect().top+window.scrollY+-50;window.scrollTo({top:r,behavior:"smooth"})}},Jt={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},pt=l.createContext&&l.createContext(Jt),dn=["attr","size","title"];function mn(e,t){if(e==null)return{};var a,r,n=fn(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function fn(e,t){if(e==null)return{};var a={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;a[r]=e[r]}return a}function ve(){return ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},ve.apply(null,arguments)}function gt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function be(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?gt(Object(a),!0).forEach(function(r){hn(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):gt(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function hn(e,t,a){return(t=pn(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function pn(e){var t=gn(e,"string");return typeof t=="symbol"?t:t+""}function gn(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Wt(e){return e&&e.map((t,a)=>l.createElement(t.tag,be({key:a},t.attr),Wt(t.child)))}function L(e){return t=>l.createElement(yn,ve({attr:be({},e.attr)},t),Wt(e.child))}function yn(e){var t=a=>{var r=e.attr,n=e.size,s=e.title,o=mn(e,dn),c=n||a.size||"1em",u;return a.className&&(u=a.className),e.className&&(u=(u?u+" ":"")+e.className),l.createElement("svg",ve({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,r,o,{className:u,style:be(be({color:e.color||a.color},a.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&l.createElement("title",null,s),e.children)};return pt!==void 0?l.createElement(pt.Consumer,null,a=>t(a)):t(Jt)}function xn(e){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(e)}function vn(e){return L({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function bn(e){return L({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function wn(e){return L({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function _n(e){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}function kn(e){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function En(e){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function Ve(e){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(e)}function Tn(e){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function Sn(e){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function jn(e){return L({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(e)}function Nn(e){return L({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}var Ie=["home","about","experience","education","skills","certificates","projects","languages","contact"],yt=e=>e.charAt(0).toUpperCase()+e.slice(1),Cn=[{name:"GitHub",url:"https://github.com/trencho",ariaLabel:"GitHub Profile"},{name:"LinkedIn",url:"https://www.linkedin.com/in/aleksandar-trenchevski-593b45168/",ariaLabel:"LinkedIn Profile"}],ae={filename:"/CV - Aleksandar Trenchevski.pdf",label:"Download CV"},B={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6}}},Rn={hidden:{opacity:0,x:-50},visible:{opacity:1,x:0,transition:{duration:1}}},q={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},Le={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},I={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},Pn={hidden:{opacity:0,scale:.8,rotate:-10},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.6,ease:"easeOut"}}},xt={initial:{scale:1,rotate:0,opacity:1},animate:{scale:[1,1.2,1],rotate:[0,360],opacity:1,transition:{duration:.8,ease:"easeInOut"}},exit:{scale:.8,opacity:0,rotate:180,transition:{duration:.4,ease:"easeInOut"}}},In=e=>{const[t,a]=(0,l.useState)(e[0]??"");return(0,l.useEffect)(()=>{const r=e.map(s=>document.getElementById(s)).filter(s=>s!==null);if(r.length===0)return;const n=new IntersectionObserver(s=>{const o=s.filter(c=>c.isIntersecting).sort((c,u)=>c.boundingClientRect.top-u.boundingClientRect.top);o[0]&&a(o[0].target.id)},{rootMargin:"-40% 0px -55% 0px",threshold:0});return r.forEach(s=>n.observe(s)),()=>n.disconnect()},[e]),t},Ln=()=>{const{darkMode:e,toggleDarkMode:t}=$(),[a,r]=(0,l.useState)(!1),n=In(Ie),s=()=>r(!a),o=()=>r(!1);return(0,l.useEffect)(()=>{if(!a)return;const c=u=>{u.key==="Escape"&&r(!1)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[a]),(0,i.jsxs)("nav",{className:`p-5 fixed w-full top-0 z-10 bg-opacity-90 shadow-md transition-colors duration-300 ${e?"bg-[#0d0221] text-white":"bg-white text-gray-900"}`,"aria-label":"Main navigation",children:[(0,i.jsxs)("div",{className:"container mx-auto flex justify-between items-center",children:[(0,i.jsx)("div",{className:"sm:hidden",children:(0,i.jsxs)("button",{id:"toggleButton",onClick:s,"aria-label":a?"Close navigation menu":"Open navigation menu","aria-expanded":a,"aria-controls":"mobile-menu",className:"relative flex flex-col items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2",children:[(0,i.jsx)("div",{className:`transition-transform duration-300 ease-in-out w-6 h-0.5 bg-current ${a?"rotate-45 translate-y-1.5":""}`,"aria-hidden":"true"}),(0,i.jsx)("div",{className:`transition-opacity duration-300 ease-in-out w-6 h-0.5 bg-current my-1 ${a?"opacity-0":""}`,"aria-hidden":"true"}),(0,i.jsx)("div",{className:`transition-transform duration-300 ease-in-out w-6 h-0.5 bg-current ${a?"-rotate-45 -translate-y-1.5":""}`,"aria-hidden":"true"})]})}),(0,i.jsx)("div",{className:"hidden sm:flex flex-1 justify-center space-x-4 lg:space-x-6",children:Ie.map(c=>{const u=n===c;return(0,i.jsxs)("a",{href:`#${c}`,onClick:d=>{He(d,c)},className:`relative text-sm sm:text-lg font-semibold group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded px-2 py-1 transition-colors ${u?e?"text-cyan-400":"text-fuchsia-700":e?"hover:text-gray-400":"hover:text-gray-600"}`,"aria-label":`Navigate to ${c} section`,"aria-current":u?"true":void 0,children:[yt(c),(0,i.jsx)("span",{className:`absolute bottom-0 left-0 w-full h-0.5 transform transition-transform duration-500 ease-in-out origin-left group-hover:scale-x-100 ${u?"scale-x-100":"scale-x-0"} ${e?"bg-cyan-400":"bg-fuchsia-600"}`,"aria-hidden":"true"})]},c)})}),(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsxs)("a",{href:ae.filename,download:!0,className:`hidden sm:flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 ${e?"bg-fuchsia-700 text-white hover:bg-fuchsia-600 shadow-[0_0_16px_rgba(217,70,239,0.35)]":"bg-black text-white hover:bg-gray-800"}`,"aria-label":"Download CV",children:[(0,i.jsx)(Ve,{"aria-hidden":"true"}),(0,i.jsx)("span",{children:"CV"})]}),(0,i.jsx)("button",{onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",className:"flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded p-1",children:(0,i.jsx)(Ae,{mode:"wait",children:e?(0,i.jsx)(k.div,{initial:"initial",animate:"animate",exit:"exit",variants:xt,"aria-hidden":"true",children:(0,i.jsx)(_n,{size:24})},"sun"):(0,i.jsx)(k.div,{initial:"initial",animate:"animate",exit:"exit",variants:xt,"aria-hidden":"true",children:(0,i.jsx)(kn,{size:24})},"moon")})})]})]}),(0,i.jsx)(Ae,{children:a&&(0,i.jsx)(k.div,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:-100},transition:{duration:.3,ease:"easeInOut"},className:`absolute top-16 left-0 w-full bg-opacity-90 shadow-md ${e?"bg-[#0d0221] text-white":"bg-white text-gray-900"}`,id:"mobile-menu",children:(0,i.jsxs)("ul",{className:"flex flex-col space-y-4 py-4 px-6",children:[Ie.map(c=>{const u=n===c;return(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:`#${c}`,onClick:d=>{He(d,c),o()},className:`relative text-lg font-semibold group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded px-2 py-1 block ${u?e?"text-cyan-400":"text-fuchsia-700":e?"hover:text-gray-400":"hover:text-gray-600"}`,"aria-current":u?"true":void 0,children:[yt(c),(0,i.jsx)("span",{className:`absolute bottom-0 left-0 w-full h-0.5 transform transition-transform duration-500 ease-in-out origin-left group-hover:scale-x-100 ${u?"scale-x-100":"scale-x-0"} ${e?"bg-cyan-400":"bg-fuchsia-600"}`,"aria-hidden":"true"})]})},c)}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:ae.filename,download:!0,onClick:o,className:`flex items-center gap-2 text-lg font-semibold px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded ${e?"hover:text-gray-400":"hover:text-gray-600"}`,children:[(0,i.jsx)(Ve,{"aria-hidden":"true"}),(0,i.jsx)("span",{children:ae.label})]})})]})})})]})},Mn=()=>{const e="Software Engineer",t=ha(),[a,r]=(0,l.useState)(""),n=new Date("2018-07-15"),s=new Date().getFullYear()-n.getFullYear(),{darkMode:o}=$(),c=[`${s}+ years experience`,"Backend & Data Engineering","Java · Python · Spring · Spark","Skopje, North Macedonia"];return(0,l.useEffect)(()=>{if(t)return;let u=0,d;const m=()=>{u<=17&&(r(e.slice(0,u)),u++,d=setTimeout(m,100))};return m(),()=>clearTimeout(d)},[t]),(0,i.jsxs)(k.section,{className:"min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 space-y-6 pt-16 lg:p-12 animate-smoothFadeIn",initial:"hidden",animate:"visible",variants:q,children:[(0,i.jsx)(k.div,{className:"relative w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full border-4 border-white shadow-lg mt-4 sm:mt-8",variants:B,children:(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{srcSet:"/profile.webp",type:"image/webp"}),(0,i.jsx)("img",{src:"/profile.jpg",alt:"Aleksandar profile picture",className:"absolute top-0 left-0 w-full h-full object-cover rounded-full select-none",width:"648",height:"648",loading:"eager",fetchPriority:"high"})]})}),(0,i.jsx)(k.div,{className:`w-full max-w-lg sm:max-w-3xl p-4 sm:p-8 rounded-lg shadow-lg flex justify-center items-center ${o?"bg-[#1a0b2e]/80 text-white border border-fuchsia-500/20 shadow-[0_0_30px_rgba(217,70,239,0.15)]":"bg-white bg-opacity-70 text-gray-700"}`,variants:Rn,children:(0,i.jsxs)("div",{className:"text-center space-y-4 sm:space-y-6 max-w-xl leading-relaxed",children:[(0,i.jsxs)("h1",{className:`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 ${o?"text-white":"text-gray-900"}`,children:["Hello, my name is Aleksandar and I'm a"," ",(0,i.jsx)("span",{className:`${o?"text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.55)]":"text-fuchsia-600"}`,children:typeof window>"u"||t?e:a})," "]}),(0,i.jsx)("p",{className:"text-base sm:text-lg lg:text-xl leading-relaxed",children:"I build RESTful APIs and large-scale data pipelines across insurance, banking, telecom and healthcare. Currently a Data Engineer at Encora, designing ETL workflows on Azure Databricks and Apache Spark."}),(0,i.jsx)(k.ul,{className:"flex flex-wrap justify-center gap-2",variants:B,"aria-label":"Highlights",children:c.map(u=>(0,i.jsx)("li",{className:`rounded-full px-3 py-1 text-xs sm:text-sm font-medium select-none ${o?"bg-fuchsia-500/10 text-cyan-300 border border-cyan-400/20":"bg-fuchsia-100 text-fuchsia-800"}`,children:u},u))}),(0,i.jsxs)(k.div,{className:"flex flex-col sm:flex-row items-center justify-center gap-4 mt-4",variants:B,children:[(0,i.jsxs)("a",{href:"#contact",onClick:u=>{He(u,"contact")},className:`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 mb-2 sm:mb-0 select-none ${o?"bg-fuchsia-700 text-white hover:bg-fuchsia-600 shadow-[0_0_20px_rgba(217,70,239,0.35)]":"bg-black text-white hover:bg-gray-800"}`,children:[(0,i.jsx)("span",{children:"Contact me here"}),(0,i.jsx)(Nn,{"aria-hidden":"true"})]}),(0,i.jsxs)("a",{href:ae.filename,className:`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 mb-2 sm:mb-0 select-none ${o?"bg-fuchsia-700 text-white hover:bg-fuchsia-600 shadow-[0_0_20px_rgba(217,70,239,0.35)]":"bg-black text-white hover:bg-gray-800"}`,download:!0,children:[(0,i.jsx)("span",{children:ae.label}),(0,i.jsx)(Ve,{"aria-hidden":"true"})]}),(0,i.jsx)("div",{className:"flex space-x-4 mt-4 sm:mt-0",children:Cn.map(u=>{const d=u.name==="GitHub"?bn:vn;return(0,i.jsxs)("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:`group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full text-white transition
                    ${o?"bg-purple-800 hover:bg-purple-700":"bg-black hover:bg-gray-800"}`,"aria-label":u.ariaLabel,children:[(0,i.jsx)(d,{className:"text-xl","aria-hidden":"true"}),(0,i.jsx)("span",{className:`absolute bottom-full mb-2 hidden w-auto px-2 py-1 text-xs text-white rounded opacity-0 group-hover:block group-hover:opacity-100 transition-opacity
                      ${o?"bg-purple-800":"bg-black"}`,children:u.name})]},u.name)})})]})]})})]})},An=()=>{const{darkMode:e}=$();return(0,i.jsx)(k.section,{className:`flex justify-center items-center p-4 sm:p-8 lg:p-12 animate-smoothFadeIn ${e?"text-white":"text-gray-700"}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:q,children:(0,i.jsxs)(k.div,{className:`w-full max-w-lg sm:max-w-3xl p-4 sm:p-8 rounded-lg shadow-lg ${e?"bg-[#1a0b2e]/70 border border-fuchsia-500/15":"bg-white bg-opacity-70"}`,variants:q,children:[(0,i.jsx)(k.h2,{className:"text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6",variants:I,children:"About Me"}),(0,i.jsxs)(k.div,{className:"text-center hyphens-auto max-w-lg sm:max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-8",variants:q,children:[(0,i.jsxs)(k.p,{className:"text-base sm:text-lg lg:text-xl leading-relaxed mb-4",variants:I,children:["I'm a software engineer focused on ",(0,i.jsx)("b",{children:"backend"})," and"," ",(0,i.jsx)("b",{children:"data engineering"}),". I've designed and shipped"," ",(0,i.jsx)("b",{children:"RESTful APIs"})," and, more recently, large-scale"," ",(0,i.jsx)("b",{children:"ETL pipelines"})," — building data workflows on"," ",(0,i.jsx)("b",{children:"Azure Databricks"})," and ",(0,i.jsx)("b",{children:"Apache Spark"})," for the insurance sector, after years of ",(0,i.jsx)("b",{children:"Java/Spring"})," development across banking (3DS secure payments), telecommunications and healthcare."]}),(0,i.jsxs)(k.p,{className:"text-base sm:text-lg lg:text-xl leading-relaxed mb-4",variants:I,children:["My work spans the full delivery cycle: modelling data and APIs, containerising with ",(0,i.jsx)("b",{children:"Docker"})," and ",(0,i.jsx)("b",{children:"Kubernetes"}),", and shipping through ",(0,i.jsx)("b",{children:"CI/CD"}),". I've collaborated directly with international clients across ",(0,i.jsx)("b",{children:"Europe and the US"}),", translating business requirements into maintainable, production-ready systems."]}),(0,i.jsxs)(k.p,{className:"text-base sm:text-lg lg:text-xl leading-relaxed mb-4",variants:I,children:["I hold a"," ",(0,i.jsx)("b",{children:"Master's in Electrical Engineering and Information Technologies"}),", where my thesis on monitoring atmospheric impacts and predicting air pollution grew into open-source machine-learning projects. I value ",(0,i.jsx)("b",{children:"clean, well-tested code"}),", pragmatic design and continuous learning — and I'm comfortable explaining technical trade-offs to both engineers and non-technical stakeholders."]})]})]})})},Dn=[{company:"Encora Inc.",period:"Mar 2023 – Present",location:"Skopje, North Macedonia",roles:[{title:"Data Engineer",projects:[{name:"Hiscox — Insurance data platform",description:"Building ETL pipelines on Azure Databricks and Apache Spark to ingest, transform and validate insurance data from multiple sources, with automated workflows feeding Azure Data Lake for scalable storage and analytics.",technologies:["Python","SQL","PySpark","Apache Spark","Databricks","Delta Lake","Azure Data Factory"],buildTools:["Databricks Asset Bundles"],versionControl:["Git","Azure DevOps"]}]},{title:"Java Engineer",projects:[{name:'Brandwatch — "Publish" module',description:`Delivered Java/Spring services for Brandwatch's social-media "Publish" module for planning, creating and distributing content.`,technologies:["Java","Spring Boot","PostgreSQL","Docker","Kubernetes"],buildTools:["Gradle","Maven"],versionControl:["Git","GitHub"]},{name:"Cox Networks — Telecom middleware",description:"Built middleware for Cox Networks, a mobile network operator, that receives, processes and serves data from the carrier's systems.",technologies:["Java","Spring Boot","JDBC","JAX-RS","Oracle DB"],buildTools:["Gradle"],versionControl:["Git","Bitbucket"]}]}]},{company:"Netcetera",period:"Dec 2021 – Mar 2023",location:"Skopje, North Macedonia",roles:[{title:"Java Engineer",projects:[{name:"3DS Secure digital payments",description:"Developed banking software for 3DS Secure digital payments, handling authentication flows for online card transactions.",technologies:["Java","Spring Boot","Spring Batch","Hibernate","Microsoft SQL Server"],buildTools:["Maven"],versionControl:["Git","Bitbucket"]}]}]},{company:"Medical IT Revolution",period:"Jul 2018 – Dec 2021",location:"Skopje, North Macedonia",roles:[{title:"Java Engineer",projects:[{name:"Medical Portal",description:"Built a medical application for hospitals in the Netherlands handling patient admissions and examination scheduling based on diagnosis, supporting client requests and delivering optimal software solutions.",technologies:["Java EE","JDBC","IBM Db2","JavaServer Pages"],buildTools:["Maven"],versionControl:["SVN"]}]}]}],$n=()=>{const{darkMode:e}=$(),t=e?"text-cyan-400":"text-fuchsia-600";return(0,i.jsx)(k.section,{className:`flex justify-center animate-smoothFadeIn ${e?"text-white":"text-gray-700"}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:q,children:(0,i.jsxs)("div",{className:"w-full max-w-lg sm:max-w-3xl",children:[(0,i.jsx)(k.h2,{className:`text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 ${e?"text-white":"text-gray-900"}`,variants:I,children:"Experience"}),(0,i.jsx)("ol",{className:"relative border-s-2 border-gray-400/40 ms-3 sm:ms-4 space-y-8 sm:space-y-10",children:Dn.map(a=>{const r=a.roles.length>1;return(0,i.jsxs)(k.li,{className:"ms-6 sm:ms-8",variants:I,children:[(0,i.jsx)("span",{className:`absolute -start-2.25 flex h-4 w-4 rounded-full border-2 ${e?"bg-cyan-400 border-[#0d0221] shadow-[0_0_10px_rgba(34,211,238,0.7)]":"bg-fuchsia-500 border-white"}`,"aria-hidden":"true"}),(0,i.jsxs)("div",{className:`rounded-lg shadow-lg p-5 sm:p-6 ${e?"bg-[#1a0b2e]/70 border border-fuchsia-500/15":"bg-white bg-opacity-70"}`,children:[(0,i.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1",children:[(0,i.jsx)("h3",{className:"text-lg sm:text-xl font-semibold",children:r?a.company:(0,i.jsxs)(i.Fragment,{children:[a.roles[0]?.title,(0,i.jsxs)("span",{className:t,children:[" · ",a.company]})]})}),(0,i.jsx)("span",{className:"text-sm sm:text-base whitespace-nowrap opacity-80",children:a.period})]}),(0,i.jsx)("p",{className:"text-sm sm:text-base opacity-80 mb-4",children:a.location}),(0,i.jsx)("div",{className:"space-y-6",children:a.roles.map(n=>(0,i.jsxs)("div",{children:[r&&(0,i.jsx)("h4",{className:`text-base sm:text-lg font-semibold mb-3 ${t}`,children:n.title}),(0,i.jsx)("ul",{className:r?"space-y-4 border-s-2 border-gray-400/25 ps-4 sm:ps-5":"space-y-4",children:n.projects.map(s=>(0,i.jsxs)("li",{children:[(0,i.jsx)("h5",{className:"text-base font-semibold",children:s.name}),(0,i.jsx)("p",{className:"text-base leading-relaxed mt-1 mb-3",children:s.description}),(0,i.jsx)("div",{className:"flex flex-wrap gap-2",children:s.technologies.map(o=>(0,i.jsx)("span",{className:"bg-[#2a0a4a] text-fuchsia-100 rounded-full px-3 py-1 text-xs sm:text-sm font-medium select-none",children:o},o))}),(0,i.jsx)("div",{className:"mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 text-xs sm:text-sm",children:[{label:"Build",items:s.buildTools},{label:"Version control",items:s.versionControl}].map(({label:o,items:c})=>c.length>0?(0,i.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,i.jsx)("span",{className:"opacity-90 font-medium",children:o}),c.map(u=>(0,i.jsx)("span",{className:"rounded-full border border-gray-400/50 px-2.5 py-0.5 select-none",children:u},u))]},o):null)})]},s.name))})]},n.title))})]})]},a.company)})})]})})},On=[{degree:"Master of Electrical Engineering and Information Technologies",institution:"Ss. Cyril and Methodius University of Skopje",period:"2018 – 2021",thesis:"Design, implementation and assessment of a system for monitoring atmospheric impacts and predicting air pollution"},{degree:"Bachelor of Electrical Engineering and Information Technologies",institution:"Ss. Cyril and Methodius University of Skopje",period:"2014 – 2018",thesis:"Web system for collecting and processing data for student services"}],vt=[{title:"Prediction of Air Pollution Concentration Using Weather Data and Regression Models",url:"https://dx.doi.org/10.25673/32749"}],zn=()=>{const{darkMode:e}=$(),t=e?"text-cyan-400":"text-fuchsia-600",a=`rounded-lg shadow-lg p-5 sm:p-6 ${e?"bg-[#1a0b2e]/70 border border-fuchsia-500/15":"bg-white bg-opacity-70"}`;return(0,i.jsx)(k.section,{className:`flex justify-center animate-smoothFadeIn ${e?"text-white":"text-gray-700"}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:q,children:(0,i.jsxs)("div",{className:"w-full max-w-lg sm:max-w-3xl",children:[(0,i.jsx)(k.h2,{className:`text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 ${e?"text-white":"text-gray-900"}`,variants:I,children:"Education"}),(0,i.jsx)("div",{className:"space-y-6",children:On.map(r=>(0,i.jsxs)(k.div,{className:a,variants:I,children:[(0,i.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1",children:[(0,i.jsx)("h3",{className:"text-lg sm:text-xl font-semibold",children:r.degree}),(0,i.jsx)("span",{className:"text-sm sm:text-base whitespace-nowrap opacity-80",children:r.period})]}),(0,i.jsx)("p",{className:`text-sm sm:text-base font-medium ${t}`,children:r.institution}),(0,i.jsxs)("p",{className:"text-base leading-relaxed mt-2",children:[(0,i.jsx)("span",{className:"opacity-80",children:"Thesis: "}),(0,i.jsx)("span",{className:"italic",children:r.thesis})]})]},r.degree))}),vt.length>0&&(0,i.jsxs)(k.div,{className:"mt-10",variants:I,children:[(0,i.jsx)("h3",{className:`text-xl sm:text-2xl font-bold text-center mb-6 ${e?"text-white":"text-gray-900"}`,children:"Publications"}),(0,i.jsx)("ul",{className:"space-y-4",children:vt.map(r=>(0,i.jsx)("li",{className:a,children:(0,i.jsx)("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",className:`text-base leading-relaxed font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded ${t}`,children:r.title})},r.title))})]})]})})},Bn=[{title:"Java",imageSrc:"image-skills/backend/java.png",categories:["Backend"]},{title:"Python",imageSrc:"image-skills/backend/python.png",categories:["Backend"]},{title:"Spring",imageSrc:"image-skills/backend/spring.png",categories:["Backend"]},{title:"FastAPI",imageSrc:"image-skills/backend/fastapi.png",categories:["Backend"]},{title:"Flask",imageSrc:"image-skills/backend/flask.png",categories:["Backend"]},{title:"JavaScript",imageSrc:"image-skills/frontend/javascript.png",categories:["Frontend"]},{title:"TypeScript",imageSrc:"image-skills/frontend/typescript.png",categories:["Frontend"]},{title:"React",imageSrc:"image-skills/frontend/react.png",categories:["Frontend"]},{title:"Vue.js",imageSrc:"image-skills/frontend/vuejs.png",categories:["Frontend"]},{title:"Microsoft SQL Server",imageSrc:"image-skills/databases/microsoft-sql-server.png",categories:["Databases"]},{title:"MongoDB",imageSrc:"image-skills/databases/mongodb.png",categories:["Databases"]},{title:"MySQL",imageSrc:"image-skills/databases/mysql.png",categories:["Databases"]},{title:"Oracle DB",imageSrc:"image-skills/databases/oracle-db.png",categories:["Databases"]},{title:"PostgreSQL",imageSrc:"image-skills/databases/postgresql.png",categories:["Databases"]},{title:"Docker",imageSrc:"image-skills/devops/docker.png",categories:["DevOps"]},{title:"Kubernetes",imageSrc:"image-skills/devops/kubernetes.png",categories:["DevOps"]},{title:"Nginx",imageSrc:"image-skills/devops/nginx.png",categories:["DevOps"]},{title:"Git",imageSrc:"image-skills/tools/git.png",categories:["Tools"]},{title:"GitHub",imageSrc:"image-skills/tools/github.png",categories:["Tools"]},{title:"GitHub Actions",imageSrc:"image-skills/tools/github-actions.png",categories:["Tools"]},{title:"Gunicorn",imageSrc:"image-skills/tools/gunicorn.png",categories:["Tools"]},{title:"Lombok",imageSrc:"image-skills/tools/lombok.png",categories:["Tools"]},{title:"Maven",imageSrc:"image-skills/tools/maven.png",categories:["Tools"]},{title:"Postman",imageSrc:"image-skills/tools/postman.png",categories:["Tools"]},{title:"Pytest",imageSrc:"image-skills/tools/pytest.png",categories:["Tools"]},{title:"Swagger",imageSrc:"image-skills/tools/swagger.png",categories:["Tools"]},{title:"Vite",imageSrc:"image-skills/tools/vite.png",categories:["Tools"]},{title:"Matplotlib",imageSrc:"image-skills/data-science/matplotlib.png",categories:["Data Science"]},{title:"NumPy",imageSrc:"image-skills/data-science/numpy.png",categories:["Data Science"]},{title:"Pandas",imageSrc:"image-skills/data-science/pandas.png",categories:["Data Engineering","Data Science"]},{title:"Scikit-learn",imageSrc:"image-skills/data-science/scikit-learn.png",categories:["Data Science"]},{title:"Scipy",imageSrc:"image-skills/data-science/scipy.png",categories:["Data Science"]},{title:"Apache Spark",imageSrc:"image-skills/data-engineering/apache-spark.png",categories:["Data Engineering"]},{title:"Azure Blob Storage",imageSrc:"image-skills/data-engineering/azure-blob-storage.png",categories:["Data Engineering"]},{title:"Azure Data Factory",imageSrc:"image-skills/data-engineering/azure-data-factory.png",categories:["Data Engineering"]},{title:"Azure Data Lake",imageSrc:"image-skills/data-engineering/azure-data-lake.png",categories:["Data Engineering"]},{title:"Databricks",imageSrc:"image-skills/data-engineering/databricks.png",categories:["Data Engineering"]},{title:"Delta Lake",imageSrc:"image-skills/data-engineering/delta-lake.png",categories:["Data Engineering"]}],Fn=["Frontend","Backend","Databases","Tools","DevOps","Data Science","Data Engineering"],bt=Bn,Hn=()=>{const{darkMode:e}=$(),[t,a]=(0,l.useState)("All"),r=(0,l.useMemo)(()=>t==="All"?bt:bt.filter(s=>s.categories.includes(t)),[t]),n=s=>{a(s==="All"?"All":s)};return(0,i.jsx)(k.section,{className:`flex max-w-6xl mx-auto justify-center items-center p-4 sm:p-6 lg:p-12 skills-section ${e?"dark-mode":"light-mode"}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:Le,children:(0,i.jsxs)(k.div,{className:`w-full max-w-lg sm:max-w-6xl p-4 sm:p-8 rounded-lg shadow-lg ${e?"bg-[#1a0b2e]/70":"bg-white bg-opacity-70"}`,variants:Le,children:[(0,i.jsx)(k.h2,{className:"text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6",variants:I,children:"Skills"}),(0,i.jsxs)(k.div,{className:"glass-card p-8 sm:p-12 lg:p-16",variants:I,children:[(0,i.jsxs)("div",{className:"flex flex-wrap justify-center gap-4 mb-12",role:"tablist","aria-label":"Filter skills by category",children:[(0,i.jsx)("button",{onClick:()=>n("All"),role:"tab","aria-selected":t==="All","aria-controls":"skills-All",className:`px-6 py-3 rounded-xl font-medium transition-all duration-300 border cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${t==="All"?e?"bg-cyan-500/30 text-white border-cyan-400/50 focus:ring-cyan-400 shadow-lg shadow-cyan-500/20":"bg-fuchsia-500/30 text-black border-fuchsia-400/50 focus:ring-fuchsia-400 shadow-lg":e?"bg-cyan-500/15 text-white hover:bg-cyan-500/25 border-cyan-400/30 hover:scale-105":"bg-fuchsia-500/20 text-black hover:bg-fuchsia-500/30 border-fuchsia-400/30 hover:scale-105"}`,children:"All"}),Fn.map(s=>(0,i.jsx)("button",{onClick:()=>n(s),role:"tab","aria-selected":t===s,"aria-controls":`skills-${s}`,className:`px-6 py-3 rounded-xl font-medium transition-all duration-300 border cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${t===s?e?"bg-cyan-500/30 text-white border-cyan-400/50 focus:ring-cyan-400 shadow-lg shadow-cyan-500/20":"bg-fuchsia-500/30 text-black border-fuchsia-400/50 focus:ring-fuchsia-400 shadow-lg":e?"bg-cyan-500/15 text-white hover:bg-cyan-500/25 border-cyan-400/30 hover:scale-105":"bg-fuchsia-500/20 text-black hover:bg-fuchsia-500/30 border-fuchsia-400/30 hover:scale-105"}`,children:s},s))]}),(0,i.jsx)(k.div,{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6",role:"tabpanel",id:`skills-${t}`,"aria-label":`${t} skills`,variants:Le,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:r.map(s=>(0,i.jsxs)(k.div,{className:`flex flex-col items-center space-y-3 p-4 rounded-2xl transition-all duration-300 hover:scale-105 group ${e?"bg-[#241041] hover:bg-[#33165c]":"bg-gray-100 hover:bg-gray-200"}`,variants:I,whileHover:{y:-5},role:"img","aria-label":`${s.title} skill`,children:[(0,i.jsx)("div",{className:"w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden bg-linear-to-br from-fuchsia-500/20 to-cyan-500/20 p-2 border border-fuchsia-400/30",children:(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{srcSet:s.imageSrc.replace(/\.png$/,".webp"),type:"image/webp"}),(0,i.jsx)("img",{src:s.imageSrc,alt:`${s.title} logo`,className:"w-full h-full object-contain",width:"80",height:"80",loading:"lazy",decoding:"async"})]})}),(0,i.jsx)("span",{className:`text-sm font-medium text-center transition-colors duration-300 ${e?"text-white/80 group-hover:text-white":"text-black/80 group-hover:text-black"}`,children:s.title})]},s.title))},t),r.length===0&&(0,i.jsx)(k.div,{className:"text-center py-16",variants:I,children:(0,i.jsx)("p",{className:`text-lg ${e?"text-white/80":"text-gray-700"}`,children:"No skills found for the selected category."})})]})]})})},Vn=[{title:"Databricks Certified Data Engineer Associate",imageSrc:"image-skills/certificates/databricks-data-engineer-associate.png",url:"https://credentials.databricks.com/ecb77163-c63a-45f7-a02f-7747fe0ad658#acc.vuI371hQ"},{title:"Databricks Certified Data Engineer Professional",imageSrc:"image-skills/certificates/databricks-data-engineer-professional.png",url:"https://credentials.databricks.com/40252957-e8c8-4c3d-8170-c7655543c307#acc.Q6Kku94J"}],Un=()=>{const{darkMode:e}=$();return(0,i.jsxs)("section",{className:"p-4 sm:p-6 lg:p-8",children:[(0,i.jsx)("h2",{className:`p-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center ${e?"text-white":"text-gray-900"}`,children:"Certificates"}),(0,i.jsx)("div",{className:"max-w-6xl mx-auto flex justify-center gap-6 sm:gap-8 text-center",children:Vn.map((t,a)=>{const r=(0,i.jsxs)(k.div,{className:`w-48 sm:w-56 lg:w-72 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 ${e?"bg-[#1a0b2e]/70 border border-fuchsia-500/15 hover:bg-[#241041]":"bg-gray-100 hover:bg-gray-200"}`,variants:I,whileInView:{opacity:1,y:0},initial:{opacity:0,y:10},viewport:{once:!0},transition:{duration:.2,delay:a*.03},children:[(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{srcSet:t.imageSrc.replace(/\.png$/,".webp"),type:"image/webp"}),(0,i.jsx)("img",{src:t.imageSrc,alt:t.title,width:"128",height:"128",loading:"lazy",decoding:"async",className:"mx-auto w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain select-none"})]}),(0,i.jsx)("h3",{className:`mt-4 text-lg sm:text-xl font-medium text-center line-clamp-2 ${e?"text-white":"text-black"}`,children:t.title})]});return(0,i.jsx)(l.Fragment,{children:t.url?(0,i.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer","aria-label":t.title,children:r}):r},t.title)})})]})},Gn=[{title:"Air Quality REST API",description:"A Flask REST API that trains and serves machine-learning models to predict air quality from weather and sensor data. Containerised with Docker and deployed on Kubernetes behind Nginx and Gunicorn, with a Swagger-documented API.",links:[{label:"View Code",url:"https://github.com/trencho/air-quality-rest-api"}],technologies:["Python","Flask","Scikit-learn","Pandas","NumPy","MongoDB","Docker","Kubernetes","Nginx","Gunicorn","Swagger"],imageSrc:"image-projects/air-quality-rest-api.png"},{title:"Crypto Prophet",description:"A FastAPI service that trains machine-learning models to forecast cryptocurrency prices, exposing predictions through a documented REST API. Packaged with Docker for reproducible deployments.",links:[{label:"View Code",url:"https://github.com/trencho/crypto-prophet"}],technologies:["Python","FastAPI","Scikit-learn","Pandas","NumPy","Docker","Swagger"],imageSrc:"image-projects/crypto-prophet.png"},{title:"Task Manager",description:"A full-stack task-management app: a Spring Boot REST API with secured authentication and MongoDB persistence, paired with a Vue.js frontend for registering, logging in and managing tasks.",links:[{label:"Backend",url:"https://github.com/trencho/task-manager-spring"},{label:"Frontend",url:"https://github.com/trencho/task-manager-vue"}],technologies:["Java","Spring Boot","Spring Security","MongoDB","Vue.js","JavaScript","Docker"],imageSrc:"image-projects/task-manager.png"}];function Jn(e){return L({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"},child:[]}]})(e)}var Wn=()=>{const{darkMode:e}=$();return(0,i.jsxs)("section",{className:"py-8 sm:py-12",children:[(0,i.jsx)("h2",{className:`text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 ${e?"text-white":"text-gray-900"}`,children:"My Projects"}),(0,i.jsx)("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 md:px-8",children:Gn.map((t,a)=>(0,i.jsxs)(k.div,{className:`flex flex-col md:flex-row mb-10 sm:mb-12 shadow-lg rounded-lg p-6 ${e?"bg-[#1a0b2e]/70 border border-fuchsia-500/15":"bg-gray-100"} ${a%2!==0?"md:flex-row-reverse":""}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:Pn,transition:{delay:a*.2},children:[(0,i.jsx)(k.div,{className:"w-full md:w-1/2 p-4 flex justify-center items-center",whileHover:{scale:1.1,rotate:2},transition:{duration:.3},children:(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{srcSet:t.imageSrc.replace(/\.png$/,".webp"),type:"image/webp"}),(0,i.jsx)("img",{src:t.imageSrc,alt:t.title,width:"240",height:"240",loading:"lazy",decoding:"async",className:"w-48 h-48 sm:w-60 sm:h-60 object-contain rounded-lg shadow-2xl select-none"})]})}),(0,i.jsxs)("div",{className:"w-full md:w-1/2 p-4 flex flex-col justify-center",children:[(0,i.jsx)("h3",{className:"text-xl sm:text-2xl font-semibold mb-4",children:t.title}),(0,i.jsx)("p",{className:"mb-4",children:t.description}),(0,i.jsx)("div",{className:"flex flex-wrap gap-2 mb-4",children:t.technologies.map(r=>(0,i.jsx)("span",{className:"bg-[#2a0a4a] text-fuchsia-100 rounded-full px-3 py-1 text-sm font-medium select-none",children:r},r))}),(0,i.jsx)("div",{className:"flex flex-wrap gap-4",children:t.links.map(r=>(0,i.jsxs)("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",className:`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 select-none ${e?"bg-fuchsia-700 text-white hover:bg-fuchsia-600 shadow-[0_0_20px_rgba(217,70,239,0.35)]":"bg-black text-white hover:bg-gray-800"}`,"aria-label":`${t.title} – ${r.label}`,children:[(0,i.jsx)("span",{children:r.label}),(0,i.jsx)(Jn,{className:"text-xl","aria-hidden":"true"})]},r.url))})]})]},t.title))})]})},qn=[{name:"English",proficiency:"Full professional proficiency"},{name:"Serbian",proficiency:"Professional working proficiency"},{name:"German",proficiency:"Limited working proficiency"}],Kn=()=>{const{darkMode:e}=$(),t=e?"text-cyan-400":"text-fuchsia-600";return(0,i.jsx)(k.section,{className:`flex justify-center animate-smoothFadeIn ${e?"text-white":"text-gray-700"}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:q,children:(0,i.jsxs)("div",{className:"w-full max-w-lg sm:max-w-3xl",children:[(0,i.jsx)(k.h2,{className:`text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 ${e?"text-white":"text-gray-900"}`,variants:I,children:"Languages"}),(0,i.jsx)("div",{className:"grid gap-6 sm:grid-cols-3",children:qn.map(a=>(0,i.jsxs)(k.div,{className:`rounded-lg shadow-lg p-5 sm:p-6 text-center ${e?"bg-[#1a0b2e]/70 border border-fuchsia-500/15":"bg-white bg-opacity-70"}`,variants:I,children:[(0,i.jsx)("h3",{className:"text-lg sm:text-xl font-semibold",children:a.name}),(0,i.jsx)("p",{className:`text-sm sm:text-base mt-1 ${t}`,children:a.proficiency})]},a.name))})]})})};function qt(e){var t,a,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(a=qt(e[t]))&&(r&&(r+=" "),r+=a)}else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function K(){for(var e,t,a=0,r="",n=arguments.length;a<n;a++)(e=arguments[a])&&(t=qt(e))&&(r&&(r+=" "),r+=t);return r}var ce=e=>typeof e=="number"&&!isNaN(e),X=e=>typeof e=="string",J=e=>typeof e=="function",Yn=e=>X(e)||ce(e),Ue=e=>X(e)||J(e)?e:null,Xn=(e,t)=>e===!1||ce(e)&&e>0?e:t,Ge=e=>(0,l.isValidElement)(e)||X(e)||J(e)||ce(e);function Qn(e,t,a=300){let{scrollHeight:r,style:n}=e;requestAnimationFrame(()=>{n.minHeight="initial",n.height=r+"px",n.transition=`all ${a}ms`,requestAnimationFrame(()=>{n.height="0",n.padding="0",n.margin="0",setTimeout(t,a)})})}function ke({enter:e,exit:t,appendPosition:a=!1,collapse:r=!0,collapseDuration:n=300}){return function({children:s,position:o,preventExitTransition:c,done:u,nodeRef:d,isIn:m,playToast:f}){let h=a?`${e}--${o}`:e,g=a?`${t}--${o}`:t,v=(0,l.useRef)(0);return(0,l.useLayoutEffect)(()=>{let b=d.current,y=h.split(" "),w=p=>{p.target===d.current&&(f(),b.removeEventListener("animationend",w),b.removeEventListener("animationcancel",w),v.current===0&&p.type!=="animationcancel"&&b.classList.remove(...y))};b.classList.add(...y),b.addEventListener("animationend",w),b.addEventListener("animationcancel",w)},[]),(0,l.useEffect)(()=>{let b=d.current,y=()=>{b.removeEventListener("animationend",y),r?Qn(b,u,n):u()};m||(c?y():(v.current=1,b.className+=` ${g}`,b.addEventListener("animationend",y)))},[m]),l.createElement(l.Fragment,null,s)}}function wt(e,t){return{content:Kt(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function Kt(e,t,a=!1){return(0,l.isValidElement)(e)&&!X(e.type)?(0,l.cloneElement)(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:a}):J(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:a}):e}function Zn({closeToast:e,theme:t,ariaLabel:a="close"}){return l.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":a},l.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function es({delay:e,isRunning:t,closeToast:a,type:r="default",hide:n,className:s,controlledProgress:o,progress:c,rtl:u,isIn:d,theme:m}){let f=n||o&&c===0,h={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};o&&(h.transform=`scaleX(${c})`);let g=K("Toastify__progress-bar",o?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":u}),v=J(s)?s({rtl:u,type:r,defaultClassName:g}):K(g,s),b={[o&&c>=1?"onTransitionEnd":"onAnimationEnd"]:o&&c<1?null:()=>{d&&a()}};return l.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":f},l.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${m} Toastify__progress-bar--${r}`}),l.createElement("div",{role:"progressbar","aria-hidden":f?"true":"false","aria-label":"notification timer","aria-valuenow":o?Math.round(c*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:v,style:h,...b}))}var ts=1,Yt=()=>`${ts++}`;function as(e,t,a){let r=1,n=0,s=[],o=[],c=t,u=new Map,d=new Set,m=p=>(d.add(p),()=>d.delete(p)),f=()=>{o=Array.from(u.values()),d.forEach(p=>p())},h=({containerId:p,toastId:x,updateId:_})=>{let T=p?p!==e:e!==1,N=u.has(x)&&_==null;return T||N},g=(p,x)=>{u.forEach(_=>{var T;(x==null||x===_.props.toastId)&&((T=_.toggle)==null||T.call(_,p))})},v=p=>{var x,_;p.isActive&&((_=(x=p.props)==null?void 0:x.onClose)==null||_.call(x,p.removalReason),p.isActive=!1,a(wt(p,"removed")))},b=p=>{if(p==null)u.forEach(v);else{let x=u.get(p);x&&v(x)}f()},y=()=>{n-=s.length,s=[]},w=p=>{var x,_;let{toastId:T,updateId:N}=p.props,E=N==null;p.staleId&&u.delete(p.staleId),p.isActive=!0,u.set(T,p),f(),a(wt(p,E?"added":"updated")),E&&((_=(x=p.props).onOpen)==null||_.call(x))};return{id:e,props:c,observe:m,toggle:g,removeToast:b,toasts:u,clearQueue:y,buildToast:(p,x)=>{if(h(x))return;let{toastId:_,updateId:T,data:N,staleId:E,delay:S}=x,R=T==null;R&&n++;let A={...c,style:c.toastStyle,key:r++,...Object.fromEntries(Object.entries(x).filter(([Q,V])=>V!=null)),toastId:_,updateId:T,data:N,isIn:!1,className:Ue(x.className||c.toastClassName),progressClassName:Ue(x.progressClassName||c.progressClassName),autoClose:x.isLoading?!1:Xn(x.autoClose,c.autoClose),closeToast(Q){let V=u.get(_);V&&(V.removalReason=Q,b(_))},deleteToast(){if(u.get(_)!=null){if(u.delete(_),n--,n<0&&(n=0),s.length>0){w(s.shift());return}f()}}};A.closeButton=c.closeButton,x.closeButton===!1||Ge(x.closeButton)?A.closeButton=x.closeButton:x.closeButton===!0&&(A.closeButton=Ge(c.closeButton)?c.closeButton:!0);let O={content:p,props:A,staleId:E};c.limit&&c.limit>0&&n>c.limit&&R?s.push(O):ce(S)?setTimeout(()=>{w(O)},S):w(O)},setProps(p){c=p},setToggle:(p,x)=>{let _=u.get(p);_&&(_.toggle=x)},isToastActive:p=>{var x;return(x=u.get(p))==null?void 0:x.isActive},getSnapshot:()=>o}}var M=new Map,ne=[],Je=new Set,rs=e=>Je.forEach(t=>t(e)),Xt=()=>M.size>0;function ns(){ne.forEach(e=>Zt(e.content,e.options)),ne=[]}var ss=(e,{containerId:t})=>{var a;return(a=M.get(t||1))==null?void 0:a.toasts.get(e)};function Qt(e,t){var a;if(t)return!!((a=M.get(t))!=null&&a.isToastActive(e));let r=!1;return M.forEach(n=>{n.isToastActive(e)&&(r=!0)}),r}function is(e){if(!Xt()){ne=ne.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||Yn(e))M.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=M.get(e.containerId);t?t.removeToast(e.id):M.forEach(a=>{a.removeToast(e.id)})}}var os=(e={})=>{M.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function Zt(e,t){Ge(e)&&(Xt()||ne.push({content:e,options:t}),M.forEach(a=>{a.buildToast(e,t)}))}function ls(e){var t;(t=M.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function ea(e,t){M.forEach(a=>{(t==null||!(t!=null&&t.containerId)||t?.containerId===a.id)&&a.toggle(e,t?.id)})}function cs(e){let t=e.containerId||1;return{subscribe(a){let r=as(t,e,rs);M.set(t,r);let n=r.observe(a);return ns(),()=>{n(),M.delete(t)}},setProps(a){var r;(r=M.get(t))==null||r.setProps(a)},getSnapshot(){var a;return(a=M.get(t))==null?void 0:a.getSnapshot()}}}function us(e){return Je.add(e),()=>{Je.delete(e)}}function ds(e){return e&&(X(e.toastId)||ce(e.toastId))?e.toastId:Yt()}function ue(e,t){return Zt(e,t),t.toastId}function Ee(e,t){return{...t,type:t&&t.type||e,toastId:ds(t)}}function Te(e){return(t,a)=>ue(t,Ee(e,a))}function j(e,t){return ue(e,Ee("default",t))}j.loading=(e,t)=>ue(e,Ee("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function ms(e,{pending:t,error:a,success:r},n){let s;t&&(s=X(t)?j.loading(t,n):j.loading(t.render,{...n,...t}));let o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(d,m,f)=>{if(m==null){j.dismiss(s);return}let h={type:d,...o,...n,data:f},g=X(m)?{render:m}:m;return s?j.update(s,{...h,...g}):j(g.render,{...h,...g}),f},u=J(e)?e():e;return u.then(d=>c("success",r,d)).catch(d=>c("error",a,d)),u}j.promise=ms;j.success=Te("success");j.info=Te("info");j.error=Te("error");j.warning=Te("warning");j.warn=j.warning;j.dark=(e,t)=>ue(e,Ee("default",{theme:"dark",...t}));function fs(e){is(e)}j.dismiss=fs;j.clearWaitingQueue=os;j.isActive=Qt;j.update=(e,t={})=>{let a=ss(e,t);if(a){let{props:r,content:n}=a,s={delay:100,...r,...t,toastId:t.toastId||e,updateId:Yt()};s.toastId!==e&&(s.staleId=e);let o=s.render||n;delete s.render,ue(o,s)}};j.done=e=>{j.update(e,{progress:1})};j.onChange=us;j.play=e=>ea(!0,e);j.pause=e=>ea(!1,e);function hs(e){var t;let{subscribe:a,getSnapshot:r,setProps:n}=(0,l.useRef)(cs(e)).current;n(e);let s=(t=(0,l.useSyncExternalStore)(a,r,r))==null?void 0:t.slice();function o(c){if(!s)return[];let u=new Map;return e.newestOnTop&&s.reverse(),s.forEach(d=>{let{position:m}=d.props;u.has(m)||u.set(m,[]),u.get(m).push(d)}),Array.from(u,d=>c(d[0],d[1]))}return{getToastToRender:o,isToastActive:Qt,count:s?.length}}function ps(e){let[t,a]=(0,l.useState)(!1),[r,n]=(0,l.useState)(!1),s=(0,l.useRef)(null),o=(0,l.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:c,pauseOnHover:u,closeToast:d,onClick:m,closeOnClick:f}=e;ls({id:e.toastId,containerId:e.containerId,fn:a}),(0,l.useEffect)(()=>{if(e.pauseOnFocusLoss)return h(),()=>{g()}},[e.pauseOnFocusLoss]);function h(){document.hasFocus()||w(),window.addEventListener("focus",y),window.addEventListener("blur",w)}function g(){window.removeEventListener("focus",y),window.removeEventListener("blur",w)}function v(E){if(e.draggable===!0||e.draggable===E.pointerType){p();let S=s.current;o.canCloseOnClick=!0,o.canDrag=!0,S.style.transition="none",e.draggableDirection==="x"?(o.start=E.clientX,o.removalDistance=S.offsetWidth*(e.draggablePercent/100)):(o.start=E.clientY,o.removalDistance=S.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function b(E){let{top:S,bottom:R,left:A,right:O}=s.current.getBoundingClientRect();E.pointerType==="mouse"&&e.pauseOnHover&&E.clientX>=A&&E.clientX<=O&&E.clientY>=S&&E.clientY<=R?w():y()}function y(){a(!0)}function w(){a(!1)}function p(){o.didMove=!1,document.addEventListener("pointermove",_),document.addEventListener("pointerup",T)}function x(){document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",T)}function _(E){let S=s.current;if(o.canDrag&&S){o.didMove=!0,t&&w(),e.draggableDirection==="x"?o.delta=E.clientX-o.start:o.delta=E.clientY-o.start,o.start!==E.clientX&&(o.canCloseOnClick=!1);let R=e.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`;S.style.transform=`translate3d(${R},0)`,S.style.opacity=`${1-Math.abs(o.delta/o.removalDistance)}`}}function T(){x();let E=s.current;if(o.canDrag&&o.didMove&&E){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance){n(!0),e.closeToast(!0),e.collapseAll();return}E.style.transition="transform 0.2s, opacity 0.2s",E.style.removeProperty("transform"),E.style.removeProperty("opacity")}}let N={onPointerDown:v,onPointerUp:b};return c&&u&&(N.onMouseEnter=w,e.stacked||(N.onMouseLeave=y)),f&&(N.onClick=E=>{m&&m(E),o.canCloseOnClick&&d(!0)}),{playToast:y,pauseToast:w,isRunning:t,preventExitTransition:r,toastRef:s,eventHandlers:N}}var ta=typeof window<"u"?l.useLayoutEffect:l.useEffect,Se=({theme:e,type:t,isLoading:a,...r})=>l.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function gs(e){return l.createElement(Se,{...e},l.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function ys(e){return l.createElement(Se,{...e},l.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function xs(e){return l.createElement(Se,{...e},l.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function vs(e){return l.createElement(Se,{...e},l.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function bs(){return l.createElement("div",{className:"Toastify__spinner"})}var We={info:ys,warning:gs,success:xs,error:vs,spinner:bs},ws=e=>e in We;function _s({theme:e,type:t,isLoading:a,icon:r}){let n=null,s={theme:e,type:t};return r===!1||(J(r)?n=r({...s,isLoading:a}):(0,l.isValidElement)(r)?n=(0,l.cloneElement)(r,s):a?n=We.spinner():ws(t)&&(n=We[t](s))),n}var ks=e=>{let{isRunning:t,preventExitTransition:a,toastRef:r,eventHandlers:n,playToast:s}=ps(e),{closeButton:o,children:c,autoClose:u,onClick:d,type:m,hideProgressBar:f,closeToast:h,transition:g,position:v,className:b,style:y,progressClassName:w,updateId:p,role:x,progress:_,rtl:T,toastId:N,deleteToast:E,isIn:S,isLoading:R,closeOnClick:A,theme:O,ariaLabel:Q}=e,V=K("Toastify__toast",`Toastify__toast-theme--${O}`,`Toastify__toast--${m}`,{"Toastify__toast--rtl":T},{"Toastify__toast--close-on-click":A}),me=J(b)?b({rtl:T,position:v,type:m,defaultClassName:V}):K(V,b),z=_s(e),st=!!_||!u,Ne={closeToast:h,type:m,theme:O},fe=null;return o===!1||(J(o)?fe=o(Ne):(0,l.isValidElement)(o)?fe=(0,l.cloneElement)(o,Ne):fe=Zn(Ne)),l.createElement(g,{isIn:S,done:E,position:v,preventExitTransition:a,nodeRef:r,playToast:s},l.createElement("div",{id:N,tabIndex:0,onClick:d,"data-in":S,className:me,...n,style:y,ref:r,...S&&{role:x,"aria-label":Q}},z!=null&&l.createElement("div",{className:K("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},z),Kt(c,e,!t),fe,!e.customProgressBar&&l.createElement(es,{...p&&!st?{key:`p-${p}`}:{},rtl:T,theme:O,delay:u,isRunning:t,isIn:S,closeToast:h,hide:f,type:m,className:w,controlledProgress:st,progress:_||0})))},je=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),Es=ke(je("bounce",!0)),mi=ke(je("slide",!0)),fi=ke(je("zoom")),hi=ke(je("flip")),Ts={position:"top-right",transition:Es,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function Ss(e){let t={...Ts,...e},a=e.stacked,[r,n]=(0,l.useState)(!0),s=(0,l.useRef)(null),{getToastToRender:o,isToastActive:c,count:u}=hs(t),{className:d,style:m,rtl:f,containerId:h,hotKeys:g}=t;function v(y){let w=K("Toastify__toast-container",`Toastify__toast-container--${y}`,{"Toastify__toast-container--rtl":f});return J(d)?d({position:y,rtl:f,defaultClassName:w}):K(w,Ue(d))}function b(){a&&(n(!0),j.play())}return ta(()=>{var y;if(a){let w=s.current.querySelectorAll('[data-in="true"]'),p=12,x=(y=t.position)==null?void 0:y.includes("top"),_=0,T=0;Array.from(w).reverse().forEach((N,E)=>{let S=N;S.classList.add("Toastify__toast--stacked"),E>0&&(S.dataset.collapsed=`${r}`),S.dataset.pos||(S.dataset.pos=x?"top":"bot");let R=_*(r?.2:1)+(r?0:p*E),A=Math.max(.5,1-(r?T:0));S.style.setProperty("--y",`${x?R:R*-1}px`),S.style.setProperty("--g",`${p}`),S.style.setProperty("--s",`${A}`),_+=S.offsetHeight,T+=.025})}},[r,u,a]),(0,l.useEffect)(()=>{function y(w){var p;let x=s.current;g(w)&&((p=x?.querySelector('[tabIndex="0"]'))==null||p.focus(),n(!1),j.pause()),w.key==="Escape"&&(document.activeElement===x||x!=null&&x.contains(document.activeElement))&&(n(!0),j.play())}return document.addEventListener("keydown",y),()=>{document.removeEventListener("keydown",y)}},[g]),l.createElement("section",{ref:s,className:"Toastify",id:h,onMouseEnter:()=>{a&&(n(!1),j.pause())},onMouseLeave:b,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},o((y,w)=>{let p=w.length?{...m}:{...m,pointerEvents:"none"};return l.createElement("div",{tabIndex:-1,className:v(y),"data-stacked":a,style:p,key:`c-${y}`},w.map(({content:x,props:_})=>l.createElement(ks,{..._,stacked:a,collapseAll:b,isIn:c(_.toastId,_.containerId),key:`t-${_.key}`},x)))}))}var js=`:root {
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
`,_t=new Map,Ns=(e,t)=>{ta(()=>{if(!e||typeof document>"u")return;let a=document,r=_t.get(a);if(r){t&&r.setAttribute("nonce",t);return}let n=a.createElement("style");n.textContent=e,t&&n.setAttribute("nonce",t),a.head.appendChild(n),_t.set(a,n)},[t])};function Cs(e){return Ns(js,e.nonce),l.createElement(Ss,{...e})}var Y={emailjs:{serviceId:"service_2936zzf",templateId:"template_q859oph",publicKey:"YDO5GNDdewVvMoyTz"},recaptcha:{siteKey:"6LeJDrIqAAAAAAJz4msjc88QwwlPf-Qge27d_t7a"},contact:{email:"atrenchevski@gmail.com"}},Rs=()=>{const e=["VITE_CONTACT_EMAIL","VITE_EMAILJS_SERVICE_ID","VITE_EMAILJS_TEMPLATE_ID","VITE_EMAILJS_PUBLIC_KEY","VITE_RECAPTCHA_SITE_KEY"].filter(t=>!{BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_CONTACT_EMAIL:"atrenchevski@gmail.com",VITE_EMAILJS_PUBLIC_KEY:"YDO5GNDdewVvMoyTz",VITE_EMAILJS_SERVICE_ID:"service_2936zzf",VITE_EMAILJS_TEMPLATE_ID:"template_q859oph",VITE_RECAPTCHA_SITE_KEY:"6LeJDrIqAAAAAAJz4msjc88QwwlPf-Qge27d_t7a"}[t]);if(e.length>0){const t=`Missing required environment variables: ${e.join(", ")}. Please check your .env file.`;if(typeof window<"u")throw new Error(t);console.warn(t)}},de=class{constructor(e=0,t="Network Error"){this.status=e,this.text=t}},Ps=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},P={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Ps()},nt=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},Is=(e,t="https://api.emailjs.com")=>{if(!e)return;const a=nt(e);P.publicKey=a.publicKey,P.blockHeadless=a.blockHeadless,P.storageProvider=a.storageProvider,P.blockList=a.blockList,P.limitRate=a.limitRate,P.origin=a.origin||t},aa=async(e,t,a={})=>{const r=await fetch(P.origin+e,{method:"POST",headers:a,body:t}),n=await r.text(),s=new de(r.status,n);if(r.ok)return s;throw s},ra=(e,t,a)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||typeof a!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Ls=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},na=e=>e.webdriver||!e.languages||e.languages.length===0,sa=()=>new de(451,"Unavailable For Headless Browser"),Ms=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},As=e=>!e.list?.length||!e.watchVariable,Ds=(e,t)=>e instanceof FormData?e.get(t):e[t],ia=(e,t)=>{if(As(e))return!1;Ms(e.list,e.watchVariable);const a=Ds(t,e.watchVariable);return typeof a!="string"?!1:e.list.includes(a)},oa=()=>new de(403,"Forbidden"),$s=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},Os=async(e,t,a)=>{const r=Number(await a.get(e)||0);return t-Date.now()+r},la=async(e,t,a)=>{if(!t.throttle||!a)return!1;$s(t.throttle,t.id);const r=t.id||e;return await Os(r,t.throttle,a)>0?!0:(await a.set(r,Date.now().toString()),!1)},ca=()=>new de(429,"Too Many Requests"),zs=async(e,t,a,r)=>{const n=nt(r),s=n.publicKey||P.publicKey,o=n.blockHeadless||P.blockHeadless,c=n.storageProvider||P.storageProvider,u={...P.blockList,...n.blockList},d={...P.limitRate,...n.limitRate};return o&&na(navigator)?Promise.reject(sa()):(ra(s,e,t),Ls(a),a&&ia(u,a)?Promise.reject(oa()):await la(location.pathname,d,c)?Promise.reject(ca()):aa("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:e,template_id:t,template_params:a}),{"Content-type":"application/json"}))},Bs=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Fs=e=>typeof e=="string"?document.querySelector(e):e,Hs=async(e,t,a,r)=>{const n=nt(r),s=n.publicKey||P.publicKey,o=n.blockHeadless||P.blockHeadless,c=P.storageProvider||n.storageProvider,u={...P.blockList,...n.blockList},d={...P.limitRate,...n.limitRate};if(o&&na(navigator))return Promise.reject(sa());const m=Fs(a);ra(s,e,t),Bs(m);const f=new FormData(m);return ia(u,f)?Promise.reject(oa()):await la(location.pathname,d,c)?Promise.reject(ca()):(f.append("lib_version","4.4.1"),f.append("service_id",e),f.append("template_id",t),f.append("user_id",s),aa("/api/v1.0/email/send-form",f))},Vs={init:Is,send:zs,sendForm:Hs,EmailJSResponseStatus:de};Rs();var Me={serviceId:Y.emailjs.serviceId,templateId:Y.emailjs.templateId,publicKey:Y.emailjs.publicKey},Us=async e=>{try{return{success:!0,data:await Vs.send(Me.serviceId,Me.templateId,{name:e.name,email:e.email,message:e.message,to_name:"Aleksandar Trenchevski",to_email:Y.contact.email},Me.publicKey)}}catch(t){const a=t instanceof Error?t.message:"Failed to send email";return console.error("Email send error:",t),{success:!1,error:a}}},Gs=(e={})=>{const{threshold:t=.1,rootMargin:a="0px",triggerOnce:r=!0}=e,[n,s]=(0,l.useState)(!1),[o,c]=(0,l.useState)(!1),u=(0,l.useRef)(null),d=(0,l.useRef)(!1);return(0,l.useEffect)(()=>{const m=u.current;if(!m)return;const f=new IntersectionObserver(([h])=>{if(!h)return;const g=h.isIntersecting;s(g),g&&!d.current&&(d.current=!0,c(!0))},{threshold:t,rootMargin:a});return f.observe(m),()=>{f.unobserve(m),f.disconnect()}},[t,a]),{ref:u,isIntersecting:r?o:n}},Js=({onChange:e,theme:t="dark"})=>{const a=Y.recaptcha.siteKey,[r,n]=(0,l.useState)(!1),[s,o]=(0,l.useState)(null),{ref:c,isIntersecting:u}=Gs({rootMargin:"100px",triggerOnce:!0,threshold:.01}),d=t==="dark"?"text-white/60":"text-gray-600";return(0,l.useEffect)(()=>{!a||!u||r||(async()=>{try{const m=(await tt(()=>import("./esm-uhhtIFB7.js"),__vite__mapDeps([0,1,2]))).default;o(()=>m),n(!0)}catch(m){console.error("Failed to load reCAPTCHA:",m)}})()},[a,u,r]),(0,i.jsx)("div",{ref:c,className:"flex flex-col items-center justify-center min-h-19.5",children:a?s?(0,i.jsx)(s,{sitekey:a,onChange:e,theme:t}):(0,i.jsx)("div",{className:`flex items-center justify-center text-sm ${d}`,children:"Loading verification..."}):(0,i.jsx)("div",{className:`flex items-center justify-center text-sm text-center ${d}`,children:"Verification is unavailable right now."})})},ua=e=>({position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:e?"dark":"light"}),ge=(e,t)=>{j.error(e,ua(t))},Ws=(e,t)=>{j.success(e,ua(t))},qs=()=>{const[e,t]=(0,l.useState)({name:"",email:"",message:""}),[a,r]=(0,l.useState)(!1),[n,s]=(0,l.useState)(null),[o,c]=(0,l.useState)(!1),[u,d]=(0,l.useState)(!1),[m,f]=(0,l.useState)({}),{darkMode:h}=$(),g=()=>{const p={},N=e.name.trim(),E=e.email.trim(),S=e.message.trim();return N?N.length<2&&(p.name="Name must be at least 2 characters"):p.name="Name is required",E?(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(E)||E.length>254)&&(p.email="Please enter a valid email address"):p.email="Email is required",S?S.length<10?p.message="Message must be at least 10 characters":S.length>5e3&&(p.message="Message cannot exceed 5000 characters"):p.message="Message is required",f(p),Object.keys(p).length===0},v=p=>{const{name:x,value:_}=p.target;t(T=>({...T,[x]:_})),m[x]&&f(T=>({...T,[x]:""}))},b=p=>{s(p)},y=()=>{t({name:"",email:"",message:""}),f({}),s(null),r(!1),c(!1)},w=async p=>{if(p.preventDefault(),!g()){ge("Please fix the form errors before submitting.",h);return}if(!n){ge("Please complete the CAPTCHA to proceed.",h);return}d(!0);try{const x=await Us(e);x.success?(r(!0),c(!0),Ws("Message sent successfully! I'll get back to you soon.",h)):ge(`Failed to send message: ${x.error}. Please try again or contact me directly.`,h)}catch(x){console.error("Form submission error:",x),ge("An unexpected error occurred. Please try again.",h)}finally{d(!1)}};return(0,i.jsxs)(k.section,{className:`p-6 sm:p-8 md:p-10 lg:p-16 rounded-xl shadow-lg max-w-4xl mx-auto my-8 md:my-12 ${h?"bg-[#1a0b2e]/70 border border-fuchsia-500/15":"bg-gray-50"}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{staggerChildren:.2},children:[(0,i.jsx)(Cs,{}),(0,i.jsx)(k.h2,{className:`text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center ${h?"text-white":"text-gray-900"}`,variants:B,children:"Get In Touch"}),(0,i.jsxs)(k.p,{className:`text-base sm:text-lg lg:text-xl text-center mb-8 sm:mb-10 p-4 rounded-lg ${h?"bg-[#241041] text-white":"bg-gray-50 text-gray-600"}`,variants:B,children:["Feel free to contact me directly at"," ",(0,i.jsx)("a",{href:`mailto:${Y.contact.email}`,className:`font-semibold ${h?"text-cyan-400":"text-fuchsia-600"}`,children:Y.contact.email})," ","or by filling out the form below. I'll get back to you as soon as I can."]}),o&&(0,i.jsxs)(k.div,{className:`text-center p-4 sm:p-6 rounded-lg shadow-md max-w-md mx-auto flex flex-col items-center justify-center ${h?"bg-green-900 border-green-600":"bg-green-50 border-green-400"}`,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5},role:"status","aria-live":"polite",children:[(0,i.jsx)(Sn,{className:`text-4xl mb-4 ${h?"text-green-400":"text-green-500"}`,"aria-hidden":"true"}),(0,i.jsx)("span",{className:`text-base sm:text-lg font-semibold mb-2 ${h?"text-white":"text-gray-900"}`,children:"Thank you! Your message has been sent successfully."}),(0,i.jsx)("button",{type:"button",onClick:y,className:`mt-4 px-6 py-2 rounded-full font-semibold transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 ${h?"bg-purple-800 text-white hover:bg-purple-700 focus:ring-cyan-400":"bg-black text-white hover:bg-gray-800 focus:ring-fuchsia-500"}`,children:"Send another message"})]}),!a&&(0,i.jsxs)(k.form,{onSubmit:p=>{w(p)},className:`max-w-lg w-full p-6 sm:p-8 rounded-lg shadow-md mx-auto ${h?"bg-[#160a2e] text-white border border-cyan-500/15":"bg-white"}`,initial:"hidden",animate:"visible",variants:B,noValidate:!0,children:[(0,i.jsxs)(k.div,{className:"mb-4 sm:mb-6",variants:B,children:[(0,i.jsxs)("label",{htmlFor:"name",className:`block text-sm sm:text-base font-semibold mb-2 ${h?"text-white":"text-gray-700"}`,children:[(0,i.jsx)(wn,{className:"text-gray-500 mr-2 text-lg","aria-hidden":"true"}),"Your Name"]}),(0,i.jsx)("input",{id:"name",type:"text",name:"name",value:e.name,onChange:v,"aria-invalid":m.name?!0:void 0,"aria-describedby":m.name?"name-error":void 0,className:`w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${m.name?"border-red-500 focus:ring-red-400":h?"bg-[#241041] border-fuchsia-500/25 text-white focus:ring-cyan-400":"focus:ring-fuchsia-400"}`,required:!0}),m.name&&(0,i.jsx)("p",{id:"name-error",className:"text-red-500 text-sm mt-1",role:"alert",children:m.name})]}),(0,i.jsxs)(k.div,{className:"mb-4 sm:mb-6",variants:B,children:[(0,i.jsxs)("label",{htmlFor:"email",className:`block text-sm sm:text-base font-semibold mb-2 ${h?"text-white":"text-gray-700"}`,children:[(0,i.jsx)(En,{className:"text-gray-500 mr-2 text-lg","aria-hidden":"true"}),"Your Email"]}),(0,i.jsx)("input",{id:"email",type:"email",name:"email",value:e.email,onChange:v,"aria-invalid":m.email?!0:void 0,"aria-describedby":m.email?"email-error":void 0,className:`w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${m.email?"border-red-500 focus:ring-red-400":h?"bg-[#241041] border-fuchsia-500/25 text-white focus:ring-cyan-400":"focus:ring-fuchsia-400"}`,required:!0}),m.email&&(0,i.jsx)("p",{id:"email-error",className:"text-red-500 text-sm mt-1",role:"alert",children:m.email})]}),(0,i.jsxs)(k.div,{className:"mb-4 sm:mb-6",variants:B,children:[(0,i.jsxs)("label",{htmlFor:"message",className:`block text-sm sm:text-base font-semibold mb-2 ${h?"text-white":"text-gray-700"}`,children:[(0,i.jsx)(Tn,{className:"text-gray-500 mr-2 text-lg","aria-hidden":"true"}),"Your Message"]}),(0,i.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:v,maxLength:5e3,"aria-invalid":m.message?!0:void 0,"aria-describedby":m.message?"message-error":void 0,className:`w-full p-2 sm:p-3 h-24 sm:h-32 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${m.message?"border-red-500 focus:ring-red-400":h?"bg-[#241041] border-fuchsia-500/25 text-white focus:ring-cyan-400":"focus:ring-fuchsia-400"}`,required:!0}),(0,i.jsxs)("div",{className:"mt-1 flex items-center justify-between",children:[m.message?(0,i.jsx)("p",{id:"message-error",className:"text-red-500 text-sm",role:"alert",children:m.message}):(0,i.jsx)("span",{}),(0,i.jsxs)("span",{className:`text-xs ${h?"text-gray-300":"text-gray-500"}`,"aria-live":"polite",children:[e.message.length,"/5000"]})]})]}),(0,i.jsxs)(k.div,{className:"flex flex-col items-center justify-center",variants:B,children:[(0,i.jsx)(Js,{onChange:b,theme:h?"dark":"light"}),(0,i.jsxs)(k.button,{type:"submit",disabled:u,className:`mt-6 px-6 py-3 rounded-full font-semibold transition flex items-center justify-center space-x-2 select-none ${u?h?"bg-gray-700 text-gray-400 cursor-not-allowed":"bg-gray-400 text-gray-600 cursor-not-allowed":h?"bg-fuchsia-700 text-white hover:bg-fuchsia-600 shadow-[0_0_20px_rgba(217,70,239,0.35)] cursor-pointer":"bg-black text-white hover:bg-gray-800 cursor-pointer"}`,variants:B,"aria-busy":u,children:[u&&(0,i.jsx)(k.div,{className:"w-4 h-4 border-2 border-current border-t-transparent rounded-full",animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},"aria-hidden":"true"}),(0,i.jsx)("span",{children:u?"Sending...":"Send Message"})]})]})]})]})},Ks=()=>{const[e,t]=(0,l.useState)(!1),{darkMode:a}=$(),r=(0,l.useRef)(null),n=()=>{r.current&&clearTimeout(r.current),r.current=setTimeout(()=>{t(window.scrollY>100)},150)},s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(0,l.useEffect)(()=>(window.addEventListener("scroll",n,{passive:!0}),()=>{window.removeEventListener("scroll",n),r.current&&clearTimeout(r.current)}),[]),(0,i.jsx)(Ae,{children:e&&(0,i.jsx)(k.button,{onClick:s,className:"fixed bottom-8 right-6 sm:bottom-10 sm:right-8 md:bottom-12 md:right-10 lg:bottom-16 lg:right-10 text-[#0d0221] rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center shadow-lg cursor-pointer",title:"Back to Top","aria-label":"Back to top",initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},transition:{type:"spring",stiffness:300,damping:20},style:{background:a?"#22d3ee":"#d946ef"},whileHover:{scale:1.2},children:(0,i.jsx)(jn,{"aria-hidden":"true"})})})};function Ys(e){return L({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(e)}function Xs(e){return L({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"},child:[]}]})(e)}function Qs(e){return L({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"},child:[]}]})(e)}var Zs=()=>{const{darkMode:e}=$();return(0,i.jsxs)("footer",{className:`p-4 text-center ${e?"text-white":"text-gray-900"}`,children:[(0,i.jsxs)("p",{className:"text-xs sm:text-base",children:["© Aleksandar Trenchevski ",new Date().getFullYear(),". All rights reserved."]}),(0,i.jsxs)("div",{className:"mt-4",children:[(0,i.jsx)("span",{className:"text-xs sm:text-sm",children:"Built with:"}),(0,i.jsxs)("div",{className:"flex justify-center items-center mt-2 space-x-2 sm:space-x-4 text-xs sm:text-sm",children:[(0,i.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,i.jsx)(xn,{className:"text-blue-500"}),(0,i.jsx)("span",{children:"React"})]}),(0,i.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,i.jsx)(Xs,{className:"text-blue-400"}),(0,i.jsx)("span",{children:"Tailwind CSS"})]}),(0,i.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,i.jsx)(Qs,{className:"text-pink-500"}),(0,i.jsx)("span",{children:"Motion"})]}),(0,i.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,i.jsx)(Ys,{className:"text-blue-600"}),(0,i.jsx)("span",{children:"TypeScript"})]})]})]})]})},ei=()=>{const{darkMode:e}=$();return(0,i.jsxs)("div",{className:`text-gray-900 ${e?"text-white bg-linear-to-br from-[#0d0221] via-[#2a0a4a] to-[#0d0221]":"text-gray-800 bg-linear-to-br from-amber-300 via-pink-400 to-purple-400"}`,children:[(0,i.jsx)("a",{href:"#home",className:"sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-black focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400",children:"Skip to content"}),(0,i.jsx)(Ln,{}),(0,i.jsx)("section",{id:"home",className:"p-8",children:(0,i.jsx)(Mn,{})}),(0,i.jsx)("section",{id:"about",className:"p-8",children:(0,i.jsx)(An,{})}),(0,i.jsx)("section",{id:"experience",className:"p-8",children:(0,i.jsx)($n,{})}),(0,i.jsx)("section",{id:"education",className:"p-8",children:(0,i.jsx)(zn,{})}),(0,i.jsx)("section",{id:"skills",className:"p-8",children:(0,i.jsx)(Hn,{})}),(0,i.jsx)("section",{id:"certificates",className:"p-8",children:(0,i.jsx)(Un,{})}),(0,i.jsx)("section",{id:"projects",className:"p-8",children:(0,i.jsx)(Wn,{})}),(0,i.jsx)("section",{id:"languages",className:"p-8",children:(0,i.jsx)(Kn,{})}),(0,i.jsx)("section",{id:"contact",className:"p-8",children:(0,i.jsx)(qs,{})}),(0,i.jsx)(Ks,{}),(0,i.jsx)(Zs,{})]})},ti=class extends l.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("Error caught by Error Boundary:",e,t)}handleReset=()=>{this.setState({hasError:!1,error:null})};render(){return this.state.hasError?(0,i.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-linear-to-r from-red-500 to-red-700 p-4",role:"alert","aria-live":"assertive",children:(0,i.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center",children:[(0,i.jsx)("h2",{className:"text-2xl font-bold text-red-600 mb-4",children:"Oops! Something went wrong"}),(0,i.jsx)("p",{className:"text-gray-600 mb-4",children:"We're sorry for the inconvenience. Please try refreshing the page or contact support if the problem persists."}),this.state.error&&(0,i.jsxs)("details",{className:"text-left mb-6",children:[(0,i.jsx)("summary",{className:"cursor-pointer text-sm text-gray-500 hover:text-gray-700",children:"Error details"}),(0,i.jsx)("pre",{className:"mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto max-h-32",children:this.state.error.toString()})]}),(0,i.jsx)("button",{onClick:this.handleReset,className:"bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition",children:"Try Again"})]})}):this.props.children}},ai=(0,l.lazy)(()=>tt(()=>import("./NotFound-BJEJo2ud.js"),__vite__mapDeps([3,2,1]))),ri=()=>{const[e,t]=(0,l.useState)(!0),a=()=>{t(!1)};return(0,i.jsx)(ti,{children:(0,i.jsx)(ga,{reducedMotion:"user",children:(0,i.jsx)(xa,{children:(0,i.jsx)(Kr,{children:(0,i.jsxs)("div",{className:"App",children:[e&&(0,i.jsx)(un,{onComplete:a}),!e&&(0,i.jsx)(l.Suspense,{fallback:null,children:(0,i.jsxs)(vr,{children:[(0,i.jsx)(Oe,{path:"/",element:(0,i.jsx)(ei,{})}),(0,i.jsx)(Oe,{path:"*",element:(0,i.jsx)(ai,{})})]})})]})})})})})};(0,ya.createRoot)(document.getElementById("root")).render((0,i.jsx)(l.StrictMode,{children:(0,i.jsx)(ri,{})}));export{Ut as n,$ as t};
