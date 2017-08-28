var loadCSS = function(config) {
    var head = document.getElementsByTagName("head")[0];

    if (config.content) {
        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) { // for IE 
            style.styleSheet.cssText = config.content;
        } else {
            style.innerHTML = config.content;
        }
        head.appendChild(style);
    } else if (config.url) {
        var link = document.createElement('link');

        link.href = config.url;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    }
};

require.config({
    baseUrl: "/",
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/3.2.1/jquery.min",
        "vue": "https://cdn.bootcss.com/vue/2.4.2/vue.min",
        "iscroll": "https://cdn.bootcss.com/iScroll/5.2.0/iscroll",
        "app": "js/app",
        "pagebar": "js/page",
        "waterWave": "cdn/waterWave"
    }
});


require(["jquery", "vue", "app", "pagebar", "waterWave", "iscroll"], function($, Vue, App, Pagebar, waterWave, iScroll) {
    console.log("App", App);
    $(function() {


        var app = new Vue({
            el: "#app",
            data: {},
            components: {
                // 'my-component': App,
                // 'page-bar': Pagebar
            },
            mounted: function() {
                if ($(".scroll").length > 0) {
                    var scroll = new iScroll($(".scroll")[0]);
                }

                waterWave('canvas', {
                    //canvs宽高
                    cW: 2000,
                    cH: 600,
                    baseY: 100,
                    oneColor: "rgba(0,0,0,.3)",
                    twoColor: "rgba(0,0,0,.3)",
                    vertexsNum: 250,
                    autoDiff: 1000,
                    isMouseWhell: true,
                    isDrop: true,
                    dropRadius: 3,
                    dropLocation: 200,
                    dropAcce: 0.018,
                    isShowTips: false
                })
            }
        });
    });
})