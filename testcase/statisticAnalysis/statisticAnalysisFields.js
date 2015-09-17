//LuXingXin <52619481 at qq.com> 20150917

//收支表
function testStatisticAnalysisInOutFields() {
	var keys = [ "day1", "day2", "type" ];
	var fields = statisticAnalysisInOutFields(keys);
	setTFieldsValue(window, fields);
	var showFields = statisticAnalysisInOutFields(keys, true);
	return checkShowFields(window, showFields);
}

function statisticAnalysisInOutFields(keys, show) {
	return getTFields("statisticAnalysisInOutField", keys, show);
}
function statisticAnalysisInOutField(key, show) {
	var f;
	switch (key) {
	case "day1":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	case "type":
		f = new TField("收支类别", TF_SC, 2, "收入");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 利润表
function testStatisticAnalysisProfitFields() {
	var keys = [ "day1", "day2", "shop", "code", "customer", "staff",
			"provider", "brand" ];
	var fields = statisticAnalysisProfitFields(keys);
	setTFieldsValue(window, fields);
	var showFields = statisticAnalysisProfitFields(keys, true);
	return checkShowFields(window, showFields);
}

function statisticAnalysisProfitFields(keys, show) {
	return getTFields("statisticAnalysisProfitField", keys, show);
}
function statisticAnalysisProfitField(key, show) {
	var f;
	switch (key) {
	case "day1":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	case "shop":
		f = new TField("门店", TF_SC, 2, "常青店");
		break;
	case "code":
		f = new TField("款号", TF_AC, 3, "a", 1, 0);
		if (show) {
			f.value = "5880,kha,210元";
		}
		break;
	case "customer":
		f = new TField("客户", TF_AC, 4, "a", 1, 0);
		if (show) {
			f.value = "Qaq";
		}
		break;
	case "staff":
		f = new TField("店员", TF_AC, 5, "000", 1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	case "provider":
		f = new TField("厂商", TF_AC, 6, "z", 1, 0);
		if (show) {
			f.value = "杭州";
		}
		break;
	case "brand":
		f = new TField("品牌", TF_SC, 7, "1010pp");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 综合汇总
function testStatisticAnalysisSynthesisFields() {
	var keys = [ "day1", "day2", "shop" ];
	var fields = statisticAnalysisSynthesisFields(keys);
	setTFieldsValue(window, fields);
	var showFields = statisticAnalysisSynthesisFields(keys, true);
	return checkShowFields(window, showFields);
}

function statisticAnalysisSynthesisFields(keys, show) {
	return getTFields("statisticAnalysisSynthesisField", keys, show);
}
function statisticAnalysisSynthesisField(key, show) {
	var f;
	switch (key) {
	case "day1":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	case "shop":
		f = new TField("门店", TF_SC, 2, "常青店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 退货表
function testStatisticAnalysisReturnFields() {
	var keys = [ "day1", "day2", "code", "name" ];
	var fields = statisticAnalysisReturnFields(keys);
	setTFieldsValue(window, fields);
	var showFields = statisticAnalysisReturnFields(keys, true);
	return checkShowFields(window, showFields);
}

function statisticAnalysisReturnFields(keys, show) {
	return getTFields("statisticAnalysisReturnField", keys, show);
}
function statisticAnalysisReturnField(key, show) {
	var f;
	switch (key) {
	case "day1":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	case "code":
		f = new TField("款号", TF_AC, 2, "a", 1, 0);
		if (show) {
			f.value = "5880,kha,210元";
		}
		break;
	case "name":
		f = new TField("款号名称", TF, 3, "aaa");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 畅销表
function testStatisticAnalysisGoodMarketFields() {
	var keys = [ "code", "day1", "day2", "shop", "name" ];
	var fields = statisticAnalysisGoodMarketFields(keys);
	setTFieldsValue(window, fields);
	var showFields = statisticAnalysisGoodMarketFields(keys, true);
	return checkShowFields(window, showFields);
}

function statisticAnalysisGoodMarketFields(keys, show) {
	return getTFields("statisticAnalysisGoodMarketField", keys, show);
}
function statisticAnalysisGoodMarketField(key, show) {
	var f;
	switch (key) {
	case "code":
		f = new TField("款号", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "5880,kha,210元";
		}
		break;
	case "day1":
		f = new TField("日期从", TF_DT, 1, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 2, getToday());
		break;
	case "shop":
		f = new TField("门店", TF_SC, 3, "常青店");
		break;
	case "name":
		f = new TField("款号名称", TF, 4, "aaa");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 滞销表
function testStatisticAnalysisUnsalableFields() {
	var keys = [ "code", "shop", "day1", "day2" ];
	var fields = statisticAnalysisUnsalableFields(keys);
	setTFieldsValue(window, fields);
	var showFields = statisticAnalysisUnsalableFields(keys, true);
	return checkShowFields(window, showFields);
}

function statisticAnalysisUnsalableFields(keys, show) {
	return getTFields("statisticAnalysisUnsalableField", keys, show);
}
function statisticAnalysisUnsalableField(key, show) {
	var f;
	switch (key) {
	case "code":
		f = new TField("款号", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "5880,kha,210元";
		}
		break;
	case "shop":
		f = new TField("门店", TF_SC, 1, "常青店");
		break;
	case "day1":
		f = new TField("日期从", TF_DT, 2, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 3, getToday());
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 收支汇总
function testStatisticAnalysisInOutSummaryFields() {
	var keys = [ "day1", "day2", "type" ];
	var fields = statisticAnalysisInOutSummaryFields(keys);
	setTFieldsValue(window, fields);
	var showFields = statisticAnalysisInOutSummaryFields(keys, true);
	return checkShowFields(window, showFields);
}

function statisticAnalysisInOutSummaryFields(keys, show) {
	return getTFields("statisticAnalysisInOutSummaryField", keys, show);
}
function statisticAnalysisInOutSummaryField(key, show) {
	var f;
	switch (key) {
	case "day1":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	case "type":
		f = new TField("收支类别", TF_SC, 2, "收入");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增收入
function testStatisticAnalysisInAddFields() {
	var keys = [ "day", "account", "remarks" ];
	var fields = statisticAnalysisInAddFields(keys);
	setTFieldsValue(window, fields);
	var showFields = statisticAnalysisInAddFields(keys, true);
	return checkShowFields(window, showFields);
}

function statisticAnalysisInAddFields(keys, show) {
	return getTFields("statisticAnalysisInAddField", keys, show);
}
function statisticAnalysisInAddField(key, show) {
	var f;
	switch (key) {
	case "day":
		f = new TField("日期", TF_DT, 0, getToday());
		break;
	case "account":
		f = new TField("账户", TF_SC, 1, "现");
		break;
	case "remarks":
		f = new TField("收支备注", TF, 3, "备注");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增支出
function testStatisticAnalysisOutAddFields() {
	var keys = [ "day", "account", "remarks" ];
	var fields = statisticAnalysisOutAddFields(keys);
	setTFieldsValue(window, fields);
	var showFields = statisticAnalysisOutAddFields(keys, true);
	return checkShowFields(window, showFields);
}

function statisticAnalysisOutAddFields(keys, show) {
	return getTFields("statisticAnalysisOutAddField", keys, show);
}
function statisticAnalysisOutAddField(key, show) {
	var f;
	switch (key) {
	case "day":
		f = new TField("日期", TF_DT, 0, getToday());
		break;
	case "account":
		f = new TField("账户", TF_SC, 1, "现");
		break;
	case "remarks":
		f = new TField("收支备注", TF, 3, "备注");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 收支流水
function testStatisticAnalysisInOutAccountFields() {
	var keys = [ "day1", "day2", "shop", "account" ];
	var fields = statisticAnalysisInOutAccountFields(keys);
	setTFieldsValue(window, fields);
	var showFields = statisticAnalysisInOutAccountFields(keys, true);
	return checkShowFields(window, showFields);
}

function statisticAnalysisInOutAccountFields(keys, show) {
	return getTFields("statisticAnalysisInOutAccountField", keys, show);
}
function statisticAnalysisInOutAccountField(key, show) {
	var f;
	switch (key) {
	case "day1":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
		f = new TField("到", TF_DT, 1, getToday());
		break;
	case "shop":
		f = new TField("门店", TF_SC, 2, "常青店");
		break;
	case "account":
		f = new TField("账户", TF_SC, 3, "现");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}