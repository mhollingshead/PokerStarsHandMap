var sittings = [];
var username;
var pHands = [];
var data = [
  {"hand": "AAo", "pm": 0.00, "times": 0, "odds": 0.693},
  {"hand": "AKs", "pm": 0.00, "times": 0, "odds": 0.425},
  {"hand": "AQs", "pm": 0.00, "times": 0, "odds": 0.393},
  {"hand": "AJs", "pm": 0.00, "times": 0, "odds": 0.363},
  {"hand": "ATs", "pm": 0.00, "times": 0, "odds": 0.339},
  {"hand": "A9s", "pm": 0.00, "times": 0, "odds": 0.313},
  {"hand": "A8s", "pm": 0.00, "times": 0, "odds": 0.305},
  {"hand": "A7s", "pm": 0.00, "times": 0, "odds": 0.296},
  {"hand": "A6s", "pm": 0.00, "times": 0, "odds": 0.285},
  {"hand": "A5s", "pm": 0.00, "times": 0, "odds": 0.296},
  {"hand": "A4s", "pm": 0.00, "times": 0, "odds": 0.284},
  {"hand": "A3s", "pm": 0.00, "times": 0, "odds": 0.277},
  {"hand": "A2s", "pm": 0.00, "times": 0, "odds": 0.277},

  {"hand": "AKo", "pm": 0.00, "times": 0, "odds": 0.396},
  {"hand": "KKo", "pm": 0.00, "times": 0, "odds": 0.626},
  {"hand": "KQs", "pm": 0.00, "times": 0, "odds": 0.355},
  {"hand": "KJs", "pm": 0.00, "times": 0, "odds": 0.341},
  {"hand": "KTs", "pm": 0.00, "times": 0, "odds": 0.321},
  {"hand": "K9s", "pm": 0.00, "times": 0, "odds": 0.302},
  {"hand": "K8s", "pm": 0.00, "times": 0, "odds": 0.285},
  {"hand": "K7s", "pm": 0.00, "times": 0, "odds": 0.28},
  {"hand": "K6s", "pm": 0.00, "times": 0, "odds": 0.273},
  {"hand": "K5s", "pm": 0.00, "times": 0, "odds": 0.263},
  {"hand": "K4s", "pm": 0.00, "times": 0, "odds": 0.26},
  {"hand": "K3s", "pm": 0.00, "times": 0, "odds": 0.256},
  {"hand": "K2s", "pm": 0.00, "times": 0, "odds": 0.255},

  {"hand": "AQo", "pm": 0.00, "times": 0, "odds": 0.361},
  {"hand": "KQo", "pm": 0.00, "times": 0, "odds": 0.327},
  {"hand": "QQo", "pm": 0.00, "times": 0, "odds": 0.569},
  {"hand": "QJs", "pm": 0.00, "times": 0, "odds": 0.322},
  {"hand": "QTs", "pm": 0.00, "times": 0, "odds": 0.302},
  {"hand": "Q9s", "pm": 0.00, "times": 0, "odds": 0.285},
  {"hand": "Q8s", "pm": 0.00, "times": 0, "odds": 0.269},
  {"hand": "Q7s", "pm": 0.00, "times": 0, "odds": 0.257},
  {"hand": "Q6s", "pm": 0.00, "times": 0, "odds": 0.251},
  {"hand": "Q5s", "pm": 0.00, "times": 0, "odds": 0.243},
  {"hand": "Q4s", "pm": 0.00, "times": 0, "odds": 0.236},
  {"hand": "Q3s", "pm": 0.00, "times": 0, "odds": 0.235},
  {"hand": "Q2s", "pm": 0.00, "times": 0, "odds": 0.23},

  {"hand": "AJo", "pm": 0.00, "times": 0, "odds": 0.328},
  {"hand": "KJo", "pm": 0.00, "times": 0, "odds": 0.314},
  {"hand": "QJo", "pm": 0.00, "times": 0, "odds": 0.289},
  {"hand": "JJo", "pm": 0.00, "times": 0, "odds": 0.517},
  {"hand": "JTs", "pm": 0.00, "times": 0, "odds": 0.30},
  {"hand": "J9s", "pm": 0.00, "times": 0, "odds": 0.288},
  {"hand": "J8s", "pm": 0.00, "times": 0, "odds": 0.268},
  {"hand": "J7s", "pm": 0.00, "times": 0, "odds": 0.254},
  {"hand": "J6s", "pm": 0.00, "times": 0, "odds": 0.24},
  {"hand": "J5s", "pm": 0.00, "times": 0, "odds": 0.241},
  {"hand": "J4s", "pm": 0.00, "times": 0, "odds": 0.231},
  {"hand": "J3s", "pm": 0.00, "times": 0, "odds": 0.229},
  {"hand": "J2s", "pm": 0.00, "times": 0, "odds": 0.227},

  {"hand": "ATo", "pm": 0.00, "times": 0, "odds": 0.308},
  {"hand": "KTo", "pm": 0.00, "times": 0, "odds": 0.291},
  {"hand": "QTo", "pm": 0.00, "times": 0, "odds": 0.268},
  {"hand": "JTo", "pm": 0.00, "times": 0, "odds": 0.268},
  {"hand": "TTo", "pm": 0.00, "times": 0, "odds": 0.452},
  {"hand": "T9s", "pm": 0.00, "times": 0, "odds": 0.282},
  {"hand": "T8s", "pm": 0.00, "times": 0, "odds": 0.268},
  {"hand": "T7s", "pm": 0.00, "times": 0, "odds": 0.25},
  {"hand": "T6s", "pm": 0.00, "times": 0, "odds": 0.237},
  {"hand": "T5s", "pm": 0.00, "times": 0, "odds": 0.223},
  {"hand": "T4s", "pm": 0.00, "times": 0, "odds": 0.217},
  {"hand": "T3s", "pm": 0.00, "times": 0, "odds": 0.217},
  {"hand": "T2s", "pm": 0.00, "times": 0, "odds": 0.211},

  {"hand": "A9o", "pm": 0.00, "times": 0, "odds": 0.276},
  {"hand": "K9o", "pm": 0.00, "times": 0, "odds": 0.267},
  {"hand": "Q9o", "pm": 0.00, "times": 0, "odds": 0.248},
  {"hand": "J9o", "pm": 0.00, "times": 0, "odds": 0.256},
  {"hand": "T9o", "pm": 0.00, "times": 0, "odds": 0.252},
  {"hand": "99o", "pm": 0.00, "times": 0, "odds": 0.398},
  {"hand": "98s", "pm": 0.00, "times": 0, "odds": 0.274},
  {"hand": "97s", "pm": 0.00, "times": 0, "odds": 0.262},
  {"hand": "96s", "pm": 0.00, "times": 0, "odds": 0.247},
  {"hand": "95s", "pm": 0.00, "times": 0, "odds": 0.233},
  {"hand": "94s", "pm": 0.00, "times": 0, "odds": 0.217},
  {"hand": "93s", "pm": 0.00, "times": 0, "odds": 0.213},
  {"hand": "92s", "pm": 0.00, "times": 0, "odds": 0.211},

  {"hand": "A8o", "pm": 0.00, "times": 0, "odds": 0.267},
  {"hand": "K8o", "pm": 0.00, "times": 0, "odds": 0.249},
  {"hand": "Q8o", "pm": 0.00, "times": 0, "odds": 0.232},
  {"hand": "J8o", "pm": 0.00, "times": 0, "odds": 0.234},
  {"hand": "T8o", "pm": 0.00, "times": 0, "odds": 0.231},
  {"hand": "98o", "pm": 0.00, "times": 0, "odds": 0.239},
  {"hand": "88o", "pm": 0.00, "times": 0, "odds": 0.362},
  {"hand": "87s", "pm": 0.00, "times": 0, "odds": 0.259},
  {"hand": "86s", "pm": 0.00, "times": 0, "odds": 0.249},
  {"hand": "85s", "pm": 0.00, "times": 0, "odds": 0.234},
  {"hand": "84s", "pm": 0.00, "times": 0, "odds": 0.221},
  {"hand": "83s", "pm": 0.00, "times": 0, "odds": 0.207},
  {"hand": "82s", "pm": 0.00, "times": 0, "odds": 0.206},

  {"hand": "A7o", "pm": 0.00, "times": 0, "odds": 0.258},
  {"hand": "K7o", "pm": 0.00, "times": 0, "odds": 0.241},
  {"hand": "Q7o", "pm": 0.00, "times": 0, "odds": 0.216},
  {"hand": "J7o", "pm": 0.00, "times": 0, "odds": 0.217},
  {"hand": "T7o", "pm": 0.00, "times": 0, "odds": 0.216},
  {"hand": "97o", "pm": 0.00, "times": 0, "odds": 0.228},
  {"hand": "87o", "pm": 0.00, "times": 0, "odds": 0.228},
  {"hand": "77o", "pm": 0.00, "times": 0, "odds": 0.324},
  {"hand": "76s", "pm": 0.00, "times": 0, "odds": 0.259},
  {"hand": "75s", "pm": 0.00, "times": 0, "odds": 0.24},
  {"hand": "74s", "pm": 0.00, "times": 0, "odds": 0.227},
  {"hand": "73s", "pm": 0.00, "times": 0, "odds": 0.21},
  {"hand": "72s", "pm": 0.00, "times": 0, "odds": 0.20},

  {"hand": "A6o", "pm": 0.00, "times": 0, "odds": 0.247},
  {"hand": "K6o", "pm": 0.00, "times": 0, "odds": 0.235},
  {"hand": "Q6o", "pm": 0.00, "times": 0, "odds": 0.214},
  {"hand": "J6o", "pm": 0.00, "times": 0, "odds": 0.206},
  {"hand": "T6o", "pm": 0.00, "times": 0, "odds": 0.199},
  {"hand": "96o", "pm": 0.00, "times": 0, "odds": 0.212},
  {"hand": "86o", "pm": 0.00, "times": 0, "odds": 0.216},
  {"hand": "76o", "pm": 0.00, "times": 0, "odds": 0.222},
  {"hand": "66o", "pm": 0.00, "times": 0, "odds": 0.30},
  {"hand": "65s", "pm": 0.00, "times": 0, "odds": 0.25},
  {"hand": "64s", "pm": 0.00, "times": 0, "odds": 0.233},
  {"hand": "63s", "pm": 0.00, "times": 0, "odds": 0.22},
  {"hand": "62s", "pm": 0.00, "times": 0, "odds": 0.207},

  {"hand": "A5o", "pm": 0.00, "times": 0, "odds": 0.257},
  {"hand": "K5o", "pm": 0.00, "times": 0, "odds": 0.232},
  {"hand": "Q5o", "pm": 0.00, "times": 0, "odds": 0.207},
  {"hand": "J5o", "pm": 0.00, "times": 0, "odds": 0.201},
  {"hand": "T5o", "pm": 0.00, "times": 0, "odds": 0.186},
  {"hand": "95o", "pm": 0.00, "times": 0, "odds": 0.20},
  {"hand": "85o", "pm": 0.00, "times": 0, "odds": 0.202},
  {"hand": "75o", "pm": 0.00, "times": 0, "odds": 0.208},
  {"hand": "65o", "pm": 0.00, "times": 0, "odds": 0.217},
  {"hand": "55o", "pm": 0.00, "times": 0, "odds": 0.275},
  {"hand": "54s", "pm": 0.00, "times": 0, "odds": 0.239},
  {"hand": "53s", "pm": 0.00, "times": 0, "odds": 0.232},
  {"hand": "52s", "pm": 0.00, "times": 0, "odds": 0.217},

  {"hand": "A4o", "pm": 0.00, "times": 0, "odds": 0.25},
  {"hand": "K4o", "pm": 0.00, "times": 0, "odds": 0.222},
  {"hand": "Q4o", "pm": 0.00, "times": 0, "odds": 0.20},
  {"hand": "J4o", "pm": 0.00, "times": 0, "odds": 0.195},
  {"hand": "T4o", "pm": 0.00, "times": 0, "odds": 0.181},
  {"hand": "94o", "pm": 0.00, "times": 0, "odds": 0.18},
  {"hand": "84o", "pm": 0.00, "times": 0, "odds": 0.184},
  {"hand": "74o", "pm": 0.00, "times": 0, "odds": 0.192},
  {"hand": "64o", "pm": 0.00, "times": 0, "odds": 0.199},
  {"hand": "54o", "pm": 0.00, "times": 0, "odds": 0.209},
  {"hand": "44o", "pm": 0.00, "times": 0, "odds": 0.254},
  {"hand": "43s", "pm": 0.00, "times": 0, "odds": 0.221},
  {"hand": "42s", "pm": 0.00, "times": 0, "odds": 0.208},

  {"hand": "A3o", "pm": 0.00, "times": 0, "odds": 0.241},
  {"hand": "K3o", "pm": 0.00, "times": 0, "odds": 0.219},
  {"hand": "Q3o", "pm": 0.00, "times": 0, "odds": 0.195},
  {"hand": "J3o", "pm": 0.00, "times": 0, "odds": 0.189},
  {"hand": "T3o", "pm": 0.00, "times": 0, "odds": 0.177},
  {"hand": "93o", "pm": 0.00, "times": 0, "odds": 0.18},
  {"hand": "83o", "pm": 0.00, "times": 0, "odds": 0.17},
  {"hand": "73o", "pm": 0.00, "times": 0, "odds": 0.178},
  {"hand": "63o", "pm": 0.00, "times": 0, "odds": 0.185},
  {"hand": "53o", "pm": 0.00, "times": 0, "odds": 0.195},
  {"hand": "43o", "pm": 0.00, "times": 0, "odds": 0.188},
  {"hand": "33o", "pm": 0.00, "times": 0, "odds": 0.244},
  {"hand": "32s", "pm": 0.00, "times": 0, "odds": 0.20},

  {"hand": "A2o", "pm": 0.00, "times": 0, "odds": 0.236},
  {"hand": "K2o", "pm": 0.00, "times": 0, "odds": 0.215},
  {"hand": "Q2o", "pm": 0.00, "times": 0, "odds": 0.191},
  {"hand": "J2o", "pm": 0.00, "times": 0, "odds": 0.186},
  {"hand": "T2o", "pm": 0.00, "times": 0, "odds": 0.169},
  {"hand": "92o", "pm": 0.00, "times": 0, "odds": 0.176},
  {"hand": "82o", "pm": 0.00, "times": 0, "odds": 0.169},
  {"hand": "72o", "pm": 0.00, "times": 0, "odds": 0.161},
  {"hand": "62o", "pm": 0.00, "times": 0, "odds": 0.171},
  {"hand": "52o", "pm": 0.00, "times": 0, "odds": 0.181},
  {"hand": "42o", "pm": 0.00, "times": 0, "odds": 0.175},
  {"hand": "32o", "pm": 0.00, "times": 0, "odds": 0.169},
  {"hand": "22o", "pm": 0.00, "times": 0, "odds": 0.233}
];
var originalData = Array.from(data);
var sitNum = 0;
var topEarnings;
var luckyHand;
var topLoss;

