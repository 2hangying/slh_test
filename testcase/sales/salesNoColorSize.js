// Zhangy <15068165765 at 139.com> 
function testSalesNoColorSizeAll() {
    // run("【销售开单－开单】客户输入检查【字母】", "test170040");
    // run("【销售开单－开单】客户输入检查【汉字】", "test170041");
    // run("【销售开单－开单】客户新增按钮", "test170043");
    // run("【销售开单－开单】客户停用后检查刷新情况", "test170044");
    // run("【销售开单－开单】客户输入框清除功能", "test170045");
    // run("【销售开单－开单】结余文本框检查", "test170046");
    // run("【销售开单－开单】未付按钮", "test170047");
    // run("【销售开单－开单】刷卡按钮", "test170048");
    // run("【销售开单－开单】汇款按钮", "test170049");
    // run("【销售开单－开单】收款方式汇总检查-单一", "test170050");
    // run("【销售开单－开单】店员输入检查", "test170052");
    // run("【销售开单－开单】店员输入框清除功能", "test170053");
    // run("【销售开单－开单】核销（客户余款）", "test170054");
    // run("【销售开单－开单】核销（客户欠款）", "test170055");
    // run("【销售开单－开单】客户切换后点核销", "test170056");
    // run("【销售开单－开单】点击开单界面其它按钮后再去点核销按钮", "test170057");
    // run("【销售开单－开单】核销后检查本单已核销", "test170058");
    // run("【销售开单－开单】核销后检查所有已核销", "test170059");
    // run("【销售开单－开单】连续核销后核销界面检查", "test170062");
    // run("【销售开单】客户或供应商信息不允许修改", "test170063");
    // run("【销售开单-开单】检查核销", "test170065");//
    // run("【销售开单-开单】开单模式-快速标记代收", "test170070");
    // run("【销售开单－开单】快速标记代收（代收设置为否）", "test170071");
    // run("【销售开单－开单】款号价格为负数时检查", "test170072");
    // run("【销售开单－开单】客户退货数量限制－填写客户", "test170073");
    // run("【销售开单－开单】客户退货数量－不填客户", "test170075");
    // run("【销售开单－开单】单价小数位精确到元对保存打印的影响", "test170076");
    // run("【销售开单-开单】开单模式-客户折扣", "test170083");
    // run("【销售开单-开单】开单模式-产品折扣", "test170084");
    // run("【销售开单-开单】开单模式-整单折扣", "test170085");
    // run("【销售开单-开单】开单模式-童装模式", "test170087");
    // run("【销售开单-开单】开单模式-代收模式2", "test170090");
    // run("【销售开单－开单】收款方式选择代收", "test170091_170092");
     run("【销售开单－开单】代收模式2", "test170093");
     run("【销售开单－开单】保存代收单后再去修改界面查看代收信息", "test170094");
    // run("【销售开单－开单】整单备注和明细备注", "test170095");
    // run("【销售开单－开单】退货时备注显示", "test170096");
    // run("【销售开单－开单】退货时明细备注框操作", "test170097");
    // run("【销售开单－开单】点击日期控件下面的“货品”字样进行排序", "test170098");//
    // run("【销售开单－开单】款号合并", "test1700101");//
    // run("【销售开单－开单】款号合并（既拿货又退货）", "test1700102");//
    // run("【销售开单-开单】均色均码款号合并", "test1700103");／／
    // run("【销售开单－开单】退货时明细备注框操作", "test1700104");／／
//    run("【销售开单－开单】查看上次成交价", "test1700105");

}
function test170040() {
    tapMenu("销售开单", "开  单+");
    var keys = { "客户" : "ls" };
    var fields = editSalesBillFields(keys);
    // setTFieldsValue(window, fields);

    var ret1 = false;
    var f = new TField("客户", TF_AC, 0, "ls", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("李四  52148899635963", v)) {
            ret = true;
            break;
        }
    }
    logDebug("ret=" + ret);
    return ret;
}

