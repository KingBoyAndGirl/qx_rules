/*

QX:
[rewrite_local]
#解锁会员
^https?:\/\/*\.afunapp\.com\/(proporty\/get_user_property|user\/get_user_info) url script-response-body https://raw.githubusercontent.com/KingBoyAndGirl/qx_rules/main/qtzl_vip.js


[mitm]
hostname = *.afunapp.com

*/

let obj = JSON.parse($response.body);
console.log('Hello, world!');
console.log(obj);
obj.data.is_vip = true;
obj.data.vip_type = 0;
console.log('===========');
console.log(obj);
$done({body: JSON.stringify(obj)});
