/*
* Jssor.Core 14.0
* 
* TERMS OF USE - Jssor.Core
* 
* Copyright 2013 Jssor
* All rights reserved.
* 
* Redistribution and use in source and binary forms, with or without modification, 
* are permitted provided that the following conditions are met:
* 
* Redistributions of source code must retain the above copyright notice, this list of 
* conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list 
* of conditions and the following disclaimer in the documentation and/or other materials 
* provided with the distribution.
* 
* Neither the name of the author nor the names of contributors may be used to endorse 
* or promote products derived from this software without specific prior written permission.
* 
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
*  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
*  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
*  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
* AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
*  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
* OF THE POSSIBILITY OF SUCH DAMAGE. 
*
*/

/*! Jssor */
$Jssor$ = window.$Jssor$ = window.$Jssor$ || {};

//$Jssor$.$Ready = function () {
//    //Logic borrowed from http://www.jquery.com

//    var readyBound = false,
//        readyList = [],
//        DOMContentLoaded;

//    if (document.addEventListener) {
//        DOMContentLoaded = function() {
//            document.removeEventListener('DOMContentLoaded', DOMContentLoaded, false);
//            ready();
//        };

//    } else if (document.attachEvent) {
//        DOMContentLoaded = function() {
//            if (document.readyState === 'complete') {
//                document.detachEvent('onreadystatechange', DOMContentLoaded);
//                ready();
//            }
//        };
//    }

//    function ready() {
//        if (!ready.$IsReady) {
//            ready.$IsReady = true;
//            for (var i = 0, j = readyList.length; i < j; i++) {
//                try {
//                    readyList[i]();
//                }
//                catch (e) { }
//            }
//        }
//    }

//    function doScrollCheck() {
//        try {
//            document.documentElement.doScroll("left");
//        } catch (e) {
//            setTimeout(doScrollCheck, 1);
//            return;
//        }
//        ready();
//    }

//    function bindReady() {
//        if (readyBound) {
//            return;
//        }
//        readyBound = true;

//        if (document.readyState === 'complete') {
//            ready.$IsReady = true;
//        } else {
//            if (document.addEventListener) {
//                document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
//                window.addEventListener('load', ready, false);
//            } else if (document.attachEvent) {
//                document.attachEvent('onreadystatechange', DOMContentLoaded);
//                window.attachEvent('onload', ready);

//                var toplevel = false;

//                try {
//                    toplevel = window.frameElement == null;
//                } catch (e) { }

//                if (document.documentElement.doScroll && toplevel) {
//                    doScrollCheck();
//                }
//            }
//        }
//    }
//    bindReady();

//    return function(callback) {
//        ready.$IsReady ? callback() : readyList.push(callback);
//    };
//}();


//$JssorDebug$
var $JssorDebug$ = new function () {

    this.$DebugMode = true;

    // Methods

    this.$Log = function (msg, important) {
        var console = window.console || {};
        var debug = this.$DebugMode;

        if (debug && console.log) {
            console.log(msg);
        } else if (debug && important) {
            alert(msg);
        }
    };

    this.$Error = function (msg, e) {
        var console = window.console || {};
        var debug = this.$DebugMode;

        if (debug && console.error) {
            console.error(msg);
        } else if (debug) {
            alert(msg);
        }

        if (debug) {
            // since we're debugging, fail fast by crashing
            throw e || new Error(msg);
        }
    };

    this.$Fail = function (msg) {
        throw new Error(msg);
    };

    this.$Assert = function (value, msg) {
        var debug = this.$DebugMode;
        if (debug) {
            if (!value)
                throw new Error("Assert failed " + msg || "");
        }
    };

    this.$Trace = function (msg) {
        var console = window.console || {};
        var debug = this.$DebugMode;

        if (debug && console.log) {
            console.log(msg);
        }
    };

    this.$Execute = function (func) {
        var debug = this.$DebugMode;
        if (debug)
            func();
    };

    this.$LiveStamp = function (obj, id) {
        var stamp = document.createElement("DIV");
        stamp.setAttribute("id", id);

        obj.$Live = stamp;
    };
};


//$JssorEventManager$
var $JssorEventManager$ = function () {
    var self = this;
    // Fields

    var listeners = {}; // dictionary of eventName --> array of handlers

    // Methods

    self.$On = self.addEventListener = function (eventName, handler) {
        if (typeof (handler) != "function") {
            return;
        }

        if (!listeners[eventName]) {
            listeners[eventName] = [];
        }

        listeners[eventName].push(handler);
    };

    self.$Off = self.removeEventListener = function (eventName, handler) {
        var handlers = listeners[eventName];

        if (typeof (handler) != "function") {
            return;
        } else if (!handlers) {
            return;
        }

        for (var i = 0; i < handlers.length; i++) {
            if (handler == handlers[i]) {
                handlers.splice(i, 1);
                return;
            }
        }
    };

    self.$ClearEventListeners = function (eventName) {
        if (listeners[eventName]) {
            delete listeners[eventName];
        }
    };

    self.$TriggerEvent = function (eventName) {
        var handlers = listeners[eventName];
        var args = [];

        if (!handlers) {
            return;
        }

        for (var i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }

        for (var i = 0; i < handlers.length; i++) {
            try {
                handlers[i].apply(window, args);
            } catch (e) {
                // handler threw an error, ignore, go on to next one
                $JssorDebug$.$Error(e.name + " while executing " + eventName +
                        " handler: " + e.message, e);
            }
        }
    };
};