/**
 * Created by 袁理开 on 2018/1/13.
 */
var kie = function () {
    var u = undefined;
    var d = document;
    this.cookie = function (name, value, str) {
        if (value != u) {
            if (str != u) {
                var exp = new Date();
                exp.setTime(exp.getTime() + str.expires * 24 * 60 * 60 * 1000);
                d.cookie = name + '=' + value + ';expires=' + exp.toGMTString();
            } else {
                d.cookie = name + '=' + value;
            }
        } else {  //获取cookie
            var str = d.cookie.split('; ');
            for (var i = 0; i < str.length; i++) {
                var er = str[i].split('=');
                if (er[0] == name) {
                    return er[1]
                }
            }
        }
    };
};

var yl = new kie();
kie.prototype.removeCookie=function(name){
    yl.cookie(name,'',{
        expires:-1
    })
};
export default yl;
/**
 * Created by 袁理开 on 2018/1/13.
 */