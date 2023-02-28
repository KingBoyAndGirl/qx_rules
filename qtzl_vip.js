/*

QX:
[rewrite_local]
#解锁会员
^https:\/\/i\.at\.qq\.com\/pay\/memberinfo url script-response-body https://raw.githubusercontent.com/KingBoyAndGirl/qx_rules/main/qtzl_vip.js

[mitm]
hostname = wx-love-api.afunapp.com

*/

let obj = JSON.parse($response.body);
obj = {
  "is_vip": true,
  "vip_type": 0
 };

$done({body: JSON.stringify(obj)});
