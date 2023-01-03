/** Initialize Wow.js */
new WOW().init();

/** Declare configuration for easy pieChart */
var pieChart = function() {
    $('.chart').easyPieChart({
        scaleColor: false,
        lineWidth: 10,
        lineCap: 'round',
        barColor: '#09b200',
        trackColor:	"#f5f5f5",
        size: 160,
        animate: 1500,
        /** グラフを１変化させる毎に実行される処理 [ from: 初期値(0), to: 最終値(=data-percentの値), currentValue: グラフの値 ] */ 
        onStep: function(from, to, currentValue) {            
            // 表示されている％の数値を更新する ( ~~ : 端数を省いて表示する )
            this.el.querySelector('span').textContent = ~~currentValue;
        }
    });
};

/** Declare a function to set firing Timing for easy pieChart */
var skillsWayPoint = function() {
    if ($('#fh5co-skills').length > 0 ) {
        $('#fh5co-skills').waypoint( function( direction ) {
            if( direction === 'down' && !$(this.element).hasClass('animated') ) {
                setTimeout( pieChart , 400 );
                $(this.element).addClass('animated');
            }
        } , { offset: '60%' } );
    }
};





/** プログレスバーの実装 */











/** filterizr の有効化 */
// filterizr のオプションを定義する
const filterizrOptions = { 
    animationDuration: 0.5,
    callbacks: {
        onInit: function() { },
        onFilteringStart: function() { },
        onFilteringEnd: function() { },
        onShufflingStart: function() { },
        onShufflingEnd: function() { },
        onSortingStart: function() { },
        onSortingEnd: function() { }
    },
    controlsSelector: '',
    delay: 0,
    delayMode: 'progressive',
    easing: 'ease-out',
    filter: 'all',
    filterOutCss: {
        opacity: 0,
        transform: 'scale(0.5)'
    },
    filterInCss: {
        opacity: 0,
        transform: 'scale(1)'
    },
    gridItemsSelector: '.filtr-item',
    gutterPixels: 0,
    layout: 'sameSize',
    multifilterLogicalOperator: 'or',
    searchTerm: '',
    setupControls: true,
    spinner: {
        enabled: false,
        fillColor: '#2184D0',
        styles: {
            height: '75px',
            margin: '0 auto',
            width: '75px',
            'z-index': 2,
        },
    },
};

/** filterizr をイニシャライズ */ 
$('.filter-container').filterizr({filterizrOptions});


/** スキルに応じた色を着色する */











/** 定義した関数を実行する(メイン処理) */
$(function() {
    // easyPiechart を実行
    skillsWayPoint();
});

