const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/esm-uhhtIFB7.js","assets/rolldown-runtime-W-g5d7YK.js","assets/motion-BSFg4EIn.js","assets/NotFound-CH_S4F1s.js"])))=>i.map(i=>d[i]);
import{a as ua}from"./rolldown-runtime-W-g5d7YK.js";import{t as da}from"./react-DRaUvBpJ.js";import{a as ma,i as Ae,n as fa,o as ha,r as pa,t as E}from"./motion-BSFg4EIn.js";var ga=da(),l=ua(ha(),1),_t=(0,l.createContext)(void 0),i=ma(),ya=({children:e})=>{const[t,a]=(0,l.useState)(()=>{if(typeof window>"u")return!1;try{const o=localStorage.getItem("darkMode");if(o!==null)return JSON.parse(o)===!0}catch(o){console.error("Error parsing saved theme:",o)}return window.matchMedia("(prefers-color-scheme: dark)").matches}),r=(0,l.useCallback)(()=>{a(o=>(localStorage.setItem("darkMode",JSON.stringify(!o)),!o))},[]),n=(0,l.useMemo)(()=>({darkMode:t,toggleDarkMode:r}),[t,r]);return(0,i.jsx)(_t.Provider,{value:n,children:(0,i.jsx)("div",{className:t?"dark":"",children:e})})},qe=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,kt=/^[\\/]{2}/;function xa(e,t){return t+e.replace(/\\/g,"/")}var st="popstate";function it(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function va(e={}){function t(r,n){let o=n.state?.masked,{pathname:s,search:c,hash:u}=o||r.location;return De("",{pathname:s,search:c,hash:u},n.state&&n.state.usr||null,n.state&&n.state.key||"default",o?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function a(r,n){return typeof n=="string"?n:re(n)}return wa(t,a,null,e)}function R(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function U(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ba(){return Math.random().toString(36).substring(2,10)}function lt(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function De(e,t,a=null,r,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Q(t):t,state:a,key:t&&t.key||r||ba(),mask:n}}function re({pathname:e="/",search:t="",hash:a=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function Q(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substring(a),e=e.substring(0,a));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function wa(e,t,a,r={}){let{window:n=document.defaultView,v5Compat:o=!1}=r,s=n.history,c="POP",u=null,d=m();d==null&&(d=0,s.replaceState({...s.state,idx:d},""));function m(){return(s.state||{idx:null}).idx}function f(){c="POP";let y=m(),w=y==null?null:y-d;d=y,u&&u({action:c,location:b.location,delta:w})}function h(y,w){c="PUSH";let p=it(y)?y:De(b.location,y,w);a&&a(p,y),d=m()+1;let x=lt(p,d),_=b.createHref(p.mask||p);try{s.pushState(x,"",_)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;n.location.assign(_)}o&&u&&u({action:c,location:b.location,delta:1})}function g(y,w){c="REPLACE";let p=it(y)?y:De(b.location,y,w);a&&a(p,y),d=m();let x=lt(p,d),_=b.createHref(p.mask||p);s.replaceState(x,"",_),o&&u&&u({action:c,location:b.location,delta:0})}function v(y){return _a(n,y)}let b={get action(){return c},get location(){return e(n,s)},listen(y){if(u)throw new Error("A history only accepts one active listener");return n.addEventListener(st,f),u=y,()=>{n.removeEventListener(st,f),u=null}},createHref(y){return t(n,y)},createURL:v,encodeLocation(y){let w=v(y);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:h,replace:g,go(y){return s.go(y)}};return b}function _a(e,t,a=!1){let r="http://localhost";e&&(r=e.location.origin!=="null"?e.location.origin:e.location.href),R(r,"No window.location.(origin|href) available to create URL");let n=typeof t=="string"?t:re(t);return n=n.replace(/ $/,"%20"),!a&&kt.test(n)&&(n=r+n),new URL(n,r)}function Et(e,t,a="/"){return ka(e,t,a,!1)}function ka(e,t,a,r,n){let o=J((typeof t=="string"?Q(t):t).pathname||"/",a);if(o==null)return null;let s=n??Ta(e),c=null,u=Da(o);for(let d=0;c==null&&d<s.length;++d)c=Aa(s[d],u,r);return c}function Ea(e,t){let{route:a,pathname:r,params:n}=e;return{id:a.id,pathname:r,params:n,loaderData:t[a.id],handle:a.handle}}function Ta(e){let t=Tt(e);return Sa(t),t}function Tt(e,t=[],a=[],r="",n=!1){let o=(s,c,u=n,d)=>{let m={relativePath:d===void 0?s.path||"":d,caseSensitive:s.caseSensitive===!0,childrenIndex:c,route:s};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(r)&&u)return;R(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length)}let f=B([r,m.relativePath]),h=a.concat(m);s.children&&s.children.length>0&&(R(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),Tt(s.children,t,h,f,u)),!(s.path==null&&!s.index)&&t.push({path:f,score:La(f,s.index),routesMeta:h.map((g,v)=>{let[b,y]=Ct(g.relativePath,g.caseSensitive,v===h.length-1);return{...g,matcher:b,compiledParams:y}})})};return e.forEach((s,c)=>{if(s.path===""||!s.path?.includes("?"))o(s,c);else for(let u of St(s.path))o(s,c,!0,u)}),t}function St(e){let t=e.split("/");if(t.length===0)return[];let[a,...r]=t,n=a.endsWith("?"),o=a.replace(/\?$/,"");if(r.length===0)return n?[o,""]:[o];let s=St(r.join("/")),c=[];return c.push(...s.map(u=>u===""?o:[o,u].join("/"))),n&&c.push(...s),c.map(u=>e.startsWith("/")&&u===""?"/":u)}function Sa(e){e.sort((t,a)=>t.score!==a.score?a.score-t.score:Ma(t.routesMeta.map(r=>r.childrenIndex),a.routesMeta.map(r=>r.childrenIndex)))}var ja=/^:[\w-]+$/,Ca=3,Ra=2,Na=1,Pa=10,Ia=-2,ct=e=>e==="*";function La(e,t){let a=e.split("/"),r=a.length;return a.some(ct)&&(r+=Ia),t&&(r+=Ra),a.filter(n=>!ct(n)).reduce((n,o)=>n+(ja.test(o)?Ca:o===""?Na:Pa),r)}function Ma(e,t){return e.length===t.length&&e.slice(0,-1).every((a,r)=>a===t[r])?e[e.length-1]-t[t.length-1]:0}function Aa(e,t,a=!1){let{routesMeta:r}=e,n={},o="/",s=[];for(let c=0;c<r.length;++c){let u=r[c],d=c===r.length-1,m=o==="/"?t:t.slice(o.length)||"/",f={path:u.relativePath,caseSensitive:u.caseSensitive,end:d},h=u.matcher&&u.compiledParams?jt(f,m,u.matcher,u.compiledParams):xe(f,m),g=u.route;if(!h&&d&&a&&!r[r.length-1].route.index&&(h=xe({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},m)),!h)return null;Object.assign(n,h.params),s.push({params:n,pathname:B([o,h.pathname]),pathnameBase:za(B([o,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(o=B([o,h.pathnameBase]))}return s}function xe(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,r]=Ct(e.path,e.caseSensitive,e.end);return jt(e,t,a,r)}function jt(e,t,a,r){let n=t.match(a);if(!n)return null;let o=n[0],s=o.replace(/(.)\/+$/,"$1"),c=n.slice(1);return{params:r.reduce((u,{paramName:d,isOptional:m},f)=>{if(d==="*"){let g=c[f]||"";s=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}const h=c[f];return m&&!h?u[d]=void 0:u[d]=(h||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Ct(e,t=!1,a=!0){U(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,c,u,d)=>{if(r.push({paramName:s,isOptional:c!=null}),c){let m=d.charAt(u+o.length);return m&&m!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,t?void 0:"i"),r]}function Da(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return U(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function J(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,r=e.charAt(a);return r&&r!=="/"?null:e.slice(a)||"/"}function $a(e,t="/"){let{pathname:a,search:r="",hash:n=""}=typeof e=="string"?Q(e):e,o;return a?(a=Nt(a),a.startsWith("/")?o=ut(a.substring(1),"/"):o=ut(a,t)):o=t,{pathname:o,search:Ba(r),hash:Fa(n)}}function ut(e,t){let a=Pt(t).split("/");return e.split("/").forEach(r=>{r===".."?a.length>1&&a.pop():r!=="."&&a.push(r)}),a.length>1?a.join("/"):"/"}function Re(e,t,a,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Oa(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}function Rt(e){let t=Oa(e);return t.map((a,r)=>r===t.length-1?a.pathname:a.pathnameBase)}function Ke(e,t,a,r=!1){let n;typeof e=="string"?n=Q(e):(n={...e},R(!n.pathname||!n.pathname.includes("?"),Re("?","pathname","search",n)),R(!n.pathname||!n.pathname.includes("#"),Re("#","pathname","hash",n)),R(!n.search||!n.search.includes("#"),Re("#","search","hash",n)));let o=e===""||n.pathname==="",s=o?"/":n.pathname,c;if(s==null)c=a;else{let f=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;n.pathname=h.join("/")}c=f>=0?t[f]:"/"}let u=$a(n,c),d=s&&s!=="/"&&s.endsWith("/"),m=(o||s===".")&&a.endsWith("/");return!u.pathname.endsWith("/")&&(d||m)&&(u.pathname+="/"),u}var Nt=e=>e.replace(/[\\/]{2,}/g,"/"),B=e=>Nt(e.join("/")),Pt=e=>e.replace(/\/+$/,""),za=e=>Pt(e).replace(/^\/*/,"/"),Ba=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Fa=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Ha=class{status;statusText;data;error;internal;constructor(e,t,a,r=!1){this.status=e,this.statusText=t||"",this.internal=r,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function Va(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Ua(e){return B(e.map(t=>t.route.path).filter(Boolean))||"/"}var It=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Lt(e,t){let a=e;if(typeof a!="string"||!qe.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let r=a,n=!1;if(It)try{let o=new URL(window.location.href),s=kt.test(a)?new URL(xa(a,o.protocol)):new URL(a),c=J(s.pathname,t);s.origin===o.origin&&c!=null?a=c+s.search+s.hash:n=!0}catch{U(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:n,to:a}}var Mt=["POST","PUT","PATCH","DELETE"],rs=new Set(Mt),Ja=["GET",...Mt],ns=new Set(Ja),Wa=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Ga(e){try{return Wa.includes(new URL(e).protocol)}catch{return!1}}var Z=l.createContext(null);Z.displayName="DataRouter";var oe=l.createContext(null);oe.displayName="DataRouterState";var At=l.createContext(!1);function qa(){return l.useContext(At)}var Dt=l.createContext({isTransitioning:!1});Dt.displayName="ViewTransition";var Ka=l.createContext(new Map);Ka.displayName="Fetchers";var $e=l.createContext(null);$e.displayName="Await";var A=l.createContext(null);A.displayName="Navigation";var se=l.createContext(null);se.displayName="Location";var G=l.createContext({outlet:null,matches:[],isDataRoute:!1});G.displayName="Route";var Ye=l.createContext(null);Ye.displayName="RouteError";var $t="REACT_ROUTER_ERROR",Ya="REDIRECT",Xa="ROUTE_ERROR_RESPONSE";function Qa(e){if(e.startsWith(`${$t}:${Ya}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Za(e){if(e.startsWith(`${$t}:${Xa}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Ha(t.status,t.statusText,t.data)}catch{}}function er(e,{relative:t}={}){R(ie(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:r}=l.useContext(A),{hash:n,pathname:o,search:s}=le(e,{relative:t}),c=o;return a!=="/"&&(c=o==="/"?a:B([a,o])),r.createHref({pathname:c,search:s,hash:n})}function ie(){return l.useContext(se)!=null}function F(){return R(ie(),"useLocation() may be used only in the context of a <Router> component."),l.useContext(se).location}var Ot="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function tr(){let{isDataRoute:e}=l.useContext(G);return e?pr():ar()}function ar(){R(ie(),"useNavigate() may be used only in the context of a <Router> component.");let e=l.useContext(Z),{basename:t,navigator:a}=l.useContext(A),{matches:r}=l.useContext(G),{pathname:n}=F(),o=JSON.stringify(Rt(r)),s=l.useRef(!1);return l.useLayoutEffect(()=>{s.current=!0}),l.useCallback((c,u={})=>{if(U(s.current,Ot),!s.current)return;if(typeof c=="number"){a.go(c);return}let d=Ke(c,JSON.parse(o),n,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:B([t,d.pathname])),(u.replace?a.replace:a.push)(d,u.state,u)},[t,a,o,n,e])}var os=l.createContext(null);function le(e,{relative:t}={}){let{matches:a}=l.useContext(G),{pathname:r}=F(),n=JSON.stringify(Rt(a));return l.useMemo(()=>Ke(e,JSON.parse(n),r,t==="path"),[e,n,r,t])}function rr(e,t){return zt(e,t)}function zt(e,t,a){R(ie(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=l.useContext(A),{matches:n}=l.useContext(G),o=n[n.length-1],s=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=F(),d;if(t){let v=typeof t=="string"?Q(t):t;R(c==="/"||v.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${v.pathname}" was given in the \`location\` prop.`),d=v}else d=u;let m=d.pathname||"/",f=m;if(c!=="/"){let v=c.replace(/^\//,"").split("/");f="/"+m.replace(/^\//,"").split("/").slice(v.length).join("/")}let h=a&&a.state.matches.length?a.state.matches.map(v=>Object.assign(v,{route:a.manifest[v.route.id]||v.route})):Et(e,{pathname:f}),g=cr(h&&h.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:B([c,r.encodeLocation?r.encodeLocation(v.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?c:B([c,r.encodeLocation?r.encodeLocation(v.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:v.pathnameBase])})),n,a);return t&&g?l.createElement(se.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...d},navigationType:"POP"}},g):g}function nr(){let e=hr(),t=Va(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null;return l.createElement(l.Fragment,null,l.createElement("h2",null,"Unexpected Application Error!"),l.createElement("h3",{style:{fontStyle:"italic"}},t),a?l.createElement("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},a):null,null)}var or=l.createElement(nr,null),sr=class extends l.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static contextType=At;static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const a=Za(e.digest);a&&(e=a)}let t=e!==void 0?l.createElement(G.Provider,{value:this.props.routeContext},l.createElement(Ye.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?l.createElement(ir,{error:e},t):t}},Ne=new WeakMap;function ir({children:e,error:t}){let{basename:a}=l.useContext(A);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=Qa(t.digest);if(r){let n=Ne.get(t);if(n)throw n;let o=Lt(r.location,a),s=o.absoluteURL||o.to;if(Ga(s))throw new Error("Invalid redirect location");if(It&&!Ne.get(t))if(o.isExternal||r.reloadDocument)window.location.href=s;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:r.replace}));throw Ne.set(t,c),c}return l.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s}`})}}return e}function lr({routeContext:e,match:t,children:a}){let r=l.useContext(Z);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),l.createElement(G.Provider,{value:e},a)}function cr(e,t=[],a){let r=a?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let n=e,o=r?.errors;if(o!=null){let m=n.findIndex(f=>f.route.id&&o?.[f.route.id]!==void 0);R(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),n=n.slice(0,Math.min(n.length,m+1))}let s=!1,c=-1;if(a&&r){s=r.renderFallback;for(let m=0;m<n.length;m++){let f=n[m];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=m),f.route.id){let{loaderData:h,errors:g}=r,v=f.route.loader&&!h.hasOwnProperty(f.route.id)&&(!g||g[f.route.id]===void 0);if(f.route.lazy||v){a.isStatic&&(s=!0),c>=0?n=n.slice(0,c+1):n=[n[0]];break}}}}let u=a?.onError,d=r&&u?(m,f)=>{u(m,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Ua(r.matches),errorInfo:f})}:void 0;return n.reduceRight((m,f,h)=>{let g,v=!1,b=null,y=null;r&&(g=o&&f.route.id?o[f.route.id]:void 0,b=f.route.errorElement||or,s&&(c<0&&h===0?(gr("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,y=null):c===h&&(v=!0,y=f.route.hydrateFallbackElement||null)));let w=t.concat(n.slice(0,h+1)),p=()=>{let x;return g?x=b:v?x=y:f.route.Component?x=l.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=m,l.createElement(lr,{match:f,routeContext:{outlet:m,matches:w,isDataRoute:r!=null},children:x})};return r&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?l.createElement(sr,{location:r.location,revalidation:r.revalidation,component:b,error:g,children:p(),routeContext:{outlet:null,matches:w,isDataRoute:!0},onError:d}):p()},null)}function Xe(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ur(e){let t=l.useContext(Z);return R(t,Xe(e)),t}function Qe(e){let t=l.useContext(oe);return R(t,Xe(e)),t}function dr(e){let t=l.useContext(G);return R(t,Xe(e)),t}function Ze(e){let t=dr(e),a=t.matches[t.matches.length-1];return R(a.route.id,`${e} can only be used on routes that contain a unique "id"`),a.route.id}function mr(){return Ze("useRouteId")}function fr(){let e=Qe("useNavigation");return l.useMemo(()=>{let{matches:t,historyAction:a,...r}=e.navigation;return r},[e.navigation])}function Bt(){let{matches:e,loaderData:t}=Qe("useMatches");return l.useMemo(()=>e.map(a=>Ea(a,t)),[e,t])}function hr(){let e=l.useContext(Ye),t=Qe("useRouteError"),a=Ze("useRouteError");return e!==void 0?e:t.errors?.[a]}function pr(){let{router:e}=ur("useNavigate"),t=Ze("useNavigate"),a=l.useRef(!1);return l.useLayoutEffect(()=>{a.current=!0}),l.useCallback(async(r,n={})=>{U(a.current,Ot),a.current&&(typeof r=="number"?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...n}))},[e,t])}var dt={};function gr(e,t,a){!t&&!dt[e]&&(dt[e]=!0,U(!1,a))}var ss=l.memo(yr);function yr({routes:e,manifest:t,future:a,state:r,isStatic:n,onError:o}){return zt(e,void 0,{manifest:t,state:r,isStatic:n,onError:o,future:a})}function Oe(e){R(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ft({basename:e="/",children:t=null,location:a,navigationType:r="POP",navigator:n,static:o=!1,useTransitions:s}){R(!ie(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=e.replace(/^\/*/,"/"),u=l.useMemo(()=>({basename:c,navigator:n,static:o,useTransitions:s,future:{}}),[c,n,o,s]);typeof a=="string"&&(a=Q(a));let{pathname:d="/",search:m="",hash:f="",state:h=null,key:g="default",mask:v}=a,b=l.useMemo(()=>{let y=J(d,c);return y==null?null:{location:{pathname:y,search:m,hash:f,state:h,key:g,mask:v},navigationType:r}},[c,d,m,f,h,g,r,v]);return U(b!=null,`<Router basename="${c}"> is not able to match the URL "${d}${m}${f}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:l.createElement(A.Provider,{value:u},l.createElement(se.Provider,{children:t,value:b}))}function xr({children:e,location:t}){return rr(ze(e),t)}var is=class extends l.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:a}=this.props,r=null,n=0;if(!(a instanceof Promise))n=1,r=Promise.resolve(),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_data",{get:()=>a});else if(this.state.error){n=2;let o=this.state.error;r=Promise.reject().catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_error",{get:()=>o})}else a._tracked?(r=a,n="_error"in r?2:"_data"in r?1:0):(n=0,Object.defineProperty(a,"_tracked",{get:()=>!0}),r=a.then(o=>Object.defineProperty(a,"_data",{get:()=>o}),o=>{this.props.onError?.(o),Object.defineProperty(a,"_error",{get:()=>o})}));if(n===2&&!t)throw r._error;if(n===2)return l.createElement($e.Provider,{value:r,children:t});if(n===1)return l.createElement($e.Provider,{value:r,children:e});throw r}};function ze(e,t=[]){let a=[];return l.Children.forEach(e,(r,n)=>{if(!l.isValidElement(r))return;let o=[...t,n];if(r.type===l.Fragment){a.push.apply(a,ze(r.props.children,o));return}R(r.type===Oe,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`);let s=r.props;R(!s.index||!s.children,"An index route cannot have child routes.");let c={id:s.id||o.join("-"),caseSensitive:s.caseSensitive,element:s.element,Component:s.Component,index:s.index,path:s.path,middleware:s.middleware,loader:s.loader,action:s.action,hydrateFallbackElement:s.hydrateFallbackElement,HydrateFallback:s.HydrateFallback,errorElement:s.errorElement,ErrorBoundary:s.ErrorBoundary,shouldRevalidate:s.shouldRevalidate,handle:s.handle,lazy:s.lazy};s.children&&(c.children=ze(s.children,o)),a.push(c)}),a}var ye="application/x-www-form-urlencoded";function we(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function vr(e){return we(e)&&e.tagName.toLowerCase()==="button"}function br(e){return we(e)&&e.tagName.toLowerCase()==="form"}function wr(e){return we(e)&&e.tagName.toLowerCase()==="input"}function _r(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function kr(e,t){return e.button===0&&(!t||t==="_self")&&!_r(e)}var he=null;function Er(){if(he===null)try{new FormData(document.createElement("form"),0),he=!1}catch{he=!0}return he}var Tr=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Pe(e){return e!=null&&!Tr.has(e)?(U(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ye}"`),null):e}function Sr(e,t){let a,r,n,o,s;if(br(e)){let c=e.getAttribute("action");r=c?J(c,t):null,a=e.getAttribute("method")||"get",n=Pe(e.getAttribute("enctype"))||ye,o=new FormData(e)}else if(vr(e)||wr(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=e.getAttribute("formaction")||c.getAttribute("action");if(r=u?J(u,t):null,a=e.getAttribute("formmethod")||c.getAttribute("method")||"get",n=Pe(e.getAttribute("formenctype"))||Pe(c.getAttribute("enctype"))||ye,o=new FormData(c,e),!Er()){let{name:d,type:m,value:f}=e;if(m==="image"){let h=d?`${d}.`:"";o.append(`${h}x`,"0"),o.append(`${h}y`,"0")}else d&&o.append(d,f)}}else{if(we(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a="get",r=null,n=ye,s=e}return o&&n==="text/plain"&&(s=o,o=void 0),{action:r,method:a.toLowerCase(),encType:n,formData:o,body:s}}function et(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}var jr={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},Cr=/[&><\u2028\u2029]/g;function mt(e){return e.replace(Cr,t=>jr[t])}function Ht(e,t){let a=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${t}`:a.pathname=`${a.pathname}.${t}`,a}var Rr=(function(){const t=typeof document<"u"&&document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"})(),Nr=function(e){return"/"+e},ft={},tt=function(t,a,r){let n=Promise.resolve();if(a&&a.length>0){let d=function(f){return Promise.all(f.map(h=>Promise.resolve(h).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))},m=function(f){return import.meta.resolve?import.meta.resolve(f):new URL(f,new URL("../../../src/node/plugins/importAnalysisBuild.ts",import.meta.url)).href};const s=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=c?.nonce||c?.getAttribute("nonce");n=d(a.map(f=>{if(f=Nr(f,r),f=m(f),f in ft)return;ft[f]=!0;const h=f.endsWith(".css");for(let v=s.length-1;v>=0;v--){const b=s[v];if(b.href===f&&(!h||b.rel==="stylesheet"))return}const g=document.createElement("link");if(g.rel=h?"stylesheet":Rr,h||(g.as="script"),g.crossOrigin="",g.href=f,u&&g.setAttribute("nonce",u),document.head.appendChild(g),h)return new Promise((v,b)=>{g.addEventListener("load",v),g.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(s){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s}return n.then(s=>{for(const c of s||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};async function Pr(e,t){if(e.id in t)return t[e.id];try{let a=await tt(()=>import(e.module),[]);return t[e.id]=a,a}catch(a){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ir(e){return e!=null&&typeof e.page=="string"}function Lr(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Mr(e,t,a){return Or((await Promise.all(e.map(async r=>{let n=t.routes[r.route.id];if(n){let o=await Pr(n,a);return o.links?o.links():[]}return[]}))).flat(1).filter(Lr).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function ht(e,t,a,r,n,o){let s=(u,d)=>a[d]?u.route.id!==a[d].route.id:!0,c=(u,d)=>a[d].pathname!==u.pathname||a[d].route.path?.endsWith("*")&&a[d].params["*"]!==u.params["*"];return o==="assets"?t.filter((u,d)=>s(u,d)||c(u,d)):o==="data"?t.filter((u,d)=>{let m=r.routes[u.route.id];if(!m||!m.hasLoader)return!1;if(s(u,d)||c(u,d))return!0;if(u.route.shouldRevalidate){let f=u.route.shouldRevalidate({currentUrl:new URL(n.pathname+n.search+n.hash,window.origin),currentParams:a[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function Ar(e,t,{includeHydrateFallback:a}={}){return Dr(e.map(r=>{let n=t.routes[r.route.id];if(!n)return[];let o=[n.module];return n.clientActionModule&&(o=o.concat(n.clientActionModule)),n.clientLoaderModule&&(o=o.concat(n.clientLoaderModule)),a&&n.hydrateFallbackModule&&(o=o.concat(n.hydrateFallbackModule)),n.imports&&(o=o.concat(n.imports)),o}).flat(1))}function Dr(e){return[...new Set(e)]}function $r(e){let t={},a=Object.keys(e).sort();for(let r of a)t[r]=e[r];return t}function Or(e,t){let a=new Set,r=new Set(t);return e.reduce((n,o)=>{if(t&&!Ir(o)&&o.as==="script"&&o.href&&r.has(o.href))return n;let s=JSON.stringify($r(o));return a.has(s)||(a.add(s),n.push({key:s,link:o})),n},[])}function zr(){let e=l.useContext(Z);return et(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Br(){let e=l.useContext(oe);return et(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var _e=l.createContext(void 0);_e.displayName="FrameworkContext";function at(){let e=l.useContext(_e);return et(e,"You must render this element inside a <HydratedRouter> element"),e}function Fr(e,t){let a=l.useContext(_e),[r,n]=l.useState(!1),[o,s]=l.useState(!1),{onFocus:c,onBlur:u,onMouseEnter:d,onMouseLeave:m,onTouchStart:f}=t,h=l.useRef(null);l.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let b=w=>{w.forEach(p=>{s(p.isIntersecting)})},y=new IntersectionObserver(b,{threshold:.5});return h.current&&y.observe(h.current),()=>{y.disconnect()}}},[e]),l.useEffect(()=>{if(r){let b=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(b)}}},[r]);let g=()=>{n(!0)},v=()=>{n(!1),s(!1)};return a?e!=="intent"?[o,h,{}]:[o,h,{onFocus:ee(c,g),onBlur:ee(u,v),onMouseEnter:ee(d,g),onMouseLeave:ee(m,v),onTouchStart:ee(f,g)}]:[!1,h,{}]}function ee(e,t){return a=>{e&&e(a),a.defaultPrevented||t(a)}}function Hr({page:e,...t}){let a=qa(),{nonce:r}=at(),{router:n}=zr(),o=l.useMemo(()=>Et(n.routes,e,n.basename),[n.routes,e,n.basename]);return o?(t.nonce==null&&r&&(t={...t,nonce:r}),a?l.createElement(Ur,{page:e,matches:o,...t}):l.createElement(Jr,{page:e,matches:o,...t})):null}function Vr(e){let{manifest:t,routeModules:a}=at(),[r,n]=l.useState([]);return l.useEffect(()=>{let o=!1;return Mr(e,t,a).then(s=>{o||n(s)}),()=>{o=!0}},[e,t,a]),r}function Ur({page:e,matches:t,...a}){let r=F(),n=l.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let o=Ht(e,"rsc"),s=!1,c=[];for(let u of t)typeof u.route.shouldRevalidate=="function"?s=!0:c.push(u.route.id);return s&&c.length>0&&o.searchParams.set("_routes",c.join(",")),[o.pathname+o.search]},[e,r,t]);return l.createElement(l.Fragment,null,n.map(o=>l.createElement("link",{key:o,rel:"prefetch",as:"fetch",href:o,...a})))}function Jr({page:e,matches:t,...a}){let r=F(),{manifest:n,routeModules:o}=at(),{loaderData:s,matches:c}=Br(),u=l.useMemo(()=>ht(e,t,c,n,r,"data"),[e,t,c,n,r]),d=l.useMemo(()=>ht(e,t,c,n,r,"assets"),[e,t,c,n,r]),m=l.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let g=new Set,v=!1;if(t.forEach(y=>{let w=n.routes[y.route.id];!w||!w.hasLoader||(!u.some(p=>p.route.id===y.route.id)&&y.route.id in s&&o[y.route.id]?.shouldRevalidate||w.hasClientLoader?v=!0:g.add(y.route.id))}),g.size===0)return[];let b=Ht(e,"data");return v&&g.size>0&&b.searchParams.set("_routes",t.filter(y=>g.has(y.route.id)).map(y=>y.route.id).join(",")),[b.pathname+b.search]},[s,r,n,u,t,e,o]),f=l.useMemo(()=>Ar(d,n),[d,n]),h=Vr(d);return l.createElement(l.Fragment,null,m.map(g=>l.createElement("link",{key:g,rel:"prefetch",as:"fetch",href:g,...a})),f.map(g=>l.createElement("link",{key:g,rel:"modulepreload",href:g,...a})),h.map(({key:g,link:v})=>l.createElement("link",{key:g,nonce:a.nonce,...v,crossOrigin:v.crossOrigin??a.crossOrigin})))}function Wr(...e){return t=>{e.forEach(a=>{typeof a=="function"?a(t):a!=null&&(a.current=t)})}}var Gr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Gr&&(window.__reactRouterVersion="8.1.0")}catch{}function qr({basename:e,children:t,useTransitions:a,window:r}){let n=l.useRef(null);n.current==null&&(n.current=va({window:r,v5Compat:!0}));let o=n.current,[s,c]=l.useState({action:o.action,location:o.location}),u=l.useCallback(d=>{a===!1?c(d):l.startTransition(()=>c(d))},[a]);return l.useLayoutEffect(()=>o.listen(u),[o,u]),l.createElement(Ft,{basename:e,children:t,location:s.location,navigationType:s.action,navigator:o,useTransitions:a})}function Kr({basename:e,children:t,history:a,useTransitions:r}){let[n,o]=l.useState({action:a.action,location:a.location}),s=l.useCallback(c=>{r===!1?o(c):l.startTransition(()=>o(c))},[r]);return l.useLayoutEffect(()=>a.listen(s),[a,s]),l.createElement(Ft,{basename:e,children:t,location:n.location,navigationType:n.action,navigator:a,useTransitions:r})}Kr.displayName="unstable_HistoryRouter";var Vt=l.forwardRef(function({onClick:t,discover:a="render",prefetch:r="none",relative:n,reloadDocument:o,replace:s,mask:c,state:u,target:d,to:m,preventScrollReset:f,viewTransition:h,defaultShouldRevalidate:g,...v},b){let{basename:y,navigator:w,useTransitions:p}=l.useContext(A),x=typeof m=="string"&&qe.test(m),_=Lt(m,y);m=_.to;let T=er(m,{relative:n}),C=F(),k=null;if(c){let $=Ke(c,[],C.mask?C.mask.pathname:"/",!0);y!=="/"&&($.pathname=$.pathname==="/"?y:B([y,$.pathname])),k=w.createHref($)}let[S,N,M]=Fr(r,v),D=en(m,{replace:s,mask:c,state:u,target:d,preventScrollReset:f,relative:n,viewTransition:h,defaultShouldRevalidate:g,useTransitions:p});function X($){t&&t($),$.defaultPrevented||D($)}let V=!(_.isExternal||o),me=l.createElement("a",{...v,...M,href:(V?k:void 0)||_.absoluteURL||T,onClick:V?X:t,ref:Wr(b,N),target:d,"data-discover":!x&&a==="render"?"true":void 0});return S&&!x?l.createElement(l.Fragment,null,me,l.createElement(Hr,{page:T})):me});Vt.displayName="Link";var Yr=l.forwardRef(function({"aria-current":t="page",caseSensitive:a=!1,className:r="",end:n=!1,style:o,to:s,viewTransition:c,children:u,...d},m){let f=le(s,{relative:d.relative}),h=F(),g=l.useContext(oe),{navigator:v,basename:b}=l.useContext(A),y=g!=null&&ln(f)&&c===!0,w=v.encodeLocation?v.encodeLocation(f).pathname:f.pathname,p=h.pathname,x=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;a||(p=p.toLowerCase(),x=x?x.toLowerCase():null,w=w.toLowerCase()),x&&b&&(x=J(x,b)||x);const _=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let T=p===w||!n&&p.startsWith(w)&&p.charAt(_)==="/",C=x!=null&&(x===w||!n&&x.startsWith(w)&&x.charAt(w.length)==="/"),k={isActive:T,isPending:C,isTransitioning:y},S=T?t:void 0,N;typeof r=="function"?N=r(k):N=[r,T?"active":null,C?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let M=typeof o=="function"?o(k):o;return l.createElement(Vt,{...d,"aria-current":S,className:N,ref:m,style:M,to:s,viewTransition:c},typeof u=="function"?u(k):u)});Yr.displayName="NavLink";var Xr=l.forwardRef(({discover:e="render",fetcherKey:t,navigate:a,reloadDocument:r,replace:n,state:o,method:s="get",action:c,onSubmit:u,relative:d,preventScrollReset:m,viewTransition:f,defaultShouldRevalidate:h,...g},v)=>{let{useTransitions:b}=l.useContext(A),y=rn(),w=nn(c,{relative:d}),p=s.toLowerCase()==="get"?"get":"post",x=typeof c=="string"&&qe.test(c),_=T=>{if(u&&u(T),T.defaultPrevented)return;T.preventDefault();let C=T.nativeEvent.submitter,k=C?.getAttribute("formmethod")||s,S=()=>y(C||T.currentTarget,{fetcherKey:t,method:k,navigate:a,replace:n,state:o,relative:d,preventScrollReset:m,viewTransition:f,defaultShouldRevalidate:h});b&&a!==!1?l.startTransition(()=>S()):S()};return l.createElement("form",{ref:v,method:p,action:w,onSubmit:r?u:_,...g,"data-discover":!x&&e==="render"?"true":void 0})});Xr.displayName="Form";function Qr({getKey:e,storageKey:t,...a}){let r=l.useContext(_e),{basename:n}=l.useContext(A),o=F(),s=Bt();on({getKey:e,storageKey:t});let c=l.useMemo(()=>{if(!r||!e)return null;let d=Fe(o,s,n,e);return d!==o.key?d:null},[]);if(!r||r.isSpaMode)return null;let u=((d,m)=>{if(!window.history.state||!window.history.state.key){let f=Math.random().toString(32).slice(2);window.history.replaceState({key:f},"")}try{let f=JSON.parse(sessionStorage.getItem(d)||"{}")[m||window.history.state.key];typeof f=="number"&&window.scrollTo(0,f)}catch(f){console.error(f),sessionStorage.removeItem(d)}}).toString();return a.nonce==null&&r?.nonce&&(a.nonce=r.nonce),l.createElement("script",{...a,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${u})(${mt(JSON.stringify(t||Be))}, ${mt(JSON.stringify(c))})`}})}Qr.displayName="ScrollRestoration";function Ut(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rt(e){let t=l.useContext(Z);return R(t,Ut(e)),t}function Zr(e){let t=l.useContext(oe);return R(t,Ut(e)),t}function en(e,{target:t,replace:a,mask:r,state:n,preventScrollReset:o,relative:s,viewTransition:c,defaultShouldRevalidate:u,useTransitions:d}={}){let m=tr(),f=F(),h=le(e,{relative:s});return l.useCallback(g=>{if(kr(g,t)){g.preventDefault();let v=a!==void 0?a:re(f)===re(h),b=()=>m(e,{replace:v,mask:r,state:n,preventScrollReset:o,relative:s,viewTransition:c,defaultShouldRevalidate:u});d?l.startTransition(()=>b()):b()}},[f,m,h,a,r,n,t,e,o,s,c,u,d])}var tn=0,an=()=>`__${String(++tn)}__`;function rn(){let{router:e}=rt("useSubmit"),{basename:t}=l.useContext(A),a=mr(),r=e.fetch,n=e.navigate;return l.useCallback(async(o,s={})=>{let{action:c,method:u,encType:d,formData:m,body:f}=Sr(o,t);s.navigate===!1?await r(s.fetcherKey||an(),a,s.action||c,{defaultShouldRevalidate:s.defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:m,body:f,formMethod:s.method||u,formEncType:s.encType||d,flushSync:s.flushSync}):await n(s.action||c,{defaultShouldRevalidate:s.defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:m,body:f,formMethod:s.method||u,formEncType:s.encType||d,replace:s.replace,state:s.state,fromRouteId:a,flushSync:s.flushSync,viewTransition:s.viewTransition})},[r,n,t,a])}function nn(e,{relative:t}={}){let{basename:a}=l.useContext(A),r=l.useContext(G);R(r,"useFormAction must be used inside a RouteContext");let[n]=r.matches.slice(-1),o={...le(e||".",{relative:t})},s=F();if(e==null){o.search=s.search;let c=new URLSearchParams(o.search),u=c.getAll("index");if(u.some(d=>d==="")){c.delete("index"),u.filter(m=>m).forEach(m=>c.append("index",m));let d=c.toString();o.search=d?`?${d}`:""}}return(!e||e===".")&&n.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(o.pathname=o.pathname==="/"?a:B([a,o.pathname])),re(o)}var Be="react-router-scroll-positions",pe={};function Fe(e,t,a,r){let n=null;return r&&(a!=="/"?n=r({...e,pathname:J(e.pathname,a)||e.pathname},t):n=r(e,t)),n==null&&(n=e.key),n}function on({getKey:e,storageKey:t}={}){let{router:a}=rt("useScrollRestoration"),{restoreScrollPosition:r,preventScrollReset:n}=Zr("useScrollRestoration"),{basename:o}=l.useContext(A),s=F(),c=Bt(),u=fr();l.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),sn(l.useCallback(()=>{if(u.state==="idle"){let d=Fe(s,c,o,e);pe[d]=window.scrollY}try{sessionStorage.setItem(t||Be,JSON.stringify(pe))}catch(d){U(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${d}).`)}window.history.scrollRestoration="auto"},[u.state,e,o,s,c,t])),typeof document<"u"&&(l.useLayoutEffect(()=>{try{let d=sessionStorage.getItem(t||Be);d&&(pe=JSON.parse(d))}catch{}},[t]),l.useLayoutEffect(()=>{let d=a?.enableScrollRestoration(pe,()=>window.scrollY,e?(m,f)=>Fe(m,f,o,e):void 0);return()=>d&&d()},[a,o,e]),l.useLayoutEffect(()=>{if(r!==!1){if(typeof r=="number"){window.scrollTo(0,r);return}try{if(s.hash){let d=document.getElementById(decodeURIComponent(s.hash.slice(1)));if(d){d.scrollIntoView();return}}}catch{U(!1,`"${s.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}n!==!0&&window.scrollTo(0,0)}},[s,r,n]))}function sn(e,t){let{capture:a}=t||{};l.useEffect(()=>{let r=a!=null?{capture:a}:void 0;return window.addEventListener("pagehide",e,r),()=>{window.removeEventListener("pagehide",e,r)}},[e,a])}function ln(e,{relative:t}={}){let a=l.useContext(Dt);R(a!=null,"`useViewTransitionState` must be used within `react-router/dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=rt("useViewTransitionState"),n=le(e,{relative:t});if(!a.isTransitioning)return!1;let o=J(a.currentLocation.pathname,r)||a.currentLocation.pathname,s=J(a.nextLocation.pathname,r)||a.nextLocation.pathname;return xe(n.pathname,s)!=null||xe(n.pathname,o)!=null}var cn=({onComplete:e})=>{const[t,a]=(0,l.useState)(!0);return(0,l.useEffect)(()=>{const r=setTimeout(()=>{a(!1),setTimeout(e,500)},2e3);return()=>clearTimeout(r)},[e]),(0,i.jsxs)(E.div,{initial:{opacity:1},animate:{opacity:t?1:0},exit:{opacity:0},className:"fixed inset-0 z-50 bg-black flex items-center justify-center",role:"status","aria-label":t?"Loading":"Loading complete",children:[(0,i.jsx)(E.img,{src:"/logo.webp",alt:"Portfolio loading animation",className:"w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64",initial:{y:0,scale:1,rotate:0},animate:{y:t?[0,-20,0,-20,0]:-250,scale:t?[1,1.2,1,1.2,1]:.5,rotate:t?0:720},transition:{duration:t?3:1,ease:"easeInOut",times:t?[0,.25,.5,.75,1]:[0,1]}}),t&&(0,i.jsx)(E.div,{className:"absolute inset-0",initial:{opacity:0},animate:{opacity:[0,.4,.6,.4,0]},transition:{repeat:2,duration:1,ease:"easeInOut"},style:{background:"linear-gradient(to right, #5d3fd3, #144500)"}})]})},H=()=>{const e=(0,l.useContext)(_t);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},He=(e,t)=>{e.preventDefault();const a=document.getElementById(t);if(a){const r=a.getBoundingClientRect().top+window.scrollY+-50;window.scrollTo({top:r,behavior:"smooth"})}},Jt={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},pt=l.createContext&&l.createContext(Jt),un=["attr","size","title"];function dn(e,t){if(e==null)return{};var a,r,n=mn(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function mn(e,t){if(e==null)return{};var a={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;a[r]=e[r]}return a}function ve(){return ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},ve.apply(null,arguments)}function gt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function be(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?gt(Object(a),!0).forEach(function(r){fn(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):gt(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function fn(e,t,a){return(t=hn(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function hn(e){var t=pn(e,"string");return typeof t=="symbol"?t:t+""}function pn(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Wt(e){return e&&e.map((t,a)=>l.createElement(t.tag,be({key:a},t.attr),Wt(t.child)))}function I(e){return t=>l.createElement(gn,ve({attr:be({},e.attr)},t),Wt(e.child))}function gn(e){var t=a=>{var r=e.attr,n=e.size,o=e.title,s=dn(e,un),c=n||a.size||"1em",u;return a.className&&(u=a.className),e.className&&(u=(u?u+" ":"")+e.className),l.createElement("svg",ve({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,r,s,{className:u,style:be(be({color:e.color||a.color},a.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),o&&l.createElement("title",null,o),e.children)};return pt!==void 0?l.createElement(pt.Consumer,null,a=>t(a)):t(Jt)}function yn(e){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(e)}function xn(e){return I({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function vn(e){return I({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function bn(e){return I({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function wn(e){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}function _n(e){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function kn(e){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function Ve(e){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(e)}function En(e){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function Tn(e){return I({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function Sn(e){return I({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(e)}function jn(e){return I({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}var Ie=["home","about","experience","skills","certificates","projects","contact"],yt=e=>e.charAt(0).toUpperCase()+e.slice(1),Cn=[{name:"GitHub",url:"https://github.com/trencho",ariaLabel:"GitHub Profile"},{name:"LinkedIn",url:"https://www.linkedin.com/in/aleksandar-trenchevski-593b45168/",ariaLabel:"LinkedIn Profile"}],te={filename:"/CV - Aleksandar Trenchevski.pdf",label:"Download CV"},O={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6}}},Rn={hidden:{opacity:0,x:-50},visible:{opacity:1,x:0,transition:{duration:1}}},ae={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},Le={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},z={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},Nn={hidden:{opacity:0,scale:.8,rotate:-10},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.6,ease:"easeOut"}}},xt={initial:{scale:1,rotate:0,opacity:1},animate:{scale:[1,1.2,1],rotate:[0,360],opacity:1,transition:{duration:.8,ease:"easeInOut"}},exit:{scale:.8,opacity:0,rotate:180,transition:{duration:.4,ease:"easeInOut"}}},Pn=e=>{const[t,a]=(0,l.useState)(e[0]??"");return(0,l.useEffect)(()=>{const r=e.map(o=>document.getElementById(o)).filter(o=>o!==null);if(r.length===0)return;const n=new IntersectionObserver(o=>{const s=o.filter(c=>c.isIntersecting).sort((c,u)=>c.boundingClientRect.top-u.boundingClientRect.top);s[0]&&a(s[0].target.id)},{rootMargin:"-40% 0px -55% 0px",threshold:0});return r.forEach(o=>n.observe(o)),()=>n.disconnect()},[e]),t},In=()=>{const{darkMode:e,toggleDarkMode:t}=H(),[a,r]=(0,l.useState)(!1),n=Pn(Ie),o=()=>r(!a),s=()=>r(!1);return(0,l.useEffect)(()=>{if(!a)return;const c=u=>{u.key==="Escape"&&r(!1)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[a]),(0,i.jsxs)("nav",{className:`p-5 fixed w-full top-0 z-10 bg-opacity-90 shadow-md transition-colors duration-300 ${e?"bg-black text-white":"bg-white text-gray-900"}`,"aria-label":"Main navigation",children:[(0,i.jsxs)("div",{className:"container mx-auto flex justify-between items-center",children:[(0,i.jsx)("div",{className:"sm:hidden",children:(0,i.jsxs)("button",{id:"toggleButton",onClick:o,"aria-label":a?"Close navigation menu":"Open navigation menu","aria-expanded":a,"aria-controls":"mobile-menu",className:"relative flex flex-col items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2",children:[(0,i.jsx)("div",{className:`transition-transform duration-300 ease-in-out w-6 h-0.5 bg-current ${a?"rotate-45 translate-y-1.5":""}`,"aria-hidden":"true"}),(0,i.jsx)("div",{className:`transition-opacity duration-300 ease-in-out w-6 h-0.5 bg-current my-1 ${a?"opacity-0":""}`,"aria-hidden":"true"}),(0,i.jsx)("div",{className:`transition-transform duration-300 ease-in-out w-6 h-0.5 bg-current ${a?"-rotate-45 -translate-y-1.5":""}`,"aria-hidden":"true"})]})}),(0,i.jsx)("div",{className:"hidden sm:flex flex-1 justify-center space-x-4 lg:space-x-6",children:Ie.map(c=>{const u=n===c;return(0,i.jsxs)("a",{href:`#${c}`,onClick:d=>{He(d,c)},className:`relative text-sm sm:text-lg font-semibold group focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded px-2 py-1 transition-colors ${u?e?"text-teal-400":"text-purple-700":"hover:text-gray-400"}`,"aria-label":`Navigate to ${c} section`,"aria-current":u?"true":void 0,children:[yt(c),(0,i.jsx)("span",{className:`absolute bottom-0 left-0 w-full h-0.5 transform transition-transform duration-500 ease-in-out origin-left group-hover:scale-x-100 ${u?"scale-x-100":"scale-x-0"} ${e?"bg-teal-400":"bg-purple-600"}`,"aria-hidden":"true"})]},c)})}),(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsxs)("a",{href:te.filename,download:!0,className:`hidden sm:flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${e?"bg-gray-700 text-white hover:bg-gray-600":"bg-black text-white hover:bg-gray-800"}`,"aria-label":"Download CV",children:[(0,i.jsx)(Ve,{"aria-hidden":"true"}),(0,i.jsx)("span",{children:"CV"})]}),(0,i.jsx)("button",{onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",className:"flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded p-1",children:(0,i.jsx)(Ae,{mode:"wait",children:e?(0,i.jsx)(E.div,{initial:"initial",animate:"animate",exit:"exit",variants:xt,"aria-hidden":"true",children:(0,i.jsx)(wn,{size:24})},"sun"):(0,i.jsx)(E.div,{initial:"initial",animate:"animate",exit:"exit",variants:xt,"aria-hidden":"true",children:(0,i.jsx)(_n,{size:24})},"moon")})})]})]}),(0,i.jsx)(Ae,{children:a&&(0,i.jsx)(E.div,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:-100},transition:{duration:.3,ease:"easeInOut"},className:`absolute top-16 left-0 w-full bg-opacity-90 shadow-md ${e?"bg-black text-white":"bg-white text-gray-900"}`,id:"mobile-menu",children:(0,i.jsxs)("ul",{className:"flex flex-col space-y-4 py-4 px-6",children:[Ie.map(c=>{const u=n===c;return(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:`#${c}`,onClick:d=>{He(d,c),s()},className:`relative text-lg font-semibold group focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded px-2 py-1 block ${u?e?"text-teal-400":"text-purple-700":"hover:text-gray-400"}`,"aria-current":u?"true":void 0,children:[yt(c),(0,i.jsx)("span",{className:`absolute bottom-0 left-0 w-full h-0.5 transform transition-transform duration-500 ease-in-out origin-left group-hover:scale-x-100 ${u?"scale-x-100":"scale-x-0"} ${e?"bg-teal-400":"bg-purple-600"}`,"aria-hidden":"true"})]})},c)}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:te.filename,download:!0,onClick:s,className:"flex items-center gap-2 text-lg font-semibold px-2 py-1 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded",children:[(0,i.jsx)(Ve,{"aria-hidden":"true"}),(0,i.jsx)("span",{children:te.label})]})})]})})})]})},Ln=()=>{const e="Software Engineer",t=fa(),[a,r]=(0,l.useState)(""),n=new Date("2018-07-15"),o=new Date().getFullYear()-n.getFullYear(),{darkMode:s}=H(),c=[`${o}+ years experience`,"Backend & Data Engineering","Java · Python · Spring · Spark","Skopje, North Macedonia"];return(0,l.useEffect)(()=>{if(t)return;let u=0,d;const m=()=>{u<=17&&(r(e.slice(0,u)),u++,d=setTimeout(m,100))};return m(),()=>clearTimeout(d)},[t]),(0,i.jsxs)(E.section,{className:"min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 space-y-6 pt-16 lg:p-12 animate-smoothFadeIn",initial:"hidden",animate:"visible",variants:ae,children:[(0,i.jsx)(E.div,{className:"relative w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full border-4 border-white shadow-lg mt-4 sm:mt-8",variants:O,children:(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{srcSet:"/profile.webp",type:"image/webp"}),(0,i.jsx)("img",{src:"/profile.jpg",alt:"Aleksandar profile picture",className:"absolute top-0 left-0 w-full h-full object-cover rounded-full select-none",width:"400",height:"400",loading:"eager",fetchPriority:"high"})]})}),(0,i.jsx)(E.div,{className:`w-full max-w-lg sm:max-w-3xl p-4 sm:p-8 rounded-lg shadow-lg flex justify-center items-center ${s?"bg-[#444444] text-white":"bg-white bg-opacity-70 text-gray-700"}`,variants:Rn,children:(0,i.jsxs)("div",{className:"text-center space-y-4 sm:space-y-6 max-w-xl leading-relaxed",children:[(0,i.jsxs)("h1",{className:`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 ${s?"text-white":"text-gray-900"}`,children:["Hello, my name is Aleksandar and I'm a"," ",(0,i.jsx)("span",{className:`${s?"text-teal-400":"text-emerald-500"}`,children:typeof window>"u"||t?e:a})," "]}),(0,i.jsx)("p",{className:"text-base sm:text-lg lg:text-xl leading-relaxed",children:"I build RESTful APIs and large-scale data pipelines across insurance, banking, telecom and healthcare. Currently a Data Engineer at Encora, designing ETL workflows on Azure Databricks and Apache Spark."}),(0,i.jsx)(E.ul,{className:"flex flex-wrap justify-center gap-2",variants:O,"aria-label":"Highlights",children:c.map(u=>(0,i.jsx)("li",{className:`rounded-full px-3 py-1 text-xs sm:text-sm font-medium select-none ${s?"bg-gray-700 text-teal-200":"bg-emerald-100 text-emerald-800"}`,children:u},u))}),(0,i.jsxs)(E.div,{className:"flex flex-col sm:flex-row items-center justify-center gap-4 mt-4",variants:O,children:[(0,i.jsxs)("a",{href:"#contact",onClick:u=>{He(u,"contact")},className:`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 mb-2 sm:mb-0 select-none ${s?"bg-gray-600 text-white hover:bg-gray-500":"bg-black text-white hover:bg-gray-800"}`,children:[(0,i.jsx)("span",{children:"Contact me here"}),(0,i.jsx)(jn,{"aria-hidden":"true"})]}),(0,i.jsxs)("a",{href:te.filename,className:`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 mb-2 sm:mb-0 select-none ${s?"bg-gray-600 text-white hover:bg-gray-500":"bg-black text-white hover:bg-gray-800"}`,download:!0,children:[(0,i.jsx)("span",{children:te.label}),(0,i.jsx)(Ve,{"aria-hidden":"true"})]}),(0,i.jsx)("div",{className:"flex space-x-4 mt-4 sm:mt-0",children:Cn.map(u=>{const d=u.name==="GitHub"?vn:xn;return(0,i.jsxs)("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:`group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full text-white transition
                    ${s?"bg-gray-600 hover:bg-gray-500":"bg-black hover:bg-gray-800"}`,"aria-label":u.ariaLabel,children:[(0,i.jsx)(d,{className:"text-xl","aria-hidden":"true"}),(0,i.jsx)("span",{className:`absolute bottom-full mb-2 hidden w-auto px-2 py-1 text-xs text-white rounded opacity-0 group-hover:block group-hover:opacity-100 transition-opacity
                      ${s?"bg-gray-600":"bg-black"}`,children:u.name})]},u.name)})})]})]})})]})},Mn=()=>{const{darkMode:e}=H();return(0,i.jsx)(E.section,{className:`flex justify-center items-center p-4 sm:p-8 lg:p-12 animate-smoothFadeIn ${e?"text-white":"text-gray-700"}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:ae,children:(0,i.jsxs)(E.div,{className:`w-full max-w-lg sm:max-w-3xl p-4 sm:p-8 rounded-lg shadow-lg ${e?"bg-[#444444]":"bg-white bg-opacity-70"}`,variants:ae,children:[(0,i.jsx)(E.h2,{className:"text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6",variants:z,children:"About Me"}),(0,i.jsxs)(E.div,{className:"text-center hyphens-auto max-w-lg sm:max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-8",variants:ae,children:[(0,i.jsxs)(E.p,{className:"text-base sm:text-lg lg:text-xl leading-relaxed mb-4",variants:z,children:["I'm a software engineer focused on ",(0,i.jsx)("b",{children:"backend"})," and"," ",(0,i.jsx)("b",{children:"data engineering"}),". I've designed and shipped"," ",(0,i.jsx)("b",{children:"RESTful APIs"})," and, more recently, large-scale"," ",(0,i.jsx)("b",{children:"ETL pipelines"})," — building data workflows on"," ",(0,i.jsx)("b",{children:"Azure Databricks"})," and ",(0,i.jsx)("b",{children:"Apache Spark"})," for the insurance sector, after years of ",(0,i.jsx)("b",{children:"Java/Spring"})," development across banking (3DS secure payments), telecommunications and healthcare."]}),(0,i.jsxs)(E.p,{className:"text-base sm:text-lg lg:text-xl leading-relaxed mb-4",variants:z,children:["My work spans the full delivery cycle: modelling data and APIs, containerising with ",(0,i.jsx)("b",{children:"Docker"})," and ",(0,i.jsx)("b",{children:"Kubernetes"}),", and shipping through ",(0,i.jsx)("b",{children:"CI/CD"}),". I've collaborated directly with international clients across ",(0,i.jsx)("b",{children:"Europe and the US"}),", translating business requirements into maintainable, production-ready systems."]}),(0,i.jsxs)(E.p,{className:"text-base sm:text-lg lg:text-xl leading-relaxed mb-4",variants:z,children:["I hold a"," ",(0,i.jsx)("b",{children:"Master's in Electrical Engineering and Information Technologies"}),", where my thesis on monitoring atmospheric impacts and predicting air pollution grew into open-source machine-learning projects. I value ",(0,i.jsx)("b",{children:"clean, well-tested code"}),", pragmatic design and continuous learning — and I'm comfortable explaining technical trade-offs to both engineers and non-technical stakeholders."]})]})]})})},An=[{company:"Encora Inc.",period:"Mar 2023 – Present",location:"Skopje, North Macedonia",roles:[{title:"Data Engineer",projects:[{name:"Hiscox — Insurance data platform",description:"Building ETL pipelines on Azure Databricks and Apache Spark to ingest, transform and validate insurance data from multiple sources, with automated workflows feeding Azure Data Lake for scalable storage and analytics.",technologies:["Python","SQL","PySpark","Apache Spark","Databricks","Delta Lake","Azure Data Factory"]}]},{title:"Java Engineer",projects:[{name:'Brandwatch — "Publish" module',description:`Delivered Java/Spring services for Brandwatch's social-media "Publish" module for planning, creating and distributing content.`,technologies:["Java","Spring Boot","PostgreSQL","Docker","Kubernetes"]},{name:"Cox Networks — Telecom middleware",description:"Built middleware for Cox Networks, a mobile network operator, that receives, processes and serves data from the carrier's systems.",technologies:["Java","Spring Boot","JAX-RS","JDBC","Oracle"]}]}]},{company:"Netcetera",period:"Dec 2021 – Mar 2023",location:"Skopje, North Macedonia",roles:[{title:"Java Engineer",projects:[{name:"3DS Secure digital payments",description:"Developed banking software for 3DS Secure digital payments, handling authentication flows for online card transactions.",technologies:["Java","Spring Boot","Spring Batch","Hibernate","Microsoft SQL Server"]}]}]},{company:"Medical IT Revolution",period:"Jul 2018 – Dec 2021",location:"Skopje, North Macedonia",roles:[{title:"Java Engineer",projects:[{name:"Medical Portal",description:"Built a medical application for hospitals in the Netherlands handling patient admissions and examination scheduling based on diagnosis, supporting client requests and delivering optimal software solutions.",technologies:["Java EE","JDBC","IBM Db2","JavaServer Pages"]}]}]}],Dn=()=>{const{darkMode:e}=H(),t=e?"text-teal-400":"text-emerald-600";return(0,i.jsx)(E.section,{className:`flex justify-center animate-smoothFadeIn ${e?"text-white":"text-gray-700"}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:ae,children:(0,i.jsxs)("div",{className:"w-full max-w-lg sm:max-w-3xl",children:[(0,i.jsx)(E.h2,{className:"text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12",variants:z,children:"Experience"}),(0,i.jsx)("ol",{className:"relative border-s-2 border-gray-400/40 ms-3 sm:ms-4 space-y-8 sm:space-y-10",children:An.map(a=>{const r=a.roles.length>1;return(0,i.jsxs)(E.li,{className:"ms-6 sm:ms-8",variants:z,children:[(0,i.jsx)("span",{className:`absolute -start-[9px] flex h-4 w-4 rounded-full border-2 ${e?"bg-teal-400 border-gray-900":"bg-emerald-500 border-white"}`,"aria-hidden":"true"}),(0,i.jsxs)("div",{className:`rounded-lg shadow-lg p-5 sm:p-6 ${e?"bg-[#444444]":"bg-white bg-opacity-70"}`,children:[(0,i.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1",children:[(0,i.jsx)("h3",{className:"text-lg sm:text-xl font-semibold",children:r?a.company:(0,i.jsxs)(i.Fragment,{children:[a.roles[0]?.title,(0,i.jsxs)("span",{className:t,children:[" · ",a.company]})]})}),(0,i.jsx)("span",{className:"text-sm sm:text-base whitespace-nowrap opacity-80",children:a.period})]}),(0,i.jsx)("p",{className:"text-sm sm:text-base opacity-70 mb-4",children:a.location}),(0,i.jsx)("div",{className:"space-y-6",children:a.roles.map(n=>(0,i.jsxs)("div",{children:[r&&(0,i.jsx)("h4",{className:`text-base sm:text-lg font-semibold mb-3 ${t}`,children:n.title}),(0,i.jsx)("ul",{className:r?"space-y-4 border-s-2 border-gray-400/25 ps-4 sm:ps-5":"space-y-4",children:n.projects.map(o=>(0,i.jsxs)("li",{children:[(0,i.jsx)("h5",{className:"text-base font-semibold",children:o.name}),(0,i.jsx)("p",{className:"text-base leading-relaxed mt-1 mb-3",children:o.description}),(0,i.jsx)("div",{className:"flex flex-wrap gap-2",children:o.technologies.map(s=>(0,i.jsx)("span",{className:"bg-gray-700 text-white rounded-full px-3 py-1 text-xs sm:text-sm font-medium select-none",children:s},s))})]},o.name))})]},n.title))})]})]},a.company)})})]})})},$n=[{title:"Java",imageSrc:"image-skills/backend/java.png",categories:["Backend"]},{title:"Python",imageSrc:"image-skills/backend/python.png",categories:["Backend"]},{title:"Spring",imageSrc:"image-skills/backend/spring.png",categories:["Backend"]},{title:"FastAPI",imageSrc:"image-skills/backend/fastapi.png",categories:["Backend"]},{title:"Flask",imageSrc:"image-skills/backend/flask.png",categories:["Backend"]},{title:"JavaScript",imageSrc:"image-skills/frontend/javascript.png",categories:["Frontend"]},{title:"TypeScript",imageSrc:"image-skills/frontend/typescript.png",categories:["Frontend"]},{title:"React",imageSrc:"image-skills/frontend/react.png",categories:["Frontend"]},{title:"Vue.js",imageSrc:"image-skills/frontend/vuejs.png",categories:["Frontend"]},{title:"Microsoft SQL Server",imageSrc:"image-skills/databases/microsoft-sql-server.png",categories:["Databases"]},{title:"MongoDB",imageSrc:"image-skills/databases/mongodb.png",categories:["Databases"]},{title:"MySQL",imageSrc:"image-skills/databases/mysql.png",categories:["Databases"]},{title:"Oracle",imageSrc:"image-skills/databases/oracle.png",categories:["Databases"]},{title:"PostgreSQL",imageSrc:"image-skills/databases/postgresql.png",categories:["Databases"]},{title:"Docker",imageSrc:"image-skills/devops/docker.png",categories:["DevOps"]},{title:"Kubernetes",imageSrc:"image-skills/devops/kubernetes.png",categories:["DevOps"]},{title:"Nginx",imageSrc:"image-skills/devops/nginx.png",categories:["DevOps"]},{title:"Git",imageSrc:"image-skills/tools/git.png",categories:["Tools"]},{title:"GitHub",imageSrc:"image-skills/tools/github.png",categories:["Tools"]},{title:"GitHub Actions",imageSrc:"image-skills/tools/github-actions.png",categories:["Tools"]},{title:"Gunicorn",imageSrc:"image-skills/tools/gunicorn.png",categories:["Tools"]},{title:"Lombok",imageSrc:"image-skills/tools/lombok.png",categories:["Tools"]},{title:"Maven",imageSrc:"image-skills/tools/maven.png",categories:["Tools"]},{title:"Postman",imageSrc:"image-skills/tools/postman.png",categories:["Tools"]},{title:"Pytest",imageSrc:"image-skills/tools/pytest.png",categories:["Tools"]},{title:"Swagger",imageSrc:"image-skills/tools/swagger.png",categories:["Tools"]},{title:"Vite",imageSrc:"image-skills/tools/vite.png",categories:["Tools"]},{title:"Matplotlib",imageSrc:"image-skills/data-science/matplotlib.png",categories:["Data Science"]},{title:"NumPy",imageSrc:"image-skills/data-science/numpy.png",categories:["Data Science"]},{title:"Pandas",imageSrc:"image-skills/data-science/pandas.png",categories:["Data Engineering","Data Science"]},{title:"Scikit-learn",imageSrc:"image-skills/data-science/scikit-learn.png",categories:["Data Science"]},{title:"Scipy",imageSrc:"image-skills/data-science/scipy.png",categories:["Data Science"]},{title:"Apache Spark",imageSrc:"image-skills/data-engineering/apache-spark.png",categories:["Data Engineering"]},{title:"Azure Blob Storage",imageSrc:"image-skills/data-engineering/azure-blob-storage.png",categories:["Data Engineering"]},{title:"Azure Data Factory",imageSrc:"image-skills/data-engineering/azure-data-factory.png",categories:["Data Engineering"]},{title:"Azure Data Lake",imageSrc:"image-skills/data-engineering/azure-data-lake.png",categories:["Data Engineering"]},{title:"Databricks",imageSrc:"image-skills/data-engineering/databricks.png",categories:["Data Engineering"]},{title:"Delta Lake",imageSrc:"image-skills/data-engineering/delta-lake.png",categories:["Data Engineering"]}],On=["Frontend","Backend","Databases","Tools","DevOps","Data Science","Data Engineering"],vt=$n,zn=()=>{const{darkMode:e}=H(),[t,a]=(0,l.useState)("All"),r=(0,l.useMemo)(()=>t==="All"?vt:vt.filter(o=>o.categories.includes(t)),[t]),n=o=>{a(o==="All"?"All":o)};return(0,i.jsx)(E.section,{className:`flex max-w-6xl mx-auto justify-center items-center p-4 sm:p-6 lg:p-12 skills-section ${e?"dark-mode":"light-mode"}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:Le,children:(0,i.jsxs)(E.div,{className:`w-full max-w-lg sm:max-w-6xl p-4 sm:p-8 rounded-lg shadow-lg ${e?"bg-[#444444]":"bg-white bg-opacity-70"}`,variants:Le,children:[(0,i.jsx)(E.h2,{className:"text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6",variants:z,children:"Skills"}),(0,i.jsxs)(E.div,{className:"glass-card p-8 sm:p-12 lg:p-16",variants:z,children:[(0,i.jsxs)("div",{className:"flex flex-wrap justify-center gap-4 mb-12",role:"tablist","aria-label":"Filter skills by category",children:[(0,i.jsx)("button",{onClick:()=>n("All"),role:"tab","aria-selected":t==="All","aria-controls":"skills-All",className:`px-6 py-3 rounded-xl font-medium transition-all duration-300 border cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${t==="All"?e?"bg-teal-500/30 text-white border-teal-400/50 focus:ring-teal-400 shadow-lg":"bg-emerald-500/30 text-black border-emerald-400/50 focus:ring-emerald-400 shadow-lg":e?"bg-teal-500/20 text-white hover:bg-teal-500/30 border-teal-400/30 hover:scale-105":"bg-emerald-500/20 text-black hover:bg-emerald-500/30 border-emerald-400/30 hover:scale-105"}`,children:"All"}),On.map(o=>(0,i.jsx)("button",{onClick:()=>n(o),role:"tab","aria-selected":t===o,"aria-controls":`skills-${o}`,className:`px-6 py-3 rounded-xl font-medium transition-all duration-300 border cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${t===o?e?"bg-teal-500/30 text-white border-teal-400/50 focus:ring-teal-400 shadow-lg":"bg-emerald-500/30 text-black border-emerald-400/50 focus:ring-emerald-400 shadow-lg":e?"bg-teal-500/20 text-white hover:bg-teal-500/30 border-teal-400/30 hover:scale-105":"bg-emerald-500/20 text-black hover:bg-emerald-500/30 border-emerald-400/30 hover:scale-105"}`,children:o},o))]}),(0,i.jsx)(E.div,{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6",role:"tabpanel",id:`skills-${t}`,"aria-label":`${t} skills`,variants:Le,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:r.map(o=>(0,i.jsxs)(E.div,{className:`flex flex-col items-center space-y-3 p-4 rounded-2xl transition-all duration-300 hover:scale-105 group ${e?"darkMode bg-[#444444] hover:bg-gray-600":"bg-gray-100 hover:bg-gray-200"}`,variants:z,whileHover:{y:-5},role:"img","aria-label":`${o.title} skill`,children:[(0,i.jsx)("div",{className:"w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-teal-500/20 p-2 border border-purple-400/30",children:(0,i.jsx)("img",{src:o.imageSrc,alt:`${o.title} logo`,className:"w-full h-full object-contain",width:"80",height:"80",loading:"lazy",decoding:"async"})}),(0,i.jsx)("span",{className:`text-sm font-medium text-center transition-colors duration-300 ${e?"text-white/80 group-hover:text-white":"text-black/80 group-hover:text-black"}`,children:o.title})]},o.title))},t),r.length===0&&(0,i.jsx)(E.div,{className:"text-center py-16",variants:z,children:(0,i.jsx)("p",{className:`text-lg ${e?"text-white/80":"text-gray-700"}`,children:"No skills found for the selected category."})})]})]})})},Bn=[{title:"Databricks Certified Data Engineer Associate",imageSrc:"image-skills/certificates/databricks-data-engineer-associate.png",url:"https://credentials.databricks.com/ecb77163-c63a-45f7-a02f-7747fe0ad658#acc.vuI371hQ"},{title:"Databricks Certified Data Engineer Professional",imageSrc:"image-skills/certificates/databricks-data-engineer-professional.png",url:"https://credentials.databricks.com/40252957-e8c8-4c3d-8170-c7655543c307#acc.Q6Kku94J"}],Fn=()=>{const{darkMode:e}=H();return(0,i.jsxs)("section",{className:"p-4 sm:p-6 lg:p-8",children:[(0,i.jsx)("h2",{className:"p-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center",children:"Certificates"}),(0,i.jsx)("div",{className:"max-w-6xl mx-auto flex justify-center gap-6 sm:gap-8 text-center",children:Bn.map((t,a)=>{const r=(0,i.jsxs)(E.div,{className:`w-48 sm:w-56 lg:w-72 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 ${e?"bg-[#444444] hover:bg-gray-600":"bg-gray-100 hover:bg-gray-200"}`,variants:z,whileInView:{opacity:1,y:0},initial:{opacity:0,y:10},viewport:{once:!0},transition:{duration:.2,delay:a*.03},children:[(0,i.jsx)("img",{src:t.imageSrc,alt:t.title,width:"128",height:"128",loading:"lazy",decoding:"async",className:"mx-auto w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain select-none"}),(0,i.jsx)("h3",{className:`mt-4 text-lg sm:text-xl font-medium text-center line-clamp-2 ${e?"text-white":"text-black"}`,children:t.title})]});return(0,i.jsx)(l.Fragment,{children:t.url?(0,i.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer","aria-label":t.title,children:r}):r},t.title)})})]})},Hn=[{title:"Air Quality REST API",description:"A Flask REST API that trains and serves machine-learning models to predict air quality from weather and sensor data. Containerised with Docker and deployed on Kubernetes behind Nginx and Gunicorn, with a Swagger-documented API.",links:[{label:"View Code",url:"https://github.com/trencho/air-quality-rest-api"}],technologies:["Python","Flask","Scikit-learn","Pandas","NumPy","MongoDB","Docker","Kubernetes","Nginx","Gunicorn","Swagger"],imageSrc:"image-projects/air-quality-rest-api.png"},{title:"Crypto Prophet",description:"A FastAPI service that trains machine-learning models to forecast cryptocurrency prices, exposing predictions through a documented REST API. Packaged with Docker for reproducible deployments.",links:[{label:"View Code",url:"https://github.com/trencho/crypto-prophet"}],technologies:["Python","FastAPI","Scikit-learn","Pandas","NumPy","Docker","Swagger"],imageSrc:"image-projects/crypto-prophet.png"},{title:"Task Manager",description:"A full-stack task-management app: a Spring Boot REST API with secured authentication and MongoDB persistence, paired with a Vue.js frontend for registering, logging in and managing tasks.",links:[{label:"Backend",url:"https://github.com/trencho/task-manager-spring"},{label:"Frontend",url:"https://github.com/trencho/task-manager-vue"}],technologies:["Java","Spring Boot","Spring Security","MongoDB","Vue.js","JavaScript","Docker"],imageSrc:"image-projects/task-manager.png"}];function Vn(e){return I({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"},child:[]}]})(e)}var Un=()=>{const{darkMode:e}=H();return(0,i.jsxs)("section",{className:"py-8 sm:py-12",children:[(0,i.jsx)("h2",{className:"text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12",children:"My Projects"}),(0,i.jsx)("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 md:px-8",children:Hn.map((t,a)=>(0,i.jsxs)(E.div,{className:`flex flex-col md:flex-row mb-10 sm:mb-12 shadow-lg rounded-lg p-6 ${e?"bg-[#444444]":"bg-gray-100"} ${a%2!==0?"md:flex-row-reverse":""}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:Nn,transition:{delay:a*.2},children:[(0,i.jsx)(E.div,{className:"w-full md:w-1/2 p-4 flex justify-center items-center",whileHover:{scale:1.1,rotate:2},transition:{duration:.3},children:(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{srcSet:t.imageSrc.replace(/\.png$/,".webp"),type:"image/webp"}),(0,i.jsx)("img",{src:t.imageSrc,alt:t.title,width:"240",height:"240",loading:"lazy",decoding:"async",className:"w-48 h-48 sm:w-60 sm:h-60 object-contain rounded-lg shadow-2xl select-none"})]})}),(0,i.jsxs)("div",{className:"w-full md:w-1/2 p-4 flex flex-col justify-center",children:[(0,i.jsx)("h3",{className:"text-xl sm:text-2xl font-semibold mb-4",children:t.title}),(0,i.jsx)("p",{className:"mb-4",children:t.description}),(0,i.jsx)("div",{className:"flex flex-wrap gap-2 mb-4",children:t.technologies.map(r=>(0,i.jsx)("span",{className:"bg-gray-700 text-white rounded-full px-3 py-1 text-sm font-medium select-none",children:r},r))}),(0,i.jsx)("div",{className:"flex flex-wrap gap-4",children:t.links.map(r=>(0,i.jsxs)("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",className:`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 select-none ${e?"bg-gray-600 text-white hover:bg-gray-500":"bg-black text-white hover:bg-gray-800"}`,"aria-label":`${t.title} – ${r.label}`,children:[(0,i.jsx)("span",{children:r.label}),(0,i.jsx)(Vn,{className:"text-xl","aria-hidden":"true"})]},r.url))})]})]},t.title))})]})};function Gt(e){var t,a,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(a=Gt(e[t]))&&(r&&(r+=" "),r+=a)}else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function q(){for(var e,t,a=0,r="",n=arguments.length;a<n;a++)(e=arguments[a])&&(t=Gt(e))&&(r&&(r+=" "),r+=t);return r}var ce=e=>typeof e=="number"&&!isNaN(e),Y=e=>typeof e=="string",W=e=>typeof e=="function",Jn=e=>Y(e)||ce(e),Ue=e=>Y(e)||W(e)?e:null,Wn=(e,t)=>e===!1||ce(e)&&e>0?e:t,Je=e=>(0,l.isValidElement)(e)||Y(e)||W(e)||ce(e);function Gn(e,t,a=300){let{scrollHeight:r,style:n}=e;requestAnimationFrame(()=>{n.minHeight="initial",n.height=r+"px",n.transition=`all ${a}ms`,requestAnimationFrame(()=>{n.height="0",n.padding="0",n.margin="0",setTimeout(t,a)})})}function ke({enter:e,exit:t,appendPosition:a=!1,collapse:r=!0,collapseDuration:n=300}){return function({children:o,position:s,preventExitTransition:c,done:u,nodeRef:d,isIn:m,playToast:f}){let h=a?`${e}--${s}`:e,g=a?`${t}--${s}`:t,v=(0,l.useRef)(0);return(0,l.useLayoutEffect)(()=>{let b=d.current,y=h.split(" "),w=p=>{p.target===d.current&&(f(),b.removeEventListener("animationend",w),b.removeEventListener("animationcancel",w),v.current===0&&p.type!=="animationcancel"&&b.classList.remove(...y))};b.classList.add(...y),b.addEventListener("animationend",w),b.addEventListener("animationcancel",w)},[]),(0,l.useEffect)(()=>{let b=d.current,y=()=>{b.removeEventListener("animationend",y),r?Gn(b,u,n):u()};m||(c?y():(v.current=1,b.className+=` ${g}`,b.addEventListener("animationend",y)))},[m]),l.createElement(l.Fragment,null,o)}}function bt(e,t){return{content:qt(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function qt(e,t,a=!1){return(0,l.isValidElement)(e)&&!Y(e.type)?(0,l.cloneElement)(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:a}):W(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:a}):e}function qn({closeToast:e,theme:t,ariaLabel:a="close"}){return l.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":a},l.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Kn({delay:e,isRunning:t,closeToast:a,type:r="default",hide:n,className:o,controlledProgress:s,progress:c,rtl:u,isIn:d,theme:m}){let f=n||s&&c===0,h={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};s&&(h.transform=`scaleX(${c})`);let g=q("Toastify__progress-bar",s?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":u}),v=W(o)?o({rtl:u,type:r,defaultClassName:g}):q(g,o),b={[s&&c>=1?"onTransitionEnd":"onAnimationEnd"]:s&&c<1?null:()=>{d&&a()}};return l.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":f},l.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${m} Toastify__progress-bar--${r}`}),l.createElement("div",{role:"progressbar","aria-hidden":f?"true":"false","aria-label":"notification timer","aria-valuenow":s?Math.round(c*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:v,style:h,...b}))}var Yn=1,Kt=()=>`${Yn++}`;function Xn(e,t,a){let r=1,n=0,o=[],s=[],c=t,u=new Map,d=new Set,m=p=>(d.add(p),()=>d.delete(p)),f=()=>{s=Array.from(u.values()),d.forEach(p=>p())},h=({containerId:p,toastId:x,updateId:_})=>{let T=p?p!==e:e!==1,C=u.has(x)&&_==null;return T||C},g=(p,x)=>{u.forEach(_=>{var T;(x==null||x===_.props.toastId)&&((T=_.toggle)==null||T.call(_,p))})},v=p=>{var x,_;p.isActive&&((_=(x=p.props)==null?void 0:x.onClose)==null||_.call(x,p.removalReason),p.isActive=!1,a(bt(p,"removed")))},b=p=>{if(p==null)u.forEach(v);else{let x=u.get(p);x&&v(x)}f()},y=()=>{n-=o.length,o=[]},w=p=>{var x,_;let{toastId:T,updateId:C}=p.props,k=C==null;p.staleId&&u.delete(p.staleId),p.isActive=!0,u.set(T,p),f(),a(bt(p,k?"added":"updated")),k&&((_=(x=p.props).onOpen)==null||_.call(x))};return{id:e,props:c,observe:m,toggle:g,removeToast:b,toasts:u,clearQueue:y,buildToast:(p,x)=>{if(h(x))return;let{toastId:_,updateId:T,data:C,staleId:k,delay:S}=x,N=T==null;N&&n++;let M={...c,style:c.toastStyle,key:r++,...Object.fromEntries(Object.entries(x).filter(([X,V])=>V!=null)),toastId:_,updateId:T,data:C,isIn:!1,className:Ue(x.className||c.toastClassName),progressClassName:Ue(x.progressClassName||c.progressClassName),autoClose:x.isLoading?!1:Wn(x.autoClose,c.autoClose),closeToast(X){let V=u.get(_);V&&(V.removalReason=X,b(_))},deleteToast(){if(u.get(_)!=null){if(u.delete(_),n--,n<0&&(n=0),o.length>0){w(o.shift());return}f()}}};M.closeButton=c.closeButton,x.closeButton===!1||Je(x.closeButton)?M.closeButton=x.closeButton:x.closeButton===!0&&(M.closeButton=Je(c.closeButton)?c.closeButton:!0);let D={content:p,props:M,staleId:k};c.limit&&c.limit>0&&n>c.limit&&N?o.push(D):ce(S)?setTimeout(()=>{w(D)},S):w(D)},setProps(p){c=p},setToggle:(p,x)=>{let _=u.get(p);_&&(_.toggle=x)},isToastActive:p=>{var x;return(x=u.get(p))==null?void 0:x.isActive},getSnapshot:()=>s}}var L=new Map,ne=[],We=new Set,Qn=e=>We.forEach(t=>t(e)),Yt=()=>L.size>0;function Zn(){ne.forEach(e=>Qt(e.content,e.options)),ne=[]}var eo=(e,{containerId:t})=>{var a;return(a=L.get(t||1))==null?void 0:a.toasts.get(e)};function Xt(e,t){var a;if(t)return!!((a=L.get(t))!=null&&a.isToastActive(e));let r=!1;return L.forEach(n=>{n.isToastActive(e)&&(r=!0)}),r}function to(e){if(!Yt()){ne=ne.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||Jn(e))L.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=L.get(e.containerId);t?t.removeToast(e.id):L.forEach(a=>{a.removeToast(e.id)})}}var ao=(e={})=>{L.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function Qt(e,t){Je(e)&&(Yt()||ne.push({content:e,options:t}),L.forEach(a=>{a.buildToast(e,t)}))}function ro(e){var t;(t=L.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function Zt(e,t){L.forEach(a=>{(t==null||!(t!=null&&t.containerId)||t?.containerId===a.id)&&a.toggle(e,t?.id)})}function no(e){let t=e.containerId||1;return{subscribe(a){let r=Xn(t,e,Qn);L.set(t,r);let n=r.observe(a);return Zn(),()=>{n(),L.delete(t)}},setProps(a){var r;(r=L.get(t))==null||r.setProps(a)},getSnapshot(){var a;return(a=L.get(t))==null?void 0:a.getSnapshot()}}}function oo(e){return We.add(e),()=>{We.delete(e)}}function so(e){return e&&(Y(e.toastId)||ce(e.toastId))?e.toastId:Kt()}function ue(e,t){return Qt(e,t),t.toastId}function Ee(e,t){return{...t,type:t&&t.type||e,toastId:so(t)}}function Te(e){return(t,a)=>ue(t,Ee(e,a))}function j(e,t){return ue(e,Ee("default",t))}j.loading=(e,t)=>ue(e,Ee("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function io(e,{pending:t,error:a,success:r},n){let o;t&&(o=Y(t)?j.loading(t,n):j.loading(t.render,{...n,...t}));let s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(d,m,f)=>{if(m==null){j.dismiss(o);return}let h={type:d,...s,...n,data:f},g=Y(m)?{render:m}:m;return o?j.update(o,{...h,...g}):j(g.render,{...h,...g}),f},u=W(e)?e():e;return u.then(d=>c("success",r,d)).catch(d=>c("error",a,d)),u}j.promise=io;j.success=Te("success");j.info=Te("info");j.error=Te("error");j.warning=Te("warning");j.warn=j.warning;j.dark=(e,t)=>ue(e,Ee("default",{theme:"dark",...t}));function lo(e){to(e)}j.dismiss=lo;j.clearWaitingQueue=ao;j.isActive=Xt;j.update=(e,t={})=>{let a=eo(e,t);if(a){let{props:r,content:n}=a,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:Kt()};o.toastId!==e&&(o.staleId=e);let s=o.render||n;delete o.render,ue(s,o)}};j.done=e=>{j.update(e,{progress:1})};j.onChange=oo;j.play=e=>Zt(!0,e);j.pause=e=>Zt(!1,e);function co(e){var t;let{subscribe:a,getSnapshot:r,setProps:n}=(0,l.useRef)(no(e)).current;n(e);let o=(t=(0,l.useSyncExternalStore)(a,r,r))==null?void 0:t.slice();function s(c){if(!o)return[];let u=new Map;return e.newestOnTop&&o.reverse(),o.forEach(d=>{let{position:m}=d.props;u.has(m)||u.set(m,[]),u.get(m).push(d)}),Array.from(u,d=>c(d[0],d[1]))}return{getToastToRender:s,isToastActive:Xt,count:o?.length}}function uo(e){let[t,a]=(0,l.useState)(!1),[r,n]=(0,l.useState)(!1),o=(0,l.useRef)(null),s=(0,l.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:c,pauseOnHover:u,closeToast:d,onClick:m,closeOnClick:f}=e;ro({id:e.toastId,containerId:e.containerId,fn:a}),(0,l.useEffect)(()=>{if(e.pauseOnFocusLoss)return h(),()=>{g()}},[e.pauseOnFocusLoss]);function h(){document.hasFocus()||w(),window.addEventListener("focus",y),window.addEventListener("blur",w)}function g(){window.removeEventListener("focus",y),window.removeEventListener("blur",w)}function v(k){if(e.draggable===!0||e.draggable===k.pointerType){p();let S=o.current;s.canCloseOnClick=!0,s.canDrag=!0,S.style.transition="none",e.draggableDirection==="x"?(s.start=k.clientX,s.removalDistance=S.offsetWidth*(e.draggablePercent/100)):(s.start=k.clientY,s.removalDistance=S.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function b(k){let{top:S,bottom:N,left:M,right:D}=o.current.getBoundingClientRect();k.pointerType==="mouse"&&e.pauseOnHover&&k.clientX>=M&&k.clientX<=D&&k.clientY>=S&&k.clientY<=N?w():y()}function y(){a(!0)}function w(){a(!1)}function p(){s.didMove=!1,document.addEventListener("pointermove",_),document.addEventListener("pointerup",T)}function x(){document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",T)}function _(k){let S=o.current;if(s.canDrag&&S){s.didMove=!0,t&&w(),e.draggableDirection==="x"?s.delta=k.clientX-s.start:s.delta=k.clientY-s.start,s.start!==k.clientX&&(s.canCloseOnClick=!1);let N=e.draggableDirection==="x"?`${s.delta}px, var(--y)`:`0, calc(${s.delta}px + var(--y))`;S.style.transform=`translate3d(${N},0)`,S.style.opacity=`${1-Math.abs(s.delta/s.removalDistance)}`}}function T(){x();let k=o.current;if(s.canDrag&&s.didMove&&k){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance){n(!0),e.closeToast(!0),e.collapseAll();return}k.style.transition="transform 0.2s, opacity 0.2s",k.style.removeProperty("transform"),k.style.removeProperty("opacity")}}let C={onPointerDown:v,onPointerUp:b};return c&&u&&(C.onMouseEnter=w,e.stacked||(C.onMouseLeave=y)),f&&(C.onClick=k=>{m&&m(k),s.canCloseOnClick&&d(!0)}),{playToast:y,pauseToast:w,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:C}}var ea=typeof window<"u"?l.useLayoutEffect:l.useEffect,Se=({theme:e,type:t,isLoading:a,...r})=>l.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function mo(e){return l.createElement(Se,{...e},l.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function fo(e){return l.createElement(Se,{...e},l.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function ho(e){return l.createElement(Se,{...e},l.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function po(e){return l.createElement(Se,{...e},l.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function go(){return l.createElement("div",{className:"Toastify__spinner"})}var Ge={info:fo,warning:mo,success:ho,error:po,spinner:go},yo=e=>e in Ge;function xo({theme:e,type:t,isLoading:a,icon:r}){let n=null,o={theme:e,type:t};return r===!1||(W(r)?n=r({...o,isLoading:a}):(0,l.isValidElement)(r)?n=(0,l.cloneElement)(r,o):a?n=Ge.spinner():yo(t)&&(n=Ge[t](o))),n}var vo=e=>{let{isRunning:t,preventExitTransition:a,toastRef:r,eventHandlers:n,playToast:o}=uo(e),{closeButton:s,children:c,autoClose:u,onClick:d,type:m,hideProgressBar:f,closeToast:h,transition:g,position:v,className:b,style:y,progressClassName:w,updateId:p,role:x,progress:_,rtl:T,toastId:C,deleteToast:k,isIn:S,isLoading:N,closeOnClick:M,theme:D,ariaLabel:X}=e,V=q("Toastify__toast",`Toastify__toast-theme--${D}`,`Toastify__toast--${m}`,{"Toastify__toast--rtl":T},{"Toastify__toast--close-on-click":M}),me=W(b)?b({rtl:T,position:v,type:m,defaultClassName:V}):q(V,b),$=xo(e),ot=!!_||!u,Ce={closeToast:h,type:m,theme:D},fe=null;return s===!1||(W(s)?fe=s(Ce):(0,l.isValidElement)(s)?fe=(0,l.cloneElement)(s,Ce):fe=qn(Ce)),l.createElement(g,{isIn:S,done:k,position:v,preventExitTransition:a,nodeRef:r,playToast:o},l.createElement("div",{id:C,tabIndex:0,onClick:d,"data-in":S,className:me,...n,style:y,ref:r,...S&&{role:x,"aria-label":X}},$!=null&&l.createElement("div",{className:q("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!N})},$),qt(c,e,!t),fe,!e.customProgressBar&&l.createElement(Kn,{...p&&!ot?{key:`p-${p}`}:{},rtl:T,theme:D,delay:u,isRunning:t,isIn:S,closeToast:h,hide:f,type:m,className:w,controlledProgress:ot,progress:_||0})))},je=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),bo=ke(je("bounce",!0)),ls=ke(je("slide",!0)),cs=ke(je("zoom")),us=ke(je("flip")),wo={position:"top-right",transition:bo,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function _o(e){let t={...wo,...e},a=e.stacked,[r,n]=(0,l.useState)(!0),o=(0,l.useRef)(null),{getToastToRender:s,isToastActive:c,count:u}=co(t),{className:d,style:m,rtl:f,containerId:h,hotKeys:g}=t;function v(y){let w=q("Toastify__toast-container",`Toastify__toast-container--${y}`,{"Toastify__toast-container--rtl":f});return W(d)?d({position:y,rtl:f,defaultClassName:w}):q(w,Ue(d))}function b(){a&&(n(!0),j.play())}return ea(()=>{var y;if(a){let w=o.current.querySelectorAll('[data-in="true"]'),p=12,x=(y=t.position)==null?void 0:y.includes("top"),_=0,T=0;Array.from(w).reverse().forEach((C,k)=>{let S=C;S.classList.add("Toastify__toast--stacked"),k>0&&(S.dataset.collapsed=`${r}`),S.dataset.pos||(S.dataset.pos=x?"top":"bot");let N=_*(r?.2:1)+(r?0:p*k),M=Math.max(.5,1-(r?T:0));S.style.setProperty("--y",`${x?N:N*-1}px`),S.style.setProperty("--g",`${p}`),S.style.setProperty("--s",`${M}`),_+=S.offsetHeight,T+=.025})}},[r,u,a]),(0,l.useEffect)(()=>{function y(w){var p;let x=o.current;g(w)&&((p=x?.querySelector('[tabIndex="0"]'))==null||p.focus(),n(!1),j.pause()),w.key==="Escape"&&(document.activeElement===x||x!=null&&x.contains(document.activeElement))&&(n(!0),j.play())}return document.addEventListener("keydown",y),()=>{document.removeEventListener("keydown",y)}},[g]),l.createElement("section",{ref:o,className:"Toastify",id:h,onMouseEnter:()=>{a&&(n(!1),j.pause())},onMouseLeave:b,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},s((y,w)=>{let p=w.length?{...m}:{...m,pointerEvents:"none"};return l.createElement("div",{tabIndex:-1,className:v(y),"data-stacked":a,style:p,key:`c-${y}`},w.map(({content:x,props:_})=>l.createElement(vo,{..._,stacked:a,collapseAll:b,isIn:c(_.toastId,_.containerId),key:`t-${_.key}`},x)))}))}var ko=`:root {
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
`,wt=new Map,Eo=(e,t)=>{ea(()=>{if(!e||typeof document>"u")return;let a=document,r=wt.get(a);if(r){t&&r.setAttribute("nonce",t);return}let n=a.createElement("style");n.textContent=e,t&&n.setAttribute("nonce",t),a.head.appendChild(n),wt.set(a,n)},[t])};function To(e){return Eo(ko,e.nonce),l.createElement(_o,{...e})}var K={emailjs:{serviceId:"service_2936zzf",templateId:"template_q859oph",publicKey:"YDO5GNDdewVvMoyTz"},recaptcha:{siteKey:"6LeJDrIqAAAAAAJz4msjc88QwwlPf-Qge27d_t7a"},contact:{email:"atrenchevski@gmail.com"}},So=()=>{const e=["VITE_CONTACT_EMAIL","VITE_EMAILJS_SERVICE_ID","VITE_EMAILJS_TEMPLATE_ID","VITE_EMAILJS_PUBLIC_KEY","VITE_RECAPTCHA_SITE_KEY"].filter(t=>!{BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_CONTACT_EMAIL:"atrenchevski@gmail.com",VITE_EMAILJS_PUBLIC_KEY:"YDO5GNDdewVvMoyTz",VITE_EMAILJS_SERVICE_ID:"service_2936zzf",VITE_EMAILJS_TEMPLATE_ID:"template_q859oph",VITE_RECAPTCHA_SITE_KEY:"6LeJDrIqAAAAAAJz4msjc88QwwlPf-Qge27d_t7a"}[t]);if(e.length>0){const t=`Missing required environment variables: ${e.join(", ")}. Please check your .env file.`;if(typeof window<"u")throw new Error(t);console.warn(t)}},de=class{constructor(e=0,t="Network Error"){this.status=e,this.text=t}},jo=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},P={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:jo()},nt=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},Co=(e,t="https://api.emailjs.com")=>{if(!e)return;const a=nt(e);P.publicKey=a.publicKey,P.blockHeadless=a.blockHeadless,P.storageProvider=a.storageProvider,P.blockList=a.blockList,P.limitRate=a.limitRate,P.origin=a.origin||t},ta=async(e,t,a={})=>{const r=await fetch(P.origin+e,{method:"POST",headers:a,body:t}),n=await r.text(),o=new de(r.status,n);if(r.ok)return o;throw o},aa=(e,t,a)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||typeof a!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Ro=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},ra=e=>e.webdriver||!e.languages||e.languages.length===0,na=()=>new de(451,"Unavailable For Headless Browser"),No=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},Po=e=>!e.list?.length||!e.watchVariable,Io=(e,t)=>e instanceof FormData?e.get(t):e[t],oa=(e,t)=>{if(Po(e))return!1;No(e.list,e.watchVariable);const a=Io(t,e.watchVariable);return typeof a!="string"?!1:e.list.includes(a)},sa=()=>new de(403,"Forbidden"),Lo=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},Mo=async(e,t,a)=>{const r=Number(await a.get(e)||0);return t-Date.now()+r},ia=async(e,t,a)=>{if(!t.throttle||!a)return!1;Lo(t.throttle,t.id);const r=t.id||e;return await Mo(r,t.throttle,a)>0?!0:(await a.set(r,Date.now().toString()),!1)},la=()=>new de(429,"Too Many Requests"),Ao=async(e,t,a,r)=>{const n=nt(r),o=n.publicKey||P.publicKey,s=n.blockHeadless||P.blockHeadless,c=n.storageProvider||P.storageProvider,u={...P.blockList,...n.blockList},d={...P.limitRate,...n.limitRate};return s&&ra(navigator)?Promise.reject(na()):(aa(o,e,t),Ro(a),a&&oa(u,a)?Promise.reject(sa()):await ia(location.pathname,d,c)?Promise.reject(la()):ta("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:o,service_id:e,template_id:t,template_params:a}),{"Content-type":"application/json"}))},Do=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},$o=e=>typeof e=="string"?document.querySelector(e):e,Oo=async(e,t,a,r)=>{const n=nt(r),o=n.publicKey||P.publicKey,s=n.blockHeadless||P.blockHeadless,c=P.storageProvider||n.storageProvider,u={...P.blockList,...n.blockList},d={...P.limitRate,...n.limitRate};if(s&&ra(navigator))return Promise.reject(na());const m=$o(a);aa(o,e,t),Do(m);const f=new FormData(m);return oa(u,f)?Promise.reject(sa()):await ia(location.pathname,d,c)?Promise.reject(la()):(f.append("lib_version","4.4.1"),f.append("service_id",e),f.append("template_id",t),f.append("user_id",o),ta("/api/v1.0/email/send-form",f))},zo={init:Co,send:Ao,sendForm:Oo,EmailJSResponseStatus:de};So();var Me={serviceId:K.emailjs.serviceId,templateId:K.emailjs.templateId,publicKey:K.emailjs.publicKey},Bo=async e=>{try{return{success:!0,data:await zo.send(Me.serviceId,Me.templateId,{name:e.name,email:e.email,message:e.message,to_name:"Aleksandar Trenchevski",to_email:K.contact.email},Me.publicKey)}}catch(t){const a=t instanceof Error?t.message:"Failed to send email";return console.error("Email send error:",t),{success:!1,error:a}}},Fo=(e={})=>{const{threshold:t=.1,rootMargin:a="0px",triggerOnce:r=!0}=e,[n,o]=(0,l.useState)(!1),[s,c]=(0,l.useState)(!1),u=(0,l.useRef)(null),d=(0,l.useRef)(!1);return(0,l.useEffect)(()=>{const m=u.current;if(!m)return;const f=new IntersectionObserver(([h])=>{if(!h)return;const g=h.isIntersecting;o(g),g&&!d.current&&(d.current=!0,c(!0))},{threshold:t,rootMargin:a});return f.observe(m),()=>{f.unobserve(m),f.disconnect()}},[t,a]),{ref:u,isIntersecting:r?s:n}},Ho=({onChange:e,theme:t="dark"})=>{const a=K.recaptcha.siteKey,[r,n]=(0,l.useState)(!1),[o,s]=(0,l.useState)(null),{ref:c,isIntersecting:u}=Fo({rootMargin:"100px",triggerOnce:!0,threshold:.01});return(0,l.useEffect)(()=>{!a||!u||r||(async()=>{try{const d=(await tt(()=>import("./esm-uhhtIFB7.js"),__vite__mapDeps([0,1,2]))).default;s(()=>d),n(!0)}catch(d){console.error("Failed to load reCAPTCHA:",d)}})()},[a,u,r]),(0,i.jsx)("div",{ref:c,className:"flex flex-col items-center justify-center min-h-[78px]",children:a?o?(0,i.jsx)(o,{sitekey:a,onChange:e,theme:t}):(0,i.jsx)("div",{className:"flex items-center justify-center text-white/50 text-sm",children:"Loading verification..."}):(0,i.jsx)("div",{className:"flex items-center justify-center text-white/50 text-sm text-center",children:"Verification is unavailable right now."})})},ca=e=>({position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:e?"dark":"light"}),ge=(e,t)=>{j.error(e,ca(t))},Vo=(e,t)=>{j.success(e,ca(t))},Uo=()=>{const[e,t]=(0,l.useState)({name:"",email:"",message:""}),[a,r]=(0,l.useState)(!1),[n,o]=(0,l.useState)(null),[s,c]=(0,l.useState)(!1),[u,d]=(0,l.useState)(!1),[m,f]=(0,l.useState)({}),{darkMode:h}=H(),g=()=>{const p={},C=e.name.trim(),k=e.email.trim(),S=e.message.trim();return C?C.length<2&&(p.name="Name must be at least 2 characters"):p.name="Name is required",k?(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(k)||k.length>254)&&(p.email="Please enter a valid email address"):p.email="Email is required",S?S.length<10?p.message="Message must be at least 10 characters":S.length>5e3&&(p.message="Message cannot exceed 5000 characters"):p.message="Message is required",f(p),Object.keys(p).length===0},v=p=>{const{name:x,value:_}=p.target;t(T=>({...T,[x]:_})),m[x]&&f(T=>({...T,[x]:""}))},b=p=>{o(p)},y=()=>{t({name:"",email:"",message:""}),f({}),o(null),r(!1),c(!1)},w=async p=>{if(p.preventDefault(),!g()){ge("Please fix the form errors before submitting.",h);return}if(!n){ge("Please complete the CAPTCHA to proceed.",h);return}d(!0);try{const x=await Bo(e);x.success?(r(!0),c(!0),Vo("Message sent successfully! I'll get back to you soon.",h)):ge(`Failed to send message: ${x.error}. Please try again or contact me directly.`,h)}catch(x){console.error("Form submission error:",x),ge("An unexpected error occurred. Please try again.",h)}finally{d(!1)}};return(0,i.jsxs)(E.section,{className:`p-6 sm:p-8 md:p-10 lg:p-16 rounded-xl shadow-lg max-w-4xl mx-auto my-8 md:my-12 ${h?"bg-[#444444]":"bg-gray-50"}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{staggerChildren:.2},children:[(0,i.jsx)(To,{}),(0,i.jsx)(E.h2,{className:`text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center ${h?"text-white":"text-gray-900"}`,variants:O,children:"Get In Touch"}),(0,i.jsxs)(E.p,{className:`text-base sm:text-lg lg:text-xl text-center mb-8 sm:mb-10 p-4 rounded-lg ${h?"bg-[#444444] text-white":"bg-gray-50 text-gray-600"}`,variants:O,children:["Feel free to contact me directly at"," ",(0,i.jsx)("a",{href:`mailto:${K.contact.email}`,className:`font-semibold ${h?"text-teal-400":"text-emerald-500"}`,children:K.contact.email})," ","or by filling out the form below. I'll get back to you as soon as I can."]}),s&&(0,i.jsxs)(E.div,{className:`text-center p-4 sm:p-6 rounded-lg shadow-md max-w-md mx-auto flex flex-col items-center justify-center ${h?"bg-green-900 border-green-600":"bg-green-50 border-green-400"}`,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5},role:"status","aria-live":"polite",children:[(0,i.jsx)(Tn,{className:`text-4xl mb-4 ${h?"text-green-400":"text-green-500"}`,"aria-hidden":"true"}),(0,i.jsx)("span",{className:`text-base sm:text-lg font-semibold mb-2 ${h?"text-white":"text-gray-900"}`,children:"Thank you! Your message has been sent successfully."}),(0,i.jsx)("button",{type:"button",onClick:y,className:`mt-4 px-6 py-2 rounded-full font-semibold transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 ${h?"bg-gray-600 text-white hover:bg-gray-500 focus:ring-teal-400":"bg-black text-white hover:bg-gray-800 focus:ring-emerald-500"}`,children:"Send another message"})]}),!a&&(0,i.jsxs)(E.form,{onSubmit:p=>{w(p)},className:`max-w-lg w-full p-6 sm:p-8 rounded-lg shadow-md mx-auto ${h?"bg-[#374151] text-white":"bg-white"}`,initial:"hidden",animate:"visible",variants:O,noValidate:!0,children:[(0,i.jsxs)(E.div,{className:"mb-4 sm:mb-6",variants:O,children:[(0,i.jsxs)("label",{htmlFor:"name",className:`block text-sm sm:text-base font-semibold mb-2 ${h?"text-white":"text-gray-700"}`,children:[(0,i.jsx)(bn,{className:"text-gray-500 mr-2 text-lg","aria-hidden":"true"}),"Your Name"]}),(0,i.jsx)("input",{id:"name",type:"text",name:"name",value:e.name,onChange:v,"aria-invalid":m.name?!0:void 0,"aria-describedby":m.name?"name-error":void 0,className:`w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${m.name?"border-red-500 focus:ring-red-400":h?"bg-gray-700 border-gray-600 text-white focus:ring-gray-500":"focus:ring-blue-400"}`,required:!0}),m.name&&(0,i.jsx)("p",{id:"name-error",className:"text-red-500 text-sm mt-1",role:"alert",children:m.name})]}),(0,i.jsxs)(E.div,{className:"mb-4 sm:mb-6",variants:O,children:[(0,i.jsxs)("label",{htmlFor:"email",className:`block text-sm sm:text-base font-semibold mb-2 ${h?"text-white":"text-gray-700"}`,children:[(0,i.jsx)(kn,{className:"text-gray-500 mr-2 text-lg","aria-hidden":"true"}),"Your Email"]}),(0,i.jsx)("input",{id:"email",type:"email",name:"email",value:e.email,onChange:v,"aria-invalid":m.email?!0:void 0,"aria-describedby":m.email?"email-error":void 0,className:`w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${m.email?"border-red-500 focus:ring-red-400":h?"bg-gray-700 border-gray-600 text-white focus:ring-gray-500":"focus:ring-blue-400"}`,required:!0}),m.email&&(0,i.jsx)("p",{id:"email-error",className:"text-red-500 text-sm mt-1",role:"alert",children:m.email})]}),(0,i.jsxs)(E.div,{className:"mb-4 sm:mb-6",variants:O,children:[(0,i.jsxs)("label",{htmlFor:"message",className:`block text-sm sm:text-base font-semibold mb-2 ${h?"text-white":"text-gray-700"}`,children:[(0,i.jsx)(En,{className:"text-gray-500 mr-2 text-lg","aria-hidden":"true"}),"Your Message"]}),(0,i.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:v,maxLength:5e3,"aria-invalid":m.message?!0:void 0,"aria-describedby":m.message?"message-error":void 0,className:`w-full p-2 sm:p-3 h-24 sm:h-32 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${m.message?"border-red-500 focus:ring-red-400":h?"bg-gray-700 border-gray-600 text-white focus:ring-gray-500":"focus:ring-blue-400"}`,required:!0}),(0,i.jsxs)("div",{className:"mt-1 flex items-center justify-between",children:[m.message?(0,i.jsx)("p",{id:"message-error",className:"text-red-500 text-sm",role:"alert",children:m.message}):(0,i.jsx)("span",{}),(0,i.jsxs)("span",{className:`text-xs ${h?"text-gray-300":"text-gray-500"}`,"aria-live":"polite",children:[e.message.length,"/5000"]})]})]}),(0,i.jsxs)(E.div,{className:"flex flex-col items-center justify-center",variants:O,children:[(0,i.jsx)(Ho,{onChange:b,theme:h?"dark":"light"}),(0,i.jsxs)(E.button,{type:"submit",disabled:u,className:`mt-6 px-6 py-3 rounded-full font-semibold transition flex items-center justify-center space-x-2 select-none ${u?h?"bg-gray-700 text-gray-400 cursor-not-allowed":"bg-gray-400 text-gray-600 cursor-not-allowed":h?"bg-gray-600 text-white hover:bg-gray-500 cursor-pointer":"bg-black text-white hover:bg-gray-800 cursor-pointer"}`,variants:O,"aria-busy":u,children:[u&&(0,i.jsx)(E.div,{className:"w-4 h-4 border-2 border-current border-t-transparent rounded-full",animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},"aria-hidden":"true"}),(0,i.jsx)("span",{children:u?"Sending...":"Send Message"})]})]})]})]})},Jo=()=>{const[e,t]=(0,l.useState)(!1),{darkMode:a}=H(),r=(0,l.useRef)(null),n=()=>{r.current&&clearTimeout(r.current),r.current=setTimeout(()=>{t(window.scrollY>100)},150)},o=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(0,l.useEffect)(()=>(window.addEventListener("scroll",n,{passive:!0}),()=>{window.removeEventListener("scroll",n),r.current&&clearTimeout(r.current)}),[]),(0,i.jsx)(Ae,{children:e&&(0,i.jsx)(E.button,{onClick:o,className:"fixed bottom-8 right-6 sm:bottom-10 sm:right-8 md:bottom-12 md:right-10 lg:bottom-16 lg:right-10 text-white rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center shadow-lg cursor-pointer",title:"Back to Top","aria-label":"Back to top",initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},transition:{type:"spring",stiffness:300,damping:20},style:{background:a?"#4fd1c5":"#10b981"},whileHover:{scale:1.2},children:(0,i.jsx)(Sn,{"aria-hidden":"true"})})})};function Wo(e){return I({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(e)}function Go(e){return I({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"},child:[]}]})(e)}function qo(e){return I({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"},child:[]}]})(e)}var Ko=()=>{const{darkMode:e}=H();return(0,i.jsxs)("footer",{className:`p-4 text-center ${e?"text-white":"text-gray-900"}`,children:[(0,i.jsxs)("p",{className:"text-xs sm:text-base",children:["© Aleksandar Trenchevski ",new Date().getFullYear(),". All rights reserved."]}),(0,i.jsxs)("div",{className:"mt-4",children:[(0,i.jsx)("span",{className:"text-xs sm:text-sm",children:"Built with:"}),(0,i.jsxs)("div",{className:"flex justify-center items-center mt-2 space-x-2 sm:space-x-4 text-xs sm:text-sm",children:[(0,i.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,i.jsx)(yn,{className:"text-blue-500"}),(0,i.jsx)("span",{children:"React"})]}),(0,i.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,i.jsx)(Go,{className:"text-blue-400"}),(0,i.jsx)("span",{children:"Tailwind CSS"})]}),(0,i.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,i.jsx)(qo,{className:"text-pink-500"}),(0,i.jsx)("span",{children:"Motion"})]}),(0,i.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,i.jsx)(Wo,{className:"text-blue-600"}),(0,i.jsx)("span",{children:"TypeScript"})]})]})]})]})},Yo=()=>{const{darkMode:e}=H();return(0,i.jsxs)("div",{className:`text-gray-900 ${e?"text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900":"text-gray-700 bg-gradient-to-r from-emerald-500 to-lime-400"}`,children:[(0,i.jsx)("a",{href:"#home",className:"sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-black focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-teal-500",children:"Skip to content"}),(0,i.jsx)(In,{}),(0,i.jsx)("section",{id:"home",className:"p-8",children:(0,i.jsx)(Ln,{})}),(0,i.jsx)("section",{id:"about",className:"p-8",children:(0,i.jsx)(Mn,{})}),(0,i.jsx)("section",{id:"experience",className:"p-8",children:(0,i.jsx)(Dn,{})}),(0,i.jsx)("section",{id:"skills",className:"p-8",children:(0,i.jsx)(zn,{})}),(0,i.jsx)("section",{id:"certificates",className:"p-8",children:(0,i.jsx)(Fn,{})}),(0,i.jsx)("section",{id:"projects",className:"p-8",children:(0,i.jsx)(Un,{})}),(0,i.jsx)("section",{id:"contact",className:"p-8",children:(0,i.jsx)(Uo,{})}),(0,i.jsx)(Jo,{}),(0,i.jsx)(Ko,{})]})},Xo=class extends l.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("Error caught by Error Boundary:",e,t)}handleReset=()=>{this.setState({hasError:!1,error:null})};render(){return this.state.hasError?(0,i.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 to-red-700 p-4",role:"alert","aria-live":"assertive",children:(0,i.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center",children:[(0,i.jsx)("h2",{className:"text-2xl font-bold text-red-600 mb-4",children:"Oops! Something went wrong"}),(0,i.jsx)("p",{className:"text-gray-600 mb-4",children:"We're sorry for the inconvenience. Please try refreshing the page or contact support if the problem persists."}),this.state.error&&(0,i.jsxs)("details",{className:"text-left mb-6",children:[(0,i.jsx)("summary",{className:"cursor-pointer text-sm text-gray-500 hover:text-gray-700",children:"Error details"}),(0,i.jsx)("pre",{className:"mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto max-h-32",children:this.state.error.toString()})]}),(0,i.jsx)("button",{onClick:this.handleReset,className:"bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition",children:"Try Again"})]})}):this.props.children}},Qo=(0,l.lazy)(()=>tt(()=>import("./NotFound-CH_S4F1s.js"),__vite__mapDeps([3,2,1]))),Zo=()=>{const[e,t]=(0,l.useState)(!0),a=()=>{t(!1)};return(0,i.jsx)(Xo,{children:(0,i.jsx)(pa,{reducedMotion:"user",children:(0,i.jsx)(ya,{children:(0,i.jsx)(qr,{children:(0,i.jsxs)("div",{className:"App",children:[e&&(0,i.jsx)(cn,{onComplete:a}),!e&&(0,i.jsx)(l.Suspense,{fallback:null,children:(0,i.jsxs)(xr,{children:[(0,i.jsx)(Oe,{path:"/",element:(0,i.jsx)(Yo,{})}),(0,i.jsx)(Oe,{path:"*",element:(0,i.jsx)(Qo,{})})]})})]})})})})})};(0,ga.createRoot)(document.getElementById("root")).render((0,i.jsx)(l.StrictMode,{children:(0,i.jsx)(Zo,{})}));export{Vt as n,H as t};
