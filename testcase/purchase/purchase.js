//LuXingXin <52619481 at qq.com> 20150930

function testPurchaseAll() {
	// run("按批次查", "testPurchaseQueryBatch");
	// run("按金额汇总", "testPurchasePrice");
	// run("按款号汇总", "testPurchaseCode");
	// run("按厂商返货", "testPurchaseProviderReturn");
	// run("按厂商汇总", "testPurchaseProvider");
	 run("按类别汇总", "testPurchaseType");
	// run("新增入库", "testPurchaseEdit");
//	run("批量入库", "testPurchaseBatchEdit");

}

function testPurchaseQueryBatch() {
	var ret = true;
	var m1, m2, n1, n2;
	tapMenu("货品管理", "当前库存");
	var keys = [ "款号" ];
	var fields = queryGoodsStockFields(keys);
	changeTFieldValue(fields["款号"], "k300");
	query(fields);
	// delay();
	var expected = {
		"款号" : "k300",
		"颜色" : "均色",
		"尺码" : "均码"
	};
	var qr = getQResult();
	var index = getIndexEqualsQRData1(qr, expected);
	m1 = qr.data[index]["库存"];

	tapMenu("采购入库", "厂商账款", "厂商总账");
	var keys1 = [ "厂商" ];
	var fields1 = purchaseProviderAccountFields(keys1);
	changeTFieldValue(fields1["厂商"], "cscs1");
	query(fields1);
	var qr1 = getQResult();

	n1 = qr1.data[0]["余额"];

	tapMenu("采购入库", "按批次查");
	query();

	var ret = true;
	ret = ret && sortByTitle("批次", IS_NUM);
	// ret = ret && sortByTitle("日期");
	// ret = ret && sortByTitle("厂商");
	// ret = ret && sortByTitle("店员");
	ret = ret && sortByTitle("总数", IS_NUM);
	ret = ret && sortByTitle("金额", IS_NUM);
	ret = ret && sortByTitle("现金", IS_NUM);
	ret = ret && sortByTitle("刷卡", IS_NUM);
	ret = ret && sortByTitle("汇款", IS_NUM);
	// ret = ret && sortByTitle("订货号");
	// ret = ret && sortByTitle("操作日期");
	// ret = ret && sortByTitle("备注");
	// ret = ret && sortByTitle("操作人");

	// 做欠款入库单
	tapMenu("采购入库", "新增入库+");
	var json = {
		"客户" : "cscs1",
		"明细" : [ {
			"货品" : "k300",
			"数量" : "5"
		} ],
		"现金" : "0"
	};
	editSalesBillNoColorSize(json);

	// 作废
	tapFirstText(getScrollView(), TITLE_SEQ);
	tapButton(window, "作 废");
	tapPrompt();
	tapPrompt();
	tapButton(window, RETURN);

	tapMenu("货品管理", "当前库存");
	var keys2 = [ "款号" ];
	var fields2 = queryGoodsStockFields(keys2);
	changeTFieldValue(fields2["款号"], "k300");
	query(fields2);
	var qr2 = getQResult();
	m2 = qr2.data[index]["库存"];
	if (m1 != m2) {
		ret = false;
	}

	tapMenu("采购入库", "厂商账款", "厂商总账");
	var keys3 = [ "厂商" ];
	var fields3 = purchaseProviderAccountFields(keys3);
	changeTFieldValue(fields3["厂商"], "cscs1");
	query(fields3);
	var qr3 = getQResult();
	n2 = qr3.data[0]["余额"];
	if (n1 != n2) {
		ret = false;
	}

	return ret;
}

function testPurchasePrice() {
	tapMenu("采购入库", "按汇总", "按金额汇总");

	var keys = [ "日期从" ];
	var fields = purchasePriceFields(keys);
	changeTFieldValue(fields["日期从"], "2015-09-08");
	query(fields);
	var qr = getQResult();
	var actual = 0, actual1 = 0, actual2 = 0;
	var totalPageNo = qr.totalPageNo;
	for (var j = 1; j <= totalPageNo; j++) {
		for (var i = 0; i < qr.curPageTotal; i++) {
			actual += Number(qr.data[i]["现金"]);
			actual1 += Number(qr.data[i]["刷卡"]);
			actual2 += Number(qr.data[i]["汇款"]);
		}
		if (j < totalPageNo) {
			scrollNextPage();
			qr = getQResult();
		}
	}
	var ret = false;
	if (actual == qr.counts["现金"] && actual1 == qr.counts["刷卡"]
			&& actual2 == qr.counts["汇款"]) {
		ret = true;
	}
	return ret;
}

