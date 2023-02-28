/*

QX:
[rewrite_local]
#解锁会员
^https://wx-love-api\.afunapp\.com/(proporty/get_user_property|user/get_user_info) url script-response-body https://raw.githubusercontent.com/KingBoyAndGirl/qx_rules/main/qtzl_vip.js


[mitm]
hostname = wx-love-api.afunapp.com

*/

let obj = JSON.parse($response.body);

obj.data.is_vip = true;
obj.data.vip_type = 0;

$done({body: JSON.stringify(obj)});
