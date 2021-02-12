
const tokenKey = '_token_key_';
const exp = 30 * 60000;

export function getToken() {
    if (localStorage.getItem(tokenKey)) {
        let vals = localStorage.getItem(tokenKey);
        let dataObj = JSON.parse(vals);
        let isTimed = new Date().getTime() - dataObj.timer > exp;
        if (isTimed) {
            localStorage.removeItem(tokenKey);
            return null;
        }
        return dataObj.val;
    }
    return null;
}

export function setToken(token) {
    let curtime = new Date().getTime();
    let valueDate = JSON.stringify({
        val: token,
        timer: curtime
    });
    localStorage.setItem(tokenKey, valueDate);
}

export function removeToken() {
    localStorage.removeItem(tokenKey);
}