function makeTable() {
  document.getElementById("table").innerHTML = "";
  var count = 0;

  var table = document.createElement('table');

  for (var i = 0; i < 13; i++) {
    var row = document.createElement('tr');
    for (var j = 0; j < 13; j++) {
      var td = document.createElement('td');
      td.id = data[count].hand;
      td.onclick = function () {makeHandData(this.id)};
      var text = document.createTextNode(data[count].hand[0]+data[count].hand[1]);
      var div = document.createElement('div');
      div.appendChild(text);

      if (data[count].hand[2] === "s") {
        div.style.fontWeight = 600;
      }
      div.classList.add("handLabel");

      td.appendChild(div);

      var pm = "";
      if (data[count].pm >= 0) {
        pm = "$"+data[count].pm.toFixed(2);
        if (pm.length === 4) {
          pm += "0";
        }
      }
      else {
        pm = "-$"+Math.abs(data[count].pm.toFixed(2))
        if (pm.length === 5) {
          pm += "0";
        }
      }

      text = document.createTextNode(pm);
      div = document.createElement('div');
      var span = document.createElement('span');
      span.appendChild(text);
      span.style.fontWeight = 600;
      div.appendChild(span);

      text = document.createTextNode(" | "+data[count].times);
      span = document.createElement('span');
      span.appendChild(text);
      div.appendChild(span);

      div.classList.add('pm');
      td.appendChild(div);

      if (count % 14 === 0) {
        td.classList.add('pocketPair');
      }

      var bg = getColor(data[count].pm);
      td.style.background = bg;

      row.appendChild(td);
      count++;
    }
    table.appendChild(row);
  }
  document.getElementById("table").appendChild(table);
  document.getElementById("handCount").innerHTML = getHandCount();
  topCards();
}