function test170041() {
    tapMenu("销售开单", "开  单+");
    var keys = { "客户" : "李" };
    var fields = editSalesBillFields(keys);
    // setTFieldsValue(window, fields);

    var ret1 = false;
    var f = new TField("客户", TF_AC, 0, "ls", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("李四  52148899635963", v)) {
            ret = true;
            break;
        }
    }
    logDebug("ret=" + ret);
    return ret;
}

function test170043() {
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    var qr = getQR();
    var a = qr.data[0]["名称"];
    if (a == r) {
        var ret = true;
    }
    logDebug("ret" + ret);
    return ret;
}
function test170044() {
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    delay();
    tapButtonAndAlert(window, RETURN);

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    var qr = getQR();
    tapFirstText();
    tapButtonAndAlert("停 用");
    delay();

    tapRefresh();

    tapMenu("销售开单", "开  单+");
    var f = new TField("客户", TF_AC, 0, "anewkh", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        var ret = false;
        if (isEqual(r, v)) {
            ret = true;
            break;
        }
    }
    delay();
    if (ret == false || equal == false) {
        var ret1 = true;
    }
    logDebug("ret1=" + ret1);
    return ret1;
}
function test170045() {
    tapMenu("销售开单", "开  单+");
    var keys = { "客户" : "ls" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    var k0 = getTextFieldValue(window, 0);
    tapButton(window, CLEAR);
    delay();
    var k1 = getTextFieldValue(window, 0);
    if (k0 != null) {
        var ret = true;
    }
    var ret1 = false;
    if (k1 == "") {
        ret1 = true;
    }
    // logDebug("客户＝" + k0 + "客户1＝" + k1);
    logDebug("ret＝" + ret + "ret1＝" + ret1);
    return ret && ret1;
}
function test170046() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : "0" };
    editSalesBillNoColorSize(json);

    var keys = { "客户" : "xjkh" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    var k0 = getTextFieldValue(window, 1);
    if (k0 <= 0) {
        ret = true;
    }
    // logDebug("ret" + ret);
    // return ret;

    tapMenu("销售开单", "开  单+");
    var json1 = { "客户" : "xjkh", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : 100000000 };
    editSalesBillNoColorSize(json);

    var keys1 = { "客户" : "xjkh" };
    var fields1 = editSalesBillFields(keys1);
    setTFieldsValue(window, fields1);
    var k1 = getTextFieldValue(window, 1);
    if (k1 >= 0) {
        ret1 = true;
    }
    // logDebug("ret1" + ret1);
    // return ret1;

    tapMenu("销售开单", "开  单+");
    var json2 = { "客户" : "xjkh", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : 300 };
    editSalesBillNoColorSize(json);

    var keys2 = { "客户" : "xjkh" };
    var fields2 = editSalesBillFields(keys2);
    setTFieldsValue(window, fields2);
    var k2 = getTextFieldValue(window, 1);
    if (k2 == 0) {
        ret2 = true;
    }
    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2);
    return ret && ret1 && ret2;

}
function test170047() {
    tapMenu("销售开单", "开  单+");
    var f0 = new TField("货品", TF_AC, 0, "3035", -1, 0);
    var f3 = new TField("数量", TF, 3, "50");
    var fields = [ f0, f3 ];
    setTFieldsValue(getScrollView(), fields);

    var keys = [ "客户" ];
    var fields = editSalesBillFields(keys);
    changeTFieldValue(fields["客户"], "xjkh", -1, 0);
    setTFieldsValue(window, fields);

    tapButton(window, "未付");
    delay();

    var k2 = getTextFieldValue(window, 2);
    var k7 = getTextFieldValue(window, 7);
    var ret = false;
    if (k2 == "" && k7 == 0) {
        ret = true;
    }
    // logDebug("k2=" + k2 + "k7=" + k7);
    logDebug("ret=" + ret);
    return ret;
}

