/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2018-08-21 11:07:24
 */

(function () {
    var cookieControl = function (option) {

        var name = option.name || '',
            value = option.value || '',
            extime = option.expiredTime || '',
            domain = option.domain || '',
            path = option.path || '',
            day = '',
            expires = '';

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

        console.log(name, value, domain, path, expires);
        document.cookie = name + '=' + value + ';' + domain + path + expires;

        function get () {
            var cname = name + '=',
                ca = document.cookie.split(';');
            for(var i = 0; i < ca.length; i++) {
                var c = ca[i].trim();
                if (c.indexOf(cname) === 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return '';
        }
        function update (option) {
            var uValue = option.value,
                uExtime = option.expiredTime || '';

            if (uExtime) {
                var day = new Date();
                day.setTime(day.getTime() + (uExtime*1000));
                expires = 'expires=' + day.toGMTString() + ';';
            }
            if (uValue) {
                value = uValue;
            }

            document.cookie = name + '=' + value + ';' + domain + path + expires;
        }
        function del () {
            document.cookie = name + '=;' + domain + path + ' expires=Thu, 01 Jan 1970 00:00:00 UTC;';
        }

        this.get = get;
        this.update = update;
        this.delete = del;
    };
    window.cookieControl = cookieControl;
})();
