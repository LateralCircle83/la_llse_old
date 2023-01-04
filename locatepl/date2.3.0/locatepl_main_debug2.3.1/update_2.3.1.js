//LiteLoaderScript Dev Helper
/// <reference path="d:\LateralCircle83\object/dts/llaids/src/index.d.ts"/>



//main:https://gitee.com/lateralcircle83/eval/raw/master/locatepl/date2.3.0/locatepl_main_debug2.3.1/locatepl_main_2.3.1.js
network.httpGet('https://gitee.com/lateralcircle83/eval/raw/master/locatepl/date2.3.0/locatepl_main_debug2.3.1/locatepl_main_2.3.1.js', (st, str) => {
    log(st)
    if (st==200) {
        logger.log('获取新版本成功')
        File.writeTo('.\\plugins\\locatepl\\locatepl_main.js', str)
        logger.log('成功写入主程序')
        let fine = File.readFrom('.\\plugins\\locatepl\\conf.json')
        logger.log('更换版本号')
        let obj = JSON.parse(fine)
        obj.version = '2.3.1'
        File.writeTo('.\\plugins\\locatepl\\conf.json', JSON.stringify(obj))
        logger.log('版本号更换完成，启动中……')
        mc.runcmdEx("ll load ./plugins/locatepl/locatepl_main.js"); mc.runcmdEx("ll unload locatepl_first")
    } else {
        logger.error("无法连接服务器，请移步至minebbs手动获取新版本")
        logger.warn("将启动您固有的版本")
        mc.runcmdEx("ll load ./plugins/locatepl/locatepl_main.js"); mc.runcmdEx("ll unload locatepl_first")
    }
})