const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/esm-BPlRokBD.js","assets/rolldown-runtime-la_ZsWYt.js","assets/motion-5LUZtqTU.js","assets/NotFound-DTo_zjik.js","assets/Cv-D93X5dpw.js"])))=>i.map(i=>d[i]);
import{n as Pa}from"./rolldown-runtime-la_ZsWYt.js";import{t as Ia}from"./react-CF0sr8NE.js";import{a as La,c as Aa,i as Da,n as Ma,o as Ke,r as Oa,s as $a,t as T}from"./motion-5LUZtqTU.js";var za=Ia(),l=Pa(Aa(),1),Ut=(0,l.createContext)(void 0),s=$a(),Ba=({children:e})=>{const[t,a]=(0,l.useState)(()=>{if(typeof window>"u")return!1;try{const o=localStorage.getItem("darkMode");if(o!==null)return JSON.parse(o)===!0}catch(o){console.error("Error parsing saved theme:",o)}return window.matchMedia("(prefers-color-scheme: dark)").matches});(0,l.useEffect)(()=>{typeof document>"u"||document.documentElement.classList.toggle("dark",t)},[t]);const r=(0,l.useCallback)(()=>{a(o=>(localStorage.setItem("darkMode",JSON.stringify(!o)),!o))},[]),n=(0,l.useMemo)(()=>({darkMode:t,toggleDarkMode:r}),[t,r]);return(0,s.jsx)(Ut.Provider,{value:n,children:e})},je=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Jt=/^[\\/]{2}/;function Fa(e,t){return t+e.replace(/\\/g,"/")}var yt="popstate";function xt(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function Ha(e={}){function t(r,n){let o=n.state?.masked,{pathname:i,search:c,hash:d}=o||r.location;return Qe("",{pathname:i,search:c,hash:d},n.state&&n.state.usr||null,n.state&&n.state.key||"default",o?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function a(r,n){return typeof n=="string"?n:Y(n)}return Ua(t,a,null,e)}function R(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function H(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Va(){return Math.random().toString(36).substring(2,10)}function bt(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Qe(e,t,a=null,r,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Q(t):t,state:a,key:t&&t.key||r||Va(),mask:n}}function Y({pathname:e="/",search:t="",hash:a=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function Q(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substring(a),e=e.substring(0,a));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Ua(e,t,a,r={}){let{window:n=document.defaultView,v5Compat:o=!1}=r,i=n.history,c="POP",d=null,u=f();u==null&&(u=0,i.replaceState({...i.state,idx:u},""));function f(){return(i.state||{idx:null}).idx}function m(){c="POP";let h=f(),v=h==null?null:h-u;u=h,d&&d({action:c,location:b.location,delta:v})}function g(h,v){c="PUSH";let p=xt(h)?h:Qe(b.location,h,v);a&&a(p,h),u=f()+1;let x=bt(p,u),_=b.createHref(p.mask||p);try{i.pushState(x,"",_)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;n.location.assign(_)}o&&d&&d({action:c,location:b.location,delta:1})}function w(h,v){c="REPLACE";let p=xt(h)?h:Qe(b.location,h,v);a&&a(p,h),u=f();let x=bt(p,u),_=b.createHref(p.mask||p);i.replaceState(x,"",_),o&&d&&d({action:c,location:b.location,delta:0})}function y(h){return Ja(n,h)}let b={get action(){return c},get location(){return e(n,i)},listen(h){if(d)throw new Error("A history only accepts one active listener");return n.addEventListener(yt,m),d=h,()=>{n.removeEventListener(yt,m),d=null}},createHref(h){return t(n,h)},createURL:y,encodeLocation(h){let v=y(h);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:g,replace:w,go(h){return i.go(h)}};return b}function Ja(e,t,a=!1){let r="http://localhost";e&&(r=e.location.origin!=="null"?e.location.origin:e.location.href),R(r,"No window.location.(origin|href) available to create URL");let n=typeof t=="string"?t:Y(t);return n=n.replace(/ $/,"%20"),!a&&Jt.test(n)&&(n=r+n),new URL(n,r)}var Xe=new URL("http://localhost");function Gt(e){if(e.createURL)return e.createURL("/");try{return new URL(e.createHref("/"),Xe)}catch{return Xe}}function Fe(e,t){return e.origin===t.origin&&(e.origin!=="null"||e.protocol===t.protocol&&e.host===t.host)}function Wt(e,t){if(e.startsWith("//"))return!0;let a=t.protocol.toLowerCase();return e.toLowerCase().startsWith(a)?t.host===""||e.slice(a.length).startsWith("//"):!1}function qt(e){let t=e.replace(/[\t\n\r]/g,""),a=0;for(;t.charCodeAt(a)<=32;)a++;if(t=t.slice(a),!je.test(t))return;let r;try{r=new URL(e,Xe)}catch{return}if(!Wt(e,r))throw new Error("External navigation is not allowed")}function Yt(e,t,a,r){let n=null;try{n=e==null?null:new URL(e,a)}catch{}let o=new URL(t,a),i=n!=null&&!Fe(n,a),c=!Fe(o,a);if(r==="reject"){if(i||c)throw new Error("External navigation is not allowed")}else if(c&&(n==null||!Wt(e,n)||!Fe(n,o)))throw new Error("External navigation is not allowed")}function Ga(e,t,a="/"){return Wa(e,t,a,!1)}function Wa(e,t,a,r,n){let o=J((typeof t=="string"?Q(t):t).pathname||"/",a);if(o==null)return null;let i=n??Ya(e),c=null,d=lr(o);for(let u=0;c==null&&u<i.length;++u)c=sr(i[u],d,r);return c}function qa(e,t){let{route:a,pathname:r,params:n}=e;return{id:a.id,pathname:r,params:n,loaderData:t[a.id],handle:a.handle}}function Ya(e){let t=Kt(e);return Ka(t),t}function Kt(e,t=[],a=[],r="",n=!1){let o=(i,c,d=n,u)=>{let f={relativePath:u===void 0?i.path||"":u,caseSensitive:i.caseSensitive===!0,childrenIndex:c,route:i};if(f.relativePath.startsWith("/")){if(!f.relativePath.startsWith(r)&&d)return;R(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length)}let m=M([r,f.relativePath]),g=a.concat(f);i.children&&i.children.length>0&&(R(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Kt(i.children,t,g,m,d)),!(i.path==null&&!i.index)&&t.push({path:m,score:or(m,i.index),routesMeta:g.map((w,y)=>{let[b,h]=Zt(w.relativePath,w.caseSensitive,y===g.length-1);return{...w,matcher:b,compiledParams:h}})})};return e.forEach((i,c)=>{if(i.path===""||!i.path?.includes("?"))o(i,c);else for(let d of Qt(i.path))o(i,c,!0,d)}),t}function Qt(e){let t=e.split("/");if(t.length===0)return[];let[a,...r]=t,n=a.endsWith("?"),o=a.replace(/\?$/,"");if(r.length===0)return n?[o,""]:[o];let i=Qt(r.join("/")),c=[];return c.push(...i.map(d=>d===""?o:[o,d].join("/"))),n&&c.push(...i),c.map(d=>e.startsWith("/")&&d===""?"/":d)}function Ka(e){e.sort((t,a)=>t.score!==a.score?a.score-t.score:ir(t.routesMeta.map(r=>r.childrenIndex),a.routesMeta.map(r=>r.childrenIndex)))}var Qa=/^:[\w-]+$/,Xa=/^:[\w-]+/,Za=3.5,er=3,tr=2,ar=1,rr=10,nr=-2,wt=e=>e==="*";function or(e,t){let a=e.split("/"),r=a.length;return a.some(wt)&&(r+=nr),t&&(r+=tr),a.filter(n=>!wt(n)).reduce((n,o)=>n+(Qa.test(o)?er:Xa.test(o)?Za:o===""?ar:rr),r)}function ir(e,t){return e.length===t.length&&e.slice(0,-1).every((a,r)=>a===t[r])?e[e.length-1]-t[t.length-1]:0}function sr(e,t,a=!1){let{routesMeta:r}=e,n={},o="/",i=[];for(let c=0;c<r.length;++c){let d=r[c],u=c===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",m={path:d.relativePath,caseSensitive:d.caseSensitive,end:u},g=d.matcher&&d.compiledParams?Xt(m,f,d.matcher,d.compiledParams):ke(m,f),w=d.route;if(!g&&u&&a&&!r[r.length-1].route.index&&(g=ke({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},f)),!g)return null;Object.assign(n,g.params),i.push({params:n,pathname:M([o,g.pathname]),pathnameBase:ur(M([o,g.pathnameBase])),route:w}),g.pathnameBase!=="/"&&(o=M([o,g.pathnameBase]))}return i}function ke(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,r]=Zt(e.path,e.caseSensitive,e.end);return Xt(e,t,a,r)}function Xt(e,t,a,r){let n=t.match(a);if(!n)return null;let o=n[0],i=Ee(o,1),c=n.slice(1);return{params:r.reduce((d,{paramName:u,isOptional:f},m)=>{if(u==="*"){let w=c[m]||"";i=Ee(o.slice(0,o.length-w.length),1)}const g=c[m];return f&&!g?d[u]=void 0:d[u]=(g||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:i,pattern:e}}function Zt(e,t=!1,a=!0){H(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,i,c,d,u)=>{if(r.push({paramName:i,isOptional:c!=null}),c){let f=u.charAt(d+o.length);return f&&f!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/((?:[^/?()[\]*^\\]|\\.)+)\?(?=\/|$|\()/g,"(?:/$1)?");return e.endsWith("*")?(r.push({paramName:"*"}),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,t?void 0:"i"),r]}function lr(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return H(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function J(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,r=e.charAt(a);return r&&r!=="/"?null:e.slice(a)||"/"}function cr(e,t="/"){let{pathname:a,search:r="",hash:n=""}=typeof e=="string"?Q(e):e,o;return a?(a=ta(a),a.startsWith("/")||a.startsWith("\\")?o=_t(a.substring(1),"/"):o=_t(a,t)):o=t,{pathname:o,search:fr(r),hash:mr(n)}}function _t(e,t){let a=Ee(t).split("/");return e.split("/").forEach(r=>{r===".."?a.length>1&&a.pop():r!=="."&&a.push(r)}),a.length>1?a.join("/"):"/"}function He(e,t,a,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dr(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}function ea(e){let t=dr(e);return t.map((a,r)=>r===t.length-1?a.pathname:a.pathnameBase)}function st(e,t,a,r=!1){let n;typeof e=="string"?n=Q(e):(n={...e},R(!n.pathname||!n.pathname.includes("?"),He("?","pathname","search",n)),R(!n.pathname||!n.pathname.includes("#"),He("#","pathname","hash",n)),R(!n.search||!n.search.includes("#"),He("#","search","hash",n)));let o=e===""||n.pathname==="",i=o?"/":n.pathname,c;if(i==null)c=a;else{let m=t.length-1;if(!r&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),m-=1;n.pathname=g.join("/")}c=m>=0?t[m]:"/"}let d=cr(n,c),u=i&&i!=="/"&&i.endsWith("/"),f=(o||i===".")&&a.endsWith("/");return!d.pathname.endsWith("/")&&(u||f)&&(d.pathname+="/"),d}var ta=e=>e.replace(/[\\/]{2,}/g,"/"),M=e=>ta(e.join("/"));function Ee(e,t=0){let a=e.length;for(;a>t&&e.charCodeAt(a-1)===47;)a--;return a===e.length?e:e.slice(0,a)}var ur=e=>Ee(e).replace(/^\/*/,"/"),fr=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,mr=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,hr=class{status;statusText;data;error;internal;constructor(e,t,a,r=!1){this.status=e,this.statusText=t||"",this.internal=r,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function pr(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function gr(e){return M(e.map(t=>t.route.path).filter(Boolean))||"/"}var aa=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ra(e,t){let a=e;if(typeof a!="string"||!je.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let r=a,n=!1;if(aa)try{let o=new URL(window.location.href),i=Jt.test(a)?new URL(Fa(a,o.protocol)):new URL(a),c=J(i.pathname,t);i.origin===o.origin&&c!=null?a=c+i.search+i.hash:n=!0}catch{H(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:n,to:a}}var na=["POST","PUT","PATCH","DELETE"],ts=new Set(na),vr=["GET",...na],as=new Set(vr),yr=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function xr(e){try{return yr.includes(new URL(e).protocol)}catch{return!1}}var se=l.createContext(null);se.displayName="DataRouter";var oa=l.createContext(null);oa.displayName="DataRouterState";var ia=l.createContext(null);ia.displayName="DataRouterData";var lt=l.createContext(null);lt.displayName="DataRouterNavigation";var sa=l.createContext(!1);function br(){return l.useContext(sa)}var la=l.createContext({isTransitioning:!1});la.displayName="ViewTransition";var wr=l.createContext(null);wr.displayName="Fetchers";var Ze=l.createContext(null);Ze.displayName="Await";var L=l.createContext(null);L.displayName="Navigation";var le=l.createContext(null);le.displayName="Location";var X=l.createContext({outlet:null,matches:[],isDataRoute:!1});X.displayName="Route";var Re=l.createContext(!1);Re.displayName="IsDataRoute";var Ne=l.createContext(void 0);Ne.displayName="RouteId";var ct=l.createContext(null);ct.displayName="RouteError";var ca="REACT_ROUTER_ERROR",_r="REDIRECT",kr="ROUTE_ERROR_RESPONSE";function Er(e){if(e.startsWith(`${ca}:${_r}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Tr(e){if(e.startsWith(`${ca}:${kr}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new hr(t.status,t.statusText,t.data)}catch{}}function Sr(e,{relative:t}={}){R(ce(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:r}=l.useContext(L),{hash:n,pathname:o,search:i}=de(e,{relative:t}),c=o;return a!=="/"&&(c=o==="/"?a:M([a,o])),r.createHref({pathname:c,search:i,hash:n})}function ce(){return l.useContext(le)!=null}function $(){return R(ce(),"useLocation() may be used only in the context of a <Router> component."),l.useContext(le).location}var da="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Cr(){return l.useContext(Re)?zr():jr()}function jr(){R(ce(),"useNavigate() may be used only in the context of a <Router> component.");let e=l.useContext(se),{basename:t,navigator:a}=l.useContext(L),{matches:r}=l.useContext(X),{pathname:n}=$(),o=JSON.stringify(ea(r)),i=l.useRef(!1);return l.useLayoutEffect(()=>{i.current=!0}),l.useCallback((c,d={})=>{if(H(i.current,da),!i.current)return;if(typeof c=="number"){a.go(c);return}let u=st(c,JSON.parse(o),n,d.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:M([t,u.pathname])),Yt(typeof c=="string"?c:Y(c),a.createHref(u),Gt(a),"reject"),(d.replace?a.replace:a.push)(u,d.state,d)},[t,a,o,n,e])}var rs=l.createContext(null);function de(e,{relative:t}={}){let{matches:a}=l.useContext(X),{pathname:r}=$(),n=JSON.stringify(ea(a));return l.useMemo(()=>st(e,JSON.parse(n),r,t==="path"),[e,n,r,t])}function Rr(e,t){return ua(e,t)}function ua(e,t,a){R(ce(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=l.useContext(L),{matches:n}=l.useContext(X),o=n[n.length-1],i=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=$(),u;if(t){let y=typeof t=="string"?Q(t):t;R(c==="/"||y.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${y.pathname}" was given in the \`location\` prop.`),u=y}else u=d;let f=u.pathname||"/",m=f;if(c!=="/"){let y=c.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(y.length).join("/")}let g;a?a.state.matches.length?g=a.state.matches.map(y=>Object.assign(y,{route:a.manifest[y.route.id]||y.route})):g=a.router.match(a.state.location):g=Ga(e,{pathname:m});let w=Dr(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},i,y.params),pathname:M([c,r.encodeLocation?r.encodeLocation(y.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?c:M([c,r.encodeLocation?r.encodeLocation(y.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathnameBase])})),n,a);return t&&w?l.createElement(le.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...u},navigationType:"POP"}},w):w}function Nr(){let e=$r(),t=pr(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null;return l.createElement(l.Fragment,null,l.createElement("h2",null,"Unexpected Application Error!"),l.createElement("h3",{style:{fontStyle:"italic"}},t),a?l.createElement("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},a):null,null)}var Pr=l.createElement(Nr,null),Ir=class extends l.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static contextType=sa;static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const a=Tr(e.digest);a&&(e=a)}let t=e!==void 0?l.createElement(X.Provider,{value:this.props.routeContext},l.createElement(Re.Provider,{value:this.props.routeContext.isDataRoute},l.createElement(Ne.Provider,{value:this.props.routeContext.matches[this.props.routeContext.matches.length-1]?.route.id},l.createElement(ct.Provider,{value:e,children:this.props.component})))):this.props.children;return this.context?l.createElement(Lr,{error:e},t):t}},Ve=new WeakMap;function Lr({children:e,error:t}){let{basename:a,navigator:r}=l.useContext(L);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let n=Er(t.digest);if(n){let o=Ve.get(t);if(o)throw o;let i=ra(n.location,a),c=i.absoluteURL||i.to;if(Yt(n.location,c,Gt(r),"allow-explicit"),xr(c))throw new Error("Invalid redirect location");if(aa&&!Ve.get(t))if(i.isExternal||n.reloadDocument)window.location.href=c;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:n.replace}));throw Ve.set(t,d),d}return l.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c}`})}}return e}function Ar({routeContext:e,match:t,children:a}){let r=l.useContext(se);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),l.createElement(X.Provider,{value:e},l.createElement(Re.Provider,{value:e.isDataRoute},l.createElement(Ne.Provider,{value:t.route.id},a)))}function Dr(e,t=[],a){let r=a?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let n=e,o=r?.errors;if(o!=null){let f=n.findIndex(m=>m.route.id&&o?.[m.route.id]!==void 0);R(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),n=n.slice(0,Math.min(n.length,f+1))}let i=!1,c=-1;if(a&&r){i=r.renderFallback;for(let f=0;f<n.length;f++){let m=n[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=f),m.route.id){let{loaderData:g,errors:w}=r,y=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!w||w[m.route.id]===void 0);if(m.route.lazy||y){a.isStatic&&(i=!0),c>=0?n=n.slice(0,c+1):n=[n[0]];break}}}}let d=a?.onError,u=r&&d?(f,m)=>{d(f,{location:r.location,params:r.matches?.[0]?.params??{},pattern:gr(r.matches),errorInfo:m})}:void 0;return n.reduceRight((f,m,g)=>{let w,y=!1,b=null,h=null;r&&(w=o&&m.route.id?o[m.route.id]:void 0,b=m.route.errorElement||Pr,i&&(c<0&&g===0?(Br("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,h=null):c===g&&(y=!0,h=m.route.hydrateFallbackElement||null)));let v=t.concat(n.slice(0,g+1)),p=()=>{let x;return w?x=b:y?x=h:m.route.Component?x=l.createElement(m.route.Component,null):m.route.element?x=m.route.element:x=f,l.createElement(Ar,{match:m,routeContext:{outlet:f,matches:v,isDataRoute:r!=null},children:x})};return r&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?l.createElement(Ir,{location:r.location,revalidation:r.revalidation,component:b,error:w,children:p(),routeContext:{outlet:null,matches:v,isDataRoute:!0},onError:u}):p()},null)}function Pe(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ue(e){let t=l.useContext(se);return R(t,Pe(e)),t}function dt(e){let t=l.useContext(oa);return R(t,Pe(e)),t}function ut(e){let t=l.useContext(ia);return R(t,Pe(e)),t}function Mr(e){let t=l.useContext(lt);return R(t,Pe(e)),t}function ft(e){let t=l.useContext(Ne);return R(t,`${e} can only be used on routes that contain a unique "id"`),t}function Or(){let{navigation:e}=Mr("useNavigation");return l.useMemo(()=>{let{matches:t,historyAction:a,...r}=e;return r},[e])}function fa(){let{matches:e}=dt("useMatches"),{loaderData:t}=ut("useMatches");return l.useMemo(()=>e.map(a=>qa(a,t)),[e,t])}function $r(){let e=l.useContext(ct),t=ut("useRouteError"),a=ft("useRouteError");return e!==void 0?e:t.errors?.[a]}function zr(){let{router:e}=ue("useNavigate"),t=ft("useNavigate"),a=l.useRef(!1);return l.useLayoutEffect(()=>{a.current=!0}),l.useCallback(async(r,n={})=>{H(a.current,da),a.current&&(typeof r=="number"?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...n}))},[e,t])}var kt={};function Br(e,t,a){!t&&!kt[e]&&(kt[e]=!0,H(!1,a))}function Fr(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}var Hr={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},Vr=/[&><\u2028\u2029]/g;function Et(e){return e.replace(Vr,t=>Hr[t])}function ma(e,t,a){let r=typeof e=="string"?new URL(e,a??(typeof window>"u"?"server://singlefetch/":window.location.origin)):new URL(e);return a&&r.origin!==a&&(r=new URL(r.pathname+r.search+r.hash,a)),r.pathname.endsWith("/")?r.pathname=`${r.pathname}_.${t}`:r.pathname=`${r.pathname}.${t}`,r}async function Ur(e,t){if(e.id in t)return t[e.id];try{let a=await import(e.module);return t[e.id]=a,a}catch(a){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Jr(e){return e!=null&&typeof e.page=="string"}function Gr(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Wr(e,t,a){return Qr((await Promise.all(e.map(async r=>{let n=t.routes[r.route.id];if(n){let o=await Ur(n,a);return o.links?o.links():[]}return[]}))).flat(1).filter(Gr).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function Tt(e,t,a,r,n,o){let i=(d,u)=>a[u]?d.route.id!==a[u].route.id:!0,c=(d,u)=>a[u].pathname!==d.pathname||a[u].route.path?.endsWith("*")&&a[u].params["*"]!==d.params["*"];return o==="assets"?t.filter((d,u)=>i(d,u)||c(d,u)):o==="data"?t.filter((d,u)=>{let f=r.routes[d.route.id];if(!f||!f.hasLoader)return!1;if(i(d,u)||c(d,u))return!0;if(d.route.shouldRevalidate){let m=d.route.shouldRevalidate({currentUrl:new URL(n.pathname+n.search+n.hash,window.origin),currentParams:a[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function qr(e,t,{includeHydrateFallback:a}={}){return Yr(e.map(r=>{let n=t.routes[r.route.id];if(!n)return[];let o=[n.module];return n.clientActionModule&&(o=o.concat(n.clientActionModule)),n.clientLoaderModule&&(o=o.concat(n.clientLoaderModule)),a&&n.hydrateFallbackModule&&(o=o.concat(n.hydrateFallbackModule)),n.imports&&(o=o.concat(n.imports)),o}).flat(1))}function Yr(e){return[...new Set(e)]}function Kr(e){let t={},a=Object.keys(e).sort();for(let r of a)t[r]=e[r];return t}function Qr(e,t){let a=new Set,r=new Set(t);return e.reduce((n,o)=>{if(t&&!Jr(o)&&o.as==="script"&&o.href&&r.has(o.href))return n;let i=JSON.stringify(Kr(o));return a.has(i)||(a.add(i),n.push({key:i,link:o})),n},[])}var fe=l.createContext(void 0);fe.displayName="FrameworkContext";function Ie(){let e=l.useContext(fe);return Fr(e,"You must render this element inside a <HydratedRouter> element"),e}function Xr(e,t){let a=l.useContext(fe),[r,n]=l.useState(!1),[o,i]=l.useState(!1),{onFocus:c,onBlur:d,onMouseEnter:u,onMouseLeave:f,onTouchStart:m}=t,g=l.useRef(null);l.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let b=v=>{v.forEach(p=>{i(p.isIntersecting)})},h=new IntersectionObserver(b,{threshold:.5});return g.current&&h.observe(g.current),()=>{h.disconnect()}}},[e]),l.useEffect(()=>{if(r){let b=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(b)}}},[r]);let w=()=>{n(!0)},y=()=>{n(!1),i(!1)};return a?e!=="intent"?[o,g,{}]:[o,g,{onFocus:ae(c,w),onBlur:ae(d,y),onMouseEnter:ae(u,w),onMouseLeave:ae(f,y),onTouchStart:ae(m,w)}]:[!1,g,{}]}function ae(e,t){return a=>{e&&e(a),a.defaultPrevented||t(a)}}function Zr({page:e,...t}){let a=br(),{nonce:r}=Ie(),{router:n}=ue("PrefetchPageLinks"),o=l.useMemo(()=>n.match(e),[n,n.routes,e]);return o?(t.nonce==null&&r&&(t={...t,nonce:r}),a?l.createElement(tn,{page:e,matches:o,...t}):l.createElement(an,{page:e,matches:o,...t})):null}function en(e){let{manifest:t,routeModules:a}=Ie(),[r,n]=l.useState([]);return l.useEffect(()=>{let o=!1;return Wr(e,t,a).then(i=>{o||n(i)}),()=>{o=!0}},[e,t,a]),r}function tn({page:e,matches:t,...a}){let r=$(),{unstable_apiServerOrigin:n}=Ie(),o=l.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let i=ma(e,"rsc",n),c=!1,d=[];for(let u of t)typeof u.route.shouldRevalidate=="function"?c=!0:d.push(u.route.id);return c&&d.length>0&&i.searchParams.set("_routes",d.join(",")),[n?i.toString():i.pathname+i.search]},[e,r,t,n]);return l.createElement(l.Fragment,null,o.map(i=>l.createElement("link",{key:i,rel:"prefetch",as:"fetch",href:i,...a})))}function an({page:e,matches:t,...a}){let r=$(),{manifest:n,routeModules:o,unstable_apiServerOrigin:i}=Ie(),{matches:c}=dt("PrefetchPageLinks"),{loaderData:d}=ut("PrefetchPageLinks"),u=l.useMemo(()=>Tt(e,t,c,n,r,"data"),[e,t,c,n,r]),f=l.useMemo(()=>Tt(e,t,c,n,r,"assets"),[e,t,c,n,r]),m=l.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let y=new Set,b=!1;if(t.forEach(v=>{let p=n.routes[v.route.id];!p||!p.hasLoader||(!u.some(x=>x.route.id===v.route.id)&&v.route.id in d&&o[v.route.id]?.shouldRevalidate||p.hasClientLoader?b=!0:y.add(v.route.id))}),y.size===0)return[];let h=ma(e,"data",i);return b&&y.size>0&&h.searchParams.set("_routes",t.filter(v=>y.has(v.route.id)).map(v=>v.route.id).join(",")),[i?h.toString():h.pathname+h.search]},[d,r,n,u,t,e,o,i]),g=l.useMemo(()=>qr(f,n),[f,n]),w=en(f);return l.createElement(l.Fragment,null,m.map(y=>l.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...a})),g.map(y=>l.createElement("link",{key:y,rel:"modulepreload",href:y,...a})),w.map(({key:y,link:b})=>l.createElement("link",{key:y,nonce:a.nonce,...b,crossOrigin:b.crossOrigin??a.crossOrigin})))}function rn(...e){return t=>{e.forEach(a=>{typeof a=="function"?a(t):a!=null&&(a.current=t)})}}function nn(e){if(e.status==="fulfilled")return{status:"fulfilled",value:e.value};if(e.status==="rejected")return{status:"rejected",reason:e.reason}}var ns=l.memo(on);function on({routes:e,manifest:t,state:a,isStatic:r,onError:n}){let o=l.useContext(se);R(o,"You must render this element inside a <DataRouterContext.Provider> element");let i=l.useContext(fe)?.routeDiscoveryRuntime;return l.useEffect(()=>{a.initialized&&i?.markReady()},[a.initialized,i]),ua(e,void 0,{router:o.router,manifest:t,state:a,isStatic:r,onError:n})}function we(e){R(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ha({basename:e="/",children:t=null,location:a,navigationType:r="POP",navigator:n,static:o=!1,useTransitions:i}){R(!ce(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=e.replace(/^\/*/,"/"),d=l.useMemo(()=>({basename:c,navigator:n,static:o,useTransitions:i,future:{}}),[c,n,o,i]);typeof a=="string"&&(a=Q(a));let{pathname:u="/",search:f="",hash:m="",state:g=null,key:w="default",mask:y}=a,b=l.useMemo(()=>{let h=J(u,c);return h==null?null:{location:{pathname:h,search:f,hash:m,state:g,key:w,mask:y},navigationType:r}},[c,u,f,m,g,w,r,y]);return H(b!=null,`<Router basename="${c}"> is not able to match the URL "${u}${f}${m}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:l.createElement(L.Provider,{value:d},l.createElement(le.Provider,{children:t,value:b}))}function sn({children:e,location:t}){return Rr(et(e),t)}var os=class extends l.Component{constructor(e){super(e),this.state={error:null,resolve:e.resolve}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return e.resolve!==t.resolve?{error:null,resolve:e.resolve}:null}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:a}=this.props,r=null,n=0;if(!(a instanceof Promise))n=1,r=Promise.resolve(),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_data",{get:()=>a});else if(this.state.error){n=2;let o=this.state.error;r=Promise.reject().catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_error",{get:()=>o})}else if(a._tracked)r=a,n="_error"in r?2:"_data"in r?1:0;else{n=0,Object.defineProperty(a,"_tracked",{get:()=>!0});let o=nn(a);o?(r=a,o.status==="fulfilled"?(n=1,Object.defineProperty(a,"_data",{get:()=>o.value})):(n=2,Object.defineProperty(a,"_error",{get:()=>o.reason}),Promise.resolve(a).catch(i=>{try{this.props.onError?.(i)}catch(c){console.error("<Await> caught the following error in onError",c)}}))):r=Promise.resolve(a).then(i=>Object.defineProperty(a,"_data",{get:()=>i}),i=>{this.props.onError?.(i),Object.defineProperty(a,"_error",{get:()=>i})})}if(n===2&&!t)throw r._error;if(n===2)return l.createElement(Ze.Provider,{value:r,children:t});if(n===1)return l.createElement(Ze.Provider,{value:r,children:e});throw r}};function et(e,t=[]){let a=[];return l.Children.forEach(e,(r,n)=>{if(!l.isValidElement(r))return;let o=[...t,n];if(r.type===l.Fragment){a.push.apply(a,et(r.props.children,o));return}R(r.type===we,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`);let i=r.props;R(!i.index||!i.children,"An index route cannot have child routes.");let c={id:i.id||o.join("-"),caseSensitive:i.caseSensitive,element:i.element,Component:i.Component,index:i.index,path:i.path,middleware:i.middleware,loader:i.loader,action:i.action,hydrateFallbackElement:i.hydrateFallbackElement,HydrateFallback:i.HydrateFallback,errorElement:i.errorElement,ErrorBoundary:i.ErrorBoundary,shouldRevalidate:i.shouldRevalidate,handle:i.handle,lazy:i.lazy};i.children&&(c.children=et(i.children,o)),a.push(c)}),a}var _e="application/x-www-form-urlencoded";function Le(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function ln(e){return Le(e)&&e.tagName.toLowerCase()==="button"}function cn(e){return Le(e)&&e.tagName.toLowerCase()==="form"}function dn(e){return Le(e)&&e.tagName.toLowerCase()==="input"}function un(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function fn(e,t){return e.button===0&&(!t||t==="_self")&&!un(e)}var ve=null;function mn(){if(ve===null)try{new FormData(document.createElement("form"),0),ve=!1}catch{ve=!0}return ve}var hn=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ue(e){return e!=null&&!hn.has(e)?(H(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${_e}"`),null):e}function St(e,t){if(t==="/")return e;let a=Q(e),r=J(a.pathname||"",t);return r==null?null:Y({...a,pathname:r})}function pn(e,t){let a,r,n,o,i;if(cn(e)){let c=e.getAttribute("action");r=c?St(c,t):null,a=e.getAttribute("method")||"get",n=Ue(e.getAttribute("enctype"))||_e,o=new FormData(e)}else if(ln(e)||dn(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=e.getAttribute("formaction")||c.getAttribute("action");if(r=d?St(d,t):null,a=e.getAttribute("formmethod")||c.getAttribute("method")||"get",n=Ue(e.getAttribute("formenctype"))||Ue(c.getAttribute("enctype"))||_e,o=new FormData(c,e),!mn()){let{name:u,type:f,value:m}=e;if(f==="image"){let g=u?`${u}.`:"";o.append(`${g}x`,"0"),o.append(`${g}y`,"0")}else u&&o.append(u,m)}}else{if(Le(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a="get",r=null,n=_e,i=e}return o&&n==="text/plain"&&(i=o,o=void 0),{action:r,method:a.toLowerCase(),encType:n,formData:o,body:i}}var gn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{gn&&(window.__reactRouterVersion="8")}catch{}function vn({basename:e,children:t,useTransitions:a,window:r}){let n=l.useRef(null);n.current==null&&(n.current=Ha({window:r,v5Compat:!0}));let o=n.current,[i,c]=l.useState({action:o.action,location:o.location}),d=l.useCallback(u=>{a===!1?c(u):l.startTransition(()=>c(u))},[a]);return l.useLayoutEffect(()=>o.listen(d),[o,d]),l.createElement(ha,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:o,useTransitions:a})}function yn({basename:e,children:t,history:a,useTransitions:r}){let[n,o]=l.useState({action:a.action,location:a.location}),i=l.useCallback(c=>{r===!1?o(c):l.startTransition(()=>o(c))},[r]);return l.useLayoutEffect(()=>a.listen(i),[a,i]),l.createElement(ha,{basename:e,children:t,location:n.location,navigationType:n.action,navigator:a,useTransitions:r})}yn.displayName="unstable_HistoryRouter";var Te=l.forwardRef(function({onClick:t,discover:a="render",prefetch:r="none",relative:n,reloadDocument:o,replace:i,mask:c,state:d,target:u,to:f,preventScrollReset:m,viewTransition:g,defaultShouldRevalidate:w,...y},b){let{basename:h,navigator:v,useTransitions:p}=l.useContext(L),x=typeof f=="string"&&je.test(f),_=ra(f,h);f=_.to;let E=Sr(f,{relative:n}),j=$(),k=null;if(c){let B=st(c,[],j.mask?j.mask.pathname:"/",!0);h!=="/"&&(B.pathname=B.pathname==="/"?h:M([h,B.pathname])),k=v.createHref(B)}let[C,P,A]=Xr(r,y),D=_n(f,{replace:i,mask:c,state:d,target:u,preventScrollReset:m,relative:n,viewTransition:g,defaultShouldRevalidate:w,useTransitions:p});function Z(B){t&&t(B),B.defaultPrevented||D(B)}let z=!(_.isExternal||o),ge=(z?k:void 0)||_.absoluteURL||E;qt(ge);let te=l.createElement("a",{...y,...A,href:ge,onClick:z?Z:t,ref:rn(b,P),target:u,"data-discover":!x&&a==="render"?"true":void 0});return C&&!x?l.createElement(l.Fragment,null,te,l.createElement(Zr,{page:E})):te});Te.displayName="Link";var xn=l.forwardRef(function({"aria-current":t="page",caseSensitive:a=!1,className:r="",end:n=!1,style:o,to:i,viewTransition:c,children:d,...u},f){let m=de(i,{relative:u.relative}),g=$(),w=l.useContext(lt),{navigator:y,basename:b}=l.useContext(L),h=w!=null&&Nn(m)&&c===!0,v=y.encodeLocation?y.encodeLocation(m).pathname:m.pathname,p=g.pathname,x=w?.navigation.location?w.navigation.location.pathname:null;a||(p=p.toLowerCase(),x=x?x.toLowerCase():null,v=v.toLowerCase()),x&&b&&(x=J(x,b)||x);const _=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let E=p===v||!n&&p.startsWith(v)&&p.charAt(_)==="/",j=x!=null&&(x===v||!n&&x.startsWith(v)&&x.charAt(_)==="/"),k={isActive:E,isPending:j,isTransitioning:h},C=E?t:void 0,P;typeof r=="function"?P=r(k):P=[r,E?"active":null,j?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let A=typeof o=="function"?o(k):o;return l.createElement(Te,{...u,"aria-current":C,className:P,ref:f,style:A,to:i,viewTransition:c},typeof d=="function"?d(k):d)});xn.displayName="NavLink";var bn=l.forwardRef(({discover:e="render",fetcherKey:t,navigate:a,reloadDocument:r,replace:n,state:o,method:i="get",action:c,onSubmit:d,relative:u,preventScrollReset:f,viewTransition:m,defaultShouldRevalidate:g,...w},y)=>{let{useTransitions:b}=l.useContext(L),h=Tn(),v=Sn(c,{relative:u}),p=i.toLowerCase()==="get"?"get":"post",x=typeof c=="string"&&je.test(c),_=E=>{if(d&&d(E),E.defaultPrevented)return;E.preventDefault();let j=E.nativeEvent.submitter,k=j?.getAttribute("formmethod")||i,C=()=>h(j||E.currentTarget,{fetcherKey:t,method:k,navigate:a,replace:n,state:o,relative:u,preventScrollReset:f,viewTransition:m,defaultShouldRevalidate:g});b&&a!==!1?l.startTransition(()=>C()):C()};return l.createElement("form",{ref:y,method:p,action:v,onSubmit:r?d:_,...w,"data-discover":!x&&e==="render"?"true":void 0})});bn.displayName="Form";function wn({getKey:e,storageKey:t,...a}){let r=l.useContext(fe),{basename:n}=l.useContext(L),o=$(),i=fa();Cn({getKey:e,storageKey:t});let c=l.useMemo(()=>{if(!r||!e)return null;let u=at(o,i,n,e);return u!==o.key?u:null},[]);if(!r||r.isSpaMode)return null;let d=((u,f)=>{if(!window.history.state||!window.history.state.key){let m=Math.random().toString(32).slice(2);window.history.replaceState({key:m},"")}try{let m=JSON.parse(sessionStorage.getItem(u)||"{}")[f||window.history.state.key];typeof m=="number"&&window.scrollTo(0,m)}catch(m){console.error(m);try{sessionStorage.removeItem(u)}catch{}}}).toString();return a.nonce==null&&r?.nonce&&(a.nonce=r.nonce),l.createElement("script",{...a,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${d})(${Et(JSON.stringify(t||tt))}, ${Et(JSON.stringify(c))})`}})}wn.displayName="ScrollRestoration";function _n(e,{target:t,replace:a,mask:r,state:n,preventScrollReset:o,relative:i,viewTransition:c,defaultShouldRevalidate:d,useTransitions:u}={}){let f=Cr(),m=$(),g=de(e,{relative:i});return l.useCallback(w=>{if(fn(w,t)){w.preventDefault();let y=a!==void 0?a:Y(m)===Y(g),b=()=>f(e,{replace:y,mask:r,state:n,preventScrollReset:o,relative:i,viewTransition:c,defaultShouldRevalidate:d});u?l.startTransition(()=>b()):b()}},[m,f,g,a,r,n,t,e,o,i,c,d,u])}var kn=0,En=()=>`__${String(++kn)}__`;function Tn(){let{router:e}=ue("useSubmit"),{basename:t}=l.useContext(L),a=ft("useSubmit"),r=e.fetch,n=e.navigate;return l.useCallback(async(o,i={})=>{let{action:c,method:d,encType:u,formData:f,body:m}=pn(o,t);i.navigate===!1?await r(i.fetcherKey||En(),a,i.action||c,{defaultShouldRevalidate:i.defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,relative:i.relative,formData:f,body:m,formMethod:i.method||d,formEncType:i.encType||u,flushSync:i.flushSync}):await n(i.action||c,{defaultShouldRevalidate:i.defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,relative:i.relative,formData:f,body:m,formMethod:i.method||d,formEncType:i.encType||u,replace:i.replace,state:i.state,fromRouteId:a,flushSync:i.flushSync,viewTransition:i.viewTransition})},[r,n,t,a])}function Sn(e,{relative:t}={}){let{basename:a}=l.useContext(L),r=l.useContext(X);R(r,"useFormAction must be used inside a RouteContext");let[n]=r.matches.slice(-1),o={...de(e||".",{relative:t})},i=$();if(e==null){o.search=i.search;let d=new URLSearchParams(o.search),u=d.getAll("index");if(u.some(f=>f==="")){d.delete("index"),u.filter(m=>m).forEach(m=>d.append("index",m));let f=d.toString();o.search=f?`?${f}`:""}}(!e||e===".")&&n.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(o.pathname=o.pathname==="/"?a:M([a,o.pathname]));let c=Y(o);return qt(c),c}var tt="react-router-scroll-positions",ye={};function at(e,t,a,r){let n=null;return r&&(a!=="/"?n=r({...e,pathname:J(e.pathname,a)||e.pathname},t):n=r(e,t)),n==null&&(n=e.key),n}function Cn({getKey:e,storageKey:t}={}){let{router:a}=ue("useScrollRestoration"),{restoreScrollPosition:r,preventScrollReset:n}=dt("useScrollRestoration"),{basename:o}=l.useContext(L),i=$(),c=fa(),d=Or();l.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),Rn(l.useCallback(u=>{u.persisted&&(window.history.scrollRestoration="manual")},[])),jn(l.useCallback(()=>{if(d.state==="idle"){let u=at(i,c,o,e);ye[u]=window.scrollY}try{sessionStorage.setItem(t||tt,JSON.stringify(ye))}catch(u){H(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${u}).`)}window.history.scrollRestoration="auto"},[d.state,e,o,i,c,t])),typeof document<"u"&&(l.useLayoutEffect(()=>{try{let u=sessionStorage.getItem(t||tt);u&&(ye=JSON.parse(u))}catch{}},[t]),l.useLayoutEffect(()=>{let u=a?.enableScrollRestoration(ye,()=>window.scrollY,e?(f,m)=>at(f,m,o,e):void 0);return()=>u&&u()},[a,o,e]),l.useLayoutEffect(()=>{if(r!==!1){if(typeof r=="number"){window.scrollTo(0,r);return}try{if(i.hash){let u=document.getElementById(decodeURIComponent(i.hash.slice(1)));if(u){u.scrollIntoView();return}}}catch{H(!1,`"${i.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}n!==!0&&window.scrollTo(0,0)}},[i,r,n]))}function jn(e,t){let{capture:a}=t||{};l.useEffect(()=>{let r=a!=null?{capture:a}:void 0;return window.addEventListener("pagehide",e,r),()=>{window.removeEventListener("pagehide",e,r)}},[e,a])}function Rn(e,t){let{capture:a}=t||{};l.useEffect(()=>{let r=a!=null?{capture:a}:void 0;return window.addEventListener("pageshow",e,r),()=>{window.removeEventListener("pageshow",e,r)}},[e,a])}function Nn(e,{relative:t}={}){let a=l.useContext(la);R(a!=null,"`useViewTransitionState` must be used within `react-router/dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=ue("useViewTransitionState"),n=de(e,{relative:t});if(!a.isTransitioning)return!1;let o=J(a.currentLocation.pathname,r)||a.currentLocation.pathname,i=J(a.nextLocation.pathname,r)||a.nextLocation.pathname;return ke(n.pathname,i)!=null||ke(n.pathname,o)!=null}var pa=()=>{const e=(0,l.useContext)(Ut);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},ga=(e,t)=>{e.preventDefault();const a=document.getElementById(t);if(a){const r=a.getBoundingClientRect().top+window.scrollY+-50;window.scrollTo({top:r,behavior:"smooth"})}},va={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ct=l.createContext&&l.createContext(va),Pn=["attr","size","title"];function In(e,t){if(e==null)return{};var a,r,n=Ln(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function Ln(e,t){if(e==null)return{};var a={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;a[r]=e[r]}return a}function Se(){return Se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},Se.apply(null,arguments)}function jt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function Ce(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?jt(Object(a),!0).forEach(function(r){An(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):jt(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function An(e,t,a){return(t=Dn(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Dn(e){var t=Mn(e,"string");return typeof t=="symbol"?t:t+""}function Mn(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ya(e){return e&&e.map((t,a)=>l.createElement(t.tag,Ce({key:a},t.attr),ya(t.child)))}function N(e){return t=>l.createElement(On,Se({attr:Ce({},e.attr)},t),ya(e.child))}function On(e){var t=a=>{var r=e.attr,n=e.size,o=e.title,i=In(e,Pn),c=n||a.size||"1em",d;return a.className&&(d=a.className),e.className&&(d=(d?d+" ":"")+e.className),l.createElement("svg",Se({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,r,i,{className:d,style:Ce(Ce({color:e.color||a.color},a.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),o&&l.createElement("title",null,o),e.children)};return Ct!==void 0?l.createElement(Ct.Consumer,null,a=>t(a)):t(va)}function $n(e){return N({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(e)}function zn(e){return N({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function Bn(e){return N({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function Fn(e){return N({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function Hn(e){return N({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}function Vn(e){return N({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function Rt(e){return N({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"},child:[]}]})(e)}function Un(e){return N({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function Jn(e){return N({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(e)}function Gn(e){return N({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function Wn(e){return N({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function qn(e){return N({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(e)}function Yn(e){return N({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function is(e){return N({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}var Je=["home","about","experience","education","skills","certificates","projects","languages","contact"],Kn=e=>e.charAt(0).toUpperCase()+e.slice(1),Qn=[{name:"GitHub",url:"https://github.com/trencho",ariaLabel:"GitHub Profile"},{name:"LinkedIn",url:"https://www.linkedin.com/in/aleksandar-trenchevski-593b45168/",ariaLabel:"LinkedIn Profile"}],W={name:"Aleksandar Trenchevski",firstName:"Aleksandar",title:"Software Engineer",location:"Skopje, North Macedonia"},Nt={filename:"/CV - Aleksandar Trenchevski.pdf",label:"Download CV"},V={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6}}},Xn={hidden:{opacity:0,x:-50},visible:{opacity:1,x:0,transition:{duration:1}}},re={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},Ge={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},F={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},Zn={hidden:{opacity:0,scale:.8,rotate:-10},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.6,ease:"easeOut"}}},eo={initial:{scale:1,rotate:0,opacity:1},animate:{scale:[1,1.2,1],rotate:[0,360],opacity:1,transition:{duration:.8,ease:"easeInOut"}},exit:{scale:.8,opacity:0,rotate:180,transition:{duration:.4,ease:"easeInOut"}}},to=e=>{const[t,a]=(0,l.useState)(e[0]??"");return(0,l.useEffect)(()=>{const r=e.map(o=>document.getElementById(o)).filter(o=>o!==null);if(r.length===0)return;const n=new IntersectionObserver(o=>{const i=o.filter(c=>c.isIntersecting).sort((c,d)=>c.boundingClientRect.top-d.boundingClientRect.top);i[0]&&a(i[0].target.id)},{rootMargin:"-40% 0px -55% 0px",threshold:0});return r.forEach(o=>n.observe(o)),()=>n.disconnect()},[e]),t},G="bg-white/70 dark:bg-[#1a0b2e]/70 dark:border dark:border-fuchsia-500/15",me="text-gray-900 dark:text-white",mt="text-gray-700 dark:text-white",ht="text-fuchsia-700 dark:text-cyan-400",ao=e=>e?"bg-fuchsia-500/30 text-black border-fuchsia-400/50 focus:ring-fuchsia-400 shadow-lg dark:bg-cyan-500/30 dark:text-white dark:border-cyan-400/50 dark:focus:ring-cyan-400 dark:shadow-cyan-500/20":"bg-fuchsia-500/20 text-black hover:bg-fuchsia-500/30 border-fuchsia-400/30 hover:scale-105 dark:bg-cyan-500/15 dark:text-white dark:hover:bg-cyan-500/25 dark:border-cyan-400/30",ro=e=>e?"border-red-500 focus:ring-red-400":"focus:ring-fuchsia-400 dark:bg-[#241041] dark:border-fuchsia-500/25 dark:text-white dark:focus:ring-cyan-400",Ae="bg-black text-white hover:bg-gray-800 dark:bg-fuchsia-700 dark:hover:bg-fuchsia-600 dark:shadow-[0_0_20px_rgba(217,70,239,0.35)]",no="bg-gray-400 text-gray-600 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400",xa="bg-black text-white hover:bg-gray-800 dark:bg-purple-800 dark:hover:bg-purple-700",oo="bg-linear-to-br from-amber-300 via-pink-400 to-purple-400 text-gray-900 dark:from-[#0d0221] dark:via-[#2a0a4a] dark:to-[#0d0221] dark:text-white",io="bg-white/90 text-gray-900 dark:bg-[#0d0221]/90 dark:text-white",O="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-600 focus-visible:ring-offset-2 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-[#0d0221]",ba="bg-[#2a0a4a] text-fuchsia-100 rounded-full px-3 py-1 font-medium select-none",Pt=({section:e,isActive:t,onNavigate:a,className:r})=>(0,s.jsxs)("a",{href:`#${e}`,onClick:n=>{ga(n,e),a?.()},className:`relative font-semibold group rounded px-2 py-1 transition-colors ${O} ${r} ${t?"text-fuchsia-700 dark:text-cyan-400":"hover:text-gray-600 dark:hover:text-gray-400"}`,"aria-current":t?"location":void 0,children:[Kn(e),(0,s.jsx)("span",{className:`absolute bottom-0 left-0 w-full h-0.5 transform transition-transform duration-500 ease-in-out origin-left group-hover:scale-x-100 ${t?"scale-x-100":"scale-x-0"} bg-fuchsia-600 dark:bg-cyan-400`,"aria-hidden":"true"})]}),so=()=>{const{darkMode:e,toggleDarkMode:t}=pa(),[a,r]=(0,l.useState)(!1),n=to(Je),o=(0,l.useRef)(null),i=(0,l.useRef)(null),c=(0,l.useRef)(!1),d=()=>r(!1);return(0,l.useEffect)(()=>{if(!a)return;const u=f=>{f.key==="Escape"&&r(!1)};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[a]),(0,l.useEffect)(()=>{a?i.current?.querySelector("a")?.focus():c.current&&o.current?.focus(),c.current=a},[a]),(0,s.jsxs)("nav",{className:`p-5 fixed w-full top-0 z-10 backdrop-blur-md shadow-md transition-colors duration-300 ${io}`,"aria-label":"Main navigation",children:[(0,s.jsxs)("div",{className:"container mx-auto flex justify-between items-center",children:[(0,s.jsx)("div",{className:"sm:hidden",children:(0,s.jsxs)("button",{ref:o,id:"toggleButton",onClick:()=>r(u=>!u),"aria-label":a?"Close navigation menu":"Open navigation menu","aria-expanded":a,"aria-controls":"mobile-menu",className:`relative flex flex-col items-center justify-center w-10 h-10 rounded ${O}`,children:[(0,s.jsx)("div",{className:`transition-transform duration-300 ease-in-out w-6 h-0.5 bg-current ${a?"rotate-45 translate-y-1.5":""}`,"aria-hidden":"true"}),(0,s.jsx)("div",{className:`transition-opacity duration-300 ease-in-out w-6 h-0.5 bg-current my-1 ${a?"opacity-0":""}`,"aria-hidden":"true"}),(0,s.jsx)("div",{className:`transition-transform duration-300 ease-in-out w-6 h-0.5 bg-current ${a?"-rotate-45 -translate-y-1.5":""}`,"aria-hidden":"true"})]})}),(0,s.jsx)("div",{className:"hidden sm:flex flex-1 justify-center space-x-4 lg:space-x-6",children:Je.map(u=>(0,s.jsx)(Pt,{section:u,isActive:n===u,className:"text-sm sm:text-lg"},u))}),(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsxs)(Te,{to:"/cv",className:`hidden sm:flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold transition ${O} ${Ae}`,"aria-label":"View CV",children:[(0,s.jsx)(Rt,{"aria-hidden":"true"}),(0,s.jsx)("span",{children:"CV"})]}),(0,s.jsx)("button",{onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",className:`flex items-center justify-center cursor-pointer rounded p-1 ${O}`,children:(0,s.jsx)(Ke,{mode:"wait",children:(0,s.jsx)(T.div,{initial:"initial",animate:"animate",exit:"exit",variants:eo,"aria-hidden":"true",children:e?(0,s.jsx)(Hn,{size:24}):(0,s.jsx)(Vn,{size:24})},e?"sun":"moon")})})]})]}),(0,s.jsx)(Ke,{children:a&&(0,s.jsx)(T.div,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:-100},transition:{duration:.3,ease:"easeInOut"},className:"absolute top-16 left-0 w-full backdrop-blur-md shadow-md bg-white/90 text-gray-900 dark:bg-[#0d0221]/90 dark:text-white",id:"mobile-menu",children:(0,s.jsxs)("ul",{ref:i,className:"flex flex-col space-y-4 py-4 px-6",children:[Je.map(u=>(0,s.jsx)("li",{children:(0,s.jsx)(Pt,{section:u,isActive:n===u,onNavigate:d,className:"text-lg block"})},u)),(0,s.jsx)("li",{children:(0,s.jsxs)(Te,{to:"/cv",onClick:d,className:"flex items-center gap-2 text-lg font-semibold px-2 py-1 rounded hover:text-gray-600 dark:hover:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-600 focus-visible:ring-offset-2 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-[#0d0221]",children:[(0,s.jsx)(Rt,{"aria-hidden":"true"}),(0,s.jsx)("span",{children:"View CV"})]})})]})})})]})},lo=e=>e.replace(/\.(png|jpe?g)$/,".webp"),oe=({src:e,loading:t="lazy",decoding:a="async",...r})=>(0,s.jsxs)("picture",{children:[(0,s.jsx)("source",{srcSet:lo(e),type:"image/webp"}),(0,s.jsx)("img",{src:e,loading:t,decoding:a,...r})]}),co=({text:e})=>{const t=Ma(),[a,r]=(0,l.useState)("");return(0,l.useEffect)(()=>{if(t)return;let n=0,o;const i=()=>{n<=e.length&&(r(e.slice(0,n)),n++,o=setTimeout(i,100))};return i(),()=>clearTimeout(o)},[t,e]),typeof window>"u"||t?e:a},uo=typeof document>"u"||(document.getElementById("root")?.childElementCount??0)>0,fo=(e,t=new Date)=>{const a=t.getFullYear()-e.getFullYear();return t<new Date(t.getFullYear(),e.getMonth(),e.getDate())?a-1:a},mo=[`${fo(new Date(2018,6,15))}+ years experience`,"Backend & Data Engineering","Java · Python · Spring · Spark",W.location],It=`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 mb-2 sm:mb-0 select-none ${O} ${Ae}`,Lt="absolute top-0 left-0 w-full h-full object-cover rounded-full transition-opacity duration-500 ease-in-out select-none",ho=()=>(0,s.jsxs)(T.div,{className:"min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 space-y-6 pt-16 lg:p-12",initial:uo?!1:"hidden",animate:"visible",variants:re,children:[(0,s.jsxs)(T.div,{className:"group relative w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full border-4 border-white shadow-lg mt-4 sm:mt-8",variants:V,children:[(0,s.jsx)(oe,{src:"/profile.jpg",alt:`${W.firstName} profile picture`,className:`${Lt} opacity-100 group-hover:opacity-0`,width:"648",height:"648",loading:"eager",decoding:"auto",fetchPriority:"high"}),(0,s.jsx)(oe,{src:"/logo.png",alt:"","aria-hidden":"true",className:`${Lt} opacity-0 group-hover:opacity-100`,width:"200",height:"200"})]}),(0,s.jsx)(T.div,{className:"w-full max-w-lg sm:max-w-3xl p-4 sm:p-8 rounded-lg shadow-lg flex justify-center items-center bg-white/70 text-gray-700 dark:bg-[#1a0b2e]/80 dark:text-white dark:border dark:border-fuchsia-500/20",variants:Xn,children:(0,s.jsxs)("div",{className:"text-center space-y-4 sm:space-y-6 max-w-xl leading-relaxed",children:[(0,s.jsxs)("h1",{id:"home-heading",className:`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 ${me}`,children:["Hello, my name is ",W.firstName," and I'm a"," ",(0,s.jsx)("span",{className:"sr-only",children:W.title}),(0,s.jsx)("span",{"aria-hidden":"true",className:"text-fuchsia-600 dark:text-cyan-400 dark:drop-shadow-[0_0_10px_rgba(34,211,238,0.55)]",children:(0,s.jsx)(co,{text:W.title})})]}),(0,s.jsx)("p",{className:"text-base sm:text-lg lg:text-xl leading-relaxed",children:"I build RESTful APIs and large-scale data pipelines across insurance, banking, telecom and healthcare. Currently a Data Engineer at Encora, designing ETL workflows on Azure Databricks and Apache Spark."}),(0,s.jsx)(T.ul,{className:"flex flex-wrap justify-center gap-2",variants:V,"aria-label":"Highlights",children:mo.map(e=>(0,s.jsx)("li",{className:"rounded-full px-3 py-1 text-xs sm:text-sm font-medium select-none bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-500/10 dark:text-cyan-300 dark:border dark:border-cyan-400/20",children:e},e))}),(0,s.jsxs)(T.div,{className:"flex flex-col sm:flex-row items-center justify-center gap-4 mt-4",variants:V,children:[(0,s.jsxs)("a",{href:"#contact",onClick:e=>{ga(e,"contact")},className:It,children:[(0,s.jsx)("span",{children:"Contact me here"}),(0,s.jsx)(Yn,{"aria-hidden":"true"})]}),(0,s.jsxs)("a",{href:Nt.filename,className:It,download:!0,children:[(0,s.jsx)("span",{children:Nt.label}),(0,s.jsx)(Jn,{"aria-hidden":"true"})]}),(0,s.jsx)("div",{className:"flex space-x-4 mt-4 sm:mt-0",children:Qn.map(e=>{const t=e.name==="GitHub"?Bn:zn;return(0,s.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:`group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition ${O} ${xa}`,"aria-label":e.ariaLabel,children:[(0,s.jsx)(t,{className:"text-xl","aria-hidden":"true"}),(0,s.jsx)("span",{"aria-hidden":"true",className:"pointer-events-none absolute bottom-full mb-2 px-2 py-1 text-xs text-white rounded whitespace-nowrap invisible opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-visible:visible group-focus-visible:opacity-100 bg-black dark:bg-purple-800",children:e.name})]},e.name)})})]})]})})]}),po=[{id:"focus",body:(0,s.jsxs)(s.Fragment,{children:["I'm a software engineer focused on ",(0,s.jsx)("b",{children:"backend"})," and"," ",(0,s.jsx)("b",{children:"data engineering"}),". I've designed and shipped"," ",(0,s.jsx)("b",{children:"RESTful APIs"})," and, more recently, large-scale ",(0,s.jsx)("b",{children:"ETL pipelines"})," ","— building data workflows on ",(0,s.jsx)("b",{children:"Azure Databricks"})," and"," ",(0,s.jsx)("b",{children:"Apache Spark"})," for the insurance sector, after years of"," ",(0,s.jsx)("b",{children:"Java/Spring"})," development across banking (3DS secure payments), telecommunications and healthcare."]})},{id:"delivery",body:(0,s.jsxs)(s.Fragment,{children:["My work spans the full delivery cycle: modelling data and APIs, containerising with ",(0,s.jsx)("b",{children:"Docker"})," and ",(0,s.jsx)("b",{children:"Kubernetes"}),", and shipping through ",(0,s.jsx)("b",{children:"CI/CD"}),". I've collaborated directly with international clients across ",(0,s.jsx)("b",{children:"Europe and the US"}),", translating business requirements into maintainable, production-ready systems."]})},{id:"background",body:(0,s.jsxs)(s.Fragment,{children:["I hold a"," ",(0,s.jsx)("b",{children:"Master's in Electrical Engineering and Information Technologies"}),", where my thesis on monitoring atmospheric impacts and predicting air pollution grew into open-source machine-learning projects. I value"," ",(0,s.jsx)("b",{children:"clean, well-tested code"}),", pragmatic design and continuous learning — and I'm comfortable explaining technical trade-offs to both engineers and non-technical stakeholders."]})}],ee=({children:e,id:t,className:a="",animated:r=!1,variants:n})=>{const o=`text-2xl sm:text-3xl lg:text-4xl font-bold text-center ${me} ${a}`,i=t===void 0?{}:{id:t};return r?(0,s.jsx)(T.h2,{className:o,...i,...n===void 0?{}:{variants:n},children:e}):(0,s.jsx)("h2",{className:o,...i,children:e})},go=()=>(0,s.jsx)(T.div,{className:`flex justify-center items-center p-4 sm:p-8 lg:p-12 ${mt}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:re,children:(0,s.jsxs)(T.div,{className:`w-full max-w-lg sm:max-w-3xl p-4 sm:p-8 rounded-lg shadow-lg ${G}`,variants:re,children:[(0,s.jsx)(ee,{id:"about-heading",className:"mb-4 sm:mb-6",animated:!0,variants:F,children:"About Me"}),(0,s.jsx)(T.div,{className:"text-center hyphens-auto max-w-lg sm:max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-8",variants:re,children:po.map(e=>(0,s.jsx)(T.p,{className:"text-base sm:text-lg lg:text-xl leading-relaxed mb-4",variants:F,children:e.body},e.id))})]})}),vo=[{company:"Encora Inc.",period:"Mar 2023 – Present",location:"Skopje, North Macedonia",roles:[{title:"Data Engineer",projects:[{name:"Hiscox — Insurance data platform",description:"Building ETL pipelines on Azure Databricks and Apache Spark to ingest, transform and validate insurance data from multiple sources, with automated workflows feeding Azure Data Lake for scalable storage and analytics.",technologies:["Python","SQL","PySpark","Apache Spark","Databricks","Delta Lake","Azure Data Factory"],buildTools:["Databricks Asset Bundles"],versionControl:["Git","Azure DevOps"]}]},{title:"Java Engineer",projects:[{name:'Brandwatch — "Publish" module',description:`Delivered Java/Spring services for Brandwatch's social-media "Publish" module for planning, creating and distributing content.`,technologies:["Java","Spring Boot","PostgreSQL","Docker","Kubernetes"],buildTools:["Gradle","Maven"],versionControl:["Git","GitHub"]},{name:"Cox Networks — Telecom middleware",description:"Built middleware for Cox Networks, a mobile network operator, that receives, processes and serves data from the carrier's systems.",technologies:["Java","Spring Boot","JDBC","JAX-RS","Oracle DB"],buildTools:["Gradle"],versionControl:["Git","Bitbucket"]}]}]},{company:"Netcetera",period:"Dec 2021 – Mar 2023",location:"Skopje, North Macedonia",roles:[{title:"Java Engineer",projects:[{name:"3DS Secure digital payments",description:"Developed banking software for 3DS Secure digital payments, handling authentication flows for online card transactions.",technologies:["Java","Spring Boot","Spring Batch","Hibernate","Microsoft SQL Server"],buildTools:["Maven"],versionControl:["Git","Bitbucket"]}]}]},{company:"Medical IT Revolution",period:"Jul 2018 – Dec 2021",location:"Skopje, North Macedonia",roles:[{title:"Java Engineer",projects:[{name:"Medical Portal",description:"Built a medical application for hospitals in the Netherlands handling patient admissions and examination scheduling based on diagnosis, supporting client requests and delivering optimal software solutions.",technologies:["Java EE","JDBC","IBM Db2","JavaServer Pages"],buildTools:["Maven"],versionControl:["SVN"]}]}]}],yo=[{degree:"Master of Electrical Engineering and Information Technologies",institution:"Ss. Cyril and Methodius University of Skopje",period:"2018 – 2021",thesis:"Design, implementation and assessment of a system for monitoring atmospheric impacts and predicting air pollution"},{degree:"Bachelor of Electrical Engineering and Information Technologies",institution:"Ss. Cyril and Methodius University of Skopje",period:"2014 – 2018",thesis:"Web system for collecting and processing data for student services"}],xo=[{title:"Java",imageSrc:"image-skills/backend/java.png",categories:["Backend"]},{title:"Python",imageSrc:"image-skills/backend/python.png",categories:["Backend"]},{title:"Spring",imageSrc:"image-skills/backend/spring.png",categories:["Backend"]},{title:"FastAPI",imageSrc:"image-skills/backend/fastapi.png",categories:["Backend"]},{title:"Flask",imageSrc:"image-skills/backend/flask.png",categories:["Backend"]},{title:"JavaScript",imageSrc:"image-skills/frontend/javascript.png",categories:["Frontend"]},{title:"TypeScript",imageSrc:"image-skills/frontend/typescript.png",categories:["Frontend"]},{title:"React",imageSrc:"image-skills/frontend/react.png",categories:["Frontend"]},{title:"Vue.js",imageSrc:"image-skills/frontend/vuejs.png",categories:["Frontend"]},{title:"Microsoft SQL Server",imageSrc:"image-skills/databases/microsoft-sql-server.png",categories:["Databases"]},{title:"MongoDB",imageSrc:"image-skills/databases/mongodb.png",categories:["Databases"]},{title:"MySQL",imageSrc:"image-skills/databases/mysql.png",categories:["Databases"]},{title:"Oracle DB",imageSrc:"image-skills/databases/oracle-db.png",categories:["Databases"]},{title:"PostgreSQL",imageSrc:"image-skills/databases/postgresql.png",categories:["Databases"]},{title:"Docker",imageSrc:"image-skills/devops/docker.png",categories:["DevOps"]},{title:"Kubernetes",imageSrc:"image-skills/devops/kubernetes.png",categories:["DevOps"]},{title:"Nginx",imageSrc:"image-skills/devops/nginx.png",categories:["DevOps"]},{title:"Git",imageSrc:"image-skills/tools/git.png",categories:["Tools"]},{title:"GitHub",imageSrc:"image-skills/tools/github.png",categories:["Tools"]},{title:"GitHub Actions",imageSrc:"image-skills/tools/github-actions.png",categories:["Tools"]},{title:"Gunicorn",imageSrc:"image-skills/tools/gunicorn.png",categories:["Tools"]},{title:"Lombok",imageSrc:"image-skills/tools/lombok.png",categories:["Tools"]},{title:"Maven",imageSrc:"image-skills/tools/maven.png",categories:["Tools"]},{title:"Postman",imageSrc:"image-skills/tools/postman.png",categories:["Tools"]},{title:"Pytest",imageSrc:"image-skills/tools/pytest.png",categories:["Tools"]},{title:"Swagger",imageSrc:"image-skills/tools/swagger.png",categories:["Tools"]},{title:"Vite",imageSrc:"image-skills/tools/vite.png",categories:["Tools"]},{title:"Matplotlib",imageSrc:"image-skills/data-science/matplotlib.png",categories:["Data Science"]},{title:"NumPy",imageSrc:"image-skills/data-science/numpy.png",categories:["Data Science"]},{title:"Pandas",imageSrc:"image-skills/data-science/pandas.png",categories:["Data Engineering","Data Science"]},{title:"Scikit-learn",imageSrc:"image-skills/data-science/scikit-learn.png",categories:["Data Science"]},{title:"Scipy",imageSrc:"image-skills/data-science/scipy.png",categories:["Data Science"]},{title:"Apache Spark",imageSrc:"image-skills/data-engineering/apache-spark.png",categories:["Data Engineering"]},{title:"Azure Blob Storage",imageSrc:"image-skills/data-engineering/azure-blob-storage.png",categories:["Data Engineering"]},{title:"Azure Data Factory",imageSrc:"image-skills/data-engineering/azure-data-factory.png",categories:["Data Engineering"]},{title:"Azure Data Lake",imageSrc:"image-skills/data-engineering/azure-data-lake.png",categories:["Data Engineering"]},{title:"Databricks",imageSrc:"image-skills/data-engineering/databricks.png",categories:["Data Engineering"]},{title:"Delta Lake",imageSrc:"image-skills/data-engineering/delta-lake.png",categories:["Data Engineering"]},{title:"ChatGPT",imageSrc:"image-skills/ai/chatgpt.png",categories:["AI"]},{title:"Claude",imageSrc:"image-skills/ai/claude.png",categories:["AI"]},{title:"GitHub Copilot",imageSrc:"image-skills/ai/github-copilot.png",categories:["AI"]},{title:"Grok",imageSrc:"image-skills/ai/grok.png",categories:["AI"]}],bo=[{title:"Databricks Certified Data Engineer Associate",imageSrc:"image-skills/certificates/databricks-data-engineer-associate.png",url:"https://credentials.databricks.com/ecb77163-c63a-45f7-a02f-7747fe0ad658#acc.vuI371hQ"},{title:"Databricks Certified Data Engineer Professional",imageSrc:"image-skills/certificates/databricks-data-engineer-professional.png",url:"https://credentials.databricks.com/40252957-e8c8-4c3d-8170-c7655543c307#acc.Q6Kku94J"}],wo=[{title:"AQRA — Air Quality Monitoring",description:"Air-quality monitoring for North Macedonia, built as two deployed services. A Flask REST API trains and serves machine-learning models that forecast pollutant levels from weather and sensor readings, documented with Swagger and backed by MongoDB. A Vue 3 single-page app renders those readings as a Leaflet pollutant heatmap with a 24-hour time slider and Chart.js history, and also ships as a Capacitor mobile app. Both run as containers on Kubernetes behind Nginx.",links:[{label:"Live Site",url:"https://aqra.feit.ukim.edu.mk/"},{label:"Backend",url:"https://github.com/trencho/air-quality-rest-api"},{label:"Frontend",url:"https://github.com/trencho/aqra-frontend"}],technologies:["Python","Flask","Scikit-learn","Pandas","NumPy","MongoDB","Vue.js","TypeScript","Vite","Leaflet","Chart.js","Docker","Kubernetes","Nginx","Gunicorn","Swagger"],imageSrc:"image-projects/aqra.png"},{title:"CrowdTune — Crowdsourced Event Music",description:"Turns any event into a shared playlist. Guests scan a QR code to request and vote on songs with no signup, and a big-screen display auto-plays the crowd's current winner through the YouTube IFrame Player. A Spring Boot API on Java 25 handles events, voting with atomic counters, per-guest QR passes and a Server-Sent Events stream that pushes leaderboard changes in real time; a Vue 3 single-page app renders the guest, host and display surfaces. Events belong to an organization, so a team shares one plan across roles, and paid tiers add catalog search, white-label branding, analytics and recurring nights. Runs as a single-host Docker Compose stack behind Caddy with automatic TLS.",links:[{label:"Live Site",url:"https://crowdtune.live/"}],technologies:["Java","Spring Boot","Spring Security","PostgreSQL","Redis","Flyway","Vue.js","TypeScript","Vite","Tailwind CSS","Pinia","Server-Sent Events","Docker","Caddy","GitHub Actions"],imageSrc:"image-projects/crowdtune.png"},{title:"Crypto Prophet",description:"A FastAPI service that trains machine-learning models to forecast cryptocurrency prices, exposing predictions through a documented REST API. Packaged with Docker for reproducible deployments.",links:[{label:"View Code",url:"https://github.com/trencho/crypto-prophet"}],technologies:["Python","FastAPI","Scikit-learn","Pandas","NumPy","Docker","Swagger"],imageSrc:"image-projects/crypto-prophet.png"},{title:"Task Manager",description:"A full-stack task-management app: a Spring Boot REST API with secured authentication and MongoDB persistence, paired with a Vue.js frontend for registering, logging in and managing tasks.",links:[{label:"Backend",url:"https://github.com/trencho/task-manager-backend"},{label:"Frontend",url:"https://github.com/trencho/task-manager-frontend"}],technologies:["Java","Spring Boot","Spring Security","MongoDB","Vue.js","JavaScript","Docker"],imageSrc:"image-projects/task-manager.png"}],_o=[{title:"Prediction of Air Pollution Concentration Using Weather Data and Regression Models",url:"https://dx.doi.org/10.25673/32749"}],ko=[{name:"English",proficiency:"Full professional proficiency"},{name:"Serbian",proficiency:"Professional working proficiency"},{name:"German",proficiency:"Limited working proficiency"}],Eo=vo,To=yo,So=bo,Co=wo,At=_o,jo=ko,Dt=xo,Ro=["Backend","Frontend","Databases","Data Engineering","Data Science","AI","DevOps","Tools"],pt=({title:e,headingId:t,children:a})=>(0,s.jsx)(T.div,{className:`flex justify-center ${mt}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:re,children:(0,s.jsxs)("div",{className:"w-full max-w-lg sm:max-w-3xl",children:[(0,s.jsx)(ee,{id:t,className:"mb-8 sm:mb-12",animated:!0,variants:F,children:e}),a]})}),Mt=({label:e,items:t})=>t.length>0?(0,s.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,s.jsx)("span",{className:"opacity-90 font-medium",children:e}),t.map(a=>(0,s.jsx)("span",{className:"rounded-full border border-gray-400/50 px-2.5 py-0.5 select-none",children:a},a))]}):null,No=({project:e})=>(0,s.jsxs)("li",{children:[(0,s.jsx)("h5",{className:"text-base font-semibold",children:e.name}),(0,s.jsx)("p",{className:"text-base leading-relaxed mt-1 mb-3",children:e.description}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2",children:e.technologies.map(t=>(0,s.jsx)("span",{className:`text-xs sm:text-sm ${ba}`,children:t},t))}),(0,s.jsxs)("div",{className:"mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 text-xs sm:text-sm",children:[(0,s.jsx)(Mt,{label:"Build",items:e.buildTools}),(0,s.jsx)(Mt,{label:"Version control",items:e.versionControl})]})]}),Po=({job:e})=>{const t=e.roles.length>1;return(0,s.jsxs)(T.li,{className:"ms-6 sm:ms-8",variants:F,children:[(0,s.jsx)("span",{className:"absolute -start-2.25 flex h-4 w-4 rounded-full border-2 bg-fuchsia-500 border-white dark:bg-cyan-400 dark:border-[#0d0221] dark:shadow-[0_0_10px_rgba(34,211,238,0.7)]","aria-hidden":"true"}),(0,s.jsxs)("div",{className:`rounded-lg shadow-lg p-5 sm:p-6 ${G}`,children:[(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1",children:[(0,s.jsx)("h3",{className:"text-lg sm:text-xl font-semibold",children:t?e.company:(0,s.jsxs)(s.Fragment,{children:[e.roles[0]?.title,(0,s.jsxs)("span",{className:ht,children:[" · ",e.company]})]})}),(0,s.jsx)("span",{className:"text-sm sm:text-base whitespace-nowrap opacity-80",children:e.period})]}),(0,s.jsx)("p",{className:"text-sm sm:text-base opacity-80 mb-4",children:e.location}),(0,s.jsx)("div",{className:"space-y-6",children:e.roles.map(a=>(0,s.jsxs)("div",{children:[t&&(0,s.jsx)("h4",{className:"text-base sm:text-lg font-semibold mb-3 text-fuchsia-700 dark:text-cyan-400",children:a.title}),(0,s.jsx)("ul",{className:t?"space-y-4 border-s-2 border-gray-400/25 ps-4 sm:ps-5":"space-y-4",children:a.projects.map(r=>(0,s.jsx)(No,{project:r},r.name))})]},a.title))})]})]})},Io=()=>(0,s.jsx)(pt,{title:"Experience",headingId:"experience-heading",children:(0,s.jsx)("ol",{className:"relative border-s-2 border-gray-400/40 ms-3 sm:ms-4 space-y-8 sm:space-y-10",children:Eo.map(e=>(0,s.jsx)(Po,{job:e},e.company))})}),Lo=()=>{const e=`rounded-lg shadow-lg p-5 sm:p-6 ${G}`;return(0,s.jsxs)(pt,{title:"Education",headingId:"education-heading",children:[(0,s.jsx)("div",{className:"space-y-6",children:To.map(t=>(0,s.jsxs)(T.div,{className:e,variants:F,children:[(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1",children:[(0,s.jsx)("h3",{className:"text-lg sm:text-xl font-semibold",children:t.degree}),(0,s.jsx)("span",{className:"text-sm sm:text-base whitespace-nowrap opacity-80",children:t.period})]}),(0,s.jsx)("p",{className:`text-sm sm:text-base font-medium ${ht}`,children:t.institution}),(0,s.jsxs)("p",{className:"text-base leading-relaxed mt-2",children:[(0,s.jsx)("span",{className:"opacity-80",children:"Thesis: "}),(0,s.jsx)("span",{className:"italic",children:t.thesis})]})]},t.degree))}),At.length>0&&(0,s.jsxs)(T.div,{className:"mt-10",variants:F,children:[(0,s.jsx)("h3",{className:"text-xl sm:text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white",children:"Publications"}),(0,s.jsx)("ul",{className:"space-y-4",children:At.map(t=>(0,s.jsx)("li",{className:e,children:(0,s.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"text-base leading-relaxed font-medium hover:underline rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-600 focus-visible:ring-offset-2 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-[#0d0221] text-fuchsia-700 dark:text-cyan-400",children:t.title})},t.title))})]})]})},Ao=({label:e,active:t,onSelect:a})=>(0,s.jsx)("button",{type:"button",onClick:a,"aria-pressed":t,className:`px-6 py-3 rounded-xl font-medium transition-all duration-300 border cursor-pointer ${O} ${ao(t)}`,children:e}),Do=["All",...Ro],Mo=()=>{const[e,t]=(0,l.useState)("All"),a=e==="All"?Dt:Dt.filter(r=>r.categories.includes(e));return(0,s.jsx)(T.div,{className:"flex max-w-6xl mx-auto justify-center items-center p-4 sm:p-6 lg:p-12 skills-section",initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:Ge,children:(0,s.jsxs)(T.div,{className:`w-full max-w-lg sm:max-w-6xl p-4 sm:p-8 rounded-lg shadow-lg ${G}`,variants:Ge,children:[(0,s.jsx)(ee,{id:"skills-heading",className:"mb-4 sm:mb-6",animated:!0,variants:F,children:"Skills"}),(0,s.jsxs)(T.div,{className:"glass-card p-8 sm:p-12 lg:p-16",variants:F,children:[(0,s.jsx)("div",{className:"flex flex-wrap justify-center gap-4 mb-12",role:"group","aria-label":"Filter skills by category",children:Do.map(r=>(0,s.jsx)(Ao,{label:r,active:e===r,onSelect:()=>t(r)},r))}),(0,s.jsx)(T.ul,{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6","aria-label":`${e} skills`,variants:Ge,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:a.map(r=>(0,s.jsxs)(T.li,{className:"flex flex-col items-center space-y-3 p-4 rounded-2xl transition-all duration-300 hover:scale-105 group bg-gray-100 hover:bg-gray-200 dark:bg-[#241041] dark:hover:bg-[#33165c]",variants:F,whileHover:{y:-5},children:[(0,s.jsx)("div",{className:"w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden bg-linear-to-br from-fuchsia-500/20 to-cyan-500/20 p-2 border border-fuchsia-400/30",children:(0,s.jsx)(oe,{src:r.imageSrc,alt:"",className:"w-full h-full object-contain",width:"80",height:"80"})}),(0,s.jsx)("span",{className:"text-sm font-medium text-center transition-colors duration-300 text-black/80 group-hover:text-black dark:text-white/80 dark:group-hover:text-white",children:r.title})]},r.title))},e)]})]})})},Oo=()=>(0,s.jsxs)("div",{className:"p-4 sm:p-6 lg:p-8",children:[(0,s.jsx)(ee,{id:"certificates-heading",className:"p-6",children:"Certificates"}),(0,s.jsx)("div",{className:"max-w-6xl mx-auto flex flex-wrap justify-center gap-6 sm:gap-8 text-center",children:So.map((e,t)=>(0,s.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":e.title,className:`rounded-lg ${O}`,children:(0,s.jsxs)(T.div,{className:`w-48 sm:w-56 lg:w-72 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 ${G} hover:bg-white/85 dark:hover:bg-[#241041]`,whileInView:{opacity:1,y:0},initial:{opacity:0,y:10},viewport:{once:!0},transition:{duration:.2,delay:t*.03},children:[(0,s.jsx)(oe,{src:e.imageSrc,alt:e.title,width:"128",height:"128",className:"mx-auto w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain select-none"}),(0,s.jsx)("h3",{className:`mt-4 text-lg sm:text-xl font-medium text-center line-clamp-2 ${me}`,children:e.title})]})},e.title))})]});function $o(e){return N({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"},child:[]}]})(e)}function zo(e){return N({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]},{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"},child:[]}]})(e)}var Bo=e=>{try{return new URL(e).hostname.replace(/^www\./,"")==="github.com"}catch{return!1}},Fo=({label:e,url:t,projectTitle:a})=>{const r=Bo(t)?$o:zo;return(0,s.jsxs)("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 select-none ${O} ${Ae}`,"aria-label":`${a} – ${e}`,children:[(0,s.jsx)("span",{children:e}),(0,s.jsx)(r,{className:"text-xl","aria-hidden":"true"})]})},Ho=()=>(0,s.jsxs)("div",{className:"py-8 sm:py-12",children:[(0,s.jsx)(ee,{id:"projects-heading",className:"mb-8 sm:mb-12",children:"My Projects"}),(0,s.jsx)("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 md:px-8",children:Co.map((e,t)=>(0,s.jsxs)(T.div,{className:`flex flex-col md:flex-row mb-10 sm:mb-12 shadow-lg rounded-lg p-6 ${G} ${t%2!==0?"md:flex-row-reverse":""}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:Zn,transition:{delay:t*.2},children:[(0,s.jsx)(T.div,{className:"w-full md:w-1/2 p-4 flex justify-center items-center",whileHover:{scale:1.1,rotate:2},transition:{duration:.3},children:(0,s.jsx)(oe,{src:e.imageSrc,alt:e.title,width:"240",height:"240",className:"w-48 h-48 sm:w-60 sm:h-60 object-contain rounded-lg shadow-2xl select-none"})}),(0,s.jsxs)("div",{className:"w-full md:w-1/2 p-4 flex flex-col justify-center",children:[(0,s.jsx)("h3",{className:"text-xl sm:text-2xl font-semibold mb-4",children:e.title}),(0,s.jsx)("p",{className:"mb-4",children:e.description}),(0,s.jsx)("ul",{className:"flex flex-wrap gap-2 mb-4","aria-label":`${e.title} technologies`,children:e.technologies.map(a=>(0,s.jsx)("li",{className:`text-sm ${ba}`,children:a},a))}),(0,s.jsx)("div",{className:"flex flex-wrap gap-4",children:e.links.map(a=>(0,s.jsx)(Fo,{label:a.label,url:a.url,projectTitle:e.title},a.url))})]})]},e.title))})]}),Vo=()=>(0,s.jsx)(pt,{title:"Languages",headingId:"languages-heading",children:(0,s.jsx)("div",{className:"grid gap-6 sm:grid-cols-3",children:jo.map(e=>(0,s.jsxs)(T.div,{className:`rounded-lg shadow-lg p-5 sm:p-6 text-center ${G}`,variants:F,children:[(0,s.jsx)("h3",{className:"text-lg sm:text-xl font-semibold",children:e.name}),(0,s.jsx)("p",{className:`text-sm sm:text-base mt-1 ${ht}`,children:e.proficiency})]},e.name))})});function wa(e){var t,a,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(a=wa(e[t]))&&(r&&(r+=" "),r+=a)}else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function q(){for(var e,t,a=0,r="",n=arguments.length;a<n;a++)(e=arguments[a])&&(t=wa(e))&&(r&&(r+=" "),r+=t);return r}var he=e=>typeof e=="number"&&!isNaN(e),K=e=>typeof e=="string",U=e=>typeof e=="function",Uo=e=>K(e)||he(e),rt=e=>K(e)||U(e)?e:null,Jo=(e,t)=>e===!1||he(e)&&e>0?e:t,nt=e=>(0,l.isValidElement)(e)||K(e)||U(e)||he(e);function Go(e,t,a=300){let{scrollHeight:r,style:n}=e;requestAnimationFrame(()=>{n.minHeight="initial",n.height=r+"px",n.transition=`all ${a}ms`,requestAnimationFrame(()=>{n.height="0",n.padding="0",n.margin="0",setTimeout(t,a)})})}function De({enter:e,exit:t,appendPosition:a=!1,collapse:r=!0,collapseDuration:n=300}){return function({children:o,position:i,preventExitTransition:c,done:d,nodeRef:u,isIn:f,playToast:m}){let g=a?`${e}--${i}`:e,w=a?`${t}--${i}`:t,y=(0,l.useRef)(0);return(0,l.useLayoutEffect)(()=>{let b=u.current,h=g.split(" "),v=p=>{p.target===u.current&&(m(),b.removeEventListener("animationend",v),b.removeEventListener("animationcancel",v),y.current===0&&p.type!=="animationcancel"&&b.classList.remove(...h))};b.classList.add(...h),b.addEventListener("animationend",v),b.addEventListener("animationcancel",v)},[]),(0,l.useEffect)(()=>{let b=u.current,h=()=>{b.removeEventListener("animationend",h),r?Go(b,d,n):d()};f||(c?h():(y.current=1,b.className+=` ${w}`,b.addEventListener("animationend",h)))},[f]),l.createElement(l.Fragment,null,o)}}function Ot(e,t){return{content:_a(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function _a(e,t,a=!1){return(0,l.isValidElement)(e)&&!K(e.type)?(0,l.cloneElement)(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:a}):U(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:a}):e}function Wo({closeToast:e,theme:t,ariaLabel:a="close"}){return l.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":a},l.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function qo({delay:e,isRunning:t,closeToast:a,type:r="default",hide:n,className:o,controlledProgress:i,progress:c,rtl:d,isIn:u,theme:f}){let m=n||i&&c===0,g={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};i&&(g.transform=`scaleX(${c})`);let w=q("Toastify__progress-bar",i?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":d}),y=U(o)?o({rtl:d,type:r,defaultClassName:w}):q(w,o),b={[i&&c>=1?"onTransitionEnd":"onAnimationEnd"]:i&&c<1?null:()=>{u&&a()}};return l.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":m},l.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${r}`}),l.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer","aria-valuenow":i?Math.round(c*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:y,style:g,...b}))}var Yo=1,ka=()=>`${Yo++}`;function Ko(e,t,a){let r=1,n=0,o=[],i=[],c=t,d=new Map,u=new Set,f=p=>(u.add(p),()=>u.delete(p)),m=()=>{i=Array.from(d.values()),u.forEach(p=>p())},g=({containerId:p,toastId:x,updateId:_})=>{let E=p?p!==e:e!==1,j=d.has(x)&&_==null;return E||j},w=(p,x)=>{d.forEach(_=>{var E;x!=null&&x!==_.props.toastId||(E=_.toggle)==null||E.call(_,p)})},y=p=>{var x,_;p.isActive&&((x=p.props)==null||(_=x.onClose)==null||_.call(x,p.removalReason),p.isActive=!1,a(Ot(p,"removed")))},b=p=>{if(p==null)d.forEach(y);else{let x=d.get(p);x&&y(x)}m()},h=()=>{n-=o.length,o=[]},v=p=>{var x,_;let{toastId:E,updateId:j}=p.props,k=j==null;p.staleId&&d.delete(p.staleId),p.isActive=!0,d.set(E,p),m(),a(Ot(p,k?"added":"updated")),k&&((x=(_=p.props).onOpen)==null||x.call(_))};return{id:e,props:c,observe:f,toggle:w,removeToast:b,toasts:d,clearQueue:h,buildToast:(p,x)=>{if(g(x))return;let{toastId:_,updateId:E,data:j,staleId:k,delay:C}=x,P=E==null;P&&n++;let A={...c,style:c.toastStyle,key:r++,...Object.fromEntries(Object.entries(x).filter(([Z,z])=>z!=null)),toastId:_,updateId:E,data:j,isIn:!1,className:rt(x.className||c.toastClassName),progressClassName:rt(x.progressClassName||c.progressClassName),autoClose:!x.isLoading&&Jo(x.autoClose,c.autoClose),closeToast(Z){let z=d.get(_);z&&(z.removalReason=Z,b(_))},deleteToast(){d.get(_)!=null&&(d.delete(_),n--,n<0&&(n=0),o.length>0?v(o.shift()):m())}};A.closeButton=c.closeButton,x.closeButton===!1||nt(x.closeButton)?A.closeButton=x.closeButton:x.closeButton===!0&&(A.closeButton=!nt(c.closeButton)||c.closeButton);let D={content:p,props:A,staleId:k};c.limit&&c.limit>0&&n>c.limit&&P?o.push(D):he(C)?setTimeout(()=>{v(D)},C):v(D)},setProps(p){c=p},setToggle:(p,x)=>{let _=d.get(p);_&&(_.toggle=x)},isToastActive:p=>{var x;return(x=d.get(p))==null?void 0:x.isActive},getSnapshot:()=>i}}var I=new Map,ie=[],ot=new Set,Qo=e=>ot.forEach(t=>t(e)),Ea=()=>I.size>0;function Xo(){ie.forEach(e=>Sa(e.content,e.options)),ie=[]}var Zo=(e,{containerId:t})=>{var a;return(a=I.get(t||1))==null?void 0:a.toasts.get(e)};function Ta(e,t){var a;if(t)return!!((a=I.get(t))!=null&&a.isToastActive(e));let r=!1;return I.forEach(n=>{n.isToastActive(e)&&(r=!0)}),r}function ei(e){if(!Ea())ie=ie.filter(t=>e!=null&&t.options.toastId!==e);else if(e==null||Uo(e))I.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=I.get(e.containerId);t?t.removeToast(e.id):I.forEach(a=>{a.removeToast(e.id)})}}var ti=(e={})=>{I.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function Sa(e,t){nt(e)&&(Ea()||ie.push({content:e,options:t}),I.forEach(a=>{a.buildToast(e,t)}))}function ai(e){var t;(t=I.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function $t(e,t){I.forEach(a=>{t!=null&&t!=null&&t.containerId&&t?.containerId!==a.id||a.toggle(e,t?.id)})}function ri(e){let t=e.containerId||1;return{subscribe(a){let r=Ko(t,e,Qo);I.set(t,r);let n=r.observe(a);return Xo(),()=>{n(),I.delete(t)}},setProps(a){var r;(r=I.get(t))==null||r.setProps(a)},getSnapshot(){var a;return(a=I.get(t))==null?void 0:a.getSnapshot()}}}function ni(e){return ot.add(e),()=>{ot.delete(e)}}function oi(e){return e&&(K(e.toastId)||he(e.toastId))?e.toastId:ka()}function pe(e,t){return Sa(e,t),t.toastId}function Me(e,t){return{...t,type:t&&t.type||e,toastId:oi(t)}}function xe(e){return(t,a)=>pe(t,Me(e,a))}function S(e,t){return pe(e,Me("default",t))}S.loading=(e,t)=>pe(e,Me("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function ii(e,{pending:t,error:a,success:r},n){let o;t&&(o=K(t)?S.loading(t,n):S.loading(t.render,{...n,...t}));let i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(u,f,m)=>{if(f==null){S.dismiss(o);return}let g={type:u,...i,...n,data:m},w=K(f)?{render:f}:f;return o?S.update(o,{...g,...w}):S(w.render,{...g,...w}),m},d=U(e)?e():e;return d.then(u=>c("success",r,u)).catch(u=>c("error",a,u)),d}S.promise=ii,S.success=xe("success"),S.info=xe("info"),S.error=xe("error"),S.warning=xe("warning"),S.warn=S.warning,S.dark=(e,t)=>pe(e,Me("default",{theme:"dark",...t}));function si(e){ei(e)}S.dismiss=si,S.clearWaitingQueue=ti,S.isActive=Ta,S.update=(e,t={})=>{let a=Zo(e,t);if(a){let{props:r,content:n}=a,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:ka()};o.toastId!==e&&(o.staleId=e);let i=o.render||n;delete o.render,pe(i,o)}},S.done=e=>{S.update(e,{progress:1})},S.onChange=ni,S.play=e=>$t(!0,e),S.pause=e=>$t(!1,e);function li(e){var t;let{subscribe:a,getSnapshot:r,setProps:n}=(0,l.useRef)(ri(e)).current;n(e);let o=(t=(0,l.useSyncExternalStore)(a,r,r))==null?void 0:t.slice();function i(c){if(!o)return[];let d=new Map;return e.newestOnTop&&o.reverse(),o.forEach(u=>{let{position:f}=u.props;d.has(f)||d.set(f,[]),d.get(f).push(u)}),Array.from(d,u=>c(u[0],u[1]))}return{getToastToRender:i,isToastActive:Ta,count:o?.length}}function ci(e){let[t,a]=(0,l.useState)(!1),[r,n]=(0,l.useState)(!1),o=(0,l.useRef)(null),i=(0,l.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:c,pauseOnHover:d,closeToast:u,onClick:f,closeOnClick:m}=e;ai({id:e.toastId,containerId:e.containerId,fn:a}),(0,l.useEffect)(()=>{if(e.pauseOnFocusLoss)return g(),()=>{w()}},[e.pauseOnFocusLoss]);function g(){document.hasFocus()||v(),window.addEventListener("focus",h),window.addEventListener("blur",v)}function w(){window.removeEventListener("focus",h),window.removeEventListener("blur",v)}function y(k){if(e.draggable===!0||e.draggable===k.pointerType){p();let C=o.current;i.canCloseOnClick=!0,i.canDrag=!0,C.style.transition="none",e.draggableDirection==="x"?(i.start=k.clientX,i.removalDistance=C.offsetWidth*(e.draggablePercent/100)):(i.start=k.clientY,i.removalDistance=C.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function b(k){let{top:C,bottom:P,left:A,right:D}=o.current.getBoundingClientRect();k.pointerType==="mouse"&&e.pauseOnHover&&k.clientX>=A&&k.clientX<=D&&k.clientY>=C&&k.clientY<=P?v():h()}function h(){a(!0)}function v(){a(!1)}function p(){i.didMove=!1,document.addEventListener("pointermove",_),document.addEventListener("pointerup",E)}function x(){document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",E)}function _(k){let C=o.current;if(i.canDrag&&C){i.didMove=!0,t&&v(),e.draggableDirection==="x"?i.delta=k.clientX-i.start:i.delta=k.clientY-i.start,i.start!==k.clientX&&(i.canCloseOnClick=!1);let P=e.draggableDirection==="x"?`${i.delta}px, var(--y)`:`0, calc(${i.delta}px + var(--y))`;C.style.transform=`translate3d(${P},0)`,C.style.opacity=`${1-Math.abs(i.delta/i.removalDistance)}`}}function E(){x();let k=o.current;if(i.canDrag&&i.didMove&&k){if(i.canDrag=!1,Math.abs(i.delta)>i.removalDistance){n(!0),e.closeToast(!0),e.collapseAll();return}k.style.transition="transform 0.2s, opacity 0.2s",k.style.removeProperty("transform"),k.style.removeProperty("opacity")}}let j={onPointerDown:y,onPointerUp:b};return c&&d&&(j.onMouseEnter=v,e.stacked||(j.onMouseLeave=h)),m&&(j.onClick=k=>{f&&f(k),i.canCloseOnClick&&u(!0)}),{playToast:h,pauseToast:v,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:j}}var Ca=typeof window<"u"?l.useLayoutEffect:l.useEffect,Oe=({theme:e,type:t,isLoading:a,...r})=>l.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function di(e){return l.createElement(Oe,e,l.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function ui(e){return l.createElement(Oe,e,l.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function fi(e){return l.createElement(Oe,e,l.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function mi(e){return l.createElement(Oe,e,l.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function hi(){return l.createElement("div",{className:"Toastify__spinner"})}var it={info:ui,warning:di,success:fi,error:mi,spinner:hi},pi=e=>e in it;function gi({theme:e,type:t,isLoading:a,icon:r}){let n=null,o={theme:e,type:t};return r===!1||(U(r)?n=r({...o,isLoading:a}):(0,l.isValidElement)(r)?n=(0,l.cloneElement)(r,o):a?n=it.spinner():pi(t)&&(n=it[t](o))),n}var $e=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),vi=({children:e,isIn:t,done:a,playToast:r})=>((0,l.useLayoutEffect)(()=>{r()},[]),(0,l.useEffect)(()=>{t||a()},[t]),l.createElement(l.Fragment,null,e)),yi=De($e("bounce",!0)),ss=De($e("slide",!0)),ls=De($e("zoom")),cs=De($e("flip")),xi=e=>{let{isRunning:t,preventExitTransition:a,toastRef:r,eventHandlers:n,playToast:o}=ci(e),{closeButton:i,children:c,autoClose:d,onClick:u,type:f,hideProgressBar:m,closeToast:g,transition:w,position:y,className:b,style:h,progressClassName:v,updateId:p,role:x,progress:_,rtl:E,toastId:j,deleteToast:k,isIn:C,isLoading:P,closeOnClick:A,theme:D,ariaLabel:Z}=e,z=q("Toastify__toast",`Toastify__toast-theme--${D}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":A}),ge=U(b)?b({rtl:E,position:y,type:f,defaultClassName:z}):q(z,b),te=gi(e),B=w||vi,gt=!!_||!d,Be={closeToast:g,type:f,theme:D},vt=null;return i===!1||(vt=U(i)?i(Be):(0,l.isValidElement)(i)?(0,l.cloneElement)(i,Be):Wo(Be)),l.createElement(B,{isIn:C,done:k,position:y,preventExitTransition:a,nodeRef:r,playToast:o},l.createElement("div",{id:j,tabIndex:0,onClick:u,"data-in":C,className:ge,...n,style:h,ref:r,...C&&{role:x,"aria-label":Z}},te!=null&&l.createElement("div",{className:q("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},te),_a(c,e,!t),vt,!e.customProgressBar&&l.createElement(qo,{...p&&!gt?{key:`p-${p}`}:{},rtl:E,theme:D,delay:d,isRunning:t,isIn:C,closeToast:g,hide:m,type:f,className:v,controlledProgress:gt,progress:_||0})))},bi={position:"top-right",transition:yi,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function wi(e){let t={...bi,...e},a=e.stacked,[r,n]=(0,l.useState)(!0),o=(0,l.useRef)(null),{getToastToRender:i,isToastActive:c,count:d}=li(t),{className:u,style:f,rtl:m,containerId:g,hotKeys:w}=t;function y(h){let v=q("Toastify__toast-container",`Toastify__toast-container--${h}`,{"Toastify__toast-container--rtl":m});return U(u)?u({position:h,rtl:m,defaultClassName:v}):q(v,rt(u))}function b(){a&&(n(!0),S.play())}return Ca(()=>{if(a){var h;let v=o.current.querySelectorAll('[data-in="true"]'),p=(h=t.position)==null?void 0:h.includes("top"),x=0,_=0;Array.from(v).reverse().forEach((E,j)=>{let k=E;k.classList.add("Toastify__toast--stacked"),j>0&&(k.dataset.collapsed=`${r}`),k.dataset.pos||(k.dataset.pos=p?"top":"bot");let C=x*(r?.2:1)+(r?0:12*j),P=Math.max(.5,1-(r?_:0));k.style.setProperty("--y",`${p?C:C*-1}px`),k.style.setProperty("--g","12"),k.style.setProperty("--s",`${P}`),x+=k.offsetHeight,_+=.025})}},[r,d,a]),(0,l.useEffect)(()=>{function h(v){let p=o.current;if(w(v)){var x;p==null||(x=p.querySelector('[tabIndex="0"]'))==null||x.focus(),n(!1),S.pause()}v.key==="Escape"&&(document.activeElement===p||p!=null&&p.contains(document.activeElement))&&(n(!0),S.play())}return document.addEventListener("keydown",h),()=>{document.removeEventListener("keydown",h)}},[w]),l.createElement("section",{ref:o,className:"Toastify",id:g,onMouseEnter:()=>{a&&(n(!1),S.pause())},onMouseLeave:b,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},i((h,v)=>{let p=v.length?{...f}:{...f,pointerEvents:"none"};return l.createElement("div",{tabIndex:-1,className:y(h),"data-stacked":a,style:p,key:`c-${h}`},v.map(({content:x,props:_})=>l.createElement(xi,{..._,stacked:a,collapseAll:b,isIn:c(_.toastId,_.containerId),key:`t-${_.key}`},x)))}))}var _i=`:root {
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

.Toastify__toast-theme--auto {
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

.Toastify__progress-bar-theme--auto {
  background: var(--toastify-color-progress-light);
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

.Toastify__close-button--auto {
  color: #000;
  opacity: 0.3;
}

@media (prefers-color-scheme: dark) {
  .Toastify__toast-theme--auto {
    background: var(--toastify-color-dark);
    color: var(--toastify-text-color-dark);
  }

  .Toastify__progress-bar-theme--auto {
    background: var(--toastify-color-progress-dark);
  }

  .Toastify__close-button--auto {
    color: #fff;
    opacity: 0.7;
  }
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
`,zt=new Map,ki=(e,t,a=!1)=>{Ca(()=>{if(!e||typeof document>"u")return;let r=document,n=zt.get(r);if(n){t&&n.setAttribute("nonce",t);return}let o=r.createElement("style");o.textContent=e,t&&o.setAttribute("nonce",t),a?r.head.appendChild(o):r.head.prepend(o),zt.set(r,o)},[t])};function Ei(e){return ki(_i,e.nonce,e.appendStyleSheet),l.createElement(wi,e)}var ne={emailjs:{serviceId:"service_2936zzf",templateId:"template_q859oph",publicKey:"YDO5GNDdewVvMoyTz"},recaptcha:{siteKey:"6LeJDrIqAAAAAAJz4msjc88QwwlPf-Qge27d_t7a"},contact:{email:"atrenchevski@gmail.com"}},Ti=()=>{const e=["VITE_CONTACT_EMAIL","VITE_EMAILJS_SERVICE_ID","VITE_EMAILJS_TEMPLATE_ID","VITE_EMAILJS_PUBLIC_KEY","VITE_RECAPTCHA_SITE_KEY"].filter(t=>!{BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_CONTACT_EMAIL:"atrenchevski@gmail.com",VITE_EMAILJS_PUBLIC_KEY:"YDO5GNDdewVvMoyTz",VITE_EMAILJS_SERVICE_ID:"service_2936zzf",VITE_EMAILJS_TEMPLATE_ID:"template_q859oph",VITE_RECAPTCHA_SITE_KEY:"6LeJDrIqAAAAAAJz4msjc88QwwlPf-Qge27d_t7a"}[t]);if(e.length>0){const t=`Missing required environment variables: ${e.join(", ")}. Please check your .env file.`;if(typeof window<"u")throw new Error(t);console.warn(t)}},Si=(e={})=>{const{threshold:t=.1,rootMargin:a="0px",triggerOnce:r=!0}=e,[n,o]=(0,l.useState)(!1),i=(0,l.useRef)(null);return(0,l.useEffect)(()=>{const c=i.current;if(!c)return;const d=new IntersectionObserver(([u])=>{u&&(u.isIntersecting?(o(!0),r&&d.disconnect()):r||o(!1))},{threshold:t,rootMargin:a});return d.observe(c),()=>d.disconnect()},[t,a,r]),{ref:i,isIntersecting:n}},Ci=(function(){const t=typeof document<"u"&&document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"})(),ji=function(e){return"/"+e},Ri={},Ni=function(t){return t.pathname.endsWith(".css")},Pi=function(t,a,r){if(a in t)return t[a];const n=r();if(!n){t[a]=void 0;return}const o=n.then(()=>{t[a]=void 0},i=>{throw t[a]=void 0,i});return t[a]=o,o},ze=function(t,a,r){let n=Promise.resolve();if(a&&a.length>0){let u=function(m){return Promise.all(m.map(g=>Promise.resolve(g).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))},f=function(m){return import.meta.resolve?new URL(import.meta.resolve(m)):new URL(m,import.meta.url)},i;const c=document.querySelector("meta[property=csp-nonce]"),d=c?.nonce||c?.getAttribute("nonce");n=u(a.map(m=>{m=ji(m,r);const g=f(m),w=Ni(g);return Pi(Ri,g.href,()=>{if(i===void 0){i={all:new Set,styles:new Set};const b=document.getElementsByTagName("link");for(let h=b.length-1;h>=0;h--){const v=b[h];i.all.add(v.href),v.rel==="stylesheet"&&i.styles.add(v.href)}}if((w?i.styles:i.all).has(g.href))return;const y=document.createElement("link");if(y.rel=w?"stylesheet":Ci,w||(y.as="script"),y.crossOrigin="",y.href=g.href,d&&y.setAttribute("nonce",d),document.head.appendChild(y),w)return new Promise((b,h)=>{const v=p=>{y.removeEventListener("load",v),y.removeEventListener("error",v),p.type==="error"?h(new Error(`Unable to preload CSS for ${g}`)):b(p)};y.addEventListener("load",v),y.addEventListener("error",v)})})}).filter(m=>m!==void 0))}function o(i){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=i,window.dispatchEvent(c),!c.defaultPrevented)throw i}return n.then(i=>{for(const c of i||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})},Bt="flex items-center justify-center text-sm text-center text-gray-600 dark:text-white/70",Ii=({onChange:e,theme:t="dark",widgetRef:a})=>{const r=ne.recaptcha.siteKey,[n,o]=(0,l.useState)(null),{ref:i,isIntersecting:c}=Si({rootMargin:"100px",triggerOnce:!0,threshold:.01});return(0,l.useEffect)(()=>{!r||!c||n||(async()=>{try{const d=await ze(()=>import("./esm-BPlRokBD.js"),__vite__mapDeps([0,1,2]));o(()=>d.default)}catch(d){console.error("Failed to load reCAPTCHA:",d)}})()},[r,c,n]),(0,s.jsx)("div",{ref:i,className:"flex flex-col items-center justify-center min-h-19.5",children:r?n?(0,s.jsx)(n,{ref:a,sitekey:r,onChange:e,theme:t}):(0,s.jsx)("div",{className:Bt,children:"Loading verification..."}):(0,s.jsx)("div",{className:Bt,children:"Verification is unavailable right now."})})},Li=200,We=({id:e,label:t,icon:a,value:r,error:n,onChange:o,type:i="text",maxLength:c})=>{const d={id:e,name:e,value:r,onChange:o,required:!0,"aria-invalid":n?!0:void 0,"aria-describedby":n?`${e}-error`:void 0},u=`w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${ro(!!n)}`,f=c===void 0?0:c-r.length;return(0,s.jsxs)(T.div,{className:"mb-4 sm:mb-6",variants:V,children:[(0,s.jsxs)("label",{htmlFor:e,className:`flex items-center text-sm sm:text-base font-semibold mb-2 ${mt}`,children:[a,t]}),c===void 0?(0,s.jsx)("input",{type:i,className:u,...d}):(0,s.jsx)("textarea",{maxLength:c,className:`${u} h-24 sm:h-32`,...d}),(0,s.jsxs)("div",{className:"mt-1 flex items-center justify-between gap-2",children:[n?(0,s.jsx)("p",{id:`${e}-error`,className:"text-red-500 text-sm",role:"alert",children:n}):(0,s.jsx)("span",{}),c!==void 0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("span",{className:"text-xs text-gray-500 dark:text-gray-300","aria-hidden":"true",children:[r.length,"/",c]}),(0,s.jsx)("span",{className:"sr-only","aria-live":"polite",children:f<=Li?`${f} characters left`:""})]})]})]})};Ti();var qe={serviceId:ne.emailjs.serviceId,templateId:ne.emailjs.templateId,publicKey:ne.emailjs.publicKey},Ai=async(e,t)=>{try{const{default:a}=await ze(async()=>{const{default:r}=await import("./esm-0hu2XJzs.js");return{default:r}},[]);return{success:!0,data:await a.send(qe.serviceId,qe.templateId,{name:e.name,email:e.email,message:e.message,to_name:W.name,to_email:ne.contact.email,"g-recaptcha-response":t},qe.publicKey)}}catch(a){const r=a instanceof Error?a.message:"Failed to send email";return console.error("Email send error:",a),{success:!1,error:r}}},ja=()=>({position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),be=e=>{S.error(e,ja())},Di=e=>{S.success(e,ja())},Ra=5e3,Ft=2,Ht=10,Mi=254,Vt={name:"",email:"",message:""},Oi=({name:e,email:t,message:a})=>{const r={},n=e.trim(),o=t.trim(),i=a.trim();return n?n.length<Ft&&(r.name=`Name must be at least ${Ft} characters`):r.name="Name is required",o?(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)||o.length>Mi)&&(r.email="Please enter a valid email address"):r.email="Email is required",i?i.length<Ht?r.message=`Message must be at least ${Ht} characters`:i.length>5e3&&(r.message=`Message cannot exceed ${Ra} characters`):r.message="Message is required",r},$i=()=>{const[e,t]=(0,l.useState)(Vt),[a,r]=(0,l.useState)({}),[n,o]=(0,l.useState)(!1),[i,c]=(0,l.useState)(!1),[d,u]=(0,l.useState)(null),f=(0,l.useRef)(null),m=b=>{const h=b.target.name,{value:v}=b.target;t(p=>({...p,[h]:v})),a[h]&&r(p=>{const x={...p};return delete x[h],x})},g=()=>{f.current?.reset(),u(null)};return{formData:e,errors:a,submitted:n,isSubmitting:i,recaptchaRef:f,handleInputChange:m,handleCaptchaChange:u,handleSubmit:async b=>{b.preventDefault();const h=Oi(e);if(r(h),Object.keys(h).length>0){be("Please fix the form errors before submitting.");return}if(!d){be("Please complete the CAPTCHA to proceed.");return}c(!0);try{const v=await Ai(e,d);v.success?(o(!0),Di("Message sent successfully! I'll get back to you soon.")):(g(),be(`Failed to send message: ${v.error}. Please try again later, or reach me on LinkedIn.`))}catch(v){console.error("Form submission error:",v),g(),be("An unexpected error occurred. Please try again.")}finally{c(!1)}},handleReset:()=>{t(Vt),r({}),g(),o(!1)}}},Ye="text-gray-500 mr-2 text-lg",zi=({onReset:e})=>(0,s.jsxs)(T.div,{className:"text-center p-4 sm:p-6 rounded-lg shadow-md max-w-md mx-auto flex flex-col items-center justify-center bg-green-50 border-green-400 dark:bg-green-900 dark:border-green-600",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5},role:"status","aria-live":"polite",children:[(0,s.jsx)(Wn,{className:"text-4xl mb-4 text-green-500 dark:text-green-400","aria-hidden":"true"}),(0,s.jsx)("span",{className:`text-base sm:text-lg font-semibold mb-2 ${me}`,children:"Thank you! Your message has been sent successfully."}),(0,s.jsx)("button",{type:"button",onClick:e,className:`mt-4 px-6 py-2 rounded-full font-semibold transition cursor-pointer ${O} ${xa}`,children:"Send another message"})]}),Bi=()=>{const{darkMode:e}=pa(),t=e?"dark":"light",{formData:a,errors:r,submitted:n,isSubmitting:o,recaptchaRef:i,handleInputChange:c,handleCaptchaChange:d,handleSubmit:u,handleReset:f}=$i();return(0,s.jsxs)(T.div,{className:`p-6 sm:p-8 md:p-10 lg:p-16 rounded-lg shadow-lg max-w-4xl mx-auto my-8 md:my-12 ${G}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{staggerChildren:.2},children:[(0,s.jsx)(Ei,{theme:t}),(0,s.jsx)(ee,{id:"contact-heading",className:"mb-6 sm:mb-8",animated:!0,variants:V,children:"Get In Touch"}),(0,s.jsx)(T.p,{className:"text-base sm:text-lg lg:text-xl text-center max-w-2xl mx-auto mb-8 sm:mb-10 text-gray-700 dark:text-white/85",variants:V,children:"Have a question or a project in mind? Fill out the form below and I'll get back to you as soon as I can."}),n?(0,s.jsx)(zi,{onReset:f}):(0,s.jsxs)(T.form,{onSubmit:m=>{u(m)},className:"max-w-lg w-full p-6 sm:p-8 rounded-lg shadow-md mx-auto bg-white dark:bg-[#160a2e] dark:text-white dark:border dark:border-cyan-500/15",initial:"hidden",animate:"visible",variants:V,noValidate:!0,children:[(0,s.jsx)(We,{id:"name",label:"Your Name",icon:(0,s.jsx)(Fn,{className:Ye,"aria-hidden":"true"}),value:a.name,error:r.name,onChange:c}),(0,s.jsx)(We,{id:"email",label:"Your Email",icon:(0,s.jsx)(Un,{className:Ye,"aria-hidden":"true"}),type:"email",value:a.email,error:r.email,onChange:c}),(0,s.jsx)(We,{id:"message",label:"Your Message",icon:(0,s.jsx)(Gn,{className:Ye,"aria-hidden":"true"}),value:a.message,error:r.message,onChange:c,maxLength:Ra}),(0,s.jsxs)(T.div,{className:"flex flex-col items-center justify-center",variants:V,children:[(0,s.jsx)(Ii,{widgetRef:i,onChange:d,theme:t}),(0,s.jsxs)(T.button,{type:"submit",disabled:o,className:`mt-6 px-6 py-3 rounded-full font-semibold transition flex items-center justify-center space-x-2 select-none ${O} ${o?no:`${Ae} cursor-pointer`}`,variants:V,"aria-busy":o,children:[o&&(0,s.jsx)(T.div,{className:"w-4 h-4 border-2 border-current border-t-transparent rounded-full",animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},"aria-hidden":"true"}),(0,s.jsx)("span",{children:o?"Sending...":"Send Message"})]})]})]})]})},Fi=()=>{const[e,t]=(0,l.useState)(!1),a=(0,l.useRef)(null),r=()=>{a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{t(window.scrollY>100)},150)},n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(0,l.useEffect)(()=>(window.addEventListener("scroll",r,{passive:!0}),()=>{window.removeEventListener("scroll",r),a.current&&clearTimeout(a.current)}),[]),(0,s.jsx)(Ke,{children:e&&(0,s.jsx)(T.button,{onClick:n,className:"fixed bottom-8 right-6 sm:bottom-10 sm:right-8 md:bottom-12 md:right-10 lg:bottom-16 lg:right-10 text-[#0d0221] rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-600 focus-visible:ring-offset-2 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-[#0d0221]",title:"Back to Top","aria-label":"Back to top",initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},transition:{type:"spring",stiffness:300,damping:20},style:{background:"var(--accent)"},whileHover:{scale:1.2},children:(0,s.jsx)(qn,{"aria-hidden":"true"})})})};function Hi(e){return N({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(e)}function Vi(e){return N({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"},child:[]}]})(e)}function Ui(e){return N({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"},child:[]}]})(e)}var Ji=()=>(0,s.jsxs)("footer",{className:`p-4 text-center ${me}`,children:[(0,s.jsxs)("p",{className:"text-xs sm:text-base",children:["© ",W.name," ",new Date().getFullYear(),". All rights reserved."]}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("span",{className:"text-xs sm:text-sm",children:"Built with:"}),(0,s.jsxs)("div",{className:"flex justify-center items-center mt-2 space-x-2 sm:space-x-4 text-xs sm:text-sm",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,s.jsx)($n,{className:"text-blue-500"}),(0,s.jsx)("span",{children:"React"})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,s.jsx)(Vi,{className:"text-blue-400"}),(0,s.jsx)("span",{children:"Tailwind CSS"})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,s.jsx)(Ui,{className:"text-pink-500"}),(0,s.jsx)("span",{children:"Motion"})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,s.jsx)(Hi,{className:"text-blue-600"}),(0,s.jsx)("span",{children:"TypeScript"})]})]})]})]}),Gi=[{id:"home",Component:ho},{id:"about",Component:go},{id:"experience",Component:Io},{id:"education",Component:Lo},{id:"skills",Component:Mo},{id:"certificates",Component:Oo},{id:"projects",Component:Ho},{id:"languages",Component:Vo},{id:"contact",Component:Bi}],Wi=()=>(0,s.jsxs)("div",{className:oo,children:[(0,s.jsx)("a",{href:"#home",className:"sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-black focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400",children:"Skip to content"}),(0,s.jsx)(so,{}),Gi.map(({id:e,Component:t})=>(0,s.jsx)("section",{id:e,"aria-labelledby":`${e}-heading`,className:"p-8",children:(0,s.jsx)(t,{})},e)),(0,s.jsx)(Fi,{}),(0,s.jsx)(Ji,{})]}),qi=class extends l.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("Error caught by Error Boundary:",e,t)}handleReset=()=>{this.setState({hasError:!1,error:null})};render(){return this.state.hasError?(0,s.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-linear-to-r from-red-500 to-red-700 p-4",role:"alert","aria-live":"assertive",children:(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold text-red-600 mb-4",children:"Oops! Something went wrong"}),(0,s.jsx)("p",{className:"text-gray-600 mb-4",children:"We're sorry for the inconvenience. Please try refreshing the page or contact support if the problem persists."}),this.state.error&&(0,s.jsxs)("details",{className:"text-left mb-6",children:[(0,s.jsx)("summary",{className:"cursor-pointer text-sm text-gray-500 hover:text-gray-700",children:"Error details"}),(0,s.jsx)("pre",{className:"mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto max-h-32",children:this.state.error.toString()})]}),(0,s.jsx)("button",{onClick:this.handleReset,className:"bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition",children:"Try Again"})]})}):this.props.children}},Yi=(0,l.lazy)(()=>ze(()=>import("./NotFound-DTo_zjik.js"),__vite__mapDeps([3,2,1]))),Ki=(0,l.lazy)(()=>ze(()=>import("./Cv-D93X5dpw.js"),__vite__mapDeps([4,2,1]))),Qi=()=>(0,s.jsx)(qi,{children:(0,s.jsx)(Da,{reducedMotion:"user",children:(0,s.jsx)(La,{features:Oa,strict:!0,children:(0,s.jsx)(Ba,{children:(0,s.jsx)(vn,{children:(0,s.jsx)("div",{className:"App",children:(0,s.jsx)(l.Suspense,{fallback:null,children:(0,s.jsxs)(sn,{children:[(0,s.jsx)(we,{path:"/",element:(0,s.jsx)(Wi,{})}),(0,s.jsx)(we,{path:"/cv",element:(0,s.jsx)(Ki,{})}),(0,s.jsx)(we,{path:"*",element:(0,s.jsx)(Yi,{})})]})})})})})})})}),Na=document.getElementById("root");if(!Na)throw new Error("index.html is missing the #root element");(0,za.createRoot)(Na).render((0,s.jsx)(l.StrictMode,{children:(0,s.jsx)(Qi,{})}));export{is as _,jo as a,po as c,O as d,oo as f,Qn as g,W as h,Eo as i,ht as l,Nt as m,So as n,At as o,Ae as p,To as r,Dt as s,Ro as t,G as u,Jn as v,Te as y};