function parseSittings() {
  document.getElementById('site').style.display='block';
  document.getElementById("user").innerHTML = username;
  document.getElementById("sittings").innerHTML = sitNum;
  for (var i = 0; i < sittings.length; i++) {
    var pSittings = [];
    var hands = sittings[i].split("*** SUMMARY ***");
    for (var j = 0; j < hands.length; j++) {
      var hand = hands[j];
      if (j === hands.length-1) {
      }
      else {
        var balance;
        var cards;

        var s1 = username+" ($";
        var s2 = " in chips)";

        balance = hand.split(s1)[1].split(s2)[0];

        s1 = "Dealt to "+username+" [";
        s2 = "]";

        cards = hand.split(s1)[1].split(s2)[0];

        if (cards[1] === cards[4]) {
          cards = [(cards[0]+cards[3]+"s"), (cards[3]+cards[0]+"s")];
        }
        else {
          cards = [(cards[0]+cards[3]+"o"), (cards[3]+cards[0]+"o")];
        }

        pSittings.push({"balance": parseFloat(balance), "cards": cards});
      }
    }
    for (j = 0; j < pSittings.length; j++) {
      var hand = pSittings[j];
      if (pSittings[j+1]) {
        var bal1 = hand.balance;
        var bal2 = pSittings[j+1].balance;
        var pm = parseFloat((bal2-bal1).toFixed(2));
        for (var k = 0; k < 2; k++) {
          var cards = hand.cards[k];
          for (var l = 0; l < data.length; l++) {
            if (data[l].hand === cards) {
              pHands.push({"hand": cards, "pm": pm});
              data[l].pm += pm;
              data[l].times += 1;
              if (cards[0] === cards[1]) {
                k++;
              }
            }
          }
        }
      }
    }
  }
  makeTable();
}

