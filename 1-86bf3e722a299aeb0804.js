(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var r=n(0),o=n.n(r),a=n(1),i=n.n(a),l=n(170),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(211),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(48);n.d(t,"parsePath",function(){return d.a});var p=o.a.createContext({}),f=function(e){return o.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},171:function(e,t,n){"use strict";n.d(t,"g",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return l}),n.d(t,"d",function(){return c}),n.d(t,"f",function(){return u}),n.d(t,"e",function(){return s});var r=n(11),o=function(e){return{type:r.g,payload:{headerHeight:e}}},a=function(e){return{type:r.b,payload:{anchorOpen:e}}},i=function(e){return{type:r.f,payload:{sidebarOpen:e}}},l=function(e){return{type:r.e,payload:{sidebarDocked:e}}},c=function(e){return{type:r.a,payload:{expandedKeys:e,autoExpandParent:!1}}},u=function(){return{type:r.d}},s=function(){return{type:r.c}}},194:function(e,t,n){"use strict";n(89),n(53);var r=n(246),o=n(0),a=n.n(o),i=n(1),l=n.n(i),c=n(247),u=n.n(c),s=n(169),d=n(8),p=n.n(d),f=n(257),h=n.n(f),m=n(51),g=n(171),b=(n(271),n(272),n(273)),y=function(){return a.a.createElement(s.StaticQuery,{query:"2236891844",render:function(e){var t=e.allMenuItems.edges.map(function(e){return e.node}).reverse();return a.a.createElement("div",null,t.map(function(e){return a.a.createElement("div",{style:{marginLeft:"2em",float:"right"},key:t.indexOf(e)},a.a.createElement("p",{style:{margin:0,fontSize:"1rem"}},a.a.createElement(s.Link,{to:e.link,style:{color:"white",textDecoration:"none"}},e.name)))}))},data:b})},E=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).componentDidUpdate=function(){t.props.updateHeaderHeight(t.props.size.height)},t}return p()(t,e),t.prototype.render=function(){var e=this.props.siteTitle;return a.a.createElement("div",{style:{position:"fixed",top:0,width:"100%",zIndex:1e3,background:"cornflowerblue",marginBottom:"1.45rem"}},a.a.createElement("div",{style:{margin:"0 auto",maxWidth:1360,padding:"0.8rem 1.0875rem"}},a.a.createElement("div",{style:{float:"left",marginBottom:"0.8em"}},a.a.createElement("h1",{style:{margin:0,fontSize:"1.25rem"}},a.a.createElement(s.Link,{to:"/",style:{color:"white",textDecoration:"none"}},e))),a.a.createElement(y,null)))},t}(o.Component),v={updateHeaderHeight:g.g},k=Object(m.b)(function(){return{}},v)(h()({monitorHeight:!0})(E)),S=(n(274),n(29),n(275)),w=(n(90),function(e){return e.layout.sidebar}),O=function(e){return e.layout.header.height},x=function(e){return e.layout.sidebar.docked},P=function(e){return e.layout.content.onPostPage},C=n(277),D=n.n(C),A=n(71),M=(n(278),n(214),n(92),n(86),n(87),n(88),n(281)),R=n(287),T=n.n(R),H=(n(282),n(286),T.a.SubMenu),q=function(e){var t=[],n=[];return e.forEach(function(e){if(e.parents===[]||null===e.parents)t.push(e);else{for(var r=t,o=function(t){if(0===r.filter(function(n){return n.title===e.parents[t]&&n.children}).length){var o={key:"tree/"+e.parents[t],title:e.parents[t],children:[]};r.push(o),n.push(o)}r=r.find(function(n){return n.title===e.parents[t]&&n.children}).children},a=0;a<e.parents.length;a++)o(a);r.push(e)}}),[t,n]},j=function(e){e.sort(function(e,t){return(e.children&&t.children||!e.children&&!t.children)&&e.title>t.title?1:e.children?1:-1})},I=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).onSetSidebarOpen=function(){t.props.onSetSidebarOpen(!1)},t}return p()(t,e),t.prototype.render=function(){var e=this,t=this.props.sidebar.expandedKeys,n=this.props.root;return a.a.createElement(s.StaticQuery,{query:"1176653062",render:function(r){var o=function(e){var t=e.map(function(e){return{path:e.node.fields.slug,key:e.node.id,title:e.node.frontmatter.title,parents:e.node.frontmatter.parents}});return q(t)}(r.allMarkdownRemark.edges.filter(function(e){return e.node.fields.slug.startsWith(n)})),i=o[0],l=o[1];j(i);var c=r.allMarkdownRemark.edges.filter(function(e){return window.location.pathname===e.node.fields.slug||window.location.pathname+"/"===e.node.fields.slug}).length>0?[t]:[],u=l.map(function(e){return e.key});return a.a.createElement("div",null,a.a.createElement(T.a,{mode:"inline",defaultOpenKeys:u,selectedKeys:c,inlineIndent:12},function t(n){return n.map(function(n){return n.children?(j(n.children),a.a.createElement(H,{key:n.key,title:a.a.createElement("span",{style:{fontWeight:900}},n.title)},t(n.children))):a.a.createElement(T.a.Item,{key:n.key},a.a.createElement(s.Link,{to:n.path,onClick:e.onSetSidebarOpen},n.title))})}(i)))},data:M})},t}(o.Component),W={onSetSidebarOpen:g.c},L=Object(m.b)(function(e){return{sidebar:w(e)}},W)(I),Q=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.onSetSidebarDocked,n=e.headerHeight,r=e.sidebarDocked,o=e.onPostPage,i=e.root;return a.a.createElement(D.a,{maxWidth:A.a,onChange:function(e){t(!e)}},function(e){return r&&o?a.a.createElement(S.a,{styles:Object.assign({},A.b,{root:Object.assign({},A.b.root,{top:n+30})}),sidebar:a.a.createElement(L,{root:i}),docked:!e,shadow:!1},a.a.createElement("b",null)):a.a.createElement(a.a.Fragment,null)})},t}(o.Component),z={onSetSidebarOpen:g.c,onSetSidebarDocked:g.b},B=Object(m.b)(function(e){return{headerHeight:O(e),sidebarDocked:x(e),onPostPage:P(e)}},z)(Q),F=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.sidebarDocked,n=e.headerHeight,r=e.onPostPage;return a.a.createElement("div",{style:{position:"absolute",top:t||!r?n+30:n+70,left:t?"20%":0,right:t?"15%":0,bottom:0,overflow:t?"visible":"auto"}},a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},this.props.children))},t}(o.Component),G=Object(m.b)(function(e){return{sidebarDocked:x(e),headerHeight:O(e),onPostPage:P(e)}})(F),K=n(346),U=n.n(K),J=(n(343),n(345),U.a.Link),N=function(e){for(var t=[],n=0;n<e.length;n++)for(var r=n+1;r<e.length;r++)if(e[n].depth+1===e[r].depth)e[n].children.push(e[r]),t.push(r);else if(e[n].depth>=e[r].depth)break;t.sort(function(e,t){return t-e}).forEach(function(t){return e.splice(t,1)})},Y=function(e){function t(t){var n;return(n=e.call(this,t)||this).onSetAnchorOpen=function(){n.props.onSetAnchorOpen(!1)},n.state={anchors:[]},n}p()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=document.getElementsByClassName("post-toc-anchor");this.setState({anchors:function(e){var t=0;return e=[].slice.call(e).map(function(e){var n=parseInt(e.parentElement.nodeName[1]);return 0!==t&&n>t&&(n=t+1),t=n,{href:"#"+e.parentElement.id,title:e.parentElement.innerText,depth:n,children:[]}}),N(e),e}(e)})},n.render=function(){var e=this.state.anchors,t=this.props,n=t.offsetTop,r=t.affix;return a.a.createElement(U.a,{offsetTop:n,onClick:this.onSetAnchorOpen,affix:r},function e(t){return t.map(function(t){return t.children.length>0?a.a.createElement(J,{href:t.href,title:t.title,key:t.href},e(t.children)):a.a.createElement(J,{href:t.href,title:t.title,key:t.href})})}(e))},t}(o.Component),V={onSetAnchorOpen:g.a},X=Object(m.b)(function(){return{}},V)(Y),Z=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.headerHeight,n=e.sidebarDocked,r=e.onPostPage;return n&&r?a.a.createElement("div",{style:{position:"fixed",top:t+30,left:"85%",right:10,bottom:0,overflow:"hidden"}},a.a.createElement("div",{style:{position:"absolute",left:10,right:0,top:0,bottom:0}},a.a.createElement(X,{offsetTop:t+30,affix:!0}))):a.a.createElement(a.a.Fragment,null)},t}(o.Component),$=Object(m.b)(function(e){return{headerHeight:O(e),sidebarDocked:x(e),onPostPage:P(e)}})(Z),_=n(235),ee=n.n(_),te=(n(234),function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).onSetSidebarOpen=function(){t.props.onSetSidebarOpen(!0)},t.onSetSidebarClose=function(){t.props.onSetSidebarOpen(!1)},t.onSetAnchorOpen=function(){t.props.onSetAnchorOpen(!0)},t.onSetAnchorClose=function(){t.props.onSetAnchorOpen(!1)},t}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.headerHeight,n=e.siderbarDocked,r=e.sidebarOpen,o=e.anchorOpen,i=e.onPostPage;return n||!i?a.a.createElement(a.a.Fragment,null):a.a.createElement("div",{style:{position:"fixed",top:t,width:"100%",height:40,zIndex:1e3,background:"aliceblue",marginBottom:"1.45rem"}},!o&&a.a.createElement("div",{style:{position:"absolute",left:8,top:4}},r?a.a.createElement(ee.a,{icon:"close",onClick:this.onSetSidebarClose}):a.a.createElement(ee.a,{icon:"fullscreen",onClick:this.onSetSidebarOpen}),r&&a.a.createElement("div",{style:{position:"fixed",top:t+40,left:0,right:0,bottom:0,backgroundColor:"white"}},a.a.createElement("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0,overflowY:"auto",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"}},a.a.createElement(L,null)))),!r&&a.a.createElement("div",{style:{position:"absolute",right:8,top:4}},o?a.a.createElement(ee.a,{icon:"close",onClick:this.onSetAnchorClose}):a.a.createElement(ee.a,{icon:"dash",onClick:this.onSetAnchorOpen}),o&&a.a.createElement("div",{style:{position:"fixed",top:t+40,left:0,right:10,bottom:0,overflowY:"auto",backgroundColor:"white",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"}},a.a.createElement(X,{offsetTop:t+70,affix:!1}))))},t}(o.Component)),ne={onSetSidebarOpen:g.c,onSetAnchorOpen:g.a},re=Object(m.b)(function(e){return{headerHeight:O(e),siderbarDocked:x(e),sidebarOpen:w(e).open,anchorOpen:(t=e,t.layout.anchor).open,onPostPage:P(e)};var t},ne)(te),oe=function(e){var t=e.children,n=e.setPostPageOn,o=e.setPostPageOff,i=e.sidebarRoot;return a.a.createElement(s.StaticQuery,{query:"3168754476",render:function(e){var r=e.allMarkdownRemark.edges.map(function(e){return e.node.fields.slug});return"undefined"!=typeof window&&(r.indexOf(window.location.pathname)>=0?n():o()),a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},a.a.createElement("html",{lang:"en"})),a.a.createElement(k,{siteTitle:e.site.siteMetadata.title}),a.a.createElement(re,null),a.a.createElement(B,{root:i}),a.a.createElement($,null),a.a.createElement(G,null,t))},data:r})};oe.propTypes={children:l.a.node.isRequired};var ae={setPostPageOn:g.f,setPostPageOff:g.e},ie=Object(m.b)(function(){return{}},ae)(oe);t.a=ie},211:function(e,t,n){var r;e.exports=(r=n(256))&&r.default||r},246:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Markdown Starter"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/blog/README"}}},{node:{fields:{slug:"/docs/test"}}},{node:{fields:{slug:"/docs/test-1/test1"}}},{node:{fields:{slug:"/blog/hello-world"}}}]}}}},256:function(e,t,n){"use strict";n.r(t);n(29);var r=n(0),o=n.n(r),a=n(1),i=n.n(a),l=n(79),c=n(3),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},273:function(e){e.exports={data:{allMenuItems:{edges:[{node:{name:"Docs",link:"/docs/test"}},{node:{name:"Blog",link:"/blog"}}]}}}},274:function(e,t,n){},281:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/blog/README"},id:"7a331b2f-1702-5455-804d-6bf65a5c63f9",frontmatter:{title:"README",parents:null}}},{node:{fields:{slug:"/blog/hello-world"},id:"fbb9b85c-9b99-5641-949d-797d9a576254",frontmatter:{title:"Hello World",parents:null}}},{node:{fields:{slug:"/docs/test"},id:"97556c61-3828-5f31-be4b-9449da396019",frontmatter:{title:"Test",parents:[]}}},{node:{fields:{slug:"/docs/test-1/test1"},id:"880d3818-80d2-5a6b-bf00-29f0971461d6",frontmatter:{title:"Test1",parents:["Test-1"]}}}]}}}},286:function(e,t,n){},345:function(e,t,n){}}]);
//# sourceMappingURL=1-86bf3e722a299aeb0804.js.map