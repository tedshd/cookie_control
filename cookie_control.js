/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2018-08-21 11:07:24
 */

(function () {
    var cookieControl = function (method, option) {

        var name = option.name || '',
            value = option.value || '',
            extime = option.expiredTime || '',
            domain = option.domain || '',
            path = option.path || '/',
            day = '',
            expires = '';

        if (!name) {
            console.error('cookieControl: not set name');
            return;
        }

        if (extime) {
            day = new Date();
            day.setTime(day.getTime() + (extime*1000));
            expires = 'expires=' + day.toGMTString() + ';';
        }
        if (domain) {
            domain = 'domain=' + domain + ';';
        }
        if (path) {
            path = 'path=' + path + ';';
        }

        switch (method) {
            case 'set':
                document.cookie = name + '=' + value + ';' + domain + path + expires;
                break;
            case 'get':
                var cname = name + '=',
                    ca = document.cookie.split(';');
                for(var i = 0; i < ca.length; i++) {
                    var c = ca[i].trim();
                    if (c.indexOf(cname) === 0) {
                        return c.substring(cname.length, c.length);
                    }
                }
                return '';
                break;
            case 'delete':
                document.cookie = name + '=;' + domain + path + ' expires=Thu, 01 Jan 1970 00:00:00 UTC;';
                break;
            default:
                console.error('cookieControl: not set method');
                break;

        }
    };
    window.cookieControl = cookieControl;
})();
