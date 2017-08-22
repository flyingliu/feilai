define(function(require, exports, module) {
    loadCSS({content : ".app1{color:red}"});

    var Vue           = require("vue");
    module.exports = Vue.extend({
        data : function() {
            return {
                id      : 23456,
                message : 'Message-----555------'
            }
        },
        methods : {
            click : function() {
                console.log("click()");
            }
        },
        template : '<div class="app1" @click="click"><p>{{message}}</p></div>'
    });
});