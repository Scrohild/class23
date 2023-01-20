var nameList = [
	"敖贤超", "白子怡", "才心语", "陈雨欣", "冯麒文",
	"付佳堃", "富妍", "高莞约", "高航", "高鑫雨",
	"郭恒宇", "贾天翔", "贾鑫雨", "贾宇航", "冷卓越",
	"李庚", "李明浩", "李师震", "李学淼", "刘学",
	"陆畅", "裴爽", "裴悦天", "钱子涛", "孙奇国",
	"孙熙伦", "王皓", "王帅", "王思奇", "王思桐",
	"王天琦", "王依诺", "吴娜", "吴泽昊", "荀佳欣",
	"杨贺然", "杨金澎", "张楚研", "张国祎", "张睿怡",
	"张思文", "张雯博", "赵美辰", "郑希桐", "支靖淏",
	"朱佳琪", "左家宁"
];
var countList = [];
var randomList = [];
var randomIndex = 0;
// 初始化计次
for (let i = 0; i < nameList.length; i ++) {
	countList[i] = 0;
}
// 初始化随机抽签
for (let i in nameList) {
	randomList[i] = nameList[i];
}
for (let i = 0; i < 1000; i ++) {
	let j = Math.trunc(47 * Math.random());
	let temp = randomList[0];
	randomList[0] = randomList[j];
	randomList[j] = temp;
}

function setMode(mode) {
	var nav1 = document.getElementsByClassName("nav-1");
	var nav2 = document.getElementsByClassName("nav-2");
	
	for (let i = 0; i < nav1.length; i ++) {
		nav1[i].style.backgroundColor = "#00aaff";
	}
	for (let i = 0; i < nav2.length; i ++) {
		nav2[i].style.textIndent = "0px";
	}
	document.getElementById("nav-" + mode + "-1").style.backgroundColor = "#aa0044";
	document.getElementById("nav-" + mode + "-2").style.textIndent = "1.2em";
	
	document.getElementById("main-inner").src = mode + ".html"
}

function draw1() {
	let index = Math.trunc(47 * Math.random());
	countList[index] ++;
	document.getElementById("result").innerHTML = nameList[index];
	document.getElementById("result").innerHTML += "<br>";
	document.getElementById("result").innerHTML += nameList[index] + "已被抽" + countList[index] + "次";
	
	var ranking = [];
	let max = Math.max(...countList);
	for (let i = max; i >= 0; i --) {
		for (let j = 0; j < countList.length; j ++) {
			if (countList[j] == i) {
				ranking[ranking.length] = {
					"name" : nameList[j],
					"times" : i
				};
			}
		}
	}
	
	let table = document.getElementById("table");
	table.innerHTML = "<div class='tr' id='tr-0'></div>";
	document.getElementById("tr-0").innerHTML = "<div class='td-1'>序号</div>";
	document.getElementById("tr-0").innerHTML += "<div class='td-2'>姓名</div>";
	document.getElementById("tr-0").innerHTML += "<div class='td-3'>次数</div>";
	
	for (let i in ranking) {
		let index = Number(i) + 1;
		table.innerHTML += "<div class='tr' id='tr-" + index + "'></div>";
		document.getElementById("tr-" + index).innerHTML = "<div class='td-1'>" + index + "</div>";
		document.getElementById("tr-" + index).innerHTML += "<div class='td-2'>" + ranking[i].name + "</div>";
		document.getElementById("tr-" + index).innerHTML += "<div class='td-3'>" + ranking[i].times + "</div>";
	}
}

function draw2() {
	document.getElementById("result").innerHTML = randomIndex + 1 + "." + randomList[randomIndex];
	randomIndex ++;
	if (randomIndex == randomList.length + 1) {
		window.alert("已经抽完了\n点击'确定'重新排序开始");
		reRandom();
	}
}
function reRandom () {
	for (let i in nameList) {
		randomList[i] = nameList[i];
	}
	for (let i = 0; i < 1000; i ++) {
		let j = Math.trunc(47 * Math.random());
		let temp = randomList[0];
		randomList[0] = randomList[j];
		randomList[j] = temp;
	}
	
	randomIndex = 0;
	document.getElementById("result").innerHTML = "";
}

function draw3 () {
	if (Math.random() > 0.7) {
		document.getElementById("result").innerHTML = "再来一次";
	}else {
		document.getElementById("result").innerHTML = "杨金澎";
	}
}

function draw4 () {
	let i = Math.trunc(100 * Math.random())
	document.getElementById("result").innerHTML = i;
}