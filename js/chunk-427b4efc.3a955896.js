(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-427b4efc"],{"0815":function(t,e,a){},"2bdf":function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return C}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"manage-ens-container"},[a("div",{staticClass:"title-container"},[a("h3",[t._v(t._s(t.$t("ens.manage-domain")))]),a("h3",[t._v(t._s(t.domainName))])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isController,expression:"!isController"}],staticClass:"set-controller-container"},[a("i18n",{attrs:{path:"ens.controller-text",tag:"div"}},[a("b",{attrs:{slot:"domain"},slot:"domain"},[t._v(t._s(t.domainName))]),a("b",{attrs:{slot:"addr"},slot:"addr"},[t._v(t._s(t.account.address))]),a("br")]),a("div",{staticClass:"set-controller-submit"},[a("button",{on:{click:function(e){return t.setController()}}},[t._v(t._s(t.$t("ens.set-controller")))])])],1),a("b-btn",{directives:[{name:"show",rawName:"v-show",value:t.resolverMultiCoinSupport,expression:"resolverMultiCoinSupport"},{name:"b-toggle",rawName:"v-b-toggle.multicoinsec",modifiers:{multicoinsec:!0}}],staticClass:"collapse-open-button",attrs:{variant:"primary"}},[a("p",[t._v(t._s(t.$t("ens.multi-coin")))]),a("i",{staticClass:"when-open fa fa-angle-up fa-lg"}),a("i",{staticClass:"when-closed fa fa-angle-down fa-lg"})]),a("b-collapse",{staticClass:"collapse-content",attrs:{id:"multicoinsec",visible:t.resolverMultiCoinSupport,accordion:"manage-ens-accordion"}},[a("div",{staticClass:"form-container"},[a("form",{staticClass:"manage-multi-coin-form"},[a("div",{staticClass:"title-and-dropdown-container"},[a("h4",[t._v(t._s(t.$t("ens.multi-coin"))+":")]),a("b-dd",{staticClass:"dropdown-button-2",attrs:{text:t.selectedCurrency}},t._l(Object.keys(t.supportedCoins),(function(e,n){return a("b-dd-item",{key:e+n,on:{click:function(a){return t.addCurrencyInput(e)}}},[t._v(t._s(e))])})),1)],1),t._l(t.currencyInputs,(function(e,n){return a("div",{key:n.id,staticClass:"multi-coin-input-container"},[a("label",{attrs:{for:"updateResolver"}},[t._v(t._s(n)+":")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"v.value"}],attrs:{placeholder:e.name+" address",type:"text",name:"updateResolver"},domProps:{value:e.value},on:{input:function(a){a.target.composing||t.$set(e,"value",a.target.value)}}}),a("i",{class:["validity-indication fa",t.isInvalidAddress(e)?"error fa-times-circle-o":"valid fa-check-circle-o"]}),a("i",{staticClass:"fa fa-lg fa-times",on:{click:function(){t.removeCoinInput(n)}}})])})),a("div",{staticClass:"multi-coin-submit-container"},[a("button",{class:[t.isValidAddresses?"":"disabled",t.isController?"":"disabled"],on:{click:function(e){return e.preventDefault(),t.checkAndSendCurrency(e)}}},[t._v(" "+t._s(t.$t("common.save"))+" ")])])],2)])]),a("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.textrecords",modifiers:{textrecords:!0}}],staticClass:"collapse-open-button",attrs:{variant:"primary"}},[a("p",[t._v(t._s(t.$t("ens.txt-record")))]),a("i",{staticClass:"when-open fa fa-angle-up fa-lg"}),a("i",{staticClass:"when-closed fa fa-angle-down fa-lg"})]),a("b-collapse",{staticClass:"collapse-content",attrs:{id:"textrecords",visible:!t.resolverMultiCoinSupport&&t.resolverTxtSupport,accordion:"manage-ens-accordion"}},[a("div",{staticClass:"form-container"},[a("form",{staticClass:"manage-multi-coin-form"},[a("div",{staticClass:"title-and-dropdown-container"},[a("h4",[t._v(t._s(t.$t("ens.txt-record"))+":")]),a("b-dd",{staticClass:"dropdown-button-2",attrs:{text:t._f("capitalize")(t.selectedText)}},t._l(Object.keys(t.txtRecords),(function(e,n){return a("b-dd-item",{key:e+n,on:{click:function(a){return t.addTxtInput(e)}}},[t._v(t._s(t._f("capitalize")(e)))])})),1)],1),t._l(t.txtRecordInputs,(function(e,n){return a("div",{key:n.id},[a("div",{staticClass:"multi-coin-input-container"},[a("label",{attrs:{for:"updateResolver"}},[t._v(t._s(t._f("capitalize")(n))+":")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.txtRecordInputs[n],expression:"txtRecordInputs[k]"},{name:"validate",rawName:"v-validate",value:t.getInputType(n),expression:"getInputType(k)"}],attrs:{placeholder:t._f("capitalize")(n),name:n,type:"text"},domProps:{value:t.txtRecordInputs[n]},on:{input:function(e){e.target.composing||t.$set(t.txtRecordInputs,n,e.target.value)}}}),a("i",{class:["validity-indication fa",t.txtRecordInputs[n]&&""!==t.txtRecordInputs[n]&&!t.errors.hasOwnProperty(""+n)&&t.validateTxtValue(n)?"valid fa-check-circle-o":"error fa-times-circle-o"]}),a("i",{staticClass:"fa fa-lg fa-times",on:{click:function(){t.removeTxtInput(n)}}})]),a("p",{directives:[{name:"show",rawName:"v-show",value:!t.validateTxtValue(n),expression:"!validateTxtValue(k)"}],staticClass:"text-error"},[t._v(" "+t._s(t.$t("ens.text-record-error",{value:t.txtRecordInputs[n],name:n}))+" ")])])})),a("div",{staticClass:"multi-coin-submit-container"},[a("button",{class:[t.validTextRecords?"disabled":"",t.isController?"":"disabled"],on:{click:function(e){return e.preventDefault(),t.checkAndSendTxtRecs(e)}}},[t._v(" "+t._s(t.$t("common.save"))+" ")])])],2)])]),a("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.transferens",modifiers:{transferens:!0}}],staticClass:"collapse-open-button",attrs:{variant:"primary"}},[a("p",[t._v(t._s(t.$t("ens.transfer-domain")))]),a("i",{staticClass:"when-open fa fa-angle-up fa-lg"}),a("i",{staticClass:"when-closed fa fa-angle-down fa-lg"})]),a("b-collapse",{staticClass:"collapse-content",attrs:{id:"transferens",visible:!t.resolverMultiCoinSupport&&!t.resolverTxtSupport,accordion:"manage-ens-accordion"}},[a("div",{staticClass:"form-container"},[a("form",{staticClass:"manage-form"},[a("div",{staticClass:"input-container"},[a("label",{attrs:{for:"transferEns"}},[t._v(t._s(t.$t("ens.transfer-to"))+":")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.transferTo,expression:"transferTo"}],attrs:{type:"text",name:"transferEns",placeholder:"0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D"},domProps:{value:t.transferTo},on:{input:function(e){e.target.composing||(t.transferTo=e.target.value)}}})]),a("div",{staticClass:"submit-container"},[a("button",{class:[t.isAddress(t.transferTo)?"":"disabled"],attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.transferDomain(t.transferTo)}}},[t._v(" "+t._s(t.$t("ens.transfer"))+" ")])])])])]),t.isDeedOwner&&t.hasDeed?a("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.redeemdeed",modifiers:{redeemdeed:!0}}],staticClass:"collapse-open-button",attrs:{variant:"primary"}},[a("p",[t._v(t._s(t.$t("ens.release-deed")))]),a("i",{staticClass:"when-open fa fa-angle-up fa-lg"}),a("i",{staticClass:"when-closed fa fa-angle-down fa-lg"})]):t._e(),t.isDeedOwner&&t.hasDeed?a("b-collapse",{staticClass:"collapse-content",attrs:{id:"redeemdeed",accordion:"manage-ens-accordion"}},[t.isDeedOwner&&t.hasDeed?a("div",{staticClass:"form-container"},[a("form",[a("h4",[t._v(" "+t._s(t.$t("ens.release-deed-confirmation",{deedValueEth:t.deedValueEth,network:t.network.type.name}))+" ")]),a("div",{staticClass:"submit-container"},[a("button",{attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.releaseDeed()}}},[t._v(" "+t._s(t.$t("ens.release-deed"))+" ")])])])]):t._e()]):t._e(),a("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.ipfs",modifiers:{ipfs:!0}}],staticClass:"collapse-open-button",attrs:{variant:"primary"}},[a("p",[t._v(t._s(t.$t("ens.content-hash")))]),a("i",{staticClass:"when-open fa fa-angle-up fa-lg"}),a("i",{staticClass:"when-closed fa fa-angle-down fa-lg"})]),a("b-collapse",{staticClass:"collapse-content",attrs:{id:"ipfs",accordion:"manage-ens-accordion"}},[t.ipfsProcessing?a("div",{staticClass:"ipfs-loading"},[a("i",{staticClass:"fa fa-lg fa-spinner fa-spin"}),a("h3",[t._v(t._s(t.$t("ens.ipfs-processing")))]),a("p",[t._v(t._s(t.$t("ens.ipfs-processing-description")))])]):a("div",{staticClass:"ipfs-content-container"},[t.validIpfs?a("div",{staticClass:"link-to-name"},[a("p",[t._v(" "+t._s(t.$t("ens.ipfs-check-website",{domainName:t.domainName}))+" "),a("a",{attrs:{href:"http://"+t.domainName+".link",target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.domainName+".link")+" ")])])]):t._e(),a("form",{staticClass:"file-upload-form",attrs:{enctype:"multipart/form-data",novalidate:""}},[a("input",{ref:"zipInput",attrs:{type:"file",name:"file",accept:".zip"},on:{change:t.fileChange}})]),a("div",{staticClass:"form-container"},[a("form",{staticClass:"manage-form"},[a("div",{staticClass:"input-container"},[a("label",{attrs:{for:"transferEns"}},[a("span",[t._v(t._s(t.$t("ens.content-hash"))+":")]),a("p",{staticClass:"file-upload-text",on:{click:function(e){return e.preventDefault(),t.ipfsClick(e)}}},[t._v(" "+t._s(t.$t("ens.upload-my-website"))+" ")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.localContentHash,expression:"localContentHash"}],attrs:{type:"text",name:"transferEns",placeholder:"QmVHxRocoWgUChLEvfEyDuuD6qJ4PhdDL2dTLcpUy3dSC2"},domProps:{value:t.localContentHash},on:{input:function(e){e.target.composing||(t.localContentHash=e.target.value)}}})]),a("div",{staticClass:"submit-container"},[t.validIpfs?t._e():a("span",{staticClass:"text-error"},[t._v(t._s(t.$t("ens.error.empty-invalid-ipfs")))]),a("br"),a("button",{class:[t.validIpfs?"":"disabled"],attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.saveContentHash(t.localContentHash)}}},[t._v(" "+t._s(t.$t("ens.set-hash"))+" ")])])])])])]),a("interface-bottom-text",{attrs:{"link-text":t.$t("common.help-center"),question:t.$t("common.have-issues"),link:"https://kb.myetherwallet.com"}})],1)},s=[],i=(a("7db0"),a("4160"),a("caad"),a("d81d"),a("b0c0"),a("b64b"),a("2532"),a("159b"),a("5530")),r=a("539d"),o=a("b7d3"),c=a("2f62"),l=a("ce96"),d=a("1131"),u=a.n(d),p=a("3c35f"),f=a("b306"),v=a.n(f),m={components:{"interface-bottom-text":r["a"]},props:{domainName:{type:String,default:""},setMultiCoin:{type:Function,default:function(){}},setRecord:{type:Function,default:function(){}},transferDomain:{type:Function,default:function(){}},tld:{type:String,default:""},resolverMultiCoinSupport:{type:Boolean,default:!1},resolverTxtSupport:{type:Boolean,default:!1},supportedCoins:{type:Object,default:function(){}},setController:{type:Function,default:function(){}},txtRecords:{type:Object,default:function(){}},isController:{type:Boolean,default:!1},hasDeed:{type:Boolean,default:!1},isDeedOwner:{type:Boolean,default:!1},deedValue:{type:String,default:"0"},releaseDeed:{type:Function,default:function(){}},contentHash:{type:String,default:""},uploadFile:{type:Function,default:function(){}},saveContentHash:{type:Function,default:function(){}},ipfsProcessing:{type:Boolean,default:!1}},data:function(){var t=this.copySupported(),e={},a={};for(var n in p["a"].forEach((function(t){a[t.name]=t.validate})),t)t[n].hasOwnProperty("value")&&""===t[n].value&&delete t[n];for(var s in this.txtRecords)""!==this.txtRecords[s]&&(e[s]=this.txtRecords[s]);return{transferTo:"",multiCoinSupport:!1,isAddress:o["a"],currencyInputs:t,selectedCurrency:"ETH",selectedText:"Email",hasError:!1,txtRecordInputs:e,txtValidators:a,localContentHash:this.contentHash||""}},computed:Object(i["a"])(Object(i["a"])({},Object(c["c"])("main",["web3","account","network"])),{},{validIpfs:function(){return v.a.multihash(this.localContentHash)},deedValueEth:function(){return u.a.fromWei(this.deedValue,"ether")},isValidAddresses:function(){for(var t in this.currencyInputs){if(this.currencyInputs[t].id===this.currencyInputs.ETH.id&&""===this.currencyInputs[t].value)return!1;if(""!==this.currencyInputs[t].value&&!this.currencyInputs[t].validator.validate(this.currencyInputs[t].value))return!1}return!0},validTextRecords:function(){for(var t in this.txtRecordInputs)if(this.txtRecordInputs[t]&&""!==this.txtRecordInputs[t]&&!this.txtValidators[t](this.txtRecordInputs[t]))return!0;return!1}}),watch:{currencyInputs:{handler:function(t){this.currencyInputs=t},deep:!0},txtRecordInputs:{handler:function(t){this.txtRecordInputs=t},deep:!0}},mounted:function(){"."===this.domainName&&this.$router.push("/interface/dapps/manage-ens")},methods:{fileChange:function(t){var e=["application/zip","application/x-zip","application/octet-stream","application/x-zip-compressed"],a=e.find((function(e){return t.target.files[0].type===e||t.target.files[0].name.includes(".zip")}));return a?t.target.files[0].size<500?(this.$refs.zipInput.value="",void l["e"].responseHandler(this.$t("ens.warning.too-small"),l["e"].WARN)):t.target.files[0].size>5e7?(this.$refs.zipInput.value="",void l["e"].responseHandler(this.$t("ens.warning.too-big"),l["e"].WARN)):void this.uploadFile(t.target.files[0]):(this.$refs.zipInput.value="",void l["e"].responseHandler(this.$t("ens.warning.upload-zip"),l["e"].WARN))},ipfsClick:function(){var t=this.$refs.zipInput;t.value="",t.click()},isInvalidAddress:function(t){return t.id===this.supportedCoins.ETH.id&&""===t.value||""!==t.value&&!t.validator.validate(t.value)},getInputType:function(t){var e=p["a"].find((function(e){return e.name.toLowerCase()===t.toLowerCase()}));switch(e.type){case"url":return"required|url:require_protocol";case"email":return"email|required";default:return"required"}},validateTxtValue:function(t){return this.txtValidators[t](this.txtRecordInputs[t])},copySupported:function(){var t=u.a._.map(this.supportedCoins,u.a._.clone),e={};return t.forEach((function(t){e[t.symbol]=t})),e},addCurrencyInput:function(t){this.selectedCurrency=t;var e=this.copySupported(),a=Object.assign({},this.currencyInputs);a[t]?l["e"].responseHandler(this.$t("ens.currency-already-exists",{currency:t,domainName:this.domainName}),l["e"].WARN):(a[t]=e[t],this.currencyInputs=a)},addTxtInput:function(t){this.selectedText=t;var e=Object.assign({},this.txtRecordInputs);e[t]?l["e"].responseHandler(this.$t("ens.currency-already-exists",{txtRecord:t,domainName:this.domainName}),l["e"].WARN):(e[t]=this.txtRecordInputs[t],this.txtRecordInputs=e)},removeCoinInput:function(t){var e=Object.assign({},this.currencyInputs);e[t].value="",this.currencyInputs=e},removeTxtInput:function(t){var e=Object.assign({},this.txtRecordInputs);e[t]="",this.txtRecordInputs=e},checkAndSendTxtRecs:function(){if("."!==this.domainName){var t={},e=Object.assign({},this.txtRecordInputs),a=Object.assign({},this.txtRecords);Object.keys(a).forEach((function(n){e[n]&&a[n]!==e[n]&&(t[n]=e[n])})),Object.keys(t).length>0&&this.setRecord(t)}},checkAndSendCurrency:function(){if("."!==this.domainName){var t=[],e=Object.assign({},this.currencyInputs),a=Object.assign({},this.supportedCoins);Object.keys(a).forEach((function(n){e[n]&&a[n].value!==e[n].value&&t.push(e[n])})),t.length>0&&this.setMultiCoin(t)}}}},h=m,b=(a("fa2c"),a("2877")),g=Object(b["a"])(h,n,s,!1,null,"3dfed4b6",null),C=g.exports},"3c35f":function(t,e,a){"use strict";a("99af"),a("caad"),a("c975"),a("4d63"),a("ac1f"),a("25f0"),a("2532");var n=a("7856"),s=(a("1276"),function(t){var e;return e=t.indexOf("://")>-1?t.split("/")[2]:t.split("/")[0],e=e.split(":")[0],e=e.split("?")[0],e}),i=function(t){if(!t)return"";var e=s(t),a=e.split("."),n=a.length;return n>2&&(e=a[n-2]+"."+a[n-1],2==a[n-2].length&&2==a[n-1].length&&(e=a[n-3]+"."+e)),e.toLowerCase()},r=function(t){var e=i(t),a=Object(n["a"])(e),s=new RegExp(/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/);return s.test(a.toLowerCase())},o=function(t){if(!t||""===t)return!1;var e=t.indexOf("@"),a=new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/);try{var s=Object(n["a"])(t.substr(0,e)),i=Object(n["a"])(t.substr(e+1,t.length));return a.test("".concat(s,"@").concat(i).toLowerCase())}catch(r){return a.test(t)}},c=function(t){return!(!t||""===t)&&"string"===typeof t},l=function(t){if(!t||""===t)return!1;var e=t.indexOf("@"),a=Object(n["a"])(t.substr(e+1,t.length));return!!c(a)&&!a.includes("@")},d=[{name:"email",type:"email",validate:o},{name:"url",type:"url",validate:r},{name:"avatar",type:"url",validate:r},{name:"description",type:"string",validate:c},{name:"notice",type:"string",validate:c},{name:"keywords",type:"string",validate:c},{name:"vnd.twitter",type:"string",validate:l},{name:"vnd.github",type:"string",validate:l}];e["a"]=d},fa2c:function(t,e,a){"use strict";var n=a("0815"),s=a.n(n);s.a}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-427b4efc.3a955896.js.map