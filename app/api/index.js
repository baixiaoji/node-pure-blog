/**
 * 
 * api server
 */

module.exports = (url)=>{

    let apiMap = {
        "/list.action": ["吉他","哟副","外套"],
        "/user.action": ["白霁","凯文","霖荆"]
    }

    return apiMap[url]
}