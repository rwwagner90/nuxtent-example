webpackJsonp([2],{JFl0:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("g2tt"),a=e("Rulc"),s=e("VU/8")(r.a,a.a,!1,null,null,null);s.options.__file="pages/blog/index.vue",n.default=s.exports},Rulc:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"container"},[e("nuxt-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" /\n  Blog\n      "),e("h1",[t._v("Blog posts")]),e("ul",t._l(t.posts,function(n){return e("li",{key:n.permalink},[e("nuxt-link",{attrs:{to:n.permalink}},[t._v(t._s(n.linktitle))])],1)}))],1)};r._withStripped=!0;var a={render:r,staticRenderFns:[]};n.a=a},g2tt:function(t,n,e){"use strict";var r=e("Xxa5"),a=e.n(r),s=e("exGp"),u=e.n(s);n.a={asyncData:function(){var t=u()(a.a.mark(function t(n){var e,r=n.app;n.route;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$content("/").getAll();case 2:return e=t.sent,t.abrupt("return",{posts:e});case 4:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}()}}});