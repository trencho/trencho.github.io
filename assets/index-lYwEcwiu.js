const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/esm-CEfkMi4K.js","assets/rolldown-runtime-Dik6OG8R.js","assets/motion-DkOTRUQo.js","assets/NotFound-CfmXOqGW.js","assets/Cv-Dxf6fq3E.js"])))=>i.map(i=>d[i]);
import{n as ja}from"./rolldown-runtime-Dik6OG8R.js";import{t as Ra}from"./react-CqpAAeAH.js";import{a as Na,c as Ia,i as Pa,n as La,o as qe,r as Da,s as Aa,t as S}from"./motion-DkOTRUQo.js";var Ma=Ra(),l=ja(Ia(),1),Ht=(0,l.createContext)(void 0),s=Aa(),Oa=({children:e})=>{const[t,a]=(0,l.useState)(()=>{if(typeof window>"u")return!1;try{const i=localStorage.getItem("darkMode");if(i!==null)return JSON.parse(i)===!0}catch(i){console.error("Error parsing saved theme:",i)}return window.matchMedia("(prefers-color-scheme: dark)").matches});(0,l.useEffect)(()=>{typeof document>"u"||document.documentElement.classList.toggle("dark",t)},[t]);const r=(0,l.useCallback)(()=>{a(i=>(localStorage.setItem("darkMode",JSON.stringify(!i)),!i))},[]),n=(0,l.useMemo)(()=>({darkMode:t,toggleDarkMode:r}),[t,r]);return(0,s.jsx)(Ht.Provider,{value:n,children:e})},nt=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Vt=/^[\\/]{2}/;function $a(e,t){return t+e.replace(/\\/g,"/")}var gt="popstate";function vt(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function za(e={}){function t(r,n){let i=n.state?.masked,{pathname:o,search:c,hash:d}=i||r.location;return Ye("",{pathname:o,search:c,hash:d},n.state&&n.state.usr||null,n.state&&n.state.key||"default",i?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function a(r,n){return typeof n=="string"?n:X(n)}return Fa(t,a,null,e)}function j(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function H(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ba(){return Math.random().toString(36).substring(2,10)}function yt(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Ye(e,t,a=null,r,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Z(t):t,state:a,key:t&&t.key||r||Ba(),mask:n}}function X({pathname:e="/",search:t="",hash:a=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function Z(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substring(a),e=e.substring(0,a));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Fa(e,t,a,r={}){let{window:n=document.defaultView,v5Compat:i=!1}=r,o=n.history,c="POP",d=null,u=f();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function f(){return(o.state||{idx:null}).idx}function m(){c="POP";let h=f(),b=h==null?null:h-u;u=h,d&&d({action:c,location:w.location,delta:b})}function p(h,b){c="PUSH";let g=vt(h)?h:Ye(w.location,h,b);a&&a(g,h),u=f()+1;let y=yt(g,u),_=w.createHref(g.mask||g);try{o.pushState(y,"",_)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;n.location.assign(_)}i&&d&&d({action:c,location:w.location,delta:1})}function v(h,b){c="REPLACE";let g=vt(h)?h:Ye(w.location,h,b);a&&a(g,h),u=f();let y=yt(g,u),_=w.createHref(g.mask||g);o.replaceState(y,"",_),i&&d&&d({action:c,location:w.location,delta:0})}function x(h){return Ha(n,h)}let w={get action(){return c},get location(){return e(n,o)},listen(h){if(d)throw new Error("A history only accepts one active listener");return n.addEventListener(gt,m),d=h,()=>{n.removeEventListener(gt,m),d=null}},createHref(h){return t(n,h)},createURL:x,encodeLocation(h){let b=x(h);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:p,replace:v,go(h){return o.go(h)}};return w}function Ha(e,t,a=!1){let r="http://localhost";e&&(r=e.location.origin!=="null"?e.location.origin:e.location.href),j(r,"No window.location.(origin|href) available to create URL");let n=typeof t=="string"?t:X(t);return n=n.replace(/ $/,"%20"),!a&&Vt.test(n)&&(n=r+n),new URL(n,r)}function Va(e,t,a="/"){return Ua(e,t,a,!1)}function Ua(e,t,a,r,n){let i=U((typeof t=="string"?Z(t):t).pathname||"/",a);if(i==null)return null;let o=n??Ga(e),c=null,d=ir(i);for(let u=0;c==null&&u<o.length;++u)c=nr(o[u],d,r);return c}function Ja(e,t){let{route:a,pathname:r,params:n}=e;return{id:a.id,pathname:r,params:n,loaderData:t[a.id],handle:a.handle}}function Ga(e){let t=Ut(e);return Wa(t),t}function Ut(e,t=[],a=[],r="",n=!1){let i=(o,c,d=n,u)=>{let f={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:c,route:o};if(f.relativePath.startsWith("/")){if(!f.relativePath.startsWith(r)&&d)return;j(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length)}let m=O([r,f.relativePath]),p=a.concat(f);o.children&&o.children.length>0&&(j(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Ut(o.children,t,p,m,d)),!(o.path==null&&!o.index)&&t.push({path:m,score:ar(m,o.index),routesMeta:p.map((v,x)=>{let[w,h]=Wt(v.relativePath,v.caseSensitive,x===p.length-1);return{...v,matcher:w,compiledParams:h}})})};return e.forEach((o,c)=>{if(o.path===""||!o.path?.includes("?"))i(o,c);else for(let d of Jt(o.path))i(o,c,!0,d)}),t}function Jt(e){let t=e.split("/");if(t.length===0)return[];let[a,...r]=t,n=a.endsWith("?"),i=a.replace(/\?$/,"");if(r.length===0)return n?[i,""]:[i];let o=Jt(r.join("/")),c=[];return c.push(...o.map(d=>d===""?i:[i,d].join("/"))),n&&c.push(...o),c.map(d=>e.startsWith("/")&&d===""?"/":d)}function Wa(e){e.sort((t,a)=>t.score!==a.score?a.score-t.score:rr(t.routesMeta.map(r=>r.childrenIndex),a.routesMeta.map(r=>r.childrenIndex)))}var qa=/^:[\w-]+$/,Ya=/^:[\w-]+/,Ka=3.5,Qa=3,Xa=2,Za=1,er=10,tr=-2,xt=e=>e==="*";function ar(e,t){let a=e.split("/"),r=a.length;return a.some(xt)&&(r+=tr),t&&(r+=Xa),a.filter(n=>!xt(n)).reduce((n,i)=>n+(qa.test(i)?Qa:Ya.test(i)?Ka:i===""?Za:er),r)}function rr(e,t){return e.length===t.length&&e.slice(0,-1).every((a,r)=>a===t[r])?e[e.length-1]-t[t.length-1]:0}function nr(e,t,a=!1){let{routesMeta:r}=e,n={},i="/",o=[];for(let c=0;c<r.length;++c){let d=r[c],u=c===r.length-1,f=i==="/"?t:t.slice(i.length)||"/",m={path:d.relativePath,caseSensitive:d.caseSensitive,end:u},p=d.matcher&&d.compiledParams?Gt(m,f,d.matcher,d.compiledParams):_e(m,f),v=d.route;if(!p&&u&&a&&!r[r.length-1].route.index&&(p=_e({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},f)),!p)return null;Object.assign(n,p.params),o.push({params:n,pathname:O([i,p.pathname]),pathnameBase:lr(O([i,p.pathnameBase])),route:v}),p.pathnameBase!=="/"&&(i=O([i,p.pathnameBase]))}return o}function _e(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,r]=Wt(e.path,e.caseSensitive,e.end);return Gt(e,t,a,r)}function Gt(e,t,a,r){let n=t.match(a);if(!n)return null;let i=n[0],o=ke(i,1),c=n.slice(1);return{params:r.reduce((d,{paramName:u,isOptional:f},m)=>{if(u==="*"){let v=c[m]||"";o=ke(i.slice(0,i.length-v.length),1)}const p=c[m];return f&&!p?d[u]=void 0:d[u]=(p||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:o,pattern:e}}function Wt(e,t=!1,a=!0){H(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,o,c,d,u)=>{if(r.push({paramName:o,isOptional:c!=null}),c){let f=u.charAt(d+i.length);return f&&f!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(?=\/|$|\()/g,"(?:/$1)?");return e.endsWith("*")?(r.push({paramName:"*"}),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,t?void 0:"i"),r]}function ir(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return H(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function U(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,r=e.charAt(a);return r&&r!=="/"?null:e.slice(a)||"/"}function or(e,t="/"){let{pathname:a,search:r="",hash:n=""}=typeof e=="string"?Z(e):e,i;return a?(a=Yt(a),a.startsWith("/")||a.startsWith("\\")?i=bt(a.substring(1),"/"):i=bt(a,t)):i=t,{pathname:i,search:cr(r),hash:dr(n)}}function bt(e,t){let a=ke(t).split("/");return e.split("/").forEach(r=>{r===".."?a.length>1&&a.pop():r!=="."&&a.push(r)}),a.length>1?a.join("/"):"/"}function ze(e,t,a,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function sr(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}function qt(e){let t=sr(e);return t.map((a,r)=>r===t.length-1?a.pathname:a.pathnameBase)}function it(e,t,a,r=!1){let n;typeof e=="string"?n=Z(e):(n={...e},j(!n.pathname||!n.pathname.includes("?"),ze("?","pathname","search",n)),j(!n.pathname||!n.pathname.includes("#"),ze("#","pathname","hash",n)),j(!n.search||!n.search.includes("#"),ze("#","search","hash",n)));let i=e===""||n.pathname==="",o=i?"/":n.pathname,c;if(o==null)c=a;else{let m=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),m-=1;n.pathname=p.join("/")}c=m>=0?t[m]:"/"}let d=or(n,c),u=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&a.endsWith("/");return!d.pathname.endsWith("/")&&(u||f)&&(d.pathname+="/"),d}var Yt=e=>e.replace(/[\\/]{2,}/g,"/"),O=e=>Yt(e.join("/"));function ke(e,t=0){let a=e.length;for(;a>t&&e.charCodeAt(a-1)===47;)a--;return a===e.length?e:e.slice(0,a)}var lr=e=>ke(e).replace(/^\/*/,"/"),cr=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,dr=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,ur=class{status;statusText;data;error;internal;constructor(e,t,a,r=!1){this.status=e,this.statusText=t||"",this.internal=r,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function fr(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function mr(e){return O(e.map(t=>t.route.path).filter(Boolean))||"/"}var Kt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Qt(e,t){let a=e;if(typeof a!="string"||!nt.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let r=a,n=!1;if(Kt)try{let i=new URL(window.location.href),o=Vt.test(a)?new URL($a(a,i.protocol)):new URL(a),c=U(o.pathname,t);o.origin===i.origin&&c!=null?a=c+o.search+o.hash:n=!0}catch{H(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:n,to:a}}var wt=new URL("http://localhost");function Xt(e){if(e.createURL)return e.createURL("/");try{return new URL(e.createHref("/"),wt)}catch{return wt}}function Be(e,t){return e.origin===t.origin&&(e.origin!=="null"||e.protocol===t.protocol&&e.host===t.host)}function hr(e,t){if(e.startsWith("//"))return!0;let a=t.protocol.toLowerCase();return e.toLowerCase().startsWith(a)?t.host===""||e.slice(a.length).startsWith("//"):!1}function Zt(e,t,a,r){let n=null;try{n=e==null?null:new URL(e,a)}catch{}let i=new URL(t,a),o=n!=null&&!Be(n,a),c=!Be(i,a);if(r==="reject"){if(o||c)throw new Error("External navigation is not allowed")}else if(c&&(n==null||!hr(e,n)||!Be(n,i)))throw new Error("External navigation is not allowed")}var ea=["POST","PUT","PATCH","DELETE"],Yo=new Set(ea),pr=["GET",...ea],Ko=new Set(pr),gr=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function vr(e){try{return gr.includes(new URL(e).protocol)}catch{return!1}}var oe=l.createContext(null);oe.displayName="DataRouter";var ta=l.createContext(null);ta.displayName="DataRouterState";var aa=l.createContext(null);aa.displayName="DataRouterData";var ot=l.createContext(null);ot.displayName="DataRouterNavigation";var ra=l.createContext(!1);function yr(){return l.useContext(ra)}var na=l.createContext({isTransitioning:!1});na.displayName="ViewTransition";var xr=l.createContext(null);xr.displayName="Fetchers";var Ke=l.createContext(null);Ke.displayName="Await";var D=l.createContext(null);D.displayName="Navigation";var se=l.createContext(null);se.displayName="Location";var K=l.createContext({outlet:null,matches:[],isDataRoute:!1});K.displayName="Route";var Ce=l.createContext(!1);Ce.displayName="IsDataRoute";var je=l.createContext(void 0);je.displayName="RouteId";var st=l.createContext(null);st.displayName="RouteError";var ia="REACT_ROUTER_ERROR",br="REDIRECT",wr="ROUTE_ERROR_RESPONSE";function _r(e){if(e.startsWith(`${ia}:${br}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function kr(e){if(e.startsWith(`${ia}:${wr}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new ur(t.status,t.statusText,t.data)}catch{}}function Er(e,{relative:t}={}){j(le(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:r}=l.useContext(D),{hash:n,pathname:i,search:o}=ce(e,{relative:t}),c=i;return a!=="/"&&(c=i==="/"?a:O([a,i])),r.createHref({pathname:c,search:o,hash:n})}function le(){return l.useContext(se)!=null}function z(){return j(le(),"useLocation() may be used only in the context of a <Router> component."),l.useContext(se).location}var oa="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sr(){return l.useContext(Ce)?Or():Tr()}function Tr(){j(le(),"useNavigate() may be used only in the context of a <Router> component.");let e=l.useContext(oe),{basename:t,navigator:a}=l.useContext(D),{matches:r}=l.useContext(K),{pathname:n}=z(),i=JSON.stringify(qt(r)),o=l.useRef(!1);return l.useLayoutEffect(()=>{o.current=!0}),l.useCallback((c,d={})=>{if(H(o.current,oa),!o.current)return;if(typeof c=="number"){a.go(c);return}let u=it(c,JSON.parse(i),n,d.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:O([t,u.pathname])),Zt(typeof c=="string"?c:X(c),a.createHref(u),Xt(a),"reject"),(d.replace?a.replace:a.push)(u,d.state,d)},[t,a,i,n,e])}var Qo=l.createContext(null);function ce(e,{relative:t}={}){let{matches:a}=l.useContext(K),{pathname:r}=z(),n=JSON.stringify(qt(a));return l.useMemo(()=>it(e,JSON.parse(n),r,t==="path"),[e,n,r,t])}function Cr(e,t){return sa(e,t)}function sa(e,t,a){j(le(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=l.useContext(D),{matches:n}=l.useContext(K),i=n[n.length-1],o=i?i.params:{};i&&i.pathname;let c=i?i.pathnameBase:"/";i&&i.route;let d=z(),u;if(t){let x=typeof t=="string"?Z(t):t;j(c==="/"||x.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${x.pathname}" was given in the \`location\` prop.`),u=x}else u=d;let f=u.pathname||"/",m=f;if(c!=="/"){let x=c.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(x.length).join("/")}let p;a?a.state.matches.length?p=a.state.matches.map(x=>Object.assign(x,{route:a.manifest[x.route.id]||x.route})):p=a.router.match(a.state.location):p=Va(e,{pathname:m});let v=Lr(p&&p.map(x=>Object.assign({},x,{params:Object.assign({},o,x.params),pathname:O([c,r.encodeLocation?r.encodeLocation(x.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?c:O([c,r.encodeLocation?r.encodeLocation(x.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathnameBase])})),n,a);return t&&v?l.createElement(se.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...u},navigationType:"POP"}},v):v}function jr(){let e=Mr(),t=fr(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null;return l.createElement(l.Fragment,null,l.createElement("h2",null,"Unexpected Application Error!"),l.createElement("h3",{style:{fontStyle:"italic"}},t),a?l.createElement("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},a):null,null)}var Rr=l.createElement(jr,null),Nr=class extends l.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static contextType=ra;static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const a=kr(e.digest);a&&(e=a)}let t=e!==void 0?l.createElement(K.Provider,{value:this.props.routeContext},l.createElement(Ce.Provider,{value:this.props.routeContext.isDataRoute},l.createElement(je.Provider,{value:this.props.routeContext.matches[this.props.routeContext.matches.length-1]?.route.id},l.createElement(st.Provider,{value:e,children:this.props.component})))):this.props.children;return this.context?l.createElement(Ir,{error:e},t):t}},Fe=new WeakMap;function Ir({children:e,error:t}){let{basename:a,navigator:r}=l.useContext(D);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let n=_r(t.digest);if(n){let i=Fe.get(t);if(i)throw i;let o=Qt(n.location,a),c=o.absoluteURL||o.to;if(Zt(n.location,c,Xt(r),"allow-explicit"),vr(c))throw new Error("Invalid redirect location");if(Kt&&!Fe.get(t))if(o.isExternal||n.reloadDocument)window.location.href=c;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:n.replace}));throw Fe.set(t,d),d}return l.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c}`})}}return e}function Pr({routeContext:e,match:t,children:a}){let r=l.useContext(oe);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),l.createElement(K.Provider,{value:e},l.createElement(Ce.Provider,{value:e.isDataRoute},l.createElement(je.Provider,{value:t.route.id},a)))}function Lr(e,t=[],a){let r=a?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let n=e,i=r?.errors;if(i!=null){let f=n.findIndex(m=>m.route.id&&i?.[m.route.id]!==void 0);j(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),n=n.slice(0,Math.min(n.length,f+1))}let o=!1,c=-1;if(a&&r){o=r.renderFallback;for(let f=0;f<n.length;f++){let m=n[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=f),m.route.id){let{loaderData:p,errors:v}=r,x=m.route.loader&&!p.hasOwnProperty(m.route.id)&&(!v||v[m.route.id]===void 0);if(m.route.lazy||x){a.isStatic&&(o=!0),c>=0?n=n.slice(0,c+1):n=[n[0]];break}}}}let d=a?.onError,u=r&&d?(f,m)=>{d(f,{location:r.location,params:r.matches?.[0]?.params??{},pattern:mr(r.matches),errorInfo:m})}:void 0;return n.reduceRight((f,m,p)=>{let v,x=!1,w=null,h=null;r&&(v=i&&m.route.id?i[m.route.id]:void 0,w=m.route.errorElement||Rr,o&&(c<0&&p===0?($r("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,h=null):c===p&&(x=!0,h=m.route.hydrateFallbackElement||null)));let b=t.concat(n.slice(0,p+1)),g=()=>{let y;return v?y=w:x?y=h:m.route.Component?y=l.createElement(m.route.Component,null):m.route.element?y=m.route.element:y=f,l.createElement(Pr,{match:m,routeContext:{outlet:f,matches:b,isDataRoute:r!=null},children:y})};return r&&(m.route.ErrorBoundary||m.route.errorElement||p===0)?l.createElement(Nr,{location:r.location,revalidation:r.revalidation,component:w,error:v,children:g(),routeContext:{outlet:null,matches:b,isDataRoute:!0},onError:u}):g()},null)}function Re(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function de(e){let t=l.useContext(oe);return j(t,Re(e)),t}function lt(e){let t=l.useContext(ta);return j(t,Re(e)),t}function ct(e){let t=l.useContext(aa);return j(t,Re(e)),t}function Dr(e){let t=l.useContext(ot);return j(t,Re(e)),t}function dt(e){let t=l.useContext(je);return j(t,`${e} can only be used on routes that contain a unique "id"`),t}function Ar(){let{navigation:e}=Dr("useNavigation");return l.useMemo(()=>{let{matches:t,historyAction:a,...r}=e;return r},[e])}function la(){let{matches:e}=lt("useMatches"),{loaderData:t}=ct("useMatches");return l.useMemo(()=>e.map(a=>Ja(a,t)),[e,t])}function Mr(){let e=l.useContext(st),t=ct("useRouteError"),a=dt("useRouteError");return e!==void 0?e:t.errors?.[a]}function Or(){let{router:e}=de("useNavigate"),t=dt("useNavigate"),a=l.useRef(!1);return l.useLayoutEffect(()=>{a.current=!0}),l.useCallback(async(r,n={})=>{H(a.current,oa),a.current&&(typeof r=="number"?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...n}))},[e,t])}var _t={};function $r(e,t,a){!t&&!_t[e]&&(_t[e]=!0,H(!1,a))}var Xo=l.memo(zr);function zr({routes:e,manifest:t,state:a,isStatic:r,onError:n}){let i=l.useContext(oe);return j(i,"You must render this element inside a <DataRouterContext.Provider> element"),sa(e,void 0,{router:i.router,manifest:t,state:a,isStatic:r,onError:n})}function be(e){j(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ca({basename:e="/",children:t=null,location:a,navigationType:r="POP",navigator:n,static:i=!1,useTransitions:o}){j(!le(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=e.replace(/^\/*/,"/"),d=l.useMemo(()=>({basename:c,navigator:n,static:i,useTransitions:o,future:{}}),[c,n,i,o]);typeof a=="string"&&(a=Z(a));let{pathname:u="/",search:f="",hash:m="",state:p=null,key:v="default",mask:x}=a,w=l.useMemo(()=>{let h=U(u,c);return h==null?null:{location:{pathname:h,search:f,hash:m,state:p,key:v,mask:x},navigationType:r}},[c,u,f,m,p,v,r,x]);return H(w!=null,`<Router basename="${c}"> is not able to match the URL "${u}${f}${m}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:l.createElement(D.Provider,{value:d},l.createElement(se.Provider,{children:t,value:w}))}function Br({children:e,location:t}){return Cr(Qe(e),t)}var Zo=class extends l.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:a}=this.props,r=null,n=0;if(!(a instanceof Promise))n=1,r=Promise.resolve(),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_data",{get:()=>a});else if(this.state.error){n=2;let i=this.state.error;r=Promise.reject().catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_error",{get:()=>i})}else a._tracked?(r=a,n="_error"in r?2:"_data"in r?1:0):(n=0,Object.defineProperty(a,"_tracked",{get:()=>!0}),r=a.then(i=>Object.defineProperty(a,"_data",{get:()=>i}),i=>{this.props.onError?.(i),Object.defineProperty(a,"_error",{get:()=>i})}));if(n===2&&!t)throw r._error;if(n===2)return l.createElement(Ke.Provider,{value:r,children:t});if(n===1)return l.createElement(Ke.Provider,{value:r,children:e});throw r}};function Qe(e,t=[]){let a=[];return l.Children.forEach(e,(r,n)=>{if(!l.isValidElement(r))return;let i=[...t,n];if(r.type===l.Fragment){a.push.apply(a,Qe(r.props.children,i));return}j(r.type===be,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`);let o=r.props;j(!o.index||!o.children,"An index route cannot have child routes.");let c={id:o.id||i.join("-"),caseSensitive:o.caseSensitive,element:o.element,Component:o.Component,index:o.index,path:o.path,middleware:o.middleware,loader:o.loader,action:o.action,hydrateFallbackElement:o.hydrateFallbackElement,HydrateFallback:o.HydrateFallback,errorElement:o.errorElement,ErrorBoundary:o.ErrorBoundary,shouldRevalidate:o.shouldRevalidate,handle:o.handle,lazy:o.lazy};o.children&&(c.children=Qe(o.children,i)),a.push(c)}),a}var we="application/x-www-form-urlencoded";function Ne(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function Fr(e){return Ne(e)&&e.tagName.toLowerCase()==="button"}function Hr(e){return Ne(e)&&e.tagName.toLowerCase()==="form"}function Vr(e){return Ne(e)&&e.tagName.toLowerCase()==="input"}function Ur(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Jr(e,t){return e.button===0&&(!t||t==="_self")&&!Ur(e)}var ve=null;function Gr(){if(ve===null)try{new FormData(document.createElement("form"),0),ve=!1}catch{ve=!0}return ve}var Wr=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function He(e){return e!=null&&!Wr.has(e)?(H(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${we}"`),null):e}function qr(e,t){let a,r,n,i,o;if(Hr(e)){let c=e.getAttribute("action");r=c?U(c,t):null,a=e.getAttribute("method")||"get",n=He(e.getAttribute("enctype"))||we,i=new FormData(e)}else if(Fr(e)||Vr(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=e.getAttribute("formaction")||c.getAttribute("action");if(r=d?U(d,t):null,a=e.getAttribute("formmethod")||c.getAttribute("method")||"get",n=He(e.getAttribute("formenctype"))||He(c.getAttribute("enctype"))||we,i=new FormData(c,e),!Gr()){let{name:u,type:f,value:m}=e;if(f==="image"){let p=u?`${u}.`:"";i.append(`${p}x`,"0"),i.append(`${p}y`,"0")}else u&&i.append(u,m)}}else{if(Ne(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a="get",r=null,n=we,o=e}return i&&n==="text/plain"&&(o=i,i=void 0),{action:r,method:a.toLowerCase(),encType:n,formData:i,body:o}}function Yr(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}var Kr={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},Qr=/[&><\u2028\u2029]/g;function kt(e){return e.replace(Qr,t=>Kr[t])}function da(e,t){let a=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${t}`:a.pathname=`${a.pathname}.${t}`,a}var Xr=(function(){const t=typeof document<"u"&&document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"})(),Zr=function(e){return"/"+e},Et={},en=function(t){return t.pathname.endsWith(".css")},ue=function(t,a,r){let n=Promise.resolve();if(a&&a.length>0){let u=function(m){return Promise.all(m.map(p=>Promise.resolve(p).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))},f=function(m){return import.meta.resolve?new URL(import.meta.resolve(m)):new URL(m,import.meta.url)},o;const c=document.querySelector("meta[property=csp-nonce]"),d=c?.nonce||c?.getAttribute("nonce");n=u(a.map(m=>{m=Zr(m,r);const p=f(m);if(p.href in Et)return;Et[p.href]=!0;const v=en(p);if(o===void 0){o={all:new Set,styles:new Set};const w=document.getElementsByTagName("link");for(let h=w.length-1;h>=0;h--){const b=w[h];o.all.add(b.href),b.rel==="stylesheet"&&o.styles.add(b.href)}}if((v?o.styles:o.all).has(p.href))return;const x=document.createElement("link");if(x.rel=v?"stylesheet":Xr,v||(x.as="script"),x.crossOrigin="",x.href=p.href,d&&x.setAttribute("nonce",d),document.head.appendChild(x),v)return new Promise((w,h)=>{x.addEventListener("load",w),x.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${p}`)))})}).filter(m=>m!==void 0))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return n.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return t().catch(i)})};async function tn(e,t){if(e.id in t)return t[e.id];try{let a=await ue(()=>import(e.module),[]);return t[e.id]=a,a}catch(a){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function an(e){return e!=null&&typeof e.page=="string"}function rn(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function nn(e,t,a){return cn((await Promise.all(e.map(async r=>{let n=t.routes[r.route.id];if(n){let i=await tn(n,a);return i.links?i.links():[]}return[]}))).flat(1).filter(rn).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function St(e,t,a,r,n,i){let o=(d,u)=>a[u]?d.route.id!==a[u].route.id:!0,c=(d,u)=>a[u].pathname!==d.pathname||a[u].route.path?.endsWith("*")&&a[u].params["*"]!==d.params["*"];return i==="assets"?t.filter((d,u)=>o(d,u)||c(d,u)):i==="data"?t.filter((d,u)=>{let f=r.routes[d.route.id];if(!f||!f.hasLoader)return!1;if(o(d,u)||c(d,u))return!0;if(d.route.shouldRevalidate){let m=d.route.shouldRevalidate({currentUrl:new URL(n.pathname+n.search+n.hash,window.origin),currentParams:a[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function on(e,t,{includeHydrateFallback:a}={}){return sn(e.map(r=>{let n=t.routes[r.route.id];if(!n)return[];let i=[n.module];return n.clientActionModule&&(i=i.concat(n.clientActionModule)),n.clientLoaderModule&&(i=i.concat(n.clientLoaderModule)),a&&n.hydrateFallbackModule&&(i=i.concat(n.hydrateFallbackModule)),n.imports&&(i=i.concat(n.imports)),i}).flat(1))}function sn(e){return[...new Set(e)]}function ln(e){let t={},a=Object.keys(e).sort();for(let r of a)t[r]=e[r];return t}function cn(e,t){let a=new Set,r=new Set(t);return e.reduce((n,i)=>{if(t&&!an(i)&&i.as==="script"&&i.href&&r.has(i.href))return n;let o=JSON.stringify(ln(i));return a.has(o)||(a.add(o),n.push({key:o,link:i})),n},[])}var Ie=l.createContext(void 0);Ie.displayName="FrameworkContext";function ut(){let e=l.useContext(Ie);return Yr(e,"You must render this element inside a <HydratedRouter> element"),e}function dn(e,t){let a=l.useContext(Ie),[r,n]=l.useState(!1),[i,o]=l.useState(!1),{onFocus:c,onBlur:d,onMouseEnter:u,onMouseLeave:f,onTouchStart:m}=t,p=l.useRef(null);l.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let w=b=>{b.forEach(g=>{o(g.isIntersecting)})},h=new IntersectionObserver(w,{threshold:.5});return p.current&&h.observe(p.current),()=>{h.disconnect()}}},[e]),l.useEffect(()=>{if(r){let w=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(w)}}},[r]);let v=()=>{n(!0)},x=()=>{n(!1),o(!1)};return a?e!=="intent"?[i,p,{}]:[i,p,{onFocus:te(c,v),onBlur:te(d,x),onMouseEnter:te(u,v),onMouseLeave:te(f,x),onTouchStart:te(m,v)}]:[!1,p,{}]}function te(e,t){return a=>{e&&e(a),a.defaultPrevented||t(a)}}function un({page:e,...t}){let a=yr(),{nonce:r}=ut(),{router:n}=de("PrefetchPageLinks"),i=l.useMemo(()=>n.match(e),[n,n.routes,e]);return i?(t.nonce==null&&r&&(t={...t,nonce:r}),a?l.createElement(mn,{page:e,matches:i,...t}):l.createElement(hn,{page:e,matches:i,...t})):null}function fn(e){let{manifest:t,routeModules:a}=ut(),[r,n]=l.useState([]);return l.useEffect(()=>{let i=!1;return nn(e,t,a).then(o=>{i||n(o)}),()=>{i=!0}},[e,t,a]),r}function mn({page:e,matches:t,...a}){let r=z(),n=l.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let i=da(e,"rsc"),o=!1,c=[];for(let d of t)typeof d.route.shouldRevalidate=="function"?o=!0:c.push(d.route.id);return o&&c.length>0&&i.searchParams.set("_routes",c.join(",")),[i.pathname+i.search]},[e,r,t]);return l.createElement(l.Fragment,null,n.map(i=>l.createElement("link",{key:i,rel:"prefetch",as:"fetch",href:i,...a})))}function hn({page:e,matches:t,...a}){let r=z(),{manifest:n,routeModules:i}=ut(),{matches:o}=lt("PrefetchPageLinks"),{loaderData:c}=ct("PrefetchPageLinks"),d=l.useMemo(()=>St(e,t,o,n,r,"data"),[e,t,o,n,r]),u=l.useMemo(()=>St(e,t,o,n,r,"assets"),[e,t,o,n,r]),f=l.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let v=new Set,x=!1;if(t.forEach(h=>{let b=n.routes[h.route.id];!b||!b.hasLoader||(!d.some(g=>g.route.id===h.route.id)&&h.route.id in c&&i[h.route.id]?.shouldRevalidate||b.hasClientLoader?x=!0:v.add(h.route.id))}),v.size===0)return[];let w=da(e,"data");return x&&v.size>0&&w.searchParams.set("_routes",t.filter(h=>v.has(h.route.id)).map(h=>h.route.id).join(",")),[w.pathname+w.search]},[c,r,n,d,t,e,i]),m=l.useMemo(()=>on(u,n),[u,n]),p=fn(u);return l.createElement(l.Fragment,null,f.map(v=>l.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...a})),m.map(v=>l.createElement("link",{key:v,rel:"modulepreload",href:v,...a})),p.map(({key:v,link:x})=>l.createElement("link",{key:v,nonce:a.nonce,...x,crossOrigin:x.crossOrigin??a.crossOrigin})))}function pn(...e){return t=>{e.forEach(a=>{typeof a=="function"?a(t):a!=null&&(a.current=t)})}}var gn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{gn&&(window.__reactRouterVersion="8")}catch{}function vn({basename:e,children:t,useTransitions:a,window:r}){let n=l.useRef(null);n.current==null&&(n.current=za({window:r,v5Compat:!0}));let i=n.current,[o,c]=l.useState({action:i.action,location:i.location}),d=l.useCallback(u=>{a===!1?c(u):l.startTransition(()=>c(u))},[a]);return l.useLayoutEffect(()=>i.listen(d),[i,d]),l.createElement(ca,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:i,useTransitions:a})}function yn({basename:e,children:t,history:a,useTransitions:r}){let[n,i]=l.useState({action:a.action,location:a.location}),o=l.useCallback(c=>{r===!1?i(c):l.startTransition(()=>i(c))},[r]);return l.useLayoutEffect(()=>a.listen(o),[a,o]),l.createElement(ca,{basename:e,children:t,location:n.location,navigationType:n.action,navigator:a,useTransitions:r})}yn.displayName="unstable_HistoryRouter";var Ee=l.forwardRef(function({onClick:t,discover:a="render",prefetch:r="none",relative:n,reloadDocument:i,replace:o,mask:c,state:d,target:u,to:f,preventScrollReset:m,viewTransition:p,defaultShouldRevalidate:v,...x},w){let{basename:h,navigator:b,useTransitions:g}=l.useContext(D),y=typeof f=="string"&&nt.test(f),_=Qt(f,h);f=_.to;let E=Er(f,{relative:n}),R=z(),k=null;if(c){let M=it(c,[],R.mask?R.mask.pathname:"/",!0);h!=="/"&&(M.pathname=M.pathname==="/"?h:O([h,M.pathname])),k=b.createHref(M)}let[T,I,L]=dn(r,x),A=_n(f,{replace:o,mask:c,state:d,target:u,preventScrollReset:m,relative:n,viewTransition:p,defaultShouldRevalidate:v,useTransitions:g});function Q(M){t&&t(M),M.defaultPrevented||A(M)}let B=!(_.isExternal||i),pe=l.createElement("a",{...x,...L,href:(B?k:void 0)||_.absoluteURL||E,onClick:B?Q:t,ref:pn(w,I),target:u,"data-discover":!y&&a==="render"?"true":void 0});return T&&!y?l.createElement(l.Fragment,null,pe,l.createElement(un,{page:E})):pe});Ee.displayName="Link";var xn=l.forwardRef(function({"aria-current":t="page",caseSensitive:a=!1,className:r="",end:n=!1,style:i,to:o,viewTransition:c,children:d,...u},f){let m=ce(o,{relative:u.relative}),p=z(),v=l.useContext(ot),{navigator:x,basename:w}=l.useContext(D),h=v!=null&&Nn(m)&&c===!0,b=x.encodeLocation?x.encodeLocation(m).pathname:m.pathname,g=p.pathname,y=v?.navigation.location?v.navigation.location.pathname:null;a||(g=g.toLowerCase(),y=y?y.toLowerCase():null,b=b.toLowerCase()),y&&w&&(y=U(y,w)||y);const _=b!=="/"&&b.endsWith("/")?b.length-1:b.length;let E=g===b||!n&&g.startsWith(b)&&g.charAt(_)==="/",R=y!=null&&(y===b||!n&&y.startsWith(b)&&y.charAt(_)==="/"),k={isActive:E,isPending:R,isTransitioning:h},T=E?t:void 0,I;typeof r=="function"?I=r(k):I=[r,E?"active":null,R?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let L=typeof i=="function"?i(k):i;return l.createElement(Ee,{...u,"aria-current":T,className:I,ref:f,style:L,to:o,viewTransition:c},typeof d=="function"?d(k):d)});xn.displayName="NavLink";var bn=l.forwardRef(({discover:e="render",fetcherKey:t,navigate:a,reloadDocument:r,replace:n,state:i,method:o="get",action:c,onSubmit:d,relative:u,preventScrollReset:f,viewTransition:m,defaultShouldRevalidate:p,...v},x)=>{let{useTransitions:w}=l.useContext(D),h=Sn(),b=Tn(c,{relative:u}),g=o.toLowerCase()==="get"?"get":"post",y=typeof c=="string"&&nt.test(c),_=E=>{if(d&&d(E),E.defaultPrevented)return;E.preventDefault();let R=E.nativeEvent.submitter,k=R?.getAttribute("formmethod")||o,T=()=>h(R||E.currentTarget,{fetcherKey:t,method:k,navigate:a,replace:n,state:i,relative:u,preventScrollReset:f,viewTransition:m,defaultShouldRevalidate:p});w&&a!==!1?l.startTransition(()=>T()):T()};return l.createElement("form",{ref:x,method:g,action:b,onSubmit:r?d:_,...v,"data-discover":!y&&e==="render"?"true":void 0})});bn.displayName="Form";function wn({getKey:e,storageKey:t,...a}){let r=l.useContext(Ie),{basename:n}=l.useContext(D),i=z(),o=la();Cn({getKey:e,storageKey:t});let c=l.useMemo(()=>{if(!r||!e)return null;let u=Ze(i,o,n,e);return u!==i.key?u:null},[]);if(!r||r.isSpaMode)return null;let d=((u,f)=>{if(!window.history.state||!window.history.state.key){let m=Math.random().toString(32).slice(2);window.history.replaceState({key:m},"")}try{let m=JSON.parse(sessionStorage.getItem(u)||"{}")[f||window.history.state.key];typeof m=="number"&&window.scrollTo(0,m)}catch(m){console.error(m),sessionStorage.removeItem(u)}}).toString();return a.nonce==null&&r?.nonce&&(a.nonce=r.nonce),l.createElement("script",{...a,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${d})(${kt(JSON.stringify(t||Xe))}, ${kt(JSON.stringify(c))})`}})}wn.displayName="ScrollRestoration";function _n(e,{target:t,replace:a,mask:r,state:n,preventScrollReset:i,relative:o,viewTransition:c,defaultShouldRevalidate:d,useTransitions:u}={}){let f=Sr(),m=z(),p=ce(e,{relative:o});return l.useCallback(v=>{if(Jr(v,t)){v.preventDefault();let x=a!==void 0?a:X(m)===X(p),w=()=>f(e,{replace:x,mask:r,state:n,preventScrollReset:i,relative:o,viewTransition:c,defaultShouldRevalidate:d});u?l.startTransition(()=>w()):w()}},[m,f,p,a,r,n,t,e,i,o,c,d,u])}var kn=0,En=()=>`__${String(++kn)}__`;function Sn(){let{router:e}=de("useSubmit"),{basename:t}=l.useContext(D),a=dt("useSubmit"),r=e.fetch,n=e.navigate;return l.useCallback(async(i,o={})=>{let{action:c,method:d,encType:u,formData:f,body:m}=qr(i,t);o.navigate===!1?await r(o.fetcherKey||En(),a,o.action||c,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,relative:o.relative,formData:f,body:m,formMethod:o.method||d,formEncType:o.encType||u,flushSync:o.flushSync}):await n(o.action||c,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,relative:o.relative,formData:f,body:m,formMethod:o.method||d,formEncType:o.encType||u,replace:o.replace,state:o.state,fromRouteId:a,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,n,t,a])}function Tn(e,{relative:t}={}){let{basename:a}=l.useContext(D),r=l.useContext(K);j(r,"useFormAction must be used inside a RouteContext");let[n]=r.matches.slice(-1),i={...ce(e||".",{relative:t})},o=z();if(e==null){i.search=o.search;let c=new URLSearchParams(i.search),d=c.getAll("index");if(d.some(u=>u==="")){c.delete("index"),d.filter(f=>f).forEach(f=>c.append("index",f));let u=c.toString();i.search=u?`?${u}`:""}}return(!e||e===".")&&n.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(i.pathname=i.pathname==="/"?a:O([a,i.pathname])),X(i)}var Xe="react-router-scroll-positions",ye={};function Ze(e,t,a,r){let n=null;return r&&(a!=="/"?n=r({...e,pathname:U(e.pathname,a)||e.pathname},t):n=r(e,t)),n==null&&(n=e.key),n}function Cn({getKey:e,storageKey:t}={}){let{router:a}=de("useScrollRestoration"),{restoreScrollPosition:r,preventScrollReset:n}=lt("useScrollRestoration"),{basename:i}=l.useContext(D),o=z(),c=la(),d=Ar();l.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),Rn(l.useCallback(u=>{u.persisted&&(window.history.scrollRestoration="manual")},[])),jn(l.useCallback(()=>{if(d.state==="idle"){let u=Ze(o,c,i,e);ye[u]=window.scrollY}try{sessionStorage.setItem(t||Xe,JSON.stringify(ye))}catch(u){H(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${u}).`)}window.history.scrollRestoration="auto"},[d.state,e,i,o,c,t])),typeof document<"u"&&(l.useLayoutEffect(()=>{try{let u=sessionStorage.getItem(t||Xe);u&&(ye=JSON.parse(u))}catch{}},[t]),l.useLayoutEffect(()=>{let u=a?.enableScrollRestoration(ye,()=>window.scrollY,e?(f,m)=>Ze(f,m,i,e):void 0);return()=>u&&u()},[a,i,e]),l.useLayoutEffect(()=>{if(r!==!1){if(typeof r=="number"){window.scrollTo(0,r);return}try{if(o.hash){let u=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(u){u.scrollIntoView();return}}}catch{H(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}n!==!0&&window.scrollTo(0,0)}},[o,r,n]))}function jn(e,t){let{capture:a}=t||{};l.useEffect(()=>{let r=a!=null?{capture:a}:void 0;return window.addEventListener("pagehide",e,r),()=>{window.removeEventListener("pagehide",e,r)}},[e,a])}function Rn(e,t){let{capture:a}=t||{};l.useEffect(()=>{let r=a!=null?{capture:a}:void 0;return window.addEventListener("pageshow",e,r),()=>{window.removeEventListener("pageshow",e,r)}},[e,a])}function Nn(e,{relative:t}={}){let a=l.useContext(na);j(a!=null,"`useViewTransitionState` must be used within `react-router/dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=de("useViewTransitionState"),n=ce(e,{relative:t});if(!a.isTransitioning)return!1;let i=U(a.currentLocation.pathname,r)||a.currentLocation.pathname,o=U(a.nextLocation.pathname,r)||a.nextLocation.pathname;return _e(n.pathname,o)!=null||_e(n.pathname,i)!=null}var ua=()=>{const e=(0,l.useContext)(Ht);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},fa=(e,t)=>{e.preventDefault();const a=document.getElementById(t);if(a){const r=a.getBoundingClientRect().top+window.scrollY+-50;window.scrollTo({top:r,behavior:"smooth"})}},ma={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Tt=l.createContext&&l.createContext(ma),In=["attr","size","title"];function Pn(e,t){if(e==null)return{};var a,r,n=Ln(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function Ln(e,t){if(e==null)return{};var a={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;a[r]=e[r]}return a}function Se(){return Se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},Se.apply(null,arguments)}function Ct(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function Te(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Ct(Object(a),!0).forEach(function(r){Dn(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ct(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function Dn(e,t,a){return(t=An(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function An(e){var t=Mn(e,"string");return typeof t=="symbol"?t:t+""}function Mn(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ha(e){return e&&e.map((t,a)=>l.createElement(t.tag,Te({key:a},t.attr),ha(t.child)))}function N(e){return t=>l.createElement(On,Se({attr:Te({},e.attr)},t),ha(e.child))}function On(e){var t=a=>{var r=e.attr,n=e.size,i=e.title,o=Pn(e,In),c=n||a.size||"1em",d;return a.className&&(d=a.className),e.className&&(d=(d?d+" ":"")+e.className),l.createElement("svg",Se({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,r,o,{className:d,style:Te(Te({color:e.color||a.color},a.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&l.createElement("title",null,i),e.children)};return Tt!==void 0?l.createElement(Tt.Consumer,null,a=>t(a)):t(ma)}function $n(e){return N({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(e)}function zn(e){return N({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function Bn(e){return N({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function Fn(e){return N({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function Hn(e){return N({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}function Vn(e){return N({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function jt(e){return N({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"},child:[]}]})(e)}function Un(e){return N({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function Jn(e){return N({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(e)}function Gn(e){return N({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function Wn(e){return N({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function qn(e){return N({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(e)}function Yn(e){return N({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function es(e){return N({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}var Ve=["home","about","experience","education","skills","certificates","projects","languages","contact"],Kn=e=>e.charAt(0).toUpperCase()+e.slice(1),Qn=[{name:"GitHub",url:"https://github.com/trencho",ariaLabel:"GitHub Profile"},{name:"LinkedIn",url:"https://www.linkedin.com/in/aleksandar-trenchevski-593b45168/",ariaLabel:"LinkedIn Profile"}],W={name:"Aleksandar Trenchevski",firstName:"Aleksandar",title:"Software Engineer",location:"Skopje, North Macedonia"},Rt={filename:"/CV - Aleksandar Trenchevski.pdf",label:"Download CV"},V={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6}}},Xn={hidden:{opacity:0,x:-50},visible:{opacity:1,x:0,transition:{duration:1}}},ae={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},Ue={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},F={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},Zn={hidden:{opacity:0,scale:.8,rotate:-10},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.6,ease:"easeOut"}}},ei={initial:{scale:1,rotate:0,opacity:1},animate:{scale:[1,1.2,1],rotate:[0,360],opacity:1,transition:{duration:.8,ease:"easeInOut"}},exit:{scale:.8,opacity:0,rotate:180,transition:{duration:.4,ease:"easeInOut"}}},ti=e=>{const[t,a]=(0,l.useState)(e[0]??"");return(0,l.useEffect)(()=>{const r=e.map(i=>document.getElementById(i)).filter(i=>i!==null);if(r.length===0)return;const n=new IntersectionObserver(i=>{const o=i.filter(c=>c.isIntersecting).sort((c,d)=>c.boundingClientRect.top-d.boundingClientRect.top);o[0]&&a(o[0].target.id)},{rootMargin:"-40% 0px -55% 0px",threshold:0});return r.forEach(i=>n.observe(i)),()=>n.disconnect()},[e]),t},G="bg-white/70 dark:bg-[#1a0b2e]/70 dark:border dark:border-fuchsia-500/15",fe="text-gray-900 dark:text-white",ft="text-gray-700 dark:text-white",mt="text-fuchsia-700 dark:text-cyan-400",ai=e=>e?"bg-fuchsia-500/30 text-black border-fuchsia-400/50 focus:ring-fuchsia-400 shadow-lg dark:bg-cyan-500/30 dark:text-white dark:border-cyan-400/50 dark:focus:ring-cyan-400 dark:shadow-cyan-500/20":"bg-fuchsia-500/20 text-black hover:bg-fuchsia-500/30 border-fuchsia-400/30 hover:scale-105 dark:bg-cyan-500/15 dark:text-white dark:hover:bg-cyan-500/25 dark:border-cyan-400/30",ri=e=>e?"border-red-500 focus:ring-red-400":"focus:ring-fuchsia-400 dark:bg-[#241041] dark:border-fuchsia-500/25 dark:text-white dark:focus:ring-cyan-400",Pe="bg-black text-white hover:bg-gray-800 dark:bg-fuchsia-700 dark:hover:bg-fuchsia-600 dark:shadow-[0_0_20px_rgba(217,70,239,0.35)]",ni="bg-gray-400 text-gray-600 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400",pa="bg-black text-white hover:bg-gray-800 dark:bg-purple-800 dark:hover:bg-purple-700",ii="bg-linear-to-br from-amber-300 via-pink-400 to-purple-400 text-gray-900 dark:from-[#0d0221] dark:via-[#2a0a4a] dark:to-[#0d0221] dark:text-white",oi="bg-white/90 text-gray-900 dark:bg-[#0d0221]/90 dark:text-white",$="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-600 focus-visible:ring-offset-2 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-[#0d0221]",ga="bg-[#2a0a4a] text-fuchsia-100 rounded-full px-3 py-1 font-medium select-none",Nt=({section:e,isActive:t,onNavigate:a,className:r})=>(0,s.jsxs)("a",{href:`#${e}`,onClick:n=>{fa(n,e),a?.()},className:`relative font-semibold group rounded px-2 py-1 transition-colors ${$} ${r} ${t?"text-fuchsia-700 dark:text-cyan-400":"hover:text-gray-600 dark:hover:text-gray-400"}`,"aria-current":t?"location":void 0,children:[Kn(e),(0,s.jsx)("span",{className:`absolute bottom-0 left-0 w-full h-0.5 transform transition-transform duration-500 ease-in-out origin-left group-hover:scale-x-100 ${t?"scale-x-100":"scale-x-0"} bg-fuchsia-600 dark:bg-cyan-400`,"aria-hidden":"true"})]}),si=()=>{const{darkMode:e,toggleDarkMode:t}=ua(),[a,r]=(0,l.useState)(!1),n=ti(Ve),i=(0,l.useRef)(null),o=(0,l.useRef)(null),c=(0,l.useRef)(!1),d=()=>r(!1);return(0,l.useEffect)(()=>{if(!a)return;const u=f=>{f.key==="Escape"&&r(!1)};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[a]),(0,l.useEffect)(()=>{a?o.current?.querySelector("a")?.focus():c.current&&i.current?.focus(),c.current=a},[a]),(0,s.jsxs)("nav",{className:`p-5 fixed w-full top-0 z-10 backdrop-blur-md shadow-md transition-colors duration-300 ${oi}`,"aria-label":"Main navigation",children:[(0,s.jsxs)("div",{className:"container mx-auto flex justify-between items-center",children:[(0,s.jsx)("div",{className:"sm:hidden",children:(0,s.jsxs)("button",{ref:i,id:"toggleButton",onClick:()=>r(u=>!u),"aria-label":a?"Close navigation menu":"Open navigation menu","aria-expanded":a,"aria-controls":"mobile-menu",className:`relative flex flex-col items-center justify-center w-10 h-10 rounded ${$}`,children:[(0,s.jsx)("div",{className:`transition-transform duration-300 ease-in-out w-6 h-0.5 bg-current ${a?"rotate-45 translate-y-1.5":""}`,"aria-hidden":"true"}),(0,s.jsx)("div",{className:`transition-opacity duration-300 ease-in-out w-6 h-0.5 bg-current my-1 ${a?"opacity-0":""}`,"aria-hidden":"true"}),(0,s.jsx)("div",{className:`transition-transform duration-300 ease-in-out w-6 h-0.5 bg-current ${a?"-rotate-45 -translate-y-1.5":""}`,"aria-hidden":"true"})]})}),(0,s.jsx)("div",{className:"hidden sm:flex flex-1 justify-center space-x-4 lg:space-x-6",children:Ve.map(u=>(0,s.jsx)(Nt,{section:u,isActive:n===u,className:"text-sm sm:text-lg"},u))}),(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsxs)(Ee,{to:"/cv",className:`hidden sm:flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold transition ${$} ${Pe}`,"aria-label":"View CV",children:[(0,s.jsx)(jt,{"aria-hidden":"true"}),(0,s.jsx)("span",{children:"CV"})]}),(0,s.jsx)("button",{onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",className:`flex items-center justify-center cursor-pointer rounded p-1 ${$}`,children:(0,s.jsx)(qe,{mode:"wait",children:(0,s.jsx)(S.div,{initial:"initial",animate:"animate",exit:"exit",variants:ei,"aria-hidden":"true",children:e?(0,s.jsx)(Hn,{size:24}):(0,s.jsx)(Vn,{size:24})},e?"sun":"moon")})})]})]}),(0,s.jsx)(qe,{children:a&&(0,s.jsx)(S.div,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:-100},transition:{duration:.3,ease:"easeInOut"},className:"absolute top-16 left-0 w-full backdrop-blur-md shadow-md bg-white/90 text-gray-900 dark:bg-[#0d0221]/90 dark:text-white",id:"mobile-menu",children:(0,s.jsxs)("ul",{ref:o,className:"flex flex-col space-y-4 py-4 px-6",children:[Ve.map(u=>(0,s.jsx)("li",{children:(0,s.jsx)(Nt,{section:u,isActive:n===u,onNavigate:d,className:"text-lg block"})},u)),(0,s.jsx)("li",{children:(0,s.jsxs)(Ee,{to:"/cv",onClick:d,className:"flex items-center gap-2 text-lg font-semibold px-2 py-1 rounded hover:text-gray-600 dark:hover:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-600 focus-visible:ring-offset-2 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-[#0d0221]",children:[(0,s.jsx)(jt,{"aria-hidden":"true"}),(0,s.jsx)("span",{children:"View CV"})]})})]})})})]})},li=e=>e.replace(/\.(png|jpe?g)$/,".webp"),ne=({src:e,loading:t="lazy",decoding:a="async",...r})=>(0,s.jsxs)("picture",{children:[(0,s.jsx)("source",{srcSet:li(e),type:"image/webp"}),(0,s.jsx)("img",{src:e,loading:t,decoding:a,...r})]}),ci=({text:e})=>{const t=La(),[a,r]=(0,l.useState)("");return(0,l.useEffect)(()=>{if(t)return;let n=0,i;const o=()=>{n<=e.length&&(r(e.slice(0,n)),n++,i=setTimeout(o,100))};return o(),()=>clearTimeout(i)},[t,e]),typeof window>"u"||t?e:a},di=typeof document>"u"||(document.getElementById("root")?.childElementCount??0)>0,ui=(e,t=new Date)=>{const a=t.getFullYear()-e.getFullYear();return t<new Date(t.getFullYear(),e.getMonth(),e.getDate())?a-1:a},fi=[`${ui(new Date(2018,6,15))}+ years experience`,"Backend & Data Engineering","Java · Python · Spring · Spark",W.location],It=`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 mb-2 sm:mb-0 select-none ${$} ${Pe}`,Pt="absolute top-0 left-0 w-full h-full object-cover rounded-full transition-opacity duration-500 ease-in-out select-none",mi=()=>(0,s.jsxs)(S.div,{className:"min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 space-y-6 pt-16 lg:p-12",initial:di?!1:"hidden",animate:"visible",variants:ae,children:[(0,s.jsxs)(S.div,{className:"group relative w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full border-4 border-white shadow-lg mt-4 sm:mt-8",variants:V,children:[(0,s.jsx)(ne,{src:"/profile.jpg",alt:`${W.firstName} profile picture`,className:`${Pt} opacity-100 group-hover:opacity-0`,width:"648",height:"648",loading:"eager",decoding:"auto",fetchPriority:"high"}),(0,s.jsx)(ne,{src:"/logo.png",alt:"","aria-hidden":"true",className:`${Pt} opacity-0 group-hover:opacity-100`,width:"200",height:"200"})]}),(0,s.jsx)(S.div,{className:"w-full max-w-lg sm:max-w-3xl p-4 sm:p-8 rounded-lg shadow-lg flex justify-center items-center bg-white/70 text-gray-700 dark:bg-[#1a0b2e]/80 dark:text-white dark:border dark:border-fuchsia-500/20",variants:Xn,children:(0,s.jsxs)("div",{className:"text-center space-y-4 sm:space-y-6 max-w-xl leading-relaxed",children:[(0,s.jsxs)("h1",{id:"home-heading",className:`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 ${fe}`,children:["Hello, my name is ",W.firstName," and I'm a"," ",(0,s.jsx)("span",{className:"sr-only",children:W.title}),(0,s.jsx)("span",{"aria-hidden":"true",className:"text-fuchsia-600 dark:text-cyan-400 dark:drop-shadow-[0_0_10px_rgba(34,211,238,0.55)]",children:(0,s.jsx)(ci,{text:W.title})})]}),(0,s.jsx)("p",{className:"text-base sm:text-lg lg:text-xl leading-relaxed",children:"I build RESTful APIs and large-scale data pipelines across insurance, banking, telecom and healthcare. Currently a Data Engineer at Encora, designing ETL workflows on Azure Databricks and Apache Spark."}),(0,s.jsx)(S.ul,{className:"flex flex-wrap justify-center gap-2",variants:V,"aria-label":"Highlights",children:fi.map(e=>(0,s.jsx)("li",{className:"rounded-full px-3 py-1 text-xs sm:text-sm font-medium select-none bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-500/10 dark:text-cyan-300 dark:border dark:border-cyan-400/20",children:e},e))}),(0,s.jsxs)(S.div,{className:"flex flex-col sm:flex-row items-center justify-center gap-4 mt-4",variants:V,children:[(0,s.jsxs)("a",{href:"#contact",onClick:e=>{fa(e,"contact")},className:It,children:[(0,s.jsx)("span",{children:"Contact me here"}),(0,s.jsx)(Yn,{"aria-hidden":"true"})]}),(0,s.jsxs)("a",{href:Rt.filename,className:It,download:!0,children:[(0,s.jsx)("span",{children:Rt.label}),(0,s.jsx)(Jn,{"aria-hidden":"true"})]}),(0,s.jsx)("div",{className:"flex space-x-4 mt-4 sm:mt-0",children:Qn.map(e=>{const t=e.name==="GitHub"?Bn:zn;return(0,s.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:`group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition ${$} ${pa}`,"aria-label":e.ariaLabel,children:[(0,s.jsx)(t,{className:"text-xl","aria-hidden":"true"}),(0,s.jsx)("span",{"aria-hidden":"true",className:"pointer-events-none absolute bottom-full mb-2 px-2 py-1 text-xs text-white rounded whitespace-nowrap invisible opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-visible:visible group-focus-visible:opacity-100 bg-black dark:bg-purple-800",children:e.name})]},e.name)})})]})]})})]}),hi=[{id:"focus",body:(0,s.jsxs)(s.Fragment,{children:["I'm a software engineer focused on ",(0,s.jsx)("b",{children:"backend"})," and"," ",(0,s.jsx)("b",{children:"data engineering"}),". I've designed and shipped"," ",(0,s.jsx)("b",{children:"RESTful APIs"})," and, more recently, large-scale ",(0,s.jsx)("b",{children:"ETL pipelines"})," ","— building data workflows on ",(0,s.jsx)("b",{children:"Azure Databricks"})," and"," ",(0,s.jsx)("b",{children:"Apache Spark"})," for the insurance sector, after years of"," ",(0,s.jsx)("b",{children:"Java/Spring"})," development across banking (3DS secure payments), telecommunications and healthcare."]})},{id:"delivery",body:(0,s.jsxs)(s.Fragment,{children:["My work spans the full delivery cycle: modelling data and APIs, containerising with ",(0,s.jsx)("b",{children:"Docker"})," and ",(0,s.jsx)("b",{children:"Kubernetes"}),", and shipping through ",(0,s.jsx)("b",{children:"CI/CD"}),". I've collaborated directly with international clients across ",(0,s.jsx)("b",{children:"Europe and the US"}),", translating business requirements into maintainable, production-ready systems."]})},{id:"background",body:(0,s.jsxs)(s.Fragment,{children:["I hold a"," ",(0,s.jsx)("b",{children:"Master's in Electrical Engineering and Information Technologies"}),", where my thesis on monitoring atmospheric impacts and predicting air pollution grew into open-source machine-learning projects. I value"," ",(0,s.jsx)("b",{children:"clean, well-tested code"}),", pragmatic design and continuous learning — and I'm comfortable explaining technical trade-offs to both engineers and non-technical stakeholders."]})}],ee=({children:e,id:t,className:a="",animated:r=!1,variants:n})=>{const i=`text-2xl sm:text-3xl lg:text-4xl font-bold text-center ${fe} ${a}`,o=t===void 0?{}:{id:t};return r?(0,s.jsx)(S.h2,{className:i,...o,...n===void 0?{}:{variants:n},children:e}):(0,s.jsx)("h2",{className:i,...o,children:e})},pi=()=>(0,s.jsx)(S.div,{className:`flex justify-center items-center p-4 sm:p-8 lg:p-12 ${ft}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:ae,children:(0,s.jsxs)(S.div,{className:`w-full max-w-lg sm:max-w-3xl p-4 sm:p-8 rounded-lg shadow-lg ${G}`,variants:ae,children:[(0,s.jsx)(ee,{id:"about-heading",className:"mb-4 sm:mb-6",animated:!0,variants:F,children:"About Me"}),(0,s.jsx)(S.div,{className:"text-center hyphens-auto max-w-lg sm:max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-8",variants:ae,children:hi.map(e=>(0,s.jsx)(S.p,{className:"text-base sm:text-lg lg:text-xl leading-relaxed mb-4",variants:F,children:e.body},e.id))})]})}),gi=[{company:"Encora Inc.",period:"Mar 2023 – Present",location:"Skopje, North Macedonia",roles:[{title:"Data Engineer",projects:[{name:"Hiscox — Insurance data platform",description:"Building ETL pipelines on Azure Databricks and Apache Spark to ingest, transform and validate insurance data from multiple sources, with automated workflows feeding Azure Data Lake for scalable storage and analytics.",technologies:["Python","SQL","PySpark","Apache Spark","Databricks","Delta Lake","Azure Data Factory"],buildTools:["Databricks Asset Bundles"],versionControl:["Git","Azure DevOps"]}]},{title:"Java Engineer",projects:[{name:'Brandwatch — "Publish" module',description:`Delivered Java/Spring services for Brandwatch's social-media "Publish" module for planning, creating and distributing content.`,technologies:["Java","Spring Boot","PostgreSQL","Docker","Kubernetes"],buildTools:["Gradle","Maven"],versionControl:["Git","GitHub"]},{name:"Cox Networks — Telecom middleware",description:"Built middleware for Cox Networks, a mobile network operator, that receives, processes and serves data from the carrier's systems.",technologies:["Java","Spring Boot","JDBC","JAX-RS","Oracle DB"],buildTools:["Gradle"],versionControl:["Git","Bitbucket"]}]}]},{company:"Netcetera",period:"Dec 2021 – Mar 2023",location:"Skopje, North Macedonia",roles:[{title:"Java Engineer",projects:[{name:"3DS Secure digital payments",description:"Developed banking software for 3DS Secure digital payments, handling authentication flows for online card transactions.",technologies:["Java","Spring Boot","Spring Batch","Hibernate","Microsoft SQL Server"],buildTools:["Maven"],versionControl:["Git","Bitbucket"]}]}]},{company:"Medical IT Revolution",period:"Jul 2018 – Dec 2021",location:"Skopje, North Macedonia",roles:[{title:"Java Engineer",projects:[{name:"Medical Portal",description:"Built a medical application for hospitals in the Netherlands handling patient admissions and examination scheduling based on diagnosis, supporting client requests and delivering optimal software solutions.",technologies:["Java EE","JDBC","IBM Db2","JavaServer Pages"],buildTools:["Maven"],versionControl:["SVN"]}]}]}],vi=[{degree:"Master of Electrical Engineering and Information Technologies",institution:"Ss. Cyril and Methodius University of Skopje",period:"2018 – 2021",thesis:"Design, implementation and assessment of a system for monitoring atmospheric impacts and predicting air pollution"},{degree:"Bachelor of Electrical Engineering and Information Technologies",institution:"Ss. Cyril and Methodius University of Skopje",period:"2014 – 2018",thesis:"Web system for collecting and processing data for student services"}],yi=[{title:"Java",imageSrc:"image-skills/backend/java.png",categories:["Backend"]},{title:"Python",imageSrc:"image-skills/backend/python.png",categories:["Backend"]},{title:"Spring",imageSrc:"image-skills/backend/spring.png",categories:["Backend"]},{title:"FastAPI",imageSrc:"image-skills/backend/fastapi.png",categories:["Backend"]},{title:"Flask",imageSrc:"image-skills/backend/flask.png",categories:["Backend"]},{title:"JavaScript",imageSrc:"image-skills/frontend/javascript.png",categories:["Frontend"]},{title:"TypeScript",imageSrc:"image-skills/frontend/typescript.png",categories:["Frontend"]},{title:"React",imageSrc:"image-skills/frontend/react.png",categories:["Frontend"]},{title:"Vue.js",imageSrc:"image-skills/frontend/vuejs.png",categories:["Frontend"]},{title:"Microsoft SQL Server",imageSrc:"image-skills/databases/microsoft-sql-server.png",categories:["Databases"]},{title:"MongoDB",imageSrc:"image-skills/databases/mongodb.png",categories:["Databases"]},{title:"MySQL",imageSrc:"image-skills/databases/mysql.png",categories:["Databases"]},{title:"Oracle DB",imageSrc:"image-skills/databases/oracle-db.png",categories:["Databases"]},{title:"PostgreSQL",imageSrc:"image-skills/databases/postgresql.png",categories:["Databases"]},{title:"Docker",imageSrc:"image-skills/devops/docker.png",categories:["DevOps"]},{title:"Kubernetes",imageSrc:"image-skills/devops/kubernetes.png",categories:["DevOps"]},{title:"Nginx",imageSrc:"image-skills/devops/nginx.png",categories:["DevOps"]},{title:"Git",imageSrc:"image-skills/tools/git.png",categories:["Tools"]},{title:"GitHub",imageSrc:"image-skills/tools/github.png",categories:["Tools"]},{title:"GitHub Actions",imageSrc:"image-skills/tools/github-actions.png",categories:["Tools"]},{title:"Gunicorn",imageSrc:"image-skills/tools/gunicorn.png",categories:["Tools"]},{title:"Lombok",imageSrc:"image-skills/tools/lombok.png",categories:["Tools"]},{title:"Maven",imageSrc:"image-skills/tools/maven.png",categories:["Tools"]},{title:"Postman",imageSrc:"image-skills/tools/postman.png",categories:["Tools"]},{title:"Pytest",imageSrc:"image-skills/tools/pytest.png",categories:["Tools"]},{title:"Swagger",imageSrc:"image-skills/tools/swagger.png",categories:["Tools"]},{title:"Vite",imageSrc:"image-skills/tools/vite.png",categories:["Tools"]},{title:"Matplotlib",imageSrc:"image-skills/data-science/matplotlib.png",categories:["Data Science"]},{title:"NumPy",imageSrc:"image-skills/data-science/numpy.png",categories:["Data Science"]},{title:"Pandas",imageSrc:"image-skills/data-science/pandas.png",categories:["Data Engineering","Data Science"]},{title:"Scikit-learn",imageSrc:"image-skills/data-science/scikit-learn.png",categories:["Data Science"]},{title:"Scipy",imageSrc:"image-skills/data-science/scipy.png",categories:["Data Science"]},{title:"Apache Spark",imageSrc:"image-skills/data-engineering/apache-spark.png",categories:["Data Engineering"]},{title:"Azure Blob Storage",imageSrc:"image-skills/data-engineering/azure-blob-storage.png",categories:["Data Engineering"]},{title:"Azure Data Factory",imageSrc:"image-skills/data-engineering/azure-data-factory.png",categories:["Data Engineering"]},{title:"Azure Data Lake",imageSrc:"image-skills/data-engineering/azure-data-lake.png",categories:["Data Engineering"]},{title:"Databricks",imageSrc:"image-skills/data-engineering/databricks.png",categories:["Data Engineering"]},{title:"Delta Lake",imageSrc:"image-skills/data-engineering/delta-lake.png",categories:["Data Engineering"]},{title:"ChatGPT",imageSrc:"image-skills/ai/chatgpt.png",categories:["AI"]},{title:"Claude",imageSrc:"image-skills/ai/claude.png",categories:["AI"]},{title:"GitHub Copilot",imageSrc:"image-skills/ai/github-copilot.png",categories:["AI"]},{title:"Grok",imageSrc:"image-skills/ai/grok.png",categories:["AI"]}],xi=[{title:"Databricks Certified Data Engineer Associate",imageSrc:"image-skills/certificates/databricks-data-engineer-associate.png",url:"https://credentials.databricks.com/ecb77163-c63a-45f7-a02f-7747fe0ad658#acc.vuI371hQ"},{title:"Databricks Certified Data Engineer Professional",imageSrc:"image-skills/certificates/databricks-data-engineer-professional.png",url:"https://credentials.databricks.com/40252957-e8c8-4c3d-8170-c7655543c307#acc.Q6Kku94J"}],bi=[{title:"AQRA — Air Quality Monitoring",description:"Air-quality monitoring for North Macedonia, built as two deployed services. A Flask REST API trains and serves machine-learning models that forecast pollutant levels from weather and sensor readings, documented with Swagger and backed by MongoDB. A Vue 3 single-page app renders those readings as a Leaflet pollutant heatmap with a 24-hour time slider and Chart.js history, and also ships as a Capacitor mobile app. Both run as containers on Kubernetes behind Nginx.",links:[{label:"Live Site",url:"https://aqra.feit.ukim.edu.mk/"},{label:"Backend",url:"https://github.com/trencho/air-quality-rest-api"},{label:"Frontend",url:"https://github.com/trencho/aqra-frontend"}],technologies:["Python","Flask","Scikit-learn","Pandas","NumPy","MongoDB","Vue.js","TypeScript","Vite","Leaflet","Chart.js","Docker","Kubernetes","Nginx","Gunicorn","Swagger"],imageSrc:"image-projects/aqra.png"},{title:"CrowdTune — Crowdsourced Event Music",description:"Turns any event into a shared playlist. Guests scan a QR code to request and vote on songs with no signup, and a big-screen display auto-plays the crowd's current winner through the YouTube IFrame Player. A Spring Boot API on Java 25 handles events, voting with atomic counters, per-guest QR passes and a Server-Sent Events stream that pushes leaderboard changes in real time; a Vue 3 single-page app renders the guest, host and display surfaces. Events belong to an organization, so a team shares one plan across roles, and paid tiers add catalog search, white-label branding, analytics and recurring nights. Runs as a single-host Docker Compose stack behind Caddy with automatic TLS.",links:[{label:"Live Site",url:"https://crowdtune.live/"}],technologies:["Java","Spring Boot","Spring Security","PostgreSQL","Redis","Flyway","Vue.js","TypeScript","Vite","Tailwind CSS","Pinia","Server-Sent Events","Docker","Caddy","GitHub Actions"],imageSrc:"image-projects/crowdtune.png"},{title:"Crypto Prophet",description:"A FastAPI service that trains machine-learning models to forecast cryptocurrency prices, exposing predictions through a documented REST API. Packaged with Docker for reproducible deployments.",links:[{label:"View Code",url:"https://github.com/trencho/crypto-prophet"}],technologies:["Python","FastAPI","Scikit-learn","Pandas","NumPy","Docker","Swagger"],imageSrc:"image-projects/crypto-prophet.png"},{title:"Task Manager",description:"A full-stack task-management app: a Spring Boot REST API with secured authentication and MongoDB persistence, paired with a Vue.js frontend for registering, logging in and managing tasks.",links:[{label:"Backend",url:"https://github.com/trencho/task-manager-backend"},{label:"Frontend",url:"https://github.com/trencho/task-manager-frontend"}],technologies:["Java","Spring Boot","Spring Security","MongoDB","Vue.js","JavaScript","Docker"],imageSrc:"image-projects/task-manager.png"}],wi=[{title:"Prediction of Air Pollution Concentration Using Weather Data and Regression Models",url:"https://dx.doi.org/10.25673/32749"}],_i=[{name:"English",proficiency:"Full professional proficiency"},{name:"Serbian",proficiency:"Professional working proficiency"},{name:"German",proficiency:"Limited working proficiency"}],ki=gi,Ei=vi,Si=xi,Ti=bi,Lt=wi,Ci=_i,Dt=yi,ji=["Backend","Frontend","Databases","Data Engineering","Data Science","AI","DevOps","Tools"],ht=({title:e,headingId:t,children:a})=>(0,s.jsx)(S.div,{className:`flex justify-center ${ft}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:ae,children:(0,s.jsxs)("div",{className:"w-full max-w-lg sm:max-w-3xl",children:[(0,s.jsx)(ee,{id:t,className:"mb-8 sm:mb-12",animated:!0,variants:F,children:e}),a]})}),At=({label:e,items:t})=>t.length>0?(0,s.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,s.jsx)("span",{className:"opacity-90 font-medium",children:e}),t.map(a=>(0,s.jsx)("span",{className:"rounded-full border border-gray-400/50 px-2.5 py-0.5 select-none",children:a},a))]}):null,Ri=({project:e})=>(0,s.jsxs)("li",{children:[(0,s.jsx)("h5",{className:"text-base font-semibold",children:e.name}),(0,s.jsx)("p",{className:"text-base leading-relaxed mt-1 mb-3",children:e.description}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2",children:e.technologies.map(t=>(0,s.jsx)("span",{className:`text-xs sm:text-sm ${ga}`,children:t},t))}),(0,s.jsxs)("div",{className:"mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 text-xs sm:text-sm",children:[(0,s.jsx)(At,{label:"Build",items:e.buildTools}),(0,s.jsx)(At,{label:"Version control",items:e.versionControl})]})]}),Ni=({job:e})=>{const t=e.roles.length>1;return(0,s.jsxs)(S.li,{className:"ms-6 sm:ms-8",variants:F,children:[(0,s.jsx)("span",{className:"absolute -start-2.25 flex h-4 w-4 rounded-full border-2 bg-fuchsia-500 border-white dark:bg-cyan-400 dark:border-[#0d0221] dark:shadow-[0_0_10px_rgba(34,211,238,0.7)]","aria-hidden":"true"}),(0,s.jsxs)("div",{className:`rounded-lg shadow-lg p-5 sm:p-6 ${G}`,children:[(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1",children:[(0,s.jsx)("h3",{className:"text-lg sm:text-xl font-semibold",children:t?e.company:(0,s.jsxs)(s.Fragment,{children:[e.roles[0]?.title,(0,s.jsxs)("span",{className:mt,children:[" · ",e.company]})]})}),(0,s.jsx)("span",{className:"text-sm sm:text-base whitespace-nowrap opacity-80",children:e.period})]}),(0,s.jsx)("p",{className:"text-sm sm:text-base opacity-80 mb-4",children:e.location}),(0,s.jsx)("div",{className:"space-y-6",children:e.roles.map(a=>(0,s.jsxs)("div",{children:[t&&(0,s.jsx)("h4",{className:"text-base sm:text-lg font-semibold mb-3 text-fuchsia-700 dark:text-cyan-400",children:a.title}),(0,s.jsx)("ul",{className:t?"space-y-4 border-s-2 border-gray-400/25 ps-4 sm:ps-5":"space-y-4",children:a.projects.map(r=>(0,s.jsx)(Ri,{project:r},r.name))})]},a.title))})]})]})},Ii=()=>(0,s.jsx)(ht,{title:"Experience",headingId:"experience-heading",children:(0,s.jsx)("ol",{className:"relative border-s-2 border-gray-400/40 ms-3 sm:ms-4 space-y-8 sm:space-y-10",children:ki.map(e=>(0,s.jsx)(Ni,{job:e},e.company))})}),Pi=()=>{const e=`rounded-lg shadow-lg p-5 sm:p-6 ${G}`;return(0,s.jsxs)(ht,{title:"Education",headingId:"education-heading",children:[(0,s.jsx)("div",{className:"space-y-6",children:Ei.map(t=>(0,s.jsxs)(S.div,{className:e,variants:F,children:[(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1",children:[(0,s.jsx)("h3",{className:"text-lg sm:text-xl font-semibold",children:t.degree}),(0,s.jsx)("span",{className:"text-sm sm:text-base whitespace-nowrap opacity-80",children:t.period})]}),(0,s.jsx)("p",{className:`text-sm sm:text-base font-medium ${mt}`,children:t.institution}),(0,s.jsxs)("p",{className:"text-base leading-relaxed mt-2",children:[(0,s.jsx)("span",{className:"opacity-80",children:"Thesis: "}),(0,s.jsx)("span",{className:"italic",children:t.thesis})]})]},t.degree))}),Lt.length>0&&(0,s.jsxs)(S.div,{className:"mt-10",variants:F,children:[(0,s.jsx)("h3",{className:"text-xl sm:text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white",children:"Publications"}),(0,s.jsx)("ul",{className:"space-y-4",children:Lt.map(t=>(0,s.jsx)("li",{className:e,children:(0,s.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"text-base leading-relaxed font-medium hover:underline rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-600 focus-visible:ring-offset-2 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-[#0d0221] text-fuchsia-700 dark:text-cyan-400",children:t.title})},t.title))})]})]})},Li=({label:e,active:t,onSelect:a})=>(0,s.jsx)("button",{type:"button",onClick:a,"aria-pressed":t,className:`px-6 py-3 rounded-xl font-medium transition-all duration-300 border cursor-pointer ${$} ${ai(t)}`,children:e}),Di=["All",...ji],Ai=()=>{const[e,t]=(0,l.useState)("All"),a=e==="All"?Dt:Dt.filter(r=>r.categories.includes(e));return(0,s.jsx)(S.div,{className:"flex max-w-6xl mx-auto justify-center items-center p-4 sm:p-6 lg:p-12 skills-section",initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:Ue,children:(0,s.jsxs)(S.div,{className:`w-full max-w-lg sm:max-w-6xl p-4 sm:p-8 rounded-lg shadow-lg ${G}`,variants:Ue,children:[(0,s.jsx)(ee,{id:"skills-heading",className:"mb-4 sm:mb-6",animated:!0,variants:F,children:"Skills"}),(0,s.jsxs)(S.div,{className:"glass-card p-8 sm:p-12 lg:p-16",variants:F,children:[(0,s.jsx)("div",{className:"flex flex-wrap justify-center gap-4 mb-12",role:"group","aria-label":"Filter skills by category",children:Di.map(r=>(0,s.jsx)(Li,{label:r,active:e===r,onSelect:()=>t(r)},r))}),(0,s.jsx)(S.ul,{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6","aria-label":`${e} skills`,variants:Ue,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:a.map(r=>(0,s.jsxs)(S.li,{className:"flex flex-col items-center space-y-3 p-4 rounded-2xl transition-all duration-300 hover:scale-105 group bg-gray-100 hover:bg-gray-200 dark:bg-[#241041] dark:hover:bg-[#33165c]",variants:F,whileHover:{y:-5},children:[(0,s.jsx)("div",{className:"w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden bg-linear-to-br from-fuchsia-500/20 to-cyan-500/20 p-2 border border-fuchsia-400/30",children:(0,s.jsx)(ne,{src:r.imageSrc,alt:"",className:"w-full h-full object-contain",width:"80",height:"80"})}),(0,s.jsx)("span",{className:"text-sm font-medium text-center transition-colors duration-300 text-black/80 group-hover:text-black dark:text-white/80 dark:group-hover:text-white",children:r.title})]},r.title))},e)]})]})})},Mi=()=>(0,s.jsxs)("div",{className:"p-4 sm:p-6 lg:p-8",children:[(0,s.jsx)(ee,{id:"certificates-heading",className:"p-6",children:"Certificates"}),(0,s.jsx)("div",{className:"max-w-6xl mx-auto flex flex-wrap justify-center gap-6 sm:gap-8 text-center",children:Si.map((e,t)=>(0,s.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":e.title,className:`rounded-lg ${$}`,children:(0,s.jsxs)(S.div,{className:`w-48 sm:w-56 lg:w-72 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 ${G} hover:bg-white/85 dark:hover:bg-[#241041]`,whileInView:{opacity:1,y:0},initial:{opacity:0,y:10},viewport:{once:!0},transition:{duration:.2,delay:t*.03},children:[(0,s.jsx)(ne,{src:e.imageSrc,alt:e.title,width:"128",height:"128",className:"mx-auto w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain select-none"}),(0,s.jsx)("h3",{className:`mt-4 text-lg sm:text-xl font-medium text-center line-clamp-2 ${fe}`,children:e.title})]})},e.title))})]});function Oi(e){return N({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"},child:[]}]})(e)}function $i(e){return N({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]},{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"},child:[]}]})(e)}var zi=e=>{try{return new URL(e).hostname.replace(/^www\./,"")==="github.com"}catch{return!1}},Bi=({label:e,url:t,projectTitle:a})=>{const r=zi(t)?Oi:$i;return(0,s.jsxs)("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 select-none ${$} ${Pe}`,"aria-label":`${a} – ${e}`,children:[(0,s.jsx)("span",{children:e}),(0,s.jsx)(r,{className:"text-xl","aria-hidden":"true"})]})},Fi=()=>(0,s.jsxs)("div",{className:"py-8 sm:py-12",children:[(0,s.jsx)(ee,{id:"projects-heading",className:"mb-8 sm:mb-12",children:"My Projects"}),(0,s.jsx)("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 md:px-8",children:Ti.map((e,t)=>(0,s.jsxs)(S.div,{className:`flex flex-col md:flex-row mb-10 sm:mb-12 shadow-lg rounded-lg p-6 ${G} ${t%2!==0?"md:flex-row-reverse":""}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:Zn,transition:{delay:t*.2},children:[(0,s.jsx)(S.div,{className:"w-full md:w-1/2 p-4 flex justify-center items-center",whileHover:{scale:1.1,rotate:2},transition:{duration:.3},children:(0,s.jsx)(ne,{src:e.imageSrc,alt:e.title,width:"240",height:"240",className:"w-48 h-48 sm:w-60 sm:h-60 object-contain rounded-lg shadow-2xl select-none"})}),(0,s.jsxs)("div",{className:"w-full md:w-1/2 p-4 flex flex-col justify-center",children:[(0,s.jsx)("h3",{className:"text-xl sm:text-2xl font-semibold mb-4",children:e.title}),(0,s.jsx)("p",{className:"mb-4",children:e.description}),(0,s.jsx)("ul",{className:"flex flex-wrap gap-2 mb-4","aria-label":`${e.title} technologies`,children:e.technologies.map(a=>(0,s.jsx)("li",{className:`text-sm ${ga}`,children:a},a))}),(0,s.jsx)("div",{className:"flex flex-wrap gap-4",children:e.links.map(a=>(0,s.jsx)(Bi,{label:a.label,url:a.url,projectTitle:e.title},a.url))})]})]},e.title))})]}),Hi=()=>(0,s.jsx)(ht,{title:"Languages",headingId:"languages-heading",children:(0,s.jsx)("div",{className:"grid gap-6 sm:grid-cols-3",children:Ci.map(e=>(0,s.jsxs)(S.div,{className:`rounded-lg shadow-lg p-5 sm:p-6 text-center ${G}`,variants:F,children:[(0,s.jsx)("h3",{className:"text-lg sm:text-xl font-semibold",children:e.name}),(0,s.jsx)("p",{className:`text-sm sm:text-base mt-1 ${mt}`,children:e.proficiency})]},e.name))})});function va(e){var t,a,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(a=va(e[t]))&&(r&&(r+=" "),r+=a)}else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function q(){for(var e,t,a=0,r="",n=arguments.length;a<n;a++)(e=arguments[a])&&(t=va(e))&&(r&&(r+=" "),r+=t);return r}var me=e=>typeof e=="number"&&!isNaN(e),Y=e=>typeof e=="string",J=e=>typeof e=="function",Vi=e=>Y(e)||me(e),et=e=>Y(e)||J(e)?e:null,Ui=(e,t)=>e===!1||me(e)&&e>0?e:t,tt=e=>(0,l.isValidElement)(e)||Y(e)||J(e)||me(e);function Ji(e,t,a=300){let{scrollHeight:r,style:n}=e;requestAnimationFrame(()=>{n.minHeight="initial",n.height=r+"px",n.transition=`all ${a}ms`,requestAnimationFrame(()=>{n.height="0",n.padding="0",n.margin="0",setTimeout(t,a)})})}function Le({enter:e,exit:t,appendPosition:a=!1,collapse:r=!0,collapseDuration:n=300}){return function({children:i,position:o,preventExitTransition:c,done:d,nodeRef:u,isIn:f,playToast:m}){let p=a?`${e}--${o}`:e,v=a?`${t}--${o}`:t,x=(0,l.useRef)(0);return(0,l.useLayoutEffect)(()=>{let w=u.current,h=p.split(" "),b=g=>{g.target===u.current&&(m(),w.removeEventListener("animationend",b),w.removeEventListener("animationcancel",b),x.current===0&&g.type!=="animationcancel"&&w.classList.remove(...h))};w.classList.add(...h),w.addEventListener("animationend",b),w.addEventListener("animationcancel",b)},[]),(0,l.useEffect)(()=>{let w=u.current,h=()=>{w.removeEventListener("animationend",h),r?Ji(w,d,n):d()};f||(c?h():(x.current=1,w.className+=` ${v}`,w.addEventListener("animationend",h)))},[f]),l.createElement(l.Fragment,null,i)}}function Mt(e,t){return{content:ya(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function ya(e,t,a=!1){return(0,l.isValidElement)(e)&&!Y(e.type)?(0,l.cloneElement)(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:a}):J(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:a}):e}function Gi({closeToast:e,theme:t,ariaLabel:a="close"}){return l.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":a},l.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Wi({delay:e,isRunning:t,closeToast:a,type:r="default",hide:n,className:i,controlledProgress:o,progress:c,rtl:d,isIn:u,theme:f}){let m=n||o&&c===0,p={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};o&&(p.transform=`scaleX(${c})`);let v=q("Toastify__progress-bar",o?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":d}),x=J(i)?i({rtl:d,type:r,defaultClassName:v}):q(v,i),w={[o&&c>=1?"onTransitionEnd":"onAnimationEnd"]:o&&c<1?null:()=>{u&&a()}};return l.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":m},l.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${r}`}),l.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer","aria-valuenow":o?Math.round(c*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:x,style:p,...w}))}var qi=1,xa=()=>`${qi++}`;function Yi(e,t,a){let r=1,n=0,i=[],o=[],c=t,d=new Map,u=new Set,f=g=>(u.add(g),()=>u.delete(g)),m=()=>{o=Array.from(d.values()),u.forEach(g=>g())},p=({containerId:g,toastId:y,updateId:_})=>{let E=g?g!==e:e!==1,R=d.has(y)&&_==null;return E||R},v=(g,y)=>{d.forEach(_=>{var E;(y==null||y===_.props.toastId)&&((E=_.toggle)==null||E.call(_,g))})},x=g=>{var y,_;g.isActive&&((_=(y=g.props)==null?void 0:y.onClose)==null||_.call(y,g.removalReason),g.isActive=!1,a(Mt(g,"removed")))},w=g=>{if(g==null)d.forEach(x);else{let y=d.get(g);y&&x(y)}m()},h=()=>{n-=i.length,i=[]},b=g=>{var y,_;let{toastId:E,updateId:R}=g.props,k=R==null;g.staleId&&d.delete(g.staleId),g.isActive=!0,d.set(E,g),m(),a(Mt(g,k?"added":"updated")),k&&((_=(y=g.props).onOpen)==null||_.call(y))};return{id:e,props:c,observe:f,toggle:v,removeToast:w,toasts:d,clearQueue:h,buildToast:(g,y)=>{if(p(y))return;let{toastId:_,updateId:E,data:R,staleId:k,delay:T}=y,I=E==null;I&&n++;let L={...c,style:c.toastStyle,key:r++,...Object.fromEntries(Object.entries(y).filter(([Q,B])=>B!=null)),toastId:_,updateId:E,data:R,isIn:!1,className:et(y.className||c.toastClassName),progressClassName:et(y.progressClassName||c.progressClassName),autoClose:y.isLoading?!1:Ui(y.autoClose,c.autoClose),closeToast(Q){let B=d.get(_);B&&(B.removalReason=Q,w(_))},deleteToast(){if(d.get(_)!=null){if(d.delete(_),n--,n<0&&(n=0),i.length>0){b(i.shift());return}m()}}};L.closeButton=c.closeButton,y.closeButton===!1||tt(y.closeButton)?L.closeButton=y.closeButton:y.closeButton===!0&&(L.closeButton=tt(c.closeButton)?c.closeButton:!0);let A={content:g,props:L,staleId:k};c.limit&&c.limit>0&&n>c.limit&&I?i.push(A):me(T)?setTimeout(()=>{b(A)},T):b(A)},setProps(g){c=g},setToggle:(g,y)=>{let _=d.get(g);_&&(_.toggle=y)},isToastActive:g=>{var y;return(y=d.get(g))==null?void 0:y.isActive},getSnapshot:()=>o}}var P=new Map,ie=[],at=new Set,Ki=e=>at.forEach(t=>t(e)),ba=()=>P.size>0;function Qi(){ie.forEach(e=>_a(e.content,e.options)),ie=[]}var Xi=(e,{containerId:t})=>{var a;return(a=P.get(t||1))==null?void 0:a.toasts.get(e)};function wa(e,t){var a;if(t)return!!((a=P.get(t))!=null&&a.isToastActive(e));let r=!1;return P.forEach(n=>{n.isToastActive(e)&&(r=!0)}),r}function Zi(e){if(!ba()){ie=ie.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||Vi(e))P.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=P.get(e.containerId);t?t.removeToast(e.id):P.forEach(a=>{a.removeToast(e.id)})}}var eo=(e={})=>{P.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function _a(e,t){tt(e)&&(ba()||ie.push({content:e,options:t}),P.forEach(a=>{a.buildToast(e,t)}))}function to(e){var t;(t=P.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function ka(e,t){P.forEach(a=>{(t==null||!(t!=null&&t.containerId)||t?.containerId===a.id)&&a.toggle(e,t?.id)})}function ao(e){let t=e.containerId||1;return{subscribe(a){let r=Yi(t,e,Ki);P.set(t,r);let n=r.observe(a);return Qi(),()=>{n(),P.delete(t)}},setProps(a){var r;(r=P.get(t))==null||r.setProps(a)},getSnapshot(){var a;return(a=P.get(t))==null?void 0:a.getSnapshot()}}}function ro(e){return at.add(e),()=>{at.delete(e)}}function no(e){return e&&(Y(e.toastId)||me(e.toastId))?e.toastId:xa()}function he(e,t){return _a(e,t),t.toastId}function De(e,t){return{...t,type:t&&t.type||e,toastId:no(t)}}function Ae(e){return(t,a)=>he(t,De(e,a))}function C(e,t){return he(e,De("default",t))}C.loading=(e,t)=>he(e,De("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function io(e,{pending:t,error:a,success:r},n){let i;t&&(i=Y(t)?C.loading(t,n):C.loading(t.render,{...n,...t}));let o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(u,f,m)=>{if(f==null){C.dismiss(i);return}let p={type:u,...o,...n,data:m},v=Y(f)?{render:f}:f;return i?C.update(i,{...p,...v}):C(v.render,{...p,...v}),m},d=J(e)?e():e;return d.then(u=>c("success",r,u)).catch(u=>c("error",a,u)),d}C.promise=io;C.success=Ae("success");C.info=Ae("info");C.error=Ae("error");C.warning=Ae("warning");C.warn=C.warning;C.dark=(e,t)=>he(e,De("default",{theme:"dark",...t}));function oo(e){Zi(e)}C.dismiss=oo;C.clearWaitingQueue=eo;C.isActive=wa;C.update=(e,t={})=>{let a=Xi(e,t);if(a){let{props:r,content:n}=a,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:xa()};i.toastId!==e&&(i.staleId=e);let o=i.render||n;delete i.render,he(o,i)}};C.done=e=>{C.update(e,{progress:1})};C.onChange=ro;C.play=e=>ka(!0,e);C.pause=e=>ka(!1,e);function so(e){var t;let{subscribe:a,getSnapshot:r,setProps:n}=(0,l.useRef)(ao(e)).current;n(e);let i=(t=(0,l.useSyncExternalStore)(a,r,r))==null?void 0:t.slice();function o(c){if(!i)return[];let d=new Map;return e.newestOnTop&&i.reverse(),i.forEach(u=>{let{position:f}=u.props;d.has(f)||d.set(f,[]),d.get(f).push(u)}),Array.from(d,u=>c(u[0],u[1]))}return{getToastToRender:o,isToastActive:wa,count:i?.length}}function lo(e){let[t,a]=(0,l.useState)(!1),[r,n]=(0,l.useState)(!1),i=(0,l.useRef)(null),o=(0,l.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:c,pauseOnHover:d,closeToast:u,onClick:f,closeOnClick:m}=e;to({id:e.toastId,containerId:e.containerId,fn:a}),(0,l.useEffect)(()=>{if(e.pauseOnFocusLoss)return p(),()=>{v()}},[e.pauseOnFocusLoss]);function p(){document.hasFocus()||b(),window.addEventListener("focus",h),window.addEventListener("blur",b)}function v(){window.removeEventListener("focus",h),window.removeEventListener("blur",b)}function x(k){if(e.draggable===!0||e.draggable===k.pointerType){g();let T=i.current;o.canCloseOnClick=!0,o.canDrag=!0,T.style.transition="none",e.draggableDirection==="x"?(o.start=k.clientX,o.removalDistance=T.offsetWidth*(e.draggablePercent/100)):(o.start=k.clientY,o.removalDistance=T.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function w(k){let{top:T,bottom:I,left:L,right:A}=i.current.getBoundingClientRect();k.pointerType==="mouse"&&e.pauseOnHover&&k.clientX>=L&&k.clientX<=A&&k.clientY>=T&&k.clientY<=I?b():h()}function h(){a(!0)}function b(){a(!1)}function g(){o.didMove=!1,document.addEventListener("pointermove",_),document.addEventListener("pointerup",E)}function y(){document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",E)}function _(k){let T=i.current;if(o.canDrag&&T){o.didMove=!0,t&&b(),e.draggableDirection==="x"?o.delta=k.clientX-o.start:o.delta=k.clientY-o.start,o.start!==k.clientX&&(o.canCloseOnClick=!1);let I=e.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`;T.style.transform=`translate3d(${I},0)`,T.style.opacity=`${1-Math.abs(o.delta/o.removalDistance)}`}}function E(){y();let k=i.current;if(o.canDrag&&o.didMove&&k){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance){n(!0),e.closeToast(!0),e.collapseAll();return}k.style.transition="transform 0.2s, opacity 0.2s",k.style.removeProperty("transform"),k.style.removeProperty("opacity")}}let R={onPointerDown:x,onPointerUp:w};return c&&d&&(R.onMouseEnter=b,e.stacked||(R.onMouseLeave=h)),m&&(R.onClick=k=>{f&&f(k),o.canCloseOnClick&&u(!0)}),{playToast:h,pauseToast:b,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:R}}var Ea=typeof window<"u"?l.useLayoutEffect:l.useEffect,Me=({theme:e,type:t,isLoading:a,...r})=>l.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function co(e){return l.createElement(Me,{...e},l.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function uo(e){return l.createElement(Me,{...e},l.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function fo(e){return l.createElement(Me,{...e},l.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function mo(e){return l.createElement(Me,{...e},l.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function ho(){return l.createElement("div",{className:"Toastify__spinner"})}var rt={info:uo,warning:co,success:fo,error:mo,spinner:ho},po=e=>e in rt;function go({theme:e,type:t,isLoading:a,icon:r}){let n=null,i={theme:e,type:t};return r===!1||(J(r)?n=r({...i,isLoading:a}):(0,l.isValidElement)(r)?n=(0,l.cloneElement)(r,i):a?n=rt.spinner():po(t)&&(n=rt[t](i))),n}var vo=e=>{let{isRunning:t,preventExitTransition:a,toastRef:r,eventHandlers:n,playToast:i}=lo(e),{closeButton:o,children:c,autoClose:d,onClick:u,type:f,hideProgressBar:m,closeToast:p,transition:v,position:x,className:w,style:h,progressClassName:b,updateId:g,role:y,progress:_,rtl:E,toastId:R,deleteToast:k,isIn:T,isLoading:I,closeOnClick:L,theme:A,ariaLabel:Q}=e,B=q("Toastify__toast",`Toastify__toast-theme--${A}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":L}),pe=J(w)?w({rtl:E,position:x,type:f,defaultClassName:B}):q(B,w),M=go(e),pt=!!_||!d,$e={closeToast:p,type:f,theme:A},ge=null;return o===!1||(J(o)?ge=o($e):(0,l.isValidElement)(o)?ge=(0,l.cloneElement)(o,$e):ge=Gi($e)),l.createElement(v,{isIn:T,done:k,position:x,preventExitTransition:a,nodeRef:r,playToast:i},l.createElement("div",{id:R,tabIndex:0,onClick:u,"data-in":T,className:pe,...n,style:h,ref:r,...T&&{role:y,"aria-label":Q}},M!=null&&l.createElement("div",{className:q("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!I})},M),ya(c,e,!t),ge,!e.customProgressBar&&l.createElement(Wi,{...g&&!pt?{key:`p-${g}`}:{},rtl:E,theme:A,delay:d,isRunning:t,isIn:T,closeToast:p,hide:m,type:f,className:b,controlledProgress:pt,progress:_||0})))},Oe=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),yo=Le(Oe("bounce",!0)),ts=Le(Oe("slide",!0)),as=Le(Oe("zoom")),rs=Le(Oe("flip")),xo={position:"top-right",transition:yo,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function bo(e){let t={...xo,...e},a=e.stacked,[r,n]=(0,l.useState)(!0),i=(0,l.useRef)(null),{getToastToRender:o,isToastActive:c,count:d}=so(t),{className:u,style:f,rtl:m,containerId:p,hotKeys:v}=t;function x(h){let b=q("Toastify__toast-container",`Toastify__toast-container--${h}`,{"Toastify__toast-container--rtl":m});return J(u)?u({position:h,rtl:m,defaultClassName:b}):q(b,et(u))}function w(){a&&(n(!0),C.play())}return Ea(()=>{var h;if(a){let b=i.current.querySelectorAll('[data-in="true"]'),g=12,y=(h=t.position)==null?void 0:h.includes("top"),_=0,E=0;Array.from(b).reverse().forEach((R,k)=>{let T=R;T.classList.add("Toastify__toast--stacked"),k>0&&(T.dataset.collapsed=`${r}`),T.dataset.pos||(T.dataset.pos=y?"top":"bot");let I=_*(r?.2:1)+(r?0:g*k),L=Math.max(.5,1-(r?E:0));T.style.setProperty("--y",`${y?I:I*-1}px`),T.style.setProperty("--g",`${g}`),T.style.setProperty("--s",`${L}`),_+=T.offsetHeight,E+=.025})}},[r,d,a]),(0,l.useEffect)(()=>{function h(b){var g;let y=i.current;v(b)&&((g=y?.querySelector('[tabIndex="0"]'))==null||g.focus(),n(!1),C.pause()),b.key==="Escape"&&(document.activeElement===y||y!=null&&y.contains(document.activeElement))&&(n(!0),C.play())}return document.addEventListener("keydown",h),()=>{document.removeEventListener("keydown",h)}},[v]),l.createElement("section",{ref:i,className:"Toastify",id:p,onMouseEnter:()=>{a&&(n(!1),C.pause())},onMouseLeave:w,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},o((h,b)=>{let g=b.length?{...f}:{...f,pointerEvents:"none"};return l.createElement("div",{tabIndex:-1,className:x(h),"data-stacked":a,style:g,key:`c-${h}`},b.map(({content:y,props:_})=>l.createElement(vo,{..._,stacked:a,collapseAll:w,isIn:c(_.toastId,_.containerId),key:`t-${_.key}`},y)))}))}var wo=`:root {
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
`,Ot=new Map,_o=(e,t)=>{Ea(()=>{if(!e||typeof document>"u")return;let a=document,r=Ot.get(a);if(r){t&&r.setAttribute("nonce",t);return}let n=a.createElement("style");n.textContent=e,t&&n.setAttribute("nonce",t),a.head.appendChild(n),Ot.set(a,n)},[t])};function ko(e){return _o(wo,e.nonce),l.createElement(bo,{...e})}var re={emailjs:{serviceId:"service_2936zzf",templateId:"template_q859oph",publicKey:"YDO5GNDdewVvMoyTz"},recaptcha:{siteKey:"6LeJDrIqAAAAAAJz4msjc88QwwlPf-Qge27d_t7a"},contact:{email:"atrenchevski@gmail.com"}},Eo=()=>{const e=["VITE_CONTACT_EMAIL","VITE_EMAILJS_SERVICE_ID","VITE_EMAILJS_TEMPLATE_ID","VITE_EMAILJS_PUBLIC_KEY","VITE_RECAPTCHA_SITE_KEY"].filter(t=>!{BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_CONTACT_EMAIL:"atrenchevski@gmail.com",VITE_EMAILJS_PUBLIC_KEY:"YDO5GNDdewVvMoyTz",VITE_EMAILJS_SERVICE_ID:"service_2936zzf",VITE_EMAILJS_TEMPLATE_ID:"template_q859oph",VITE_RECAPTCHA_SITE_KEY:"6LeJDrIqAAAAAAJz4msjc88QwwlPf-Qge27d_t7a"}[t]);if(e.length>0){const t=`Missing required environment variables: ${e.join(", ")}. Please check your .env file.`;if(typeof window<"u")throw new Error(t);console.warn(t)}},So=(e={})=>{const{threshold:t=.1,rootMargin:a="0px",triggerOnce:r=!0}=e,[n,i]=(0,l.useState)(!1),o=(0,l.useRef)(null);return(0,l.useEffect)(()=>{const c=o.current;if(!c)return;const d=new IntersectionObserver(([u])=>{u&&(u.isIntersecting?(i(!0),r&&d.disconnect()):r||i(!1))},{threshold:t,rootMargin:a});return d.observe(c),()=>d.disconnect()},[t,a,r]),{ref:o,isIntersecting:n}},$t="flex items-center justify-center text-sm text-center text-gray-600 dark:text-white/70",To=({onChange:e,theme:t="dark",widgetRef:a})=>{const r=re.recaptcha.siteKey,[n,i]=(0,l.useState)(null),{ref:o,isIntersecting:c}=So({rootMargin:"100px",triggerOnce:!0,threshold:.01});return(0,l.useEffect)(()=>{!r||!c||n||(async()=>{try{const d=await ue(()=>import("./esm-CEfkMi4K.js"),__vite__mapDeps([0,1,2]));i(()=>d.default)}catch(d){console.error("Failed to load reCAPTCHA:",d)}})()},[r,c,n]),(0,s.jsx)("div",{ref:o,className:"flex flex-col items-center justify-center min-h-19.5",children:r?n?(0,s.jsx)(n,{ref:a,sitekey:r,onChange:e,theme:t}):(0,s.jsx)("div",{className:$t,children:"Loading verification..."}):(0,s.jsx)("div",{className:$t,children:"Verification is unavailable right now."})})},Co=200,Je=({id:e,label:t,icon:a,value:r,error:n,onChange:i,type:o="text",maxLength:c})=>{const d={id:e,name:e,value:r,onChange:i,required:!0,"aria-invalid":n?!0:void 0,"aria-describedby":n?`${e}-error`:void 0},u=`w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${ri(!!n)}`,f=c===void 0?0:c-r.length;return(0,s.jsxs)(S.div,{className:"mb-4 sm:mb-6",variants:V,children:[(0,s.jsxs)("label",{htmlFor:e,className:`flex items-center text-sm sm:text-base font-semibold mb-2 ${ft}`,children:[a,t]}),c===void 0?(0,s.jsx)("input",{type:o,className:u,...d}):(0,s.jsx)("textarea",{maxLength:c,className:`${u} h-24 sm:h-32`,...d}),(0,s.jsxs)("div",{className:"mt-1 flex items-center justify-between gap-2",children:[n?(0,s.jsx)("p",{id:`${e}-error`,className:"text-red-500 text-sm",role:"alert",children:n}):(0,s.jsx)("span",{}),c!==void 0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("span",{className:"text-xs text-gray-500 dark:text-gray-300","aria-hidden":"true",children:[r.length,"/",c]}),(0,s.jsx)("span",{className:"sr-only","aria-live":"polite",children:f<=Co?`${f} characters left`:""})]})]})]})};Eo();var Ge={serviceId:re.emailjs.serviceId,templateId:re.emailjs.templateId,publicKey:re.emailjs.publicKey},jo=async(e,t)=>{try{const{default:a}=await ue(async()=>{const{default:r}=await import("./es-BSyMOP0Y.js");return{default:r}},[]);return{success:!0,data:await a.send(Ge.serviceId,Ge.templateId,{name:e.name,email:e.email,message:e.message,to_name:W.name,to_email:re.contact.email,"g-recaptcha-response":t},Ge.publicKey)}}catch(a){const r=a instanceof Error?a.message:"Failed to send email";return console.error("Email send error:",a),{success:!1,error:r}}},Sa=()=>({position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),xe=e=>{C.error(e,Sa())},Ro=e=>{C.success(e,Sa())},Ta=5e3,zt=2,Bt=10,No=254,Ft={name:"",email:"",message:""},Io=({name:e,email:t,message:a})=>{const r={},n=e.trim(),i=t.trim(),o=a.trim();return n?n.length<zt&&(r.name=`Name must be at least ${zt} characters`):r.name="Name is required",i?(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)||i.length>No)&&(r.email="Please enter a valid email address"):r.email="Email is required",o?o.length<Bt?r.message=`Message must be at least ${Bt} characters`:o.length>5e3&&(r.message=`Message cannot exceed ${Ta} characters`):r.message="Message is required",r},Po=()=>{const[e,t]=(0,l.useState)(Ft),[a,r]=(0,l.useState)({}),[n,i]=(0,l.useState)(!1),[o,c]=(0,l.useState)(!1),[d,u]=(0,l.useState)(null),f=(0,l.useRef)(null),m=w=>{const h=w.target.name,{value:b}=w.target;t(g=>({...g,[h]:b})),a[h]&&r(g=>{const y={...g};return delete y[h],y})},p=()=>{f.current?.reset(),u(null)};return{formData:e,errors:a,submitted:n,isSubmitting:o,recaptchaRef:f,handleInputChange:m,handleCaptchaChange:u,handleSubmit:async w=>{w.preventDefault();const h=Io(e);if(r(h),Object.keys(h).length>0){xe("Please fix the form errors before submitting.");return}if(!d){xe("Please complete the CAPTCHA to proceed.");return}c(!0);try{const b=await jo(e,d);b.success?(i(!0),Ro("Message sent successfully! I'll get back to you soon.")):(p(),xe(`Failed to send message: ${b.error}. Please try again later, or reach me on LinkedIn.`))}catch(b){console.error("Form submission error:",b),p(),xe("An unexpected error occurred. Please try again.")}finally{c(!1)}},handleReset:()=>{t(Ft),r({}),p(),i(!1)}}},We="text-gray-500 mr-2 text-lg",Lo=({onReset:e})=>(0,s.jsxs)(S.div,{className:"text-center p-4 sm:p-6 rounded-lg shadow-md max-w-md mx-auto flex flex-col items-center justify-center bg-green-50 border-green-400 dark:bg-green-900 dark:border-green-600",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5},role:"status","aria-live":"polite",children:[(0,s.jsx)(Wn,{className:"text-4xl mb-4 text-green-500 dark:text-green-400","aria-hidden":"true"}),(0,s.jsx)("span",{className:`text-base sm:text-lg font-semibold mb-2 ${fe}`,children:"Thank you! Your message has been sent successfully."}),(0,s.jsx)("button",{type:"button",onClick:e,className:`mt-4 px-6 py-2 rounded-full font-semibold transition cursor-pointer ${$} ${pa}`,children:"Send another message"})]}),Do=()=>{const{darkMode:e}=ua(),t=e?"dark":"light",{formData:a,errors:r,submitted:n,isSubmitting:i,recaptchaRef:o,handleInputChange:c,handleCaptchaChange:d,handleSubmit:u,handleReset:f}=Po();return(0,s.jsxs)(S.div,{className:`p-6 sm:p-8 md:p-10 lg:p-16 rounded-lg shadow-lg max-w-4xl mx-auto my-8 md:my-12 ${G}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{staggerChildren:.2},children:[(0,s.jsx)(ko,{theme:t}),(0,s.jsx)(ee,{id:"contact-heading",className:"mb-6 sm:mb-8",animated:!0,variants:V,children:"Get In Touch"}),(0,s.jsx)(S.p,{className:"text-base sm:text-lg lg:text-xl text-center max-w-2xl mx-auto mb-8 sm:mb-10 text-gray-700 dark:text-white/85",variants:V,children:"Have a question or a project in mind? Fill out the form below and I'll get back to you as soon as I can."}),n?(0,s.jsx)(Lo,{onReset:f}):(0,s.jsxs)(S.form,{onSubmit:m=>{u(m)},className:"max-w-lg w-full p-6 sm:p-8 rounded-lg shadow-md mx-auto bg-white dark:bg-[#160a2e] dark:text-white dark:border dark:border-cyan-500/15",initial:"hidden",animate:"visible",variants:V,noValidate:!0,children:[(0,s.jsx)(Je,{id:"name",label:"Your Name",icon:(0,s.jsx)(Fn,{className:We,"aria-hidden":"true"}),value:a.name,error:r.name,onChange:c}),(0,s.jsx)(Je,{id:"email",label:"Your Email",icon:(0,s.jsx)(Un,{className:We,"aria-hidden":"true"}),type:"email",value:a.email,error:r.email,onChange:c}),(0,s.jsx)(Je,{id:"message",label:"Your Message",icon:(0,s.jsx)(Gn,{className:We,"aria-hidden":"true"}),value:a.message,error:r.message,onChange:c,maxLength:Ta}),(0,s.jsxs)(S.div,{className:"flex flex-col items-center justify-center",variants:V,children:[(0,s.jsx)(To,{widgetRef:o,onChange:d,theme:t}),(0,s.jsxs)(S.button,{type:"submit",disabled:i,className:`mt-6 px-6 py-3 rounded-full font-semibold transition flex items-center justify-center space-x-2 select-none ${$} ${i?ni:`${Pe} cursor-pointer`}`,variants:V,"aria-busy":i,children:[i&&(0,s.jsx)(S.div,{className:"w-4 h-4 border-2 border-current border-t-transparent rounded-full",animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},"aria-hidden":"true"}),(0,s.jsx)("span",{children:i?"Sending...":"Send Message"})]})]})]})]})},Ao=()=>{const[e,t]=(0,l.useState)(!1),a=(0,l.useRef)(null),r=()=>{a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{t(window.scrollY>100)},150)},n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(0,l.useEffect)(()=>(window.addEventListener("scroll",r,{passive:!0}),()=>{window.removeEventListener("scroll",r),a.current&&clearTimeout(a.current)}),[]),(0,s.jsx)(qe,{children:e&&(0,s.jsx)(S.button,{onClick:n,className:"fixed bottom-8 right-6 sm:bottom-10 sm:right-8 md:bottom-12 md:right-10 lg:bottom-16 lg:right-10 text-[#0d0221] rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-600 focus-visible:ring-offset-2 dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-[#0d0221]",title:"Back to Top","aria-label":"Back to top",initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},transition:{type:"spring",stiffness:300,damping:20},style:{background:"var(--accent)"},whileHover:{scale:1.2},children:(0,s.jsx)(qn,{"aria-hidden":"true"})})})};function Mo(e){return N({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(e)}function Oo(e){return N({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"},child:[]}]})(e)}function $o(e){return N({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"},child:[]}]})(e)}var zo=()=>(0,s.jsxs)("footer",{className:`p-4 text-center ${fe}`,children:[(0,s.jsxs)("p",{className:"text-xs sm:text-base",children:["© ",W.name," ",new Date().getFullYear(),". All rights reserved."]}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("span",{className:"text-xs sm:text-sm",children:"Built with:"}),(0,s.jsxs)("div",{className:"flex justify-center items-center mt-2 space-x-2 sm:space-x-4 text-xs sm:text-sm",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,s.jsx)($n,{className:"text-blue-500"}),(0,s.jsx)("span",{children:"React"})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,s.jsx)(Oo,{className:"text-blue-400"}),(0,s.jsx)("span",{children:"Tailwind CSS"})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,s.jsx)($o,{className:"text-pink-500"}),(0,s.jsx)("span",{children:"Motion"})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,s.jsx)(Mo,{className:"text-blue-600"}),(0,s.jsx)("span",{children:"TypeScript"})]})]})]})]}),Bo=[{id:"home",Component:mi},{id:"about",Component:pi},{id:"experience",Component:Ii},{id:"education",Component:Pi},{id:"skills",Component:Ai},{id:"certificates",Component:Mi},{id:"projects",Component:Fi},{id:"languages",Component:Hi},{id:"contact",Component:Do}],Fo=()=>(0,s.jsxs)("div",{className:ii,children:[(0,s.jsx)("a",{href:"#home",className:"sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-black focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400",children:"Skip to content"}),(0,s.jsx)(si,{}),Bo.map(({id:e,Component:t})=>(0,s.jsx)("section",{id:e,"aria-labelledby":`${e}-heading`,className:"p-8",children:(0,s.jsx)(t,{})},e)),(0,s.jsx)(Ao,{}),(0,s.jsx)(zo,{})]}),Ho=class extends l.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("Error caught by Error Boundary:",e,t)}handleReset=()=>{this.setState({hasError:!1,error:null})};render(){return this.state.hasError?(0,s.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-linear-to-r from-red-500 to-red-700 p-4",role:"alert","aria-live":"assertive",children:(0,s.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold text-red-600 mb-4",children:"Oops! Something went wrong"}),(0,s.jsx)("p",{className:"text-gray-600 mb-4",children:"We're sorry for the inconvenience. Please try refreshing the page or contact support if the problem persists."}),this.state.error&&(0,s.jsxs)("details",{className:"text-left mb-6",children:[(0,s.jsx)("summary",{className:"cursor-pointer text-sm text-gray-500 hover:text-gray-700",children:"Error details"}),(0,s.jsx)("pre",{className:"mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto max-h-32",children:this.state.error.toString()})]}),(0,s.jsx)("button",{onClick:this.handleReset,className:"bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition",children:"Try Again"})]})}):this.props.children}},Vo=(0,l.lazy)(()=>ue(()=>import("./NotFound-CfmXOqGW.js"),__vite__mapDeps([3,2,1]))),Uo=(0,l.lazy)(()=>ue(()=>import("./Cv-Dxf6fq3E.js"),__vite__mapDeps([4,2,1]))),Jo=()=>(0,s.jsx)(Ho,{children:(0,s.jsx)(Pa,{reducedMotion:"user",children:(0,s.jsx)(Na,{features:Da,strict:!0,children:(0,s.jsx)(Oa,{children:(0,s.jsx)(vn,{children:(0,s.jsx)("div",{className:"App",children:(0,s.jsx)(l.Suspense,{fallback:null,children:(0,s.jsxs)(Br,{children:[(0,s.jsx)(be,{path:"/",element:(0,s.jsx)(Fo,{})}),(0,s.jsx)(be,{path:"/cv",element:(0,s.jsx)(Uo,{})}),(0,s.jsx)(be,{path:"*",element:(0,s.jsx)(Vo,{})})]})})})})})})})}),Ca=document.getElementById("root");if(!Ca)throw new Error("index.html is missing the #root element");(0,Ma.createRoot)(Ca).render((0,s.jsx)(l.StrictMode,{children:(0,s.jsx)(Jo,{})}));export{es as _,Ci as a,hi as c,$ as d,ii as f,Qn as g,W as h,ki as i,mt as l,Rt as m,Si as n,Lt as o,Pe as p,Ei as r,Dt as s,ji as t,G as u,Jn as v,Ee as y};