function testPurchaseCode() {
	tapMenu("采购入库", "按汇总", "按款号汇总");

	var keys = [ "发生日期从" ];
	var fields = purchaseCodeFields(keys);
	changeTFieldValue(fields["发生日期从"], "2015-09-08");
	query(fields);
	var qr = getQResult();
	var actual = 0, actual1 = 0, actual2 = 0;
	var ret1 = true;
	var totalPageNo = qr.totalPageNo;
	for (var j = 1; j <= totalPageNo; j++) {
		for (var i = 0; i < qr.curPageTotal; i++) {
			actual += Number(qr.data[i]["数量"]);
			actual1 += Number(qr.data[i]["拿货数"]);
			actual2 += Number(qr.data[i]["退货数"]);
			if (Number(qr.data[i]["数量"]) != Number(qr.data[i]["拿货数"])
					- Number(qr.data[i]["退货数"])) {
				ret1 = false;
			}
		}
		if (j < totalPageNo) {
			scrollNextPage();
			qr = getQResult();
		}
	}
	var ret = false;
	if (actual == qr.counts["数量"] && actual1 == qr.counts["拿货数"]
			&& actual2 == qr.counts["退货数"]) {
		ret = true;
	}
	return ret && ret1;
}

function testPurchaseProviderReturn() {
	tapMenu("采购入库", "按汇总", "按厂商返货");

	var keys = [ "款号", "日期从" ];
	var fields = purchaseProviderReturnFields(keys);
	changeTFieldValue(fields["款号"], "qqqqqq");
	changeTFieldValue(fields["日期从"], "2015-10-08");
	query(fields);
	var qr = getQResult();
	var ret = false;
	if (qr.data[0]["数量"] == qr.counts["数量"]) {
		ret = true;
	}
	return ret && isEqualQRData1ByTitle(qr, "名称", "qqq");
}

function testPurchaseProvider() {
	tapMenu("采购入库", "按汇总", "按厂商汇总");
	
	var keys = [ "日期从", "到" ];
	var fields = purchaseProviderFields(keys);
	changeTFieldValue(fields["日期从"], "2015-10-08");
	changeTFieldValue(fields["到"], "2015-10-08");
	query(fields);
	var qr = getQResult();
	var actual = 0, actual1 = 0, actual2 = 0, actual3 = 0;
	var totalPageNo = qr.totalPageNo;
	for (var j = 1; j <= totalPageNo; j++) {
		for (var i = 0; i < qr.curPageTotal; i++) {
			actual += Number(qr.data[i]["现金"]);
			actual1 += Number(qr.data[i]["进货数"]);
			actual2 += Number(qr.data[i]["退货数"]);
			actual3 += Number(qr.data[i]["实进数"]);
		}
		if (j < totalPageNo) {
			scrollNextPage();
			qr = getQResult();
		}
	}
	var ret = false;
	if (actual == qr.counts["现金"] && actual1 == qr.counts["进货数"]
			&& actual2 == qr.counts["退货数"] && actual3 == qr.counts["实进数"]) {
		ret = true;
	}
	return ret;
}

function testPurchaseType() {
	tapMenu("采购入库", "按汇总", "按类别汇总");

	var keys = [ "发生日期从", "类别" ];
	var fields = purchaseTypeFields(keys);
	changeTFieldValue(fields["发生日期从"], "2015-10-08");
	query(fields);
	var qr = getQResult();
	var actual = 0;
	var totalPageNo = qr.totalPageNo;
	for (var j = 1; j <= totalPageNo; j++) {
		for (var i = 0; i < qr.curPageTotal; i++) {
			actual += Number(qr.data[i]["数量"]);
		}
		if (j < totalPageNo) {
			scrollNextPage();
			qr = getQResult();
		}
	}
	var ret = false;
	if (actual == qr.counts["数量"]) {
		ret = true;
	}
	return ret && isEqualQRData1ByTitle(qr, "类别", "登山服");
}

function testPurchaseEdit() {
	tapMenu("采购入库", "新增入库+");
	var json = {
		"客户" : "cscs1",
		"明细" : [ {
			"货品" : "k300",
			"数量" : "5"
		} ],
		"现金" : "0"
	};
	editSalesBillNoColorSize(json);

	tapMenu("采购入库", "按批次查");

}

function testPurchaseBatchEdit() {
	tapMenu("采购入库", "批量入库+");
	delay();
	var keys = [ "店员" ];
	var fields = purchaseBatchEditFields(keys);
	setTFieldsValue(window, fields);
	
//	var f1 = new TField("货品", TF_AC, 1, "k300", -1, 0);
//	var f4 = new TField("数量", TF, 4, "5");
//	var fields = [ f1, f4 ];
//	setTFieldsValue(getScrollView(), fields);
//	
//	tapButton(window, SAVE);
//	tapPrompt();
//	var cond = "!isAlertVisible()";
//	waitUntil(cond, 9);
//
//	tapButton(window, RETURN);

}