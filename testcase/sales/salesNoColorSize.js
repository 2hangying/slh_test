// Zhangy <15068165765 at 139.com>  10.23
function testSalesNoColorSizeAll() {
    run("【销售开单－开单】客户输入检查【字母】/客户输入检查【汉字】", "test170040_170041");
    run("【销售开单－开单】客户新增按钮", "test170043");
    run("【销售开单－开单】客户停用后检查刷新情况", "test170044");
    run("【销售开单－开单】客户输入框清除功能", "test170045");
    run("【销售开单－开单】结余文本框检查", "test170046");
    run("【销售开单－开单】未付按钮", "test170047");
    run("【销售开单－开单】刷卡按钮", "test170048");
    run("【销售开单－开单】汇款按钮", "test170049");
    run("【销售开单－开单】收款方式汇总检查-单一", "test170050");
    run("【销售开单－开单】收款方式汇总检查-组合", "test170051");
    run("【销售开单－开单】店员输入检查", "test170052");
    run("【销售开单－开单】店员输入框清除功能", "test170053");
    run("【销售开单－开单】核销（客户余款）", "test170054_1");
    run("【销售开单－开单】核销（客户余款）", "test170054_2");
    run("【销售开单－开单】核销（客户欠款）", "test170055");
    run("【销售开单－开单】客户切换后点核销", "test170056");
    run("【销售开单－开单】点击开单界面其它按钮后再去点核销按钮", "test170057");
    run("【销售开单－开单】核销后检查本单已核销", "test170058");
    run("【销售开单－开单】核销后检查所有已核销", "test170059");
    run("【销售开单－开单】 核销界面第一条记录选择性勾选检查", "test170452");
    run("【销售开单－开单】核销记录很多时底端记录选择[客户trfd]", "test170061");
    run("【销售开单－开单】连续核销后核销界面检查", "test170062");
    run("【销售开单-开单】连续核销+检查本单已核销", "test170475");
    run("【销售开单】客户或供应商信息不允许修改", "test170063");
    run("【销售开单-开单】核销单子排序检查", "test170064");
    run("【销售开单-开单】检查核销", "test170065_1");
    run("【销售开单-开单】检查核销", "test170065_2");
    run("【销售开单-开单】检查核销", "test170065_3");
    run("【销售开单-开单】检查核销", "test170065_4");
    run("【销售开单-开单】检查核销", "test170065_5");
    run("【销售开单－开单】款号价格为负数时检查", "test170072");
    run("【销售开单-开单】开单模式-代收模式2", "test170090");
    run("【销售开单－开单】收款方式选择代收", "test170091");
    run("【销售开单－开单】代收模式2", "test170092");
    run("【销售开单－开单】代收模式2", "test170093");
    run("【销售开单－开单】保存代收单后再去修改界面查看代收信息", "test170094");
    run("【销售开单－开单】整单备注和明细备注", "test170095");
    run("【销售开单－开单】退货时备注显示", "test170096");
    run("【销售开单－开单】退货时明细备注框操作", "test170097");
    run("【销售开单－开单】特殊货品", "test170128");
    run("【销售开单－开单】新增货品", "test170129");
    run("【销售开单－开单】连续新增货品", "test170131");
    run("【销售开单－开单】新增货品后再输入别的款号", "test170132");
    run("【销售开单－开单】开单保存后再增删款号", "test170133");
    run("【销售开单－开单】作废", "test170137");
    run("【销售开单－开单】待作废", "test170138");
    run("【销售开单－开单】复制-粘贴", "test170139");
    run("【销售开单－开单】收款（新增界面）", "test170163");
    run("【销售开单－开单】收款（修改界面）", "test170164");
    run("【销售开单－开单】查看修改日志(修改记录)", "test170166");
    run("【销售开单－开单】查看修改日志（核销记录）", "test170167");
    run("【销售开单－开单】挂单保存", "test170169");
    run("【销售开单－开单】挂单修改界面新增删除操作", "test170170");
    run("【销售开单－开单】挂单转销售单", "test170171");
    run("【销售开单－开单】二次挂单功能检查", "test170174");
    run("【销售开单－开单】对正常销售单执行挂单操作", "test170175");
    run("【销售开单－开单】挂单修改界面修改客户和付款方式", "test170176");
    run("【销售开单－开单】更多-所有挂单 功能检查", "test170177");
    run("【销售开单－开单】设置已配货", "test170180");
    run("【销售开单-开单】客户不允许退货", "test170181");
    run("【销售开单－开单】积分兑换", "test170186");
    run("【销售开单－开单】积分兑换后再次检查剩余积分", "test170187");
    run("【销售开单-开单】积分兑换后的金额在综合收支表和收支流水的正确性和正负值检查", "test170188");
    run("【销售开单－开单】兑换记录", "test170189");
    run("【销售开单－开单】打印小票上积分与往来管理里积分比对", "test170190");
    run("【销售开单】开单提示和标记行的更新 6.58", "test170195");
    run("【销售开单】开单是否门店过滤人员--总经理不受控", "test170239");// 修改为新用例内容
    run("【销售开单】收款操作时如果存在待作废单子,需要提醒", "test170246");
    run("【销售开单－开单】客户新增（不选择适用价格检查）", "test170247");
    run("【销售开单－开单】客户新增（适用价格检查）", "test170248");
    run("【销售开单－核销】物流单核销不能销售单里的修改日志", "test170251");

}
function testSalesNoColorSize001() {
    run("【销售开单-开单】开单模式-快速标记代收", "test170070");
    run("【销售开单－开单】快速标记代收（代收设置为否）", "test170071");
    run("【销售开单－开单】开启退货数验证时提示具体哪个款号的退货数超出", "test170074");
    run("【销售开单－开单】客户退货数量－不填客户", "test170075");
    run("【销售开单－开单】单价小数位精确到元对保存打印的影响", "test170076");
    run("【销售开单-开单】开单模式-客户折扣", "test170083");
    run("【销售开单】开单是否根据客户变化时对已有记录进行价格刷新-销售开单", "test170424");//
    run("【销售开单-开单】开单模式-产品折扣", "test170084");
    run("【销售开单-开单】开单模式-整单折扣", "test170085");
    run("【销售开单-开单】均色均码款号合并", "test170103");
    run("【销售开单－开单】上次成交价界面显示备注信息", "test170104");
    run("【销售开单－开单】使用上次成交价", "test170107");
    run("【销售开单－开单】查看上次成交价", "test170105");//
    run("【销售开单－开单】开单时不允许负库存", "test170116");
    run("【销售开单－开单】库存不足时开单修改界面不能打印", "test170118");
    run("【销售开单－开单】开单时允许负库存", "test170117");
    run("【销售开单－开单】异地发货－－配货员可查看内容", "test170119");
    run("【销售开单－开单】二次挂单功能检查", "test170173");
    run("【销售开单-开单】总计四舍五入", "test170191");
    run("【销售开单】开单后是否显示打印确认窗口-显示", "test170199");
    run("【销售开单】开单后是否显示打印确认窗口-不显示", "test170200");
    run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170240");
    run("【销售开单】开单是否门店过滤人员(指过滤员工号,不是过滤别的门店的客户)", "test170241");
    run("【销售开单】开单货品列表是否显示品牌信息", "test170245");
    run("【销售开单-开单】产品折扣模式下自动取上次折扣值", "test170460");
    run("【销售开单-开单】客户折扣模式下自动取上次折扣值", "test170461");
}
function testSalesNoColorSize002() {
    run("【销售开单-开单】积分跨门店共享", "test170183");
    run("【销售开单-开单】积分是否跨门店共享 －开启", "test170185");
    run("【销售开单-开单】积分是否跨门店共享 －不开启", "test170184");
    run("【销售开单】不同门店不同价格在销售开单和图片选款界面的数值检查", "test170242");//
    run("【销售开单】不同门店不同价格时销售开单-按明细查界面检查差额值", "test170244");
    
    run("【销售开单－开单】开单时不显示当前库存", "test170113");
    run("【销售开单－开单】开单时显示当前库存", "test170112");
    run("【销售开单－开单】开单是否显示所有门店库存", "test170114");
    run("【销售开单－开单】开单是否显示所有门店库存", "test170115");
   
    run("【销售开单－开单】开单的同时订货", "test170125");
}
function setNoColorSize_1Params() {
    var qo, o, ret = true;
    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "默认均色均码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "显示颜色尺码" };
    o = { "新值" : "1", "数值" : [ "默认显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单界面，保存后显示是否打印确认窗口" };
    o = { "新值" : "1", "数值" : [ "默认显示", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));

    qo = { "备注" : "上次单价" };
    o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    
    qo = { "备注" : "是否检查折扣" };
    o = { "新值" : "2", "数值" : [ "折扣无限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    
    qo = { "备注" : "总计是否需要四舍五入" };
    o = { "新值" : "1", "数值" : [ "需要" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var qo, o, ret = true;
    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否允许修改单据日期" };
    o = { "新值" : "0", "数值" : [ "默认不限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "销售开单是否合并重复的款号" };
    o = { "新值" : "0", "数值" : [ "不合并", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单是否门店过滤人员" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "价格模式" };
    o = { "新值" : "0", "数值" : [ "统一的价格体系", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    return ret;
}
function test170040_170041() {
    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : "ls" };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    var qr = getQR();
    var a = qr.data[0]["名称"];

    tapMenu("系统设置", "人员列表");
    var keys = { "工号" : "000", "是否停用" : "否", "姓名" : "总经理", "门店" : "常青店" };
    var fields = querySystemStaffFields(keys);
    query(fields);
    qr = getQR();
    var b = qr.data[0]["姓名"];

    tapMenu("系统设置", "人员列表");
    var keys = { "工号" : "005", "是否停用" : "否", "姓名" : "开单员", "门店" : "常青店" };
    var fields = querySystemStaffFields(keys);
    query(fields);
    qr = getQR();
    var c = qr.data[0]["姓名"];

    var ret = isAnd(isEqual("李四", a), isEqual("总经理", b), isEqual("开单员", c));

    tapMenu("销售开单", "开  单+");
    var ret1 = false;
    var f = new TField("客户", TF_AC, 0, "ls", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("李四 52148899635963", v)) {
            var ret = true;
            break;
        }
    }

    tapButton(window, CLEAR);
    var ret1 = false;
    var o = { "键盘" : "简体拼音", "拼音" : [ "li" ], "汉字" : [ "李" ] };
    var f = new TField("客户", TF_AC, 0, "li", -1, 0, o);
    var cells = getTableViewCells(window, f, o);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isIn(v, "李四")) {
            ret1 = true;
            break;
        }
    }

    tapButton(window, CLEAR);
    var ret2 = true;
    var f = new TField("客户", TF_AC, 0, "000", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("000,总经理", v)) {
            var ret2 = false;
            break;
        }
    }

    tapButton(window, CLEAR);
    var ret3 = true;
    var o = { "键盘" : "简体拼音", "拼音" : [ "kai" ], "汉字" : [ "开" ] };
    var f = new TField("客户", TF_AC, 0, "kai", -1, 0, o);
    var cells = getTableViewCells(window, f, o);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isIn(v, "开单员")) {
            ret3 = false;
            break;
        }
    }
    tapButton(window, CLEAR);

    var g0 = new TField("客户", TF, 0, "开单员");
    var fields = [ g0 ];
    setTFieldsValue(window, fields);

    saveAndAlertOk();
    tapPrompt();

    var ret4 = false;
    if (isIn(alertMsg, "客户或厂商 必须从下拉列表选择，请检查")) {
        ret4 = true;
    }

    tapReturn();

    logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2 + "ret3=" + ret3
            + "ret4=" + ret4);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170043() {
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var ret2 = false;
    var f = new TField("店员", TF_AC, 2, "000", -1);
    var i = f.index, value = f.value, view1 = getPopView();
    i = getTextFieldIndex(view1, i);
    var tf = view1.textFields()[i].textFields()[0];
    setTextFieldValueByKeyboard(tf, value);

    var cells = getTableViews(getPop())[0].cells();
    for (i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var v = cell.name();
        if (isIn(v, "000,总经理")) {
            ret2 = true;
            break;
        }
    }
    tapKeyboardHide();
    tapButton(getPop(), "关 闭");

    tapButton(window, "新增+");
    var g0 = new TField("名称", TF, 0, "李四");
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "名称重复"));
    tapPrompt();

    // 输入厂商，提示名称重复
    var g0 = new TField("名称", TF, 0, "联想");
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    ret = ret && (isIn(alertMsg1, "名称重复"));
    tapPrompt();

    // 输入客户李四手机号，提示名称重复
    var g0 = new TField("名称", TF, 0, "52148899635963");
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    ret = ret && (isIn(alertMsg1, "名称重复"));
    tapPrompt();

    var r = "anewkh" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("手机", TF, 1, r1);
    var g2 = new TField("店员", TF_AC, 2, "000,", -1, 0);
    var g3 = new TField("适用价格", BTN_SC, 0, "零批价", "", -1);
    var g4 = new TField("地址", TF, 4, r);
    var fields = [ g0, g1, g2, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapReturn();

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    tapFirstText();
    var a = getTextFieldValue(getScrollView(), 1);
    var a1 = getTextFieldValue(getScrollView(), 3);
    var a2 = getTextFieldValue(getScrollView(), 7);
    var a3 = getTextFieldValue(getScrollView(), 14);
    var a4 = getTextFieldValue(getScrollView(), 17);
    var ret1 = isAnd(isEqual(r, a), isEqual(r1, a1), isIn(a2, "总经理"), isEqual(
            "零批价", a3), isEqual(r, a4));

    tapReturn();

    logDebug("v=" + v + ", cells=" + cells + ", cell=" + cell);
    return ret && ret1 && ret2;
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
    tapReturn();

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

    tapReturn();

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

    var k1 = getTextFieldValue(window, 0);

    var ret = isAnd(isEqual("李四", k0), isEqual("", k1));

    tapReturn();

    return ret;
}
function test170046() {
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh1" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    // 有欠款的客户
    var json = { "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : "0",
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var keys = { "客户" : r };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var k0 = getTextFieldValue(window, 1);

    var texts = getStaticTexts(window);
    // debugElementTree(window);
    var index = getArrayIndexIn(texts, "欠款");
    var value = getStaticTextValue(window, index);

    var ret = isAnd(isEqual("欠款", value), isEqual("1500", k0));

    tapReturn();

    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh2" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    // 有余款的客户
    var json = { "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : "4000",
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var keys1 = { "客户" : r };
    var fields1 = editSalesBillFields(keys1);
    setTFieldsValue(window, fields1);
    var k1 = getTextFieldValue(window, 1);

    texts = getStaticTexts(window);
    index = getArrayIndexIn(texts, "余款");
    var value1 = getStaticTextValue(window, index);

    var ret1 = isAnd(isEqual("余款", value1), isEqual("2500", k1));

    tapReturn();

    // 无欠款无余款
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh3" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : 1500,
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var keys2 = { "客户" : r };
    var fields2 = editSalesBillFields(keys2);
    setTFieldsValue(window, fields2);

    texts = getStaticTexts(window);
    index = getArrayIndexIn(texts, "余款");
    var value2 = getStaticTextValue(window, index);

    var ret2 = isAnd(isEqual("余款", value2), isEqual("0", getTextFieldValue(
            window, 1)));

    tapReturn();

    logDebug("value=" + value + "value1=" + value1 + "value2=" + value2);
    return ret && ret1 && ret2;
}
function test170047() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "k200", "数量" : "10" } ],
        "未付" : "yes", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var totalMoney = getTextFieldValue(window, 3);

    var ret = isAnd(isEqual("", getTextFieldValue(window, 2)), isEqual(0,
            getTextFieldValue(window, 4)));

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    ret = ret && isEqual(totalMoney, -qr.data[0]["未结"]);

    return ret;
}

function test170048() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var totalMoney = getTextFieldValue(window, 3);
    var ret = isEqual(getTextFieldValue(window, 2),
            getTextFieldValue(window, 3));

    target.frontMostApp().mainWindow().staticTexts()["刷卡"].tap();

    ret = ret && isEqual(totalMoney, getTextFieldValue(window, 7));

    saveAndAlertOk();
    tapPrompt();

    tapReturn();

    // var a=getButton(mainWindow().segmentedControls()[0],"交");

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    ret = ret
            && isAnd(isEqual(totalMoney, qr.data[0]["刷卡"]), isEqual(totalMoney,
                    qr.data[0]["实收"]), isEqual(0, qr.data[0]["未结"]));

    logDebug("ret=" + ret);
    return ret;
}
function test170049() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "6" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var totalMoney = getTextFieldValue(window, 3);
    var ret = isEqual(getTextFieldValue(window, 2),
            getTextFieldValue(window, 3));

    target.frontMostApp().mainWindow().staticTexts()["汇款"].tap();

    ret = ret && isEqual(totalMoney, getTextFieldValue(window, 13));

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    ret = ret
            && isAnd(isEqual(totalMoney, qr.data[0]["汇款"]), isEqual(totalMoney,
                    qr.data[0]["实收"]), isEqual(0, qr.data[0]["未结"]));

    logDebug("ret=" + ret);
    return ret;
}
function test170050() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var totalMoney = getTextFieldValue(window, 2);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual(totalMoney, qr.data[0]["现金"]), isEqual("0",
            qr.data[0]["刷卡"]), isEqual("0", qr.data[0]["汇款"]));

    query();
    tapFirstText();

    var f7 = new TField("货品", TF_AC, 7, "3035", -1, 0);
    var f10 = new TField("数量", TF, 10, "5");
    var fields = [ f7, f10 ];
    setTFieldsValue(getScrollView(), fields);

    var totalMoney1 = getTextFieldValue(window, 2);
    ret = ret
            && isEqual(getTextFieldValue(getScrollView(), 12), sub(totalMoney1,
                    totalMoney));

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    ret = ret
            && isAnd(isEqual(totalMoney1, qr.data[0]["现金"]), isEqual("0",
                    qr.data[0]["刷卡"]), isEqual("0", qr.data[0]["汇款"]));

    logDebug("ret=" + ret);
    return ret;
}
function test170051() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "现金" : "900", "刷卡" : [ 500, "交" ], "汇款" : [ 100, "建" ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();

    var qr = getQR();
    var xj = qr.data[0]["现金"];
    var sk = qr.data[0]["刷卡"];
    var hk = qr.data[0]["汇款"];

    var ret = isAnd(isEqual("900", xj), isEqual("500", sk), isEqual("100", hk));

    query();
    tapFirstText();

    var k1 = getTextFieldValue(window, 2);
    var f8 = new TField("货品", TF_AC, 7, "3035", -1, 0);
    var f11 = new TField("数量", TF, 10, "5");
    var fields = [ f8, f11 ];
    setTFieldsValue(getScrollView(), fields);

    var totalMoney = getTextFieldValue(window, 2);

    var ret1 = isAnd(isEqual(getTextFieldValue(window, 3), getTextFieldValue(
            window, 2)), isEqual("0", getTextFieldValue(window, 7)), isEqual(
            "0", getTextFieldValue(window, 13)));

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    ret = ret
            && isAnd(isEqual(totalMoney, qr.data[0]["现金"]), isEqual("0",
                    qr.data[0]["刷卡"]), isEqual("0", qr.data[0]["汇款"]));

    return ret && ret1;
}
function test170052() {
    tapMenu("系统设置", "人员列表");
    var keys = { "工号" : "2001", "是否停用" : "否", "姓名" : "总经理", "门店" : "常青店" };
    var fields = querySystemStaffFields(keys);
    query(fields);
    var qr = getQR();
    var ret1 = isEqual(" 总经理2001", qr.data[0]["姓名"]);

    tapMenu("销售开单", "开  单+");
    var ret = false;
    var f = new TField("店员", TF_AC, 5, "200", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("2001, 总经理2001", v)) {
            ret = true;
            break;
        }
    }
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var ret2 = true;
    var f = new TField("店员", TF_AC, 5, "l", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // debugElementTree(cell);
        var v = cell.name();
        if (isEqual("李四", v)) {
            ret2 = false;
            break;
        }
    }
    tapReturn();

    return ret && ret1 && ret2;
}
function test170053() {
    tapMenu("销售开单", "开  单+");
    var keys = { "店员" : "000," };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var staffTFindex = getValueFromCacheF1("getStaffTFindex");
    var k0 = getTextFieldValue(window, staffTFindex);
    tapButton(window, 12);
    delay();

    var ret = isAnd(isEqual("000,总经理", k0), isEqual(0, getTextFieldValue(
            window, 4)));

    tapReturn();

    return ret;
}
function test170054_1() {
    // 核销（客户余款）
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : "1600",
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    // 总计金额大于抵扣金额
    var json = { "客户" : r, "核销" : [ 5 ],
        "明细" : [ { "货品" : "k300", "数量" : "4" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var totalMoney = getTextFieldValue(window, 3);
    var dikou = getTextFieldValue(window, 6);

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "余款");
    var index1 = getArrayIndexIn(texts, "抵扣");
    var value = getStaticTextValue(window, index);
    var value1 = getStaticTextValue(window, index1);

    var ret = isAnd(isEqual("余款", value), isEqual("抵扣", value1), isEqual("100",
            getTextFieldValue(window, 1)), isEqual("100", getTextFieldValue(
            window, 6)), isEqual(getTextFieldValue(window, 2), sub(
            getTextFieldValue(window, 12), getTextFieldValue(window, 6))));

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret1 = isAnd(isEqual(add(totalMoney, dikou), qr.data[0]["金额"]),
            isEqual(totalMoney, qr.data[0]["现金"]), isEqual(-dikou,
                    qr.data[0]["还款/抵扣"]));

    return ret && ret1;
}
function test170054_2() {
    // 核销（客户余款）
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : "6000",
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    // 总计金额小于抵扣金额
    var json = { "客户" : r, "核销" : [ 5 ],
        "明细" : [ { "货品" : "k300", "数量" : "2" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var k1 = getTextFieldValue(window, 1);
    var k2 = getTextFieldValue(window, 6);
    var k3 = getTextFieldValue(window, 3);

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "余款");
    var index1 = getArrayIndexIn(texts, "抵扣");
    var value = getStaticTextValue(window, index);
    var value1 = getStaticTextValue(window, index1);

    var ret = isAnd(isEqual("余款", value), isEqual("抵扣", value1), isEqual(
            "4500", k1), isEqual("4500", k2), isEqual("", getTextFieldValue(
            window, 2)), isEqual(sub(getTextFieldValue(window, 12), k1),
            getTextFieldValue(window, 3)));

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var qr = getQR();
    var ret1 = isAnd(isEqual(qr.data[0]["金额"], -qr.data[0]["还款/抵扣"]), isEqual(
            "0", qr.data[0]["现金"]), isEqual(k3, Number(-qr.data[0]["未结"])));

    return ret && ret1;
}
function test170055() {
    // 核销（客户欠款）
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : "0" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "k300", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 10 }, "核销" : [ 5 ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var k1 = getTextFieldValue(window, 1);
    var k2 = getTextFieldValue(window, 6);
    var totalCash = getTextFieldValue(window, 3);
    var money = getTextFieldValue(window, 12);

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "欠款");
    var index1 = getArrayIndexIn(texts, "还款");
    var value = getStaticTextValue(window, index);
    var value1 = getStaticTextValue(window, index1);

    var ret = isAnd(isEqual("欠款", value), isEqual("还款", value1), isEqual(
            "1500", k1), isEqual("1500", k2), isEqual(add(k2, money),
            getTextFieldValue(window, 2)));

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var qr = getQR();
    var ret = isAnd(isEqual(money, qr.data[0]["金额"]), isEqual(totalCash,
            qr.data[0]["现金"]), isEqual(k2, qr.data[0]["还款/抵扣"]));

    return ret;
}
function test170056() {
    tapMenu("销售开单", "开  单+");
    var keys = { "客户" : "xjkh1" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);
    tapButton(window, "核销");
    var a = getStaticTextValue(getScrollView(-1, 0), 0);

    // debugElementTree(window);

    var ret = isEqual("下级客户1 其他店总欠: 0.0", a);

    tapNaviLeftButton();

    tapButton(window, CLEAR);
    var keys1 = { "客户" : "ls" };
    var fields1 = editSalesBillFields(keys1);
    setTFieldsValue(window, fields1);
    tapButton(window, "核销");

    var ret1 = isEqual("李四 其他店总欠: 0.0", getStaticTextValue(
            getScrollView(-1, 0), 0));

    tapNaviLeftButton();
    tapReturn();

    return ret && ret1;
}
function test170057() {
    tapMenu("销售开单", "开  单+");
    var keys = { "客户" : "xjkh1" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    var o = { "特殊货品" : { "抹零" : 9, "打包费" : 10 } };
    editSalesBillSpecial(o);
    tapButton(window, "核销");
    tapNaviLeftButton();

    var a = getStaticTextValue(getScrollView(-1, 0), 0);
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

    var b = getStaticTextValue(getScrollView(-1, 0), 0);
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
    var c = getStaticTextValue(getScrollView(-1, 0), 0);
    tapNaviLeftButton();
    if (c = "下级客户1 其他店总欠: 0.0") {
        var ret2 = true;
    }

    tapMenu("销售开单", "更多.", "查补货");
    tapButton(window, "核销");
    tapNaviLeftButton();
    var d = getStaticTextValue(getScrollView(-1, 0), 0);
    tapNaviLeftButton();
    if (d = "下级客户1 其他店总欠: 0.0") {
        var ret3 = true;
    }

    tapMenu("销售开单", "更多.", "查看修改日志");
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapButton(window, "核销");
    tapNaviLeftButton();
    var e = getStaticTextValue(getScrollView(-1, 0), 0);
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
    var f = getStaticTextValue(getScrollView(-1, 0), 0);
    tapNaviLeftButton();
    var bt5 = app.navigationBar().leftButton();
    if (bt5 = isUIAButton) {
        var ret5 = true;
    }

    tapButton(window, CLEAR);
    tapButton(window, "核销");
    tapNaviLeftButton();
    var h = getStaticTextValue(getScrollView(-1, 0), 0);
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
    var i = getStaticTextValue(getScrollView(-1, 0), 0);
    tapNaviLeftButton();
    var bt7 = app.navigationBar().leftButton();
    if (bt7 = isUIAButton) {
        var ret7 = true;
    }

    tapButton(window, CLEAR);
    tapButton(window, "核销");
    tapNaviLeftButton();
    var j = getStaticTextValue(getScrollView(-1, 0), 0);
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

    tapReturn();

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

    var json = { "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : "1000000" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 5 ],
        "明细" : [ { "货品" : "k300", "数量" : "5" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : r };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    delay();
    tapFirstText();

    tapButton(window, "核销");
    tapNaviRightButton();
    // 本单已核销

    var qr = getQResult2(getScrollView(-1, 0), "日期", "金额");
    var a1 = qr.data[0]["日期"];
    var a3 = qr.data[0]["店员"];
    var a4 = qr.data[0]["数量"];
    var a5 = qr.data[0]["金额"];

    tapNaviLeftButton();
    tapNaviLeftButton();
    tapButtonAndAlert(RETURN, OK);

    var ret1 = isEqual(getToday("yy"), a1);
    var ret2 = isEqual("总经理", a3);
    var ret3 = isEqual("5", a4);
    var ret4 = isEqual("1500", a5);

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

    var json = { "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : "0" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 3 ],
        "明细" : [ { "货品" : "k300", "数量" : "5" } ], "现金" : "0", "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "客户" : r, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    tapButton(app.navigationBar(), "所有已核销");
    // 所有已核销
    var qr = getQResult2(getScrollView(-1, 0), "日期", "金额");
    var a1 = qr.data[0]["日期"];
    var a3 = qr.data[0]["店员"];
    var a4 = qr.data[0]["数量"];
    var a5 = qr.data[0]["金额"];

    var ret5 = isAnd(isEqual(getToday("yy"), a1), isEqual("总经理", a3), isEqual(
            "5", a4), isEqual("1500", a5));

    tapNaviLeftButton();
    tapNaviLeftButton();
    tapButtonAndAlert(RETURN, OK);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : r };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    delay();
    tapFirstText();

    tapButton(window, "核销");
    tapButton(app.navigationBar(), "所有已核销");
    // 所有已核销
    var qr = getQR2(getScrollView(-1, 0), "日期", "金额");
    debugQResult(qr);

    var a1 = qr.data[0]["日期"];
    var a3 = qr.data[0]["店员"];
    var a4 = qr.data[0]["数量"];
    var a5 = qr.data[0]["金额"];

    tapNaviLeftButton();
    tapNaviLeftButton();
    tapButtonAndAlert(RETURN, OK);

    var ret1 = isEqual(getToday("yy"), a1);
    var ret2 = isEqual("总经理", a3);
    var ret3 = isEqual("5", a4);
    var ret4 = isEqual("1500", a5);

    return ret1 && ret3 && ret4 && ret5;
}
function test170452() {
    // 有欠款单客户
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "k300", "数量" : "2" } ], "现金" : "0",
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "客户" : r, "明细" : [ { "货品" : "k300", "数量" : "3" } ],
        "现金" : "0", "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "客户" : r, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    tapButton(window, "核销");
    tapButton(getScrollView(1, 0), 5);
    tapButton(getScrollView(1, 0), 7);
    app.navigationBar().buttons()["确 认"].tap();
    delay(2);

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "欠款");
    var index1 = getArrayIndexIn(texts, "还款");
    var value = getStaticTextValue(window, index);
    var value1 = getStaticTextValue(window, index1);

    var totalMoney = getTextFieldValue(window, 12);

    var ret = isAnd(isEqual("欠款", value), isEqual("还款", value1), isEqual(
            "1500", getTextFieldValue(window, 1)), isEqual("1500",
            getTextFieldValue(window, 6)));

    var json = { "客户" : r, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    tapButton(window, "核销");

    tapButton(getScrollView(1, 0), 7);
    tapButton(getScrollView(1, 0), 5);
    app.navigationBar().buttons()["确 认"].tap();
    delay(2);

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "欠款");
    var index1 = getArrayIndexIn(texts, "还款");
    var value = getStaticTextValue(window, index);
    var value1 = getStaticTextValue(window, index1);

    var totalMoney = getTextFieldValue(window, 12);

    var ret1 = isAnd(isEqual("欠款", value), isEqual("还款", value1), isEqual(
            "1500", getTextFieldValue(window, 1)), isEqual("1500",
            getTextFieldValue(window, 6)));

    tapButton(window, "核销");
    tapButton(getScrollView(1, 0), 5);
    tapButton(getScrollView(1, 0), 7);

    tapButton(getScrollView(1, 0), 5);
    tapButton(getScrollView(1, 0), 7);
    app.navigationBar().buttons()["确 认"].tap();

    var ret2 = isAnd(isEqual("欠款", value), isEqual("还款", value1), isEqual(
            "1500", getTextFieldValue(window, 1)), isEqual("0",
            getTextFieldValue(window, 6)));

    tapReturn();

    return ret && ret1 && ret2;
}
function test170061() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    var qr = getQRverify(getStaticTexts(getScrollView(-1, 0)), "门店", 10);
    var len = qr.data.length;
    for (var i = len; i > len - 3; i--) {
        var index = 4 + 2 * i - 1;
        var view1 = getScrollView(-1, 0);
        tapButtonScroll(view1, index);
    }

    app.navigationBar().buttons()["确 认"].tap();
    delay(2);

    // var texts = getStaticTexts(window);
    // var index = getArrayIndexIn(texts, "余款");
    // var index1 = getArrayIndexIn(texts, "还款");
    // var value = getStaticTextValue(window, index);
    // var value1 = getStaticTextValue(window, index1);

    var k6 = getTextFieldValue(window, 6);

    var ret = isAnd(isEqual(getTextFieldValue(window, 2), getTextFieldValue(
            window, 6)), isEqual(getTextFieldValue(window, 2),
            getTextFieldValue(window, 3)));

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    ret = ret && isEqual(k6, qr.data[0]["还款/抵扣"]);

    return ret;
}
function test170062() {
    tapMenu("销售开单", "开  单+");
    var keys = { "客户" : "xjkh1" };
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
    tapReturn();

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170475() {
    // 有欠款单客户
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "k300", "数量" : "2" } ], "现金" : "0",
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "客户" : r, "核销" : "[5]", "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "客户" : r, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    tapButton(app.navigationBar(), "本单已核销");

    // 本单已核销
    var qr = getQR2(getScrollView(-1, 0), "日期", "金额");
    var ret = isEqual(0, qr.data.length);

    tapNaviLeftButton();
    tapNaviLeftButton();
    tapReturn();

    return ret;
}
function test170063() {
    // tapMenu("销售开单", "开 单+");
    // var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
    // "现金" : "1500" };
    // editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh1" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    delay();
    tapFirstText();

    var keys = { "客户" : "ls" };
    var fields = editSalesBillFields(keys);
    setTFieldsValue(window, fields);

    target.frontMostApp().alert().buttons()["保留当前"].tap();
    // tapAlertButton();
    // "保留当前"

    delay();
    saveAndAlertOk();
    tapPrompt();

    var ret = false;
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "客户或供应商信息不允许修改")) {
        ret = true;
    }
    tapButton(window, CLEAR);

    saveAndAlertOk();
    tapPrompt();

    var ret1 = false;
    tapButtonAndAlert("none", OK, true);
    if (isIn(alertMsg, "客户或供应商信息不允许修改")) {
        ret1 = true;
    }

    tapReturn();

    // logDebug("ret=" + ret);
    return ret && ret1;
    logDebug("ret=" + ret + "ret1=" + ret1);
    // return ret && ret1;
}
function test170064() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    var qr = test170064getQR();
    var ret = test170064Field("门店");
    ret = ret && test170064Field("客户");
    ret = ret && test170064Field("批次", IS_NUM);
    ret = ret && test170064Field("日期", IS_DATE2);
    ret = ret && test170064Field("店员");
    ret = ret && test170064Field("总金额", IS_NUM);
    ret = ret && test170064Field("未结金额", IS_NUM);
    ret = ret && test170064Field("备注");

    tapNaviLeftButton();
    tapReturn();

    return ret;
}
function test170065_1() {
    // 核销欠款，不输入款号
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "3035", "数量" : "4" } ], "未付" : "yes" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 5 ], "未付" : "yes" };
    saveAndAlertOk();
    tapPrompt();
    delay();

    if (isIn(alertMsg, "空单，无法保存")) {
        var ret = true;
    }

    tapReturn();

    logDebug("ret=" + ret);
    return ret;
}
function test170065_2() {
    // 核销欠款，输入款号
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "3035", "数量" : "5" } ], "未付" : "yes" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : r,
        "明细" : [ { "货品" : "3035", "数量" : "2" }, { "货品" : "k300", "数量" : "11" } ],
        "核销" : [ 5 ], "未付" : "yes" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : r };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();
    var ret = isAnd(isIn(getTextFieldValue(getScrollView(), 0), "3035"),
            isEqual("2", getTextFieldValue(getScrollView(), 3)), isIn(
                    getTextFieldValue(getScrollView(), 7), "k300"), isEqual(
                    "11", getTextFieldValue(getScrollView(), 10)));

    tapReturn();

    logDebug("ret=" + ret);
    return ret;
}
function test170065_3() {
    // 核销余款，余款小于货品金额
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "3035", "数量" : "2" } ], "现金" : "1000" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "6" } ],
        "未付" : "yes", "核销" : [ 5 ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("1200", qr.data[0]["金额"]), isEqual("0",
            qr.data[0]["现金"]), isEqual("-600", qr.data[0]["未结"]));

    return ret;
}
function test170065_4() {
    // 核销余款，余款大于货品金额
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "3035", "数量" : "3" } ], "现金" : "4000" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "5" } ],
        "未付" : "yes", "核销" : [ 5 ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("1000", qr.data[0]["金额"]), isEqual("0",
            qr.data[0]["现金"]), isEqual("2400", qr.data[0]["未结"]));

    return ret;
}
function test170065_5() {
    // 核销欠款，输入抹零，点未付，保存
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var fields = [ g0 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "明细" : [ { "货品" : "3035", "数量" : "9" } ], "未付" : "yes" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "核销" : [ 5 ], "特殊货品" : { "抹零" : 100 }, "未付" : "yes" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret = isAnd(isEqual("-100", qr.data[0]["金额"]), isEqual(0,
            qr.data[0]["现金"]), isEqual("-1700", qr.data[0]["未结"]));

    return ret;
}
function test170395_1() {
    // 设置不允许跨门店核销
    var qo, o, ret = true;
    qo = { "备注" : "跨门店核销" };
    o = { "新值" : "0", "数值" : [ "默认不允许" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    var qr = getQRverify(getStaticTexts(getScrollView(-1, 0)), "门店", 10);
    var len = qr.data.length;
    var ret = true;
    for (var i = len - 1; i >= 0; i--) {
        var s = qr.data[i]["门店"];
        if (isEqual("仓库店", s) || isEqual("中洲店", s)) {
            ret = false;
            break;
        }
    }
    app.navigationBar().buttons()["确 认"].tap();
    delay(2);
    tapReturn();

    logDebug("ret=" + ret + "s=" + s);
    return ret;
}
function test170395_2() {
    // 设置允许跨门店核销，需要准备跨门店核销的数据存在
    var qo, o, ret = true;
    qo = { "备注" : "跨门店核销" };
    o = { "新值" : "1", "数值" : [ "允许跨门核销" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    var qr = getQRverify(getStaticTexts(getScrollView(-1, 0)), "门店", 10);
    var len = qr.data.length;
    var ret = false;
    for (var i = len - 1; i >= 0; i--) {
        var s = qr.data[i]["门店"];
        if (isEqual("仓库店", s) || isEqual("中洲店", s)) {
            ret = true;
            break;
        }
    }
    app.navigationBar().buttons()["确 认"].tap();
    delay(2);
    tapReturn();

    logDebug("ret=" + ret + " s=" + s);
    return ret;
}
function test170070() {
    // 设置开单模式为9-快速标记标记代收的开单模式
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "9", "数值" : [ "快速标记代收的开单模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "k300", "数量" : "5" }, { "货品" : "3035", "数量" : "0" } ],
        "特殊货品" : { "抹零" : 100 }, "未付" : "yes", "代收" : "是" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();

    var ret = isAnd(isEqual(1400, qr.data[0]["金额"]), isEqual(-1400,
            qr.data[0]["未结"]), isEqual("是", qr.data[0]["代收"]));

    return ret;
}
function test170071() {
//    var qo, o, ret = true;
//    qo = { "备注" : "开单模式" };
//    o = { "新值" : "9", "数值" : [ "快速标记代收的开单模式", "in" ] };
//    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
        "未付" : "yes", "代收" : "否" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "xjkh1" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();

    var ret = isAnd(isEqual(1500, qr.data[0]["金额"]), isEqual(-1500,
            qr.data[0]["未结"]), isEqual("否", qr.data[0]["代收"]));

    return ret;
}
function test170072() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xjkh1", "明细" : [ { "货品" : "k300", "数量" : "5" } ],
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
    tapButtonAndAlert("none", OK, true);
    var ret1 = false;
    if (isIn(alertMsg, "[第1行] 单价或金额不能为负数")) {
        ret1 = true;
    }
    tapReturn();

    logDebug("ret" + ret + "ret1" + ret1);

    return ret && ret1;
}
function test170074() {
    // 开启参数 开单保存开启退货数和上次购买数的比对验证,默认是开启的
    var qo, o, ret = true;
    qo = { "备注" : "退货数" };
    o = { "新值" : "1", "数值" : [ "1,开启,会减慢开单速度", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    
    qo = { "备注" : "开单模式" };
    o = { "新值" : "2", "数值" : [ "现金+刷卡+代收+汇款", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "hh", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "不返回" : "yes" };
    editSalesBillNoColorSize(json);

    var json = { "客户" : "hh", "明细" : [ { "货品" : "3035", "数量" : "-50" } ] };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var ret = false;
    var alertMsg1 = getArray1(alertMsgs, -2);
    if (isIn(alertMsg1, "[款号【3035,jkk,均色,均码】退货数量高于拿货总数量，请核对] ")) {
        ret = true;
    }
    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);

    return ret;
}
function test170075() {
    // 开启参数 开单保存开启退货数和上次购买数的比对验证,默认是开启的
//    var qo, o, ret = true;
//    qo = { "备注" : "退货数" };
//    o = { "新值" : "1", "数值" : [ "1,开启,会减慢开单速度", "in" ] };
//    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "明细" : [ { "货品" : "3035", "数量" : "6" }, { "货品" : "3035", "数量" : "-5" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapPrompt();
    delay();

    debugArray(alertMsgs);
    var ret = false;
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "保存成功")) {
        ret = true;
    }
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();

    var ret1 = isAnd(isEqual(200, qr.data[0]["金额"]), isEqual("(6; -5)",
            qr.data[0]["备注"]));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret && ret1;
}
function test170076() {
    // 设置 单价小数位 精确到元
    var qo, o, ret = true;
    qo = { "备注" : "单价小数位" };
    o = { "新值" : "0", "数值" : [ "货品单价精确到元", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "1" } ], "onlytest" : "yes",
        "明细输入框个数" : 8 };
    editSalesBillNoColorSize(json);

    var f4 = new TField("单价", TF, 4, "300.188");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();

    var ret, ret1 = false;
    if (isIn(alertMsg, "请仔细核对收款方式和金额,确定保存吗?")) {
        ret = true;
    }
    tapButtonAndAlert("none", OK, true);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "[第1行] 单价小数位超出了限制")) {
        ret1 = true;
    }

    tapReturn();

    logDebug(" ret=" + ret + " ret1=" + ret1);
    return ret && ret1;
}
function test170077_1() {
    // 1，设置 单价小数位 精确到厘
    var qo, o, ret = true;
    qo = { "备注" : "单价小数位" };
    o = { "新值" : "3", "数值" : [ "货品单价精确到厘", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : "ls" };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    var qr = getQR();
    var ret = isEqual("李四", qr.data[0]["名称"]);

    tapFirstText();
    var f18 = new TField("拿货折扣", TF, 18, "0.688");
    var fields = [ f18 ];
    setTFieldsValue(getScrollView(), fields);

    tapButton(window, "修改保存");
    query(qFields);
    tapFirstText();
    var ret1 = isEqual("0.688", getTextFieldValue(getScrollView(), 18));
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret2 = isEqual(0.688, getTextFieldValue(window, 10));

    saveAndAlertOk();
    tapPrompt();

    var ret3 = false;
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "保存成功")) {
        ret3 = true;
    }
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret4 = isAnd(isEqual("124", qr.data[0]["金额"]), isEqual("124",
            qr.data[0]["现金"]), isEqual("0", qr.data[0]["未结"]));

    logDebug("alertMsg1=" + alertMsg1);
    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170077_2() {
    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret = isEqual(0.688, getTextFieldValue(window, 10));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["发货状态"];
    var ret1 = isEqual("未发货", a);

    tapFirstText();
    // var texts = getStaticTexts(window);
    // var index = getArrayIndexIn(texts, "折扣");

    var ret2 = isEqual(0.688, getTextFieldValue(window, 11));

    var f3 = new TField("数量", TF, 5, "3");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr1 = getQR();
    var b = qr1.data[0]["发货状态"];
    var ret3 = isEqual("部分发货", b);

    return ret && ret1 && ret2 && ret3;
}
function test170078() {
    // 1，设置 单价小数位 精确到厘 2，整单折扣单开单模式
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "7", "数值" : [ "整单折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "单价小数位" };
    o = { "新值" : "3", "数值" : [ "货品单价精确到厘", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes", "明细输入框个数" : 8 };
    editSalesBillNoColorSize(json);

    var f10 = new TField("折扣", TF, 10, "0.588");
    var fields = [ f10 ];
    setTFieldsValue(window, fields);

    var k2 = getTextFieldValue(window, 2);
    var k3 = getTextFieldValue(window, 3);
    var ret = isAnd(isEqual("106", k2), isEqual("106", k3));

    saveAndAlertOk();
    tapPrompt();

    var ret1 = false;
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "保存成功")) {
        ret1 = true;
    }
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret2 = isAnd(isEqual("106", qr.data[0]["金额"]), isEqual("106",
            qr.data[0]["现金"]), isEqual("0", qr.data[0]["未结"]));

    tapFirstText();
    var ret = isEqual("0.588", getTextFieldValue(window, 10));

    tapReturn();

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret && ret1 && ret2;
}
function test170497() {
    // 1，设置 单价小数位 精确到厘 2，整单折扣单开单模式
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "7", "数值" : [ "整单折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "单价小数位" };
    o = { "新值" : "3", "数值" : [ "货品单价精确到厘", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = getTimestamp(6) + "newkehu";
    var keys = { "名称" : r, "适用价格" : "零批价", "拿货折扣" : "0.688" };
    addCustomer(keys);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "k200", "数量" : "5" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret = isEqual("0.688", getTextFieldValue(window, 10));

    var k2 = getTextFieldValue(window, 2);
    var k3 = getTextFieldValue(window, 3);
    ret = ret && isAnd(isEqual("585", k2), isEqual("585", k3));

    saveAndAlertOk();
    tapPrompt();

    var ret1 = false;
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "保存成功")) {
        ret1 = true;
    }
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret2 = isAnd(isEqual("585", qr.data[0]["金额"]), isEqual("585",
            qr.data[0]["现金"]), isEqual("0", qr.data[0]["未结"]));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret && ret1 && ret2;
}
function test170083() {
    // 开启参数，开单模式-客户折扣
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = getTimestamp(6) + "newkehu";
    var keys = { "名称" : r, "适用价格" : "零批价", "拿货折扣" : "0.8" };
    addCustomer(keys);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret1 = isEqual(0.8, getTextFieldValue(getScrollView(), 5));

    var k2 = getTextFieldValue(window, 2);

    saveAndAlertOk();
    tapPrompt();

    var ret2 = false;
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "保存成功")) {
        ret2 = true;
    }
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();

    var ret3 = isAnd(isEqual(k2, qr.data[0]["金额"]),
            isEqual(r, qr.data[0]["客户"]), isEqual("0", qr.data[0]["未结"]));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret4 = isEqual(0.8, getTextFieldValue(getScrollView(), 5));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();

    var ret5 = isEqual(0.8, getTextFieldValue(getScrollView(), 7));

    var f3 = new TField("数量", TF, 5, "3");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr1 = getQR();
    var b = qr1.data[0]["发货状态"];
    var ret6 = isEqual("部分发货", b);

    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6;
}
function test170084() {
    // 开启参数，开单模式-产品折扣
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "产品折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = getTimestamp(6) + "newkh";
    var keys = { "款号" : r, "名称" : r, "进货价" : "100", "产品折扣" : 0.788 };
    addGoods(keys);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : r, "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret1 = isEqual(0.788, getTextFieldValue(getScrollView(), 5));

    var k3 = getTextFieldValue(window, 3);

    saveAndAlertOk();
    tapPrompt();

    var ret2 = false;
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "保存成功")) {
        ret2 = true;
    }
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();

    var ret3 = isAnd(isEqual(k3, qr.data[0]["金额"]), isEqual("李四",
            qr.data[0]["客户"]), isEqual("0", qr.data[0]["未结"]));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : r, "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret4 = isEqual(0.788, getTextFieldValue(getScrollView(), 5));

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();

    var ret5 = isEqual(0.788, getTextFieldValue(getScrollView(), 7));

    var f3 = new TField("数量", TF, 5, "3");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr1 = getQR();
    var b = qr1.data[0]["发货状态"];
    var ret6 = isEqual("部分发货", b);

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2 + ", ret3="
            + ret3 + ", ret4=" + ret4 + ", ret5=" + ret5 + ", ret6=" + ret6);

    return ret && ret1 && ret2 && ret3 && ret4 && ret5 && ret6;
}
function test170085() {
    // 设置开单模式为整单折扣模式
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "7", "数值" : [ "整单折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = getTimestamp(6) + "newkehu";
    var keys = { "名称" : r, "适用价格" : "零批价" };
    addCustomer(keys);

    tapMenu("货品管理", "货品查询");
    var keys = { "款号名称" : "8989" };
    var fields = queryGoodsFields(keys);
    query(fields);
    tapFirstText();

    var lprice = getTextFieldValue(getScrollView(), 9);

    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "8989", "数量" : "12" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f10 = new TField("折扣", TF, 10, "0.588");
    var fields = [ f10 ];
    setTFieldsValue(window, fields);

    var num = getTextFieldValue(getScrollView(), 3);
    var k2 = getTextFieldValue(window, 2);
    var k3 = getTextFieldValue(window, 3);
    var ret1 = isAnd(isEqual(k3, k2), isAqualNum(lprice * num * 0.588, k2, 0.5));

    saveAndAlertOk();
    tapPrompt();
    delay();

    var ret2 = false;
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "保存成功")) {
        ret2 = true;
    }
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();

    var ret3 = isAnd(isEqual(k2, qr.data[0]["金额"]),
            isEqual(r, qr.data[0]["客户"]), isEqual("0", qr.data[0]["未结"]));

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : r, "明细" : [ { "货品" : "8989", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f10 = new TField("折扣", TF, 10, "0.688");
    var fields = [ f10 ];
    setTFieldsValue(window, fields);

    var zkou = getTextFieldValue(window, 10);
    var num = getTextFieldValue(getScrollView(), 3);
    var k2 = getTextFieldValue(window, 2);
    var k3 = getTextFieldValue(window, 3);
    var ret1 = isAnd(isEqual(k3, k2), isAqualNum(lprice * num * zkou, k2, 0.5));

    saveAndAlertOk();
    tapPrompt();
    delay();

    var ret2 = false;
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "保存成功")) {
        ret2 = true;
    }
    tapReturn();

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "未发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);

    tapFirstText();

    var ret3 = isEqual(0.688, getTextFieldValue(window, 11));

    var f3 = new TField("数量", TF, 5, "3");
    var fields = [ f3 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    tapReturn();

    tapMenu("销售开单", "按订货开单");
    var keys = { "发货状态" : "部分发货" };
    var fields = salesBillOrderFields(keys);
    query(fields);
    var qr1 = getQR();
    var ret4 = isAnd(isEqual("部分发货", qr1.data[0]["发货状态"]), isEqual(10,
            qr1.data[0]["订货数"]), isEqual(3, qr1.data[0]["已发数"]), isEqual(r,
            qr1.data[0]["客户"]));

    return ret && ret1 && ret2 && ret3 && ret4;
}
function test170090() {
    // 开单模式-代收模式2
     var qo, o, ret = true;
     qo = { "备注" : "开单模式" };
     o = { "新值" : "2", "数值" : [ "代收", "in" ] };
     ret = isAnd(ret, setGlobalParam(qo, o));
    
     qo = { "备注" : "上次单价" };
     o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
     ret = isAnd(ret, setGlobalParam(qo, o));
    
     qo = { "备注" : "成交价" };
     o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
     ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "代收" : { "物流商" : "yt", "运单号" : "1234" } };
    delay();
    editSalesBillNoColorSize(json);

    var money = json["代收"]["代收金额"];
    var ret = isEqual("416", money);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["代收"];
    var ret1 = isEqual("416", a);

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170091() {
    // var qo, o, ret = true;
    // qo = { "备注" : "开单模式" };
    // o = { "新值" : "2", "数值" : [ "代收", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "代收" : { "物流商" : "yt", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    var money = json["代收"]["代收金额"];
    var ret = isEqual("416", money);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    // fields["客户"].p3={"键盘":"简体拼音", "拼音":["li","si"],"汉字":["李","四"]};
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["代收"]
    var ret1 = isEqual("416", a);
    // logDebug("代收=" +a+"代收金额"+money);
    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170092() {
    // var qo, o, ret = true;
    // qo = { "备注" : "开单模式" };
    // o = { "新值" : "2", "数值" : [ "代收", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "8989", "数量" : "1" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var money = getTextFieldValue(window, 3);

    tapStaticText(window, "代收");
    debugElementTree(window);

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "物流商*");
    var index1 = getArrayIndexIn(texts, "运单号");
    var index2 = getArrayIndexIn(texts, "备注");
    var index3 = getArrayIndexIn(texts, "代收金额*");
    var index4 = getArrayIndexIn(texts, "应付金额");
    var value = getStaticTextValue(window, index);
    var value1 = getStaticTextValue(window, index1);
    var value2 = getStaticTextValue(window, index2);
    var value3 = getStaticTextValue(window, index3);
    var value4 = getStaticTextValue(window, index4);

    var ret = isAnd(isEqual("物流商*", value), isEqual("运单号", value1), isEqual(
            "备注", value2), isEqual("代收金额*", value3), isEqual(money,
            getTextFieldValue(window, 19)),
            isEqual("应付金额     " + money, value4));

    var ret1 = false;
    var bt = app.mainWindow().buttons()["新增"];
    if (bt = isUIAButton) {
        ret1 = true;
    }

    var f0 = new TField("物流商*", TF, 16, "天天物流");
    var f1 = new TField("运单号", TF, 17, "15068165766");
    var f2 = new TField("备注", TF, 18, "界面检查");
    var fields = [ f0, f1, f2 ];
    setTFieldsValue(window, fields);
    tapNaviRightButton();

    saveAndAlertOk();
    tapPrompt();

    var ret2 = false;
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "保存成功")) {
        ret2 = true;
    }
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret3 = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual(money,
            qr.data[0]["金额"]), isEqual(money, qr.data[0]["代收"]), isEqual(
            getToday(""), qr.data[0]["日期"]));

    logDebug("ret" + ret + ",ret1=" + ret1);
    return ret && ret1 && ret2 && ret3;
}
function test170093() {
    // var qo, o, ret = true;
    // qo = { "备注" : "开单模式" };
    // o = { "新值" : "2", "数值" : [ "代收", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "8989", "数量" : "1" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var k3 = getTextFieldValue(window, 3);
    tapStaticText(window, "代收");
    tapButton(window, "新增");

    var g0 = new TField("名称", TF, 0, "天天物流");
    var fields = [ g0 ];
    setTFieldsValue(getPopOrView(), fields);
    tapButton(getPop(), OK);

    var ret1 = false;
    var alertMsg1 = getArray1(alertMsgs, -1);
    if (isIn(alertMsg1, "相同名称已存在")) {
        ret1 = true;
    }
    tapPrompt();

    var r = "kd" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("电话", TF, 1, r1);
    var g2 = new TField("地址", TF, 2, r);
    var g3 = new TField("账户", TF, 3, r1);
    var fields = [ g0, g1, g2, g3 ];
    setTFieldsValue(getPopOrView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var a = getTextFieldValue(window, -4);
    var ret = isEqual(r, a);

    delay();
    tapNaviRightButton();
    // logDebug("物流商=" + a);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();
    tapStaticText(window, "代收");
    var w = getTextFieldValue(window, 16);
    var y = getTextFieldValue(window, 17);
    var b = getTextFieldValue(window, 18);
    var m = getTextFieldValue(window, 19);

    var ret2 = isAnd(isEqual(k3, m), isEqual(r, w));

    tapNaviLeftButton();
    tapReturn();

    tapMenu("往来管理", "更多.", "物流商查询");
    var keys = [ "名称" ];
    var fields = queryCustomerLogisticsFields(keys);
    changeTFieldValue(fields["名称"], r);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["名称"];
    var ret3 = isEqual(r, a);

    tapFirstText();
    var ret4 = isAnd(isEqual(r, getTextFieldValue(getScrollView(), 0)),
            isEqual("", getTextFieldValue(getScrollView(), 1)), isEqual("",
                    getTextFieldValue(getScrollView(), 2)), isEqual(r1,
                    getTextFieldValue(getScrollView(), 3)), isEqual("",
                    getTextFieldValue(getScrollView(), 4)), isEqual(r,
                    getTextFieldValue(getScrollView(), 5)), isEqual(r1,
                    getTextFieldValue(getScrollView(), 6)), isEqual("",
                    getTextFieldValue(getScrollView(), 7)), isEqual("",
                    getTextFieldValue(getScrollView(), 8)));
    tapReturn();

    logDebug("ret=" + ret + ", ret1=" + ret1 + ", ret2=" + ret2);
    return ret && ret1 && ret2 && ret3 && ret4;

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

    tapFirstText();
    tapStaticText(window, "代收");
    var w = getTextFieldValue(window, 16);
    var y = getTextFieldValue(window, 17);
    var b = getTextFieldValue(window, 18);
    var m = getTextFieldValue(window, 19);

    var ret = isAnd(isEqual(m, money), isEqual(w, wls), isEqual(y, ydh),
            isEqual(b, bz));

    tapNaviLeftButton();
    tapReturn();

    return ret;
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
    tapFirstText();
    var b1 = getTextFieldValue(window, 10);
    var b6 = getTextFieldValue(getScrollView(), 6);
    var b13 = getTextFieldValue(getScrollView(), 13);
    delay();
    tapButton(window, RETURN);
    var ret = isAnd(isEqual("zdbz", b1), isEqual("mxbz", b6), isEqual("mxbz1",
            b13), isEqual("zdbz", qr.data[0]["备注"]));

    tapMenu("销售开单", "按明细查");
    query();
    qr = getQR();
    var ret1 = isAnd(isEqual("mxbz1", qr.data[0]["备注"]), isEqual("mxbz",
            qr.data[1]["备注"]));

    logDebug("整单备注=" + b1 + "明细备注=" + b6 + "明细备注1=" + b13);
    // logDebug("ret=" + ret);
    return ret && ret1;
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

    var ret = isEqual("(2; -1)", a);

    logDebug("备注=" + a);
    return ret;
}
function test170097() {
    // 款号不合并
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "123",
        "明细" : [ { "货品" : "3035", "数量" : "2", "备注" : "mxbz" },
                { "货品" : "3035", "数量" : "-1" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    // debugElementTree(window);

    target.frontMostApp().mainWindow().scrollViews()[0].textFields()[13]
            .textFields()[0].tap();
    // tapStaticText(getScrollView(), 13);
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
    target.frontMostApp().mainWindow().popover().dismiss();
    tapButtonAndAlert(RETURN, OK);

    logDebug("cells=" + cells + "ret1=" + "ret=" + ret + "ret1=" + ret1
            + "ret2=" + ret2 + "ret3=" + ret3 + "ret4=" + ret4 + "ret5=" + ret5);
    return ret && ret1 && ret2 && ret3 && ret4 && ret5;
}
function test170101() {
    // 颜色尺码模式下，开启款号合并功能：销售开单是否合并重复的款号
    var qo, o, ret = true;
    qo = { "备注" : "销售开单是否合并重复的款号" };
    o = { "新值" : "1", "数值" : [ "默认合并", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "x001", "数量" : [ 2 ] },
                { "货品" : "x001", "数量" : [ 1 ] } ], "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var a = getTextFieldValue(getScrollView(), 3);

    var ret = isEqual("2", a);
    delay();

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var sl = qr.data[0]["数量"];

    tapFirstText();
    var a1 = getTextFieldValue(getScrollView(), 3);
    tapReturn();

    var ret1 = isAnd(isEqual(2, a1), isEqual(3, sl));

    logDebug("ret=" + ret);
    return ret && ret1;
}
function test170103() {
    // 均色均码款号合并
    var qo, o, ret = true;
    qo = { "备注" : "销售开单是否合并重复的款号" };
    o = { "新值" : "1", "数值" : [ "默认合并合并", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "默认均色均码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "2" }, { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var a = getTextFieldValue(getScrollView(), 3);
    var ret = isEqual("3", a);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var sl = qr.data[0]["数量"];

    tapFirstText();
    var a1 = getTextFieldValue(getScrollView(), 3);
    tapReturn();

    var ret1 = isAnd(isEqual(3, a1), isEqual(3, sl));
    
    qo = { "备注" : "销售开单是否合并重复的款号" };
    o = { "新值" : "0", "数值" : [ "不合并", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("ret=" + ret);
    return ret && ret1;
}
function test170104() {
    // 上次成交价界面显示备注信息
    var qo, o, ret = true;
    qo = { "备注" : "上次单价" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "默认均色均码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "1", "备注" : "mxbz" } ], "备注" : "zdbz" };
    editSalesBillNoColorSize(json);

    // debugElementTree(window);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "303", "表格行包含" : "Adidas" } ] };
    editSalesBillCustomer(json);
    editSalesBillDetTapCell(json);

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "备注:");
    var text = getStaticTextValue(window, index);

    tapButton(window, "更 多");
    var qr = getQResult2(getScrollView(-1, 0), "门店", "备注");
    var a = qr.data[0]["款号"];
    var b = qr.data[0]["备注"];

    var ret = isAnd(isEqual("3035", a), isEqual("mxbz", b), isIn(text, b));
    tapNaviLeftButton();
    tapNaviLeftButton();
    delay(2);
    tapReturn();
    
    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    logDebug("备注=" + text);
    return ret;

}
function test170105() {
    // 开启参数 颜色尺码下，开单显示上次单价
    var qo, o, ret = true;
    qo = { "备注" : "上次单价" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : [ 1 ], "备注" : "mxbz" } ],
        "备注" : "zdbz", "onlytest" : "yes" };
    editSalesBillColorSize(json);

    var f4 = new TField("单价", TF, 4, "107");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButtonAndAlert(RETURN, OK);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "303", "表格行包含" : "Adidas" } ] };
    editSalesBillCustomer(json);
    editSalesBillDetTapCell(json);

    var texts = getStaticTexts(window);
    var index = getArrayIndexIn(texts, "备注:");
    var tip = getStaticTextValue(window, index);
    var num = getStaticTextValue(window, index - 1);
    var date = getStaticTextValue(window, index - 2);

    tapButton(window, "更 多");
    var qr = getQResult2(getScrollView(-1, 0), "门店", "备注");
    var a = qr.data[0]["日期"];
    var b = qr.data[0]["数量"];
    var c = qr.data[0]["单价"];

    var ret = isEqual(getToday(""), a) && isEqual("1", b) && isEqual("107", c);
    var ret1 = isEqual("日期: " + getOpTime(), date)
            && isEqual("数量: 1  价格: 107", num);
    tapNaviLeftButton();
    tapNaviLeftButton();
    delay();
    tapButtonAndAlert(RETURN, OK);

    logDebug("num=" + num + "date=" + date);
    return ret;
}
function test170107() {
    // 开启参数 是否启用上次成交价作为本次开单单价
    var qo, o, ret = true;
    qo = { "备注" : "上次单价" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1", "备注" : "mxbz" } ], "备注" : "zdbz",
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("单价", TF, 4, "117");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButtonAndAlert(RETURN, OK);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "303", "表格行包含" : "Adidas" } ] };
    editSalesBillCustomer(json);
    editSalesBillDetTapCell(json);

    tapButton(window, "更 多");
    var qr = getQResult2(getScrollView(-1, 0), "门店", "备注");
    var c = qr.data[0]["单价"];

    var ret = isEqual("117", c);
    tapNaviLeftButton();
    tapNaviLeftButton();
    delay();
    tapButtonAndAlert(RETURN, OK);
    // delay();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "2" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    var c1 = getTextFieldValue(getScrollView(), 4);
    var ret1 = isEqual("117", c1);
    delay();
    tapButtonAndAlert(RETURN, OK);

    logDebug("c=" + c + "c1=" + c1);
    return ret && ret1;
}
function test170112() {
    // 颜色尺码模式下，开启参数 开单时是否显示当前库存
    var qo, o, ret = true;
    qo = { "备注" : "上次单价" };
    o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "0", "数值" : [ "默认不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    
    qo = { "备注" : "开单时是否显示当前库存" };
    o = { "新值" : "1", "数值" : [ "显示库存" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "所有门店" };
    o = { "新值" : "0", "数值" : [ "默认显示本门店的库存", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "0", "数值" : [ "显示颜色尺码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "款号库存");
    query();
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035" } ], "关闭明细" : "no" };
    editSalesBillDetColorSize(json);
    var oStockNum = getColorSizeStockNum();
    tapNaviLeftButton();
    var n = oStockNum["均色-均码-常青店"];
    var ret = isEqual(a, n);

    tapReturn();

    return ret;
}
function test170113() {
    // 关闭参数 开单时是否显示当前库存
    var qo, o, ret = true;
    qo = { "备注" : "开单时是否显示当前库存" };
    o = { "新值" : "1", "数值" : [ "显示库存" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
    
    tapMenu("货品管理", "款号库存");
    query();
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035" } ], "关闭明细" : "no" };
    editSalesBillDetColorSize(json);
    var oStockNum = getColorSizeStockNum();
    tapNaviLeftButton();
    var n = oStockNum["均色-均码-常青店"];
    var ret = isUndefined(n);
    var ret1 = false;
    if (a != 0) {
        ret1 = true;
    }
    tapButtonAndAlert(RETURN, OK);

    logDebug("a=" + a + "n=" + n + "ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170114() {
    // 设置开单时显示当前库存，开启参数 开单时是否显示当前库存
    // 颜色尺码模式下，开启参数 开单时是否显示当前库存
    tapMenu("货品管理", "款号库存");
    query();
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    var keys = { "款号" : "3035", "门店" : "仓库店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr1 = getQR();
    var a1 = qr1.data[0]["库存"];

    var keys = { "款号" : "3035", "门店" : "中洲店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr2 = getQR();
    var a2 = qr2.data[0]["库存"];

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035" } ], "关闭明细" : "no" };
    editSalesBillDetColorSize(json);
    var oStockNum = getColorSizeStockNum();
    tapNaviLeftButton();
    var n = oStockNum["均色-均码-常青店"];
    var n1 = oStockNum["均色-均码-仓库店"];
    var n2 = oStockNum["均色-均码-中洲店"];

    var ret = isAnd(isEqual(a, n), isEqual(a1, n1), isEqual(a2, n2));

    return ret;

}
function test170115() {
    // 设置开单时显示当前库存，设置参数 销售开单-是否显示所有门店的当前库存 为默认显示本门店的库存
    tapMenu("货品管理", "款号库存");
    query();
    var keys = { "款号" : "3035", "门店" : "常青店" };
    var fields = queryGoodsStockFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035" } ], "关闭明细" : "no" };
    editSalesBillDetColorSize(json);
    var oStockNum = getColorSizeStockNum();
    tapNaviLeftButton();
    var n = oStockNum["均色-均码"];
    var ret = isEqual(a, n);

    delay();
    tapButtonAndAlert(RETURN, OK);

    return ret;
}
function test170116() {
    // 设置是否允许负库存为 “检查，必须先入库再出库”
    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "1", "数值" : [ "必须先入库再出库", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

//    qo = { "备注" : "是否需要颜色尺码" };
//    o = { "新值" : "1", "数值" : [ "默认均色均码", "in" ] };
//    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "新增货品+");
    var r = "khao" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : r, "进货价" : "200" }
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000", "明细" : [ { "货品" : r, "数量" : "2" } ] };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = isAnd(isIn(alertMsg1, "操作失败"), isIn(alertMsg1,
            "库存不足，当前库存数为[0.00]"));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;

}
function test170117() {
    // 设置是否允许负库存为 “不检查，允许负库存”
    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "0", "数值" : [ "允许负库存", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "新增货品+");
    var r = "khao" + getTimestamp(8);
    var keys = { "款号" : r, "名称" : r, "进货价" : "200" }
    var fields = editGoodsFields(keys, false, 0, 0);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000", "明细" : [ { "货品" : r, "数量" : "2" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("货品管理", "款号库存");
    var keys = [ "款号" ];
    var fields = queryGoodsStockFields(keys);
    changeTFieldValue(fields["款号"], r);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["库存"];
    var ret = false;
    if (a == "-2") {
        ret = true;
    }

    logDebug("ret=" + ret);
    return ret;
}

function test170118() {
    // 设置是否允许负库存为 “检查，必须先入库再出库”
    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "1", "数值" : [ "必须先入库再出库", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("货品管理", "新增货品+");
    var r = getTimestamp(8);
    var keys = [ "款号", "名称", "品牌", "进货价", "季节", "类别", "厂商", "仓位", "经办人", "备注" ];
    var fields = editGoodsFields(keys, false, 0, -1);
    changeTFieldValue(fields["款号"], r);
    changeTFieldValue(fields["名称"], r);
    setTFieldsValue(getScrollView(), fields);
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : r, "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    var qo, o, ret = true;
    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "1", "数值" : [ "必须先入库再出库", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : r, "数量" : "2" } ] };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = isAnd(isIn(alertMsg1, "操作失败"), isIn(alertMsg1, "库存不足"));

    tapMenu("采购入库", "新增入库+");
    var json = { "客户" : "Rt", "明细" : [ { "货品" : r, "数量" : "10" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : r, "数量" : "2" } ] };
    editSalesBillNoColorSize(json);

    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "0", "数值" : [ "允许负库存", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret1 = isAnd(isIn(alertMsg1, "操作失败"), isIn(alertMsg1, "库存不足"));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret && ret1;

}
function test170119() {
    // 常青店 先开启异地仓库，再设置异地发货开单模式
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "15", "数值" : [ "异地发货开单模式", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "支持异地仓库" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ], "发货" : "仓库店" };
    editSalesBillNoColorSize(json);

    // 仓库店配货员登陆
    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["开单门店"];
    var b = qr.data[0]["发货门店"];
    var c = qr.data[0]["日期"];
    var d = qr.data[0]["数量"];
    var ret = isAnd(isEqual("常青店", a), isEqual("仓库店", b), isEqual(getToday(""),
            c), isEqual("1", d));
    logDebug("ret=" + ret);
    return ret;

}
function test170125() {
    // 开启参数 销售开单的同时订货功能，需退出重新登陆
    var qo, o, ret = true;
    qo = { "备注" : "销售开单时同时订货" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否允许负库存" };
    o = { "新值" : "0", "数值" : [ "允许负库存", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "明细" : [ { "货品" : "k300", "数量" : "10" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("订货数", TF, 4, "2");
    var f10 = new TField("订货数", TF, 10, "10");
    var fields = [ f4, f10 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    tapReturn();

    tapMenu("销售开单", "按订货开单");
    var keys = { "客户" : "ls" };
    var fields1 = salesBillOrderFields(keys);
    query(fields1);
    var qr = getQR();
    var a = qr.data[0]["订货数"];
    var ret = false;
    if (a == "2") {
        ret = true;
    }

    tapFirstText();
    // var ret1=款号，数量校对

    logDebug("ret=" + ret);
    return ret;
}
function test170128() {
    // 设置参数 销售开单同时订货为不启用
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "2" } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 10 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var k2 = getTextFieldValue(window, 2);
    var k3 = getTextFieldValue(window, 3);
    var ret = false;
    if (k2 == "361" && k3 == "361") {
        ret = true;
    }

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    // logDebug("k2=" + k2+"k3=" + k3);
    logDebug("ret=" + ret);
    return ret;
}
function test170129() {
    var r = "anewkhao" + getTimestamp(3);
    var r1 = "1" + getTimestamp(3);
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g2 = new TField("进货价", TF, 2, r1);
    var g3 = new TField("零批价", TF, 3, r1);
    var g4 = new TField("打包价", TF, 4, r1);
    var fields = [ g0, g1, g2, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : r, "数量" : "2" } ], "特殊货品" : { "抹零" : 9, "打包费" : 10 },
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var k1 = getTextFieldValue(getScrollView(), 1);
    var k2 = getTextFieldValue(getScrollView(), 2);
    var ret = false;
    if (k1 == "均色" && k2 == "均码") {
        ret = true;
    }

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    var qr = getQR();
    var a = qr.data[0]["款号"];
    var b = qr.data[0]["名称"];

    // tapFirstText();

    var ret1 = false;
    if (a == r && b == r) {
        ret1 = true;
    }
    // logDebug("款号=" + a+"名称=" + b);
    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170131() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var r = "anewkhao" + getTimestamp(3);
    var c = "1" + getTimestamp(3);
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g3 = new TField("零批价", TF, 3, c);
    var g4 = new TField("打包价", TF, 4, c);
    var fields = [ g0, g1, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    delay();

    var f10 = new TField("数量", TF, 10, "2");
    var fields = [ f10 ];
    setTFieldsValue(getScrollView(), fields);

    tapButton(window, "新增货品");
    var r1 = "anewkhao1" + getTimestamp(3);
    var c1 = "2" + getTimestamp(3);
    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r1);
    var g1 = new TField("名称", TF, 1, r1);
    var g3 = new TField("零批价", TF, 3, c1);
    var g4 = new TField("打包价", TF, 4, c1);
    var fields = [ g0, g1, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    delay();

    var f17 = new TField("数量", TF, 17, "3");
    var fields = [ f17 ];
    setTFieldsValue(getScrollView(), fields);

    var k7 = getTextFieldValue(getScrollView(), 7);
    var k14 = getTextFieldValue(getScrollView(), 14);
    var ret = isAnd(isIn(k7, r), isIn(k14, r1));

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    var qr = getQR();
    var a = qr.data[0]["款号"];
    var b = qr.data[0]["名称"];

    var ret1 = isAnd(isEqual(r, a), isEqual(r, b));

    tapMenu("货品管理", "货品查询");
    var qKeys1 = [ "款号名称" ];
    var qFields1 = queryGoodsFields(qKeys1);
    changeTFieldValue(qFields1["款号名称"], r1);
    query(qFields1);
    var qr = getQR();
    var a1 = qr.data[0]["款号"];
    var b1 = qr.data[0]["名称"];

    var ret2 = isAnd(isEqual(r1, a1), isEqual(r1, b1));

    logDebug("款号=" + a + "名称=" + b);
    // logDebug("ret=" + ret + "ret1=" + ret1 + "ret2=" + ret2);
    return ret && ret1 && ret2;
}
function test170132() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var r = "anewkhao" + getTimestamp(3);
    var c = "1" + getTimestamp(3);
    tapButton(window, "新增货品");

    var g0 = new TField("款号", TF, 0, r);
    var g1 = new TField("名称", TF, 1, r);
    var g3 = new TField("零批价", TF, 3, c);
    var g4 = new TField("打包价", TF, 4, c);
    var fields = [ g0, g1, g3, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    delay();

    var f10 = new TField("数量", TF, 10, "2");
    var fields = [ f10 ];
    setTFieldsValue(getScrollView(), fields);

    var f14 = new TField("货品", TF_AC, 14, "3035", -1, 0);
    var f17 = new TField("数量", TF, 17, "4");
    var fields = [ f14, f17 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getToday(), "日期到" : getToday(), "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var ret = isAnd(isEqual(6, qr.data[0]["数量"]), isAqualOptime(getOpTime,
            qr.data[0]["操作日期"]), 1);

    tapMenu("货品管理", "货品查询");
    var qKeys = [ "款号名称" ];
    var qFields = queryGoodsFields(qKeys);
    changeTFieldValue(qFields["款号名称"], r);
    query(qFields);
    var qr = getQR();
    var a = qr.data[0]["款号"];
    var b = qr.data[0]["名称"];

    var ret1 = isAnd(isEqual(r, a), isEqual(r, b));
    logDebug("ret=" + ret);
    return ret && ret1;
}
function test170133() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" }, { "货品" : "8989", "数量" : "1" },
                { "货品" : "k300", "数量" : "1" }, { "货品" : "k300", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    tapButton(getScrollView(), 3);

    var f21 = new TField("货品", TF_AC, 21, "3035", -1, 0);
    var f24 = new TField("货品", TF, 24, "4");
    var fields = [ f21, f24 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButtonAndAlert(RETURN, OK);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "保存成功"));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function test170137() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    tapFirstText();

    tapButtonAndAlert("作 废", OK);

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "作废");
    query(fields1);
    var qr = getQR();

    var ret = isAnd(isEqual(batch, qr.data[0]["批次"]), isEqual("李四",
            qr.data[0]["客户"]), isEqual(getToday(""), qr.data[0]["日期"]));

    logDebug("ret" + ret);

    return ret;
}
function test170138() {
    var qo, o, ret = true;
    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "3" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var batch = qr.data[0]["批次"];
    tapFirstText();

    tapButtonAndAlert("待作废", OK);
    tapButtonAndAlert(OK);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "作废成功"));
    tapPrompt();

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "待作废");
    query(fields1);
    var qr = getQR();

    var ret1 = isAnd(isEqual(batch, qr.data[0]["批次"]), isEqual("李四",
            qr.data[0]["客户"]), isEqual(getToday(""), qr.data[0]["日期"]));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret + " ret1" + ret1);
    return ret && ret1;
}
function test170139() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1", "备注" : "mxbz" } ], "备注" : "zdbz" };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    tapButtonAndAlert("复 制", OK);

    tapMenu("销售开单", "开  单+");
    tapButtonAndAlert("粘 贴", OK);

    var k0 = getTextFieldValue(getScrollView(), 0);
    var k1 = getTextFieldValue(getScrollView(), 1);
    var k2 = getTextFieldValue(getScrollView(), 2);
    var k3 = getTextFieldValue(getScrollView(), 3);

    var f0 = getTextFieldValue(window, 0);
    var f5 = getTextFieldValue(window, 5);

    delay();
    tapButtonAndAlert(RETURN, OK);

    var ret = isAnd(isIn(k0, "3035"), isEqual("均色", k1), isEqual("均码", k2),
            isEqual("1", k3), isEqual("李四", f0), isIn(f5, "总经理"));

    logDebug("ret" + ret);

    return ret;
}
function test170163() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    runAndAlert("test170246Get", OK);
    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "收款不能在新增模式下操作，只能在修改模式中操作"));

    tapReturn();

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;

}
function test170164() {
    // 一天一般只能收款一次
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    json["日期"] = getDay(-10);
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "日期从" : getDay(-10), "日期到" : getDay(-10), "作废挂单" : "正常" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();

    var ret = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual(1,
            qr.data[0]["数量"]), isAqualOptime(getOpTime, qr.data[0]["操作日期"]), 1);
    tapFirstText();

    runAndAlert("test170246Get", OK);
    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "收款成功"));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function test170166() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    json["日期"] = getDay(-1);
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();

    tapButtonAndAlert("打 印", "打印(客户用)");
    delay();

    tapFirstText();
    tapMenu("销售开单", "更多.", "查看修改日志");
    var texts = getStaticTexts(getPopOrView());
    debugElementTree(getPopOrView());
    var index = getArrayIndexIn(texts, "最后打印时间");
    var date = getStaticTextValue(getPopOrView(), index + 1);

    var ret = isEqual(getOpTime(), date);

    tapButton(getPop(), OK);
    tapButton(window, RETURN);

    // logDebug("date==" + date);
    logDebug(" ret" + ret);
    return ret;
}
function test170167() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ], "现金" : "0",
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "未付");
    delay();
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "开  单+");
    var json1 = { "客户" : "ls", "核销" : [ 5 ] };
    editSalesBillNoColorSize(json1);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var pc = qr.data[0]["批次"];

    var f7 = new TField("批次从", TF, 7, pc - 1);
    var f8 = new TField("到", TF, 8, pc - 1);
    var fields = [ f7, f8 ];
    setTFieldsValue(window, fields);
    query(fields);
    tapFirstText();

    tapMenu("销售开单", "更多.", "查看修改日志");
    var texts = getStaticTexts(getPopOrView());
    var index = getArrayIndexIn(texts, "最后打印时间");
    var a = getStaticTextValue(getPopOrView(), index - 7);
    var b = getStaticTextValue(getPopOrView(), index - 5);
    var c = getStaticTextValue(getPopOrView(), index + 3);
    var d = getStaticTextValue(getPopOrView(), index + 5);

    var ret = isAnd(isEqual("总经理", a), isAqualOptime(getOpTime(), c,2), isEqual(pc, d),
            isAqualOptime(getOpTime(), b, 2));

    tapButton(getPop(), OK);
    tapReturn();

    logDebug(" ret" + ret);
    return ret;
}
function test170169() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "挂单");
    query(fields1);
    var qr = getQR();

    var ret = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual("0",
            qr.data[0]["批次"]), isEqual(getToday(""), qr.data[0]["日期"]));

    logDebug("ret" + ret);

    return ret;
}
function test170170() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" }, { "货品" : "8989", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "挂单");
    query(fields1);

    tapFirstText();
    tapButton(getScrollView(), 3);

    var f21 = new TField("货品", TF_AC, 21, "3035", -1, 0);
    var f24 = new TField("数量", TF, 24, "4");
    var fields = [ f21, f24 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapButtonAndAlert("打 印", "取 消");
    delay();
    tapButtonAndAlert(RETURN, OK);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "保存成功"));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function test170171() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" }, { "货品" : "8989", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "按批次查");
    var keys1 = [ "作废挂单" ];
    var fields1 = salesQueryBatchFields(keys1);
    changeTFieldValue(fields1["作废挂单"], "挂单");
    query(fields1);

    tapFirstText();
    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "保存成功"));

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();

    var ret1 = isAnd(isEqual("李四", qr.data[0]["客户"]), isEqual("2",
            qr.data[0]["数量"]), isEqual(getToday(""), qr.data[0]["日期"]));

    logDebug(" ret" + ret + " ret1" + ret1);
    return ret && ret1;
}
function test170173() {
    // 全局参数，不显示待作废按钮
    var qo, o, ret = true;
    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var qo, o, ret = true;
    qo = { "备注" : "销售开单时同时订货" };
    o = { "新值" : "0", "数值" : [ "不启用", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" }, { "货品" : "8989", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay(3);
    tapButton(window, RETURN);

    tapMenu("销售开单", "按挂单");
    tapFirstText();
    tapButton(getScrollView(), 1);

    var f14 = new TField("货品", TF_AC, 14, "k300", -1, 0);
    var f17 = new TField("数量", TF, 17, "4");
    var fields = [ f14, f17 ];
    setTFieldsValue(getScrollView(), fields);
    delay();

    tapButtonAndAlert("挂 单", OK);
    delay(2);
    tapButtonAndAlert(RETURN, OK);
    delay();

    tapMenu("销售开单", "按挂单");
    var qr = getQR();
    var a = qr.data[0]["客户"];
    var b = qr.data[0]["日期"];
    var c = qr.data[0]["金额"];

    var ret = isAnd(isEqual("李四", a), isEqual(getToday(""), b), isEqual("1380",
            c));

    logDebug(" ret" + ret);
    return ret;
}
function test170174() {
    // 开单模式选择代收模式2
    var qo, o, ret = true;
    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "1" }, { "货品" : "8989", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay(3);
    tapButton(window, RETURN);

    tapMenu("销售开单", "按挂单");
    tapFirstText();
    delay();
    var f14 = new TField("货品", TF_AC, 14, "3035", -1, 0);
    var f17 = new TField("数量", TF, 17, "4");
    var fields = [ f14, f17 ];
    setTFieldsValue(getScrollView(), fields);
    delay();

    var json = { "代收" : { "物流商" : "yt", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    tapButtonAndAlert("none", "打印(客户用)");
    tapButtonAndAlert(RETURN, OK);

    tapMenu("销售开单", "按批次查");
    var qr = getQR();
    var a = qr.data[0]["客户"];
    var b = qr.data[0]["日期"];
    var c = qr.data[0]["代收"];

    var ret = isAnd(isEqual("李四", a), isEqual(getToday(""), b), isEqual("1001",
            c));

    logDebug(" ret" + ret);
    return ret;
}
function test170175() {
    var qo, o, ret = true;
    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls",
        "明细" : [ { "货品" : "3035", "数量" : "1" }, { "货品" : "8989", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    tapFirstText();
    delay();

    tapButtonAndAlert("挂 单", OK);
    delay();
    tapButtonAndAlert("none", OK, true);
    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "本单不允许执行挂单操作"));

    delay();
    tapButton(window, RETURN);

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function test170176() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" }, { "货品" : "8989", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay(2);
    tapButton(window, RETURN);

    tapMenu("销售开单", "按挂单");
    tapFirstText();

    var json1 = { "客户" : "lx", "店员" : "2003", "刷卡" : [ 596, "交" ], "备注" : "bz" };
    editSalesBillNoColorSize(json1);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "保存成功，是否打印"));

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function test170177() {
    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : "ls",
        "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" }, { "货品" : "8989", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButtonAndAlert("挂 单", OK);
    delay(2);
    tapButton(window, RETURN);

    tapMenu("销售开单", "开  单+");
    tapMenu("销售开单", "更多.", "所有挂单");
    delay();
    // var qr = getQRtable1();

    // debugQResult(qr);
    loadHangBill(0);

    var a = getTextFieldValue(getScrollView(), 0);
    var b = getTextFieldValue(getScrollView(), 8);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    var ret = isAnd(isIn(a, "3035"), isIn(b, "8989"));

    logDebug(" ret" + ret);
    return ret;
}
function test170180() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    tapMenu("销售开单", "更多.", "设置已配货");
    tapPrompt();

    delay();
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "配货成功"));

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "ls" };
    var fields = salesQueryBatchFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["配货"];

    var ret1 = isEqual("是", a);

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret + " ret1" + ret1);
    return ret && ret1;

}
function test170181() {
    var r = "anewkh" + getTimestamp(5);
    tapMenu("往来管理", "新增客户+");
    var keys = { "名称" : r, "允许退货" : "否" };
    var fields = editCustomerFields(keys);
    setTFieldsValue(getScrollView(), fields);
    tapButton(window, SAVE);
    delay();
    tapButton(window, RETURN);

    tapMenu("销售开单", "开  单+");
    var json = {
        "客户" : r,
        "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "5" }, { "货品" : "3035", "数量" : "-1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret = isIn(alertMsg, "不允许退货");
    tapPrompt();
    tapReturn();

    logDebug("alertMsg=" + alertMsg + " ret=" + ret);
    return ret;
}
function test170183() {
    // 全局设置:开启 积分门店共享功能;
    // 常青店总经理000登陆
    var qo, o, ret = true;
    qo = { "备注" : "积分是否跨门店共享" };
    o = { "新值" : "1", "数值" : [ "共享" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var fields = queryCustomerFields(key);
    changeTFieldValue(fields["customer"], "ls");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["当前积分"];

    // 中洲店总经理200登陆
    delay();
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    var keys1 = [ "customer" ];
    var fields1 = queryCustomerFields(keys1);
    changeTFieldValue(fields1["customer"], "ls");
    query(fields1);
    var qr1 = getQR();
    var b = qr1.data[0]["当前积分"];

    var ret = false;
    if (sub(b, a) == "180") {
        ret = true;
    }
    logDebug(" a=" + a + " b=" + b);
    return ret;
}
function test170184() {
    // 全局设置:不开启 积分跨门店共享功能;
    // 常青店总经理000登陆
    var qo, o, ret = true;
    qo = { "备注" : "积分是否跨门店共享" };
    o = { "新值" : "0", "数值" : [ " 不共享" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var fields = queryCustomerFields(key);
    changeTFieldValue(fields["customer"], "ls");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["当前积分"];

    // 中洲店总经理200登陆
    delay();
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("往来管理", "客户查询");
    var keys1 = [ "customer" ];
    var fields1 = queryCustomerFields(keys1);
    changeTFieldValue(fields1["customer"], "ls");
    query(fields1);
    var qr1 = getQR();
    var b = qr1.data[0]["当前积分"];

    var ret = false;
    if (sub(b, a) != "180" && b) {
        ret = true;
    }
    logDebug(" a=" + a + " b=" + b);
    return ret;
}
function test170185() {
    // 1销售开单时是否按门店区分客户-不区分；2全局设置:开启 积分跨门店共享功能;
    var qo, o, ret = true;
    qo = { "备注" : "积分是否跨门店共享" };
    o = { "新值" : "1", "数值" : [ "共享" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var fields = queryCustomerFields(key);
    changeTFieldValue(fields["customer"], "ls");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["当前积分"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);
    tapButton(window, "核销");
    var b = getStaticTextValue(getScrollView(1), 1);
    tapNaviLeftButton();

    var ret = isIn(b, a);
    logDebug(" a=" + a + " b=" + b);
    return ret;
}
function test170186() {
    // 170186验证积分不足，170187验证正常积分兑换
    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var fields = queryCustomerFields(key);
    changeTFieldValue(fields["customer"], "xw");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["当前积分"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    delay();
    tapButton(getScrollView(-1, 0), "积分兑换");
    var r = "9" + getTimestamp(6);
    var g0 = new TField("兑换积分*", TF, 0, r);
    var g1 = new TField("兑换金额*", TF, 1, r);
    var fields = [ g0, g1 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    delay();

    tapNaviLeftButton();
    tapButtonAndAlert(RETURN, OK);
    delay();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "客户当前积分不足"));

    logDebug("ret=" + ret);
    return ret;
}
function test170187() {
    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var fields = queryCustomerFields(key);
    changeTFieldValue(fields["customer"], "xw");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["当前积分"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    tapButton(getScrollView(-1, 0), "积分兑换");
    var r = "1" + getTimestamp(3);
    var g0 = new TField("兑换积分*", TF, 0, r);
    var g1 = new TField("兑换金额*", TF, 1, r);
    var fields = [ g0, g1 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapNaviLeftButton();
    tapButtonAndAlert(RETURN, OK);
    delay(3);

    tapMenu("往来管理", "客户查询");
    var keys1 = [ "customer" ];
    var fields1 = queryCustomerFields(keys1);
    changeTFieldValue(fields1["customer"], "xw");
    query(fields1);
    var qr = getQR();
    var b = qr.data[0]["当前积分"];

    var ret = isEqual(b, a - r);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButton(window, RETURN);

    logDebug(" a=" + a + " b=" + b);
    return ret;
}
function test170188() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    tapButton(getScrollView(-1, 0), "积分兑换");
    var r = "1" + getTimestamp(2);
    var g0 = new TField("兑换积分*", TF, 0, r);
    var g1 = new TField("兑换金额*", TF, 1, r);
    var fields = [ g0, g1 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    // tapButton(getPop(), "关 闭");
    tapNaviLeftButton();
    tapButtonAndAlert(RETURN, OK);
    delay(3);

    tapMenu("统计分析", "综合汇总");
    var f2 = new TField("门店", TF_SC, 2, "常青店");
    var fields = [ f2 ];
    setTFieldsValue(window, fields);
    query(fields);
    tapFirstText();

    var texts = getStaticTexts(getScrollView(-1, 0));
    var qr = getQRverify(texts, "名称", 5);
    var a = qr.data[0]["金额"];
    var ret = false;
    if (a >= 0) {
        ret = true;
    }
    tapNaviLeftButton();

    tapMenu("统计分析", "收支流水");
    var keys = [ "day1", "day2", "shop", "account" ];
    var fields = statisticAnalysisInOutAccountFields(keys);
    changeTFieldValue(fields["day1"], getToday());
    changeTFieldValue(fields["day2"], getToday());
    changeTFieldValue(fields["shop"], "常青店");
    changeTFieldValue(fields["account"], "现");
    setTFieldsValue(window, fields);
    query(fields);
    var qr = getQR();

    var ret1 = isAnd(isEqual("积分兑换", qr.data[0]["类型"]), isEqual(-r,
            qr.data[0]["金额"]));

    logDebug("金额=" + a + "ret=" + ret + "ret1=" + ret1);
    return ret && ret1;

}
function test170189() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    tapButton(getScrollView(-1, 0), "积分兑换");
    var r = "1" + getTimestamp(2);
    var g0 = new TField("兑换积分*", TF, 0, r);
    var g1 = new TField("兑换金额*", TF, 1, r);
    var fields = [ g0, g1 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");
    tapNaviLeftButton();
    tapButtonAndAlert(RETURN, OK);
    delay(3);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    tapButton(getScrollView(-1, 0), "兑换记录");

    var texts = getStaticTexts(getScrollView(-1));
    var titleTexts = getStaticTexts(window);
    var qr = getQRverify(texts, "序号", 6, 0, titleTexts);
    var a = qr.data[0]["兑换积分"];
    var a1 = qr.data[0]["兑换金额"];
    var a2 = qr.data[0]["日期"];
    var a3 = qr.data[0]["门店"];
    var a4 = qr.data[0]["操作人"];

    tapNaviLeftButton();
    tapNaviLeftButton();
    tapButtonAndAlert(RETURN, OK);

    var ret = isAnd(isEqual(r, a), isEqual(r, a1), isEqual(getToday("yy"), a2),
            isEqual("常青店", a3), isEqual("总经理", a4));

    logDebug(" a=" + a + " a1=" + a1 + " a2=" + a2);
    return ret;
}
function test170190() {
    tapMenu("往来管理", "客户查询");
    var key = [ "customer" ];
    var fields = queryCustomerFields(key);
    changeTFieldValue(fields["customer"], "xw");
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["当前积分"];

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "xw", "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    tapButton(window, "核销");
    var b = getStaticTextValue(getScrollView(-1, 0), 1);
    tapNaviLeftButton();
    tapReturn();

    var ret = isIn(b, a);
    logDebug(" a=" + a + " b=" + b);
    return ret;
}
function test170191() {
    // 全局设置：开启 “总计是否四舍五入”
    var qo, o, ret = true;
    qo = { "备注" : "总计是否需要四舍五入" };
    o = { "新值" : "1", "数值" : [ "需要" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    var r = getTimestamp(6) + "newkehu";
    var keys = { "名称" : r, "适用价格" : "零批价", "拿货折扣" : "0.899" };
    addCustomer(keys);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret1 = isEqual(0.899, getTextFieldValue(getScrollView(), 5));

    var k3 = getTextFieldValue(window, 3);
    var k12 = getTextFieldValue(window, 12);
    var money = Math.round(getTextFieldValue(window, 6));

    var ret = isAnd(isEqual(k3, k12), isEqual(k12, Math
            .round(getTextFieldValue(window, 6))));

    saveAndAlertOk();
    tapPrompt();

    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret1 = isAnd(isEqual(money, qr.data[0]["金额"]), isEqual(money,
            qr.data[0]["现金"]), isEqual("0", qr.data[0]["未结"]));

    // var qo, o, ret = true;
    // qo = { "备注" : "开单模式" };
    // o = { "新值" : "2", "数值" : [ "代收", "in" ] };
    // ret = isAnd(ret, setGlobalParam(qo, o));

    return ret && ret1;
}
function test170195() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("单价", TF, 4, "-180");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButtonAndAlert(RETURN, OK);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "单价或金额不能为负数"));

    logDebug("ret=" + ret);
    return ret;
}
function test170199() {
    // 本地设置-开单界面，保存后是否显示打印确认窗口-设为1，显示
    var qo, o, ret = true;
    qo = { "备注" : "开单界面，保存后显示是否打印确认窗口" };
    o = { "新值" : "1", "数值" : [ "默认显示", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "是否打印"));

    logDebug("ret=" + ret);
    return ret;

}
function test170200() {
    // 本地设置-开单界面，保存后是否显示打印确认窗口-设为0，不显示
    var qo, o, ret = true;
    qo = { "备注" : "开单界面，保存后显示是否打印确认窗口" };
    o = { "新值" : "0", "数值" : [ "不显示", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    saveAndAlertOk();
    var ret1 = tapPrompt();

    tapReturn();

    qo = { "备注" : "开单界面，保存后显示是否打印确认窗口" };
    o = { "新值" : "1", "数值" : [ "默认显示", "in" ] };
    ret = isAnd(ret, setLocalParam(qo, o));

    logDebug("ret1=" + ret1);
    return !ret1;
}
function test170239() {
    var qo, o, ret = true;
    qo = { "备注" : "开单是否门店过滤人员" };
    o = { "新值" : "1", "数值" : [ "开启后店员只显示本门店人员", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var f4 = new TField("单价", TF, 4, "-100");
    var fields = [ f4 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapButtonAndAlert(RETURN, OK);

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -2);
    var ret = (isIn(alertMsg1, "单价或金额不能为负数"));

    logDebug("ret=" + ret);
    return ret;
}
function test170240() {
    // 设置全局参数 开单是否门店过滤人中为 支持,开启后店员只显示本门店人员
    var qo, o, ret = true;
    qo = { "备注" : "开单是否门店过滤人员" };
    o = { "新值" : "1", "数值" : [ "开启后店员只显示本门店人员", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");

    var f4 = new TField("店员", TF_AC, 4, "1");
    var fields = [ f4 ];
    setTFieldsValue(window, fields);

    var ret = true;
    var f = new TField("店员", TF_AC, 4, "1", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        debugElementTree(cell);
        var v = cell.name();
        if (isEqual("101,财务员", v)) {
            ret = false;
            break;
        }
    }
    delay();
    tapButtonAndAlert(RETURN, OK);

    logDebug("ret=" + ret);
    return ret;
}
function test170241() {
    // 设置全局参数 开单是否门店过滤人中为 默认不支持
    var qo, o, ret = true;
    qo = { "备注" : "开单是否门店过滤人员" };
    o = { "新值" : "0", "数值" : [ "默认不支持", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");

    var f4 = new TField("店员", TF_AC, 4, "1");
    var fields = [ f4 ];
    setTFieldsValue(window, fields);

    var ret = false;
    var f = new TField("店员", TF_AC, 4, "1", -1);
    var cells = getTableViewCells(window, f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        debugElementTree(cell);
        var v = cell.name();
        if (isEqual("101,财务员", v)) {
            ret = true;
            break;
        }
    }
    delay();
    tapButtonAndAlert(RETURN, OK);

    logDebug("ret=" + ret);
    return ret;
}
function test170242() {
    // 开启全局参数 价格模式 为不同门店不同价格
    // 常青店总经理000登陆
    var qo, o, ret = true;
    qo = { "备注" : "价格模式" };
    o = { "新值" : "1", "数值" : [ "不同门店不同的价格体系", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "1" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var a = getTextFieldValue(getScrollView(), 4);
    var ret = isEqual("180", a);

    // 仓库店总经理100登陆
    tapMenu("销售开单", "开  单+");
    var json = { "明细" : [ { "货品" : "3035", "数量" : "1" } ], "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var b = getTextFieldValue(getScrollView(), 4);
    s
    var ret1 = isEqual("250", b);

    logDebug("ret=" + ret + "ret1=" + ret1);
    return ret && ret1;
}
function test170244() {
    // 开启全局参数 价格模式 为不同门店不同价格
    var qo, o, ret = true;
    qo = { "备注" : "价格模式" };
    o = { "新值" : "1", "数值" : [ "不同门店不同的价格体系", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "店员" : "000",
        "明细" : [ { "货品" : "3035", "数量" : "1" } ] };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "按明细查");
    var keys = { "款号" : "3035", "客户" : "ls", "门店" : "常青店" };
    var fields = salesQueryParticularFields(keys);
    query(fields);
    var qr = getQR();
    var a = qr.data[0]["差额"];

    var ret = isEqual("20", a);

    logDebug("ret=" + ret);
    return ret;
}
function test170245() {
    // 设置全局参数 开单 货品列表是否显示品牌信息 为 支持,部分客户需要
    var qo, o, ret = true;
    qo = { "备注" : "开单货品列表是否显示品牌信息" };
    o = { "新值" : "1", "数值" : [ "部分客户需要", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");

    var ret = false;
    var f = new TField("货品", TF_AC, 0, "303", -1);
    var cells = getTableViewCells(getScrollView(), f);
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        debugElementTree(cell);
        var v = cell.name();
        if (isIn(v, "Adidas")) {
            ret = true;
            break;
        }
    }
    delay();
    tapButtonAndAlert(RETURN, OK);

    logDebug("ret=" + ret);
    return ret;
}
function test170246() {
    var qo, o, ret = true;
    qo = { "备注" : "是否显示待作废按钮功能" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapRefresh();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    tapButtonAndAlert("待作废", OK);
    tapPrompt();

    tapMenu("销售开单", "按批次查");
    query();
    tapFirstText();

    runAndAlert("test170246Get", OK);
    tapPrompt();

    debugArray(alertMsgs);
    var alertMsg1 = getArray1(alertMsgs, -1);
    var ret = (isIn(alertMsg1, "存在待作废的销售单"));

    tapReturn();

    logDebug("alertMsg1=" + alertMsg1 + " ret" + ret);
    return ret;
}
function test170246Get() {
    tapMenu2("更多.");
    tapMenu3("收 款");
}
function test170247() {
    var qo, o, ret = true;
    qo = { "备注" : "零批价" };
    o = { "新值" : "1", "数值" : [ "默认零批价", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("手机", TF, 1, r1);
    var g2 = new TField("店员", TF_AC, 2, "000,", -1, 0);
    var g4 = new TField("地址", TF, 4, r);
    var fields = [ g0, g1, g2, g4 ];
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    tapFirstText();
    var a = getTextFieldValue(getScrollView(), 1);
    var a1 = getTextFieldValue(getScrollView(), 3);
    // var a2 = getTextFieldValue(getScrollView(), 7);
    var a3 = getTextFieldValue(getScrollView(), 14);
    var a4 = getTextFieldValue(getScrollView(), 17);
    var ret = isAnd(isEqual(r, a), isEqual(r1, a1), isEqual("", a3), isEqual(r,
            a4));

    tapButton(window, RETURN);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var b = getTextFieldValue(getScrollView(), 4);
    var ret1 = isEqual("200", b);
    delay();
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var c = getTextFieldValue(getScrollView(), 4);
    delay();
    var ret2 = isEqual("200", c);
    tapReturn();

    return ret && ret1 && ret2;
}
function test170248() {
    var i, v;
    var p = "进货价 零批价 打包价 大客户价 Vip价格";

    tapMenu("销售开单", "开  单+");
    tapButton(window, "新增+");
    var r = "anewkh" + getTimestamp(6);
    var r1 = getTimestamp(6);
    var g0 = new TField("名称", TF, 0, r);
    var g1 = new TField("手机", TF, 1, r1);
    var g2 = new TField("店员", TF_AC, 2, "000,", -1, 0);
    var g3 = new TField("适用价格", BTN_SC, 0, "零批价", "", -1);
    var g4 = new TField("地址", TF, 4, r);
    var fields = [ g0, g1, g2, g3, g4 ];
    delay();
    setTFieldsValue(getPopView(), fields);
    tapButton(getPop(), OK);
    tapButton(getPop(), "关 闭");

    tapMenu("往来管理", "客户查询");
    var keys = { "客户" : r };
    var qFields = queryCustomerFields(keys);
    query(qFields);
    tapFirstText();
    var a = getTextFieldValue(getScrollView(), 1);
    var a1 = getTextFieldValue(getScrollView(), 3);
    var a2 = getTextFieldValue(getScrollView(), 7);
    var a3 = getTextFieldValue(getScrollView(), 14);
    var a4 = getTextFieldValue(getScrollView(), 17);
    var ret = isAnd(isEqual(r, a), isEqual(r1, a1), isIn(a2, "总经理"), isEqual(
            "零批价", a3), isEqual(r, a4));

    tapButton(window, RETURN);

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var b = getTextFieldValue(getScrollView(), 4);
    var ret1 = isEqual("200", b);
    tapReturn();

    tapMenu("销售订货", "新增订货+");
    var json = { "客户" : r, "明细" : [ { "货品" : "3035", "数量" : "10" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var c = getTextFieldValue(getScrollView(), 4);
    var ret2 = isEqual("200", c);
    tapReturn();

    return ret && ret1 && ret2;
}
function test170251() {
    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "lx", "明细" : [ { "货品" : "3035", "数量" : "1" } ],
        "代收" : { "物流商" : "tt", "运单号" : "123", "备注" : "a" } };
    editSalesBillNoColorSize(json);

    tapMenu("销售开单", "物流单");
    query();
    var qr = getQR();
    var batch = qr.data[0]["批次"];

    tapMenu("销售开单", "核销+");
    var f = new TField("物流", TF, 0, "tt", -1, 0);
    var fields = [ f ];
    setTFieldsValue(window, fields);
    tapButton(window, "核销");

    // debugElementTree(window);

    var table1 = getTableView(window, -1);
    var cells = table1.cells();
    tap(cells[0]);

    tapNaviRightButton();
    tapButtonAndAlert(SAVE, OK);

    tapReturn();

    tapMenu("销售开单", "物流单");
    query();
    var qr = getQR();
    var a = qr.data[0]["批次"];
    var a1 = qr.data[0]["物流商"];
    var a2 = qr.data[0]["运单号"];
    var a3 = qr.data[0]["物流备注"];
    var a4 = qr.data[0]["代收货款"];

    var ret = isAnd(isEqual(batch, a), isEqual("天天物流", a1), isEqual("123", a2),
            isEqual("a", a3), isEqual("是", a4));

    tapMenu("销售开单", "按批次查");
    var keys = { "客户" : "lx", "门店" : "常青店" };
    var fields = salesQueryBatchFields(keys);
    query(fields);

    tapFirstText();
    tapMenu("销售开单", "更多.", "查看修改日志");
    var texts = getStaticTexts(getPopOrView());
    var index = getArrayIndexIn(texts, "最后打印时间");
    var a = getStaticTextValue(getPopOrView(), index - 7);
    var b = getStaticTextValue(getPopOrView(), index - 5);
    var c = getStaticTextValue(getPopOrView(), index + 3);
    var d = getStaticTextValue(getPopOrView(), index + 5);

    var ret1 = isAnd(isEqual("总经理", a), isEqual("", c), isEqual("", d),
            isAqualOptime(getOpTime(), b));

    tapButton(getPop(), "关 闭");
    tapReturn();

    return ret && ret1;
}
function test170424() {
    var qo, o, ret = true;
    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否需要颜色尺码" };
    o = { "新值" : "1", "数值" : [ "默认均色均码", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));
}
function test170460() {
    var qo, o, ret = true;
    qo = { "备注" : "上次单价" };
    o = { "新值" : "1", "数值" : [ "显示" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "成交价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "5", "数值" : [ "产品折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var r = getTimestamp(2);
    var R = "0." + r;
    var f5 = new TField("折扣", TF, 5, R);
    var fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 10 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret = isAqualNum(R, getTextFieldValue(getScrollView(), 5), 0);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret1 = isAnd(isEqual(Math.round(416 * R + 1), qr.data[0]["金额"]),
            isEqual(Math.round(416 * R + 1), qr.data[0]["现金"]), isEqual("0",
                    qr.data[0]["未结"]));

    return ret && ret1;
}
function test170461() {
    var qo, o, ret = true;
    qo = { "备注" : "成交价" };
    o = { "新值" : "1", "数值" : [ "启用" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "开单模式" };
    o = { "新值" : "6", "数值" : [ "客户折扣", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    qo = { "备注" : "是否检查折扣" };
    o = { "新值" : "2", "数值" : [ "折扣无限制", "in" ] };
    ret = isAnd(ret, setGlobalParam(qo, o));

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var r = getTimestamp(2);
    var R = "0." + r;
    var f5 = new TField("折扣", TF, 5, R);
    var fields = [ f5 ];
    setTFieldsValue(getScrollView(), fields);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "开  单+");
    var json = { "客户" : "ls", "明细" : [ { "货品" : "8989", "数量" : "1" } ],
        "特殊货品" : { "抹零" : 9, "打包费" : 10 }, "onlytest" : "yes" };
    editSalesBillNoColorSize(json);

    var ret = isAqualNum(R, getTextFieldValue(getScrollView(), 5), 0);

    saveAndAlertOk();
    tapPrompt();
    delay();
    tapReturn();

    tapMenu("销售开单", "按批次查");
    query();
    var qr = getQR();
    var ret1 = isAnd(isEqual(Math.round(416 * R + 1), qr.data[0]["金额"]),
            isEqual(Math.round(416 * R + 1), qr.data[0]["现金"]), isEqual("0",
                    qr.data[0]["未结"]));

    return ret && ret1;
}
