(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t){},"2mXy":function(e,t,n){"use strict";n.r(t),n.d(t,"render",(function(){return M})),n.d(t,"hydrate",(function(){return F})),n.d(t,"createElement",(function(){return v})),n.d(t,"h",(function(){return v})),n.d(t,"Fragment",(function(){return y})),n.d(t,"createRef",(function(){return g})),n.d(t,"isValidElement",(function(){return o})),n.d(t,"Component",(function(){return E})),n.d(t,"cloneElement",(function(){return K})),n.d(t,"createContext",(function(){return B})),n.d(t,"toChildArray",(function(){return S})),n.d(t,"_unmount",(function(){return D})),n.d(t,"options",(function(){return r}));var r,o,i,s,a,u,c,l,d={},p=[],_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function f(e,t){for(var n in t)e[n]=t[n];return e}function h(e){var t=e.parentNode;t&&t.removeChild(e)}function v(e,t,n){var r,o=arguments,i={};for(r in t)"key"!==r&&"ref"!==r&&(i[r]=t[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(i.children=n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===i[r]&&(i[r]=e.defaultProps[r]);return m(e,i,t&&t.key,t&&t.ref,null)}function m(e,t,n,o,i){var s={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i};return null==i&&(s.__v=s),r.vnode&&r.vnode(s),s}function g(){return{}}function y(e){return e.children}function E(e,t){this.props=e,this.context=t}function b(e,t){if(null==t)return e.__?b(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?b(e):null}function N(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return N(e)}}function C(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!s++||u!==r.debounceRendering)&&((u=r.debounceRendering)||a)(w)}function w(){for(var e;s=i.length;)e=i.sort((function(e,t){return e.__v.__b-t.__v.__b})),i=[],e.some((function(e){var t,n,r,o,i,s,a;e.__d&&(s=(i=(t=e).__v).__e,(a=t.__P)&&(n=[],(r=f({},i)).__v=r,o=T(a,i,r,t.__n,void 0!==a.ownerSVGElement,null,n,null==s?b(i):s),R(n,i),o!=s&&N(i)))}))}function I(e,t,n,r,o,i,s,a,u){var c,l,_,f,v,m,g,y=n&&n.__k||p,E=y.length;if(a==d&&(a=null!=i?i[0]:E?b(n,0):null),c=0,t.__k=S(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(_=y[c])||_&&n.key==_.key&&n.type===_.type)y[c]=void 0;else for(l=0;l<E;l++){if((_=y[l])&&n.key==_.key&&n.type===_.type){y[l]=void 0;break}_=null}if(f=T(e,n,_=_||d,r,o,i,s,a,u),(l=n.ref)&&_.ref!=l&&(g||(g=[]),_.ref&&g.push(_.ref,null,n),g.push(l,n.__c||f,n)),null!=f){var p;if(null==m&&(m=f),void 0!==n.__d)p=n.__d,n.__d=void 0;else if(i==_||f!=a||null==f.parentNode){e:if(null==a||a.parentNode!==e)e.appendChild(f),p=null;else{for(v=a,l=0;(v=v.nextSibling)&&l<E;l+=2)if(v==f)break e;e.insertBefore(f,a),p=a}"option"==t.type&&(e.value="")}a=void 0!==p?p:f.nextSibling,"function"==typeof t.type&&(t.__d=a)}else a&&_.__e==a&&a.parentNode!=e&&(a=b(_))}return c++,n})),t.__e=m,null!=i&&"function"!=typeof t.type)for(c=i.length;c--;)null!=i[c]&&h(i[c]);for(c=E;c--;)null!=y[c]&&D(y[c],y[c]);if(g)for(c=0;c<g.length;c++)U(g[c],g[++c],g[++c])}function S(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)S(e[r],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?m(null,e,null,null,e):null!=e.__e||null!=e.__c?m(e.type,e.props,e.key,null,e.__v):e):e);return n}function A(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===_.test(t)?n+"px":null==n?"":n}function O(e,t,n,r,o){var i,s,a,u,c;if(o?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(i=e.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(u in r)n&&u in n||A(i,u,"");if(n)for(c in n)r&&n[c]===r[c]||A(i,c,n[c])}else"o"===t[0]&&"n"===t[1]?(s=t!==(t=t.replace(/Capture$/,"")),a=t.toLowerCase(),t=(a in e?a:t).slice(2),n?(r||e.addEventListener(t,k,s),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,k,s)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function k(e){this.l[e.type](r.event?r.event(e):e)}function T(e,t,n,o,i,s,a,u,c){var l,d,p,_,h,v,m,g,b,N,C=t.type;if(void 0!==t.constructor)return null;(l=r.__b)&&l(t);try{e:if("function"==typeof C){if(g=t.props,b=(l=C.contextType)&&o[l.__c],N=l?b?b.props.value:l.__:o,n.__c?m=(d=t.__c=n.__c).__=d.__E:("prototype"in C&&C.prototype.render?t.__c=d=new C(g,N):(t.__c=d=new E(g,N),d.constructor=C,d.render=x),b&&b.sub(d),d.props=g,d.state||(d.state={}),d.context=N,d.__n=o,p=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=C.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=f({},d.__s)),f(d.__s,C.getDerivedStateFromProps(g,d.__s))),_=d.props,h=d.state,p)null==C.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==C.getDerivedStateFromProps&&g!==_&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(g,N),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(g,d.__s,N)||t.__v===n.__v&&!d.__){for(d.props=g,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,d.__h.length&&a.push(d),l=0;l<t.__k.length;l++)t.__k[l]&&(t.__k[l].__=t);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(g,d.__s,N),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(_,h,v)}))}d.context=N,d.props=g,d.state=d.__s,(l=r.__r)&&l(t),d.__d=!1,d.__v=t,d.__P=e,l=d.render(d.props,d.state,d.context),t.__k=null!=l&&l.type==y&&null==l.key?l.props.children:Array.isArray(l)?l:[l],null!=d.getChildContext&&(o=f(f({},o),d.getChildContext())),p||null==d.getSnapshotBeforeUpdate||(v=d.getSnapshotBeforeUpdate(_,h)),I(e,t,n,o,i,s,a,u,c),d.base=t.__e,d.__h.length&&a.push(d),m&&(d.__E=d.__=null),d.__e=!1}else null==s&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=P(n.__e,t,n,o,i,s,a,c);(l=r.diffed)&&l(t)}catch(e){t.__v=null,r.__e(e,t,n)}return t.__e}function R(e,t){r.__c&&r.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){r.__e(e,t.__v)}}))}function P(e,t,n,r,o,i,s,a){var u,c,l,_,f,h=n.props,v=t.props;if(o="svg"===t.type||o,null!=i)for(u=0;u<i.length;u++)if(null!=(c=i[u])&&((null===t.type?3===c.nodeType:c.localName===t.type)||e==c)){e=c,i[u]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),i=null,a=!1}if(null===t.type)h!==v&&e.data!=v&&(e.data=v);else{if(null!=i&&(i=p.slice.call(e.childNodes)),l=(h=n.props||d).dangerouslySetInnerHTML,_=v.dangerouslySetInnerHTML,!a){if(h===d)for(h={},f=0;f<e.attributes.length;f++)h[e.attributes[f].name]=e.attributes[f].value;(_||l)&&(_&&l&&_.__html==l.__html||(e.innerHTML=_&&_.__html||""))}(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||O(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||O(e,i,t[i],n[i],r)})(e,v,h,o,a),_?t.__k=[]:(t.__k=t.props.children,I(e,t,n,r,"foreignObject"!==t.type&&o,i,s,d,a)),a||("value"in v&&void 0!==(u=v.value)&&u!==e.value&&O(e,"value",u,h.value,!1),"checked"in v&&void 0!==(u=v.checked)&&u!==e.checked&&O(e,"checked",u,h.checked,!1))}return e}function U(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){r.__e(e,n)}}function D(e,t,n){var o,i,s;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||U(o,null,t)),n||"function"==typeof e.type||(n=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(s=0;s<o.length;s++)o[s]&&D(o[s],t,n);null!=i&&h(i)}function x(e,t,n){return this.constructor(e,n)}function M(e,t,n){var o,i,s;r.__&&r.__(e,t),i=(o=n===c)?null:n&&n.__k||t.__k,e=v(y,null,[e]),s=[],T(t,(o?t:n||t).__k=e,i||d,d,void 0!==t.ownerSVGElement,n&&!o?[n]:i?null:p.slice.call(t.childNodes),s,n||d,o),R(s,e)}function F(e,t){M(e,t,c)}function K(e,t){var n,r;for(r in t=f(f({},e.props),t),arguments.length>2&&(t.children=p.slice.call(arguments,2)),n={},t)"key"!==r&&"ref"!==r&&(n[r]=t[r]);return m(e.type,n,t.key||e.key,t.ref||e.ref,null)}function B(e){var t={},n={__c:"__cC"+l++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return t[n.__c]=o,t},this.shouldComponentUpdate=function(e){o.props.value!==e.value&&r.some((function(t){t.context=e.value,C(t)}))},this.sub=function(e){r.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){r.splice(r.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}r={__e:function(e,t){for(var n,r;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(e)),r)return C(n.__E=n)}catch(t){e=t}throw e}},o=function(e){return null!=e&&void 0===e.constructor},E.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=f({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&f(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),C(this))},E.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),C(this))},E.prototype.render=y,i=[],s=0,a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,c=d,l=0},"36aJ":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=function(e){var t=e.currentWallet,n=e.selectedWallet;return t?'\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    We have detected that you already have\n    <b>'.concat(t,"</b>\n    installed. If you would prefer to use\n    <b>").concat(n,'</b>\n    instead, then click below to install.\n    </p>\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    <b>Tip:</b>\n    If you already have ').concat(n,' installed, check your\n    browser extension settings to make sure that you have it enabled\n    and that you have disabled any other browser extension wallets.\n    <span\n      class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick="window.location.reload();">\n      Then refresh the page.\n    </span>\n    </p>\n    '):'\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    You\'ll need to install <b>'.concat(n,'</b> to continue. Once you have it installed, go ahead and\n    <span\n    class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick={window.location.reload();}>\n      refresh the page.\n    </span>\n    ').concat("Opera"===n?'<br><br><i>Hint: If you already have Opera installed, make sure that your web3 wallet is <a style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;" class="bn-onboard-clickable" href="https://help.opera.com/en/touch/crypto-wallet/" rel="noreferrer noopener" target="_blank">enabled</a></i>':"","\n    </p>\n    ")},o=function(e){var t=e.selectedWallet;return'\n  <p style="font-size: 0.889rem;">\n    You\'ll need to install <b>'.concat(t,"</b> to continue. Click below to install and then load this Dapp with <b>").concat(t,"</b>.\n  </p>\n  ")}},"9AHY":function(e,t,n){const r=n("Y+ai"),o=n("NIKR").rpc.internal,{EthereumRpcError:i}=n("9Xsl"),s={code:o,message:a(o)};function a(e,t="Unspecified error message. This is a bug, please report it."){if(Number.isInteger(e)){const t=e.toString();if(r[t])return r[t].message;if(c(e))return"Unspecified server error."}return t}function u(e){if(!Number.isInteger(e))return!1;const t=e.toString();return!!r[t]||!!c(e)}function c(e){return e>=-32099&&e<=-32e3}function l(e){return e&&"object"==typeof e&&!Array.isArray(e)?Object.assign({},e):e}e.exports={getMessageFromCode:a,isValidCode:u,serializeError:function(e,t=s){if(!t||!Number.isInteger(t.code)||"string"!=typeof t.message)throw new Error("fallbackError must contain integer number code and string message.");if(e instanceof i)return e.serialize();const n={};return e&&u(e.code)?(n.code=e.code,e.message&&"string"==typeof e.message?(n.message=e.message,e.hasOwnProperty("data")&&(n.data=e.data)):(n.message=a(n.code),n.data={originalError:l(e)})):(n.code=t.code,n.message=e&&e.message?e.message:t.message,n.data={originalError:l(e)}),e&&e.stack&&(n.stack=e.stack),n},JSON_RPC_SERVER_ERROR_MESSAGE:"Unspecified server error."}},"9Xsl":function(e,t,n){const r=n("N1pS");class o extends Error{constructor(e,t,n){if(!Number.isInteger(e))throw new Error('"code" must be an integer.');if(!t||"string"!=typeof t)throw new Error('"message" must be a nonempty string.');super(t),this.code=e,void 0!==n&&(this.data=n)}serialize(){const e={code:this.code,message:this.message};return void 0!==this.data&&(e.data=this.data),this.stack&&(e.stack=this.stack),e}toString(){return r(this.serialize(),i,2)}}function i(e,t){if("[Circular]"!==t)return t}e.exports={EthereumRpcError:o,EthereumProviderError:class extends o{constructor(e,t,n){if(!function(e){return Number.isInteger(e)&&e>=1e3&&e<=4999}(e))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,t,n)}}}},B3Rj:function(e,t,n){var r=n("QqcV");e.exports=r("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")},BumV:function(e,t,n){"use strict";var r=n("B3Rj"),o=n("hwdV").Buffer;e.exports=function(e){function t(t){var n=t.slice(0,-4),r=t.slice(-4),o=e(n);if(!(r[0]^o[0]|r[1]^o[1]|r[2]^o[2]|r[3]^o[3]))return n}return{encode:function(t){var n=e(t);return r.encode(o.concat([t,n],t.length+4))},decode:function(e){var n=t(r.decode(e));if(!n)throw new Error("Invalid checksum");return n},decodeUnsafe:function(e){var n=r.decodeUnsafe(e);if(n)return t(n)}}}},Ej5h:function(e,t,n){"use strict";n.r(t),n.d(t,"generateAddresses",(function(){return c})),n.d(t,"isValidPath",(function(){return l}));var r=n("vUa2"),o=n.n(r),i=n("tnHP"),s=n("tjlA"),a=i.publicToAddress,u=i.toChecksumAddress;function c(e,t){var n=e.publicKey,r=e.chainCode,i=e.path,c=new o.a;c.publicKey=new s.Buffer(n,"hex"),c.chainCode=new s.Buffer(r,"hex");for(var l=[],d=t;d<5+t;d++){var p=c.deriveChild(d),_=a(p.publicKey,!0).toString("hex");l.push({dPath:"".concat(i,"/").concat(d),address:u("0x".concat(_))})}return l}function l(e){var t=e.split("/");if("m"!==t[0])return!1;if("44'"!==t[1])return!1;if("60'"!==t[2]&&"1'"!==t[2])return!1;if(void 0===t[3])return!0;var n=Number(t[3][0]);if(isNaN(n)||n<0||"'"!==t[3][1])return!1;if(void 0===t[4])return!0;var r=Number(t[4][0]);if(isNaN(r)||r<0)return!1;if(void 0===t[5])return!0;var o=Number(t[5][0]);return!(isNaN(o)||o<0)}},GKwB:function(e,t,n){const{EthereumRpcError:r,EthereumProviderError:o}=n("9Xsl"),{getMessageFromCode:i}=n("9AHY"),s=n("NIKR");function a(e,t){const[n,o]=c(t);return new r(e,n||i(e),o)}function u(e,t){const[n,r]=c(t);return new o(e,n||i(e),r)}function c(e){let t,n;return e&&("string"==typeof e?t=e:"object"!=typeof e||Array.isArray(e)||(t=e.message,n=e.data)),[t,n]}e.exports={rpc:{parse:e=>a(s.rpc.parse,e),invalidRequest:e=>a(s.rpc.invalidRequest,e),invalidParams:e=>a(s.rpc.invalidParams,e),methodNotFound:e=>a(s.rpc.methodNotFound,e),internal:e=>a(s.rpc.internal,e),server:e=>{if(!e||"object"!=typeof e||Array.isArray(e))throw new Error("Ethereum RPC Server errors must provide single object argument.");const{code:t}=e;if(!Number.isInteger(t)||t>-32005||t<-32099)throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');return a(t,e)},invalidInput:e=>a(s.rpc.invalidInput,e),resourceNotFound:e=>a(s.rpc.resourceNotFound,e),resourceUnavailable:e=>a(s.rpc.resourceUnavailable,e),transactionRejected:e=>a(s.rpc.transactionRejected,e),methodNotSupported:e=>a(s.rpc.methodNotSupported,e)},provider:{userRejectedRequest:e=>u(s.provider.userRejectedRequest,e),unauthorized:e=>u(s.provider.unauthorized,e),unsupportedMethod:e=>u(s.provider.unsupportedMethod,e),custom:e=>{if(!e||"object"!=typeof e||Array.isArray(e))throw new Error("Ethereum Provider custom errors must provide single object argument.");const{code:t,message:n,data:r}=e;if(!n||"string"!=typeof n)throw new Error('"message" must be a nonempty string');return new o(t,n,r)}}}},IzYE:function(e,t,n){const{EthereumRpcError:r,EthereumProviderError:o}=n("9Xsl"),{serializeError:i,getMessageFromCode:s}=n("9AHY"),a=n("GKwB"),u=n("NIKR");e.exports={ethErrors:a,EthereumRpcError:r,EthereumProviderError:o,serializeError:i,getMessageFromCode:s,ERROR_CODES:u}},MOxe:function(e,t,n){"use strict";n.r(t),n.d(t,"useState",(function(){return f})),n.d(t,"useReducer",(function(){return h})),n.d(t,"useEffect",(function(){return v})),n.d(t,"useLayoutEffect",(function(){return m})),n.d(t,"useRef",(function(){return g})),n.d(t,"useImperativeHandle",(function(){return y})),n.d(t,"useMemo",(function(){return E})),n.d(t,"useCallback",(function(){return b})),n.d(t,"useContext",(function(){return N})),n.d(t,"useDebugValue",(function(){return C})),n.d(t,"useErrorBoundary",(function(){return w}));var r,o,i,s=n("2mXy"),a=0,u=[],c=s.options.__r,l=s.options.diffed,d=s.options.__c,p=s.options.unmount;function _(e,t){s.options.__h&&s.options.__h(o,e,a||t),a=0;var n=o.__H||(o.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function f(e){return a=1,h(k,e)}function h(e,t,n){var i=_(r++,2);return i.__c||(i.__c=o,i.__=[n?n(t):k(void 0,t),function(t){var n=e(i.__[0],t);i.__[0]!==n&&(i.__[0]=n,i.__c.setState({}))}]),i.__}function v(e,t){var n=_(r++,3);!s.options.__s&&O(n.__H,t)&&(n.__=e,n.__H=t,o.__H.__h.push(n))}function m(e,t){var n=_(r++,4);!s.options.__s&&O(n.__H,t)&&(n.__=e,n.__H=t,o.__h.push(n))}function g(e){return a=5,E((function(){return{current:e}}),[])}function y(e,t,n){a=6,m((function(){"function"==typeof e?e(t()):e&&(e.current=t())}),null==n?n:n.concat(e))}function E(e,t){var n=_(r++,7);return O(n.__H,t)?(n.__H=t,n.__h=e,n.__=e()):n.__}function b(e,t){return a=8,E((function(){return e}),t)}function N(e){var t=o.context[e.__c],n=_(r++,9);return n.__c=e,t?(null==n.__&&(n.__=!0,t.sub(o)),t.props.value):e.__}function C(e,t){s.options.useDebugValue&&s.options.useDebugValue(t?t(e):e)}function w(e){var t=_(r++,10),n=f();return t.__=e,o.componentDidCatch||(o.componentDidCatch=function(e){t.__&&t.__(e),n[1](e)}),[n[0],function(){n[1](void 0)}]}function I(){u.some((function(e){if(e.__P)try{e.__H.__h.forEach(S),e.__H.__h.forEach(A),e.__H.__h=[]}catch(o){return e.__H.__h=[],s.options.__e(o,e.__v),!0}})),u=[]}function S(e){e.t&&e.t()}function A(e){var t=e.__();"function"==typeof t&&(e.t=t)}function O(e,t){return!e||t.some((function(t,n){return t!==e[n]}))}function k(e,t){return"function"==typeof t?t(e):t}s.options.__r=function(e){c&&c(e),r=0,(o=e.__c).__H&&(o.__H.__h.forEach(S),o.__H.__h.forEach(A),o.__H.__h=[])},s.options.diffed=function(e){l&&l(e);var t=e.__c;if(t){var n=t.__H;n&&n.__h.length&&(1!==u.push(t)&&i===s.options.requestAnimationFrame||((i=s.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);"undefined"!=typeof window&&(t=requestAnimationFrame(n))})(I))}},s.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(S),e.__h=e.__h.filter((function(e){return!e.__||A(e)}))}catch(i){t.some((function(e){e.__h&&(e.__h=[])})),t=[],s.options.__e(i,e.__v)}})),d&&d(e,t)},s.options.unmount=function(e){p&&p(e);var t=e.__c;if(t){var n=t.__H;if(n)try{n.__.forEach((function(e){return e.t&&e.t()}))}catch(e){s.options.__e(e,t.__v)}}}},N1pS:function(e,t){e.exports=o,o.default=o,o.stable=s,o.stableStringify=s;var n=[],r=[];function o(e,t,o){var i;for(function e(t,o,i,s){var a;if("object"==typeof t&&null!==t){for(a=0;a<i.length;a++)if(i[a]===t){var u=Object.getOwnPropertyDescriptor(s,o);return void(void 0!==u.get?u.configurable?(Object.defineProperty(s,o,{value:"[Circular]"}),n.push([s,o,t,u])):r.push([t,o]):(s[o]="[Circular]",n.push([s,o,t])))}if(i.push(t),Array.isArray(t))for(a=0;a<t.length;a++)e(t[a],a,i,t);else{var c=Object.keys(t);for(a=0;a<c.length;a++){var l=c[a];e(t[l],l,i,t)}}i.pop()}}(e,"",[],void 0),i=0===r.length?JSON.stringify(e,t,o):JSON.stringify(e,a(t),o);0!==n.length;){var s=n.pop();4===s.length?Object.defineProperty(s[0],s[1],s[3]):s[0][s[1]]=s[2]}return i}function i(e,t){return e<t?-1:e>t?1:0}function s(e,t,o){var s,u=function e(t,o,s,a){var u;if("object"==typeof t&&null!==t){for(u=0;u<s.length;u++)if(s[u]===t){var c=Object.getOwnPropertyDescriptor(a,o);return void(void 0!==c.get?c.configurable?(Object.defineProperty(a,o,{value:"[Circular]"}),n.push([a,o,t,c])):r.push([t,o]):(a[o]="[Circular]",n.push([a,o,t])))}if("function"==typeof t.toJSON)return;if(s.push(t),Array.isArray(t))for(u=0;u<t.length;u++)e(t[u],u,s,t);else{var l={},d=Object.keys(t).sort(i);for(u=0;u<d.length;u++){var p=d[u];e(t[p],p,s,t),l[p]=t[p]}if(void 0===a)return l;n.push([a,o,t]),a[o]=l}s.pop()}}(e,"",[],void 0)||e;for(s=0===r.length?JSON.stringify(u,t,o):JSON.stringify(u,a(t),o);0!==n.length;){var c=n.pop();4===c.length?Object.defineProperty(c[0],c[1],c[3]):c[0][c[1]]=c[2]}return s}function a(e){return e=void 0!==e?e:function(e,t){return t},function(t,n){if(r.length>0)for(var o=0;o<r.length;o++){var i=r[o];if(i[1]===t&&i[0]===n){n="[Circular]",r.splice(o,1);break}}return e.call(this,t,n)}}},NIKR:function(e){e.exports=JSON.parse('{"rpc":{"invalidInput":-32000,"resourceNotFound":-32001,"resourceUnavailable":-32002,"transactionRejected":-32003,"methodNotSupported":-32004,"parse":-32700,"invalidRequest":-32600,"methodNotFound":-32601,"invalidParams":-32602,"internal":-32603},"provider":{"userRejectedRequest":4001,"unauthorized":4100,"unsupportedMethod":4200}}')},WPTD:function(e,t,n){(function(t){const r=n(t.browser?"7sdD":10),o=n("7tlc").inherits,i=n("xQaN"),s=n("Uu7K"),{ethErrors:a,serializeError:u}=n("IzYE");function c(e){this.rpcUrl=e.rpcUrl}e.exports=c,o(c,s),c.prototype.handleRequest=function(e,t,n){const o=this.rpcUrl,s=function(e){return{id:e.id,jsonrpc:e.jsonrpc,method:e.method,params:e.params}}(e),c=i(s);r({uri:o,method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(c),rejectUnauthorized:!1,timeout:2e4},(function(e,t,r){if(e)return n(u(e));switch(t.statusCode){case 405:return n(a.rpc.methodNotFound());case 504:return function(){let e="Gateway timeout. The request took too long to process. ";e+="This can happen when querying logs over too wide a block range.";const t=new Error("Gateway timeout. The request took too long to process. This can happen when querying logs over too wide a block range.");return n(u(t))}();case 429:return function(){const e=new Error("Too Many Requests");return n(u(e))}();default:if(200!=t.statusCode){const e=new Error("Unknown Error: "+t.body);return n(u(e))}}let o;try{o=JSON.parse(r)}catch(e){return console.error(e.stack),n(u(e))}if(o.error)return n(o.error);n(null,o.result)}))}}).call(this,n("8oxB"))},"Y+ai":function(e){e.exports=JSON.parse('{"4001":{"standard":"EIP 1193","message":"User rejected the request."},"4100":{"standard":"EIP 1193","message":"The requested account and/or method has not been authorized by the user."},"4200":{"standard":"EIP 1193","message":"The requested method is not supported by this Ethereum provider."},"-32700":{"standard":"JSON RPC 2.0","message":"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."},"-32600":{"standard":"JSON RPC 2.0","message":"The JSON sent is not a valid Request object."},"-32601":{"standard":"JSON RPC 2.0","message":"The method does not exist / is not available."},"-32602":{"standard":"JSON RPC 2.0","message":"Invalid method parameter(s)."},"-32603":{"standard":"JSON RPC 2.0","message":"Internal JSON-RPC error."},"-32000":{"standard":"EIP 1474","message":"Invalid input."},"-32001":{"standard":"EIP 1474","message":"Resource not found."},"-32002":{"standard":"EIP 1474","message":"Resource unavailable."},"-32003":{"standard":"EIP 1474","message":"Transaction rejected."},"-32004":{"standard":"EIP 1474","message":"Method not supported."}}')},awlc:function(e,t,n){"use strict";n.r(t);var r=n("f4g2"),o=n.n(r),i=n("WPTD"),s=n.n(i),a=n("Rlsf"),u=n.n(a),c=n("EqmL"),l=n.n(c),d=n("cC/c"),p=n.n(d);t.default=function(e){var t=e.getAccounts,n=e.rpcUrl,r=t&&new u.a({getAccounts:t,signTransaction:e.signTransaction,processMessage:e.processMessage,processPersonalMessage:e.processPersonalMessage,signMessage:e.signMessage,signPersonalMessage:e.signPersonalMessage}),i=new s.a({rpcUrl:n.includes("http")?n:"https://".concat(n)}),a=new o.a;return a.addProvider(new l.a),a.addProvider(new p.a),r&&a.addProvider(r),a.addProvider(i),a.start(),a}},b3gk:function(e,t,n){"use strict";var r=n("mObS"),o=n("BumV");e.exports=o((function(e){var t=r("sha256").update(e).digest();return r("sha256").update(t).digest()}))},kl0C:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r='\n\t<svg width="40" height="40" viewBox="0 0 383 383" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<g clip-path="url(#clip0)">\n\t\t<g filter="url(#filter0_dd)">\n\t\t\t<path d="M0.998047 0.572266L382.78 0.572266V382.354H0.998047L0.998047 0.572266Z" fill="url(#paint0_linear)"/>\n\t\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M59.1074 191.572C59.1074 264.966 118.605 324.463 191.998 324.463C265.392 324.463 324.889 264.966 324.889 191.572C324.889 118.179 265.392 58.6816 191.998 58.6816C118.605 58.6816 59.1074 118.179 59.1074 191.572ZM158.037 148.752C153.144 148.752 149.178 152.718 149.178 157.611V225.533C149.178 230.426 153.144 234.393 158.037 234.393H225.959C230.852 234.393 234.818 230.426 234.818 225.533V157.611C234.818 152.718 230.852 148.752 225.959 148.752H158.037Z" fill="white"/>\n\t\t</g>\n\t\t</g>\n\t\t<defs>\n\t\t\t<filter id="filter0_dd" x="-23.002" y="-7.42773" width="429.782" height="429.782" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n\t\t\t\t<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n\t\t\t\t<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n\t\t\t\t<feOffset dy="16"/>\n\t\t\t\t<feGaussianBlur stdDeviation="12"/>\n\t\t\t\t<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>\n\t\t\t\t<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n\t\t\t\t<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n\t\t\t\t<feOffset/>\n\t\t\t\t<feGaussianBlur stdDeviation="4"/>\n\t\t\t\t<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>\n\t\t\t\t<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>\n\t\t\t\t<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>\n\t\t\t</filter>\n\t\t\t<linearGradient id="paint0_linear" x1="191.889" y1="0.572266" x2="191.889" y2="382.354" gradientUnits="userSpaceOnUse">\n\t\t\t\t<stop stop-color="#2E66F8"/>\n\t\t\t\t<stop offset="1" stop-color="#124ADB"/>\n\t\t\t</linearGradient>\n\t\t\t<clipPath id="clip0">\n\t\t\t\t<rect width="381.782" height="381.782" fill="white" transform="translate(0.998047 0.572266)"/>\n\t\t\t</clipPath>\n\t\t</defs>\n\t</svg>\n'},qPxQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return d}));var r={},o={},i=function(e,t){o[e]=t},s=function(e){var t=function(t,n){Object.assign(this,n),this.name=e,this.message=t||e,this.stack=(new Error).stack};return t.prototype=new Error,r[e]=t,t};s("AccountNameRequired"),s("AccountNotSupported"),s("AmountRequired"),s("BluetoothRequired"),s("BtcUnmatchedApp"),s("CantOpenDevice"),s("CashAddrNotSupported"),s("CurrencyNotSupported"),s("DeviceAppVerifyNotSupported"),s("DeviceGenuineSocketEarlyClose"),s("DeviceNotGenuine"),s("DeviceOnDashboardExpected"),s("DeviceOnDashboardUnexpected"),s("DeviceInOSUExpected"),s("DeviceHalted"),s("DeviceNameInvalid"),s("DeviceSocketFail"),s("DeviceSocketNoBulkStatus"),s("DisconnectedDevice"),s("DisconnectedDeviceDuringOperation"),s("EnpointConfig");var a=s("EthAppPleaseEnableContractData"),u=(s("FeeEstimationFailed"),s("FirmwareNotRecognized"),s("HardResetFail"),s("InvalidXRPTag"),s("InvalidAddress"),s("InvalidAddressBecauseDestinationIsAlsoSource"),s("LatestMCUInstalledError"),s("UnknownMCU"),s("LedgerAPIError"),s("LedgerAPIErrorWithMessage"),s("LedgerAPINotAvailable"),s("ManagerAppAlreadyInstalled"),s("ManagerAppRelyOnBTC"),s("ManagerAppDepInstallRequired"),s("ManagerAppDepUninstallRequired"),s("ManagerDeviceLocked"),s("ManagerFirmwareNotEnoughSpace"),s("ManagerNotEnoughSpace"),s("ManagerUninstallBTCDep"),s("NetworkDown"),s("NoAddressesFound"),s("NotEnoughBalance"),s("NotEnoughBalanceToDelegate"),s("NotEnoughBalanceInParentAccount"),s("NotEnoughSpendableBalance"),s("NotEnoughBalanceBecauseDestinationNotCreated"),s("NoAccessToCamera"),s("NotEnoughGas"),s("NotSupportedLegacyAddress"),s("GasLessThanEstimate"),s("PasswordsDontMatch"),s("PasswordIncorrect"),s("RecommendSubAccountsToEmpty"),s("RecommendUndelegation"),s("TimeoutTagged"),s("UnexpectedBootloader"),s("MCUNotGenuineToDashboard"),s("RecipientRequired"),s("UnavailableTezosOriginatedAccountReceive"),s("UnavailableTezosOriginatedAccountSend"),s("UpdateFetchFileFail"),s("UpdateIncorrectHash"),s("UpdateIncorrectSig"),s("UpdateYourApp"),s("UserRefusedDeviceNameChange"),s("UserRefusedAddress"),s("UserRefusedFirmwareUpdate"),s("UserRefusedAllowManager"),s("UserRefusedOnDevice"),s("TransportOpenUserCancelled"),s("TransportInterfaceNotAvailable"),s("TransportRaceCondition"));function c(e,t){this.name="TransportError",this.message=e,this.stack=(new Error).stack,this.id=t}s("TransportWebUSBGestureRequired"),s("DeviceShouldStayInApp"),s("WebsocketConnectionError"),s("WebsocketConnectionFailed"),s("WrongDeviceForAccount"),s("WrongAppForCurrency"),s("ETHAddressNonEIP"),s("CantScanQRCode"),s("FeeNotLoaded"),s("FeeRequired"),s("FeeTooHigh"),s("SyncError"),s("PairingFailed"),s("GenuineCheckFailed"),s("LedgerAPI4xx"),s("LedgerAPI5xx"),s("FirmwareOrAppUpdateRequired"),s("NoDBPathGiven"),s("DBWrongPassword"),s("DBNotReset"),c.prototype=new Error,i("TransportError",(function(e){return new c(e.message,e.id)}));var l={PIN_REMAINING_ATTEMPTS:25536,INCORRECT_LENGTH:26368,MISSING_CRITICAL_PARAMETER:26624,COMMAND_INCOMPATIBLE_FILE_STRUCTURE:27009,SECURITY_STATUS_NOT_SATISFIED:27010,CONDITIONS_OF_USE_NOT_SATISFIED:27013,INCORRECT_DATA:27264,NOT_ENOUGH_MEMORY_SPACE:27268,REFERENCED_DATA_NOT_FOUND:27272,FILE_ALREADY_EXISTS:27273,INCORRECT_P1_P2:27392,INS_NOT_SUPPORTED:27904,CLA_NOT_SUPPORTED:28160,TECHNICAL_PROBLEM:28416,OK:36864,MEMORY_PROBLEM:37440,NO_EF_SELECTED:37888,INVALID_OFFSET:37890,FILE_NOT_FOUND:37892,INCONSISTENT_FILE:37896,ALGORITHM_NOT_SUPPORTED:38020,INVALID_KCV:38021,CODE_NOT_INITIALIZED:38914,ACCESS_CONDITION_NOT_FULFILLED:38916,CONTRADICTION_SECRET_CODE_STATUS:38920,CONTRADICTION_INVALIDATION:38928,CODE_BLOCKED:38976,MAX_VALUE_REACHED:38992,GP_AUTH_FAILED:25344,LICENSING:28482,HALTED:28586};function d(e){this.name="TransportStatusError";var t=Object.keys(l).find((function(t){return l[t]===e}))||"UNKNOWN_ERROR",n=function(e){switch(e){case 26368:return"Incorrect length";case 26624:return"Missing critical parameter";case 27010:return"Security not satisfied (dongle locked or have invalid access rights)";case 27013:return"Condition of use not satisfied (denied by the user?)";case 27264:return"Invalid data received";case 27392:return"Invalid parameter received"}if(28416<=e&&e<=28671)return"Internal error, please report"}(e)||t,r=e.toString(16);this.message="Ledger device: "+n+" (0x"+r+")",this.stack=(new Error).stack,this.statusCode=e,this.statusText=t}d.prototype=new Error,i("TransportStatusError",(function(e){return new d(e.statusCode)}))},vUa2:function(e,t,n){var r=n("9lTW"),o=n("hwdV").Buffer,i=n("HEbw"),s=n("b3gk"),a=n("IzB8"),u=o.from("Bitcoin seed","utf8"),c={private:76066276,public:76067358};function l(e){this.versions=e||c,this.depth=0,this.index=0,this._privateKey=null,this._publicKey=null,this.chainCode=null,this._fingerprint=0,this.parentFingerprint=0}function d(e,t,n){var r=o.allocUnsafe(78);return r.writeUInt32BE(t,0),r.writeUInt8(e.depth,4),r.writeUInt32BE(e.depth?e.parentFingerprint:0,5),r.writeUInt32BE(e.index,9),e.chainCode.copy(r,13),n.copy(r,45),r}function p(e){var t=i.createHash("sha256").update(e).digest();return i.createHash("ripemd160").update(t).digest()}Object.defineProperty(l.prototype,"fingerprint",{get:function(){return this._fingerprint}}),Object.defineProperty(l.prototype,"identifier",{get:function(){return this._identifier}}),Object.defineProperty(l.prototype,"pubKeyHash",{get:function(){return this.identifier}}),Object.defineProperty(l.prototype,"privateKey",{get:function(){return this._privateKey},set:function(e){r.equal(e.length,32,"Private key must be 32 bytes."),r(!0===a.privateKeyVerify(e),"Invalid private key"),this._privateKey=e,this._publicKey=o.from(a.publicKeyCreate(e,!0)),this._identifier=p(this.publicKey),this._fingerprint=this._identifier.slice(0,4).readUInt32BE(0)}}),Object.defineProperty(l.prototype,"publicKey",{get:function(){return this._publicKey},set:function(e){r(33===e.length||65===e.length,"Public key must be 33 or 65 bytes."),r(!0===a.publicKeyVerify(e),"Invalid public key"),this._publicKey=o.from(a.publicKeyConvert(e,!0)),this._identifier=p(this.publicKey),this._fingerprint=this._identifier.slice(0,4).readUInt32BE(0),this._privateKey=null}}),Object.defineProperty(l.prototype,"privateExtendedKey",{get:function(){return this._privateKey?s.encode(d(this,this.versions.private,o.concat([o.alloc(1,0),this.privateKey]))):null}}),Object.defineProperty(l.prototype,"publicExtendedKey",{get:function(){return s.encode(d(this,this.versions.public,this.publicKey))}}),l.prototype.derive=function(e){if("m"===e||"M"===e||"m'"===e||"M'"===e)return this;var t=e.split("/"),n=this;return t.forEach((function(e,t){if(0!==t){var o=e.length>1&&"'"===e[e.length-1],i=parseInt(e,10);r(i<2147483648,"Invalid index"),o&&(i+=2147483648),n=n.deriveChild(i)}else r(/^[mM]{1}/.test(e),'Path must start with "m" or "M"')})),n},l.prototype.deriveChild=function(e){var t,n=e>=2147483648,s=o.allocUnsafe(4);if(s.writeUInt32BE(e,0),n){r(this.privateKey,"Could not derive hardened child key");var u=this.privateKey,c=o.alloc(1,0);u=o.concat([c,u]),t=o.concat([u,s])}else t=o.concat([this.publicKey,s]);var d=i.createHmac("sha512",this.chainCode).update(t).digest(),p=d.slice(0,32),_=d.slice(32),f=new l(this.versions);if(this.privateKey)try{f.privateKey=o.from(a.privateKeyTweakAdd(o.from(this.privateKey),p))}catch(h){return this.deriveChild(e+1)}else try{f.publicKey=o.from(a.publicKeyTweakAdd(o.from(this.publicKey),p,!0))}catch(h){return this.deriveChild(e+1)}return f.chainCode=_,f.depth=this.depth+1,f.parentFingerprint=this.fingerprint,f.index=e,f},l.prototype.sign=function(e){return o.from(a.ecdsaSign(e,this.privateKey).signature)},l.prototype.verify=function(e,t){return a.ecdsaVerify(Uint8Array.from(t),Uint8Array.from(e),Uint8Array.from(this.publicKey))},l.prototype.wipePrivateData=function(){return this._privateKey&&i.randomBytes(this._privateKey.length).copy(this._privateKey),this._privateKey=null,this},l.prototype.toJSON=function(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}},l.fromMasterSeed=function(e,t){var n=i.createHmac("sha512",u).update(e).digest(),r=n.slice(0,32),o=n.slice(32),s=new l(t);return s.chainCode=o,s.privateKey=r,s},l.fromExtendedKey=function(e,t){var n=new l(t=t||c),o=s.decode(e),i=o.readUInt32BE(0);r(i===t.private||i===t.public,"Version mismatch: does not match private or public"),n.depth=o.readUInt8(4),n.parentFingerprint=o.readUInt32BE(5),n.index=o.readUInt32BE(9),n.chainCode=o.slice(13,45);var a=o.slice(45);return 0===a.readUInt8(0)?(r(i===t.private,"Version mismatch: version does not match private"),n.privateKey=a.slice(1)):(r(i===t.public,"Version mismatch: version does not match public"),n.publicKey=a),n},l.fromJSON=function(e){return l.fromExtendedKey(e.xpriv)},l.HARDENED_OFFSET=2147483648,e.exports=l}}]);