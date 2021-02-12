//导出下载
export function fileDownload(data, fileName){
    const blob = new Blob([data]);
    if (navigator.msSaveBlob){
        console.log('下载');
        return navigator.msSaveBlob(blob, fileName);
    }
    const blobUrl = window.URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = blobUrl;
    a.download = fileName;
    a.click();
};

export function formatDateTime(dataStr){
    let date = new Date(dataStr);
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    let d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    let h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    let minute = date.getMinutes();
    let second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute ) : minute;
    second = second < 10 ? ('0' + second ) : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
}

export function formatDateTime1(dataStr){
    let date = new Date(dataStr);
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    let d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    let h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    let minute = date.getMinutes();
    let second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute ) : minute;
    second = second < 10 ? ('0' + second ) : second;
    return y + '-' + m + '-' + d;
}

export function shieldInfo(info){
    let arr = info && info.split('') || [];
    if (arr.length === 11){   //手机号
       for (let i=0; i< arr.length; i++){
           if(i >=4 && i <= 7){
               arr[i] = '*';
           }
       }
    } else {
        for (let i=0; i< arr.length; i++){  //身份证
            if(i >=6 && i <= 13){
                arr[i] = '*';
            }
        }
    }
    return arr.join('');
};