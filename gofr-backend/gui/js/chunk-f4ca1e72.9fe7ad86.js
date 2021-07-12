(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4ca1e72"],{"2bfd":function(e,t,i){},"99fa":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ihris-element",{attrs:{edit:e.edit,loading:e.loading},scopedSlots:e._u([{key:"form",fn:function(){return["tree"==e.displayType?i("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px","max-height":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[i("v-text-field",e._g({attrs:{label:e.display,readonly:"",outlined:"","hide-details":"auto",rules:e.rules,"error-messages":e.errors,loading:e.loading,dense:""},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(e._s(e.display)+" "),e.required?i("span",{staticClass:"red--text font-weight-bold"},[e._v("*")]):e._e()]},proxy:!0}],null,!0),model:{value:e.displayValue,callback:function(t){e.displayValue=t},expression:"displayValue"}},s))]}}],null,!1,4240353417),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e.disabled||e.preset&&"ResourceAdd"===e.$route.name?e._e():i("v-card",[i("v-treeview",{attrs:{active:e.active,items:e.items,"load-children":e.fetchChildren,open:e.open,"item-disabled":"locked",activatable:"","multiple-active":!1,"selection-type":"independent",loading:e.loading},on:{"update:active":function(t){e.active=t},"update:open":function(t){e.open=t}}})],1)],1):i("v-autocomplete",{attrs:{loading:e.loading,items:e.items,"search-input":e.search,"cache-items":"",flat:"","hide-no-data":"","hide-details":"",label:e.display,outlined:"",dense:"",placeholder:"Start typing for selection",rules:e.rules,disabled:e.disabled||e.preset&&"resource_add"===e.$route.name,"error-messages":e.errors},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t},change:function(t){e.errors=[]}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(e._s(e.display)+" "),e.required?i("span",{staticClass:"red--text font-weight-bold"},[e._v("*")]):e._e()]},proxy:!0}]),model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})]},proxy:!0},{key:"header",fn:function(){return[e._v(" "+e._s(e.display)+" ")]},proxy:!0},{key:"value",fn:function(){return[e._v(" "+e._s(e.displayValue)+" ")]},proxy:!0}])})},n=[],a=i("b85c"),r=i("1da1"),l=(i("96cf"),i("ac1f"),i("841c"),i("5319"),i("d3b7"),i("caad"),i("2532"),i("b0c0"),i("9911"),i("7db0"),i("8a79"),i("bc3a")),o=i.n(l),c=i("b287"),u=i("b383"),h="http://hl7.org/fhir/StructureDefinition/",d={name:"fhir-reference",props:["field","label","sliceName","targetProfile","targetResource","min","max","base-min","base-max","slotProps","path","sub-fields","edit","readOnlyIfSet","constraints","displayType","initialValue","overrideValue"],components:{IhrisElement:c["a"]},data:function(){return{source:{path:"",data:{}},value:{reference:""},qField:"valueReference",loading:!1,search:"",menu:!1,items:[],select:"",resource:"",awaitingSearch:!1,displayValue:"",preset:!1,disabled:!1,errors:[],lockWatch:!1,active:[],open:[],treeLookup:{},allAllowed:!0}},created:function(){this.setupData()},watch:{slotProps:{handler:function(){this.lockWatch||this.setupData()},deep:!0},search:function(e){var t=this;this.awaitingSearch||setTimeout((function(){e&&e.length>1&&t.querySelections(t.search),t.awaitingSearch=!1}),500),this.awaitingSearch=!0},select:function(e){this.value.reference=e,this.getDisplay()},active:function(){this.active.length?(this.select=this.active[0],this.displayValue=this.treeLookup[this.select]):(this.select=void 0,this.displayValue=""),this.menu=!1}},methods:{setupData:function(){if(this.targetProfile&&this.targetResource&&(this.targetProfile.replace(h,"")===this.targetResource?this.allAllowed=!0:this.allAllowed=!1,this.resource=this.targetResource),"tree"===this.displayType&&this.setupTreeItems(),this.slotProps&&this.slotProps.source){if(this.source={path:this.slotProps.source.path+"."+this.field,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data;else{var e=this.$fhirutils.pathFieldExpression(this.field),t=this.$fhirpath.evaluate(this.slotProps.source.data,e);this.source.data=t[0]}this.source.data&&(this.preset=!0,this.select=this.source.data.reference,this.lockWatch=!0)}this.disabled=this.readOnlyIfSet&&this.preset},setupTreeItems:function(){var e=this.initialValue;this.overrideValue&&(e=this.overrideValue),this.loading=!0;var t={};t=e?{partof:e}:{"partof:missing":!0},t._count=500;var i="/fhir/"+this.resource+"?"+u.stringify(t);this.items=[],this.addItems(i,this.items)},checkChildren:function(e){var t={partof:e.id,_summary:"count"},i="/fhir/"+this.resource+"?"+u.stringify(t);return new Promise((function(t){o.a.get(i).then((function(i){var s=i.data;s.total&&s.total>0&&(e.children=[]),t()})).catch((function(e){console.log("failed to check children for",i,e),t()}))}))},addItems:function(e,t){var i=this;o.a.get(e).then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(s){var n,r,l,o,c,u,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=s.data,!(n.entry&&n.entry.length>0)){e.next=23;break}r=Object(a["a"])(n.entry),e.prev=3,r.s();case 5:if((l=r.n()).done){e.next=15;break}return o=l.value,c=!i.allAllowed&&!o.resource.meta.profile.includes(i.targetProfile),u={id:o.resource.resourceType+"/"+o.resource.id,name:o.resource.name,locked:c},e.next=11,i.checkChildren(u);case 11:i.treeLookup[u.id]=u.name,t.push(u);case 13:e.next=5;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](3),r.e(e.t0);case 20:return e.prev=20,r.f(),e.finish(20);case 23:n.link?(h=n.link.find((function(e){return"next"===e.relation})),h?i.addItems(h.url,t):i.loading=!1):i.loading=!1;case 24:case"end":return e.stop()}}),e,null,[[3,17,20,23]])})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){console.log("Failed to add items for",e,t),i.loading=!1}))},fetchChildren:function(e){var t=this,i={};i={partof:e.id,_count:500};var s="/fhir/"+this.resource+"?"+u.stringify(i);return this.loading=!0,this.addItems(s,e.children),new Promise((function(e){var i=0,s=function s(){!t.loading||i++>100?e():setTimeout(s,200)};s()}))},querySelections:function(e){var t=this;this.loading=!0;var i={"name:contains":e};this.targetProfile.endsWith(this.resource)||(i._profile=this.targetProfile);var s="/fhir/"+this.resource+"?"+u.stringify(i);o.a.get(s).then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(i){var s,n,r,l,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s=i.data,t.items=[],!s.entry||!s.entry.length){e.next=24;break}n=Object(a["a"])(s.entry),e.prev=4,n.s();case 6:if((r=n.n()).done){e.next=16;break}return l=r.value,o=l.resource.resourceType+"/"+l.resource.id,c={value:o},e.next=12,t.$fhirutils.resourceLookup(o);case 12:c.text=e.sent,t.items.push(c);case 14:e.next=6;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](4),n.e(e.t0);case 21:return e.prev=21,n.f(),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[4,18,21,24]])})));return function(t){return e.apply(this,arguments)}}())},getDisplay:function(){var e=this;(!this.edit||this.preset)&&this.value&&this.value.reference&&(this.loading=!0,this.$fhirutils.resourceLookup(this.value.reference).then((function(t){e.displayValue=t,"tree"!==e.displayType&&e.items.push({text:t,value:e.value.reference}),e.loading=!1})))}},computed:{index:function(){return this.slotProps?this.slotProps.input:void 0},display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label},required:function(){return(this.index||0)<this.min},rules:function(){var e=this;return this.required?[function(t){return!!t||e.display+" is required"}]:[]}}},p=d,f=i("2877"),m=i("6544"),v=i.n(m),g=i("5530"),y=(i("d81d"),i("4de4"),i("498a"),i("2bfd"),i("b974")),I=i("8654"),b=i("d9f7"),x=i("80d2"),S=Object(g["a"])(Object(g["a"])({},y["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1}),k=y["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,i){return i.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:y["a"].options.props.menuProps.type,default:function(){return S}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(g["a"])(Object(g["a"])({},y["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var i=Object(x["s"])(t,e.itemText),s=null!=i?String(i):"";return e.filter(t,String(e.internalSearch),s)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=y["a"].options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),Object(g["a"])(Object(g["a"])({},S),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(t){return e.valueComparator(e.getValue(t),e.getValue(e.internalValue))}))},listData:function(){var e=y["a"].options.computed.listData.call(this);return e.props=Object(g["a"])(Object(g["a"])({},e.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var i=this;e!==t&&(this.setMenuIndex(-1),this.$nextTick((function(){i.internalSearch&&(1===e.length||i.autoSelectFirst)&&(i.$refs.menu.getTiles(),i.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===x["z"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===x["z"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==x["z"].backspace&&e!==x["z"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var i=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===i){var s=this.selectedItems.length,n=e!==s-1?e:e-1,a=this.selectedItems[n];a?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=n}else this.selectedIndex=i}},clearableCallback:function(){this.internalSearch=null,y["a"].options.methods.clearableCallback.call(this)},genInput:function(){var e=I["a"].options.methods.genInput.call(this);return e.data=Object(b["a"])(e.data,{attrs:{"aria-activedescendant":Object(x["q"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(x["q"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot:function(){var e=y["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections:function(){return this.hasSlot||this.multiple?y["a"].options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,i=t.value;t.value&&this.activateMenu(),this.internalSearch=i,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[x["z"].home,x["z"].end].includes(t)||y["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){y["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){y["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){y["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,i;if(-1!==this.selectedIndex){var s=this.selectedItems[this.selectedIndex],n=this.getText(s);null==(t=e.clipboardData)||t.setData("text/plain",n),null==(i=e.clipboardData)||i.setData("text/vnd.vuetify.autocomplete.item+plain",n),e.preventDefault()}}}}),w=i("b0af"),D=i("e449"),V=i("eb2a"),_=Object(f["a"])(p,s,n,!1,null,null,null);t["default"]=_.exports;v()(_,{VAutocomplete:k,VCard:w["a"],VMenu:D["a"],VTextField:I["a"],VTreeview:V["a"]})},b287:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.edit?i("v-container",[e._t("form")],2):i("div",[i("v-row",{attrs:{dense:""}},[i("v-col",{staticClass:"font-weight-bold",attrs:{cols:e.$store.state.cols.header}},[e._t("header")],2),e.loading?i("v-col",{attrs:{cols:e.$store.state.cols.content}},[i("v-progress-linear",{attrs:{indeterminate:"",color:"primary"}})],1):i("v-col",{attrs:{cols:e.$store.state.cols.content}},[e._t("value")],2)],1),i("v-divider")],1)],1)},n=[],a={name:"ihris-element",props:["edit","loading"]},r=a,l=i("2877"),o=i("6544"),c=i.n(o),u=i("62ad"),h=i("a523"),d=i("ce7e"),p=i("8e36"),f=i("0fd9"),m=Object(l["a"])(r,s,n,!1,null,null,null);t["a"]=m.exports;c()(m,{VCol:u["a"],VContainer:h["a"],VDivider:d["a"],VProgressLinear:p["a"],VRow:f["a"]})}}]);
//# sourceMappingURL=chunk-f4ca1e72.9fe7ad86.js.map