function extractData(file, done) {
  var reader = new FileReader();
  reader.onload = function(e) {
    var content = reader.result;
    if (content) {
      if (!content.includes("Tournament")) {
        sitNum++;
        sittings.push(content);
      }
      if (done) {
        parseSittings();
      }
    }
  }
  reader.readAsText(file);
}

function readFiles() {
  data = originalData;
  var files = document.getElementById("files").files;
  username = document.getElementById("username").value;

  if (username === "") {
    alert("Please enter your username!");
  }
  else {
    var done = false;
    for (var i = 0; i < files.length; i++) {
      if (i === files.length-1) {
        done = true;
      }
      extractData(files[i], done);
    }
  }
  document.getElementById("inputs").style.display = "none";
}

function getMax(array) {
  var max = -1000000.99;
  for (var i = 0; i < array.length; i++) {
    if (array[i].pm > max) {
      max = array[i].pm;
    }
  }
  return max;
}
function getMin(array) {
  var min = 1000000.99;
  for (var i = 0; i < array.length; i++) {
    if (array[i].pm < min) {
      min = array[i].pm;
    }
  }
  return min;
}

function getColor(n) {
  var max = getMax(data);
  var min = Math.abs(getMin(data));
  if (n > 0) {
    var p = n/max;
    var num = 1-((p*0.5)+0.5);
    var hue=((1-num)*120).toString(10);
    return ["hsl(",hue,",80%,70%)"].join("");
  }
  else {
    var p = (Math.abs(n))/min;
    var num = ((p*0.5)+0.5).toFixed(2);
    var hue=((1-num)*120).toString(10);
    return ["hsl(",hue,",90%,70%)"].join("");
  }
}

