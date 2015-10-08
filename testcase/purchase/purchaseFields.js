//LuXingXin <52619481 at qq.com> 20150915

//按批次查
function testPurchaseQueryBatchFields() {
	var keys = [ "provider", "day1", "day2", "order", "batch1", "batch2",
			"shop", "staff" ];
	var fields = purchaseQueryBatchFields(keys);
	setTFieldsValue(window, fields);
	var showFields = purchaseQueryBatchFields(keys, true);
	return checkShowFields(window, showFields);
}

function purchaseQueryBatchFields(keys, show) {
	return getTFields("purchaseQueryBatchField", keys, show);
}
function purchaseQueryBatchField(key, show) {
	var f;
	switch (key) {
	case "provider":
	case "厂商":
		f = new TField("厂商", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 1, "2015-9-11");
		break;
	case "day2":
	case "日期到":
		f = new TField("到", TF_DT, 2, "2015-9-15");
		break;
	case "order":
	case "订货号":
		f = new TField("订货号", TF, 3, "123");
		break;
	case "batch1":
	case "批次从":
		f = new TField("批次从", TF, 4, "1");
		break;
	case "batch2":
	case "批次到":
		f = new TField("到", TF, 5, "20");
		break;
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 6, "仓库店");
		break;
	case "staff":
	case "店员":
		f = new TField("店员", TF_AC, 7, "000", 1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;

	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按明细查
function testPurchaseQueryParticularFields() {
	var keys = [ "code", "name", "provider", "day1", "day2", "shop" ];
	var fields = purchaseQueryParticularFields(keys);
	setTFieldsValue(window, fields);
	var showFields = purchaseQueryParticularFields(keys, true);
	return checkShowFields(window, showFields);
}

function purchaseQueryParticularFields(keys, show) {
	return getTFields("purchaseQueryParticularField", keys, show);
}
function purchaseQueryParticularField(key, show) {
	var f;
	switch (key) {
	case "code":
	case "款号":
		f = new TField("款号", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "5880,kha,210元";
		}
		break;
	case "name":
	case "名称":
		f = new TField("名称", TF, 1, "aaa");
		break;
	case "provider":
	case "厂商":
		f = new TField("厂商", TF_AC, 2, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 3, "2015-9-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 4, "2015-9-15");
		break;
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 5, "仓库店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按金额汇总
function testPurchasePriceFields() {
	var fields = purchasePriceFields("day1", "day2");
	setTFieldsValue(window, fields);
	return true;
}

function purchasePriceFields() {
	return getTFields("purchasePriceField", arguments);
}
function purchasePriceField(key) {
	var f;
	switch (key) {
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 1, "2015-9-15");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按款号汇总
function testPurchaseCodeFields() {
	var keys = [ "code", "day1", "day2", "market1", "market2", "provider" ];
	var fields = purchaseCodeFields(keys);
	setTFieldsValue(window, fields);
	var showFields = purchaseCodeFields(keys, true);
	return checkShowFields(window, showFields);
}

function purchaseCodeFields(keys, show) {
	return getTFields("purchaseCodeField", keys, show);
}
function purchaseCodeField(key, show) {
	var f;
	switch (key) {
	case "code":
	case "款号":
		f = new TField("款号", TF_AC, 0, "b", 1, 0);
		if (show) {
			f.value = "741,Abc,44元";
		}
		break;
	case "day1":
	case "发生日期从":
		f = new TField("发生日期从", TF_DT, 1, "2015-9-11");
		break;
	case "day2":
	case "发生日期到":
		f = new TField("到", TF_DT, 2, "2015-9-15");
		break;
	case "market1":
	case "上架日期从":
		f = new TField("上架日期从", TF_DT, 3, "2015-8-11");
		break;
	case "market2":
	case "上架日期到":
		f = new TField("到", TF_DT, 4, "2015-8-15");
		break;
	case "provider":
	case "厂商":
		f = new TField("厂商", TF_AC, 5, "a", 1, 0);
		if (show) {
			f.value = "A.k";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按厂商返货
function testPurchaseProviderReturnFields() {
	var keys = [ "code", "day1", "day2", "provider" ];
	var fields = purchaseProviderReturnFields(keys);
	setTFieldsValue(window, fields);
	var showFields = purchaseProviderReturnFields(keys, true);
	return checkShowFields(window, showFields);
}

function purchaseProviderReturnFields(keys, show) {
	return getTFields("purchaseProviderReturnField", keys, show);
}
function purchaseProviderReturnField(key, show) {
	var f;
	switch (key) {
	case "code":
	case "款号":
		f = new TField("款号", TF_AC, 0, "b", 1, 0);
		if (show) {
			f.value = "741,Abc,44元";
		}
		break;
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 1, "2015-9-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 2, "2015-9-15");
		break;
	case "provider":
	case "厂商":
		f = new TField("厂商", TF_AC, 3, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按厂商汇总
function testPurchaseProviderFields() {
	var keys = [ "day1", "day2", "provider" ];
	var fields = purchaseProviderFields(keys);
	setTFieldsValue(window, fields);
	var showFields = purchaseProviderFields(keys, true);
	return checkShowFields(window, showFields);
}

function purchaseProviderFields(keys, show) {
	return getTFields("purchaseProviderField", keys, show);
}
function purchaseProviderField(key, show) {
	var f;
	switch (key) {
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 1, "2015-9-15");
		break;
	case "provider":
	case "厂商":
		f = new TField("厂商", TF_AC, 2, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按出入库汇总
function testPurchaseInOutFields() {
	var fields = purchaseInOutFields("day1", "day2");
	setTFieldsValue(window, fields);
	return true;
}

function purchaseInOutFields() {
	return getTFields("purchaseInOutField", arguments);
}
function purchaseInOutField(key) {
	var f;
	switch (key) {
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 1, "2015-9-15");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 供应商对账单
function testPurchaseQueryProviderFields() {
	var keys = [ "day1", "day2", "provider" ];
	var fields = purchaseQueryProviderFields(keys);
	setTFieldsValue(window, fields);
	var showFields = purchaseQueryProviderFields(keys, true);
	return checkShowFields(window, showFields);
}

function purchaseQueryProviderFields(keys, show) {
	return getTFields("purchaseQueryProviderField", keys, show);
}
function purchaseQueryProviderField(key, show) {
	var l = getTextFields().length;
	var f;
	switch (key) {
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, l - 3, "2015-9-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, l - 2, "2015-9-15");
		break;
	case "provider":
	case "供应商":
		var tableViewIndex = getTableViews().length - 1;
		f = new TField("供应商", TF_AC, l - 1, "a", tableViewIndex, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按类别汇总
function testPurchaseTypeFields() {
	var keys = ["day1", "day2", "type"];
	var fields = purchaseTypeFields(keys);
	setTFieldsValue(window, fields);
	return true;
}

function purchaseTypeFields(keys, show) {
	return getTFields("purchaseTypeField", keys, show);
}
function purchaseTypeField(key) {
	var f;
	switch (key) {
	case "day1":
	case "发生日期从":
		f = new TField("发生日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 1, "2015-9-15");
		break;
	case "type":
	case "类别":
		f = new TField("类别", TF_SC, 2, "登山服");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 按订货入库
function testPurchaseOrderFields() {
	var keys = [ "day1", "day2", "provider", "code" ];
	var fields = purchaseOrderFields(keys);
	setTFieldsValue(window, fields);
	var showFields = purchaseOrderFields(keys, true);
	return checkShowFields(window, showFields);
}

function purchaseOrderFields(keys, show) {
	return getTFields("purchaseOrderField", keys, show);
}
function purchaseOrderField(key, show) {
	var f;
	switch (key) {
	case "day1":
	case "日期从":
		f = new TField("日期从", TF_DT, 0, "2015-9-11");
		break;
	case "day2":
	case "到":
		f = new TField("到", TF_DT, 1, "2015-9-15");
		break;
	case "provider":
	case "供应商":
		f = new TField("供应商", TF_AC, 2, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	case "code":
	case "款号":
		f = new TField("款号", TF_AC, 3, "b", 1, 0);
		if (show) {
			f.value = "741,Abc,44元";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

//批量入库
function testPurchaseBatchEditFields() {
	var keys = [ "staff" ];
	var fields = purchaseBatchEditFields(keys);
	setTFieldsValue(window, fields);
	var showFields = purchaseBatchEditFields(keys, true);
	return checkShowFields(window, showFields);
}

function purchaseBatchEditFields(keys, show) {
	return getTFields("purchaseBatchEditField", keys, show);
}
function purchaseBatchEditField(key, show) {
	var f;
	switch (key) {
	case "staff":
	case "店员":
		f = new TField("店员", TF_AC, 0, "000", -1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 厂商总账
function testPurchaseProviderAccountFields() {
	var keys = [ "provider" ];
	var fields = purchaseProviderAccountFields(keys);
	setTFieldsValue(window, fields);
	var showFields = purchaseProviderAccountFields(keys, true);
	return checkShowFields(window, showFields);
}

function purchaseProviderAccountFields(keys, show) {
	return getTFields("purchaseProviderAccountField", keys, show);
}
function purchaseProviderAccountField(key, show) {
	var f;
	switch (key) {
	case "provider":
	case "厂商":
		f = new TField("厂商", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 厂商门店账
function testPurchaseShopAccountFields() {
	var keys = [ "provider", "shop" ];
	var fields = purchaseShopAccountFields(keys);
	setTFieldsValue(window, fields);
	var showFields = purchaseShopAccountFields(keys, true);
	return checkShowFields(window, showFields);
}

function purchaseShopAccountFields(keys, show) {
	return getTFields("purchaseShopAccountField", keys, show);
}
function purchaseShopAccountField(key, show) {
	var f;
	switch (key) {
	case "provider":
	case "厂商":
		f = new TField("厂商", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	case "shop":
	case "门店":
		f = new TField("门店", TF_SC, 1, "常青店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}