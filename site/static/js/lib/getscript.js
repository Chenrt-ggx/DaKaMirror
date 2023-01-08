var scriptSrc = '';
var scriptArr = $('script');

var configBase = '1582866800124';
if (window.location.href.indexOf('?') > -1) {
    var url = window.location.href + '&time=' + new Date().getTime();
} else {
    var url = window.location.href + '?time=' + new Date().getTime();
}

$.ajax({
    type: 'get',
    url: url,
    data: {},
    dataType: 'text',
    success: function (data) {
        scriptArr.map(function (index) {
            if (scriptArr[index].src.indexOf('vendor') > -1) {
                scriptSrc = scriptArr[index].src.split('=')[1];
                if (data.indexOf(scriptSrc) == -1) {
                    window.location.reload(true);
                }
                return;
            }
        });
    },
    err: function () {}
});
