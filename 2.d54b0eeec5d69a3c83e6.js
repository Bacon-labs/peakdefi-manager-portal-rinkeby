(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/oFA":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n,o){return e(r.default,t,(0,s.default)(n),o)}};var r=o(n("abV/")),s=o(n("aR5N"));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},"/uSP":function(e,t,n){const r=n("+qE3").EventEmitter,s=n("7tlc").inherits;function o(){r.call(this),this.isLocked=!0}e.exports=o,s(o,r),o.prototype.go=function(){this.isLocked=!1,this.emit("unlock")},o.prototype.stop=function(){this.isLocked=!0,this.emit("lock")},o.prototype.await=function(e){this.isLocked?this.once("unlock",e):setTimeout(e)}},"2sf1":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){if(null!==e){var t=e;e=null,t.apply(this,arguments)}}},e.exports=t.default},"3qT5":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){t|=0;for(var n=Math.max(e.length-t,0),r=Array(n),s=0;s<n;s++)r[s]=e[t+s];return r},e.exports=t.default},"56vw":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,s.default)((function(t,n){var s;try{s=e.apply(this,t)}catch(o){return n(o)}(0,r.default)(s)&&"function"==typeof s.then?s.then((function(e){i(n,null,e)}),(function(e){i(n,e.message?e:new Error(e))})):n(null,s)}))};var r=a(n("GoyQ")),s=a(n("hGab")),o=a(n("LgDX"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){try{e(t,n)}catch(r){(0,o.default)(c,r)}}function c(e){throw e}e.exports=t.default},"6oS5":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){n=n||r.default;var i=(0,s.default)(t)?[]:{};e(t,(function(e,t,n){(0,a.default)(e)((function(e,r){arguments.length>2&&(r=(0,o.default)(arguments,1)),i[t]=r,n(e)}))}),(function(e){n(e,i)}))};var r=i(n("vN+2")),s=i(n("MMmD")),o=i(n("3qT5")),a=i(n("aR5N"));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},"9SRK":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,o){o=o||r.default,t=t||[];var a=[],i=0,c=(0,s.default)(n);e(t,(function(e,t,n){var r=i++;c(e,(function(e,t){a[r]=t,n(e)}))}),(function(e){o(e,a)}))};var r=o(n("vN+2")),s=o(n("aR5N"));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},BMM2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if((0,r.default)(e))return function(e){var t=-1,n=e.length;return function(){return++t<n?{value:e[t],key:t}:null}}(e);var t,n,a,i,c=(0,s.default)(e);return c?function(e){var t=-1;return function(){var n=e.next();return n.done?null:(t++,{value:n.value,key:t})}}(c):(n=(0,o.default)(t=e),a=-1,i=n.length,function(){var e=n[++a];return a<i?{value:t[e],key:e}:null})};var r=a(n("MMmD")),s=a(n("oEkW")),o=a(n("7GkX"));function a(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},EqmL:function(e,t,n){const r=n("ja2i"),s=n("t7TP");e.exports=class extends r{constructor(){super(({blockTracker:e,provider:t,engine:n})=>{const{events:r,middleware:o}=s({blockTracker:e,provider:t});return r.on("notification",e=>n.emit("data",null,e)),o})}}},KWkM:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,s.default)(r.default,e,t)};var r=o(n("abV/")),s=o(n("6oS5"));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},KwLt:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={},e.exports=t.default},LCem:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n("/oFA")),s=o(n("9SRK"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.default)(s.default),e.exports=t.default},LgDX:function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.hasNextTick=t.hasSetImmediate=void 0,t.fallback=c,t.wrap=u;var s,o=(s=n("3qT5"))&&s.__esModule?s:{default:s},a=t.hasSetImmediate="function"==typeof e&&e,i=t.hasNextTick="object"==typeof r&&"function"==typeof r.nextTick;function c(e){setTimeout(e,0)}function u(e){return function(t){var n=(0,o.default)(arguments,1);e((function(){t.apply(null,n)}))}}t.default=u(a?e:i?r.nextTick:c)}).call(this,n("URgk").setImmediate,n("8oxB"))},NDoG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n,c){if(c=(0,s.default)(c||r.default),e<=0||!t)return c(null);var u=(0,o.default)(t),l=!1,d=0,f=!1;function p(e,t){if(d-=1,e)l=!0,c(e);else{if(t===i.default||l&&d<=0)return l=!0,c(null);f||h()}}function h(){for(f=!0;d<e&&!l;){var t=u();if(null===t)return l=!0,void(d<=0&&c(null));d+=1,n(t.value,t.key,(0,a.default)(p))}f=!1}h()}};var r=c(n("vN+2")),s=c(n("2sf1")),o=c(n("BMM2")),a=c(n("rH6r")),i=c(n("KwLt"));function c(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},PpH3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return function(n,r,s){return e(n,t,r,s)}},e.exports=t.default},Rlsf:function(e,t,n){const r=n("l1gh"),s=n("KWkM"),o=n("7tlc").inherits,a=n("/JJz"),i=n("HtlB"),c=n("U6jy"),u=n("odnP"),l=n("Uu7K"),d=n("a5O3"),f=/^[0-9A-Fa-f]+$/g;function p(e){this.nonceLock=u(1),e.getAccounts&&(this.getAccounts=e.getAccounts),e.processTransaction&&(this.processTransaction=e.processTransaction),e.processMessage&&(this.processMessage=e.processMessage),e.processPersonalMessage&&(this.processPersonalMessage=e.processPersonalMessage),e.processTypedMessage&&(this.processTypedMessage=e.processTypedMessage),this.approveTransaction=e.approveTransaction||this.autoApprove,this.approveMessage=e.approveMessage||this.autoApprove,this.approvePersonalMessage=e.approvePersonalMessage||this.autoApprove,this.approveDecryptMessage=e.approveDecryptMessage||this.autoApprove,this.approveEncryptionPublicKey=e.approveEncryptionPublicKey||this.autoApprove,this.approveTypedMessage=e.approveTypedMessage||this.autoApprove,e.signTransaction&&(this.signTransaction=e.signTransaction||m("signTransaction")),e.signMessage&&(this.signMessage=e.signMessage||m("signMessage")),e.signPersonalMessage&&(this.signPersonalMessage=e.signPersonalMessage||m("signPersonalMessage")),e.decryptMessage&&(this.decryptMessage=e.decryptMessage||m("decryptMessage")),e.encryptionPublicKey&&(this.encryptionPublicKey=e.encryptionPublicKey||m("encryptionPublicKey")),e.signTypedMessage&&(this.signTypedMessage=e.signTypedMessage||m("signTypedMessage")),e.recoverPersonalSignature&&(this.recoverPersonalSignature=e.recoverPersonalSignature),e.publishTransaction&&(this.publishTransaction=e.publishTransaction),this.estimateGas=e.estimateGas||this.estimateGas,this.getGasPrice=e.getGasPrice||this.getGasPrice}function h(e){return e.toLowerCase()}function g(e){const t=a.addHexPrefix(e);return a.isValidAddress(t)}function y(e){const t=a.addHexPrefix(e);return!a.isValidAddress(t)&&v(e)}function v(e){return"string"==typeof e&&"0x"===e.slice(0,2)&&e.slice(2).match(f)}function m(e){return function(t,n){n(new Error('ProviderEngine - HookedWalletSubprovider - Must provide "'+e+'" fn in constructor options'))}}e.exports=p,o(p,l),p.prototype.handleRequest=function(e,t,n){const s=this;let o,a,i,u,l;switch(s._parityRequests={},s._parityRequestCount=0,e.method){case"eth_coinbase":return void s.getAccounts((function(e,t){if(e)return n(e);n(null,t[0]||null)}));case"eth_accounts":return void s.getAccounts((function(e,t){if(e)return n(e);n(null,t)}));case"eth_sendTransaction":return o=e.params[0],void r([e=>s.validateTransaction(o,e),e=>s.processTransaction(o,e)],n);case"eth_signTransaction":return o=e.params[0],void r([e=>s.validateTransaction(o,e),e=>s.processSignTransaction(o,e)],n);case"eth_sign":return l=e.params[0],u=e.params[1],i=e.params[2]||{},a=c(i,{from:l,data:u}),void r([e=>s.validateMessage(a,e),e=>s.processMessage(a,e)],n);case"personal_sign":return function(){const t=e.params[0];if(y(e.params[1])&&g(t)){let t="The eth_personalSign method requires params ordered ";t+="[message, address]. This was previously handled incorrectly, ",t+="and has been corrected automatically. ",t+="Please switch this param order for smooth behavior in the future.",console.warn(t),l=e.params[0],u=e.params[1]}else u=e.params[0],l=e.params[1];i=e.params[2]||{},a=c(i,{from:l,data:u}),r([e=>s.validatePersonalMessage(a,e),e=>s.processPersonalMessage(a,e)],n)}();case"eth_decryptMessage":return function(){const t=e.params[0];if(y(e.params[1])&&g(t)){let t="The eth_decryptMessage method requires params ordered ";t+="[message, address]. This was previously handled incorrectly, ",t+="and has been corrected automatically. ",t+="Please switch this param order for smooth behavior in the future.",console.warn(t),l=e.params[0],u=e.params[1]}else u=e.params[0],l=e.params[1];i=e.params[2]||{},a=c(i,{from:l,data:u}),r([e=>s.validateDecryptMessage(a,e),e=>s.processDecryptMessage(a,e)],n)}();case"encryption_public_key":return function(){const t=e.params[0];r([e=>s.validateEncryptionPublicKey(t,e),e=>s.processEncryptionPublicKey(t,e)],n)}();case"personal_ecRecover":return u=e.params[0],i=e.params[2]||{},a=c(i,{sig:e.params[1],data:u}),void s.recoverPersonalSignature(a,n);case"eth_signTypedData":case"eth_signTypedData_v3":case"eth_signTypedData_v4":return function(){const t=e.params[0],o=e.params[1];g(t)?(l=t,u=o):(u=t,l=o),i=e.params[2]||{},a=c(i,{from:l,data:u}),r([e=>s.validateTypedMessage(a,e),e=>s.processTypedMessage(a,e)],n)}();case"parity_postTransaction":return o=e.params[0],void s.parityPostTransaction(o,n);case"parity_postSign":return l=e.params[0],u=e.params[1],void s.parityPostSign(l,u,n);case"parity_checkRequest":return void s.parityCheckRequest(e.params[0],n);case"parity_defaultAccount":return void s.getAccounts((function(e,t){if(e)return n(e);n(null,t[0]||null)}));default:return void t()}},p.prototype.getAccounts=function(e){e(null,[])},p.prototype.processTransaction=function(e,t){const n=this;r([t=>n.approveTransaction(e,t),(e,t)=>n.checkApproval("transaction",e,t),t=>n.finalizeAndSubmitTx(e,t)],t)},p.prototype.processSignTransaction=function(e,t){const n=this;r([t=>n.approveTransaction(e,t),(e,t)=>n.checkApproval("transaction",e,t),t=>n.finalizeTx(e,t)],t)},p.prototype.processMessage=function(e,t){const n=this;r([t=>n.approveMessage(e,t),(e,t)=>n.checkApproval("message",e,t),t=>n.signMessage(e,t)],t)},p.prototype.processPersonalMessage=function(e,t){const n=this;r([t=>n.approvePersonalMessage(e,t),(e,t)=>n.checkApproval("message",e,t),t=>n.signPersonalMessage(e,t)],t)},p.prototype.processDecryptMessage=function(e,t){const n=this;r([t=>n.approveDecryptMessage(e,t),(e,t)=>n.checkApproval("decryptMessage",e,t),t=>n.decryptMessage(e,t)],t)},p.prototype.processEncryptionPublicKey=function(e,t){const n=this;r([t=>n.approveEncryptionPublicKey(e,t),(e,t)=>n.checkApproval("encryptionPublicKey",e,t),t=>n.encryptionPublicKey(e,t)],t)},p.prototype.processTypedMessage=function(e,t){const n=this;r([t=>n.approveTypedMessage(e,t),(e,t)=>n.checkApproval("message",e,t),t=>n.signTypedMessage(e,t)],t)},p.prototype.autoApprove=function(e,t){t(null,!0)},p.prototype.checkApproval=function(e,t,n){n(t?null:new Error("User denied "+e+" signature."))},p.prototype.parityPostTransaction=function(e,t){const n=this,r="0x"+n._parityRequestCount.toString(16);n._parityRequestCount++,n.emitPayload({method:"eth_sendTransaction",params:[e]},(function(e,t){n._parityRequests[r]=e?{error:e}:t.result})),t(null,r)},p.prototype.parityPostSign=function(e,t,n){const r=this,s="0x"+r._parityRequestCount.toString(16);r._parityRequestCount++,r.emitPayload({method:"eth_sign",params:[e,t]},(function(e,t){r._parityRequests[s]=e?{error:e}:t.result})),n(null,s)},p.prototype.parityCheckRequest=function(e,t){const n=this._parityRequests[e]||null;return n?n.error?t(n.error):void t(null,n):t(null,null)},p.prototype.recoverPersonalSignature=function(e,t){let n;try{n=i.recoverPersonalSignature(e)}catch(r){return t(r)}t(null,n)},p.prototype.validateTransaction=function(e,t){if(void 0===e.from)return t(new Error("Undefined address - from address required to sign transaction."));this.validateSender(e.from,(function(n,r){return n?t(n):r?void t():t(new Error(`Unknown address - unable to sign transaction for this address: "${e.from}"`))}))},p.prototype.validateMessage=function(e,t){if(void 0===e.from)return t(new Error("Undefined address - from address required to sign message."));this.validateSender(e.from,(function(n,r){return n?t(n):r?void t():t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`))}))},p.prototype.validatePersonalMessage=function(e,t){return void 0===e.from?t(new Error("Undefined address - from address required to sign personal message.")):void 0===e.data?t(new Error("Undefined message - message required to sign personal message.")):v(e.data)?void this.validateSender(e.from,(function(n,r){return n?t(n):r?void t():t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`))})):t(new Error("HookedWalletSubprovider - validateMessage - message was not encoded as hex."))},p.prototype.validateDecryptMessage=function(e,t){return void 0===e.from?t(new Error("Undefined address - from address required to decrypt message.")):void 0===e.data?t(new Error("Undefined message - message required to decrypt message.")):v(e.data)?void this.validateSender(e.from,(function(n,r){return n?t(n):r?void t():t(new Error(`Unknown address - unable to decrypt message for this address: "${e.from}"`))})):t(new Error("HookedWalletSubprovider - validateDecryptMessage - message was not encoded as hex."))},p.prototype.validateEncryptionPublicKey=function(e,t){this.validateSender(e,(function(n,r){return n?t(n):r?void t():t(new Error(`Unknown address - unable to obtain encryption public key for this address: "${e}"`))}))},p.prototype.validateTypedMessage=function(e,t){return void 0===e.from?t(new Error("Undefined address - from address required to sign typed data.")):void 0===e.data?t(new Error("Undefined data - message required to sign typed data.")):void this.validateSender(e.from,(function(n,r){return n?t(n):r?void t():t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`))}))},p.prototype.validateSender=function(e,t){if(!e)return t(null,!1);this.getAccounts((function(n,r){if(n)return t(n);const s=-1!==r.map(h).indexOf(e.toLowerCase());t(null,s)}))},p.prototype.finalizeAndSubmitTx=function(e,t){const n=this;n.nonceLock.take((function(){r([n.fillInTxExtras.bind(n,e),n.signTransaction.bind(n),n.publishTransaction.bind(n)],(function(e,r){if(n.nonceLock.leave(),e)return t(e);t(null,r)}))}))},p.prototype.finalizeTx=function(e,t){const n=this;n.nonceLock.take((function(){r([n.fillInTxExtras.bind(n,e),n.signTransaction.bind(n)],(function(r,s){if(n.nonceLock.leave(),r)return t(r);t(null,{raw:s,tx:e})}))}))},p.prototype.publishTransaction=function(e,t){this.emitPayload({method:"eth_sendRawTransaction",params:[e]},(function(e,n){if(e)return t(e);t(null,n.result)}))},p.prototype.estimateGas=function(e,t){d(this.engine,e,t)},p.prototype.getGasPrice=function(e){this.emitPayload({method:"eth_gasPrice",params:[]},(function(t,n){if(t)return e(t);e(null,n.result)}))},p.prototype.fillInTxExtras=function(e,t){const n=e.from,r={};void 0===e.gasPrice&&(r.gasPrice=this.getGasPrice.bind(this)),void 0===e.nonce&&(r.nonce=this.emitPayload.bind(this,{method:"eth_getTransactionCount",params:[n,"pending"]})),void 0===e.gas&&(r.gas=this.estimateGas.bind(this,function(e){return{from:e.from,to:e.to,value:e.value,data:e.data,gas:e.gas,gasPrice:e.gasPrice,nonce:e.nonce}}(e))),s(r,(function(n,r){if(n)return t(n);const s={};r.gasPrice&&(s.gasPrice=r.gasPrice),r.nonce&&(s.nonce=r.nonce.result),r.gas&&(s.gas=r.gas),t(null,c(e,s))}))}},Uu7K:function(e,t,n){const r=n("xQaN");function s(){}e.exports=s,s.prototype.setEngine=function(e){const t=this;t.engine||(t.engine=e,e.on("block",(function(e){t.currentBlock=e})),e.on("start",(function(){t.start()})),e.on("stop",(function(){t.stop()})))},s.prototype.handleRequest=function(e,t,n){throw new Error("Subproviders should override `handleRequest`.")},s.prototype.emitPayload=function(e,t){this.engine.sendAsync(r(e),t)},s.prototype.stop=function(){},s.prototype.start=function(){}},YOJA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n("tMv7")),s=o(n("PpH3"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=(0,s.default)(r.default,1),e.exports=t.default},a5O3:function(e,t,n){const r=n("xQaN");e.exports=function(e,t,n){e.sendAsync(r({method:"eth_estimateGas",params:[t]}),(function(e,t){if(e)return"no contract code at given address"===e.message?n(null,"0xcf08"):n(e);n(null,t.result)}))}},aR5N:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isAsync=void 0;var r,s=(r=n("56vw"))&&r.__esModule?r:{default:r},o="function"==typeof Symbol;function a(e){return o&&"AsyncFunction"===e[Symbol.toStringTag]}t.default=function(e){return a(e)?(0,s.default)(e):e},t.isAsync=a},"abV/":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){((0,r.default)(e)?f:p)(e,(0,l.default)(t),n)};var r=d(n("MMmD")),s=d(n("KwLt")),o=d(n("k2x9")),a=d(n("PpH3")),i=d(n("vN+2")),c=d(n("2sf1")),u=d(n("rH6r")),l=d(n("aR5N"));function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t,n){n=(0,c.default)(n||i.default);var r=0,o=0,a=e.length;function l(e,t){e?n(e):++o!==a&&t!==s.default||n(null)}for(0===a&&n(null);r<a;r++)t(e[r],r,(0,u.default)(l))}var p=(0,a.default)(o.default,1/0);e.exports=t.default},"cC/c":function(e,t,n){const r=n("ja2i"),s=n("2nhq");e.exports=class extends r{constructor(){super(({blockTracker:e,provider:t})=>s({blockTracker:e,provider:t}))}}},f4g2:function(e,t,n){const r=n("+qE3").EventEmitter,s=n("7tlc").inherits,o=n("/JJz"),a=n("V5x4"),i=n("LCem"),c=n("YOJA"),u=n("/uSP"),l=(n("gO+T"),n("xQaN")),d=function(){};function f(e){r.call(this),this.setMaxListeners(30),e=e||{};const t={sendAsync:this._handleAsync.bind(this)};this._blockTracker=e.blockTracker||new a({provider:e.blockTrackerProvider||t,pollingInterval:e.pollingInterval||4e3,setSkipCacheFlag:!0}),this._ready=new u,this.currentBlock=null,this._providers=[]}e.exports=f,s(f,r),f.prototype.start=function(e=d){const t=this;t._ready.go(),t._blockTracker.on("latest",e=>{t._getBlockByNumberWithRetry(e,(e,n)=>{if(e)return void this.emit("error",e);if(!n)return console.log(n),void this.emit("error",new Error("Could not find block"));const r={number:o.toBuffer((s=n).number),hash:o.toBuffer(s.hash),parentHash:o.toBuffer(s.parentHash),nonce:o.toBuffer(s.nonce),mixHash:o.toBuffer(s.mixHash),sha3Uncles:o.toBuffer(s.sha3Uncles),logsBloom:o.toBuffer(s.logsBloom),transactionsRoot:o.toBuffer(s.transactionsRoot),stateRoot:o.toBuffer(s.stateRoot),receiptsRoot:o.toBuffer(s.receiptRoot||s.receiptsRoot),miner:o.toBuffer(s.miner),difficulty:o.toBuffer(s.difficulty),totalDifficulty:o.toBuffer(s.totalDifficulty),size:o.toBuffer(s.size),extraData:o.toBuffer(s.extraData),gasLimit:o.toBuffer(s.gasLimit),gasUsed:o.toBuffer(s.gasUsed),timestamp:o.toBuffer(s.timestamp),transactions:s.transactions};var s;t._setCurrentBlock(r),t.emit("rawBlock",n),t.emit("latest",n)})}),t._blockTracker.on("sync",t.emit.bind(t,"sync")),t._blockTracker.on("error",t.emit.bind(t,"error")),t._running=!0,t.emit("start")},f.prototype.stop=function(){this._blockTracker.removeAllListeners(),this._running=!1,this.emit("stop")},f.prototype.isRunning=function(){return this._running},f.prototype.addProvider=function(e,t){"number"==typeof t?this._providers.splice(t,0,e):this._providers.push(e),e.setEngine(this)},f.prototype.removeProvider=function(e){const t=this._providers.indexOf(e);if(t<0)throw new Error("Provider not found.");this._providers.splice(t,1)},f.prototype.send=function(e){throw new Error("Web3ProviderEngine does not support synchronous requests.")},f.prototype.sendAsync=function(e,t){const n=this;n._ready.await((function(){Array.isArray(e)?i(e,n._handleAsync.bind(n),t):n._handleAsync(e,t)}))},f.prototype._getBlockByNumberWithRetry=function(e,t){const n=this;let r=5;return void s();function s(){n._getBlockByNumber(e,o)}function o(e,n){return e?t(e):n?void t(null,n):r>0?(r--,void setTimeout((function(){s()}),1e3)):void t(null,null)}},f.prototype._getBlockByNumber=function(e,t){const n=l({method:"eth_getBlockByNumber",params:[e,!1],skipCache:!0});this._handleAsync(n,(e,n)=>e?t(e):t(null,n.result))},f.prototype._handleAsync=function(e,t){var n=this,r=-1,s=null,o=null,a=[];function i(n,r){o=n,s=r,c(a,(function(e,t){e?e(o,s,t):t()}),(function(){var n={id:e.id,jsonrpc:e.jsonrpc,result:s};null!=o?(n.error={message:o.stack||o.message||o,code:-32e3},t(o,n)):t(null,n)}))}!function t(s){if(r+=1,a.unshift(s),r>=n._providers.length)i(new Error('Request for method "'+e.method+'" not handled by any subprovider. Please check your subprovider configuration to ensure this method is handled.'));else try{n._providers[r].handleRequest(e,t,i)}catch(o){i(o)}}()},f.prototype._setCurrentBlock=function(e){this.currentBlock=e,this.emit("block",e)}},"gO+T":function(e,t,n){const r=n("rE/H");function s(e){return"never"!==i(e)}function o(e){var t=a(e);return t>=e.params.length?e.params:"eth_getBlockByNumber"===e.method?e.params.slice(1):e.params.slice(0,t)}function a(e){switch(e.method){case"eth_getStorageAt":return 2;case"eth_getBalance":case"eth_getCode":case"eth_getTransactionCount":case"eth_call":case"eth_estimateGas":return 1;case"eth_getBlockByNumber":return 0;default:return}}function i(e){switch(e.method){case"web3_clientVersion":case"web3_sha3":case"eth_protocolVersion":case"eth_getBlockTransactionCountByHash":case"eth_getUncleCountByBlockHash":case"eth_getCode":case"eth_getBlockByHash":case"eth_getTransactionByHash":case"eth_getTransactionByBlockHashAndIndex":case"eth_getTransactionReceipt":case"eth_getUncleByBlockHashAndIndex":case"eth_getCompilers":case"eth_compileLLL":case"eth_compileSolidity":case"eth_compileSerpent":case"shh_version":return"perma";case"eth_getBlockByNumber":case"eth_getBlockTransactionCountByNumber":case"eth_getUncleCountByBlockNumber":case"eth_getTransactionByBlockNumberAndIndex":case"eth_getUncleByBlockNumberAndIndex":return"fork";case"eth_gasPrice":case"eth_getBalance":case"eth_getStorageAt":case"eth_getTransactionCount":case"eth_call":case"eth_estimateGas":case"eth_getFilterLogs":case"eth_getLogs":case"eth_blockNumber":return"block";case"net_version":case"net_peerCount":case"net_listening":case"eth_syncing":case"eth_sign":case"eth_coinbase":case"eth_mining":case"eth_hashrate":case"eth_accounts":case"eth_sendTransaction":case"eth_sendRawTransaction":case"eth_newFilter":case"eth_newBlockFilter":case"eth_newPendingTransactionFilter":case"eth_uninstallFilter":case"eth_getFilterChanges":case"eth_getWork":case"eth_submitWork":case"eth_submitHashrate":case"db_putString":case"db_getString":case"db_putHex":case"db_getHex":case"shh_post":case"shh_newIdentity":case"shh_hasIdentity":case"shh_newGroup":case"shh_addToGroup":case"shh_newFilter":case"shh_uninstallFilter":case"shh_getFilterChanges":case"shh_getMessages":return"never"}}e.exports={cacheIdentifierForPayload:function(e,t={}){if(!s(e))return null;const{includeBlockRef:n}=t,a=n?e.params:o(e);return e.method+":"+r(a)},canCache:s,blockTagForPayload:function(e){var t=a(e);return t>=e.params.length?null:e.params[t]},paramsWithoutBlockTag:o,blockTagParamIndex:a,cacheTypeForPayload:i}},hGab:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=(0,s.default)(arguments),n=t.pop();e.call(this,t,n)}};var r,s=(r=n("3qT5"))&&r.__esModule?r:{default:r};e.exports=t.default},j6BP:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n,r){return e(t,r)}},e.exports=t.default},ja2i:function(e,t,n){const r=n("Uu7K");e.exports=class extends r{constructor(e){if(super(),!e)throw new Error("JsonRpcEngineMiddlewareSubprovider - no constructorFn specified");this._constructorFn=e}setEngine(e){if(this.middleware)throw new Error("JsonRpcEngineMiddlewareSubprovider - subprovider added to engine twice");const t=this._constructorFn({engine:e,provider:e,blockTracker:e._blockTracker});if(!t)throw new Error("JsonRpcEngineMiddlewareSubprovider - _constructorFn did not return middleware");if("function"!=typeof t)throw new Error("JsonRpcEngineMiddlewareSubprovider - specified middleware is not a function");this.middleware=t}handleRequest(e,t,n){const r={id:e.id};this.middleware(e,r,(function(e){t((t,n,s)=>{t?(delete r.result,r.error={message:t.message||t}):r.result=n,e?e(s):s()})}),(function(e){if(e)return n(e);n(null,r.result)}))}}},k2x9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,o){(0,r.default)(t)(e,(0,s.default)(n),o)};var r=o(n("NDoG")),s=o(n("aR5N"));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},"kzD/":function(e,t){e.exports=function(){return Math.floor(Number.MAX_SAFE_INTEGER*Math.random())}},l1gh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t=(0,o.default)(t||s.default),!(0,r.default)(e))return t(new Error("First argument to waterfall must be an array of functions"));if(!e.length)return t();var n=0;function u(t){var r=(0,c.default)(e[n++]);t.push((0,i.default)(l)),r.apply(null,t)}function l(r){if(r||n===e.length)return t.apply(null,arguments);u((0,a.default)(arguments,1))}u([])};var r=u(n("Z0cm")),s=u(n("vN+2")),o=u(n("2sf1")),a=u(n("3qT5")),i=u(n("rH6r")),c=u(n("aR5N"));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},oEkW:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return r&&e[r]&&e[r]()};var r="function"==typeof Symbol&&Symbol.iterator;e.exports=t.default},rH6r:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){if(null===e)throw new Error("Callback was already called.");var t=e;e=null,t.apply(this,arguments)}},e.exports=t.default},tMv7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,a){(0,r.default)(t)(e,(0,s.default)((0,o.default)(n)),a)};var r=a(n("NDoG")),s=a(n("j6BP")),o=a(n("aR5N"));function a(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},xQaN:function(e,t,n){const r=n("kzD/"),s=n("U6jy");e.exports=function(e){return s({id:r(),jsonrpc:"2.0",params:[]},e)}}}]);