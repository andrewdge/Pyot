(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{383:function(e,t,a){"use strict";a.r(t);var r=a(42),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objects"}},[e._v("#")]),e._v(" Objects")]),e._v(" "),a("p",[e._v("Pyot comes with a big number of API objects, each of them points to a different source of data, but one thing that doesn't change is their inherited class behavior, all attributes and methods should be available by IDE autocompletion, if you don't see it, there is a chance that you brrrr your code in the way. Below is a list of objects that is used for inheriting all the API objects.")]),e._v(" "),a("h2",{attrs:{id:"pyot-core-object-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pyot-core-object-api"}},[e._v("#")]),e._v(" Pyot Core Object API")]),e._v(" "),a("ul",[a("li",[e._v("This object is identified using the badge "),a("Badge",{attrs:{text:"Pyot Core",vertical:"middle"}}),e._v(" in the API section")],1)]),e._v(" "),a("p",[e._v("This is main type of objects that developers works with. Below is a list of general member methods:")]),e._v(" "),a("blockquote",[a("h3",{attrs:{id:"init-kwargs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-kwargs"}},[e._v("#")]),e._v(" "),a("code",[e._v("__init__(**kwargs)")]),e._v(" "),a("Badge",{attrs:{text:"Pyot Core",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Creates an instance of the Pyot Core Object. Parameters varies per API.")])]),e._v(" "),a("blockquote",[a("h3",{attrs:{id:"get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[e._v("#")]),e._v(" "),a("code",[e._v("get()")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}}),e._v(" "),a("Badge",{attrs:{text:"awaitable",type:"error",vertical:"middle"}}),e._v(" "),a("Badge",{attrs:{text:"unchainable",type:"warning",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("This is an awaitable that makes a "),a("code",[e._v("get")]),e._v(" to the pipeline, searching for what it needs and returns the found data.")])]),e._v(" "),a("blockquote",[a("h3",{attrs:{id:"query-kwargs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-kwargs"}},[e._v("#")]),e._v(" "),a("code",[e._v("query(**kwargs)")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Appends query parameters to the object, these are normally the needed query parameters specified in Riot API Dev Portal. Parameters varies per API.")])]),e._v(" "),a("blockquote",[a("h3",{attrs:{id:"create-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-token"}},[e._v("#")]),e._v(" "),a("code",[e._v("create_token()")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}}),e._v(" "),a("Badge",{attrs:{text:"awaitable",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Creates a Pyot Pipeline Token that can make calls on the low level pipeline API.")])]),e._v(" "),a("blockquote",[a("h3",{attrs:{id:"set-session-id-id-str"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-session-id-id-str"}},[e._v("#")]),e._v(" "),a("code",[e._v("set_session_id(id: str)")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("Sets session the id for the object to use in pipeline when "),a("code",[e._v("get()")]),e._v(" is called, this method is typically called by the Pyot Gatherer, but this low level API is provided")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("id")]),e._v(" "),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(": The session's id, typically a uuid4 value to avoid duplicate keys.")],1)])]),e._v(" "),a("blockquote",[a("h3",{attrs:{id:"dict-pyotify-false-remove-server-true"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dict-pyotify-false-remove-server-true"}},[e._v("#")]),e._v(" "),a("code",[e._v("dict(pyotify=False, remove_server=True)")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("This method returns a python dictionary of the object.")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("pyotify")]),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(": Define if dictionary returned should be the Meta cached data or an exact same copy of the Pyot object by going recursive all the way down to the bottom of the object structure. Getting from the Meta cached data has a complexity of O(1), it has the same structure as the object with some exceptions: 1. Most keys are camelCased, 2. Some renamed keys are not reflected, 3. Some values that returns python builtin objects might return raw params (e.g. "),a("code",[e._v("creation: datetime")]),e._v(" is returned as "),a("code",[e._v("gameStartTime: unix millis")]),e._v("), meanwhile setting this param to "),a("code",[e._v("True")]),e._v(" will get the exact copy but as a dict with the cost of more time and memory complexity. Defaults to "),a("code",[e._v("False")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("remove_server")]),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(": This only affects if "),a("code",[e._v("pyotify")]),e._v(" is set to True, by nature the Core object will pass down the server ("),a("code",[e._v("platform")]),e._v(", "),a("code",[e._v("region")]),e._v(", "),a("code",[e._v("locale")]),e._v(') info to the Static objects in order to make correct "bridges", by setting to '),a("code",[e._v("False")]),e._v(" the dict will not remove the server info for each object. Defaults to "),a("code",[e._v("True")]),e._v(".")],1)])])]),e._v(" "),a("blockquote",[a("h3",{attrs:{id:"json-pyotify-false-remove-server-true"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-pyotify-false-remove-server-true"}},[e._v("#")]),e._v(" "),a("code",[e._v("json(pyotify=False, remove_server=True)")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("This method returns a json serialized object, it is a shorcut of the long typed "),a("code",[e._v("json.dumps(x.dict())")]),e._v(" where "),a("code",[e._v("x")]),e._v(" is the Pyot Object.")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("pyotify")]),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(": Refer to above description of the params")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("remove_server")]),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(": Refer to above description of the params")],1)])])]),e._v(" "),a("h2",{attrs:{id:"pyot-static-object-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pyot-static-object-api"}},[e._v("#")]),e._v(" Pyot Static Object API")]),e._v(" "),a("ul",[a("li",[e._v("This object is identified using the badge "),a("Badge",{attrs:{text:"Pyot Static",vertical:"middle"}}),e._v(" in the API section")],1)]),e._v(" "),a("p",[e._v("These are objects that are nested into the Pyot Core Objects, inheriting some partial functions of the Pyot Core. Below is a list of general member methods:")]),e._v(" "),a("blockquote",[a("h3",{attrs:{id:"dict-pyotify-false-remove-server-true-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dict-pyotify-false-remove-server-true-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("dict(pyotify=False, remove_server=True)")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("This method returns a python dictionary of the object.")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("pyotify")]),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(": Refer to Pyot Core description of the params")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("remove_server")]),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(": Refer to Pyot Core description of the params")],1)])])]),e._v(" "),a("blockquote",[a("h3",{attrs:{id:"json-pyotify-false-remove-server-true-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-pyotify-false-remove-server-true-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("json(pyotify=False, remove_server=True)")]),e._v(" "),a("Badge",{attrs:{text:"function",type:"error",vertical:"middle"}})],1),e._v(" "),a("p",[e._v("This method returns a json serialized object, it is a shorcut of the long typed "),a("code",[e._v("json.dumps(x.dict())")]),e._v(" where "),a("code",[e._v("x")]),e._v(" is the Pyot Object.")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("pyotify")]),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(": Refer to Pyot Core description of the params")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("remove_server")]),a("Badge",{attrs:{text:"param",type:"warning",vertical:"middle"}}),e._v(": Refer to Pyot Core description of the params")],1)])])]),e._v(" "),a("h2",{attrs:{id:"pyot-lazy-object-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pyot-lazy-object-api"}},[e._v("#")]),e._v(" Pyot Lazy Object API")]),e._v(" "),a("ul",[a("li",[e._v("This object is identified using the badge "),a("Badge",{attrs:{text:"Pyot Lazy",vertical:"middle"}})],1)]),e._v(" "),a("p",[e._v("These objects are made to prevent overhead on the both Pyot Core and Pyot Static objects, it prevents loading unnecessary objects, more specifically when the Core object gets data back to "),a("em",[e._v("fill")]),e._v(" or when a Static object is called to "),a("em",[e._v("fill")]),e._v(", nested objects are "),a("em",[e._v("not")]),e._v(" filled directly, but creates an instance of "),a("code",[e._v("PyotLazyObject")]),e._v(" that contains the nested data, and then when the nested data is needed or called, "),a("code",[e._v("PyotLazyObject")]),e._v(" then proceeds to fill the next nested level object and returns the nested object.")]),e._v(" "),a("blockquote",[a("p",[e._v("No methods are intended for direct usage, if you want to override a method, check source code to do so.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);