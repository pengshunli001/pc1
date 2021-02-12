import cryptoJs from 'crypto-js';
import { Toast } from 'vant';
/**
 * 获取uuid
 */
export function getUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
    })
}


export function cryptoFormat(value, key = 'qwertyuiqwertyui') {
    let _key = cryptoJs.enc.Utf8.parse(key);
    let cipher = cryptoJs.AES.encrypt(value, _key, {
        mode: cryptoJs.mode.ECB,
        padding: cryptoJs.pad.Pkcs7,
    })
    return cipher.ciphertext.toString(cryptoJs.enc.Base64)
}

export function checkRules(_rules = {}, obj = {}) {
    let isChecked = true
    let ruleKeys = Object.keys(_rules)
    for (let index = 0; index < ruleKeys.length; index++) {
        let field = ruleKeys[index]
        let value = obj[field]
        let rules = _rules[field]
        for (let i = 0; i < rules.length; i++) {
            let reg = rules[i].rule

            if (!reg) continue

            if (value === undefined || !reg.test(value)) {
                Toast(rules[i].tip || '校验失败')
                isChecked = false
                break
            }
        }
    }
    return isChecked
}
