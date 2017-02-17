
var ToolTip = (function(selector, param){
    var el = selector ? $(selector) : $('[rel~=tooltip]');

    var opt = {
        speed:        param.speed || 200,
        hintMaxWidth: param.hintMaxWidth || 100,
        hintClass:    param.hintClass || 'hint'
    };
    var hintCss = {
        'max-width':        opt.hintMaxWidth,
        'position':         'absolute',
        'display':          'none',
        'z-index':          10,
        'box-sizing':       'border-box',
        'background-color': '#fff'
    };
    var hint = $('<div class="' + opt.hintClass + '"/>');

    var setHintPos = function(_this){
        var WW = $(window).outerWidth();        var WH = $(window).outerHeight();

        var posTop  = _this.offset().top;
        var posLeft = _this.offset().left;

        var iconWidth  = _this.outerWidth();
        var iconHeight = _this.outerHeight();

        var hintText   = _this.prop('title');
        var hintHeight = hint.text( hintText ).outerHeight();
        var hintWidth = hint.outerWidth();

        // if left & right sides has enough space
        if ( (WW - posLeft - iconWidth > hintWidth/2) && (posLeft > hintWidth/2) ) {
            hint.css({'left': (posLeft + iconWidth/2 - hintWidth/2) });

            if ( posTop > hintHeight ) {
                hint.css({'top': (posTop - hintHeight) });

            } else {
                hint.css({'top': (posTop + iconHeight) });
            }

            // if right side hasn't enough space
        } else if ( (WW - posLeft - iconWidth) <= hintWidth/2 ) {
            hint.css({'left': (posLeft - hintWidth) });
            hint.css({'top':  (posTop - hintHeight/2 + iconHeight/2) });

            // if left side hasn't enough space
        } else if ( posLeft <= hintWidth/2 ) {
            hint.css({'left': (posLeft + iconWidth) });
            hint.css({'top':  (posTop - hintHeight/2 + iconHeight/2) });
        }
    };

    return {
        init: function(){
            hint.appendTo('body')
                .css( hintCss );

            el.hover(
                function(){
                    setHintPos( $(this) );
                    return hint.fadeIn(opt.speed);
                },
                function(){
                    return hint.fadeOut(opt.speed);
                }
            );
            return this;
        }()
    }
});