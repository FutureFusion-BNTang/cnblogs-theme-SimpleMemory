"use strict";(self.webpackChunkcnblogs_theme_simplememory_2_2_13=self.webpackChunkcnblogs_theme_simplememory_2_2_13||[]).push([[583],{1568:function(i,n){n.Z='<div class="links-item"> <img src="##avatar##"> <p class="links-info"> <span class="links-info-name">##name##</span> <span class="links-info-text">##introduction##</span> </p> <div class="links-icon"> <a href="##url##" target="_blank" title="访问链接"><i class="iconfont ##icon##"></i></a> </div> </div>'},3480:function(i,n,t){t.a(i,(async function(i,e){try{t.r(n),t.d(n,{default:function(){return c}});var l=t(3515),a=t(1568),s=t(8479),o=i([l,s]);function c(){(0,l.default)(),(()=>{if($.__config.links.page.length){t.e(297).then(t.bind(t,8724));let i=$("#cnblogs_post_body"),n="";$.each($.__config.links.page,(i=>{let t=$.__config.links.page[i];t.title&&(n+='<h1 class="iconfont '+t.icon+'" style="'+t.style+'">'+t.title+"</h1>"),n+='<div id="links-box">',$.each(t.links,(i=>{let e=a.Z,l=t.links[i];e=$.__tools.batchTempReplacement(e,[["avatar",void 0!==l.avatar?l.avatar:""],["name",void 0!==l.name?l.name:""],["introduction",void 0!==l.introduction?l.introduction:""],["url",void 0!==l.url?l.url:""],["icon",i%3==0?"icon-zhifeiji":i%3==1?"icon-like-fill":"icon-flashlight-fill"]]),n+=e})),n+="</div>"}));let e=$(".articleSuffix-flg");e.length?e.before(n):i.append(n)}})(),(0,s.Z)()}[l,s]=o.then?(await o)():o,e()}catch(f){e(f)}}))}}]);