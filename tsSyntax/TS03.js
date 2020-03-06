"use strict";
exports.__esModule = true;
// TS03 enum 枚舉類型
// value可自訂
var weekDays;
(function (weekDays) {
    weekDays[weekDays["Mon"] = 5] = "Mon";
    weekDays[weekDays["Tue"] = 6] = "Tue";
    weekDays[weekDays["Wed"] = 7] = "Wed";
    weekDays[weekDays["Thr"] = 8] = "Thr";
    weekDays[weekDays["Fri"] = 9] = "Fri";
})(weekDays || (weekDays = {}));
console.log('weekDays.Mon', weekDays.Mon);
console.log('weekDays', weekDays);
console.log('weekDays[0]', weekDays[0]);
