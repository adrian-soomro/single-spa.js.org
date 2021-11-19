(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{188:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return a?r.a.createElement(m,s(s({ref:t},c),{},{components:a})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(188)),i={title:"single-spa 5",author:"Joel Denning",authorURL:"https://twitter.com/joelbdenning",authorImageURL:"https://avatars2.githubusercontent.com/u/5524384?s=460&v=4"},s={permalink:"/blog/2020/02/24/single-spa-5",source:"@site/blog/2020-02-24-single-spa-5.md",description:"Announcing single-spa@5",date:"2020-02-24T00:00:00.000Z",tags:[],title:"single-spa 5",readingTime:4.305,truncated:!1,nextItem:{title:"single-spa Inspector and 4.1",permalink:"/blog/2019/02/20/single-spa-inspector"}},l=[{value:"Migration from 4 to 5",id:"migration-from-4-to-5",children:[]},{value:"Performance improvements",id:"performance-improvements",children:[]},{value:"single-spa CLI",id:"single-spa-cli",children:[]},{value:"Tutorial videos",id:"tutorial-videos",children:[]},{value:"New example repositories",id:"new-example-repositories",children:[]},{value:"Documentation overhaul",id:"documentation-overhaul",children:[]},{value:"Development builds and error codes",id:"development-builds-and-error-codes",children:[]},{value:"Governance",id:"governance",children:[]},{value:"Where next?",id:"where-next",children:[]}],c={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"announcing-single-spa5"},"Announcing single-spa@5"),Object(o.b)("p",null,"Today we released ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:single-spa@5.0.0"}),"single-spa@5.0.0"),"."),Object(o.b)("p",null,"Here are the highlights:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Performance focus: 35% decrease in library size."),Object(o.b)("li",{parentName:"ul"},"A CLI for single-spa: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/create-single-spa"}),"create-single-spa")),Object(o.b)("li",{parentName:"ul"},"New tutorial videos: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.youtube.com/playlist?list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU"}),"Youtube playlist")," / ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://space.bilibili.com/495254378/video"}),"Bilibili space")),Object(o.b)("li",{parentName:"ul"},"New framework-specific example repositories - ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/react-microfrontends"}),"React example"),", ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/vue-microfrontends"}),"Vue example"),", ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/polyglot-microfrontends"}),"Multiple frameworks example"),", ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/examples"}),"Full list")),Object(o.b)("li",{parentName:"ul"},"Massively improved documentation, including ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/microfrontends-concept"}),"Concept: Microfrontends")," and ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/recommended-setup"}),"The Recommended Setup"),".")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/releases/tag/v5.0.0"}),"Release notes here")),Object(o.b)("h2",{id:"migration-from-4-to-5"},"Migration from 4 to 5"),Object(o.b)("p",null,"For every user we're aware of, ",Object(o.b)("strong",{parentName:"p"},"you do not need to change anything in your code in order to upgrade to single-spa@5"),". The breaking changes listed in the release notes are the removal of features that were originally used by Canopy Tax, but were never documented."),Object(o.b)("p",null,"If installing from npm, you can simply ",Object(o.b)("inlineCode",{parentName:"p"},"npm install --save single-spa@5.0.0")," or ",Object(o.b)("inlineCode",{parentName:"p"},"yarn add single-spa@5.0.0"),"."),Object(o.b)("p",null,"Alternatively, single-spa is available on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cdnjs.com/libraries/single-spa"}),"cdnjs"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.jsdelivr.com/package/npm/single-spa"}),"jsdelivr"),", and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://unpkg.com/browse/single-spa/"}),"unpkg"),"."),Object(o.b)("p",null,"The single-spa core team is committed to treating our users well, which includes not introducing massive breaking changes. The core single-spa API has not seen massive breaking changes ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/releases/tag/v3.0.0"}),"since single-spa@3 in August 2016"),". We have added features and improved things, but single-spa is a stable technology. We are committed to maintaining it, documenting it, and adjusting it as technologies like in-browser modules become more and more popular and viable."),Object(o.b)("h2",{id:"performance-improvements"},"Performance improvements"),Object(o.b)("p",null,"The ESM version of single-spa@4 was 23.8kb (7.2kb gzipped). That was improved in single-spa@5 to 15.5kb (5.1kb gzipped). We did this by optimizing our build process and removing unused features."),Object(o.b)("h2",{id:"single-spa-cli"},"single-spa CLI"),Object(o.b)("p",null,"Since single-spa's inception, bundler configuration has been a huge source of user pain. We have heard this pain and implemented ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/create-single-spa"}),"create-single-spa"),", which creates (and sometimes can update) repositories that are ready to be used as single-spa microfrontends. For Angular and Vue, the official CLIs are used with a few extra plugins automatically installed. For React, a default webpack config with decent eslint / prettier defaults is set up."),Object(o.b)("p",null,"Additionally, we have added a lot of documentation for webpack in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/recommended-setup#build-tools-webpack--rollup"}),"The Recommended Setup"),"."),Object(o.b)("h2",{id:"tutorial-videos"},"Tutorial videos"),Object(o.b)("p",null,"We understand that single-spa is more than just a library - it is an architecture. The single-spa library itself is the core, but the surrounding ecosystem of concepts and libraries are equally important to successfully migrating to single-spa and having it work for you. As such, we have created a Youtube playlist, currently consisting of seven videos, to help you get started."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/playlist?list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU"}),"Youtube playlist")," / ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://space.bilibili.com/495254378/video"}),"Bilibili space")),Object(o.b)("p",null,"The videos currently cover the following topics:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"What are Microfrontends?"),Object(o.b)("li",{parentName:"ul"},"In-browser vs build-time JavaScript modules"),Object(o.b)("li",{parentName:"ul"},"Import Maps"),Object(o.b)("li",{parentName:"ul"},"Local Development with single-spa and import maps"),Object(o.b)("li",{parentName:"ul"},"Deploying Microfrontends / Continuous Integration (CI)"),Object(o.b)("li",{parentName:"ul"},"SystemJS intro"),Object(o.b)("li",{parentName:"ul"},"Lazy Loading"),Object(o.b)("li",{parentName:"ul"},"Bundlers, webpack, and rollup.")),Object(o.b)("h2",{id:"new-example-repositories"},"New example repositories"),Object(o.b)("p",null,"What started out as Canopy Tax's special sauce for independently deployed frontend microservices is now fully accessible to the public with our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/examples"}),"new set of example repos"),". We have a React example, a Vue example, and a polyglot (multiple framework) example. We hope to add an Angular example, after we achieve support for Angular 9. These example repositories are actively watched and maintained by the single-spa core team, and reflect our current opinions on the best, production-viable way to do microfrontends."),Object(o.b)("p",null,"Furthermore, we have deployed each of the examples to our new domains:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://react.microfrontends.app"}),"https://react.microfrontends.app")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://polyglot.microfrontends.app"}),"https://polyglot.microfrontends.app")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://vue.microfrontends.app"}),"https://vue.microfrontends.app"))),Object(o.b)("h2",{id:"documentation-overhaul"},"Documentation overhaul"),Object(o.b)("p",null,"We removed several dated documentation pages, and added several that were very much lacking. Here are a few pages that give you the most bang for your buck:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/microfrontends-concept"}),"Concept: Microfrontend")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/recommended-setup"}),"The Recommended Setup")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/create-single-spa"}),"create-single-spa CLI"))),Object(o.b)("h2",{id:"development-builds-and-error-codes"},"Development builds and error codes"),Object(o.b)("p",null,"Taking inspiration from the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/docs/optimizing-performance.html#use-the-production-build"}),"react development and production builds"),", we now publish to NPM both development and production builds in the following formats: UMD, ESM, and System.register."),Object(o.b)("p",null,"You can see the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://unpkg.com/browse/single-spa@5.0.0/lib/"}),"published build files here"),". The ",Object(o.b)("inlineCode",{parentName:"p"},".dev.js")," files provide full debugging information in the browser console, whereas the ",Object(o.b)("inlineCode",{parentName:"p"},".min.js")," files give you a numeric error code and a link to a documentation page that explains the error. We hope that these error codes and documentation for them will improve discoverability of relevant documentation when you're setting up single-spa."),Object(o.b)("p",null,"An example of these new documentation pages for error codes is ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/error/?code=35&arg=application&arg=app1&arg=%7B%7D"}),"found here"),"."),Object(o.b)("h2",{id:"governance"},"Governance"),Object(o.b)("p",null,"Some of you may have noticed that we recently moved all github repos from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/CanopyTax"}),"https://github.com/CanopyTax")," to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/single-spa"}),"https://github.com/single-spa"),". Canopy Tax was the company where single-spa was first authored, but as a core team we asked to move ownership and governance of the projects to an organization fully managed by the open source community. In agreement with Canopy, we made that change."),Object(o.b)("p",null,"This change does not mean anything drastic for single-spa. Its license was and is MIT, and we have no plans to do anything with the project besides make it better."),Object(o.b)("h2",{id:"where-next"},"Where next?"),Object(o.b)("p",null,"We are actively ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/single-spa/zh-hans.single-spa.js.org"}),"translating the single-spa documentation to Chinese"),", and hope to add other languages soon. We will add full ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-angular/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+angular+9"}),"Angular 9 support")," soon, and hope to add ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/issues/103"}),"server rendering")," in an upcoming release."),Object(o.b)("p",null,"Please ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/contributing-overview"}),"contribute to our code")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/ecosystem"}),"ecosystem"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://join.slack.com/t/single-spa/shared_invite/zt-yxfqpl2u-PNx3uZtS3pgAXbOBWsdwOA"}),"join our single-spa slack channel"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/Single_spa"}),"follow our official Twitter account"),", and contribute to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://opencollective.com/single-spa"}),"our open collective"),". The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/contributors"}),"single-spa core team")," all have full-time jobs and maintain this project on a volunteer basis."))}p.isMDXComponent=!0}}]);