function test170048() {
    tapMenu("销售开单", "开 单+");
    var json = { "客户" : "xjkh", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "刷卡" : [ 1500, "交" ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["刷卡"];
    if (a == 1500) {
        var ret = true;
    }
    logDebug("ret=" + ret);
    return ret;

}
function test170049() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "汇款" : [ 1500, "农" ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["汇款"];
    if (a == 1500) {
        var ret = true;
    }
    logDebug("ret=" + ret);
    return ret;

}
function test170050() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    delay();
    tapFirstText();

    var k1 = getTextFieldValue(window, 2);
    var f8 = new TField("货品", TF_AC, 8, "3035", -1, 0);
    var f11 = new TField("数量", TF, 11, "5");
    var fields = [ f8, f11 ];
    setTFieldsValue(getScrollView(), fields);

    var k2 = getTextFieldValue(window, 2);
    var ret = false;
    if (k2 == 2500) {
        ret = true;
    }
    // logDebug("k2=" + k2);
    logDebug("ret=" + ret);
    return ret;
}
function test170052() {
    tapMenu("销售开单", "开  单+");

    var ret = false;
    var f = new TField("店员", TF_AC, 5, "000", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("000,总经理", v)) {
            ret = true;
            break;
        }
    }
    logDebug("ret=" + ret);
    return ret;
}
function test170053() {
    tapMenu("销售开单", "开  单+");
    var keys = { "店员" : "000" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    var k0 = getTextFieldValue(window, 4);
    tapButton(window, CLEAR);
    delay();

    var k1 = getTextFieldValue(window, 4);
    if (k0 == "000,总经理") {
        var ret = true;
    }
    var ret1 = false;
    if (k1 == "") {
        ret1 = true;
    }
    // logDebug("客户＝" + k0 + "客户1＝" + k1);
    logDebug("ret＝" + ret + "ret1＝" + ret1);
    return ret && ret1;

}
function test170054() {
    // 核销（客户余款）
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : "1000000" };// "客户"
    // : r,
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 4 ], "特殊货品" : { "抹零" : 100 }, "现金" : "0" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    qr = getQR();
    var ret = isEqual(-100, qr.data[0]["金额"]) && isEqual(0, qr.data[0]["现金"]);
    return ret;
}

