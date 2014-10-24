'use strict';

var RD = (function (rd) {

    var $navigation = $('[data-content]');

    function handleNavigation(_, data) {
        var navItems = data.items;
        
        $.each(navItems, function (iterator, item) {
            var $li = $('<li/>'),
                $link = $('<a/>');

            if (iterator == 0) {
                $li.addClass('active');
            }

            $link.attr('href', '#');
            $link.attr('data-content-key', item.toLowerCase());
            $link.html(item);

            $li.append($link);
            $navigation.append($li);
        });

        //$navigation.find('li').first().find('a').trigger('click');
    }

    function handleNavClick() {

    }

    rd.navigation = {};
    rd.navigation.init = function () {

    };

    rd.navigation.init();

    return rd;
})(RD || {});

