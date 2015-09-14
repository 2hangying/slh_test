//客户分店
function testCustomerBranchFields() {
	var keys = [ "name", "mobile", "stop" ];
	var fields = customerBranchFields(keys);
	setTFieldsValue(getView(1), fields);
	var showFields = customerBranchFields(keys, true);
	return checkShowFields(getView(1), showFields);
}

function customerBranchFields(keys, show) {
	return getTFields("customerBranchField", keys, show);
}

function customerBranchField(key, show) {
	var f;
	switch (key) {
	case "name":
		f = new TField("名称", TF, 0, "a");
		break;
	case "mobile":
		f = new TField("手机", TF, 1, "123456789");
		break;
	case "stop":
		f = new TField("是否停用", TF_SC, 2, "否");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增分店
function testBranchAddFields() {
	var keys = [ "name", "mobile", "weixin", "address", "remarks" ];
	var fields = branchAddFields(keys);
	setTFieldsValue(window, fields);
	var showFields = branchAddFields(keys, true);
	return checkShowFields(window, showFields);
}

function branchAddFields(keys, show) {
	return getTFields("branchAddField", keys, show);
}

function branchAddField(key, show) {
	var f;
	switch (key) {
	case "name":
		f = new TField("名称", TF, 0, "a");
		break;
	case "mobile":
		f = new TField("电话", TF, 1, "123456789");
		break;
	case "weixin":
		f = new TField("微信", TF, 2, "qwe123");
		break;
	case "address":
		f = new TField("地址", TF, 3, "地址");
		break;
	case "remarks":
		f = new TField("备注", TF, 4, "备注");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增客户
function editCustomerFields(keys, show) {
	return getTFields("editCustomerField", keys, show);
}

function testCustomerAdd() {
	// "super",
	var keys = [ "name", "shop", "birthday", "staff", "type", "return",
			"price", "mobile", "weixin", "fax", "address", "remarks",
			"discount", "credit", "alarm" ];
	var fields = editCustomerFields(keys);
	setTFieldsValue(getView(), fields);
	// debugElements(getView());
	var showFields = editCustomerFields(keys, true);
	return checkShowFields(getView(), showFields);
}

function editCustomerField(key, show) {
	var f;
	switch (key) {
	case "name":
		f = new TField("名称", TF, 1, "a");
		break;
	case "area":
		f = new TField("区域", BTN_SC, 0, "供应商");
		if (show) {
			f.type = TF;
			f.index = 2;
		}
		break;
	case "shop":
		f = new TField("门店", BTN_SC, 1, "常青店");
		if (show) {
			f.type = TF;
			f.index = 3;
		}
		break;
	case "birthday":
		f = new TField("生日", TF_DT, 4, "1980-09-10");
		break;
	case "staff":
		f = new TField("店员", TF, 5, "000");
		if (show) {
			// e.value = "000,管理员";
		}
		break;
	case "super":
		f = new TField("上级客户", TF_AC, 6, "b", 3, 0);
		if (show) {
			f.value = "Yvb";
		}
		break;
	case "type":
		f = new TField("客户类别", BTN_SC, 2, "零批客户");
		if (show) {
			f.type = TF;
			f.index = 7;
		}
		break;
	case "return":
		f = new TField("允许退货", BTN_SC, 4, "是");
		if (show) {
			f.type = TF;
			f.index = 9;
		}
		break;
	case "price":
		f = new TField("适用价格", BTN_SC, 5, "零批价");
		if (show) {
			f.type = TF;
			f.index = 11;
		}
		break;
	case "mobile":
		f = new TField("手机", TF, 12, "123456789");
		break;
	case "weixin":
		f = new TField("微信", TF, 13, "x123456");
		break;
	case "fax":
		f = new TField("传真号", TF, 14, "55555");
		break;
	case "address":
		f = new TField("地址", TF, 15, "地址");
		break;
	case "remarks":
		f = new TField("备注", TF, 16, "123");
		break;
	case "discount":
		f = new TField("拿货折扣", TF, 17, "0.9");
		break;
	case "credit":
		f = new TField("信用额度", TF, 18, "10000");
		break;
	case "alarm":
		f = new TField("欠款报警", TF, 19, "5000");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 客户门店账
function testQueryCustomerShopAccountFields() {
	var keys = [ "name", "customer", "shop", "staff", "type", "debt", "alarm" ];
	var fields = queryCustomerShopAccountFields(keys);
	setTFieldsValue(window, fields);
	// debugElements(window);
	var showFields = queryCustomerShopAccountFields(keys, true);
	return checkShowFields(window, showFields);
}

function queryCustomerShopAccountFields(keys, show) {
	return getTFields("queryCustomerShopAccountField", keys, show);
}
function queryCustomerShopAccountField(key, show) {
	var f;
	switch (key) {
	case "name":
		f = new TField("客户名称", TF, 0, "a");
		break;
	case "customer":
		f = new TField("客户", TF_AC, 1, "a", 1, 0);
		if (show) {
			f.value = "Qaq";
		}
		break;
	case "shop":
		f = new TField("门店", TF_SC, 2, "仓库店");
		break;
	case "staff":
		f = new TField("店员", TF_AC, 3, "000", 1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	case "type":
		f = new TField("类别", TF_SC, 4, "零批客户");
		break;
	case "debt":
		f = new TField("是否欠款", TF_SC, 5, "否");
		break;
	case "alarm":
		f = new TField("是否欠款报警", TF_SC, 6, "否");
		break;

	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 客户总账
function testQueryCustomerAccountFields() {
	var keys = [ "name", "customer" ]
	var fields = queryCustomerAccountFields(keys);
	setTFieldsValue(window, fields);
	var showFields = queryCustomerAccountFields(keys, true);
	return checkShowFields(window, showFields);
}

function queryCustomerAccountFields(keys, show) {
	return getTFields("queryCustomerAccountField", keys, show);
}
function queryCustomerAccountField(key, show) {
	var f;
	switch (key) {
	case "name":
		f = new TField("客户名称", TF, 0, "a");
		break;
	case "customer":
		f = new TField("客户", TF_AC, 1, "a", 1, 0);
		if (show) {
			f.value = "Qaq";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 客户活跃度
function testQueryCustomerActiveFields() {
	var keys = [ "customer", "staff", "shop" ];
	var fields = queryCustomerActiveFields(keys);
	setTFieldsValue(window, fields);
	var showFields = queryCustomerActiveFields(keys, true);
	return checkShowFields(window, showFields);
}

function queryCustomerActiveFields(keys, show) {
	return getTFields("queryCustomerActiveField", keys, show);
}
function queryCustomerActiveField(key, show) {
	var f;
	switch (key) {
	case "customer":
		f = new TField("客户", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "Qaq";
		}
		break;
	case "staff":
		f = new TField("店员", TF_AC, 1, "000", 1, 0);
		if (show) {
			f.value = "000,管理员";
		}
		break;
	case "shop":
		f = new TField("门店", TF_SC, 2, "仓库店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 积分查询
function testQueryScoreFields() {
	var keys = [ "shop", "customer", "mobile" ];
	var fields = queryScoreFields(keys);
	setTFieldsValue(window, fields);
	var showFields = queryScoreFields(keys, true);
	return checkShowFields(window, showFields);
}

function queryScoreFields(keys, show) {
	return getTFields("queryScoreField", keys, show);
}
function queryScoreField(key, show) {
	var f;
	switch (key) {
	case "shop":
		f = new TField("门店", TF_SC, 0, "仓库店");
		break;
	case "customer":
		f = new TField("客户", TF_AC, 1, "a", 1, 0);
		if (show) {
			f.value = "Qaq";
		}
		break;
	case "mobile":
		f = new TField("手机", TF, 2, "123456789");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 厂商查询
function testQueryProviderFields() {
	var keys = [ "provider", "mobile", "stop" ];
	var fields = queryProviderFields(keys);
	setTFieldsValue(window, fields);
	var showFields = queryProviderFields(keys, true);
	return checkShowFields(window, showFields);
}

function queryProviderFields(keys, show) {
	return getTFields("queryProviderField", keys, show);
}
function queryProviderField(key, show) {
	var f;
	switch (key) {
	case "provider":
		f = new TField("厂商", TF_AC, 0, "a", 1, 0);
		if (show) {
			f.value = "aa";
		}
		break;
	case "mobile":
		f = new TField("手机", TF, 1, "123456789");
		break;
	case "stop":
		f = new TField("是否停用", TF_SC, 2, "否");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增厂商
function testEditProviderFields() {
	var keys = [ "name", "mobile", "address", "price", "remarks" ];
	var fields = editProviderFields(keys);
	setTFieldsValue(getView(), fields);
	// debugElements(getView());
	var showFields = editProviderFields(keys, true);
	return checkShowFields(getView(), showFields);
}

function editProviderFields(keys, show) {
	return getTFields("editProviderField", keys, show);
}
function editProviderField(key, show) {
	var f;
	switch (key) {
	case "name":
		f = new TField("名称", TF, 0, "a");
		break;
	case "mobile":
		f = new TField("手机", TF, 1, "123456789");
		break;
	case "address":
		f = new TField("地址", TF, 2, "地址");
		break;
	case "price":
		f = new TField("适用价格", BTN_SC, 0, "打包价");
		if (show) {
			f.type = TF;
			f.index = 3;
		}
		break;
	case "remarks":
		f = new TField("备注", TV, 0, "备注");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 厂商门店帐
function testQueryProviderShopAccountFields() {
	var keys=["provider", "shop"];
	var fields = queryProviderShopAccountFields(keys);
	setTFieldsValue(window, fields);
	var showFields=queryProviderShopAccountFields(keys,true);
	return checkShowFields=(window,showFields);
}

function queryProviderShopAccountFields(keys,show) {
	return getTFields("queryProviderShopAccountField", keys,show);
}
function queryProviderShopAccountField(key,show) {
	var f;
	switch (key) {
	case "provider":
		f = new TField("厂商", TF_AC, 0, "a", 1, 0);
		if(show){
			f.value="aa";
			}
		break;
	case "shop":
		f = new TField("门店", TF_SC, 1, "常青店");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 导出对账单
function testExportFields() {
	var fields = exportFields("day1","day2");
	setTFieldsValue(window, fields);
	return true;
}

function exportFields() {
	return getTFields("exportField", arguments);
}
function exportField(key) {
	var f;
	switch (key) {
	case "day1":
		f = new TField("日期从", TF_DT, 2, "2015-8-14");
		break;	
	case "day2":
		f = new TField("到", TF_DT, 3, "2015-9-14");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}



// 厂商总帐
function testQueryProviderAccountFields() {
	var keys=["provider"];
	var fields = queryProviderAccountFields(keys);
	setTFieldsValue(window, fields);
	var showFields=queryProviderAccountFields(keys,true);
	return checkShowFields=(window,showFields);
}

function queryProviderAccountFields(keys,show) {
	return getTFields("queryProviderAccountField", keys,show);
}
function queryProviderAccountField(key,show) {
	var f;
	switch (key) {
	case "provider":
		f = new TField("厂商", TF_AC, 0, "a", 1, 0);
		if(show){
			f.value="aa";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 物流商查询
function testQueryLogisticsFields() {
	var keys=["name", "mobile", "shop", "stop"];
	var fields = queryLogisticsFields(keys);
	setTFieldsValue(window, fields);
	var showFields=queryLogisticsFields(keys,true);
	return checkShowFields=(window,showFields);
}

function queryLogisticsFields(keys,show) {
	return getTFields("queryLogisticsField", keys,show);
}
function queryLogisticsField(key,show) {
	var f;
	switch (key) {
	case "name":
		f = new TField("名称", TF, 0, "a");
		break;
	case "staff":
		f = new TField("店员", TF_AC, 1, "000", 1, 0);
		if(show){
			f.value="000，管理员";
		}
		break;
	case "mobile":
		f = new TField("手机", TF, 2, "123456789");
		break;
	case "shop":
		f = new TField("门店", TF_SC, 3, "常青店");
		break;
	case "stop":
		f = new TField("是否停用", TF_SC, 4, "否");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增物流商
function testAddLogisticsFields() {
	var keys = [ "name", "staff", "mobile", "post", "address", "account",
			"shop" ];
	var fields = addLogisticsFields(keys);
	setTFieldsValue(getView(), fields);
	var showFields = addLogisticsFields(keys, true);
	return checkShowFields(getView(), showFields);
}

function addLogisticsFields(keys, show) {
	return getTFields("addLogisticsField", keys, show);
}
function addLogisticsField(key, show) {
	var f;
	switch (key) {
	case "name":
		f = new TField("名称", TF, 0, "a");
		break;
	case "staff":
		f = new TField("经办人", TF_AC, 1, "000",2,0);
		if(show){
			f.value = "000,管理员";
		}
		break;
	case "area":
		f = new TField("区域", BTN_SC, 0, "供应商");
		if (show) {
			f.type = TF;
			f.index = 2;
		}
		break;
	case "mobile":
		f = new TField("电话", TF, 3, "123456789");
		break;
	case "post":
		f = new TField("邮编", TF, 4, "310000");
		break;
	case "address":
		f = new TField("地址", TF, 5, "地址");
		break;
	case "account":
		f = new TField("账号", TF, 6, "abc");
		break;
	case "shop":
		f = new TField("门店", BTN_SC, 1, "常青店");
		if (show) {
			f.type = TF;
			f.index = 7;
		}
		break;
	case "remarks":
		f = new TField("备注", TF, 8, "备注");
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 客户回访
function testQueryCustomerBackFields() {
	var keys=["day1", "day2", "customer", "theme","advice", "staff"];
	var fields = queryCustomerBackFields(keys);
	setTFieldsValue(window, fields);
	var showFields=queryCustomerBackFields(keys,true);
	return checkShowFields(window,showFields);
}

function queryCustomerBackFields(keys,show) {
	return getTFields("queryCustomerBackField", keys,show);
}
function queryCustomerBackField(key,show) {
	var f;
	switch (key) {
	case "day1":
		f = new TField("回访日期从", TF_DT, 0, "2015-09-10");
		break;
	case "day2":
		f = new TField("到", TF_DT, 1, "2015-09-10");
		break;
	case "customer":
		f = new TField("客户", TF_AC, 2, "a", 1, 0);
		if(show){
			f.value="Qaq";
		}
		break;
	case "theme":
		f = new TField("主题", TF, 3, "主题");
		break;
	case "advice":
		f = new TField("反馈及建议", TF, 4, "反馈及建议");
		break;
	case "staff":
		f = new TField("经办人", TF_AC, 5, "000", 1, 0);
		if(show){
			f.value="000,管理员";
		}
		break;
	default:
		logWarn("未知key＝" + key);
	}
	return f;
}

// 新增回访
function testAddCustomerBackFields() {
	var keys = [ "day", "customer", "staff", "back", "theme", "advice" ];
	var fields = addCustomerBackFields(keys);
	setTFieldsValue(getView(), fields);
	var showFields = addCustomerBackFields(keys, true);
	return checkShowFields(getView(), showFields);
}

function addCustomerBackFields(keys, show) {
	return getTFields("addCustomerBackField", keys, show);
}
function addCustomerBackField(key, show) {
	var f;
	switch (key) {
	case "day":
		f = new TField("回访日期", TF_DT, 0, "2015-09-10");
		break;
	case "customer":
		f = new TField("客户", TF_AC, 1, "a", 1, 0);
		if(show){
			f.value="Qaq";
		}
		break;
	case "staff":
		f = new TField("经办人", TF_AC, 2, "000", 1, 0);
		if(show){
			f.value="000,管理员";
		}
		break;
	case "back":
		f = new TField("回访类型", BTN_SC, 0, "售后回访");
		if (show) {
			f.type = TF;
			f.index = 3;
		}
		break;
	case "theme":
		f = new TField("主题", TF, 4, "主题");
		break;
	case "advice":
		f = new TField("反馈及建议", TV, 0, "反馈及建议");
		break;

	default:
		logWarn("未知key＝" + key);
	}
	return f;
}