function test170055() {
    // 核销（客户欠款）
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh", "核销" : [ 4 ], "特殊货品" : { "抹零" : 100 },
        "现金" : "0" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    qr = getQR();
    var ret = isEqual(-100, qr.data[0]["金额"]) && isEqual(0, qr.data[0]["现金"]);
    return ret;

}
function test170056() {
    tapMenu("销售开单", "开  单+");
    var keys = { "客户" : "xjkh" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    var a = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    if (a = "下级客户1 其他店总欠: 0.0") {
        var ret = true;
    }

    tapButton(window, CLEAR);
    var keys1 = { "客户" : "ls" };
    var fields1 = editSalesBillFields(keys1);
    setTFieldsValue(window, fields1);
    tapButton(window, "核销");
    var b = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    // logDebug("客户＝" + b);
    if (b = "李四 其他店总欠: 0.0") {
        var ret1 = true;
    }
    return ret && ret1;

}
function test170057() {
    tapMenu("销售开单", "开  单+");
    var keys = { "客户" : "xjkh" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o = { "特殊货品" : { "抹零" : 9, "打包费" : 10 } };
    editSalesBillSpecial(o);
    tapButton(window, "核销");
    tapNaviLeftButton();

    var a = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    if (a = "下级客户1 其他店总欠: 0.0") {
        var ret = true;
    }

    var f21 = new TField("货品", TF_AC, 21, "3035", -1, 0);
    var f24 = new TField("数量", TF, 24, "5");
    var fields = [ f21, f24 ];
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, "核销");
    tapNaviLeftButton();

    var b = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    if (b = "下级客户1 其他店总欠: 0.0") {
        var ret1 = true;
    }

    tapMenu("销售开单", "更多.", "查 询");
    var g0 = new TField("款号名称＊", TF, 0, "3035");
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapButton(window, "核销");
    tapNaviLeftButton();
    var c = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    if (c = "下级客户1 其他店总欠: 0.0") {
        var ret2 = true;
    }

    tapMenu("销售开单", "更多.", "查补货");
    tapButton(window, "核销");
    tapNaviLeftButton();
    var d = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    if (d = "下级客户1 其他店总欠: 0.0") {
        var ret3 = true;
    }

    tapMenu("销售开单", "更多.", "查看修改日志");
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapButton(window, "核销");
    tapNaviLeftButton();
    var e = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    if (e = "下级客户1 其他店总欠: 0.0") {
        var ret4 = true;
    }

    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapButton(window, "核销");
    tapNaviLeftButton();
    var f = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    var bt5 = app.navigationBar().leftButton();
    if (bt5 = isUIAButton) {
        var ret5 = true;
    }

    tapButton(window, CLEAR);
    tapButton(window, "核销");
    tapNaviLeftButton();
    var h = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    var bt6 = app.navigationBar().leftButton();
    if (bt6 = isUIAButton) {
        var ret6 = true;
    }

    var keys = { "店员" : "000" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    tapNaviLeftButton();
    var i = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    var bt7 = app.navigationBar().leftButton();
    if (bt7 = isUIAButton) {
        var ret7 = true;
    }

    tapButton(window, CLEAR);
    tapButton(window, "核销");
    tapNaviLeftButton();
    var j = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    var bt8 = app.navigationBar().leftButton();
    if (bt8 = isUIAButton) {
        var ret8 = true;
    }

    var f21 = new TField("货品", TF_AC, 21, "3035", -1, 0);
    var fields = [ f21 ];
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, "核销");
    tapNaviLeftButton();
    var bt9 = app.navigationBar().leftButton();
    if (bt9 = isUIAButton) {
        var ret9 = true;
    }
    logDebug("ret＝" + ret + "ret1＝" + ret1 + "ret2＝" + ret2 + "ret3＝" + ret3
            + "ret4＝" + ret4 + "ret5＝" + ret5 + "ret6＝" + ret6 + "ret7＝" + ret7
            + "ret8＝" + ret8 + "ret9＝" + ret9);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6 && ret7 && ret8
            && ret9;
}

function test170058() {
    // 有余款单客户
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : "1000000" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 3 ],
        "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : "0" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : r };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    delay();
    tapFirstText();

    var keys = { "客户" : r };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    tapNaviRightButton();// 本单已核销

    var qr = getQResult2(getScrollView(1), "日期", "金额");
    var a1 = qr.data[0]["日期"];
    var a3 = qr.data[0]["店员"];
    var a4 = qr.data[0]["数量"];
    var a5 = qr.data[0]["金额"];
    if (a1 == getToday("yy")) {
        var ret1 = true;
    }
    if (a3 == "总经理") {
        var ret2 = true;
    }
    if (a4 == "5") {
        var ret3 = true;
    }
    if (a5 == "1500") {
        var ret4 = true;
    }
    tapNaviLeftButton();
    tapNaviLeftButton();
    // saveAndAlertOk();
    logDebug("ret1=" + ret1 + "ret2=" + ret2 + "ret3=" + ret3 + "ret4=" + ret4);
    return ret1 && ret2 && ret3 && ret4;

}

