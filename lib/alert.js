/**
 * 警告弹窗相关函数
 * @author JinXinhua <79202792 at qq.com> 20151024
 */

var alertObj;
var alertName;
var alertMsg; // 警告弹窗消息
var alertRet = false;

// alert处理函数
UIATarget.onAlert = function onAlert(alert) {
    alertObj = alert;
    alertName = alert.name();
    var view1 = alert.scrollViews()[0];
    alertMsg = view1.staticTexts()[1].name();
    logDebug("onAlert alertName=" + alertName + " alertMsg=" + alertMsg
            + " ret=" + alertRet);
    // tap(app.alert().buttons()[0]);
    return alertRet; // 返回假表示让系统处理，会自动点按钮
}

//
function tapAlertButton(i) {
    if (isUndefined(i)) {
        i = 0;
    }
    tap(app.alert().buttons()[i]);
    alertRet = false;
}

//
function isAlertVisible() {
    var ret = false;
    var a = app.alert();
    if (isUIAAlert(a)) {
        ret = a.isVisible();
    }
    return ret;
}

// 
function tapButtonAndAlert(i, alertButtonIndex) {
    if (isUndefined(i)) {
        i = SAVE;
    }
    if (isUndefined(alertButtonIndex)) {
        alertButtonIndex = OK;
    }
    alertRet = true;
    try {
        if (i != "none") {
            tapButton(window, i);
        }
        tapAlertButton(alertButtonIndex);
    } catch (e) {
        logError("tapButtonAndAlertOk,i=" + i + ",alertButtonIndex"
                + alertButtonIndex + ",e" + e);
    }
    alertRet = false;
}
function saveAndAlertOk() {
    tapButtonAndAlert();
}