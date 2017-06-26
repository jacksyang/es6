"use strict";

/**
 * Created by hdb on 2017/6/26.
 */
function yjz() {
    console.log(arguments.length <= 0 ? undefined : arguments[0]);
    console.log(arguments.length <= 1 ? undefined : arguments[1]);
    console.log(arguments.length <= 2 ? undefined : arguments[2]);
    console.log(arguments.length <= 3 ? undefined : arguments[3]);
    console.log(arguments.length <= 4 ? undefined : arguments[4]);
}
yjz(1, 2, 3);