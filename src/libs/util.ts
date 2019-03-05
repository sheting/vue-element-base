const util = <any>{
}
util.title = (title: string) => {
    title = title ? title : 'base - 首页'
    window.document.title = title
}

export default util
