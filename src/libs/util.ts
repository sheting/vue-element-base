let util = <any>{
}
util.title = function (title: any) {
    title = title ? title : 'base - 首页'
    window.document.title = title
}

export default util