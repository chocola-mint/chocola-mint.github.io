import{U as I,a2 as _e,a3 as pe,a4 as de,S as Y,i as Z,s as U,e as b,b as C,d as M,f as V,g as k,h as v,F as P,G as W,H as w,I as X,v as $,w as R,a1 as z,J as x,k as ee,l as te,m as ne,a5 as j,P as N,K as se,L as le,M as oe,D as B,Q as ie,R as re,x as q,y as F,z as he,A as G,E as H,B as J,C as ge,T as be,Z as ve}from"./index.2ddac10f.js";function K(i){return Object.entries(i).filter(([e,n])=>e!==""&&n).map(([e])=>e).join(" ")}const L=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,Ee=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function ae(i){let e,n=[];i.$on=(t,o)=>{let a=t,l=()=>{};return e?l=e(a,o):n.push([a,o]),a.match(L)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',a),()=>{l()}};function s(t){_e(i,t)}return t=>{const o=[],a={};e=(l,r)=>{let u=l,f=r,c=!1;const E=u.match(L),y=u.match(Ee),O=E||y;if(u.match(/^SMUI:\w+:/)){const p=u.split(":");let d="";for(let h=0;h<p.length;h++)d+=h===p.length-1?":"+p[h]:p[h].split("-").map(m=>m.slice(0,1).toUpperCase()+m.slice(1)).join("");console.warn(`The event ${u.split("$")[0]} has been renamed to ${d.split("$")[0]}.`),u=d}if(O){const p=u.split(E?":":"$");u=p[0];const d=p.slice(1).reduce((h,m)=>(h[m]=!0,h),{});d.passive&&(c=c||{},c.passive=!0),d.nonpassive&&(c=c||{},c.passive=!1),d.capture&&(c=c||{},c.capture=!0),d.once&&(c=c||{},c.once=!0),d.preventDefault&&(f=pe(f)),d.stopPropagation&&(f=de(f))}const _=I(t,u,f,c),A=()=>{_();const p=o.indexOf(A);p>-1&&o.splice(p,1)};return o.push(A),u in a||(a[u]=I(t,u,s)),A};for(let l=0;l<n.length;l++)e(n[l][0],n[l][1]);return{destroy:()=>{for(let l=0;l<o.length;l++)o[l]();for(let l of Object.entries(a))l[1]()}}}}function ue(i,e){let n=[];if(e)for(let s=0;s<e.length;s++){const t=e[s],o=Array.isArray(t)?t[0]:t;Array.isArray(t)&&t.length>1?n.push(o(i,t[1])):n.push(o(i))}return{update(s){if((s&&s.length||0)!=n.length)throw new Error("You must not change the length of an actions array.");if(s)for(let t=0;t<s.length;t++){const o=n[t];if(o&&o.update){const a=s[t];Array.isArray(a)&&a.length>1?o.update(a[1]):o.update()}}},destroy(){for(let s=0;s<n.length;s++){const t=n[s];t&&t.destroy&&t.destroy()}}}}function ye(i){let e=i[1],n,s,t=i[1]&&S(i);return{c(){t&&t.c(),n=b()},l(o){t&&t.l(o),n=b()},m(o,a){t&&t.m(o,a),C(o,n,a),s=!0},p(o,a){o[1]?e?U(e,o[1])?(t.d(1),t=S(o),e=o[1],t.c(),t.m(n.parentNode,n)):t.p(o,a):(t=S(o),e=o[1],t.c(),t.m(n.parentNode,n)):e&&(t.d(1),t=null,e=o[1])},i(o){s||(k(t),s=!0)},o(o){M(t),s=!1},d(o){o&&v(n),t&&t.d(o)}}}function Me(i){let e=i[1],n,s=i[1]&&T(i);return{c(){s&&s.c(),n=b()},l(t){s&&s.l(t),n=b()},m(t,o){s&&s.m(t,o),C(t,n,o)},p(t,o){t[1]?e?U(e,t[1])?(s.d(1),s=T(t),e=t[1],s.c(),s.m(n.parentNode,n)):s.p(t,o):(s=T(t),e=t[1],s.c(),s.m(n.parentNode,n)):e&&(s.d(1),s=null,e=t[1])},i:z,o:z,d(t){t&&v(n),s&&s.d(t)}}}function S(i){let e,n,s,t,o;const a=i[8].default,l=x(a,i,i[7],null);let r=[i[5]],u={};for(let f=0;f<r.length;f+=1)u=w(u,r[f]);return{c(){e=ee(i[1]),l&&l.c(),this.h()},l(f){e=te(f,(i[1]||"null").toUpperCase(),{});var c=ne(e);l&&l.l(c),c.forEach(v),this.h()},h(){j(i[1])(e,u)},m(f,c){C(f,e,c),l&&l.m(e,null),i[10](e),s=!0,t||(o=[N(n=ue.call(null,e,i[0])),N(i[4].call(null,e))],t=!0)},p(f,c){l&&l.p&&(!s||c&128)&&se(l,a,f,f[7],s?oe(a,f[7],c,null):le(f[7]),null),j(f[1])(e,u=B(r,[c&32&&f[5]])),n&&ie(n.update)&&c&1&&n.update.call(null,f[0])},i(f){s||(k(l,f),s=!0)},o(f){M(l,f),s=!1},d(f){f&&v(e),l&&l.d(f),i[10](null),t=!1,re(o)}}}function T(i){let e,n,s,t,o=[i[5]],a={};for(let l=0;l<o.length;l+=1)a=w(a,o[l]);return{c(){e=ee(i[1]),this.h()},l(l){e=te(l,(i[1]||"null").toUpperCase(),{}),ne(e).forEach(v),this.h()},h(){j(i[1])(e,a)},m(l,r){C(l,e,r),i[9](e),s||(t=[N(n=ue.call(null,e,i[0])),N(i[4].call(null,e))],s=!0)},p(l,r){j(l[1])(e,a=B(o,[r&32&&l[5]])),n&&ie(n.update)&&r&1&&n.update.call(null,l[0])},d(l){l&&v(e),i[9](null),s=!1,re(t)}}}function ke(i){let e,n,s,t;const o=[Me,ye],a=[];function l(r,u){return r[3]?0:1}return e=l(i),n=a[e]=o[e](i),{c(){n.c(),s=b()},l(r){n.l(r),s=b()},m(r,u){a[e].m(r,u),C(r,s,u),t=!0},p(r,[u]){let f=e;e=l(r),e===f?a[e].p(r,u):($(),M(a[f],1,1,()=>{a[f]=null}),V(),n=a[e],n?n.p(r,u):(n=a[e]=o[e](r),n.c()),k(n,1),n.m(s.parentNode,s))},i(r){t||(k(n),t=!0)},o(r){M(n),t=!1},d(r){a[e].d(r),r&&v(s)}}}function we(i,e,n){let s;const t=["use","tag","getElement"];let o=P(e,t),{$$slots:a={},$$scope:l}=e,{use:r=[]}=e,{tag:u}=e;const f=ae(W());let c;function E(){return c}function y(_){R[_?"unshift":"push"](()=>{c=_,n(2,c)})}function O(_){R[_?"unshift":"push"](()=>{c=_,n(2,c)})}return i.$$set=_=>{e=w(w({},e),X(_)),n(5,o=P(e,t)),"use"in _&&n(0,r=_.use),"tag"in _&&n(1,u=_.tag),"$$scope"in _&&n(7,l=_.$$scope)},i.$$.update=()=>{i.$$.dirty&2&&n(3,s=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"].indexOf(u)>-1)},[r,u,c,s,f,o,E,l,a,y,O]}class fe extends Y{constructor(e){super(),Z(this,e,we,ke,U,{use:0,tag:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}function Ae(i){let e;const n=i[11].default,s=x(n,i,i[13],null);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,o){s&&s.m(t,o),e=!0},p(t,o){s&&s.p&&(!e||o&8192)&&se(s,n,t,t[13],e?oe(n,t[13],o,null):le(t[13]),null)},i(t){e||(k(s,t),e=!0)},o(t){M(s,t),e=!1},d(t){s&&s.d(t)}}}function Ce(i){let e,n,s;const t=[{tag:i[3]},{use:[i[8],...i[0]]},{class:K({[i[1]]:!0,[i[6]]:!0,...i[5]})},i[7],i[9]];var o=i[2];function a(l){let r={$$slots:{default:[Ae]},$$scope:{ctx:l}};for(let u=0;u<t.length;u+=1)r=w(r,t[u]);return{props:r}}return o&&(e=q(o,a(i)),i[12](e)),{c(){e&&F(e.$$.fragment),n=b()},l(l){e&&he(e.$$.fragment,l),n=b()},m(l,r){e&&G(e,l,r),C(l,n,r),s=!0},p(l,[r]){const u=r&1003?B(t,[r&8&&{tag:l[3]},r&257&&{use:[l[8],...l[0]]},r&98&&{class:K({[l[1]]:!0,[l[6]]:!0,...l[5]})},r&128&&H(l[7]),r&512&&H(l[9])]):{};if(r&8192&&(u.$$scope={dirty:r,ctx:l}),r&4&&o!==(o=l[2])){if(e){$();const f=e;M(f.$$.fragment,1,0,()=>{J(f,1)}),V()}o?(e=q(o,a(l)),l[12](e),F(e.$$.fragment),k(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else o&&e.$set(u)},i(l){s||(e&&k(e.$$.fragment,l),s=!0)},o(l){e&&M(e.$$.fragment,l),s=!1},d(l){i[12](null),l&&v(n),e&&J(e,l)}}}const g={component:fe,tag:"div",class:"",classMap:{},contexts:{},props:{}};function Oe(i,e,n){const s=["use","class","component","tag","getElement"];let t=P(e,s),{$$slots:o={},$$scope:a}=e,{use:l=[]}=e,{class:r=""}=e,u;const f=g.class,c={},E=[],y=g.contexts,O=g.props;let{component:_=g.component}=e,{tag:A=_===fe?g.tag:void 0}=e;Object.entries(g.classMap).forEach(([m,ce])=>{const D=ge(ce);D&&"subscribe"in D&&E.push(D.subscribe(me=>{n(5,c[m]=me,c)}))});const p=ae(W());for(let m in y)y.hasOwnProperty(m)&&be(m,y[m]);ve(()=>{for(const m of E)m()});function d(){return u.getElement()}function h(m){R[m?"unshift":"push"](()=>{u=m,n(4,u)})}return i.$$set=m=>{e=w(w({},e),X(m)),n(9,t=P(e,s)),"use"in m&&n(0,l=m.use),"class"in m&&n(1,r=m.class),"component"in m&&n(2,_=m.component),"tag"in m&&n(3,A=m.tag),"$$scope"in m&&n(13,a=m.$$scope)},[l,r,_,A,u,c,f,O,p,t,d,o,h,a]}class Pe extends Y{constructor(e){super(),Z(this,e,Oe,Ce,U,{use:0,class:1,component:2,tag:3,getElement:10})}get getElement(){return this.$$.ctx[10]}}const Q=Object.assign({},g);function Ne(i){return new Proxy(Pe,{construct:function(e,n){return Object.assign(g,Q,i),new e(...n)},get:function(e,n){return Object.assign(g,Q,i),e[n]}})}export{fe as S,Ne as a,K as c,ae as f,ue as u};
