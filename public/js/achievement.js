/*! For license information please see achievement.js.LICENSE.txt */
!function(e){var t={};function i(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=14)}({14:function(e,t,i){e.exports=i("i7gT")},"15tO":function(e,t,i){var r=i("hcby");"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(r,a);r.locals&&(e.exports=r.locals)},"5ZeN":function(e,t,i){"use strict";var r={name:"picture-input",props:{width:{type:[String,Number],default:Number.MAX_SAFE_INTEGER},height:{type:[String,Number],default:Number.MAX_SAFE_INTEGER},margin:{type:[String,Number],default:0},accept:{type:String,default:"image/*"},size:{type:[String,Number],default:Number.MAX_SAFE_INTEGER},name:{type:String,default:null},id:{type:[String,Number],default:null},buttonClass:{type:String,default:"btn btn-primary button"},removeButtonClass:{type:String,default:"btn btn-secondary button secondary"},aspectButtonClass:{type:String,default:"btn btn-secondary button secondary"},prefill:{type:[String,File],default:""},prefillOptions:{type:Object,default:()=>({})},crop:{type:Boolean,default:!0},radius:{type:[String,Number],default:0},removable:{type:Boolean,default:!1},hideChangeButton:{type:Boolean,default:!1},autoToggleAspectRatio:{type:Boolean,default:!1},toggleAspectRatio:{type:Boolean,default:!1},changeOnClick:{type:Boolean,default:!0},plain:{type:Boolean,default:!1},zIndex:{type:Number,default:1e4},alertOnError:{type:Boolean,default:!0},customStrings:{type:Object,default:()=>({})}},watch:{prefill(){this.prefill?this.preloadImage(this.prefill,this.prefillOptions):this.removeImage()}},data:()=>({imageSelected:!1,previewHeight:0,previewWidth:0,draggingOver:!1,canvasWidth:0,canvasHeight:0,strings:{upload:"<p>Your device does not support file uploading.</p>",drag:"Drag an image or <br>click here to select a file",tap:"Tap here to select a photo <br>from your gallery",change:"Change Photo",aspect:"Landscape/Portrait",remove:"Remove Photo",select:"Select a Photo",selected:"<p>Photo successfully selected!</p>",fileSize:"The file size exceeds the limit",fileType:"This file type is not supported."}}),mounted(){if(this.updateStrings(),this.prefill&&this.preloadImage(this.prefill,this.prefillOptions),this.$nextTick(()=>{window.addEventListener("resize",this.onResize),this.onResize()}),this.supportsPreview){this.pixelRatio=Math.round(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI);const e=this.$refs.previewCanvas;e.getContext&&(this.context=e.getContext("2d"),this.context.scale(this.pixelRatio,this.pixelRatio))}"image/*"!==this.accept&&(this.fileTypes=this.accept.split(","),this.fileTypes=this.fileTypes.map(e=>e.trim())),this.canvasWidth=this.width,this.canvasHeight=this.height,this.$on("error",this.onError)},beforeDestroy(){window.removeEventListener("resize",this.onResize),this.$off("error",this.onError)},methods:{updateStrings(){for(let e in this.customStrings)e in this.strings&&"string"==typeof this.customStrings[e]&&(this.strings[e]=this.customStrings[e])},onClick(){this.imageSelected?(this.changeOnClick&&this.selectImage(),this.$emit("click")):this.selectImage()},onResize(){this.resizeCanvas(),this.imageObject&&this.drawImage(this.imageObject)},onDragStart(){this.supportsDragAndDrop&&(this.draggingOver=!0)},onDragStop(){this.supportsDragAndDrop&&(this.draggingOver=!1)},onFileDrop(e){this.onDragStop(),this.onFileChange(e)},onFileChange(e,t){let i=e.target.files||e.dataTransfer.files;if(i.length)if(i[0].size<=0||i[0].size>1024*this.size*1024)this.$emit("error",{type:"fileSize",fileSize:i[0].size,fileType:i[0].type,fileName:i[0].name,message:this.strings.fileSize+" ("+this.size+"MB)"});else if(i[0].name!==this.fileName||i[0].size!==this.fileSize||this.fileModified!==i[0].lastModified){if(this.file=i[0],this.fileName=i[0].name,this.fileSize=i[0].size,this.fileModified=i[0].lastModified,this.fileType=i[0].type,"image/*"===this.accept){if("image/"!==i[0].type.substr(0,6))return}else if(-1===this.fileTypes.indexOf(i[0].type))return void this.$emit("error",{type:"fileType",fileSize:i[0].size,fileType:i[0].type,fileName:i[0].name,message:this.strings.fileType});this.imageSelected=!0,this.image="",this.supportsPreview?this.loadImage(i[0],t||!1):t?this.$emit("prefill"):this.$emit("change",this.image)}},onError(e){this.alertOnError&&alert(e.message)},loadImage(e,t){this.getEXIFOrientation(e,i=>{this.setOrientation(i);let r=new FileReader;r.onload=e=>{this.image=e.target.result,t?this.$emit("prefill"):this.$emit("change",this.image),this.imageObject=new Image,this.imageObject.onload=()=>{if(this.autoToggleAspectRatio){this.getOrientation(this.canvasWidth,this.canvasHeight)!==this.getOrientation(this.imageObject.width,this.imageObject.height)&&this.rotateCanvas()}this.drawImage(this.imageObject)},this.imageObject.src=this.image},r.readAsDataURL(e)})},drawImage(e){this.imageWidth=e.width,this.imageHeight=e.height,this.imageRatio=e.width/e.height;let t=0,i=0,r=this.previewWidth,a=this.previewHeight;const n=this.previewWidth/this.previewHeight;this.crop?this.imageRatio>=n?(r=a*this.imageRatio,t=(this.previewWidth-r)/2):(a=r/this.imageRatio,i=(this.previewHeight-a)/2):this.imageRatio>=n?(a=r/this.imageRatio,i=(this.previewHeight-a)/2):(r=a*this.imageRatio,t=(this.previewWidth-r)/2);const s=this.$refs.previewCanvas;s.style.background="none",s.width=this.previewWidth*this.pixelRatio,s.height=this.previewHeight*this.pixelRatio,this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,s.width,s.height),this.rotate&&(this.context.translate(t*this.pixelRatio,i*this.pixelRatio),this.context.translate(r/2*this.pixelRatio,a/2*this.pixelRatio),this.context.rotate(this.rotate),t=-r/2,i=-a/2),this.context.drawImage(e,t*this.pixelRatio,i*this.pixelRatio,r*this.pixelRatio,a*this.pixelRatio)},selectImage(){this.$refs.fileInput.click()},removeImage(){this.$refs.fileInput.value="",this.$refs.fileInput.type="",this.$refs.fileInput.type="file",this.fileName="",this.fileType="",this.fileSize=0,this.fileModified=0,this.imageSelected=!1,this.image="",this.file=null,this.imageObject=null,this.$refs.previewCanvas.style.backgroundColor="rgba(200,200,200,.25)",this.$refs.previewCanvas.width=this.previewWidth*this.pixelRatio,this.$emit("remove")},rotateImage(){this.rotateCanvas(),this.imageObject&&this.drawImage(this.imageObject);let e=this.getOrientation(this.canvasWidth,this.canvasHeight);this.$emit("aspectratiochange",e)},resizeCanvas(){let e=this.canvasWidth/this.canvasHeight,t=this.$refs.container.clientWidth;(this.toggleAspectRatio||t!==this.containerWidth)&&(this.containerWidth=t,this.previewWidth=Math.min(this.containerWidth-2*this.margin,this.canvasWidth),this.previewHeight=this.previewWidth/e)},getOrientation(e,t){let i="square";return e>t?i="landscape":e<t&&(i="portrait"),i},switchCanvasOrientation(){const e=this.canvasWidth,t=this.canvasHeight;this.canvasWidth=t,this.canvasHeight=e},rotateCanvas(){this.switchCanvasOrientation(),this.resizeCanvas()},setOrientation(e){this.rotate=!1,8===e?this.rotate=-Math.PI/2:6===e?this.rotate=Math.PI/2:3===e&&(this.rotate=-Math.PI)},getEXIFOrientation(e,t){var i=new FileReader;i.onload=e=>{var i=new DataView(e.target.result);if(65496!==i.getUint16(0,!1))return t(-2);for(var r=i.byteLength,a=2;a<r;){var n=i.getUint16(a,!1);if(a+=2,65505===n){if(1165519206!==i.getUint32(a+=2,!1))return t(-1);var s=18761===i.getUint16(a+=6,!1);a+=i.getUint32(a+4,s);var o=i.getUint16(a,s);a+=2;for(var l=0;l<o;l++)if(274===i.getUint16(a+12*l,s))return t(i.getUint16(a+12*l+8,s))}else{if(65280!=(65280&n))break;a+=i.getUint16(a,!1)}}return t(-1)},i.readAsArrayBuffer(e.slice(0,65536))},preloadImage(e,t){let i=window.File;try{new i([],"")}catch(e){i=class extends Blob{constructor(e,t,i={}){super(e,i),this.lastModifiedDate=new Date,this.lastModified=+this.lastModifiedDate,this.name=t}}}if(t=Object.assign({},t),"object"==typeof e)return this.imageSelected=!0,this.image="",void(this.supportsPreview?this.loadImage(e,!0):this.$emit("prefill"));let r=new Headers;r.append("Accept","image/*"),fetch(e,{method:"GET",mode:"cors",headers:r}).then(e=>e.blob()).then(r=>{let a={target:{files:[]}};const n=t.fileName||e.split("/").slice(-1)[0];let s=t.mediaType||"image/"+(t.fileType||n.split(".").slice(-1)[0]);s=s.replace("jpg","jpeg"),a.target.files[0]=new i([r],n,{type:s}),this.onFileChange(a,!0)}).catch(e=>{this.$emit("error",{type:"failedPrefill",message:"Failed loading prefill image: "+e})})}},computed:{supportsUpload(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;const e=document.createElement("input");return e.type="file",!e.disabled},supportsPreview:()=>window.FileReader&&!!window.CanvasRenderingContext2D,supportsDragAndDrop(){const e=document.createElement("div");return("draggable"in e||"ondragstart"in e&&"ondrop"in e)&&!("ontouchstart"in window||navigator.msMaxTouchPoints)},computedClasses(){const e={};return e["dragging-over"]=this.draggingOver,e},fontSize(){return Math.min(.04*this.previewWidth,21)+"px"}}},a=(i("FD01"),i("KHd+")),n=Object(a.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"container",staticClass:"picture-input",attrs:{id:"picture-input"}},[e.supportsUpload?e.supportsPreview?i("div",[i("div",{staticClass:"preview-container",style:{maxWidth:e.previewWidth+"px",height:e.previewHeight+"px",borderRadius:e.radius+"%"}},[i("canvas",{ref:"previewCanvas",staticClass:"picture-preview",class:e.computedClasses,style:{height:e.previewHeight+"px",zIndex:e.zIndex+1},on:{drag:function(e){e.stopPropagation(),e.preventDefault()},dragover:function(e){e.stopPropagation(),e.preventDefault()},dragstart:function(t){return t.stopPropagation(),t.preventDefault(),e.onDragStart(t)},dragenter:function(t){return t.stopPropagation(),t.preventDefault(),e.onDragStart(t)},dragend:function(t){return t.stopPropagation(),t.preventDefault(),e.onDragStop(t)},dragleave:function(t){return t.stopPropagation(),t.preventDefault(),e.onDragStop(t)},drop:function(t){return t.stopPropagation(),t.preventDefault(),e.onFileDrop(t)},click:function(t){return t.preventDefault(),e.onClick(t)}}}),e._v(" "),e.imageSelected||e.plain?e._e():i("div",{staticClass:"picture-inner",style:{top:-e.previewHeight+"px",marginBottom:-e.previewHeight+"px",fontSize:e.fontSize,borderRadius:e.radius+"%",zIndex:e.zIndex+2}},[e.supportsDragAndDrop?i("span",{staticClass:"picture-inner-text",domProps:{innerHTML:e._s(e.strings.drag)}}):i("span",{staticClass:"picture-inner-text",domProps:{innerHTML:e._s(e.strings.tap)}})])]),e._v(" "),e.imageSelected&&!e.hideChangeButton?i("button",{class:e.buttonClass,on:{click:function(t){return t.preventDefault(),e.selectImage(t)}}},[e._v(e._s(e.strings.change))]):e._e(),e._v(" "),e.imageSelected&&e.removable?i("button",{class:e.removeButtonClass,on:{click:function(t){return t.preventDefault(),e.removeImage(t)}}},[e._v(e._s(e.strings.remove))]):e._e(),e._v(" "),e.imageSelected&&e.toggleAspectRatio&&e.width!==e.height?i("button",{class:e.aspectButtonClass,on:{click:function(t){return t.preventDefault(),e.rotateImage(t)}}},[e._v(e._s(e.strings.aspect))]):e._e()]):i("div",[e.imageSelected?i("div",[i("div",{domProps:{innerHTML:e._s(e.strings.selected)}}),e._v(" "),e.hideChangeButton?e._e():i("button",{class:e.buttonClass,on:{click:function(t){return t.preventDefault(),e.selectImage(t)}}},[e._v(e._s(e.strings.change))]),e._v(" "),e.removable?i("button",{class:e.removeButtonClass,on:{click:function(t){return t.preventDefault(),e.removeImage(t)}}},[e._v(e._s(e.strings.remove))]):e._e()]):i("button",{class:e.buttonClass,on:{click:function(t){return t.preventDefault(),e.selectImage(t)}}},[e._v(e._s(e.strings.select))])]):i("div",{domProps:{innerHTML:e._s(e.strings.upload)}}),e._v(" "),i("input",{ref:"fileInput",attrs:{type:"file",name:e.name,id:e.id,accept:e.accept},on:{change:e.onFileChange}})])}),[],!1,null,"5080a0f2",null);t.a=n.exports},"9tPo":function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var i=t.protocol+"//"+t.host,r=i+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var a,n=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(n)?e:(a=0===n.indexOf("//")?n:0===n.indexOf("/")?i+n:r+n.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")}))}},FD01:function(e,t,i){"use strict";var r=i("15tO");i.n(r).a},I1BE:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i=e[1]||"",r=e[3];if(!r)return i;if(t&&"function"==typeof btoa){var a=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),n=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[i].concat(n).concat([a]).join("\n")}var s;return[i].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i})).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var n=this[a][0];"number"==typeof n&&(r[n]=!0)}for(a=0;a<e.length;a++){var s=e[a];"number"==typeof s[0]&&r[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),t.push(s))}},t}},"KHd+":function(e,t,i){"use strict";function r(e,t,i,r,a,n,s,o){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=i,c._compiled=!0),r&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):a&&(l=o?function(){a.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var h=c.render;c.render=function(e,t){return l.call(t),h(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}i.d(t,"a",(function(){return r}))},YAEV:function(e,t,i){"use strict";i.r(t);var r=i("5ZeN"),a=i("fI17"),n=i.n(a),s={data:function(){return{achievementData:[],disable:!1,showAchievement:!0,openAchievementForm:!1,formData:{image_path:"",title:"",description:"",date:""},serverErrors:{image_path:"",title:"",description:"",date:""},channelId:"",additionUrl:"",url:location.origin+"/api/achievement/",baseUrl:location.origin+"/",editingUrlChecker:!1,achievementId:"",achievementIndex:"",authValue:"",userId:"",wait:!1,blobData:{},step:1,prefill:""}},props:{achievement:{type:Array,default:null},userid:{type:Number,default:null}},created:function(){this.userId=this.userid,this.achievementData=this.achievement[0].achievement,this.channelId=this.achievement[0].id,this.authValue=this.authId},mounted:function(){},methods:{addAchievement:function(){this.openAchievementForm=!this.openAchievementForm,this.formData.image_path="",this.formData.title="",this.formData.description="",this.formData.date="",this.showAchievement=!this.showAchievement,this.wait=!1},achievementSubmit:_.debounce((function(){var e=this;this.$validator.validate().then((function(t){if(t){""===e.formData.image_path&&(e.serverErrors.image_path="Image is required");var i="";if(e.editingUrlChecker?(e.additionUrl="edit/",i=e.url+e.additionUrl+e.achievementId):(e.additionUrl="add/",i=e.url+e.additionUrl),""!=e.formData.image_path){e.disable=!0,e.wait=!0;var r=e;new n.a(e.b64toBlob(e.formData.image_path),{quality:.7,success:function(e){var t=this,a=new FormData;a.append("title",r.formData.title),a.append("description",r.formData.description),a.append("date",r.formData.date),a.append("image_path",e,e.name),axios.post(i,a,{emulateJSON:!0}).then((function(e){!0===e.data.message&&(r.disable=!1,r.showAchievement=!0,Vue.toasted.success("Achievement data is created",{position:"top-center",duration:5e3}),r.editingUrlChecker&&r.achievementData.splice(r.achievementIndex,1),r.achievementData.push(e.data.data),r.openAchievementForm=!1,r.editingUrlChecker=!1,r.wait=!1)})).catch((function(e){e.response.data.errors.image_path&&(t.serverErrors.image_path=e.response.data.errors.image_path[0]),e.response.data.errors.title&&(t.serverErrors.title=e.response.data.errors.title[0]),e.response.data.errors.description&&(t.serverErrors.description=e.response.data.errors.description[0]),e.response.data.errors.date&&(t.serverErrors.date=e.response.data.errors.date[0]),r.disable=!1,r.wait=!1,Vue.toasted.error("Something went wrong",{position:"top-center",duration:5e3})}))},error:function(e){r.addAchievement(),r.disable=!1,r.wait=!1,Vue.toasted.error("Something went wrong!! Try again.",{position:"top-center",duration:5e3})}})}}}))}),500),onChange:function(e){this.$refs.pictureInput.image&&(this.formData.image_path=this.$refs.pictureInput.image)},b64toBlob:function(e){for(var t=atob(e.split(",")[1]),i=new ArrayBuffer(t.length),r=new Uint8Array(i),a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return new Blob([i],{type:"image/jpeg"})},editTheForm:function(e,t){this.editingUrlChecker=!0,this.prefill=this.baseUrl+"media/channel/"+this.userId+"/achievement/"+e.image_path,this.formData.title=e.title,this.formData.description=e.description,this.formData.date=e.date,this.achievementId=e.id,this.openAchievementForm=!0,this.achievementIndex=t,this.showAchievement=!1,this.wait=!1},canCleSubmittion:function(){this.editingUrlChecker=!1,this.openAchievementForm=!1,this.showAchievement=!0,this.wait=!1}},components:{PictureInput:r.a,Compressor:n.a}};$(document).ready((function(){$('[data-toggle="tooltip"]').tooltip()}));var o=s,l=i("KHd+"),c=Object(l.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h4",{staticClass:"text-center"},[e._v("INSTITUTE'S ACHIEVEMENTS")]),e._v(" "),i("br"),e._v(" "),i("h6",{staticClass:"d-inline"},[e._v("Add your institute's achievements here")]),e._v(" "),i("button",{staticClass:"btn btnadd p-1 ml-1 rounded-0",on:{click:function(t){return e.addAchievement()}}},[i("i",{class:[!1===this.openAchievementForm?"fa fa-plus":"fa fa-minus"],attrs:{"aria-hidden":"true"}})]),e._v(" "),e.showAchievement?i("div",{staticClass:"row my-5"},e._l(e.achievementData,(function(t,r){return i("div",{key:r,staticClass:"card shadow mx-auto sidebar-facard mb-4"},[i("img",{attrs:{src:e.baseUrl+"media/channel/"+e.userId+"/achievement/"+t.image_path}}),e._v(" "),i("div",{staticClass:"card-body mt-n1"},[i("h6",{staticClass:"card-title my-n1"},[e._v(e._s(t.title))]),e._v(" "),i("p",{staticClass:"card-text"},[e._v("\n          "+e._s(t.description.substr(0,20))+"\n        ")]),e._v(" "),i("p",{staticClass:"card-text"},[e._v("\n          "+e._s(t.date)+"\n        ")])]),e._v(" "),i("div",{staticClass:"text-center"},[i("button",{staticClass:"btn mb-5 editachieve",attrs:{"data-toggle":"tooltip","data-placement":"right",title:"Edit"},on:{click:function(i){return e.editTheForm(t,r)}}},[i("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}})])])])})),0):e._e(),e._v(" "),i("br"),e._v(" "),e.openAchievementForm?i("div",{staticClass:"mt-5"},[i("form",{on:{submit:function(t){return t.preventDefault(),e.achievementSubmit()}}},[i("picture-input",{ref:"pictureInput",attrs:{prefill:e.prefill,width:"200",height:"200",margin:"16",accept:"image/jpeg, image/png",size:"7","button-class":"btn","custom-strings":{upload:"<h1>Bummer!</h1>",drag:"Drag a 😺 GIF or GTFO"}},on:{change:e.onChange}}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverErrors.image_path,expression:"serverErrors.image_path != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverErrors.image_path))]),e._v(" "),i("br"),e._v(" "),i("div",{staticClass:"form-group row mx-lg-5",class:{"has-error":e.errors.has("serverErrors.title")||""!=e.serverErrors.title}},[i("label",{staticClass:"col-sm-3 col-form-label text-md-right"},[e._v("Achievement Title :")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.title,expression:"formData.title"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"col-sm-9 mx-1 mx-md-auto",class:{"form-control":!0,"is-invalid":e.errors.has("title")},attrs:{"data-vv-delay":"20",name:"title",type:"text",placeholder:"Example: Student name, Institute's team achievement"},domProps:{value:e.formData.title},on:{input:function(t){t.target.composing||e.$set(e.formData,"title",t.target.value)}}}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("title"),expression:"errors.has('title')"}],staticClass:"text-danger mx-auto"},[e._v(e._s(e.errors.first("title")))]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverErrors.title,expression:"serverErrors.title != ''"}],staticClass:"help is-danger mx-auto"},[e._v(e._s(e.serverErrors.title))])]),e._v(" "),i("div",{staticClass:"form-group row mx-lg-5",class:{"has-error":e.errors.has("serverErrors.descriptions")||""!=e.serverErrors.descriptions}},[i("label",{staticClass:"col-sm-3 col-form-label text-md-right"},[e._v("\n          Achievement Description :")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.description,expression:"formData.description"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"col-sm-9 mx-1 mx-md-auto",class:{"form-control":!0,"is-invalid":e.errors.has("descriptions")},attrs:{"data-vv-delay":"20",name:"descriptions",type:"text",placeholder:"Describe achievement in seven words"},domProps:{value:e.formData.description},on:{input:function(t){t.target.composing||e.$set(e.formData,"description",t.target.value)}}}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("descriptions"),expression:"errors.has('descriptions')"}],staticClass:"text-danger mx-auto"},[e._v(e._s(e.errors.first("descriptions")))]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverErrors.descriptions,expression:"serverErrors.descriptions != ''"}],staticClass:"help is-danger mx-auto"},[e._v(e._s(e.serverErrors.descriptions))])]),e._v(" "),i("div",{staticClass:"form-group row mx-lg-5",class:{"has-error":e.errors.has("date")||""!=e.serverErrors.date}},[i("label",{staticClass:"col-sm-3 col-form-label text-md-right"},[e._v("\n          Achievement Event Date :")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.date,expression:"formData.date"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"col-sm-9 mx-1 mx-md-auto",class:{"form-control":!0,"is-invalid":e.errors.has("date")},attrs:{"data-vv-delay":"20",name:"date",type:"date",placeholder:"date"},domProps:{value:e.formData.date},on:{focus:function(t){e.serverErrors.date=""},input:function(t){t.target.composing||e.$set(e.formData,"date",t.target.value)}}}),e._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("date"),expression:"errors.has('date')"}],staticClass:"is-invalid"}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("date"),expression:"errors.has('date')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("date")))]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.serverErrors.date,expression:"serverErrors.date != ''"}],staticClass:"text-danger"},[e._v(e._s(e.serverErrors.date))])]),e._v(" "),e.wait?i("div",{staticClass:"text-center mt-2"},[e._m(0)]):e._e(),e._v(" "),e.wait?e._e():i("div",{staticClass:"text-center"},[i("button",{staticClass:"btn btn-success rounded-0",attrs:{type:"btn"},on:{click:function(t){return e.canCleSubmittion()}}},[e._v("\n          Cancel\n        ")]),e._v(" "),i("button",{staticClass:"btn btnsubmit mt-n2",attrs:{type:"submit",disabled:e.disable}},[e._v("\n          Submit\n        ")])])],1)]):e._e()])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"spinner-border text-warning",attrs:{role:"status"}},[t("span",{staticClass:"sr-only"},[this._v("Loading...")])])}],!1,null,"ddbb1210",null);t.default=c.exports},"aET+":function(e,t,i){var r,a,n={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=r.apply(this,arguments)),a}),o=function(e,t){return t?t.querySelector(e):document.querySelector(e)},l=function(e){var t={};return function(e,i){if("function"==typeof e)return e();if(void 0===t[e]){var r=o.call(this,e,i);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,h=0,d=[],u=i("9tPo");function p(e,t){for(var i=0;i<e.length;i++){var r=e[i],a=n[r.id];if(a){a.refs++;for(var s=0;s<a.parts.length;s++)a.parts[s](r.parts[s]);for(;s<r.parts.length;s++)a.parts.push(w(r.parts[s],t))}else{var o=[];for(s=0;s<r.parts.length;s++)o.push(w(r.parts[s],t));n[r.id]={id:r.id,refs:1,parts:o}}}}function f(e,t){for(var i=[],r={},a=0;a<e.length;a++){var n=e[a],s=t.base?n[0]+t.base:n[0],o={css:n[1],media:n[2],sourceMap:n[3]};r[s]?r[s].parts.push(o):i.push(r[s]={id:s,parts:[o]})}return i}function m(e,t){var i=l(e.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?i.insertBefore(t,r.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),d.push(t);else if("bottom"===e.insertAt)i.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=l(e.insertAt.before,i);i.insertBefore(t,a)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function g(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return i.nc}();r&&(e.attrs.nonce=r)}return b(t,e.attrs),m(e,t),t}function b(e,t){Object.keys(t).forEach((function(i){e.setAttribute(i,t[i])}))}function w(e,t){var i,r,a,n;if(t.transform&&e.css){if(!(n="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=n}if(t.singleton){var s=h++;i=c||(c=g(t)),r=_.bind(null,i,s,!1),a=_.bind(null,i,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),m(e,t),t}(t),r=D.bind(null,i,t),a=function(){v(i),i.href&&URL.revokeObjectURL(i.href)}):(i=g(t),r=C.bind(null,i),a=function(){v(i)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var i=f(e,t);return p(i,t),function(e){for(var r=[],a=0;a<i.length;a++){var s=i[a];(o=n[s.id]).refs--,r.push(o)}e&&p(f(e,t),t);for(a=0;a<r.length;a++){var o;if(0===(o=r[a]).refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete n[o.id]}}}};var y,x=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function _(e,t,i,r){var a=i?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,a);else{var n=document.createTextNode(a),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(n,s[t]):e.appendChild(n)}}function C(e,t){var i=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}function D(e,t,i){var r=i.css,a=i.sourceMap,n=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||n)&&(r=u(r)),a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var s=new Blob([r],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(s),o&&URL.revokeObjectURL(o)}},fI17:function(e,t,i){e.exports=function(){"use strict";function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{};i%2?r(Object(a),!0).forEach((function(i){t(e,i,a[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var n=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){"undefined"!=typeof window&&function(t){var i=t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype,r=t.Blob&&function(){try{return Boolean(new Blob)}catch(e){return!1}}(),a=r&&t.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(e){return!1}}(),n=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||t.MSBlobBuilder,s=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,o=(r||n)&&t.atob&&t.ArrayBuffer&&t.Uint8Array&&function(e){var t,i,o,l,c,h,d,u,p;if(!(t=e.match(s)))throw new Error("invalid data URI");for(i=t[2]?t[1]:"text/plain"+(t[3]||";charset=US-ASCII"),o=!!t[4],l=e.slice(t[0].length),c=o?atob(l):decodeURIComponent(l),h=new ArrayBuffer(c.length),d=new Uint8Array(h),u=0;u<c.length;u+=1)d[u]=c.charCodeAt(u);return r?new Blob([a?d:h],{type:i}):((p=new n).append(h),p.getBlob(i))};t.HTMLCanvasElement&&!i.toBlob&&(i.mozGetAsFile?i.toBlob=function(e,t,r){var a=this;setTimeout((function(){r&&i.toDataURL&&o?e(o(a.toDataURL(t,r))):e(a.mozGetAsFile("blob",t))}))}:i.toDataURL&&o&&(i.toBlob=function(e,t,i){var r=this;setTimeout((function(){e(o(r.toDataURL(t,i)))}))})),e.exports?e.exports=o:t.dataURLtoBlob=o}(window)})),s={strict:!0,checkOrientation:!0,maxWidth:1/0,maxHeight:1/0,minWidth:0,minHeight:0,width:void 0,height:void 0,quality:.8,mimeType:"auto",convertSize:5e6,beforeDraw:null,drew:null,success:null,error:null},o="undefined"!=typeof window&&void 0!==window.document?window:{},l=Array.prototype.slice,c=/^image\/.+$/;function h(e){return c.test(e)}var d=String.fromCharCode,u=o.btoa;function p(e){var t,i=new DataView(e);try{var r,a,n;if(255===i.getUint8(0)&&216===i.getUint8(1))for(var s=i.byteLength,o=2;o+1<s;){if(255===i.getUint8(o)&&225===i.getUint8(o+1)){a=o;break}o+=1}if(a){var l=a+10;if("Exif"===function(e,t,i){var r,a="";for(i+=t,r=t;r<i;r+=1)a+=d(e.getUint8(r));return a}(i,a+4,4)){var c=i.getUint16(l);if(((r=18761===c)||19789===c)&&42===i.getUint16(l+2,r)){var h=i.getUint32(l+4,r);h>=8&&(n=l+h)}}}if(n){var u,p,f=i.getUint16(n,r);for(p=0;p<f;p+=1)if(u=n+12*p+2,274===i.getUint16(u,r)){u+=8,t=i.getUint16(u,r),i.setUint16(u,1,r);break}}}catch(e){t=1}return t}var f=/\.\d*(?:0|9){12}\d*$/;function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return f.test(e)?Math.round(e*t)/t:e}var v=o.ArrayBuffer,g=o.FileReader,b=o.URL||o.webkitURL,w=/\.\w+$/,y=o.Compressor;return function(){function t(e,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.file=e,this.image=new Image,this.options=a({},s,{},i),this.aborted=!1,this.result=null,this.init()}var r,c,f;return r=t,f=[{key:"noConflict",value:function(){return window.Compressor=y,t}},{key:"setDefaults",value:function(e){i(s,e)}}],(c=[{key:"init",value:function(){var e=this,t=this.file,r=this.options;if(a=t,"undefined"!=typeof Blob&&(a instanceof Blob||"[object Blob]"===Object.prototype.toString.call(a))){var a,n=t.type;if(h(n))if(b&&g)if(v||(r.checkOrientation=!1),b&&!r.checkOrientation)this.load({url:b.createObjectURL(t)});else{var s=new g,o=r.checkOrientation&&"image/jpeg"===n;this.reader=s,s.onload=function(r){var a=r.target.result,s={};if(o){var c=p(a);c>1||!b?(s.url=function(e,t){for(var i,r=[],a=new Uint8Array(e);a.length>0;)r.push(d.apply(null,(i=a.subarray(0,8192),Array.from?Array.from(i):l.call(i)))),a=a.subarray(8192);return"data:".concat(t,";base64,").concat(u(r.join("")))}(a,n),c>1&&i(s,function(e){var t=0,i=1,r=1;switch(e){case 2:i=-1;break;case 3:t=-180;break;case 4:r=-1;break;case 5:t=90,r=-1;break;case 6:t=90;break;case 7:t=90,i=-1;break;case 8:t=-90}return{rotate:t,scaleX:i,scaleY:r}}(c))):s.url=b.createObjectURL(t)}else s.url=a;e.load(s)},s.onabort=function(){e.fail(new Error("Aborted to read the image with FileReader."))},s.onerror=function(){e.fail(new Error("Failed to read the image with FileReader."))},s.onloadend=function(){e.reader=null},o?s.readAsArrayBuffer(t):s.readAsDataURL(t)}else this.fail(new Error("The current browser does not support image compression."));else this.fail(new Error("The first argument must be an image File or Blob object."))}else this.fail(new Error("The first argument must be a File or Blob object."))}},{key:"load",value:function(e){var t=this,i=this.file,r=this.image;r.onload=function(){t.draw(a({},e,{naturalWidth:r.naturalWidth,naturalHeight:r.naturalHeight}))},r.onabort=function(){t.fail(new Error("Aborted to load the image."))},r.onerror=function(){t.fail(new Error("Failed to load the image."))},o.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(o.navigator.userAgent)&&(r.crossOrigin="anonymous"),r.alt=i.name,r.src=e.url}},{key:"draw",value:function(e){var t=this,i=e.naturalWidth,r=e.naturalHeight,a=e.rotate,s=void 0===a?0:a,o=e.scaleX,l=void 0===o?1:o,c=e.scaleY,d=void 0===c?1:c,u=this.file,p=this.image,f=this.options,v=document.createElement("canvas"),g=v.getContext("2d"),b=i/r,w=Math.abs(s)%180==90,y=Math.max(f.maxWidth,0)||1/0,x=Math.max(f.maxHeight,0)||1/0,_=Math.max(f.minWidth,0)||0,C=Math.max(f.minHeight,0)||0,D=Math.max(f.width,0)||i,O=Math.max(f.height,0)||r;if(w){var S=[x,y];y=S[0],x=S[1];var E=[C,_];_=E[0],C=E[1];var I=[O,D];D=I[0],O=I[1]}y<1/0&&x<1/0?x*b>y?x=y/b:y=x*b:y<1/0?x=y/b:x<1/0&&(y=x*b),_>0&&C>0?C*b>_?C=_/b:_=C*b:_>0?C=_/b:C>0&&(_=C*b),O*b>D?O=D/b:D=O*b;var A=-(D=Math.floor(m(Math.min(Math.max(D,_),y))))/2,R=-(O=Math.floor(m(Math.min(Math.max(O,C),x))))/2,U=D,T=O;if(w){var j=[O,D];D=j[0],O=j[1]}v.width=D,v.height=O,h(f.mimeType)||(f.mimeType=u.type);var B="transparent";if(u.size>f.convertSize&&"image/png"===f.mimeType&&(B="#fff",f.mimeType="image/jpeg"),g.fillStyle=B,g.fillRect(0,0,D,O),f.beforeDraw&&f.beforeDraw.call(this,g,v),!this.aborted&&(g.save(),g.translate(D/2,O/2),g.rotate(s*Math.PI/180),g.scale(l,d),g.drawImage(p,A,R,U,T),g.restore(),f.drew&&f.drew.call(this,g,v),!this.aborted)){var k=function(e){t.aborted||t.done({naturalWidth:i,naturalHeight:r,result:e})};v.toBlob?v.toBlob(k,f.mimeType,f.quality):k(n(v.toDataURL(f.mimeType,f.quality)))}}},{key:"done",value:function(e){var t,i,r=e.naturalWidth,a=e.naturalHeight,n=e.result,s=this.file,o=this.image,l=this.options;if(b&&!l.checkOrientation&&b.revokeObjectURL(o.src),n)if(l.strict&&n.size>s.size&&l.mimeType===s.type&&!(l.width>r||l.height>a||l.minWidth>r||l.minHeight>a))n=s;else{var c=new Date;n.lastModified=c.getTime(),n.lastModifiedDate=c,n.name=s.name,n.name&&n.type!==s.type&&(n.name=n.name.replace(w,(t=n.type,"jpeg"===(i=h(t)?t.substr(6):"")&&(i="jpg"),".".concat(i))))}else n=s;this.result=n,l.success&&l.success.call(this,n)}},{key:"fail",value:function(e){var t=this.options;if(!t.error)throw e;t.error.call(this,e)}},{key:"abort",value:function(){this.aborted||(this.aborted=!0,this.reader?this.reader.abort():this.image.complete?this.fail(new Error("The compression process has been aborted.")):(this.image.onload=null,this.image.onabort()))}}])&&e(r.prototype,c),f&&e(r,f),t}()}()},hcby:function(e,t,i){(e.exports=i("I1BE")(!1)).push([e.i,"\n.picture-input[data-v-5080a0f2] {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n}\n.preview-container[data-v-5080a0f2] {\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0 auto;\n  cursor: pointer;\n  overflow: hidden;\n}\n.picture-preview[data-v-5080a0f2] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 10001;\n  box-sizing: border-box;\n  background-color: rgba(200,200,200,.25);\n}\n.picture-preview.dragging-over[data-v-5080a0f2] {\n  -webkit-filter: brightness(0.5);\n          filter: brightness(0.5);\n}\n.picture-inner[data-v-5080a0f2] {\n  position: relative;\n  z-index: 10002;\n  pointer-events: none;\n  box-sizing: border-box;\n  margin: 1em auto;\n  padding: 0.5em;\n  border: .3em dashed rgba(66,66,66,.15);\n  border-radius: 8px;\n  width: calc(100% - 2.5em);\n  height: calc(100% - 2.5em);\n  display: table;\n}\n.picture-inner .picture-inner-text[data-v-5080a0f2] {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 2em;\n  line-height: 1.5;\n}\nbutton[data-v-5080a0f2] {\n  margin: 1em .25em;\n  cursor: pointer;\n}\ninput[type=file][data-v-5080a0f2] {\n  display: none;\n}\n",""])},i7gT:function(e,t,i){Vue.component("channel-achievement",i("YAEV").default);var r=document.getElementById("channelAchievement");if(void 0!==r&&null!=r)new Vue({el:"#channelAchievement"})}});