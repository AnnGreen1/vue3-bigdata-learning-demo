/**
 * @description:获取年月日
 * @returns {string} yyyy-mm-dd
 */

export function getDate(){
    const date = new Date();
    return date.getFullYear() + '-' + addZero(date.getMonth() + 1) + '-' + addZero(date.getDate());
}

/**
 * @description:获取分秒
 * @returns {string} hh:mm:ss
 */

export function getTime() {
    const date = new Date()
    return addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds())
}

/**
 * @description:补0
 * @param {string} MORD
 * @returns {string} MORD
 */

function addZero(MORD){
    return MORD > 9 ? MORD : '0'+MORD
}