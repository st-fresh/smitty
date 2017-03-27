webpackJsonp([0,1],{"+iyJ":function(t,e){t.exports="import _regeneratorRuntime from '/Users/kye/npm/lib/node_modules/nwb/node_modules/babel-runtime/regenerator';\n\nvar _this = this,\n    _store$handleActions;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n/** @jsx h */\nimport './style.css';\nimport { render, h, Component } from 'preact';\nimport { Provider, connect } from 'preact-smitty';\nimport { createStore } from '../../src';\nimport source from 'raw-loader!./App.js';\n\nvar store = createStore({\n  camera: {\n    recording: false,\n    stream: new window.MediaStream(),\n    images: []\n  }\n});\n\nstore.createActions({\n  startMediaStream: function startMediaStream() {\n    return function () {\n      var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(store) {\n        var stream;\n        return _regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return navigator.mediaDevices.getUserMedia({\n                  audio: false,\n                  video: true\n                });\n\n              case 3:\n                stream = _context.sent;\n\n                store.actions.mediaStreamSuccess(stream);\n                _context.next = 10;\n                break;\n\n              case 7:\n                _context.prev = 7;\n                _context.t0 = _context['catch'](0);\n\n                store.actions.mediaStreamError(_context.t0);\n\n              case 10:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, _this, [[0, 7]]);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }();\n  },\n  mediaStreamSuccess: 'camera/STREAM_SUCCESS',\n  mediaStreamError: 'camera/STREAM_ERROR',\n  saveImage: 'camera/ADD_IMAGE'\n});\n\nstore.handleActions((_store$handleActions = {}, _store$handleActions[store.actions.mediaStreamSuccess] = function (state, stream) {\n  state.camera.stream = stream;\n}, _store$handleActions[store.actions.mediaStreamError] = function (state, error) {\n  state.camera.streamError = error;\n}, _store$handleActions[store.actions.saveImage] = function (state, image) {\n  state.camera.images.push(image);\n}, _store$handleActions));\n\nvar pp = function pp(obj) {\n  return JSON.stringify(obj, null, 2);\n};\n\nvar Camera = connect(function (state) {\n  return {\n    stream: state.camera.stream,\n    streamError: state.camera.streamError\n  };\n})(function (_Component) {\n  _inherits(Camera, _Component);\n\n  function Camera() {\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, Camera);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this2), _this2.video = null, _this2.canvas = null, _this2.handleClick = function () {\n      var canvas = _this2.canvas;\n      var ctx = canvas.getContext('2d');\n      var width = _this2.video.videoWidth;\n      var height = _this2.video.videoHeight;\n      canvas.width = width;\n      canvas.height = height;\n      ctx.fillRect(0, 0, width, height);\n      ctx.drawImage(_this2.video, 0, 0, width, height);\n\n      _this2.context.store.actions.saveImage(canvas.toDataURL('image/webp'));\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  Camera.prototype.componentDidMount = function componentDidMount() {\n    var action = this.context.store.actions.startMediaStream('test');\n    action();\n  };\n\n  Camera.prototype.render = function render(_ref2) {\n    var _this3 = this;\n\n    var streamError = _ref2.streamError;\n\n    return h(\n      'div',\n      {\n        style: {\n          paddingTop: 16,\n          paddingRight: 16,\n          paddingBottom: 16,\n          paddingLeft: 16\n        }\n      },\n      h(\n        'h3',\n        { style: {\n            height: streamError ? 24 : 0,\n            lineHeight: '1.2',\n            marginBottom: 16,\n            textAlign: 'center', color: '#ff6b6b',\n            opacity: streamError ? 1 : 0,\n            transition: 'all 250ms ease-in-out'\n          } },\n        streamError ? streamError.name : ''\n      ),\n      h('video', {\n        ref: function ref(node) {\n          _this3.video = node;\n        },\n        style: {\n          width: '100%',\n          maxHeight: 'calc(50vh - 16px)',\n          background: '#212529',\n          cursor: 'pointer'\n        },\n        src: window.URL ? window.URL.createObjectURL(this.props.stream) : this.props.stream,\n        autoplay: true,\n        muted: true,\n        onClick: this.handleClick\n      }),\n      h('canvas', {\n        ref: function ref(node) {\n          _this3.canvas = node;\n        },\n        style: { display: 'none' }\n      }),\n      h(\n        'div',\n        {\n          style: {\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            width: '100%',\n            marginTop: 16,\n            marginBottom: 16\n          }\n        },\n        h(\n          'button',\n          {\n            style: {\n              paddingTop: 8,\n              paddingRight: 16,\n              paddingBottom: 8,\n              paddingLeft: 16,\n              margin: '0 auto',\n              fontSize: 20,\n              lineHeight: '1.6',\n              color: '#adb5bd',\n              background: '#343a40',\n              border: 'none',\n              outline: 'none',\n              boxShadow: 'none',\n              borderRadius: 5,\n              cursor: 'pointer',\n              opacity: streamError ? 0 : 1,\n              transition: 'all 250ms ease-in-out'\n            },\n            disabled: streamError,\n            type: 'button',\n            onClick: this.handleClick\n          },\n          'Take Picture'\n        )\n      )\n    );\n  };\n\n  return Camera;\n}(Component));\n\nvar ImageList = connect(function (state) {\n  return {\n    images: state.camera.images\n  };\n})(function ImageList(_ref3) {\n  var images = _ref3.images;\n\n  return h(\n    'div',\n    {\n      style: {\n        display: 'flex',\n        flexFlow: 'wrap'\n      }\n    },\n    images.map(function (image, i) {\n      return h(Image, { image: image, index: i });\n    })\n  );\n});\n\nfunction Image(_ref4) {\n  var image = _ref4.image,\n      index = _ref4.index;\n\n  return h(\n    'a',\n    {\n      style: {\n        position: 'relative',\n        flex: '0 0 auto',\n        width: '33%',\n        order: index * -1\n      },\n      href: image\n    },\n    h('img', { src: image, style: { width: '100%' } })\n  );\n}\n\nfunction GithubRibbon() {\n  return h('iframe', {\n    src: 'https://ghbtns.com/github-btn.html?user=tkh44&repo=smitty&type=star&count=true&size=large',\n    frameborder: '0',\n    scrolling: '0',\n    width: '160px',\n    height: '30px',\n    style: { marginLeft: 'auto' }\n  });\n}\n\nvar App = connect(function (state) {\n  return state;\n})(function (props) {\n  var _ref5;\n\n  return h(\n    'div',\n    { style: { display: 'flex' } },\n    h(\n      'div',\n      {\n        style: (_ref5 = {\n          flex: '1 0 50%',\n          height: '100vh',\n          background: '#212529',\n          overflow: 'auto',\n          WebkitOverflowScrolling: 'touch'\n        }, _ref5['background'] = props.camera.streamError ? '#f8f9fa' : '#212529', _ref5.cursor = 'pointer', _ref5.transition = 'all 250ms ease-in-out', _ref5)\n      },\n      h(Camera, null)\n    ),\n    h(\n      'div',\n      {\n        style: {\n          flex: '1 0 50%',\n          height: '100vh',\n          background: '#f8f9fa',\n          borderLeft: '1px solid #dee2e6',\n          overflow: 'auto',\n          WebkitOverflowScrolling: 'touch'\n        }\n      },\n      h(\n        'div',\n        {\n          style: {\n            display: 'flex',\n            alignItems: 'center',\n            borderBottom: '1px solid #dee2e6',\n            paddingRight: 8,\n            paddingLeft: 8\n          }\n        },\n        h(\n          'h2',\n          null,\n          'Smitty Demo'\n        ),\n        h(\n          'a',\n          {\n            href: 'https://github.com/tkh44/smitty/tree/master/demo/src',\n            style: { fontSize: '1rem', color: '#329af0', marginLeft: 8 },\n            target: '_blank'\n          },\n          'source'\n        ),\n        h(GithubRibbon, null)\n      ),\n      h(ImageList, null)\n    )\n  );\n});\n\nvar Root = function Root(props) {\n  return h(\n    Provider,\n    { store: store },\n    h(App, null)\n  );\n};\n\nexport default Root;"},0:function(t,e,n){t.exports=n("ctQG")},"97Jz":function(t,e,n){function r(t){function e(e,n){if("function"==typeof t)return t(n.store.state,e)}return function(t){return function(n){function r(t,r){var o=this;n.call(this,t,r),this.state=e(t,r),this.handleStoreUpdate=function(){o.updateAnimId=setTimeout(function(){o.setState(e(o.props,o.context))})},r.store.on("*",this.handleStoreUpdate)}return n&&(r.__proto__=n),r.prototype=Object.create(n&&n.prototype),r.prototype.constructor=r,r.prototype.componentWillUnmount=function(){window.clearTimeout(this.updateAnimId),this.context.store.off("*",this.handleStoreUpdate)},r.prototype.render=function(e,n){return o.h(t,Object.assign({},Object.assign({},e),n,{emit:this.context.store.emit}))},r}(o.Component)}}Object.defineProperty(e,"__esModule",{value:!0});var o=n("EF6w"),i=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getChildContext=function(){return{store:this.props.store}},e.prototype.render=function(t){return t.children[0]},e}(o.Component);e.Provider=i,e.connect=r},D5PV:function(t,e,n){t.exports=n("mNpb")},EF6w:function(t,e,n){!function(t,n){n(e)}(this,function(t){function e(t,e,n){this.nodeName=t,this.attributes=e,this.children=n,this.key=e&&e.key}function n(t,n){var r,o,i,a,s;for(s=arguments.length;s-- >2;)B.push(arguments[s]);for(n&&n.children&&(B.length||B.push(n.children),delete n.children);B.length;)if((i=B.pop())instanceof Array)for(s=i.length;s--;)B.push(i[s]);else null!=i&&i!==!0&&i!==!1&&("number"==typeof i&&(i=String(i)),a="string"==typeof i,a&&o?r[r.length-1]+=i:((r||(r=[])).push(i),o=a));var c=new e(t,n||void 0,r||G);return D.vnode&&D.vnode(c),c}function r(t,e){if(e)for(var n in e)t[n]=e[n];return t}function o(t){return r({},t)}function i(t,e){for(var n=e.split("."),r=0;r<n.length&&t;r++)t=t[n[r]];return t}function a(t){return"function"==typeof t}function s(t){return"string"==typeof t}function c(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}function u(t,e){return n(t.nodeName,r(o(t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function l(t,e,n){var r=e.split(".");return function(e){for(var o=e&&e.target||this,a={},c=a,u=s(n)?i(e,n):o.nodeName?o.type.match(/^che|rad/)?o.checked:o.value:e,l=0;l<r.length-1;l++)c=c[r[l]]||(c[r[l]]=!l&&t.state[r[l]]||{});c[r[l]]=u,t.setState(a)}}function f(t){!t._dirty&&(t._dirty=!0)&&1==Q.push(t)&&(D.debounceRendering||H)(p)}function p(){var t,e=Q;for(Q=[];t=e.pop();)t._dirty&&A(t)}function h(t){var e=t&&t.nodeName;return e&&a(e)&&!(e.prototype&&e.prototype.render)}function d(t,e){return t.nodeName(y(t),e||J)}function m(t,e){return s(e)?t instanceof Text:s(e.nodeName)?!t._componentConstructor&&v(t,e.nodeName):a(e.nodeName)?!t._componentConstructor||t._componentConstructor===e.nodeName||h(e):void 0}function v(t,e){return t.normalizedNodeName===e||W(t.nodeName)===W(e)}function y(t){var e=o(t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(n)for(var r in n)void 0===e[r]&&(e[r]=n[r]);return e}function g(t){var e=t.parentNode;e&&e.removeChild(t)}function b(t,e,n,r,o){if("className"===e&&(e="class"),"class"===e&&r&&"object"==typeof r&&(r=c(r)),"key"===e);else if("class"!==e||o)if("style"===e){if((!r||s(r)||s(n))&&(t.style.cssText=r||""),r&&"object"==typeof r){if(!s(n))for(var i in n)i in r||(t.style[i]="");for(var i in r)t.style[i]="number"!=typeof r[i]||$[i]?r[i]:r[i]+"px"}}else if("dangerouslySetInnerHTML"===e)r&&(t.innerHTML=r.__html||"");else if("o"==e[0]&&"n"==e[1]){var u=t._listeners||(t._listeners={});e=W(e.substring(2)),r?u[e]||t.addEventListener(e,w,!!K[e]):u[e]&&t.removeEventListener(e,w,!!K[e]),u[e]=r}else if("list"!==e&&"type"!==e&&!o&&e in t)_(t,e,null==r?"":r),null!=r&&r!==!1||t.removeAttribute(e);else{var l=o&&e.match(/^xlink\:?(.+)/);null==r||r===!1?l?t.removeAttributeNS("http://www.w3.org/1999/xlink",W(l[1])):t.removeAttribute(e):"object"==typeof r||a(r)||(l?t.setAttributeNS("http://www.w3.org/1999/xlink",W(l[1]),r):t.setAttribute(e,r))}else t.className=r||""}function _(t,e,n){try{t[e]=n}catch(t){}}function w(t){return this._listeners[t.type](D.event&&D.event(t)||t)}function x(t){if(g(t),t instanceof Element){t._component=t._componentConstructor=null;var e=t.normalizedNodeName||W(t.nodeName);(X[e]||(X[e]=[])).push(t)}}function C(t,e){var n=W(t),r=X[n]&&X[n].pop()||(e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t));return r.normalizedNodeName=n,r}function S(){for(var t;t=Y.pop();)D.afterMount&&D.afterMount(t),t.componentDidMount&&t.componentDidMount()}function k(t,e,n,r,o,i){q++||(Z=o&&void 0!==o.ownerSVGElement,tt=t&&!(V in t));var a=E(t,e,n,r);return o&&a.parentNode!==o&&o.appendChild(a),--q||(tt=!1,i||S()),a}function E(t,e,n,r){for(var o=e&&e.attributes&&e.attributes.ref;h(e);)e=d(e,n);if(null==e&&(e=""),s(e))return t&&t instanceof Text&&t.parentNode?t.nodeValue!=e&&(t.nodeValue=e):(t&&N(t),t=document.createTextNode(e)),t;if(a(e.nodeName))return P(t,e,n,r);var i=t,c=String(e.nodeName),u=Z,l=e.children;if(Z="svg"===c||"foreignObject"!==c&&Z,t){if(!v(t,c)){for(i=C(c,Z);t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),N(t)}}else i=C(c,Z);var f=i.firstChild,p=i[V];if(!p){i[V]=p={};for(var m=i.attributes,y=m.length;y--;)p[m[y].name]=m[y].value}return!tt&&l&&1===l.length&&"string"==typeof l[0]&&f&&f instanceof Text&&!f.nextSibling?f.nodeValue!=l[0]&&(f.nodeValue=l[0]):(l&&l.length||f)&&L(i,l,n,r,!!p.dangerouslySetInnerHTML),T(i,e.attributes,p),o&&(p.ref=o)(i),Z=u,i}function L(t,e,n,r,o){var i,a,s,c,u=t.childNodes,l=[],f={},p=0,h=0,d=u.length,v=0,y=e&&e.length;if(d)for(var b=0;b<d;b++){var _=u[b],w=_[V],x=y?(a=_._component)?a.__key:w?w.key:null:null;null!=x?(p++,f[x]=_):(tt||o||w||_ instanceof Text)&&(l[v++]=_)}if(y)for(var b=0;b<y;b++){s=e[b],c=null;var x=s.key;if(null!=x)p&&x in f&&(c=f[x],f[x]=void 0,p--);else if(!c&&h<v)for(i=h;i<v;i++)if((a=l[i])&&m(a,s)){c=a,l[i]=void 0,i===v-1&&v--,i===h&&h++;break}c=E(c,s,n,r),c&&c!==t&&(b>=d?t.appendChild(c):c!==u[b]&&(c===u[b+1]&&g(u[b]),t.insertBefore(c,u[b]||null)))}if(p)for(var b in f)f[b]&&N(f[b]);for(;h<=v;)(c=l[v--])&&N(c)}function N(t,e){var n=t._component;if(n)U(n,!e);else{t[V]&&t[V].ref&&t[V].ref(null),e||x(t);for(var r;r=t.lastChild;)N(r,e)}}function T(t,e,n){var r;for(r in n)e&&r in e||null==n[r]||b(t,r,n[r],n[r]=void 0,Z);if(e)for(r in e)"children"===r||"innerHTML"===r||r in n&&e[r]===("value"===r||"checked"===r?t[r]:n[r])||b(t,r,n[r],n[r]=e[r],Z)}function j(t){var e=t.constructor.name,n=et[e];n?n.push(t):et[e]=[t]}function R(t,e,n){var r=new t(e,n),o=et[t.name];if(M.call(r,e,n),o)for(var i=o.length;i--;)if(o[i].constructor===t){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function O(t,e,n,r,o){t._disable||(t._disable=!0,(t.__ref=e.ref)&&delete e.ref,(t.__key=e.key)&&delete e.key,!t.base||o?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,r),r&&r!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=r),t.prevProps||(t.prevProps=t.props),t.props=e,t._disable=!1,0!==n&&(1!==n&&D.syncComponentUpdates===!1&&t.base?f(t):A(t,1,o)),t.__ref&&t.__ref(t))}function A(t,e,n,i){if(!t._disable){var s,c,u,l,f=t.props,p=t.state,m=t.context,v=t.prevProps||f,g=t.prevState||p,b=t.prevContext||m,_=t.base,w=t.nextBase,x=_||w,C=t._component;if(_&&(t.props=v,t.state=g,t.context=b,2!==e&&t.shouldComponentUpdate&&t.shouldComponentUpdate(f,p,m)===!1?s=!0:t.componentWillUpdate&&t.componentWillUpdate(f,p,m),t.props=f,t.state=p,t.context=m),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!s){for(t.render&&(c=t.render(f,p,m)),t.getChildContext&&(m=r(o(m),t.getChildContext()));h(c);)c=d(c,m);var E,L,T=c&&c.nodeName;if(a(T)){var j=y(c);u=C,u&&u.constructor===T&&j.key==u.__key?O(u,j,1,m):(E=u,u=R(T,j,m),u.nextBase=u.nextBase||w,u._parentComponent=t,t._component=u,O(u,j,0,m),A(u,1,n,!0)),L=u.base}else l=x,E=C,E&&(l=t._component=null),(x||1===e)&&(l&&(l._component=null),L=k(l,c,m,n||!_,x&&x.parentNode,!0));if(x&&L!==x&&u!==C){var P=x.parentNode;P&&L!==P&&(P.replaceChild(L,x),E||(x._component=null,N(x)))}if(E&&U(E,L!==x),t.base=L,L&&!i){for(var M=t,I=t;I=I._parentComponent;)(M=I).base=L;L._component=M,L._componentConstructor=M.constructor}}!_||n?Y.unshift(t):s||(t.componentDidUpdate&&t.componentDidUpdate(v,g,b),D.afterUpdate&&D.afterUpdate(t));var B,G=t._renderCallbacks;if(G)for(;B=G.pop();)B.call(t);q||i||S()}}function P(t,e,n,r){for(var o=t&&t._component,i=o,a=t,s=o&&t._componentConstructor===e.nodeName,c=s,u=y(e);o&&!c&&(o=o._parentComponent);)c=o.constructor===e.nodeName;return o&&c&&(!r||o._component)?(O(o,u,3,n,r),t=o.base):(i&&!s&&(U(i,!0),t=a=null),o=R(e.nodeName,u,n),t&&!o.nextBase&&(o.nextBase=t,a=null),O(o,u,1,n,r),t=o.base,a&&t!==a&&(a._component=null,N(a))),t}function U(t,e){D.beforeUnmount&&D.beforeUnmount(t);var n=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var r=t._component;if(r)U(r,e);else if(n){n[V]&&n[V].ref&&n[V].ref(null),t.nextBase=n,e&&(g(n),j(t));for(var o;o=n.lastChild;)N(o,!e)}t.__ref&&t.__ref(null),t.componentDidUnmount&&t.componentDidUnmount()}function M(t,e){this._dirty=!0,this.context=e,this.props=t,this.state||(this.state={})}function I(t,e,n){return k(n,t,{},!1,e)}var D={},B=[],G=[],F={},W=function(t){return F[t]||(F[t]=t.toLowerCase())},z="undefined"!=typeof Promise&&Promise.resolve(),H=z?function(t){z.then(t)}:setTimeout,J={},V="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",$={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},K={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},Q=[],X={},Y=[],q=0,Z=!1,tt=!1,et={};r(M.prototype,{linkState:function(t,e){var n=this._linkedStates||(this._linkedStates={});return n[t+e]||(n[t+e]=l(this,t,e))},setState:function(t,e){var n=this.state;this.prevState||(this.prevState=o(n)),r(n,a(t)?t(n,this.props):t),e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),f(this)},forceUpdate:function(){A(this,2)},render:function(){}}),t.h=n,t.cloneElement=u,t.Component=M,t.render=I,t.rerender=p,t.options=D})},JJ6A:function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){m&&h&&(m=!1,h.length?d=h.concat(d):v=-1,d.length&&s())}function s(){if(!m){var t=o(a);m=!0;for(var e=d.length;e;){for(h=d,d=[];++v<e;)h&&h[v].run();v=-1,e=d.length}h=null,m=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var l,f,p=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(t){f=r}}();var h,d=[],m=!1,v=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new c(t,e)),1!==d.length||m||o(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=u,p.addListener=u,p.once=u,p.off=u,p.removeListener=u,p.removeAllListeners=u,p.emit=u,p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},NNls:function(t,e){},XCyo:function(t,e,n){(function(e,n){!function(e){"use strict";function r(t,e,n,r){var o=e&&e.prototype instanceof i?e:i,a=Object.create(o.prototype),s=new d(r||[]);return a._invoke=l(t,n,s),a}function o(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function i(){}function a(){}function s(){}function c(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function u(t){function e(n,r,i,a){var s=o(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&b.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){c.value=t,i(c)},a)}a(s.arg)}function r(t,n){function r(){return new Promise(function(r,o){e(t,n,r,o)})}return i=i?i.then(r,r):r()}"object"==typeof n&&n.domain&&(e=n.domain.bind(e));var i;this._invoke=r}function l(t,e,n){var r=k;return function(i,a){if(r===L)throw new Error("Generator is already running");if(r===N){if("throw"===i)throw a;return v()}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var c=f(s,n);if(c){if(c===T)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===k)throw r=N,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=L;var u=o(t,e,n);if("normal"===u.type){if(r=n.done?N:E,u.arg===T)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=N,n.method="throw",n.arg=u.arg)}}}function f(t,e){var n=t.iterator[e.method];if(n===y){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=y,f(t,e),"throw"===e.method))return T;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return T}var r=o(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,T;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=y),e.delegate=null,T):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,T)}function p(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function h(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(p,this),this.reset(!0)}function m(t){if(t){var e=t[w];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(b.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=y,e.done=!0,e};return r.next=r}}return{next:v}}function v(){return{value:y,done:!0}}var y,g=Object.prototype,b=g.hasOwnProperty,_="function"==typeof Symbol?Symbol:{},w=_.iterator||"@@iterator",x=_.toStringTag||"@@toStringTag",C="object"==typeof t,S=e.regeneratorRuntime;if(S)return void(C&&(t.exports=S));S=e.regeneratorRuntime=C?t.exports:{},S.wrap=r;var k="suspendedStart",E="suspendedYield",L="executing",N="completed",T={},j={};j[w]=function(){return this};var R=Object.getPrototypeOf,O=R&&R(R(m([])));O&&O!==g&&b.call(O,w)&&(j=O);var A=s.prototype=i.prototype=Object.create(j);a.prototype=A.constructor=s,s.constructor=a,s[x]=a.displayName="GeneratorFunction",S.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},S.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,s):(t.__proto__=s,x in t||(t[x]="GeneratorFunction")),t.prototype=Object.create(A),t},S.awrap=function(t){return{__await:t}},c(u.prototype),S.AsyncIterator=u,S.async=function(t,e,n,o){var i=new u(r(t,e,n,o));return S.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},c(A),A[x]="Generator",A.toString=function(){return"[object Generator]"},S.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},S.values=m,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(h),!t)for(var e in this)"t"===e.charAt(0)&&b.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=y),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=b.call(o,"catchLoc"),s=b.call(o,"finallyLoc");if(a&&s){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&b.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,T):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),T},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),h(n),T}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;h(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:m(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=y),T}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(e,n("b+29"),n("JJ6A"))},"b+29":function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},ctQG:function(t,e,n){"use strict";function r(){var t=n("jFIt").default;i=n.i(o.render)(n.i(o.h)(t,{test:"foo"}),document.querySelector("#demo"),i)}Object.defineProperty(e,"__esModule",{value:!0});var o=n("EF6w"),i=(n.n(o),void 0);r()},jFIt:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function r(o,i){try{var a=e[o](i),s=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}return r("next")})}}function s(t){var e=t.image,r=t.index;return n.i(h.h)("a",{style:{position:"relative",flex:"0 0 auto",width:"33%",order:r*-1},href:e},n.i(h.h)("img",{src:e,style:{width:"100%"}}))}function c(){return n.i(h.h)("iframe",{src:"https://ghbtns.com/github-btn.html?user=tkh44&repo=smitty&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"160px",height:"30px",style:{marginLeft:"auto"}})}Object.defineProperty(e,"__esModule",{value:!0});var u,l=n("D5PV"),f=n.n(l),p=n("NNls"),h=(n.n(p),n("EF6w")),d=(n.n(h),n("97Jz")),m=(n.n(d),n("lVK7")),v=n("+iyJ"),y=(n.n(v),this),g=n.i(m.a)({camera:{recording:!1,stream:new window.MediaStream,images:[]}});g.createActions({startMediaStream:function(){return function(){var t=a(f.a.mark(function t(e){var n;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.mediaDevices.getUserMedia({audio:!1,video:!0});case 3:n=t.sent,e.actions.mediaStreamSuccess(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.actions.mediaStreamError(t.t0);case 10:case"end":return t.stop()}},t,y,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()},mediaStreamSuccess:"camera/STREAM_SUCCESS",mediaStreamError:"camera/STREAM_ERROR",saveImage:"camera/ADD_IMAGE"}),g.handleActions((u={},u[g.actions.mediaStreamSuccess]=function(t, e){t.camera.stream=e},u[g.actions.mediaStreamError]=function(t, e){t.camera.streamError=e},u[g.actions.saveImage]=function(t, e){t.camera.images.push(e)},u));var b=n.i(d.connect)(function(t){return{stream:t.camera.stream,streamError:t.camera.streamError}})(function(t){function e(){var n,i,a;r(this,e);for(var s=arguments.length,c=Array(s),u=0; u<s; u++)c[u]=arguments[u];return n=i=o(this,t.call.apply(t,[this].concat(c))),i.video=null,i.canvas=null,i.handleClick=function(){var t=i.canvas,e=t.getContext("2d"),n=i.video.videoWidth,r=i.video.videoHeight;t.width=n,t.height=r,e.fillRect(0,0,n,r),e.drawImage(i.video,0,0,n,r),i.context.store.actions.saveImage(t.toDataURL("image/webp"))},a=n,o(i,a)}return i(e,t),e.prototype.componentDidMount=function(){this.context.store.actions.startMediaStream("test")()},e.prototype.render=function(t){var e=this,r=t.streamError;return n.i(h.h)("div",{style:{paddingTop:16,paddingRight:16,paddingBottom:16,paddingLeft:16}},n.i(h.h)("h3",{style:{height:r?24:0,lineHeight:"1.2",marginBottom:16,textAlign:"center",color:"#ff6b6b",opacity:r?1:0,transition:"all 250ms ease-in-out"}},r?r.name:""),n.i(h.h)("video",{ref:function(t){e.video=t},style:{width:"100%",maxHeight:"calc(50vh - 16px)",background:"#212529",cursor:"pointer"},src:window.URL?window.URL.createObjectURL(this.props.stream):this.props.stream,autoplay:!0,muted:!0,onClick:this.handleClick}),n.i(h.h)("canvas",{ref:function(t){e.canvas=t},style:{display:"none"}}),n.i(h.h)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",marginTop:16,marginBottom:16}},n.i(h.h)("button",{style:{paddingTop:8,paddingRight:16,paddingBottom:8,paddingLeft:16,margin:"0 auto",fontSize:20,lineHeight:"1.6",color:"#adb5bd",background:"#343a40",border:"none",outline:"none",boxShadow:"none",borderRadius:5,cursor:"pointer",opacity:r?0:1,transition:"all 250ms ease-in-out"},disabled:r,type:"button",onClick:this.handleClick},"Take Picture")))},e}(h.Component)),_=n.i(d.connect)(function(t){return{images:t.camera.images}})(function(t){var e=t.images;return n.i(h.h)("div",{style:{display:"flex",flexFlow:"wrap"}},e.map(function(t,e){return n.i(h.h)(s,{image:t,index:e})}))}),w=n.i(d.connect)(function(t){return t})(function(t){var e;return n.i(h.h)("div",{style:{display:"flex"}},n.i(h.h)("div",{style:(e={flex:"1 0 50%",height:"100vh",background:"#212529",overflow:"auto",WebkitOverflowScrolling:"touch"},e.background=t.camera.streamError?"#f8f9fa":"#212529",e.cursor="pointer",e.transition="all 250ms ease-in-out",e)},n.i(h.h)(b,null)),n.i(h.h)("div",{style:{flex:"1 0 50%",height:"100vh",background:"#f8f9fa",borderLeft:"1px solid #dee2e6",overflow:"auto",WebkitOverflowScrolling:"touch"}},n.i(h.h)("div",{style:{display:"flex",alignItems:"center",borderBottom:"1px solid #dee2e6",paddingRight:8,paddingLeft:8}},n.i(h.h)("h2",null,"Smitty Demo"),n.i(h.h)("a",{href:"https://github.com/tkh44/smitty/tree/master/demo/src",style:{fontSize:"1rem",color:"#329af0",marginLeft:8},target:"_blank"},"source"),n.i(h.h)(c,null)),n.i(h.h)(_,null)))}),x=function(t){return n.i(h.h)(d.Provider,{store:g},n.i(h.h)(w,null))};e.default=x},lVK7:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t){return new c(t)}var i=n("tNdy"),a=n.n(i);e.a=o;var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=function(){function t(e){r(this,t),this._state=e,this.actions={},this.events=a()(),this.on=this.events.on,this.off=this.events.off,this.emit=this.emit.bind(this),this.handleActions=this.handleActions.bind(this)}return t.prototype.emit=function(t, e){if("function"==typeof t)return t(this);this.events.emit(t,e)},t.prototype.createAction=function(t){var e=this;if("function"==typeof t)return function(n){return e.emit(t(n))};var n=function(n){return e.emit(t,n)};return n.toString=function(){return t.toString()},n},t.prototype.createActions=function(t){for(var e in t)this.actions[e]=this.createAction(t[e])},t.prototype.handleActions=function(t){var e=this,n=function(n){var r=function(r, o){"store:"!==r.substring(0,6)&&(e.state=t[n](e.state,o,r)||e.state,e.events.emit("store:change",e.state))};"*"!==n&&(r=r.bind(null,n)),e.events.on(n,r)};for(var r in t)n(r)},s(t,[{key:"state",get:function(){return this._state},set:function(t){this._state=t}}]),t}()},mNpb:function(t, e, n){(function(e){var r="object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this,o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("XCyo"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}}).call(e,n("b+29"))},tNdy:function(t,e){function n(t){return t=t||Object.create(null),{on:function(e,n){(t[e]||(t[e]=[])).push(n)},off:function(e,n){var r=t[e]||(t[e]=[]);r.splice(r.indexOf(n)>>>0,1)},emit:function(e,n){(t[e]||[]).map(function(t){t(n)}),(t["*"]||[]).map(function(t){t(e,n)})}}}t.exports=n}},[0]);
//# sourceMappingURL=demo.f38bd850.js.map