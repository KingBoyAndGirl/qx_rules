/*

QX:
[rewrite_local]
#解锁会员
^https?:\/\/*\.afunapp\.com\/(proporty\/get_user_property|user\/get_user_info) url script-response-body https://raw.githubusercontent.com/KingBoyAndGirl/qx_rules/main/qtzl_vip.js


[mitm]
hostname = *.afunapp.com

*/

var body = $response.body;
var obj = JSON.parse(body);
console.log('Hello, world!');
console.log(obj);
obj.data.is_vip = true;
obj.data.vip_type = 0;
console.log('===========');
console.log(obj);
body = JSON.stringify(obj);
$done(body);
