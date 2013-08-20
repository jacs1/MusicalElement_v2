// /* ===================================================
//  * bootstrap-transition.js v2.3.1
//  * http://twitter.github.com/bootstrap/javascript.html#transitions
//  * ===================================================
//  * Copyright 2012 Twitter, Inc.
//  *
//  * Licensed under the Apache License, Version 2.0 (the "License");
//  * you may not use this file except in compliance with the License.
//  * You may obtain a copy of the License at
//  *
//  * http://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing, software
//  * distributed under the License is distributed on an "AS IS" BASIS,
//  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  * See the License for the specific language governing permissions and
//  * limitations under the License.
//  * ========================================================== */


// !function ($) {

//   "use strict"; // jshint ;_;


//   /* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
//    * ======================================================= */

//   $(function () {

//     $.support.transition = (function () {

//       var transitionEnd = (function () {

//         var el = document.createElement('bootstrap')
//           , transEndEventNames = {
//                'WebkitTransition' : 'webkitTransitionEnd'
//             ,  'MozTransition'    : 'transitionend'
//             ,  'OTransition'      : 'oTransitionEnd otransitionend'
//             ,  'transition'       : 'transitionend'
//             }
//           , name

//         for (name in transEndEventNames){
//           if (el.style[name] !== undefined) {
//             return transEndEventNames[name]
//           }
//         }

//       }())

//       return transitionEnd && {
//         end: transitionEnd
//       }

//     })()

//   })

// }(window.jQuery);

// (function(){
//   var jQuery = require('jquery');
//   /* ========================================================================
//    * Bootstrap: transition.js v3.0.0
//    * http://twbs.github.com/bootstrap/javascript.html#transitions
//    * ========================================================================
//    * Copyright 2013 Twitter, Inc.
//    *
//    * Licensed under the Apache License, Version 2.0 (the "License");
//    * you may not use this file except in compliance with the License.
//    * You may obtain a copy of the License at
//    *
//    * http://www.apache.org/licenses/LICENSE-2.0
//    *
//    * Unless required by applicable law or agreed to in writing, software
//    * distributed under the License is distributed on an "AS IS" BASIS,
//    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    * See the License for the specific language governing permissions and
//    * limitations under the License.
//    * ======================================================================== */
  
  
//   +function ($) { "use strict";
  
//     // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
//     // ============================================================
  
//     function transitionEnd() {
//       var el = document.createElement('bootstrap')
  
//       var transEndEventNames = {
//         'WebkitTransition' : 'webkitTransitionEnd'
//       , 'MozTransition'    : 'transitionend'
//       , 'OTransition'      : 'oTransitionEnd otransitionend'
//       , 'transition'       : 'transitionend'
//       }
  
//       for (var name in transEndEventNames) {
//         if (el.style[name] !== undefined) {
//           return { end: transEndEventNames[name] }
//         }
//       }
//     }
  
//     // http://blog.alexmaccaw.com/css-transitions
//     $.fn.emulateTransitionEnd = function (duration) {
//       var called = false, $el    = this
//       $(this).one('webkitTransitionEnd', function () { called = true })
//       var callback = function () { if (!called) $($el).trigger('webkitTransitionEnd') }
//       setTimeout(callback, duration)
//       return this
//     }
  
//     $(function () {
//       $.support.transition = transitionEnd()
//     })
  
//   }(jQuery);
  
// })()


/* ===================================================
 * bootstrap-transition.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#transitions
 * ===================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


// !function ($) {

//   "use strict"; // jshint ;_;


//   /* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
//    * ======================================================= */

//   $(function () {

//     $.support.transition = (function () {

//       var transitionEnd = (function () {

//         var el = document.createElement('bootstrap')
//           , transEndEventNames = {
//                'WebkitTransition' : 'webkitTransitionEnd'
//             ,  'MozTransition'    : 'transitionend'
//             ,  'OTransition'      : 'oTransitionEnd otransitionend'
//             ,  'transition'       : 'transitionend'
//             }
//           , name

//         for (name in transEndEventNames){
//           if (el.style[name] !== undefined) {
//             return transEndEventNames[name]
//           }
//         }

//       }())

//       return transitionEnd && {
//         end: transitionEnd
//       }

//     })()

//   })

// }(window.jQuery);