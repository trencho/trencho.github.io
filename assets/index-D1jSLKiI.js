const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/esm-CMT0MzpN.js","assets/rolldown-runtime-Dik6OG8R.js","assets/motion-DQkw2Kxj.js","assets/NotFound-ByZ9d9uu.js","assets/Cv-DK6z7fvv.js"])))=>i.map(i=>d[i]);
import{n as Ea}from"./rolldown-runtime-Dik6OG8R.js";import{t as Sa}from"./react-Bsu4GsTy.js";import{a as Ta,i as Je,n as ja,o as Ca,r as Na,t as _}from"./motion-DQkw2Kxj.js";var Ra=Sa(),l=Ea(Ca(),1),Mt=(0,l.createContext)(void 0),i=Ta(),La=({children:e})=>{const[t,a]=(0,l.useState)(()=>{if(typeof window>"u")return!1;try{const s=localStorage.getItem("darkMode");if(s!==null)return JSON.parse(s)===!0}catch(s){console.error("Error parsing saved theme:",s)}return window.matchMedia("(prefers-color-scheme: dark)").matches});(0,l.useEffect)(()=>{typeof document>"u"||document.documentElement.classList.toggle("dark",t)},[t]);const r=(0,l.useCallback)(()=>{a(s=>(localStorage.setItem("darkMode",JSON.stringify(!s)),!s))},[]),n=(0,l.useMemo)(()=>({darkMode:t,toggleDarkMode:r}),[t,r]);return(0,i.jsx)(Mt.Provider,{value:n,children:e})},rt=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,At=/^[\\/]{2}/;function Pa(e,t){return t+e.replace(/\\/g,"/")}var ft="popstate";function ht(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function Ia(e={}){function t(r,n){let s=n.state?.masked,{pathname:o,search:c,hash:d}=s||r.location;return We("",{pathname:o,search:c,hash:d},n.state&&n.state.usr||null,n.state&&n.state.key||"default",s?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function a(r,n){return typeof n=="string"?n:Z(n)}return Aa(t,a,null,e)}function N(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function V(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ma(){return Math.random().toString(36).substring(2,10)}function pt(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function We(e,t,a=null,r,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?ee(t):t,state:a,key:t&&t.key||r||Ma(),mask:n}}function Z({pathname:e="/",search:t="",hash:a=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function ee(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substring(a),e=e.substring(0,a));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Aa(e,t,a,r={}){let{window:n=document.defaultView,v5Compat:s=!1}=r,o=n.history,c="POP",d=null,u=f();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function f(){return(o.state||{idx:null}).idx}function m(){c="POP";let g=f(),w=g==null?null:g-u;u=g,d&&d({action:c,location:b.location,delta:w})}function p(g,w){c="PUSH";let v=ht(g)?g:We(b.location,g,w);a&&a(v,g),u=f()+1;let h=pt(v,u),k=b.createHref(v.mask||v);try{o.pushState(h,"",k)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;n.location.assign(k)}s&&d&&d({action:c,location:b.location,delta:1})}function y(g,w){c="REPLACE";let v=ht(g)?g:We(b.location,g,w);a&&a(v,g),u=f();let h=pt(v,u),k=b.createHref(v.mask||v);o.replaceState(h,"",k),s&&d&&d({action:c,location:b.location,delta:0})}function x(g){return Da(n,g)}let b={get action(){return c},get location(){return e(n,o)},listen(g){if(d)throw new Error("A history only accepts one active listener");return n.addEventListener(ft,m),d=g,()=>{n.removeEventListener(ft,m),d=null}},createHref(g){return t(n,g)},createURL:x,encodeLocation(g){let w=x(g);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:p,replace:y,go(g){return o.go(g)}};return b}function Da(e,t,a=!1){let r="http://localhost";e&&(r=e.location.origin!=="null"?e.location.origin:e.location.href),N(r,"No window.location.(origin|href) available to create URL");let n=typeof t=="string"?t:Z(t);return n=n.replace(/ $/,"%20"),!a&&At.test(n)&&(n=r+n),new URL(n,r)}function Oa(e,t,a="/"){return $a(e,t,a,!1)}function $a(e,t,a,r,n){let s=U((typeof t=="string"?ee(t):t).pathname||"/",a);if(s==null)return null;let o=n??Ba(e),c=null,d=Za(s);for(let u=0;c==null&&u<o.length;++u)c=Xa(o[u],d,r);return c}function za(e,t){let{route:a,pathname:r,params:n}=e;return{id:a.id,pathname:r,params:n,loaderData:t[a.id],handle:a.handle}}function Ba(e){let t=Dt(e);return Fa(t),t}function Dt(e,t=[],a=[],r="",n=!1){let s=(o,c,d=n,u)=>{let f={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:c,route:o};if(f.relativePath.startsWith("/")){if(!f.relativePath.startsWith(r)&&d)return;N(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length)}let m=z([r,f.relativePath]),p=a.concat(f);o.children&&o.children.length>0&&(N(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Dt(o.children,t,p,m,d)),!(o.path==null&&!o.index)&&t.push({path:m,score:Ya(m,o.index),routesMeta:p.map((y,x)=>{let[b,g]=zt(y.relativePath,y.caseSensitive,x===p.length-1);return{...y,matcher:b,compiledParams:g}})})};return e.forEach((o,c)=>{if(o.path===""||!o.path?.includes("?"))s(o,c);else for(let d of Ot(o.path))s(o,c,!0,d)}),t}function Ot(e){let t=e.split("/");if(t.length===0)return[];let[a,...r]=t,n=a.endsWith("?"),s=a.replace(/\?$/,"");if(r.length===0)return n?[s,""]:[s];let o=Ot(r.join("/")),c=[];return c.push(...o.map(d=>d===""?s:[s,d].join("/"))),n&&c.push(...o),c.map(d=>e.startsWith("/")&&d===""?"/":d)}function Fa(e){e.sort((t,a)=>t.score!==a.score?a.score-t.score:Qa(t.routesMeta.map(r=>r.childrenIndex),a.routesMeta.map(r=>r.childrenIndex)))}var Ha=/^:[\w-]+$/,Va=/^:[\w-]+/,Ua=3.5,Ga=3,Ja=2,Wa=1,qa=10,Ka=-2,gt=e=>e==="*";function Ya(e,t){let a=e.split("/"),r=a.length;return a.some(gt)&&(r+=Ka),t&&(r+=Ja),a.filter(n=>!gt(n)).reduce((n,s)=>n+(Ha.test(s)?Ga:Va.test(s)?Ua:s===""?Wa:qa),r)}function Qa(e,t){return e.length===t.length&&e.slice(0,-1).every((a,r)=>a===t[r])?e[e.length-1]-t[t.length-1]:0}function Xa(e,t,a=!1){let{routesMeta:r}=e,n={},s="/",o=[];for(let c=0;c<r.length;++c){let d=r[c],u=c===r.length-1,f=s==="/"?t:t.slice(s.length)||"/",m={path:d.relativePath,caseSensitive:d.caseSensitive,end:u},p=d.matcher&&d.compiledParams?$t(m,f,d.matcher,d.compiledParams):be(m,f),y=d.route;if(!p&&u&&a&&!r[r.length-1].route.index&&(p=be({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},f)),!p)return null;Object.assign(n,p.params),o.push({params:n,pathname:z([s,p.pathname]),pathnameBase:ar(z([s,p.pathnameBase])),route:y}),p.pathnameBase!=="/"&&(s=z([s,p.pathnameBase]))}return o}function be(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,r]=zt(e.path,e.caseSensitive,e.end);return $t(e,t,a,r)}function $t(e,t,a,r){let n=t.match(a);if(!n)return null;let s=n[0],o=we(s,1),c=n.slice(1);return{params:r.reduce((d,{paramName:u,isOptional:f},m)=>{if(u==="*"){let y=c[m]||"";o=we(s.slice(0,s.length-y.length),1)}const p=c[m];return f&&!p?d[u]=void 0:d[u]=(p||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:o,pattern:e}}function zt(e,t=!1,a=!0){V(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,c,d,u)=>{if(r.push({paramName:o,isOptional:c!=null}),c){let f=u.charAt(d+s.length);return f&&f!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(?=\/|$|\()/g,"(?:/$1)?");return e.endsWith("*")?(r.push({paramName:"*"}),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,t?void 0:"i"),r]}function Za(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return V(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function U(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,r=e.charAt(a);return r&&r!=="/"?null:e.slice(a)||"/"}function er(e,t="/"){let{pathname:a,search:r="",hash:n=""}=typeof e=="string"?ee(e):e,s;return a?(a=Ft(a),a.startsWith("/")||a.startsWith("\\")?s=yt(a.substring(1),"/"):s=yt(a,t)):s=t,{pathname:s,search:rr(r),hash:nr(n)}}function yt(e,t){let a=we(t).split("/");return e.split("/").forEach(r=>{r===".."?a.length>1&&a.pop():r!=="."&&a.push(r)}),a.length>1?a.join("/"):"/"}function ze(e,t,a,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function tr(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}function Bt(e){let t=tr(e);return t.map((a,r)=>r===t.length-1?a.pathname:a.pathnameBase)}function nt(e,t,a,r=!1){let n;typeof e=="string"?n=ee(e):(n={...e},N(!n.pathname||!n.pathname.includes("?"),ze("?","pathname","search",n)),N(!n.pathname||!n.pathname.includes("#"),ze("#","pathname","hash",n)),N(!n.search||!n.search.includes("#"),ze("#","search","hash",n)));let s=e===""||n.pathname==="",o=s?"/":n.pathname,c;if(o==null)c=a;else{let m=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),m-=1;n.pathname=p.join("/")}c=m>=0?t[m]:"/"}let d=er(n,c),u=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&a.endsWith("/");return!d.pathname.endsWith("/")&&(u||f)&&(d.pathname+="/"),d}var Ft=e=>e.replace(/[\\/]{2,}/g,"/"),z=e=>Ft(e.join("/"));function we(e,t=0){let a=e.length;for(;a>t&&e.charCodeAt(a-1)===47;)a--;return a===e.length?e:e.slice(0,a)}var ar=e=>we(e).replace(/^\/*/,"/"),rr=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,nr=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,sr=class{status;statusText;data;error;internal;constructor(e,t,a,r=!1){this.status=e,this.statusText=t||"",this.internal=r,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function ir(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function or(e){return z(e.map(t=>t.route.path).filter(Boolean))||"/"}var Ht=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Vt(e,t){let a=e;if(typeof a!="string"||!rt.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let r=a,n=!1;if(Ht)try{let s=new URL(window.location.href),o=At.test(a)?new URL(Pa(a,s.protocol)):new URL(a),c=U(o.pathname,t);o.origin===s.origin&&c!=null?a=c+o.search+o.hash:n=!0}catch{V(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:n,to:a}}var vt=new URL("http://localhost");function Ut(e){if(e.createURL)return e.createURL("/");try{return new URL(e.createHref("/"),vt)}catch{return vt}}function Be(e,t){return e.origin===t.origin&&(e.origin!=="null"||e.protocol===t.protocol&&e.host===t.host)}function lr(e,t){if(e.startsWith("//"))return!0;let a=t.protocol.toLowerCase();return e.toLowerCase().startsWith(a)?t.host===""||e.slice(a.length).startsWith("//"):!1}function Gt(e,t,a,r){let n=null;try{n=e==null?null:new URL(e,a)}catch{}let s=new URL(t,a),o=n!=null&&!Be(n,a),c=!Be(s,a);if(r==="reject"){if(o||c)throw new Error("External navigation is not allowed")}else if(c&&(n==null||!lr(e,n)||!Be(n,s)))throw new Error("External navigation is not allowed")}var Jt=["POST","PUT","PATCH","DELETE"],Li=new Set(Jt),cr=["GET",...Jt],Pi=new Set(cr),dr=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function ur(e){try{return dr.includes(new URL(e).protocol)}catch{return!1}}var re=l.createContext(null);re.displayName="DataRouter";var Wt=l.createContext(null);Wt.displayName="DataRouterState";var qt=l.createContext(null);qt.displayName="DataRouterData";var st=l.createContext(null);st.displayName="DataRouterNavigation";var Kt=l.createContext(!1);function mr(){return l.useContext(Kt)}var Yt=l.createContext({isTransitioning:!1});Yt.displayName="ViewTransition";var fr=l.createContext(null);fr.displayName="Fetchers";var qe=l.createContext(null);qe.displayName="Await";var D=l.createContext(null);D.displayName="Navigation";var ne=l.createContext(null);ne.displayName="Location";var Q=l.createContext({outlet:null,matches:[],isDataRoute:!1});Q.displayName="Route";var Se=l.createContext(!1);Se.displayName="IsDataRoute";var Te=l.createContext(void 0);Te.displayName="RouteId";var it=l.createContext(null);it.displayName="RouteError";var Qt="REACT_ROUTER_ERROR",hr="REDIRECT",pr="ROUTE_ERROR_RESPONSE";function gr(e){if(e.startsWith(`${Qt}:${hr}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function yr(e){if(e.startsWith(`${Qt}:${pr}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new sr(t.status,t.statusText,t.data)}catch{}}function vr(e,{relative:t}={}){N(se(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:r}=l.useContext(D),{hash:n,pathname:s,search:o}=ie(e,{relative:t}),c=s;return a!=="/"&&(c=s==="/"?a:z([a,s])),r.createHref({pathname:c,search:o,hash:n})}function se(){return l.useContext(ne)!=null}function B(){return N(se(),"useLocation() may be used only in the context of a <Router> component."),l.useContext(ne).location}var Xt="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function xr(){return l.useContext(Se)?Lr():br()}function br(){N(se(),"useNavigate() may be used only in the context of a <Router> component.");let e=l.useContext(re),{basename:t,navigator:a}=l.useContext(D),{matches:r}=l.useContext(Q),{pathname:n}=B(),s=JSON.stringify(Bt(r)),o=l.useRef(!1);return l.useLayoutEffect(()=>{o.current=!0}),l.useCallback((c,d={})=>{if(V(o.current,Xt),!o.current)return;if(typeof c=="number"){a.go(c);return}let u=nt(c,JSON.parse(s),n,d.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:z([t,u.pathname])),Gt(typeof c=="string"?c:Z(c),a.createHref(u),Ut(a),"reject"),(d.replace?a.replace:a.push)(u,d.state,d)},[t,a,s,n,e])}var Ii=l.createContext(null);function ie(e,{relative:t}={}){let{matches:a}=l.useContext(Q),{pathname:r}=B(),n=JSON.stringify(Bt(a));return l.useMemo(()=>nt(e,JSON.parse(n),r,t==="path"),[e,n,r,t])}function wr(e,t){return Zt(e,t)}function Zt(e,t,a){N(se(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=l.useContext(D),{matches:n}=l.useContext(Q),s=n[n.length-1],o=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let d=B(),u;if(t){let x=typeof t=="string"?ee(t):t;N(c==="/"||x.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${x.pathname}" was given in the \`location\` prop.`),u=x}else u=d;let f=u.pathname||"/",m=f;if(c!=="/"){let x=c.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(x.length).join("/")}let p;a?a.state.matches.length?p=a.state.matches.map(x=>Object.assign(x,{route:a.manifest[x.route.id]||x.route})):p=a.router.match(a.state.location):p=Oa(e,{pathname:m});let y=jr(p&&p.map(x=>Object.assign({},x,{params:Object.assign({},o,x.params),pathname:z([c,r.encodeLocation?r.encodeLocation(x.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?c:z([c,r.encodeLocation?r.encodeLocation(x.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathnameBase])})),n,a);return t&&y?l.createElement(ne.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...u},navigationType:"POP"}},y):y}function kr(){let e=Rr(),t=ir(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null;return l.createElement(l.Fragment,null,l.createElement("h2",null,"Unexpected Application Error!"),l.createElement("h3",{style:{fontStyle:"italic"}},t),a?l.createElement("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},a):null,null)}var _r=l.createElement(kr,null),Er=class extends l.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static contextType=Kt;static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const a=yr(e.digest);a&&(e=a)}let t=e!==void 0?l.createElement(Q.Provider,{value:this.props.routeContext},l.createElement(Se.Provider,{value:this.props.routeContext.isDataRoute},l.createElement(Te.Provider,{value:this.props.routeContext.matches[this.props.routeContext.matches.length-1]?.route.id},l.createElement(it.Provider,{value:e,children:this.props.component})))):this.props.children;return this.context?l.createElement(Sr,{error:e},t):t}},Fe=new WeakMap;function Sr({children:e,error:t}){let{basename:a,navigator:r}=l.useContext(D);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let n=gr(t.digest);if(n){let s=Fe.get(t);if(s)throw s;let o=Vt(n.location,a),c=o.absoluteURL||o.to;if(Gt(n.location,c,Ut(r),"allow-explicit"),ur(c))throw new Error("Invalid redirect location");if(Ht&&!Fe.get(t))if(o.isExternal||n.reloadDocument)window.location.href=c;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:n.replace}));throw Fe.set(t,d),d}return l.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c}`})}}return e}function Tr({routeContext:e,match:t,children:a}){let r=l.useContext(re);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),l.createElement(Q.Provider,{value:e},l.createElement(Se.Provider,{value:e.isDataRoute},l.createElement(Te.Provider,{value:t.route.id},a)))}function jr(e,t=[],a){let r=a?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let n=e,s=r?.errors;if(s!=null){let f=n.findIndex(m=>m.route.id&&s?.[m.route.id]!==void 0);N(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),n=n.slice(0,Math.min(n.length,f+1))}let o=!1,c=-1;if(a&&r){o=r.renderFallback;for(let f=0;f<n.length;f++){let m=n[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=f),m.route.id){let{loaderData:p,errors:y}=r,x=m.route.loader&&!p.hasOwnProperty(m.route.id)&&(!y||y[m.route.id]===void 0);if(m.route.lazy||x){a.isStatic&&(o=!0),c>=0?n=n.slice(0,c+1):n=[n[0]];break}}}}let d=a?.onError,u=r&&d?(f,m)=>{d(f,{location:r.location,params:r.matches?.[0]?.params??{},pattern:or(r.matches),errorInfo:m})}:void 0;return n.reduceRight((f,m,p)=>{let y,x=!1,b=null,g=null;r&&(y=s&&m.route.id?s[m.route.id]:void 0,b=m.route.errorElement||_r,o&&(c<0&&p===0?(Pr("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,g=null):c===p&&(x=!0,g=m.route.hydrateFallbackElement||null)));let w=t.concat(n.slice(0,p+1)),v=()=>{let h;return y?h=b:x?h=g:m.route.Component?h=l.createElement(m.route.Component,null):m.route.element?h=m.route.element:h=f,l.createElement(Tr,{match:m,routeContext:{outlet:f,matches:w,isDataRoute:r!=null},children:h})};return r&&(m.route.ErrorBoundary||m.route.errorElement||p===0)?l.createElement(Er,{location:r.location,revalidation:r.revalidation,component:b,error:y,children:v(),routeContext:{outlet:null,matches:w,isDataRoute:!0},onError:u}):v()},null)}function je(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function oe(e){let t=l.useContext(re);return N(t,je(e)),t}function ot(e){let t=l.useContext(Wt);return N(t,je(e)),t}function lt(e){let t=l.useContext(qt);return N(t,je(e)),t}function Cr(e){let t=l.useContext(st);return N(t,je(e)),t}function ct(e){let t=l.useContext(Te);return N(t,`${e} can only be used on routes that contain a unique "id"`),t}function Nr(){let{navigation:e}=Cr("useNavigation");return l.useMemo(()=>{let{matches:t,historyAction:a,...r}=e;return r},[e])}function ea(){let{matches:e}=ot("useMatches"),{loaderData:t}=lt("useMatches");return l.useMemo(()=>e.map(a=>za(a,t)),[e,t])}function Rr(){let e=l.useContext(it),t=lt("useRouteError"),a=ct("useRouteError");return e!==void 0?e:t.errors?.[a]}function Lr(){let{router:e}=oe("useNavigate"),t=ct("useNavigate"),a=l.useRef(!1);return l.useLayoutEffect(()=>{a.current=!0}),l.useCallback(async(r,n={})=>{V(a.current,Xt),a.current&&(typeof r=="number"?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...n}))},[e,t])}var xt={};function Pr(e,t,a){!t&&!xt[e]&&(xt[e]=!0,V(!1,a))}var Mi=l.memo(Ir);function Ir({routes:e,manifest:t,state:a,isStatic:r,onError:n}){let s=l.useContext(re);return N(s,"You must render this element inside a <DataRouterContext.Provider> element"),Zt(e,void 0,{router:s.router,manifest:t,state:a,isStatic:r,onError:n})}function ve(e){N(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ta({basename:e="/",children:t=null,location:a,navigationType:r="POP",navigator:n,static:s=!1,useTransitions:o}){N(!se(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=e.replace(/^\/*/,"/"),d=l.useMemo(()=>({basename:c,navigator:n,static:s,useTransitions:o,future:{}}),[c,n,s,o]);typeof a=="string"&&(a=ee(a));let{pathname:u="/",search:f="",hash:m="",state:p=null,key:y="default",mask:x}=a,b=l.useMemo(()=>{let g=U(u,c);return g==null?null:{location:{pathname:g,search:f,hash:m,state:p,key:y,mask:x},navigationType:r}},[c,u,f,m,p,y,r,x]);return V(b!=null,`<Router basename="${c}"> is not able to match the URL "${u}${f}${m}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:l.createElement(D.Provider,{value:d},l.createElement(ne.Provider,{children:t,value:b}))}function Mr({children:e,location:t}){return wr(Ke(e),t)}var Ai=class extends l.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:a}=this.props,r=null,n=0;if(!(a instanceof Promise))n=1,r=Promise.resolve(),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_data",{get:()=>a});else if(this.state.error){n=2;let s=this.state.error;r=Promise.reject().catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_error",{get:()=>s})}else a._tracked?(r=a,n="_error"in r?2:"_data"in r?1:0):(n=0,Object.defineProperty(a,"_tracked",{get:()=>!0}),r=a.then(s=>Object.defineProperty(a,"_data",{get:()=>s}),s=>{this.props.onError?.(s),Object.defineProperty(a,"_error",{get:()=>s})}));if(n===2&&!t)throw r._error;if(n===2)return l.createElement(qe.Provider,{value:r,children:t});if(n===1)return l.createElement(qe.Provider,{value:r,children:e});throw r}};function Ke(e,t=[]){let a=[];return l.Children.forEach(e,(r,n)=>{if(!l.isValidElement(r))return;let s=[...t,n];if(r.type===l.Fragment){a.push.apply(a,Ke(r.props.children,s));return}N(r.type===ve,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`);let o=r.props;N(!o.index||!o.children,"An index route cannot have child routes.");let c={id:o.id||s.join("-"),caseSensitive:o.caseSensitive,element:o.element,Component:o.Component,index:o.index,path:o.path,middleware:o.middleware,loader:o.loader,action:o.action,hydrateFallbackElement:o.hydrateFallbackElement,HydrateFallback:o.HydrateFallback,errorElement:o.errorElement,ErrorBoundary:o.ErrorBoundary,shouldRevalidate:o.shouldRevalidate,handle:o.handle,lazy:o.lazy};o.children&&(c.children=Ke(o.children,s)),a.push(c)}),a}var xe="application/x-www-form-urlencoded";function Ce(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function Ar(e){return Ce(e)&&e.tagName.toLowerCase()==="button"}function Dr(e){return Ce(e)&&e.tagName.toLowerCase()==="form"}function Or(e){return Ce(e)&&e.tagName.toLowerCase()==="input"}function $r(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function zr(e,t){return e.button===0&&(!t||t==="_self")&&!$r(e)}var pe=null;function Br(){if(pe===null)try{new FormData(document.createElement("form"),0),pe=!1}catch{pe=!0}return pe}var Fr=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function He(e){return e!=null&&!Fr.has(e)?(V(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xe}"`),null):e}function Hr(e,t){let a,r,n,s,o;if(Dr(e)){let c=e.getAttribute("action");r=c?U(c,t):null,a=e.getAttribute("method")||"get",n=He(e.getAttribute("enctype"))||xe,s=new FormData(e)}else if(Ar(e)||Or(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=e.getAttribute("formaction")||c.getAttribute("action");if(r=d?U(d,t):null,a=e.getAttribute("formmethod")||c.getAttribute("method")||"get",n=He(e.getAttribute("formenctype"))||He(c.getAttribute("enctype"))||xe,s=new FormData(c,e),!Br()){let{name:u,type:f,value:m}=e;if(f==="image"){let p=u?`${u}.`:"";s.append(`${p}x`,"0"),s.append(`${p}y`,"0")}else u&&s.append(u,m)}}else{if(Ce(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a="get",r=null,n=xe,o=e}return s&&n==="text/plain"&&(o=s,s=void 0),{action:r,method:a.toLowerCase(),encType:n,formData:s,body:o}}function Vr(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}var Ur={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},Gr=/[&><\u2028\u2029]/g;function bt(e){return e.replace(Gr,t=>Ur[t])}function aa(e,t){let a=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${t}`:a.pathname=`${a.pathname}.${t}`,a}var Jr=(function(){const t=typeof document<"u"&&document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"})(),Wr=function(e){return"/"+e},wt={},Ne=function(t,a,r){let n=Promise.resolve();if(a&&a.length>0){let u=function(m){return Promise.all(m.map(p=>Promise.resolve(p).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))},f=function(m){return import.meta.resolve?import.meta.resolve(m):new URL(m,import.meta.url).href};const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),d=c?.nonce||c?.getAttribute("nonce");n=u(a.map(m=>{if(m=Wr(m,r),m=f(m),m in wt)return;wt[m]=!0;const p=m.endsWith(".css");for(let x=o.length-1;x>=0;x--){const b=o[x];if(b.href===m&&(!p||b.rel==="stylesheet"))return}const y=document.createElement("link");if(y.rel=p?"stylesheet":Jr,p||(y.as="script"),y.crossOrigin="",y.href=m,d&&y.setAttribute("nonce",d),document.head.appendChild(y),p)return new Promise((x,b)=>{y.addEventListener("load",x),y.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${m}`)))})}).filter(m=>m!==void 0))}function s(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return n.then(o=>{for(const c of o||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})};async function qr(e,t){if(e.id in t)return t[e.id];try{let a=await Ne(()=>import(e.module),[]);return t[e.id]=a,a}catch(a){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Kr(e){return e!=null&&typeof e.page=="string"}function Yr(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Qr(e,t,a){return tn((await Promise.all(e.map(async r=>{let n=t.routes[r.route.id];if(n){let s=await qr(n,a);return s.links?s.links():[]}return[]}))).flat(1).filter(Yr).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function kt(e,t,a,r,n,s){let o=(d,u)=>a[u]?d.route.id!==a[u].route.id:!0,c=(d,u)=>a[u].pathname!==d.pathname||a[u].route.path?.endsWith("*")&&a[u].params["*"]!==d.params["*"];return s==="assets"?t.filter((d,u)=>o(d,u)||c(d,u)):s==="data"?t.filter((d,u)=>{let f=r.routes[d.route.id];if(!f||!f.hasLoader)return!1;if(o(d,u)||c(d,u))return!0;if(d.route.shouldRevalidate){let m=d.route.shouldRevalidate({currentUrl:new URL(n.pathname+n.search+n.hash,window.origin),currentParams:a[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function Xr(e,t,{includeHydrateFallback:a}={}){return Zr(e.map(r=>{let n=t.routes[r.route.id];if(!n)return[];let s=[n.module];return n.clientActionModule&&(s=s.concat(n.clientActionModule)),n.clientLoaderModule&&(s=s.concat(n.clientLoaderModule)),a&&n.hydrateFallbackModule&&(s=s.concat(n.hydrateFallbackModule)),n.imports&&(s=s.concat(n.imports)),s}).flat(1))}function Zr(e){return[...new Set(e)]}function en(e){let t={},a=Object.keys(e).sort();for(let r of a)t[r]=e[r];return t}function tn(e,t){let a=new Set,r=new Set(t);return e.reduce((n,s)=>{if(t&&!Kr(s)&&s.as==="script"&&s.href&&r.has(s.href))return n;let o=JSON.stringify(en(s));return a.has(o)||(a.add(o),n.push({key:o,link:s})),n},[])}var Re=l.createContext(void 0);Re.displayName="FrameworkContext";function dt(){let e=l.useContext(Re);return Vr(e,"You must render this element inside a <HydratedRouter> element"),e}function an(e,t){let a=l.useContext(Re),[r,n]=l.useState(!1),[s,o]=l.useState(!1),{onFocus:c,onBlur:d,onMouseEnter:u,onMouseLeave:f,onTouchStart:m}=t,p=l.useRef(null);l.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let b=w=>{w.forEach(v=>{o(v.isIntersecting)})},g=new IntersectionObserver(b,{threshold:.5});return p.current&&g.observe(p.current),()=>{g.disconnect()}}},[e]),l.useEffect(()=>{if(r){let b=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(b)}}},[r]);let y=()=>{n(!0)},x=()=>{n(!1),o(!1)};return a?e!=="intent"?[s,p,{}]:[s,p,{onFocus:te(c,y),onBlur:te(d,x),onMouseEnter:te(u,y),onMouseLeave:te(f,x),onTouchStart:te(m,y)}]:[!1,p,{}]}function te(e,t){return a=>{e&&e(a),a.defaultPrevented||t(a)}}function rn({page:e,...t}){let a=mr(),{nonce:r}=dt(),{router:n}=oe("PrefetchPageLinks"),s=l.useMemo(()=>n.match(e),[n,n.routes,e]);return s?(t.nonce==null&&r&&(t={...t,nonce:r}),a?l.createElement(sn,{page:e,matches:s,...t}):l.createElement(on,{page:e,matches:s,...t})):null}function nn(e){let{manifest:t,routeModules:a}=dt(),[r,n]=l.useState([]);return l.useEffect(()=>{let s=!1;return Qr(e,t,a).then(o=>{s||n(o)}),()=>{s=!0}},[e,t,a]),r}function sn({page:e,matches:t,...a}){let r=B(),n=l.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let s=aa(e,"rsc"),o=!1,c=[];for(let d of t)typeof d.route.shouldRevalidate=="function"?o=!0:c.push(d.route.id);return o&&c.length>0&&s.searchParams.set("_routes",c.join(",")),[s.pathname+s.search]},[e,r,t]);return l.createElement(l.Fragment,null,n.map(s=>l.createElement("link",{key:s,rel:"prefetch",as:"fetch",href:s,...a})))}function on({page:e,matches:t,...a}){let r=B(),{manifest:n,routeModules:s}=dt(),{matches:o}=ot("PrefetchPageLinks"),{loaderData:c}=lt("PrefetchPageLinks"),d=l.useMemo(()=>kt(e,t,o,n,r,"data"),[e,t,o,n,r]),u=l.useMemo(()=>kt(e,t,o,n,r,"assets"),[e,t,o,n,r]),f=l.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let y=new Set,x=!1;if(t.forEach(g=>{let w=n.routes[g.route.id];!w||!w.hasLoader||(!d.some(v=>v.route.id===g.route.id)&&g.route.id in c&&s[g.route.id]?.shouldRevalidate||w.hasClientLoader?x=!0:y.add(g.route.id))}),y.size===0)return[];let b=aa(e,"data");return x&&y.size>0&&b.searchParams.set("_routes",t.filter(g=>y.has(g.route.id)).map(g=>g.route.id).join(",")),[b.pathname+b.search]},[c,r,n,d,t,e,s]),m=l.useMemo(()=>Xr(u,n),[u,n]),p=nn(u);return l.createElement(l.Fragment,null,f.map(y=>l.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...a})),m.map(y=>l.createElement("link",{key:y,rel:"modulepreload",href:y,...a})),p.map(({key:y,link:x})=>l.createElement("link",{key:y,nonce:a.nonce,...x,crossOrigin:x.crossOrigin??a.crossOrigin})))}function ln(...e){return t=>{e.forEach(a=>{typeof a=="function"?a(t):a!=null&&(a.current=t)})}}var cn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{cn&&(window.__reactRouterVersion="8")}catch{}function dn({basename:e,children:t,useTransitions:a,window:r}){let n=l.useRef(null);n.current==null&&(n.current=Ia({window:r,v5Compat:!0}));let s=n.current,[o,c]=l.useState({action:s.action,location:s.location}),d=l.useCallback(u=>{a===!1?c(u):l.startTransition(()=>c(u))},[a]);return l.useLayoutEffect(()=>s.listen(d),[s,d]),l.createElement(ta,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:s,useTransitions:a})}function un({basename:e,children:t,history:a,useTransitions:r}){let[n,s]=l.useState({action:a.action,location:a.location}),o=l.useCallback(c=>{r===!1?s(c):l.startTransition(()=>s(c))},[r]);return l.useLayoutEffect(()=>a.listen(o),[a,o]),l.createElement(ta,{basename:e,children:t,location:n.location,navigationType:n.action,navigator:a,useTransitions:r})}un.displayName="unstable_HistoryRouter";var ke=l.forwardRef(function({onClick:t,discover:a="render",prefetch:r="none",relative:n,reloadDocument:s,replace:o,mask:c,state:d,target:u,to:f,preventScrollReset:m,viewTransition:p,defaultShouldRevalidate:y,...x},b){let{basename:g,navigator:w,useTransitions:v}=l.useContext(D),h=typeof f=="string"&&rt.test(f),k=Vt(f,g);f=k.to;let S=vr(f,{relative:n}),C=B(),E=null;if(c){let $=nt(c,[],C.mask?C.mask.pathname:"/",!0);g!=="/"&&($.pathname=$.pathname==="/"?g:z([g,$.pathname])),E=w.createHref($)}let[T,R,M]=an(r,x),O=pn(f,{replace:o,mask:c,state:d,target:u,preventScrollReset:m,relative:n,viewTransition:p,defaultShouldRevalidate:y,useTransitions:v});function X($){t&&t($),$.defaultPrevented||O($)}let F=!(k.isExternal||s),fe=l.createElement("a",{...x,...M,href:(F?E:void 0)||k.absoluteURL||S,onClick:F?X:t,ref:ln(b,R),target:u,"data-discover":!h&&a==="render"?"true":void 0});return T&&!h?l.createElement(l.Fragment,null,fe,l.createElement(rn,{page:S})):fe});ke.displayName="Link";var mn=l.forwardRef(function({"aria-current":t="page",caseSensitive:a=!1,className:r="",end:n=!1,style:s,to:o,viewTransition:c,children:d,...u},f){let m=ie(o,{relative:u.relative}),p=B(),y=l.useContext(st),{navigator:x,basename:b}=l.useContext(D),g=y!=null&&_n(m)&&c===!0,w=x.encodeLocation?x.encodeLocation(m).pathname:m.pathname,v=p.pathname,h=y?.navigation.location?y.navigation.location.pathname:null;a||(v=v.toLowerCase(),h=h?h.toLowerCase():null,w=w.toLowerCase()),h&&b&&(h=U(h,b)||h);const k=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let S=v===w||!n&&v.startsWith(w)&&v.charAt(k)==="/",C=h!=null&&(h===w||!n&&h.startsWith(w)&&h.charAt(k)==="/"),E={isActive:S,isPending:C,isTransitioning:g},T=S?t:void 0,R;typeof r=="function"?R=r(E):R=[r,S?"active":null,C?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let M=typeof s=="function"?s(E):s;return l.createElement(ke,{...u,"aria-current":T,className:R,ref:f,style:M,to:o,viewTransition:c},typeof d=="function"?d(E):d)});mn.displayName="NavLink";var fn=l.forwardRef(({discover:e="render",fetcherKey:t,navigate:a,reloadDocument:r,replace:n,state:s,method:o="get",action:c,onSubmit:d,relative:u,preventScrollReset:f,viewTransition:m,defaultShouldRevalidate:p,...y},x)=>{let{useTransitions:b}=l.useContext(D),g=vn(),w=xn(c,{relative:u}),v=o.toLowerCase()==="get"?"get":"post",h=typeof c=="string"&&rt.test(c),k=S=>{if(d&&d(S),S.defaultPrevented)return;S.preventDefault();let C=S.nativeEvent.submitter,E=C?.getAttribute("formmethod")||o,T=()=>g(C||S.currentTarget,{fetcherKey:t,method:E,navigate:a,replace:n,state:s,relative:u,preventScrollReset:f,viewTransition:m,defaultShouldRevalidate:p});b&&a!==!1?l.startTransition(()=>T()):T()};return l.createElement("form",{ref:x,method:v,action:w,onSubmit:r?d:k,...y,"data-discover":!h&&e==="render"?"true":void 0})});fn.displayName="Form";function hn({getKey:e,storageKey:t,...a}){let r=l.useContext(Re),{basename:n}=l.useContext(D),s=B(),o=ea();bn({getKey:e,storageKey:t});let c=l.useMemo(()=>{if(!r||!e)return null;let u=Qe(s,o,n,e);return u!==s.key?u:null},[]);if(!r||r.isSpaMode)return null;let d=((u,f)=>{if(!window.history.state||!window.history.state.key){let m=Math.random().toString(32).slice(2);window.history.replaceState({key:m},"")}try{let m=JSON.parse(sessionStorage.getItem(u)||"{}")[f||window.history.state.key];typeof m=="number"&&window.scrollTo(0,m)}catch(m){console.error(m),sessionStorage.removeItem(u)}}).toString();return a.nonce==null&&r?.nonce&&(a.nonce=r.nonce),l.createElement("script",{...a,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${d})(${bt(JSON.stringify(t||Ye))}, ${bt(JSON.stringify(c))})`}})}hn.displayName="ScrollRestoration";function pn(e,{target:t,replace:a,mask:r,state:n,preventScrollReset:s,relative:o,viewTransition:c,defaultShouldRevalidate:d,useTransitions:u}={}){let f=xr(),m=B(),p=ie(e,{relative:o});return l.useCallback(y=>{if(zr(y,t)){y.preventDefault();let x=a!==void 0?a:Z(m)===Z(p),b=()=>f(e,{replace:x,mask:r,state:n,preventScrollReset:s,relative:o,viewTransition:c,defaultShouldRevalidate:d});u?l.startTransition(()=>b()):b()}},[m,f,p,a,r,n,t,e,s,o,c,d,u])}var gn=0,yn=()=>`__${String(++gn)}__`;function vn(){let{router:e}=oe("useSubmit"),{basename:t}=l.useContext(D),a=ct("useSubmit"),r=e.fetch,n=e.navigate;return l.useCallback(async(s,o={})=>{let{action:c,method:d,encType:u,formData:f,body:m}=Hr(s,t);o.navigate===!1?await r(o.fetcherKey||yn(),a,o.action||c,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,relative:o.relative,formData:f,body:m,formMethod:o.method||d,formEncType:o.encType||u,flushSync:o.flushSync}):await n(o.action||c,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,relative:o.relative,formData:f,body:m,formMethod:o.method||d,formEncType:o.encType||u,replace:o.replace,state:o.state,fromRouteId:a,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,n,t,a])}function xn(e,{relative:t}={}){let{basename:a}=l.useContext(D),r=l.useContext(Q);N(r,"useFormAction must be used inside a RouteContext");let[n]=r.matches.slice(-1),s={...ie(e||".",{relative:t})},o=B();if(e==null){s.search=o.search;let c=new URLSearchParams(s.search),d=c.getAll("index");if(d.some(u=>u==="")){c.delete("index"),d.filter(f=>f).forEach(f=>c.append("index",f));let u=c.toString();s.search=u?`?${u}`:""}}return(!e||e===".")&&n.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(s.pathname=s.pathname==="/"?a:z([a,s.pathname])),Z(s)}var Ye="react-router-scroll-positions",ge={};function Qe(e,t,a,r){let n=null;return r&&(a!=="/"?n=r({...e,pathname:U(e.pathname,a)||e.pathname},t):n=r(e,t)),n==null&&(n=e.key),n}function bn({getKey:e,storageKey:t}={}){let{router:a}=oe("useScrollRestoration"),{restoreScrollPosition:r,preventScrollReset:n}=ot("useScrollRestoration"),{basename:s}=l.useContext(D),o=B(),c=ea(),d=Nr();l.useEffect(()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"}),[]),kn(l.useCallback(u=>{u.persisted&&(window.history.scrollRestoration="manual")},[])),wn(l.useCallback(()=>{if(d.state==="idle"){let u=Qe(o,c,s,e);ge[u]=window.scrollY}try{sessionStorage.setItem(t||Ye,JSON.stringify(ge))}catch(u){V(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${u}).`)}window.history.scrollRestoration="auto"},[d.state,e,s,o,c,t])),typeof document<"u"&&(l.useLayoutEffect(()=>{try{let u=sessionStorage.getItem(t||Ye);u&&(ge=JSON.parse(u))}catch{}},[t]),l.useLayoutEffect(()=>{let u=a?.enableScrollRestoration(ge,()=>window.scrollY,e?(f,m)=>Qe(f,m,s,e):void 0);return()=>u&&u()},[a,s,e]),l.useLayoutEffect(()=>{if(r!==!1){if(typeof r=="number"){window.scrollTo(0,r);return}try{if(o.hash){let u=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(u){u.scrollIntoView();return}}}catch{V(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}n!==!0&&window.scrollTo(0,0)}},[o,r,n]))}function wn(e,t){let{capture:a}=t||{};l.useEffect(()=>{let r=a!=null?{capture:a}:void 0;return window.addEventListener("pagehide",e,r),()=>{window.removeEventListener("pagehide",e,r)}},[e,a])}function kn(e,t){let{capture:a}=t||{};l.useEffect(()=>{let r=a!=null?{capture:a}:void 0;return window.addEventListener("pageshow",e,r),()=>{window.removeEventListener("pageshow",e,r)}},[e,a])}function _n(e,{relative:t}={}){let a=l.useContext(Yt);N(a!=null,"`useViewTransitionState` must be used within `react-router/dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=oe("useViewTransitionState"),n=ie(e,{relative:t});if(!a.isTransitioning)return!1;let s=U(a.currentLocation.pathname,r)||a.currentLocation.pathname,o=U(a.nextLocation.pathname,r)||a.nextLocation.pathname;return be(n.pathname,o)!=null||be(n.pathname,s)!=null}var En=({onComplete:e})=>{const[t,a]=(0,l.useState)(!0);return(0,l.useEffect)(()=>{const r=setTimeout(()=>{a(!1),setTimeout(e,500)},2e3);return()=>clearTimeout(r)},[e]),(0,i.jsxs)(_.div,{initial:{opacity:1},animate:{opacity:t?1:0},exit:{opacity:0},className:"fixed inset-0 z-50 bg-black flex items-center justify-center",role:"status","aria-label":t?"Loading":"Loading complete",children:[(0,i.jsx)(_.img,{src:"/logo.webp",alt:"Portfolio loading animation",className:"w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64",initial:{y:0,scale:1,rotate:0},animate:{y:t?[0,-20,0,-20,0]:-250,scale:t?[1,1.2,1,1.2,1]:.5,rotate:t?0:720},transition:{duration:t?3:1,ease:"easeInOut",times:t?[0,.25,.5,.75,1]:[0,1]}}),t&&(0,i.jsx)(_.div,{className:"absolute inset-0",initial:{opacity:0},animate:{opacity:[0,.4,.6,.4,0]},transition:{repeat:2,duration:1,ease:"easeInOut"},style:{background:"linear-gradient(to right, #ff2e97, #00e5ff)"}})]})},ra=()=>{const e=(0,l.useContext)(Mt);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},Xe=(e,t)=>{e.preventDefault();const a=document.getElementById(t);if(a){const r=a.getBoundingClientRect().top+window.scrollY+-50;window.scrollTo({top:r,behavior:"smooth"})}},na={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},_t=l.createContext&&l.createContext(na),Sn=["attr","size","title"];function Tn(e,t){if(e==null)return{};var a,r,n=jn(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function jn(e,t){if(e==null)return{};var a={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;a[r]=e[r]}return a}function _e(){return _e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},_e.apply(null,arguments)}function Et(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function Ee(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Et(Object(a),!0).forEach(function(r){Cn(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Et(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function Cn(e,t,a){return(t=Nn(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Nn(e){var t=Rn(e,"string");return typeof t=="symbol"?t:t+""}function Rn(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function sa(e){return e&&e.map((t,a)=>l.createElement(t.tag,Ee({key:a},t.attr),sa(t.child)))}function L(e){return t=>l.createElement(Ln,_e({attr:Ee({},e.attr)},t),sa(e.child))}function Ln(e){var t=a=>{var r=e.attr,n=e.size,s=e.title,o=Tn(e,Sn),c=n||a.size||"1em",d;return a.className&&(d=a.className),e.className&&(d=(d?d+" ":"")+e.className),l.createElement("svg",_e({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,r,o,{className:d,style:Ee(Ee({color:e.color||a.color},a.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&l.createElement("title",null,s),e.children)};return _t!==void 0?l.createElement(_t.Consumer,null,a=>t(a)):t(na)}function Pn(e){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(e)}function In(e){return L({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function Mn(e){return L({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function An(e){return L({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function Dn(e){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}function On(e){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function St(e){return L({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"},child:[]}]})(e)}function $n(e){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function zn(e){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(e)}function Bn(e){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function Fn(e){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function Hn(e){return L({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(e)}function Vn(e){return L({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function Di(e){return L({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}var Ve=["home","about","experience","education","skills","certificates","projects","languages","contact"],Tt=e=>e.charAt(0).toUpperCase()+e.slice(1),Un=[{name:"GitHub",url:"https://github.com/trencho",ariaLabel:"GitHub Profile"},{name:"LinkedIn",url:"https://www.linkedin.com/in/aleksandar-trenchevski-593b45168/",ariaLabel:"LinkedIn Profile"}],Oi={name:"Aleksandar Trenchevski",title:"Software Engineer",location:"Skopje, North Macedonia"},jt={filename:"/CV - Aleksandar Trenchevski.pdf",label:"Download CV"},H={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6}}},Gn={hidden:{opacity:0,x:-50},visible:{opacity:1,x:0,transition:{duration:1}}},W={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},Ue={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},A={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},Jn={hidden:{opacity:0,scale:.8,rotate:-10},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.6,ease:"easeOut"}}},Ct={initial:{scale:1,rotate:0,opacity:1},animate:{scale:[1,1.2,1],rotate:[0,360],opacity:1,transition:{duration:.8,ease:"easeInOut"}},exit:{scale:.8,opacity:0,rotate:180,transition:{duration:.4,ease:"easeInOut"}}},Wn=e=>{const[t,a]=(0,l.useState)(e[0]??"");return(0,l.useEffect)(()=>{const r=e.map(s=>document.getElementById(s)).filter(s=>s!==null);if(r.length===0)return;const n=new IntersectionObserver(s=>{const o=s.filter(c=>c.isIntersecting).sort((c,d)=>c.boundingClientRect.top-d.boundingClientRect.top);o[0]&&a(o[0].target.id)},{rootMargin:"-40% 0px -55% 0px",threshold:0});return r.forEach(s=>n.observe(s)),()=>n.disconnect()},[e]),t},qn=()=>{const{darkMode:e,toggleDarkMode:t}=ra(),[a,r]=(0,l.useState)(!1),n=Wn(Ve),s=()=>r(!a),o=()=>r(!1);return(0,l.useEffect)(()=>{if(!a)return;const c=d=>{d.key==="Escape"&&r(!1)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[a]),(0,i.jsxs)("nav",{className:"p-5 fixed w-full top-0 z-10 backdrop-blur-md shadow-md transition-colors duration-300 bg-white/90 text-gray-900 dark:bg-[#0d0221]/90 dark:text-white","aria-label":"Main navigation",children:[(0,i.jsxs)("div",{className:"container mx-auto flex justify-between items-center",children:[(0,i.jsx)("div",{className:"sm:hidden",children:(0,i.jsxs)("button",{id:"toggleButton",onClick:s,"aria-label":a?"Close navigation menu":"Open navigation menu","aria-expanded":a,"aria-controls":"mobile-menu",className:"relative flex flex-col items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2",children:[(0,i.jsx)("div",{className:`transition-transform duration-300 ease-in-out w-6 h-0.5 bg-current ${a?"rotate-45 translate-y-1.5":""}`,"aria-hidden":"true"}),(0,i.jsx)("div",{className:`transition-opacity duration-300 ease-in-out w-6 h-0.5 bg-current my-1 ${a?"opacity-0":""}`,"aria-hidden":"true"}),(0,i.jsx)("div",{className:`transition-transform duration-300 ease-in-out w-6 h-0.5 bg-current ${a?"-rotate-45 -translate-y-1.5":""}`,"aria-hidden":"true"})]})}),(0,i.jsx)("div",{className:"hidden sm:flex flex-1 justify-center space-x-4 lg:space-x-6",children:Ve.map(c=>{const d=n===c;return(0,i.jsxs)("a",{href:`#${c}`,onClick:u=>{Xe(u,c)},className:`relative text-sm sm:text-lg font-semibold group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded px-2 py-1 transition-colors ${d?"text-fuchsia-700 dark:text-cyan-400":"hover:text-gray-600 dark:hover:text-gray-400"}`,"aria-label":`Navigate to ${c} section`,"aria-current":d?"true":void 0,children:[Tt(c),(0,i.jsx)("span",{className:`absolute bottom-0 left-0 w-full h-0.5 transform transition-transform duration-500 ease-in-out origin-left group-hover:scale-x-100 ${d?"scale-x-100":"scale-x-0"} bg-fuchsia-600 dark:bg-cyan-400`,"aria-hidden":"true"})]},c)})}),(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsxs)(ke,{to:"/cv",className:"hidden sm:flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 bg-black text-white hover:bg-gray-800 dark:bg-fuchsia-700 dark:hover:bg-fuchsia-600 dark:shadow-[0_0_16px_rgba(217,70,239,0.35)]","aria-label":"View CV",children:[(0,i.jsx)(St,{"aria-hidden":"true"}),(0,i.jsx)("span",{children:"CV"})]}),(0,i.jsx)("button",{onClick:t,"aria-label":e?"Switch to light mode":"Switch to dark mode",className:"flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded p-1",children:(0,i.jsx)(Je,{mode:"wait",children:e?(0,i.jsx)(_.div,{initial:"initial",animate:"animate",exit:"exit",variants:Ct,"aria-hidden":"true",children:(0,i.jsx)(Dn,{size:24})},"sun"):(0,i.jsx)(_.div,{initial:"initial",animate:"animate",exit:"exit",variants:Ct,"aria-hidden":"true",children:(0,i.jsx)(On,{size:24})},"moon")})})]})]}),(0,i.jsx)(Je,{children:a&&(0,i.jsx)(_.div,{initial:{opacity:0,y:-100},animate:{opacity:1,y:0},exit:{opacity:0,y:-100},transition:{duration:.3,ease:"easeInOut"},className:"absolute top-16 left-0 w-full backdrop-blur-md shadow-md bg-white/90 text-gray-900 dark:bg-[#0d0221]/90 dark:text-white",id:"mobile-menu",children:(0,i.jsxs)("ul",{className:"flex flex-col space-y-4 py-4 px-6",children:[Ve.map(c=>{const d=n===c;return(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:`#${c}`,onClick:u=>{Xe(u,c),o()},className:`relative text-lg font-semibold group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded px-2 py-1 block ${d?"text-fuchsia-700 dark:text-cyan-400":"hover:text-gray-600 dark:hover:text-gray-400"}`,"aria-current":d?"true":void 0,children:[Tt(c),(0,i.jsx)("span",{className:`absolute bottom-0 left-0 w-full h-0.5 transform transition-transform duration-500 ease-in-out origin-left group-hover:scale-x-100 ${d?"scale-x-100":"scale-x-0"} bg-fuchsia-600 dark:bg-cyan-400`,"aria-hidden":"true"})]})},c)}),(0,i.jsx)("li",{children:(0,i.jsxs)(ke,{to:"/cv",onClick:o,className:"flex items-center gap-2 text-lg font-semibold px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded hover:text-gray-600 dark:hover:text-gray-400",children:[(0,i.jsx)(St,{"aria-hidden":"true"}),(0,i.jsx)("span",{children:"View CV"})]})})]})})})]})},J="bg-white/70 dark:bg-[#1a0b2e]/70 dark:border dark:border-fuchsia-500/15",Le="text-gray-900 dark:text-white",le="text-gray-700 dark:text-white",Pe="text-fuchsia-600 dark:text-cyan-400",Kn=e=>e?"bg-fuchsia-500/30 text-black border-fuchsia-400/50 focus:ring-fuchsia-400 shadow-lg dark:bg-cyan-500/30 dark:text-white dark:border-cyan-400/50 dark:focus:ring-cyan-400 dark:shadow-cyan-500/20":"bg-fuchsia-500/20 text-black hover:bg-fuchsia-500/30 border-fuchsia-400/30 hover:scale-105 dark:bg-cyan-500/15 dark:text-white dark:hover:bg-cyan-500/25 dark:border-cyan-400/30",ia=e=>e?"border-red-500 focus:ring-red-400":"focus:ring-fuchsia-400 dark:bg-[#241041] dark:border-fuchsia-500/25 dark:text-white dark:focus:ring-cyan-400",Yn="bg-black text-white hover:bg-gray-800 dark:bg-fuchsia-700 dark:hover:bg-fuchsia-600 dark:shadow-[0_0_20px_rgba(217,70,239,0.35)]";var Qn=()=>{const e="Software Engineer",t=ja(),[a,r]=(0,l.useState)(""),[n,s]=(0,l.useState)(!1),o=new Date("2018-07-15"),c=[`${new Date().getFullYear()-o.getFullYear()}+ years experience`,"Backend & Data Engineering","Java · Python · Spring · Spark","Skopje, North Macedonia"];return(0,l.useEffect)(()=>{if(t)return;let d=0,u;const f=()=>{d<=17&&(r(e.slice(0,d)),d++,u=setTimeout(f,100))};return f(),()=>clearTimeout(u)},[t]),(0,i.jsxs)(_.section,{className:"min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 space-y-6 pt-16 lg:p-12",initial:"hidden",animate:"visible",variants:W,children:[(0,i.jsxs)(_.div,{className:"relative w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full border-4 border-white shadow-lg mt-4 sm:mt-8",variants:H,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{srcSet:"/profile.webp",type:"image/webp"}),(0,i.jsx)("img",{src:"/profile.jpg",alt:"Aleksandar profile picture",className:`absolute top-0 left-0 w-full h-full object-cover rounded-full transition-opacity duration-500 ease-in-out select-none ${n?"opacity-0":"opacity-100"}`,width:"648",height:"648",loading:"eager",fetchPriority:"high"})]}),(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{srcSet:"/logo.webp",type:"image/webp"}),(0,i.jsx)("img",{src:"/logo.png",alt:"","aria-hidden":"true",className:`absolute top-0 left-0 w-full h-full object-cover rounded-full transition-opacity duration-500 ease-in-out select-none ${n?"opacity-100":"opacity-0"}`,width:"200",height:"200",loading:"lazy",decoding:"async"})]})]}),(0,i.jsx)(_.div,{className:"w-full max-w-lg sm:max-w-3xl p-4 sm:p-8 rounded-lg shadow-lg flex justify-center items-center bg-white/70 text-gray-700 dark:bg-[#1a0b2e]/80 dark:text-white dark:border dark:border-fuchsia-500/20",variants:Gn,children:(0,i.jsxs)("div",{className:"text-center space-y-4 sm:space-y-6 max-w-xl leading-relaxed",children:[(0,i.jsxs)("h1",{className:`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 ${Le}`,children:["Hello, my name is Aleksandar and I'm a"," ",(0,i.jsx)("span",{className:"text-fuchsia-600 dark:text-cyan-400 dark:drop-shadow-[0_0_10px_rgba(34,211,238,0.55)]",children:typeof window>"u"||t?e:a})," "]}),(0,i.jsx)("p",{className:"text-base sm:text-lg lg:text-xl leading-relaxed",children:"I build RESTful APIs and large-scale data pipelines across insurance, banking, telecom and healthcare. Currently a Data Engineer at Encora, designing ETL workflows on Azure Databricks and Apache Spark."}),(0,i.jsx)(_.ul,{className:"flex flex-wrap justify-center gap-2",variants:H,"aria-label":"Highlights",children:c.map(d=>(0,i.jsx)("li",{className:"rounded-full px-3 py-1 text-xs sm:text-sm font-medium select-none bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-500/10 dark:text-cyan-300 dark:border dark:border-cyan-400/20",children:d},d))}),(0,i.jsxs)(_.div,{className:"flex flex-col sm:flex-row items-center justify-center gap-4 mt-4",variants:H,children:[(0,i.jsxs)("a",{href:"#contact",onClick:d=>{Xe(d,"contact")},className:"px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 mb-2 sm:mb-0 select-none bg-black text-white hover:bg-gray-800 dark:bg-fuchsia-700 dark:hover:bg-fuchsia-600 dark:shadow-[0_0_20px_rgba(217,70,239,0.35)]",children:[(0,i.jsx)("span",{children:"Contact me here"}),(0,i.jsx)(Vn,{"aria-hidden":"true"})]}),(0,i.jsxs)("a",{href:jt.filename,className:"px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 mb-2 sm:mb-0 select-none bg-black text-white hover:bg-gray-800 dark:bg-fuchsia-700 dark:hover:bg-fuchsia-600 dark:shadow-[0_0_20px_rgba(217,70,239,0.35)]",download:!0,children:[(0,i.jsx)("span",{children:jt.label}),(0,i.jsx)(zn,{"aria-hidden":"true"})]}),(0,i.jsx)("div",{className:"flex space-x-4 mt-4 sm:mt-0",children:Un.map(d=>{const u=d.name==="GitHub"?Mn:In;return(0,i.jsxs)("a",{href:d.url,target:"_blank",rel:"noopener noreferrer",className:`group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full text-white transition
                    bg-black hover:bg-gray-800 dark:bg-purple-800 dark:hover:bg-purple-700`,"aria-label":d.ariaLabel,children:[(0,i.jsx)(u,{className:"text-xl","aria-hidden":"true"}),(0,i.jsx)("span",{className:`absolute bottom-full mb-2 hidden w-auto px-2 py-1 text-xs text-white rounded opacity-0 group-hover:block group-hover:opacity-100 transition-opacity
                      bg-black dark:bg-purple-800`,children:d.name})]},d.name)})})]})]})})]})},Xn=[{id:"focus",body:(0,i.jsxs)(i.Fragment,{children:["I'm a software engineer focused on ",(0,i.jsx)("b",{children:"backend"})," and"," ",(0,i.jsx)("b",{children:"data engineering"}),". I've designed and shipped"," ",(0,i.jsx)("b",{children:"RESTful APIs"})," and, more recently, large-scale ",(0,i.jsx)("b",{children:"ETL pipelines"})," ","— building data workflows on ",(0,i.jsx)("b",{children:"Azure Databricks"})," and"," ",(0,i.jsx)("b",{children:"Apache Spark"})," for the insurance sector, after years of"," ",(0,i.jsx)("b",{children:"Java/Spring"})," development across banking (3DS secure payments), telecommunications and healthcare."]})},{id:"delivery",body:(0,i.jsxs)(i.Fragment,{children:["My work spans the full delivery cycle: modelling data and APIs, containerising with ",(0,i.jsx)("b",{children:"Docker"})," and ",(0,i.jsx)("b",{children:"Kubernetes"}),", and shipping through ",(0,i.jsx)("b",{children:"CI/CD"}),". I've collaborated directly with international clients across ",(0,i.jsx)("b",{children:"Europe and the US"}),", translating business requirements into maintainable, production-ready systems."]})},{id:"background",body:(0,i.jsxs)(i.Fragment,{children:["I hold a"," ",(0,i.jsx)("b",{children:"Master's in Electrical Engineering and Information Technologies"}),", where my thesis on monitoring atmospheric impacts and predicting air pollution grew into open-source machine-learning projects. I value"," ",(0,i.jsx)("b",{children:"clean, well-tested code"}),", pragmatic design and continuous learning — and I'm comfortable explaining technical trade-offs to both engineers and non-technical stakeholders."]})}],Zn=()=>(0,i.jsx)(_.section,{className:`flex justify-center items-center p-4 sm:p-8 lg:p-12 ${le}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:W,children:(0,i.jsxs)(_.div,{className:`w-full max-w-lg sm:max-w-3xl p-4 sm:p-8 rounded-lg shadow-lg ${J}`,variants:W,children:[(0,i.jsx)(_.h2,{className:"text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6",variants:A,children:"About Me"}),(0,i.jsx)(_.div,{className:"text-center hyphens-auto max-w-lg sm:max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-8",variants:W,children:Xn.map(e=>(0,i.jsx)(_.p,{className:"text-base sm:text-lg lg:text-xl leading-relaxed mb-4",variants:A,children:e.body},e.id))})]})}),es=[{company:"Encora Inc.",period:"Mar 2023 – Present",location:"Skopje, North Macedonia",roles:[{title:"Data Engineer",projects:[{name:"Hiscox — Insurance data platform",description:"Building ETL pipelines on Azure Databricks and Apache Spark to ingest, transform and validate insurance data from multiple sources, with automated workflows feeding Azure Data Lake for scalable storage and analytics.",technologies:["Python","SQL","PySpark","Apache Spark","Databricks","Delta Lake","Azure Data Factory"],buildTools:["Databricks Asset Bundles"],versionControl:["Git","Azure DevOps"]}]},{title:"Java Engineer",projects:[{name:'Brandwatch — "Publish" module',description:`Delivered Java/Spring services for Brandwatch's social-media "Publish" module for planning, creating and distributing content.`,technologies:["Java","Spring Boot","PostgreSQL","Docker","Kubernetes"],buildTools:["Gradle","Maven"],versionControl:["Git","GitHub"]},{name:"Cox Networks — Telecom middleware",description:"Built middleware for Cox Networks, a mobile network operator, that receives, processes and serves data from the carrier's systems.",technologies:["Java","Spring Boot","JDBC","JAX-RS","Oracle DB"],buildTools:["Gradle"],versionControl:["Git","Bitbucket"]}]}]},{company:"Netcetera",period:"Dec 2021 – Mar 2023",location:"Skopje, North Macedonia",roles:[{title:"Java Engineer",projects:[{name:"3DS Secure digital payments",description:"Developed banking software for 3DS Secure digital payments, handling authentication flows for online card transactions.",technologies:["Java","Spring Boot","Spring Batch","Hibernate","Microsoft SQL Server"],buildTools:["Maven"],versionControl:["Git","Bitbucket"]}]}]},{company:"Medical IT Revolution",period:"Jul 2018 – Dec 2021",location:"Skopje, North Macedonia",roles:[{title:"Java Engineer",projects:[{name:"Medical Portal",description:"Built a medical application for hospitals in the Netherlands handling patient admissions and examination scheduling based on diagnosis, supporting client requests and delivering optimal software solutions.",technologies:["Java EE","JDBC","IBM Db2","JavaServer Pages"],buildTools:["Maven"],versionControl:["SVN"]}]}]}],ce=({children:e,className:t="",animated:a=!1,variants:r})=>{const n=`text-2xl sm:text-3xl lg:text-4xl font-bold text-center ${Le} ${t}`;return a?(0,i.jsx)(_.h2,{className:n,...r===void 0?{}:{variants:r},children:e}):(0,i.jsx)("h2",{className:n,children:e})},ts=()=>(0,i.jsx)(_.section,{className:`flex justify-center ${le}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:W,children:(0,i.jsxs)("div",{className:"w-full max-w-lg sm:max-w-3xl",children:[(0,i.jsx)(ce,{className:"mb-8 sm:mb-12",animated:!0,variants:A,children:"Experience"}),(0,i.jsx)("ol",{className:"relative border-s-2 border-gray-400/40 ms-3 sm:ms-4 space-y-8 sm:space-y-10",children:es.map(e=>{const t=e.roles.length>1;return(0,i.jsxs)(_.li,{className:"ms-6 sm:ms-8",variants:A,children:[(0,i.jsx)("span",{className:"absolute -start-2.25 flex h-4 w-4 rounded-full border-2 bg-fuchsia-500 border-white dark:bg-cyan-400 dark:border-[#0d0221] dark:shadow-[0_0_10px_rgba(34,211,238,0.7)]","aria-hidden":"true"}),(0,i.jsxs)("div",{className:`rounded-lg shadow-lg p-5 sm:p-6 ${J}`,children:[(0,i.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1",children:[(0,i.jsx)("h3",{className:"text-lg sm:text-xl font-semibold",children:t?e.company:(0,i.jsxs)(i.Fragment,{children:[e.roles[0]?.title,(0,i.jsxs)("span",{className:Pe,children:[" · ",e.company]})]})}),(0,i.jsx)("span",{className:"text-sm sm:text-base whitespace-nowrap opacity-80",children:e.period})]}),(0,i.jsx)("p",{className:"text-sm sm:text-base opacity-80 mb-4",children:e.location}),(0,i.jsx)("div",{className:"space-y-6",children:e.roles.map(a=>(0,i.jsxs)("div",{children:[t&&(0,i.jsx)("h4",{className:"text-base sm:text-lg font-semibold mb-3 text-fuchsia-600 dark:text-cyan-400",children:a.title}),(0,i.jsx)("ul",{className:t?"space-y-4 border-s-2 border-gray-400/25 ps-4 sm:ps-5":"space-y-4",children:a.projects.map(r=>(0,i.jsxs)("li",{children:[(0,i.jsx)("h5",{className:"text-base font-semibold",children:r.name}),(0,i.jsx)("p",{className:"text-base leading-relaxed mt-1 mb-3",children:r.description}),(0,i.jsx)("div",{className:"flex flex-wrap gap-2",children:r.technologies.map(n=>(0,i.jsx)("span",{className:"bg-[#2a0a4a] text-fuchsia-100 rounded-full px-3 py-1 text-xs sm:text-sm font-medium select-none",children:n},n))}),(0,i.jsx)("div",{className:"mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 text-xs sm:text-sm",children:[{label:"Build",items:r.buildTools},{label:"Version control",items:r.versionControl}].map(({label:n,items:s})=>s.length>0?(0,i.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,i.jsx)("span",{className:"opacity-90 font-medium",children:n}),s.map(o=>(0,i.jsx)("span",{className:"rounded-full border border-gray-400/50 px-2.5 py-0.5 select-none",children:o},o))]},n):null)})]},r.name))})]},a.title))})]})]},e.company)})})]})}),as=[{degree:"Master of Electrical Engineering and Information Technologies",institution:"Ss. Cyril and Methodius University of Skopje",period:"2018 – 2021",thesis:"Design, implementation and assessment of a system for monitoring atmospheric impacts and predicting air pollution"},{degree:"Bachelor of Electrical Engineering and Information Technologies",institution:"Ss. Cyril and Methodius University of Skopje",period:"2014 – 2018",thesis:"Web system for collecting and processing data for student services"}],Nt=[{title:"Prediction of Air Pollution Concentration Using Weather Data and Regression Models",url:"https://dx.doi.org/10.25673/32749"}],rs=()=>{const e=`rounded-lg shadow-lg p-5 sm:p-6 ${J}`;return(0,i.jsx)(_.section,{className:`flex justify-center ${le}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:W,children:(0,i.jsxs)("div",{className:"w-full max-w-lg sm:max-w-3xl",children:[(0,i.jsx)(ce,{className:"mb-8 sm:mb-12",animated:!0,variants:A,children:"Education"}),(0,i.jsx)("div",{className:"space-y-6",children:as.map(t=>(0,i.jsxs)(_.div,{className:e,variants:A,children:[(0,i.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1",children:[(0,i.jsx)("h3",{className:"text-lg sm:text-xl font-semibold",children:t.degree}),(0,i.jsx)("span",{className:"text-sm sm:text-base whitespace-nowrap opacity-80",children:t.period})]}),(0,i.jsx)("p",{className:`text-sm sm:text-base font-medium ${Pe}`,children:t.institution}),(0,i.jsxs)("p",{className:"text-base leading-relaxed mt-2",children:[(0,i.jsx)("span",{className:"opacity-80",children:"Thesis: "}),(0,i.jsx)("span",{className:"italic",children:t.thesis})]})]},t.degree))}),Nt.length>0&&(0,i.jsxs)(_.div,{className:"mt-10",variants:A,children:[(0,i.jsx)("h3",{className:"text-xl sm:text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white",children:"Publications"}),(0,i.jsx)("ul",{className:"space-y-4",children:Nt.map(t=>(0,i.jsx)("li",{className:e,children:(0,i.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"text-base leading-relaxed font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded text-fuchsia-600 dark:text-cyan-400",children:t.title})},t.title))})]})]})})},ns=[{title:"Java",imageSrc:"image-skills/backend/java.png",categories:["Backend"]},{title:"Python",imageSrc:"image-skills/backend/python.png",categories:["Backend"]},{title:"Spring",imageSrc:"image-skills/backend/spring.png",categories:["Backend"]},{title:"FastAPI",imageSrc:"image-skills/backend/fastapi.png",categories:["Backend"]},{title:"Flask",imageSrc:"image-skills/backend/flask.png",categories:["Backend"]},{title:"JavaScript",imageSrc:"image-skills/frontend/javascript.png",categories:["Frontend"]},{title:"TypeScript",imageSrc:"image-skills/frontend/typescript.png",categories:["Frontend"]},{title:"React",imageSrc:"image-skills/frontend/react.png",categories:["Frontend"]},{title:"Vue.js",imageSrc:"image-skills/frontend/vuejs.png",categories:["Frontend"]},{title:"Microsoft SQL Server",imageSrc:"image-skills/databases/microsoft-sql-server.png",categories:["Databases"]},{title:"MongoDB",imageSrc:"image-skills/databases/mongodb.png",categories:["Databases"]},{title:"MySQL",imageSrc:"image-skills/databases/mysql.png",categories:["Databases"]},{title:"Oracle DB",imageSrc:"image-skills/databases/oracle-db.png",categories:["Databases"]},{title:"PostgreSQL",imageSrc:"image-skills/databases/postgresql.png",categories:["Databases"]},{title:"Docker",imageSrc:"image-skills/devops/docker.png",categories:["DevOps"]},{title:"Kubernetes",imageSrc:"image-skills/devops/kubernetes.png",categories:["DevOps"]},{title:"Nginx",imageSrc:"image-skills/devops/nginx.png",categories:["DevOps"]},{title:"Git",imageSrc:"image-skills/tools/git.png",categories:["Tools"]},{title:"GitHub",imageSrc:"image-skills/tools/github.png",categories:["Tools"]},{title:"GitHub Actions",imageSrc:"image-skills/tools/github-actions.png",categories:["Tools"]},{title:"Gunicorn",imageSrc:"image-skills/tools/gunicorn.png",categories:["Tools"]},{title:"Lombok",imageSrc:"image-skills/tools/lombok.png",categories:["Tools"]},{title:"Maven",imageSrc:"image-skills/tools/maven.png",categories:["Tools"]},{title:"Postman",imageSrc:"image-skills/tools/postman.png",categories:["Tools"]},{title:"Pytest",imageSrc:"image-skills/tools/pytest.png",categories:["Tools"]},{title:"Swagger",imageSrc:"image-skills/tools/swagger.png",categories:["Tools"]},{title:"Vite",imageSrc:"image-skills/tools/vite.png",categories:["Tools"]},{title:"Matplotlib",imageSrc:"image-skills/data-science/matplotlib.png",categories:["Data Science"]},{title:"NumPy",imageSrc:"image-skills/data-science/numpy.png",categories:["Data Science"]},{title:"Pandas",imageSrc:"image-skills/data-science/pandas.png",categories:["Data Engineering","Data Science"]},{title:"Scikit-learn",imageSrc:"image-skills/data-science/scikit-learn.png",categories:["Data Science"]},{title:"Scipy",imageSrc:"image-skills/data-science/scipy.png",categories:["Data Science"]},{title:"Apache Spark",imageSrc:"image-skills/data-engineering/apache-spark.png",categories:["Data Engineering"]},{title:"Azure Blob Storage",imageSrc:"image-skills/data-engineering/azure-blob-storage.png",categories:["Data Engineering"]},{title:"Azure Data Factory",imageSrc:"image-skills/data-engineering/azure-data-factory.png",categories:["Data Engineering"]},{title:"Azure Data Lake",imageSrc:"image-skills/data-engineering/azure-data-lake.png",categories:["Data Engineering"]},{title:"Databricks",imageSrc:"image-skills/data-engineering/databricks.png",categories:["Data Engineering"]},{title:"Delta Lake",imageSrc:"image-skills/data-engineering/delta-lake.png",categories:["Data Engineering"]},{title:"ChatGPT",imageSrc:"image-skills/ai/chatgpt.png",categories:["AI"]},{title:"Claude",imageSrc:"image-skills/ai/claude.png",categories:["AI"]},{title:"GitHub Copilot",imageSrc:"image-skills/ai/github-copilot.png",categories:["AI"]},{title:"Grok",imageSrc:"image-skills/ai/grok.png",categories:["AI"]}],ss=({label:e,active:t,onSelect:a})=>(0,i.jsx)("button",{onClick:a,role:"tab","aria-selected":t,"aria-controls":`skills-${e}`,className:`px-6 py-3 rounded-xl font-medium transition-all duration-300 border cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${Kn(t)}`,children:e}),is=["Frontend","Backend","Databases","Tools","DevOps","Data Science","Data Engineering","AI"],Rt=ns,os=()=>{const[e,t]=(0,l.useState)("All"),a=(0,l.useMemo)(()=>e==="All"?Rt:Rt.filter(n=>n.categories.includes(e)),[e]),r=n=>{t(n==="All"?"All":n)};return(0,i.jsx)(_.section,{className:"flex max-w-6xl mx-auto justify-center items-center p-4 sm:p-6 lg:p-12 skills-section",initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:Ue,children:(0,i.jsxs)(_.div,{className:`w-full max-w-lg sm:max-w-6xl p-4 sm:p-8 rounded-lg shadow-lg ${J}`,variants:Ue,children:[(0,i.jsx)(_.h2,{className:"text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6",variants:A,children:"Skills"}),(0,i.jsxs)(_.div,{className:"glass-card p-8 sm:p-12 lg:p-16",variants:A,children:[(0,i.jsx)("div",{className:"flex flex-wrap justify-center gap-4 mb-12",role:"tablist","aria-label":"Filter skills by category",children:["All",...is].map(n=>(0,i.jsx)(ss,{label:n,active:e===n,onSelect:()=>{r(n)}},n))}),(0,i.jsx)(_.div,{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6",role:"tabpanel",id:`skills-${e}`,"aria-label":`${e} skills`,variants:Ue,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:a.map(n=>(0,i.jsxs)(_.div,{className:"flex flex-col items-center space-y-3 p-4 rounded-2xl transition-all duration-300 hover:scale-105 group bg-gray-100 hover:bg-gray-200 dark:bg-[#241041] dark:hover:bg-[#33165c]",variants:A,whileHover:{y:-5},role:"img","aria-label":`${n.title} skill`,children:[(0,i.jsx)("div",{className:"w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden bg-linear-to-br from-fuchsia-500/20 to-cyan-500/20 p-2 border border-fuchsia-400/30",children:(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{srcSet:n.imageSrc.replace(/\.png$/,".webp"),type:"image/webp"}),(0,i.jsx)("img",{src:n.imageSrc,alt:`${n.title} logo`,className:"w-full h-full object-contain",width:"80",height:"80",loading:"lazy",decoding:"async"})]})}),(0,i.jsx)("span",{className:"text-sm font-medium text-center transition-colors duration-300 text-black/80 group-hover:text-black dark:text-white/80 dark:group-hover:text-white",children:n.title})]},n.title))},e),a.length===0&&(0,i.jsx)(_.div,{className:"text-center py-16",variants:A,children:(0,i.jsx)("p",{className:"text-lg text-gray-700 dark:text-white/80",children:"No skills found for the selected category."})})]})]})})},ls=[{title:"Databricks Certified Data Engineer Associate",imageSrc:"image-skills/certificates/databricks-data-engineer-associate.png",url:"https://credentials.databricks.com/ecb77163-c63a-45f7-a02f-7747fe0ad658#acc.vuI371hQ"},{title:"Databricks Certified Data Engineer Professional",imageSrc:"image-skills/certificates/databricks-data-engineer-professional.png",url:"https://credentials.databricks.com/40252957-e8c8-4c3d-8170-c7655543c307#acc.Q6Kku94J"}],cs=()=>(0,i.jsxs)("section",{className:"p-4 sm:p-6 lg:p-8",children:[(0,i.jsx)(ce,{className:"p-6",children:"Certificates"}),(0,i.jsx)("div",{className:"max-w-6xl mx-auto flex justify-center gap-6 sm:gap-8 text-center",children:ls.map((e,t)=>{const a=(0,i.jsxs)(_.div,{className:`w-48 sm:w-56 lg:w-72 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 ${J} hover:bg-white/85 dark:hover:bg-[#241041]`,variants:A,whileInView:{opacity:1,y:0},initial:{opacity:0,y:10},viewport:{once:!0},transition:{duration:.2,delay:t*.03},children:[(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{srcSet:e.imageSrc.replace(/\.png$/,".webp"),type:"image/webp"}),(0,i.jsx)("img",{src:e.imageSrc,alt:e.title,width:"128",height:"128",loading:"lazy",decoding:"async",className:"mx-auto w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain select-none"})]}),(0,i.jsx)("h3",{className:"mt-4 text-lg sm:text-xl font-medium text-center line-clamp-2 text-black dark:text-white",children:e.title})]});return(0,i.jsx)(l.Fragment,{children:e.url?(0,i.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":e.title,children:a}):a},e.title)})})]}),ds=[{title:"AQRA — Air Quality Monitoring",description:"Air-quality monitoring for North Macedonia, built as two deployed services. A Flask REST API trains and serves machine-learning models that forecast pollutant levels from weather and sensor readings, documented with Swagger and backed by MongoDB. A Vue 3 single-page app renders those readings as a Leaflet pollutant heatmap with a 24-hour time slider and Chart.js history, and also ships as a Capacitor mobile app. Both run as containers on Kubernetes behind Nginx.",links:[{label:"Live Site",url:"https://aqra.feit.ukim.edu.mk/"},{label:"Backend",url:"https://github.com/trencho/air-quality-rest-api"},{label:"Frontend",url:"https://github.com/trencho/aqra-frontend"}],technologies:["Python","Flask","Scikit-learn","Pandas","NumPy","MongoDB","Vue.js","TypeScript","Vite","Leaflet","Chart.js","Docker","Kubernetes","Nginx","Gunicorn","Swagger"],imageSrc:"image-projects/aqra.png"},{title:"CrowdTune — Crowdsourced Event Music",description:"Turns any event into a shared playlist. Guests scan a QR code to request and vote on songs with no signup, and a big-screen display auto-plays the crowd's current winner through the YouTube IFrame Player. A Spring Boot API on Java 25 handles events, voting with atomic counters, per-guest QR passes and a Server-Sent Events stream that pushes leaderboard changes in real time; a Vue 3 single-page app renders the guest, host and display surfaces. Events belong to an organization, so a team shares one plan across roles, and paid tiers add catalog search, white-label branding, analytics and recurring nights. Runs as a single-host Docker Compose stack behind Caddy with automatic TLS.",links:[{label:"Live Site",url:"https://crowdtune.live/"}],technologies:["Java","Spring Boot","Spring Security","PostgreSQL","Redis","Flyway","Vue.js","TypeScript","Vite","Tailwind CSS","Pinia","Server-Sent Events","Docker","Caddy","GitHub Actions"],imageSrc:"image-projects/crowdtune.png"},{title:"Crypto Prophet",description:"A FastAPI service that trains machine-learning models to forecast cryptocurrency prices, exposing predictions through a documented REST API. Packaged with Docker for reproducible deployments.",links:[{label:"View Code",url:"https://github.com/trencho/crypto-prophet"}],technologies:["Python","FastAPI","Scikit-learn","Pandas","NumPy","Docker","Swagger"],imageSrc:"image-projects/crypto-prophet.png"},{title:"Task Manager",description:"A full-stack task-management app: a Spring Boot REST API with secured authentication and MongoDB persistence, paired with a Vue.js frontend for registering, logging in and managing tasks.",links:[{label:"Backend",url:"https://github.com/trencho/task-manager-backend"},{label:"Frontend",url:"https://github.com/trencho/task-manager-frontend"}],technologies:["Java","Spring Boot","Spring Security","MongoDB","Vue.js","JavaScript","Docker"],imageSrc:"image-projects/task-manager.png"}];function us(e){return L({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"},child:[]}]})(e)}function ms(e){return L({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]},{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"},child:[]}]})(e)}var fs=e=>{try{return new URL(e).hostname.replace(/^www\./,"")==="github.com"}catch{return!1}},hs=({label:e,url:t,projectTitle:a})=>{const r=fs(t)?us:ms;return(0,i.jsxs)("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 select-none ${Yn}`,"aria-label":`${a} – ${e}`,children:[(0,i.jsx)("span",{children:e}),(0,i.jsx)(r,{className:"text-xl","aria-hidden":"true"})]})},ps=()=>(0,i.jsxs)("section",{className:"py-8 sm:py-12",children:[(0,i.jsx)(ce,{className:"mb-8 sm:mb-12",children:"My Projects"}),(0,i.jsx)("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 md:px-8",children:ds.map((e,t)=>(0,i.jsxs)(_.div,{className:`flex flex-col md:flex-row mb-10 sm:mb-12 shadow-lg rounded-lg p-6 ${J} ${t%2!==0?"md:flex-row-reverse":""}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:Jn,transition:{delay:t*.2},children:[(0,i.jsx)(_.div,{className:"w-full md:w-1/2 p-4 flex justify-center items-center",whileHover:{scale:1.1,rotate:2},transition:{duration:.3},children:(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{srcSet:e.imageSrc.replace(/\.png$/,".webp"),type:"image/webp"}),(0,i.jsx)("img",{src:e.imageSrc,alt:e.title,width:"240",height:"240",loading:"lazy",decoding:"async",className:"w-48 h-48 sm:w-60 sm:h-60 object-contain rounded-lg shadow-2xl select-none"})]})}),(0,i.jsxs)("div",{className:"w-full md:w-1/2 p-4 flex flex-col justify-center",children:[(0,i.jsx)("h3",{className:"text-xl sm:text-2xl font-semibold mb-4",children:e.title}),(0,i.jsx)("p",{className:"mb-4",children:e.description}),(0,i.jsx)("div",{className:"flex flex-wrap gap-2 mb-4",children:e.technologies.map(a=>(0,i.jsx)("span",{className:"bg-[#2a0a4a] text-fuchsia-100 rounded-full px-3 py-1 text-sm font-medium select-none",children:a},a))}),(0,i.jsx)("div",{className:"flex flex-wrap gap-4",children:e.links.map(a=>(0,i.jsx)(hs,{label:a.label,url:a.url,projectTitle:e.title},a.url))})]})]},e.title))})]}),gs=[{name:"English",proficiency:"Full professional proficiency"},{name:"Serbian",proficiency:"Professional working proficiency"},{name:"German",proficiency:"Limited working proficiency"}],ys=()=>(0,i.jsx)(_.section,{className:`flex justify-center ${le}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:W,children:(0,i.jsxs)("div",{className:"w-full max-w-lg sm:max-w-3xl",children:[(0,i.jsx)(ce,{className:"mb-8 sm:mb-12",animated:!0,variants:A,children:"Languages"}),(0,i.jsx)("div",{className:"grid gap-6 sm:grid-cols-3",children:gs.map(e=>(0,i.jsxs)(_.div,{className:`rounded-lg shadow-lg p-5 sm:p-6 text-center ${J}`,variants:A,children:[(0,i.jsx)("h3",{className:"text-lg sm:text-xl font-semibold",children:e.name}),(0,i.jsx)("p",{className:`text-sm sm:text-base mt-1 ${Pe}`,children:e.proficiency})]},e.name))})]})});function oa(e){var t,a,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(a=oa(e[t]))&&(r&&(r+=" "),r+=a)}else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function q(){for(var e,t,a=0,r="",n=arguments.length;a<n;a++)(e=arguments[a])&&(t=oa(e))&&(r&&(r+=" "),r+=t);return r}var de=e=>typeof e=="number"&&!isNaN(e),Y=e=>typeof e=="string",G=e=>typeof e=="function",vs=e=>Y(e)||de(e),Ze=e=>Y(e)||G(e)?e:null,xs=(e,t)=>e===!1||de(e)&&e>0?e:t,et=e=>(0,l.isValidElement)(e)||Y(e)||G(e)||de(e);function bs(e,t,a=300){let{scrollHeight:r,style:n}=e;requestAnimationFrame(()=>{n.minHeight="initial",n.height=r+"px",n.transition=`all ${a}ms`,requestAnimationFrame(()=>{n.height="0",n.padding="0",n.margin="0",setTimeout(t,a)})})}function Ie({enter:e,exit:t,appendPosition:a=!1,collapse:r=!0,collapseDuration:n=300}){return function({children:s,position:o,preventExitTransition:c,done:d,nodeRef:u,isIn:f,playToast:m}){let p=a?`${e}--${o}`:e,y=a?`${t}--${o}`:t,x=(0,l.useRef)(0);return(0,l.useLayoutEffect)(()=>{let b=u.current,g=p.split(" "),w=v=>{v.target===u.current&&(m(),b.removeEventListener("animationend",w),b.removeEventListener("animationcancel",w),x.current===0&&v.type!=="animationcancel"&&b.classList.remove(...g))};b.classList.add(...g),b.addEventListener("animationend",w),b.addEventListener("animationcancel",w)},[]),(0,l.useEffect)(()=>{let b=u.current,g=()=>{b.removeEventListener("animationend",g),r?bs(b,d,n):d()};f||(c?g():(x.current=1,b.className+=` ${y}`,b.addEventListener("animationend",g)))},[f]),l.createElement(l.Fragment,null,s)}}function Lt(e,t){return{content:la(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function la(e,t,a=!1){return(0,l.isValidElement)(e)&&!Y(e.type)?(0,l.cloneElement)(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:a}):G(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:a}):e}function ws({closeToast:e,theme:t,ariaLabel:a="close"}){return l.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),e(!0)},"aria-label":a},l.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function ks({delay:e,isRunning:t,closeToast:a,type:r="default",hide:n,className:s,controlledProgress:o,progress:c,rtl:d,isIn:u,theme:f}){let m=n||o&&c===0,p={animationDuration:`${e}ms`,animationPlayState:t?"running":"paused"};o&&(p.transform=`scaleX(${c})`);let y=q("Toastify__progress-bar",o?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":d}),x=G(s)?s({rtl:d,type:r,defaultClassName:y}):q(y,s),b={[o&&c>=1?"onTransitionEnd":"onAnimationEnd"]:o&&c<1?null:()=>{u&&a()}};return l.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":m},l.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${r}`}),l.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer","aria-valuenow":o?Math.round(c*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:x,style:p,...b}))}var _s=1,ca=()=>`${_s++}`;function Es(e,t,a){let r=1,n=0,s=[],o=[],c=t,d=new Map,u=new Set,f=v=>(u.add(v),()=>u.delete(v)),m=()=>{o=Array.from(d.values()),u.forEach(v=>v())},p=({containerId:v,toastId:h,updateId:k})=>{let S=v?v!==e:e!==1,C=d.has(h)&&k==null;return S||C},y=(v,h)=>{d.forEach(k=>{var S;(h==null||h===k.props.toastId)&&((S=k.toggle)==null||S.call(k,v))})},x=v=>{var h,k;v.isActive&&((k=(h=v.props)==null?void 0:h.onClose)==null||k.call(h,v.removalReason),v.isActive=!1,a(Lt(v,"removed")))},b=v=>{if(v==null)d.forEach(x);else{let h=d.get(v);h&&x(h)}m()},g=()=>{n-=s.length,s=[]},w=v=>{var h,k;let{toastId:S,updateId:C}=v.props,E=C==null;v.staleId&&d.delete(v.staleId),v.isActive=!0,d.set(S,v),m(),a(Lt(v,E?"added":"updated")),E&&((k=(h=v.props).onOpen)==null||k.call(h))};return{id:e,props:c,observe:f,toggle:y,removeToast:b,toasts:d,clearQueue:g,buildToast:(v,h)=>{if(p(h))return;let{toastId:k,updateId:S,data:C,staleId:E,delay:T}=h,R=S==null;R&&n++;let M={...c,style:c.toastStyle,key:r++,...Object.fromEntries(Object.entries(h).filter(([X,F])=>F!=null)),toastId:k,updateId:S,data:C,isIn:!1,className:Ze(h.className||c.toastClassName),progressClassName:Ze(h.progressClassName||c.progressClassName),autoClose:h.isLoading?!1:xs(h.autoClose,c.autoClose),closeToast(X){let F=d.get(k);F&&(F.removalReason=X,b(k))},deleteToast(){if(d.get(k)!=null){if(d.delete(k),n--,n<0&&(n=0),s.length>0){w(s.shift());return}m()}}};M.closeButton=c.closeButton,h.closeButton===!1||et(h.closeButton)?M.closeButton=h.closeButton:h.closeButton===!0&&(M.closeButton=et(c.closeButton)?c.closeButton:!0);let O={content:v,props:M,staleId:E};c.limit&&c.limit>0&&n>c.limit&&R?s.push(O):de(T)?setTimeout(()=>{w(O)},T):w(O)},setProps(v){c=v},setToggle:(v,h)=>{let k=d.get(v);k&&(k.toggle=h)},isToastActive:v=>{var h;return(h=d.get(v))==null?void 0:h.isActive},getSnapshot:()=>o}}var I=new Map,ae=[],tt=new Set,Ss=e=>tt.forEach(t=>t(e)),da=()=>I.size>0;function Ts(){ae.forEach(e=>ma(e.content,e.options)),ae=[]}var js=(e,{containerId:t})=>{var a;return(a=I.get(t||1))==null?void 0:a.toasts.get(e)};function ua(e,t){var a;if(t)return!!((a=I.get(t))!=null&&a.isToastActive(e));let r=!1;return I.forEach(n=>{n.isToastActive(e)&&(r=!0)}),r}function Cs(e){if(!da()){ae=ae.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||vs(e))I.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=I.get(e.containerId);t?t.removeToast(e.id):I.forEach(a=>{a.removeToast(e.id)})}}var Ns=(e={})=>{I.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function ma(e,t){et(e)&&(da()||ae.push({content:e,options:t}),I.forEach(a=>{a.buildToast(e,t)}))}function Rs(e){var t;(t=I.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function fa(e,t){I.forEach(a=>{(t==null||!(t!=null&&t.containerId)||t?.containerId===a.id)&&a.toggle(e,t?.id)})}function Ls(e){let t=e.containerId||1;return{subscribe(a){let r=Es(t,e,Ss);I.set(t,r);let n=r.observe(a);return Ts(),()=>{n(),I.delete(t)}},setProps(a){var r;(r=I.get(t))==null||r.setProps(a)},getSnapshot(){var a;return(a=I.get(t))==null?void 0:a.getSnapshot()}}}function Ps(e){return tt.add(e),()=>{tt.delete(e)}}function Is(e){return e&&(Y(e.toastId)||de(e.toastId))?e.toastId:ca()}function ue(e,t){return ma(e,t),t.toastId}function Me(e,t){return{...t,type:t&&t.type||e,toastId:Is(t)}}function Ae(e){return(t,a)=>ue(t,Me(e,a))}function j(e,t){return ue(e,Me("default",t))}j.loading=(e,t)=>ue(e,Me("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function Ms(e,{pending:t,error:a,success:r},n){let s;t&&(s=Y(t)?j.loading(t,n):j.loading(t.render,{...n,...t}));let o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(u,f,m)=>{if(f==null){j.dismiss(s);return}let p={type:u,...o,...n,data:m},y=Y(f)?{render:f}:f;return s?j.update(s,{...p,...y}):j(y.render,{...p,...y}),m},d=G(e)?e():e;return d.then(u=>c("success",r,u)).catch(u=>c("error",a,u)),d}j.promise=Ms;j.success=Ae("success");j.info=Ae("info");j.error=Ae("error");j.warning=Ae("warning");j.warn=j.warning;j.dark=(e,t)=>ue(e,Me("default",{theme:"dark",...t}));function As(e){Cs(e)}j.dismiss=As;j.clearWaitingQueue=Ns;j.isActive=ua;j.update=(e,t={})=>{let a=js(e,t);if(a){let{props:r,content:n}=a,s={delay:100,...r,...t,toastId:t.toastId||e,updateId:ca()};s.toastId!==e&&(s.staleId=e);let o=s.render||n;delete s.render,ue(o,s)}};j.done=e=>{j.update(e,{progress:1})};j.onChange=Ps;j.play=e=>fa(!0,e);j.pause=e=>fa(!1,e);function Ds(e){var t;let{subscribe:a,getSnapshot:r,setProps:n}=(0,l.useRef)(Ls(e)).current;n(e);let s=(t=(0,l.useSyncExternalStore)(a,r,r))==null?void 0:t.slice();function o(c){if(!s)return[];let d=new Map;return e.newestOnTop&&s.reverse(),s.forEach(u=>{let{position:f}=u.props;d.has(f)||d.set(f,[]),d.get(f).push(u)}),Array.from(d,u=>c(u[0],u[1]))}return{getToastToRender:o,isToastActive:ua,count:s?.length}}function Os(e){let[t,a]=(0,l.useState)(!1),[r,n]=(0,l.useState)(!1),s=(0,l.useRef)(null),o=(0,l.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:c,pauseOnHover:d,closeToast:u,onClick:f,closeOnClick:m}=e;Rs({id:e.toastId,containerId:e.containerId,fn:a}),(0,l.useEffect)(()=>{if(e.pauseOnFocusLoss)return p(),()=>{y()}},[e.pauseOnFocusLoss]);function p(){document.hasFocus()||w(),window.addEventListener("focus",g),window.addEventListener("blur",w)}function y(){window.removeEventListener("focus",g),window.removeEventListener("blur",w)}function x(E){if(e.draggable===!0||e.draggable===E.pointerType){v();let T=s.current;o.canCloseOnClick=!0,o.canDrag=!0,T.style.transition="none",e.draggableDirection==="x"?(o.start=E.clientX,o.removalDistance=T.offsetWidth*(e.draggablePercent/100)):(o.start=E.clientY,o.removalDistance=T.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function b(E){let{top:T,bottom:R,left:M,right:O}=s.current.getBoundingClientRect();E.pointerType==="mouse"&&e.pauseOnHover&&E.clientX>=M&&E.clientX<=O&&E.clientY>=T&&E.clientY<=R?w():g()}function g(){a(!0)}function w(){a(!1)}function v(){o.didMove=!1,document.addEventListener("pointermove",k),document.addEventListener("pointerup",S)}function h(){document.removeEventListener("pointermove",k),document.removeEventListener("pointerup",S)}function k(E){let T=s.current;if(o.canDrag&&T){o.didMove=!0,t&&w(),e.draggableDirection==="x"?o.delta=E.clientX-o.start:o.delta=E.clientY-o.start,o.start!==E.clientX&&(o.canCloseOnClick=!1);let R=e.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`;T.style.transform=`translate3d(${R},0)`,T.style.opacity=`${1-Math.abs(o.delta/o.removalDistance)}`}}function S(){h();let E=s.current;if(o.canDrag&&o.didMove&&E){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance){n(!0),e.closeToast(!0),e.collapseAll();return}E.style.transition="transform 0.2s, opacity 0.2s",E.style.removeProperty("transform"),E.style.removeProperty("opacity")}}let C={onPointerDown:x,onPointerUp:b};return c&&d&&(C.onMouseEnter=w,e.stacked||(C.onMouseLeave=g)),m&&(C.onClick=E=>{f&&f(E),o.canCloseOnClick&&u(!0)}),{playToast:g,pauseToast:w,isRunning:t,preventExitTransition:r,toastRef:s,eventHandlers:C}}var ha=typeof window<"u"?l.useLayoutEffect:l.useEffect,De=({theme:e,type:t,isLoading:a,...r})=>l.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function $s(e){return l.createElement(De,{...e},l.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function zs(e){return l.createElement(De,{...e},l.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function Bs(e){return l.createElement(De,{...e},l.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function Fs(e){return l.createElement(De,{...e},l.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function Hs(){return l.createElement("div",{className:"Toastify__spinner"})}var at={info:zs,warning:$s,success:Bs,error:Fs,spinner:Hs},Vs=e=>e in at;function Us({theme:e,type:t,isLoading:a,icon:r}){let n=null,s={theme:e,type:t};return r===!1||(G(r)?n=r({...s,isLoading:a}):(0,l.isValidElement)(r)?n=(0,l.cloneElement)(r,s):a?n=at.spinner():Vs(t)&&(n=at[t](s))),n}var Gs=e=>{let{isRunning:t,preventExitTransition:a,toastRef:r,eventHandlers:n,playToast:s}=Os(e),{closeButton:o,children:c,autoClose:d,onClick:u,type:f,hideProgressBar:m,closeToast:p,transition:y,position:x,className:b,style:g,progressClassName:w,updateId:v,role:h,progress:k,rtl:S,toastId:C,deleteToast:E,isIn:T,isLoading:R,closeOnClick:M,theme:O,ariaLabel:X}=e,F=q("Toastify__toast",`Toastify__toast-theme--${O}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":S},{"Toastify__toast--close-on-click":M}),fe=G(b)?b({rtl:S,position:x,type:f,defaultClassName:F}):q(F,b),$=Us(e),mt=!!k||!d,$e={closeToast:p,type:f,theme:O},he=null;return o===!1||(G(o)?he=o($e):(0,l.isValidElement)(o)?he=(0,l.cloneElement)(o,$e):he=ws($e)),l.createElement(y,{isIn:T,done:E,position:x,preventExitTransition:a,nodeRef:r,playToast:s},l.createElement("div",{id:C,tabIndex:0,onClick:u,"data-in":T,className:fe,...n,style:g,ref:r,...T&&{role:h,"aria-label":X}},$!=null&&l.createElement("div",{className:q("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},$),la(c,e,!t),he,!e.customProgressBar&&l.createElement(ks,{...v&&!mt?{key:`p-${v}`}:{},rtl:S,theme:O,delay:d,isRunning:t,isIn:T,closeToast:p,hide:m,type:f,className:w,controlledProgress:mt,progress:k||0})))},Oe=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),Js=Ie(Oe("bounce",!0)),$i=Ie(Oe("slide",!0)),zi=Ie(Oe("zoom")),Bi=Ie(Oe("flip")),Ws={position:"top-right",transition:Js,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:e=>e.altKey&&e.code==="KeyT"};function qs(e){let t={...Ws,...e},a=e.stacked,[r,n]=(0,l.useState)(!0),s=(0,l.useRef)(null),{getToastToRender:o,isToastActive:c,count:d}=Ds(t),{className:u,style:f,rtl:m,containerId:p,hotKeys:y}=t;function x(g){let w=q("Toastify__toast-container",`Toastify__toast-container--${g}`,{"Toastify__toast-container--rtl":m});return G(u)?u({position:g,rtl:m,defaultClassName:w}):q(w,Ze(u))}function b(){a&&(n(!0),j.play())}return ha(()=>{var g;if(a){let w=s.current.querySelectorAll('[data-in="true"]'),v=12,h=(g=t.position)==null?void 0:g.includes("top"),k=0,S=0;Array.from(w).reverse().forEach((C,E)=>{let T=C;T.classList.add("Toastify__toast--stacked"),E>0&&(T.dataset.collapsed=`${r}`),T.dataset.pos||(T.dataset.pos=h?"top":"bot");let R=k*(r?.2:1)+(r?0:v*E),M=Math.max(.5,1-(r?S:0));T.style.setProperty("--y",`${h?R:R*-1}px`),T.style.setProperty("--g",`${v}`),T.style.setProperty("--s",`${M}`),k+=T.offsetHeight,S+=.025})}},[r,d,a]),(0,l.useEffect)(()=>{function g(w){var v;let h=s.current;y(w)&&((v=h?.querySelector('[tabIndex="0"]'))==null||v.focus(),n(!1),j.pause()),w.key==="Escape"&&(document.activeElement===h||h!=null&&h.contains(document.activeElement))&&(n(!0),j.play())}return document.addEventListener("keydown",g),()=>{document.removeEventListener("keydown",g)}},[y]),l.createElement("section",{ref:s,className:"Toastify",id:p,onMouseEnter:()=>{a&&(n(!1),j.pause())},onMouseLeave:b,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},o((g,w)=>{let v=w.length?{...f}:{...f,pointerEvents:"none"};return l.createElement("div",{tabIndex:-1,className:x(g),"data-stacked":a,style:v,key:`c-${g}`},w.map(({content:h,props:k})=>l.createElement(Gs,{...k,stacked:a,collapseAll:b,isIn:c(k.toastId,k.containerId),key:`t-${k.key}`},h)))}))}var Ks=`:root {
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
`,Pt=new Map,Ys=(e,t)=>{ha(()=>{if(!e||typeof document>"u")return;let a=document,r=Pt.get(a);if(r){t&&r.setAttribute("nonce",t);return}let n=a.createElement("style");n.textContent=e,t&&n.setAttribute("nonce",t),a.head.appendChild(n),Pt.set(a,n)},[t])};function Qs(e){return Ys(Ks,e.nonce),l.createElement(qs,{...e})}var K={emailjs:{serviceId:"service_2936zzf",templateId:"template_q859oph",publicKey:"YDO5GNDdewVvMoyTz"},recaptcha:{siteKey:"6LeJDrIqAAAAAAJz4msjc88QwwlPf-Qge27d_t7a"},contact:{email:"atrenchevski@gmail.com"}},Xs=()=>{const e=["VITE_CONTACT_EMAIL","VITE_EMAILJS_SERVICE_ID","VITE_EMAILJS_TEMPLATE_ID","VITE_EMAILJS_PUBLIC_KEY","VITE_RECAPTCHA_SITE_KEY"].filter(t=>!{BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_CONTACT_EMAIL:"atrenchevski@gmail.com",VITE_EMAILJS_PUBLIC_KEY:"YDO5GNDdewVvMoyTz",VITE_EMAILJS_SERVICE_ID:"service_2936zzf",VITE_EMAILJS_TEMPLATE_ID:"template_q859oph",VITE_RECAPTCHA_SITE_KEY:"6LeJDrIqAAAAAAJz4msjc88QwwlPf-Qge27d_t7a"}[t]);if(e.length>0){const t=`Missing required environment variables: ${e.join(", ")}. Please check your .env file.`;if(typeof window<"u")throw new Error(t);console.warn(t)}},Zs=(e={})=>{const{threshold:t=.1,rootMargin:a="0px",triggerOnce:r=!0}=e,[n,s]=(0,l.useState)(!1),[o,c]=(0,l.useState)(!1),d=(0,l.useRef)(null),u=(0,l.useRef)(!1);return(0,l.useEffect)(()=>{const f=d.current;if(!f)return;const m=new IntersectionObserver(([p])=>{if(!p)return;const y=p.isIntersecting;s(y),y&&!u.current&&(u.current=!0,c(!0))},{threshold:t,rootMargin:a});return m.observe(f),()=>{m.unobserve(f),m.disconnect()}},[t,a]),{ref:d,isIntersecting:r?o:n}},ei=({onChange:e,theme:t="dark",widgetRef:a})=>{const r=K.recaptcha.siteKey,[n,s]=(0,l.useState)(!1),[o,c]=(0,l.useState)(null),{ref:d,isIntersecting:u}=Zs({rootMargin:"100px",triggerOnce:!0,threshold:.01}),f=t==="dark"?"text-white/60":"text-gray-600";return(0,l.useEffect)(()=>{!r||!u||n||(async()=>{try{const m=(await Ne(()=>import("./esm-CMT0MzpN.js"),__vite__mapDeps([0,1,2]))).default;c(()=>m),s(!0)}catch(m){console.error("Failed to load reCAPTCHA:",m)}})()},[r,u,n]),(0,i.jsx)("div",{ref:d,className:"flex flex-col items-center justify-center min-h-19.5",children:r?o?(0,i.jsx)(o,{ref:a,sitekey:r,onChange:e,theme:t}):(0,i.jsx)("div",{className:`flex items-center justify-center text-sm ${f}`,children:"Loading verification..."}):(0,i.jsx)("div",{className:`flex items-center justify-center text-sm text-center ${f}`,children:"Verification is unavailable right now."})})},It=({id:e,label:t,icon:a,type:r,value:n,error:s,onChange:o})=>(0,i.jsxs)(_.div,{className:"mb-4 sm:mb-6",variants:H,children:[(0,i.jsxs)("label",{htmlFor:e,className:`block text-sm sm:text-base font-semibold mb-2 ${le}`,children:[a,t]}),(0,i.jsx)("input",{id:e,type:r,name:e,value:n,onChange:o,"aria-invalid":s?!0:void 0,"aria-describedby":s?`${e}-error`:void 0,className:`w-full p-2 sm:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${ia(!!s)}`,required:!0}),s&&(0,i.jsx)("p",{id:`${e}-error`,className:"text-red-500 text-sm mt-1",role:"alert",children:s})]}),me=class{constructor(e=0,t="Network Error"){this.status=e,this.text=t}},ti=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},P={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:ti()},ut=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},ai=(e,t="https://api.emailjs.com")=>{if(!e)return;const a=ut(e);P.publicKey=a.publicKey,P.blockHeadless=a.blockHeadless,P.storageProvider=a.storageProvider,P.blockList=a.blockList,P.limitRate=a.limitRate,P.origin=a.origin||t},pa=async(e,t,a={})=>{const r=await fetch(P.origin+e,{method:"POST",headers:a,body:t}),n=await r.text(),s=new me(r.status,n);if(r.ok)return s;throw s},ga=(e,t,a)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||typeof a!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},ri=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},ya=e=>e.webdriver||!e.languages||e.languages.length===0,va=()=>new me(451,"Unavailable For Headless Browser"),ni=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},si=e=>!e.list?.length||!e.watchVariable,ii=(e,t)=>e instanceof FormData?e.get(t):e[t],xa=(e,t)=>{if(si(e))return!1;ni(e.list,e.watchVariable);const a=ii(t,e.watchVariable);return typeof a!="string"?!1:e.list.includes(a)},ba=()=>new me(403,"Forbidden"),oi=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},li=async(e,t,a)=>{const r=Number(await a.get(e)||0);return t-Date.now()+r},wa=async(e,t,a)=>{if(!t.throttle||!a)return!1;oi(t.throttle,t.id);const r=t.id||e;return await li(r,t.throttle,a)>0?!0:(await a.set(r,Date.now().toString()),!1)},ka=()=>new me(429,"Too Many Requests"),ci=async(e,t,a,r)=>{const n=ut(r),s=n.publicKey||P.publicKey,o=n.blockHeadless||P.blockHeadless,c=n.storageProvider||P.storageProvider,d={...P.blockList,...n.blockList},u={...P.limitRate,...n.limitRate};return o&&ya(navigator)?Promise.reject(va()):(ga(s,e,t),ri(a),a&&xa(d,a)?Promise.reject(ba()):await wa(location.pathname,u,c)?Promise.reject(ka()):pa("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:e,template_id:t,template_params:a}),{"Content-type":"application/json"}))},di=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},ui=e=>typeof e=="string"?document.querySelector(e):e,mi=async(e,t,a,r)=>{const n=ut(r),s=n.publicKey||P.publicKey,o=n.blockHeadless||P.blockHeadless,c=P.storageProvider||n.storageProvider,d={...P.blockList,...n.blockList},u={...P.limitRate,...n.limitRate};if(o&&ya(navigator))return Promise.reject(va());const f=ui(a);ga(s,e,t),di(f);const m=new FormData(f);return xa(d,m)?Promise.reject(ba()):await wa(location.pathname,u,c)?Promise.reject(ka()):(m.append("lib_version","4.4.1"),m.append("service_id",e),m.append("template_id",t),m.append("user_id",s),pa("/api/v1.0/email/send-form",m))},fi={init:ai,send:ci,sendForm:mi,EmailJSResponseStatus:me};Xs();var Ge={serviceId:K.emailjs.serviceId,templateId:K.emailjs.templateId,publicKey:K.emailjs.publicKey},hi=async(e,t)=>{try{return{success:!0,data:await fi.send(Ge.serviceId,Ge.templateId,{name:e.name,email:e.email,message:e.message,to_name:"Aleksandar Trenchevski",to_email:K.contact.email,"g-recaptcha-response":t},Ge.publicKey)}}catch(a){const r=a instanceof Error?a.message:"Failed to send email";return console.error("Email send error:",a),{success:!1,error:r}}},_a=()=>({position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),ye=e=>{j.error(e,_a())},pi=e=>{j.success(e,_a())},gi=()=>{const[e,t]=(0,l.useState)({name:"",email:"",message:""}),[a,r]=(0,l.useState)(!1),[n,s]=(0,l.useState)(null),o=(0,l.useRef)(null),[c,d]=(0,l.useState)(!1),[u,f]=(0,l.useState)(!1),[m,p]=(0,l.useState)({}),y=()=>{const h={},E=e.name.trim(),T=e.email.trim(),R=e.message.trim();return E?E.length<2&&(h.name="Name must be at least 2 characters"):h.name="Name is required",T?(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(T)||T.length>254)&&(h.email="Please enter a valid email address"):h.email="Email is required",R?R.length<10?h.message="Message must be at least 10 characters":R.length>5e3&&(h.message="Message cannot exceed 5000 characters"):h.message="Message is required",p(h),Object.keys(h).length===0},x=h=>{const{name:k,value:S}=h.target;t(C=>({...C,[k]:S})),m[k]&&p(C=>({...C,[k]:""}))},b=h=>{s(h)},g=()=>{o.current?.reset(),s(null)};return{formData:e,errors:m,submitted:a,showMessage:c,isSubmitting:u,recaptchaRef:o,handleInputChange:x,handleCaptchaChange:b,handleSubmit:async h=>{if(h.preventDefault(),!y()){ye("Please fix the form errors before submitting.");return}if(!n){ye("Please complete the CAPTCHA to proceed.");return}f(!0);try{const k=await hi(e,n);k.success?(r(!0),d(!0),pi("Message sent successfully! I'll get back to you soon.")):(g(),ye(`Failed to send message: ${k.error}. Please try again or contact me directly.`))}catch(k){console.error("Form submission error:",k),g(),ye("An unexpected error occurred. Please try again.")}finally{f(!1)}},handleReset:()=>{t({name:"",email:"",message:""}),p({}),g(),r(!1),d(!1)}}},yi=()=>{const{darkMode:e}=ra(),{formData:t,errors:a,submitted:r,showMessage:n,isSubmitting:s,recaptchaRef:o,handleInputChange:c,handleCaptchaChange:d,handleSubmit:u,handleReset:f}=gi();return(0,i.jsxs)(_.section,{className:`p-6 sm:p-8 md:p-10 lg:p-16 rounded-lg shadow-lg max-w-4xl mx-auto my-8 md:my-12 ${J}`,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{staggerChildren:.2},children:[(0,i.jsx)(Qs,{theme:e?"dark":"light"}),(0,i.jsx)(_.h2,{className:`text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center ${Le}`,variants:H,children:"Get In Touch"}),(0,i.jsxs)(_.p,{className:"text-base sm:text-lg lg:text-xl text-center mb-8 sm:mb-10 p-4 rounded-lg bg-gray-50 text-gray-600 dark:bg-[#241041] dark:text-white",variants:H,children:["Feel free to contact me directly at"," ",(0,i.jsx)("a",{href:`mailto:${K.contact.email}`,className:`font-semibold ${Pe}`,children:K.contact.email})," ","or by filling out the form below. I'll get back to you as soon as I can."]}),n&&(0,i.jsxs)(_.div,{className:"text-center p-4 sm:p-6 rounded-lg shadow-md max-w-md mx-auto flex flex-col items-center justify-center bg-green-50 border-green-400 dark:bg-green-900 dark:border-green-600",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5},role:"status","aria-live":"polite",children:[(0,i.jsx)(Fn,{className:"text-4xl mb-4 text-green-500 dark:text-green-400","aria-hidden":"true"}),(0,i.jsx)("span",{className:"text-base sm:text-lg font-semibold mb-2 text-gray-900 dark:text-white",children:"Thank you! Your message has been sent successfully."}),(0,i.jsx)("button",{type:"button",onClick:f,className:"mt-4 px-6 py-2 rounded-full font-semibold transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 bg-black text-white hover:bg-gray-800 focus:ring-fuchsia-500 dark:bg-purple-800 dark:hover:bg-purple-700 dark:focus:ring-cyan-400",children:"Send another message"})]}),!r&&(0,i.jsxs)(_.form,{onSubmit:m=>{u(m)},className:"max-w-lg w-full p-6 sm:p-8 rounded-lg shadow-md mx-auto bg-white dark:bg-[#160a2e] dark:text-white dark:border dark:border-cyan-500/15",initial:"hidden",animate:"visible",variants:H,noValidate:!0,children:[(0,i.jsx)(It,{id:"name",label:"Your Name",icon:(0,i.jsx)(An,{className:"text-gray-500 mr-2 text-lg","aria-hidden":"true"}),type:"text",value:t.name,error:a.name,onChange:c}),(0,i.jsx)(It,{id:"email",label:"Your Email",icon:(0,i.jsx)($n,{className:"text-gray-500 mr-2 text-lg","aria-hidden":"true"}),type:"email",value:t.email,error:a.email,onChange:c}),(0,i.jsxs)(_.div,{className:"mb-4 sm:mb-6",variants:H,children:[(0,i.jsxs)("label",{htmlFor:"message",className:"block text-sm sm:text-base font-semibold mb-2 text-gray-700 dark:text-white",children:[(0,i.jsx)(Bn,{className:"text-gray-500 mr-2 text-lg","aria-hidden":"true"}),"Your Message"]}),(0,i.jsx)("textarea",{id:"message",name:"message",value:t.message,onChange:c,maxLength:5e3,"aria-invalid":a.message?!0:void 0,"aria-describedby":a.message?"message-error":void 0,className:`w-full p-2 sm:p-3 h-24 sm:h-32 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${ia(!!a.message)}`,required:!0}),(0,i.jsxs)("div",{className:"mt-1 flex items-center justify-between",children:[a.message?(0,i.jsx)("p",{id:"message-error",className:"text-red-500 text-sm",role:"alert",children:a.message}):(0,i.jsx)("span",{}),(0,i.jsxs)("span",{className:"text-xs text-gray-500 dark:text-gray-300","aria-live":"polite",children:[t.message.length,"/5000"]})]})]}),(0,i.jsxs)(_.div,{className:"flex flex-col items-center justify-center",variants:H,children:[(0,i.jsx)(ei,{widgetRef:o,onChange:d,theme:e?"dark":"light"}),(0,i.jsxs)(_.button,{type:"submit",disabled:s,className:`mt-6 px-6 py-3 rounded-full font-semibold transition flex items-center justify-center space-x-2 select-none ${s?"bg-gray-400 text-gray-600 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400":"bg-black text-white hover:bg-gray-800 dark:bg-fuchsia-700 dark:hover:bg-fuchsia-600 dark:shadow-[0_0_20px_rgba(217,70,239,0.35)] cursor-pointer"}`,variants:H,"aria-busy":s,children:[s&&(0,i.jsx)(_.div,{className:"w-4 h-4 border-2 border-current border-t-transparent rounded-full",animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},"aria-hidden":"true"}),(0,i.jsx)("span",{children:s?"Sending...":"Send Message"})]})]})]})]})},vi=()=>{const[e,t]=(0,l.useState)(!1),a=(0,l.useRef)(null),r=()=>{a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{t(window.scrollY>100)},150)},n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(0,l.useEffect)(()=>(window.addEventListener("scroll",r,{passive:!0}),()=>{window.removeEventListener("scroll",r),a.current&&clearTimeout(a.current)}),[]),(0,i.jsx)(Je,{children:e&&(0,i.jsx)(_.button,{onClick:n,className:"fixed bottom-8 right-6 sm:bottom-10 sm:right-8 md:bottom-12 md:right-10 lg:bottom-16 lg:right-10 text-[#0d0221] rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center shadow-lg cursor-pointer",title:"Back to Top","aria-label":"Back to top",initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},transition:{type:"spring",stiffness:300,damping:20},style:{background:"var(--accent)"},whileHover:{scale:1.2},children:(0,i.jsx)(Hn,{"aria-hidden":"true"})})})};function xi(e){return L({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(e)}function bi(e){return L({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"},child:[]}]})(e)}function wi(e){return L({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"},child:[]}]})(e)}var ki=()=>(0,i.jsxs)("footer",{className:`p-4 text-center ${Le}`,children:[(0,i.jsxs)("p",{className:"text-xs sm:text-base",children:["© Aleksandar Trenchevski ",new Date().getFullYear(),". All rights reserved."]}),(0,i.jsxs)("div",{className:"mt-4",children:[(0,i.jsx)("span",{className:"text-xs sm:text-sm",children:"Built with:"}),(0,i.jsxs)("div",{className:"flex justify-center items-center mt-2 space-x-2 sm:space-x-4 text-xs sm:text-sm",children:[(0,i.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,i.jsx)(Pn,{className:"text-blue-500"}),(0,i.jsx)("span",{children:"React"})]}),(0,i.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,i.jsx)(bi,{className:"text-blue-400"}),(0,i.jsx)("span",{children:"Tailwind CSS"})]}),(0,i.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,i.jsx)(wi,{className:"text-pink-500"}),(0,i.jsx)("span",{children:"Motion"})]}),(0,i.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,i.jsx)(xi,{className:"text-blue-600"}),(0,i.jsx)("span",{children:"TypeScript"})]})]})]})]}),_i=()=>(0,i.jsxs)("div",{className:"text-gray-900 bg-linear-to-br from-amber-300 via-pink-400 to-purple-400 dark:text-white dark:from-[#0d0221] dark:via-[#2a0a4a] dark:to-[#0d0221]",children:[(0,i.jsx)("a",{href:"#home",className:"sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-black focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400",children:"Skip to content"}),(0,i.jsx)(qn,{}),(0,i.jsx)("section",{id:"home",className:"p-8",children:(0,i.jsx)(Qn,{})}),(0,i.jsx)("section",{id:"about",className:"p-8",children:(0,i.jsx)(Zn,{})}),(0,i.jsx)("section",{id:"experience",className:"p-8",children:(0,i.jsx)(ts,{})}),(0,i.jsx)("section",{id:"education",className:"p-8",children:(0,i.jsx)(rs,{})}),(0,i.jsx)("section",{id:"skills",className:"p-8",children:(0,i.jsx)(os,{})}),(0,i.jsx)("section",{id:"certificates",className:"p-8",children:(0,i.jsx)(cs,{})}),(0,i.jsx)("section",{id:"projects",className:"p-8",children:(0,i.jsx)(ps,{})}),(0,i.jsx)("section",{id:"languages",className:"p-8",children:(0,i.jsx)(ys,{})}),(0,i.jsx)("section",{id:"contact",className:"p-8",children:(0,i.jsx)(yi,{})}),(0,i.jsx)(vi,{}),(0,i.jsx)(ki,{})]}),Ei=class extends l.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("Error caught by Error Boundary:",e,t)}handleReset=()=>{this.setState({hasError:!1,error:null})};render(){return this.state.hasError?(0,i.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-linear-to-r from-red-500 to-red-700 p-4",role:"alert","aria-live":"assertive",children:(0,i.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center",children:[(0,i.jsx)("h2",{className:"text-2xl font-bold text-red-600 mb-4",children:"Oops! Something went wrong"}),(0,i.jsx)("p",{className:"text-gray-600 mb-4",children:"We're sorry for the inconvenience. Please try refreshing the page or contact support if the problem persists."}),this.state.error&&(0,i.jsxs)("details",{className:"text-left mb-6",children:[(0,i.jsx)("summary",{className:"cursor-pointer text-sm text-gray-500 hover:text-gray-700",children:"Error details"}),(0,i.jsx)("pre",{className:"mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto max-h-32",children:this.state.error.toString()})]}),(0,i.jsx)("button",{onClick:this.handleReset,className:"bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition",children:"Try Again"})]})}):this.props.children}},Si=(0,l.lazy)(()=>Ne(()=>import("./NotFound-ByZ9d9uu.js"),__vite__mapDeps([3,2,1]))),Ti=(0,l.lazy)(()=>Ne(()=>import("./Cv-DK6z7fvv.js"),__vite__mapDeps([4,2,1]))),ji=()=>{const[e,t]=(0,l.useState)(!0),a=()=>{t(!1)};return(0,i.jsx)(Ei,{children:(0,i.jsx)(Na,{reducedMotion:"user",children:(0,i.jsx)(La,{children:(0,i.jsx)(dn,{children:(0,i.jsxs)("div",{className:"App",children:[e&&(0,i.jsx)(En,{onComplete:a}),!e&&(0,i.jsx)(l.Suspense,{fallback:null,children:(0,i.jsxs)(Mr,{children:[(0,i.jsx)(ve,{path:"/",element:(0,i.jsx)(_i,{})}),(0,i.jsx)(ve,{path:"/cv",element:(0,i.jsx)(Ti,{})}),(0,i.jsx)(ve,{path:"*",element:(0,i.jsx)(Si,{})})]})})]})})})})})};(0,Ra.createRoot)(document.getElementById("root")).render((0,i.jsx)(l.StrictMode,{children:(0,i.jsx)(ji,{})}));export{Nt as a,Xn as c,jt as d,Oi as f,ke as g,zn as h,ns as i,Pe as l,Di as m,gs as n,as as o,Un as p,ls as r,es as s,K as t,J as u};
