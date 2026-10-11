(function () {
  "use strict";

  var LETTERS = ["A", "B", "C", "D"];
  var STORE_KEY = "sdlc-quiz-best";

  // ---------- helpers ----------
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function shuffle(arr, rnd) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rnd() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function $(id) { return document.getElementById(id); }

  // ---------- build base questions with balanced A/B/C/D answer positions ----------
  var N = window.QUESTIONS.length;
  var seeded = mulberry32(2024);
  var positions = [];
  for (var i = 0; i < N; i++) positions.push(i % 4);
  positions = shuffle(positions, seeded);

  var BASE = window.QUESTIONS.map(function (row, i) {
    var correct = row[1];
    var wrongs = row.slice(2);
    var choices = wrongs.slice();
    choices.splice(positions[i], 0, correct);
    return { id: i, q: row[0], choices: choices, answer: positions[i] };
  });

  // ---------- state ----------
  var list = [], idx = 0, score = 0, locked = false, results = [];

  var el = {
    start: $("start"), quiz: $("quiz"), res: $("results"),
    counter: $("counter"), score: $("score"), bar: $("bar"),
    question: $("question"), choices: $("choices"), feedback: $("feedback"),
    next: $("btn-next")
  };

  function show(which) {
    [el.start, el.quiz, el.res].forEach(function (s) { s.classList.add("hidden"); });
    which.classList.remove("hidden");
    window.scrollTo(0, 0);
  }

  function readBest() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)); } catch (e) { return null; }
  }
  function saveBest(s, t) {
    try {
      var b = readBest();
      if (!b || s / t > b.score / b.total) localStorage.setItem(STORE_KEY, JSON.stringify({ score: s, total: t }));
    } catch (e) { /* storage unavailable */ }
  }
  function showBest() {
    var b = readBest();
    $("best-score").textContent = b ? "Best score on this device: " + b.score + " / " + b.total : "";
  }

  // ---------- quiz flow ----------
  function prepare(source) {
    var shuffleQ = $("opt-shuffle-q").checked;
    var shuffleC = $("opt-shuffle-c").checked;
    var rnd = Math.random;
    var out = source.map(function (b) {
      var item = { id: b.id, q: b.q, choices: b.choices.slice(), answer: b.answer };
      if (shuffleC) {
        var correctText = b.choices[b.answer];
        item.choices = shuffle(b.choices, rnd);
        item.answer = item.choices.indexOf(correctText);
      }
      return item;
    });
    return shuffleQ ? shuffle(out, rnd) : out;
  }

  function begin(source) {
    list = prepare(source);
    idx = 0; score = 0; results = [];
    show(el.quiz);
    render();
  }

  function render() {
    var item = list[idx];
    locked = false;
    el.counter.textContent = "Question " + (idx + 1) + " / " + list.length;
    el.score.textContent = "Score: " + score;
    el.bar.style.width = (idx / list.length * 100) + "%";
    el.question.textContent = item.q;
    el.feedback.className = "feedback hidden";
    el.feedback.textContent = "";
    el.next.disabled = true;
    el.next.textContent = idx === list.length - 1 ? "See results" : "Next";
    el.choices.innerHTML = "";
    item.choices.forEach(function (text, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "choice";
      b.dataset.index = i;
      var l = document.createElement("span");
      l.className = "letter";
      l.textContent = LETTERS[i];
      var t = document.createElement("span");
      t.className = "text";
      t.textContent = text;
      b.appendChild(l); b.appendChild(t);
      b.addEventListener("click", function () { choose(i); });
      el.choices.appendChild(b);
    });
  }

  function choose(i) {
    if (locked) return;
    locked = true;
    var item = list[idx];
    var ok = i === item.answer;
    if (ok) score++;
    results.push({ id: item.id, q: item.q, yours: item.choices[i], right: item.choices[item.answer], ok: ok });
    Array.prototype.forEach.call(el.choices.children, function (b, k) {
      b.disabled = true;
      if (k === item.answer) b.classList.add("correct");
      else if (k === i) b.classList.add("wrong");
    });
    el.feedback.className = "feedback " + (ok ? "good" : "bad");
    el.feedback.textContent = ok ? "Correct!" : "Incorrect. The correct answer is " + LETTERS[item.answer] + ".";
    el.score.textContent = "Score: " + score;
    el.bar.style.width = ((idx + 1) / list.length * 100) + "%";
    el.next.disabled = false;
    el.next.focus();
  }

  function next() {
    if (!locked) return;
    if (idx < list.length - 1) { idx++; render(); } else finish();
  }

  function finish() {
    var total = results.length;
    var pct = total ? Math.round(score / total * 100) : 0;
    $("res-score").textContent = score;
    $("res-total").textContent = total;
    $("res-percent").textContent = pct + "% correct";
    $("res-msg").textContent =
      pct >= 90 ? "Excellent work!" :
      pct >= 75 ? "Great job, almost there." :
      pct >= 50 ? "Decent start. Review the missed items below." :
                  "Keep studying and try again.";
    if (total === BASE.length) { saveBest(score, total); }

    var missed = results.filter(function (r) { return !r.ok; });
    var rev = $("review");
    rev.innerHTML = "";
    $("review-title").classList.toggle("hidden", missed.length === 0);
    $("btn-retry-missed").classList.toggle("hidden", missed.length === 0);
    missed.forEach(function (r) {
      var d = document.createElement("div");
      d.className = "review-item";
      var q = document.createElement("div"); q.className = "q"; q.textContent = r.q;
      var y = document.createElement("div"); y.className = "yours"; y.textContent = "Your answer: " + r.yours;
      var c = document.createElement("div"); c.className = "right"; c.textContent = "Correct answer: " + r.right;
      d.appendChild(q); d.appendChild(y); d.appendChild(c);
      rev.appendChild(d);
    });
    show(el.res);
  }

  // ---------- events ----------
  $("total-count").textContent = BASE.length;
  showBest();

  $("btn-start").addEventListener("click", function () { begin(BASE); });
  el.next.addEventListener("click", next);
  $("btn-quit").addEventListener("click", function () {
    if (results.length === 0) { show(el.start); return; }
    if (confirm("End the quiz now and see your results so far?")) finish();
  });
  $("btn-retry").addEventListener("click", function () { begin(BASE); });
  $("btn-retry-missed").addEventListener("click", function () {
    var ids = results.filter(function (r) { return !r.ok; }).map(function (r) { return r.id; });
    begin(BASE.filter(function (b) { return ids.indexOf(b.id) !== -1; }));
  });
  $("btn-home").addEventListener("click", function () { showBest(); show(el.start); });

  document.addEventListener("keydown", function (e) {
    if (el.quiz.classList.contains("hidden")) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var k = e.key.toUpperCase();
    var n = LETTERS.indexOf(k);
    if (n === -1 && k >= "1" && k <= "4") n = parseInt(k, 10) - 1;
    if (n !== -1 && !locked && n < list[idx].choices.length) { choose(n); e.preventDefault(); return; }
    if (e.key === "Enter" && locked) { next(); e.preventDefault(); }
  });
})();