function test170059() {
    // 有欠款单客户
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : "0" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 3 ],
        "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : "0" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : r };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    delay();
    tapFirstText();

    var keys = { "客户" : r };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    tapNaviRightButton();// 本单已核销
    var qr = getQResult2(getScrollView(1), "日期", "金额");
    var a1 = qr.data[0]["日期"];
    var a3 = qr.data[0]["店员"];
    var a4 = qr.data[0]["数量"];
    var a5 = qr.data[0]["金额"];
    if (a1 == getToday("yy")) {
        var ret1 = true;
    }
    if (a3 == "总经理") {
        var ret3 = true;
    }
    if (a4 == "5") {
        var ret4 = true;
    }
    if (a5 == "1500") {
        var ret5 = true;
    }
    tapNaviLeftButton();
    tapNaviLeftButton();
    // saveAndAlertOk();
    logDebug("ret1=" + ret1 + "ret3=" + ret3 + "ret4=" + ret4 + "ret5=" + ret5);
    return ret1 && ret3 && ret4 && ret5;

}
function test170062() {
    tapMenu("销售开单", "开  单+");
    var keys = { "客户" : "xjkh" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    tapNaviLeftButton();
    var e = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    if (e = "下级客户1 其他店总欠: 0.0") {
        var ret = true;
    }

    var keys = { "客户" : "ls" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    tapNaviLeftButton();
    var a = getStaticTextValue(getScrollView(1), 0);
    tapNaviLeftButton();
    if (a = "李四 其他店总欠: 0.0") {
        var ret1 = true;
    }
    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170063() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : "1500" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    delay();
    tapFirstText();

    var keys = { "客户" : "ls" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    saveAndAlertOk();
    if (isIn(alertMsg, "请仔细核对收款方式和金额,确定保存吗?")) {
        var ret = true;
    }
    // delay();
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "客户或供应商信息不允许修改")) {
        var ret1 = true;
    }
    // logDebug("ret=" + ret);
    return ret && ret1;
    logDebug("ret=" + ret + "ret1=" + ret1);
    // return ret && ret1;
}
function test170065() {
    // 核销欠款，不输入款号
    // tapMenu("销售开单", "开 单+");
    // tapButton(window, "新增+");
    // var r = "anewkh" + getTimestamp(6);
    // var g0 = new TField("名称", TF, 0, r);
    // var fields = [ g0 ];
    // setTFieldsValue(getPopView(), fields);
    // tapButton(getPop(), OK);
    // tapButton(getPop(), "关 闭");
    //
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : r, "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" :
    // "0" };
    // editSalesBillNoColorSize(json);
    //
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : r, "核销" : [ 3 ], "现金" : "0" };
    // saveAndAlertOk();
    // delay();
    // if (isIn(alertMsg, "空单，无法保存")) {
    // var ret = true;
    // }
    // logDebug("ret=" + ret);
    // return ret;

    // 核销欠款，输入款号
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : "0" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 3 ],
        "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : "0" };
    saveAndAlertOk();
    if (isIn(alertMsg, "保存成功")) {
        var ret1 = true;
    }
    logDebug("ret1=" + ret1);
    return ret1;

    // // 核销余款，余款小于货品金额
    // tapMenu("销售开单", "开 单+");
    // tapButton(window, "新增+");
    // var r = "anewkh" + getTimestamp(6);
    // var g0 = new TField("名称", TF, 0, r);
    // var fields = [ g0 ];
    // setTFieldsValue(getPopView(), fields);
    // tapButton(getPop(), OK);
    // tapButton(getPop(), "关 闭");
    //
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : r, "明细" : [ { "货品" : "k300", "数量" : "5" } ],
    // "现金" : "2000" };
    // editSalesBillNoColorSize(json);
    //
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" :r, "明细" : [ { "货品" : "k300", "数量" : "5" } ],
    // "现金" : "0" };

    // tapMenu("销售开单", "按批次查");
    // var ret2 = isEqual(-100, qr.data[0]["金额"]) && isEqual(0,
    // qr.data[0]["现金"]);
    // // return ret2;

    // // 核销余款，余款大于货品金额
    // tapMenu("销售开单", "开 单+");
    // tapButton(window, "新增+");
    // var r = "anewkh" + getTimestamp(6);
    // var g0 = new TField("名称", TF, 0, r);
    // var fields = [ g0 ];
    // setTFieldsValue(getPopView(), fields);
    // tapButton(getPop(), OK);
    // tapButton(getPop(), "关 闭");
    //
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : r, "明细" : [ { "货品" : "k300", "数量" : "5" } ],
    // "现金" : "4000" };
    // editSalesBillNoColorSize(json);
    //
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : r, "明细" : [ { "货品" : "k300", "数量" : "5" } ],
    // "现金" : "0" };
    // saveAndAlertOk();
    // tapMenu("销售开单", "按批次查");
    // var ret3 = isEqual(-100, qr.data[0]["金额"]) && isEqual(0,
    // qr.data[0]["现金"]);
    // // return ret3;

    // // 核销欠款，输入抹零，点未付，保存
    // tapMenu("销售开单", "开 单+");
    // tapButton(window, "新增+");
    // var r = "anewkh" + getTimestamp(6);
    // var g0 = new TField("名称", TF, 0, r);
    // var fields = [ g0 ];
    // setTFieldsValue(getPopView(), fields);
    // tapButton(getPop(), OK);
    // tapButton(getPop(), "关 闭");
    //
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : r, "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" :
    // "0" };
    // editSalesBillNoColorSize(json);
    //
    // var json = { "客户" : r, "核销" : [ 4 ], "特殊货品" : { "抹零" : 100 }, "现金" : "0"
    // };
    // editSalesBillNoColorSize(json);
    // tapMenu("销售开单", "按批次查");
    // qr = getQR();
    // var ret4 = isEqual(-100, qr.data[0]["金额"]) && isEqual(0,
    // qr.data[0]["现金"]);
    // logDebug("ret1=" + ret1 + "ret2=" + ret2 + "ret3=" + ret3 + "ret4=" +
    // ret4);
    // return ret1 && ret2 && ret3 && ret4;
}
function test170070() {
    // 设置开单模式为9-快速标记标记代收的开单模式
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "未付" : "yes", "代收" : "是" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var a = qr.data[0]["代收"]
    var ret = isEqual(1500, qr.data[0]["金额"])
            && isEqual(-1500, qr.data[0]["未结"]);
    if (a == "是") {
        var ret1 = true;
    }
    logDebug("ret=" + ret + "是否代收=" + a);
    return ret && ret1;

}
function test170071() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "未付" : "yes", "代收" : "否" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var a = qr.data[0]["代收"]
    var ret = isEqual(1500, qr.data[0]["金额"])
            && isEqual(-1500, qr.data[0]["未结"]);
    if (a == "否") {
        var ret1 = true;
    }
    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170072() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("单价", TF, 4, "-100");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    var ret = false;
    if (isIn(alertMsg, "请仔细核对收款方式和金额,确定保存吗")) {
        ret = true;
    }

    // delay(3);
    tapButtonAndAlert("none", OK, true);
    var ret1 = false;
    if (isIn(alertMsg, "[第1行] 单价或金额不能为负数")) {
        ret1 = true;
    }
    logDebug("ret" + ret + "ret1" + ret1);

    return ret && ret1;
}
function test170073() {
    // 开启参数 开单保存开启退货数和上次购买数的比对验证
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "-5" } ] };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    if (isIn(alertMsg1, "退货数量高于拿货")) {
        var ret = true;
    }
    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);

    return ret;
}
function test170075() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "明细" : [ { "货品" : "3035", "数量" : "6" }, { "货品" : "3035", "数量" : "-5" } ],
        "明细输入框个数" : 8 };
    delay;
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "保存成功")) {
        var ret = true;
    }
    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);

    return ret;

}
function test170076() {
    // 设置 单价小数位 精确到元
    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "1" } ], "onlytest" : "yes",
        "明细输入框个数" : 8 };
    delay;
    editSalesBillNoColorSize(json);

    var f4 = new TField("单价", TF, 4, "300.188");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    if (isIn(alertMsg, "请仔细核对收款方式和金额,确定保存吗?")) {
        var ret = true;
    }
    tapButtonAndAlert("none", OK, true);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "[第1行] 单价小数位超出了限制")) {
        var ret1 = true;
    }

    tapButtonAndAlert(window, RETURN);
    logDebug(" ret=" + ret + " ret1=" + ret1);
    return ret && ret1;

}
function test170083() {
    // 开启参数，开单模式-客户折扣
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "onlytest" : "yes", "明细输入框个数" : 8 };
    delay;
    editSalesBillNoColorSize(json);

    var k2 = getTextFieldValue(window, 2);
    var k3 = getTextFieldValue(window, 3);
    var ret = false;
    if (k2 == "316" && k3 == "316") {
        ret = true;
    }
    tapButtonAndAlert(window, RETURN);
    logDebug("ret=" + ret);
    return ret;

}
function test170084() {
    // 开启参数，开单模式-产品折扣
    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "8989", "数量" : "1" } ], "onlytest" : "yes",
        "明细输入框个数" : 8 };
    delay;
    editSalesBillNoColorSize(json);

    var k2 = getTextFieldValue(window, 2);
    var k3 = getTextFieldValue(window, 3);
    var ret = false;
    if (k2 == "413" && k3 == "413") {
        ret = true;
    }
    tapButtonAndAlert(window, RETURN);
    logDebug("ret=" + ret);
    return ret;
}
function test170085() {
    // 设置开单模式为整单折扣模式
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "onlytest" : "yes", "明细输入框个数" : 8 };
    delay;
    editSalesBillNoColorSize(json);

    var f10 = new TField("折扣", TF, 10, "0.588");
    var fields = [ f10 ];
    setTFieldsValue(window, fields);

    var k2 = getTextFieldValue(window, 2);
    var k3 = getTextFieldValue(window, 3);
    var ret = false;
    if (k2 == "245" && k3 == "245") {
        ret = true;
    }
    tapButtonAndAlert(window, RETURN);
    logDebug("ret=" + ret);
    return ret;

}
function test170087() {
    // 设置开单模式为童装模式并且批发与零售不分开（本地设置），实行按组开单
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "xxx", "数量" : [ 0, 1 ] } ],
        "明细输入框个数" : 8 };
    editSalesBillColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    qr = getQR();
    var a = qr.data[0]["数量"]
    if (a == "6") {
        var ret = true;
    }
    logDebug("ret=" + ret);
    return ret;

}
function test170090() {
    // 开单模式-代收模式2
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "代收" : { "物流商" : "yt", "运单号" : "1234" } };
    delay;
    editSalesBillNoColorSize(json);

    var money = json["代收"]["代收金额"];
    if (money == "416") {
        var ret = true;
    }

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["代收"]
    if (a == "416") {
        var ret1 = true;
    }
    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170091_170092() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "代收" : { "物流商" : "yt", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    var money = json["代收"]["代收金额"];
    if (money == "416") {
        var ret = true;
    }

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    // fields["客户"].p3={"键盘":"简体拼音", "拼音":["li","si"],"汉字":["李","四"]};
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["代收"]
    if (a == "416") {
        var ret1 = true;
    }
    // logDebug("代收=" +a+"代收金额"+money);
    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;

}
function test170093() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "8989", "数量" : "1" } ]};
    editSalesBillNoColorSize(json);
    
    tapStaticText(window, "代收");
    tapButton(window, "新增+");
    var r = "kd" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("电话", TF, 0, r1);
    var g2 = new TField("地址", TF, 0, r);
    var g3 = new TField("账户", TF, 0, r1);    
    var fields = [ g0,g1,g2,g3 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapNaviRightButton();
    
    var w = json["代收"]["物流商"];
    if (money == r) {
        var ret = true;
    }    

}
function test170094() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "代收" : { "物流商" : "yt", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    tapFirstText(getScrollView(), "序号", 20);

    var money = json["代收"]["代收金额"];
    var wls = json["代收"]["物流商"];
    var ydh = json["代收"]["运单号"];
    var bz = json["代收"]["备注"];
    if (money == "416") {
        var ret = true;
    }
    if (wls == "圆通速递") {
        var ret1 = true;
    }
    if (ydh == "123") {
        var ret2 = true;
    }
    if (bz == "a") {
        var ret3 = true;
    }

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2 + "ret3=" + ret3);
    return ret && ret1 && ret2 && ret3;

}
function test170095() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "8989", "数量" : "1", "备注" : "mxbz" },
                { "货品" : "3035", "数量" : "1", "备注" : "mxbz1" } ], "备注" : "zdbz" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    tapFirstText(getScrollView(), "序号", 20);
    var b1 = getTextFieldValue(window, 10);
    var b6 = getTextFieldValue(getScrollView(), 6);
    var b13 = getTextFieldValue(getScrollView(), 13);
    delay();
    tapButton(window, RETURN);
    if (b1 == "zdbz" && b6 == "mxbz" && b13 == "mxbz1") {
        var ret = true;
    }
    logDebug("整单备注=" + b1 + "明细备注=" + b6 + "明细备注1=" + b13);
    // logDebug("ret=" + ret);
    return ret;
}
function test170096() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "123",
        "明细" : [ { "货品" : "xxx", "数量" : "2" }, { "货品" : "xxx", "数量" : "-1" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "123" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["备注"];
    var ret = false;
    if (a == "(2; -1)") {
        ret = true;
    }
    logDebug("备注=" + a);
    return ret;
}
function test170097() {
    // 款号不合并
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "123",
        "明细" : [ { "货品" : "xxx", "数量" : "2" }, { "货品" : "xxx", "数量" : "-1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapStaticText(getScrollView(), 13);
    // var ret = false;
    var f = new TField("备注", TF_SC, 13, -1);
    var cells = getTableViewCells(getScrollView(), f);
    var ret = true;
    var ret1 = true;
    var ret2 = true;
    var ret3 = true;
    var ret4 = true;
    var ret5 = true;
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isEqual("退货", v)) {
            ret = true;
        }
        if (isEqual("代卖", v)) {
            ret1 = true;
        }
        if (isEqual("次品", v)) {
            ret2 = true;
        }
        if (isEqual("代保管", v)) {
            ret3 = true;
        }
        if (isEqual("换色", v)) {
            ret4 = true;
        }
        if (isEqual("换码", v)) {
            ret5 = true;
        }
    }
    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2 + "ret3=" + ret3
            + "ret4=" + ret4 + "ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;

}
function test170098() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "8989", "数量" : "1" }, { "货品" : "3035", "数量" : "2" },
                { "货品" : "k300", "数量" : "3" }, { "货品" : "k200", "数量" : "4" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret = true;
    ret = ret && sortByTitle("货品");

}
function test1700101() {
    // 颜色尺码模式下，开启款号合并功能：销售开单是否合并重复的款号
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "8989", "数量" : "1" }, { "货品" : "8989", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var a = getTextFieldValue(getScrollView(), 6);
    if (a == "2") {
        ret = true;
    }
    logDebug("ret=" + ret);
    return ret;
}
function test1700102() {
    // 颜色尺码模式下，开启款号合并功能：销售开单是否合并重复的款号（既拿货又退货）
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "8989", "数量" : "2" }, { "货品" : "8989", "数量" : "-1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var a = getTextFieldValue(getScrollView(), 6);
    if (a == "1") {
        ret = true;
    }
    logDebug("ret=" + ret);
    return ret;
}
function test1700103() {
    // 均色均码款号合并

}
function test1700104() {
    // 上次成交价界面显示备注信息

}
function test1700105() {
    // 开启参数 颜色尺码下，开单是否显示上次单价

}
function test1700106() {
    // 不同iPad开单，查看上次成交记录

}