function topCards() {
  var i;
  var d = Array.from(data);

  var tmp = 0;
  for (i = 0; i < d.length; i++) {
    var c = d[i].pm;
    if (c > tmp) {
      topEarnings = d[i].hand;
      tmp = c;
    }
  }
  getPms(topEarnings, 1);
  document.getElementById("topEarnings").innerHTML = topEarnings;
  tmp = 0;
  for (i = 0; i < d.length; i++) {
    var c = d[i].pm/d[i].odds;
    var wp = getWinPercent(d[i].hand);
    var c = c*wp;
    if (c > tmp) {
      if (d[i].odds < 0.31) {
        luckyHand = d[i].hand;
        tmp = c;
      }
    }
  }
  getPms(luckyHand, 2);
  document.getElementById("luckyHand").innerHTML = luckyHand;
  tmp = 100;
  for (i = 0; i < d.length; i++) {
    var c = d[i].pm;
    if (c < tmp) {
      topLoss = d[i].hand;
      tmp = c;
    }
  }
  getPms(topLoss, 3);
  document.getElementById("topLoss").innerHTML = topLoss;
}

function getPms(hand, stat) {
  console.log(hand);
  var count = 1;
  var area;
  if (stat === 1) {
    area = document.getElementById("profitArea");
  }
  else if (stat === 2) {
    area = document.getElementById("luckyArea");
  }
  else {
    area = document.getElementById("lossArea");
  }

  var avgs = [];
  var run = 0.00;
  for (var i = 0; i < pHands.length; i++) {
    if (pHands[i].hand === hand) {
      avgs.push(pHands[i].pm);
      run += pHands[i].pm;
      var div = document.createElement('div');
      var pm;
      if (pHands[i].pm >= 0) {
        pm = "$"+pHands[i].pm.toFixed(2);
        if (pm.length === 4) {
          pm += "0";
        }
      }
      else {
        pm = "-$"+Math.abs(pHands[i].pm.toFixed(2))
        if (pm.length === 5) {
          pm += "0";
        }
      }
      var text = document.createTextNode(pm);
      div.appendChild(text);
      if (pHands[i].pm > 0) {
        div.style.color = "#3eb03e";
      }
      if (pHands[i].pm < 0) {
        div.style.color = "#c43131";
      }
      div.classList.add('listItem');
      if (count%2 === 0) {
        div.style.background = "#f7f7f7";
      }
      else {
        div.style.background = "#fafafa";
      }
      area.appendChild(div);
      count++
    }
  }
  console.log(run);
  var total = 0;
  var runPos = false;
  var avgPos = false
  for (i = 0; i < avgs.length; i++) {
    total += avgs[i];
  }
  var avg = total/(count-1);

  if (run >= 0) {
    runPos = true;
    run = "$"+run.toFixed(2);
    if (run.length === 4) {
      run += "0";
    }
  }
  else {
    run = "-$"+(Math.abs(run)).toFixed(2);
    if (run.length === 5) {
      run += "0";
    }
  }
  if (avg >= 0) {
    avgPos = true;
    avg = "$"+avg.toFixed(2);
    if (avg.length === 4) {
      avg += "0";
    }
  }
  else {
    avg = "-$"+Math.abs(avg).toFixed(2);
    if (avg.length === 5) {
      avg += "0";
    }
  }

  document.getElementById("run"+stat).innerHTML = run;
  document.getElementById("run"+stat).style.fontSize = "16px";
  document.getElementById("run"+stat).style.marginTop = "5px";
  if (runPos) {
    document.getElementById("run"+stat).style.color = "#3eb03e";
  }
  else {
    document.getElementById("run"+stat).style.color = "#c43131";
  }
  document.getElementById("avg"+stat).innerHTML = avg;
  document.getElementById("avg"+stat).style.fontSize = "16px";
  document.getElementById("avg"+stat).style.marginTop = "5px";
  if (avgPos) {
    document.getElementById("avg"+stat).style.color = "#3eb03e";
  }
  else {
    document.getElementById("avg"+stat).style.color = "#c43131";
  }
  var odds;
  for (i = 0; i < data.length; i++) {
    if (data[i].hand === hand) {
      odds = data[i].odds
    }
  }
  document.getElementById("odd"+stat).innerHTML = (odds*100).toFixed(1)+"%";
  document.getElementById("odd"+stat).style.fontSize = "16px";
  document.getElementById("odd"+stat).style.marginTop = "5px";
}
function getAverage(hand) {
  var handData = getHandData(hand);
  return handData.pm/handData.times;
}
function getHandData(hand) {
  for (var i = 0; i < data.length; i++) {
    if (hand === data[i].hand) {
      return data[i]
    }
  }
}
function getHandCount() {
  var count = 0;
  for (var i = 0; i < data.length; i++) {
    count += data[i].times;
  }
  return count;
}
function makeHandData(hand) {
  document.getElementById("currentHand").innerHTML = hand;
  var handData = getHandData(hand);
  document.getElementById("run").innerHTML = formatPM(handData.pm);
  document.getElementById("avg").innerHTML = formatPM(getAverage(hand));
  if (handData.times === 0) {
    document.getElementById("avg").innerHTML = "–";
  }
  if (handData.pm > 0) {
    document.getElementById("run").style.color = "#3eb03e";
    document.getElementById("avg").style.color = "#3eb03e";
  }
  if (handData.pm < 0) {
    document.getElementById("run").style.color = "#c43131";
    document.getElementById("avg").style.color = "#c43131";
  }
  document.getElementById("odds").innerHTML = formatPercent(handData.odds);
  document.getElementById("dealt").innerHTML = handData.times;
  var prof = 0;
  var loss = 0;
  var fpf = 0;
  for (var i = 0; i < pHands.length; i++) {
    if (pHands[i].hand === hand) {
      if (pHands[i].pm < 0) {
        loss++;
      }
      if (pHands[i].pm > 0) {
        prof++;
      }
      if (pHands[i].pm === 0) {
        fpf++;
      }
    }
  }
  prof = prof/handData.times;
  loss = loss/handData.times;
  fpf = fpf/handData.times;
  document.getElementById("prof").innerHTML = formatPercent(prof);
  if (handData.times === 0) {
    document.getElementById("prof").innerHTML = "–";
  }
  document.getElementById("loss").innerHTML = formatPercent(loss);
  if (handData.times === 0) {
    document.getElementById("loss").innerHTML = "–";
  }
  document.getElementById("fpf").innerHTML = formatPercent(fpf);
  if (handData.times === 0) {
    document.getElementById("fpf").innerHTML = "–";
  }
  if (document.getElementById("handDataArea").classList.contains("hidden")) {
    document.getElementById("handDataArea").classList.toggle("hidden");
    document.getElementById("handDataArea").classList.toggle("opened");
  }
}
function formatPM(run) {
  if (run >= 0) {
    runPos = true;
    run = "$"+run.toFixed(2);
    if (run.length === 4) {
      run += "0";
    }
  }
  else {
    run = "-$"+(Math.abs(run)).toFixed(2);
    if (run.length === 5) {
      run += "0";
    }
  }
  return run;
}
function formatPercent(odds) {
  return (odds*100).toFixed(1)+"%";
}
function updateFile() {
  document.getElementById("userFile").innerHTML = document.getElementById("username").value;
  if (document.getElementById("username").value === "") {
    document.getElementById("userFile").innerHTML = "[Your Username]";
  }
}
function getWinPercent(hand) {
  var prof = 0;
  var handData = getHandData(hand);
  for (var i = 0; i < pHands.length; i++) {
    if (pHands[i].hand === hand) {
      if (pHands[i].pm > 0) {
        prof++;
      }
    }
  }
  return prof/handData.times;
}
