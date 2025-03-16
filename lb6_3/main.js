function newElement(_tag, _class, innerHTML="") {
    var element = document.createElement(_tag);
    if (_class != "") element.classList.add(_class);
    element.innerHTML = innerHTML;
    return element
}

var container = newElement("div", "container");
var output = newElement("div", "output");
var control_container = newElement("div", "control-container");
var controls = newElement("div","controls");

var must_be_number;
var allow_numbers;
var int_not_zero;
var allow_zero;
var allow_dot;
var part_pos;
var allow_rev;

function reset_state() {
    must_be_number = true;
    allow_numbers = true;
    int_not_zero = false;
    allow_zero = true;
    allow_dot = true;
    part_pos = 0;
    allow_rev = true;
}
reset_state();

function revFN() {
    console.log(must_be_number || ( part_pos == 0 && parseFloat(output.innerHTML) < 0))
    if (part_pos == 0 && parseFloat(output.innerHTML) < 0) {
        output.innerHTML = output.innerHTML.substring(1, output.innerHTML.length)
        return;
    }
    if (must_be_number) { return; }

    if (allow_rev) {
        output.innerHTML = [output.innerHTML.slice(0, part_pos), "(-", output.innerHTML.slice(part_pos)].join('') + ")";
        allow_rev = false;
        allow_numbers = false;
    } else {
        output.innerHTML = [output.innerHTML.slice(0, part_pos), output.innerHTML.slice(part_pos+2, output.innerHTML.length-1)].join('');
        allow_rev = true;
        allow_numbers = true;
    }
}

function direct_input(ev) {
    var classL = ev.target.classList;

    if (((!allow_zero && !int_not_zero) || !allow_numbers) && classL.contains("control-num")) { return; }
    else if (classL.contains("control-num")) { int_not_zero = true; console.log(1) }

    var contains = (classL.contains("control-op") || classL.contains("control-fn"));

    if (must_be_number == false && contains) {
        output.innerHTML += ev.target.innerHTML;
        reset_state()
        part_pos = output.innerHTML.length;
    } else if (!contains) {
        output.innerHTML += ev.target.innerHTML;
        must_be_number = false;
    } else {
        if (output.innerHTML.length == 0) { return; }
        output.innerHTML = output.innerHTML.substring(0, output.innerHTML.length - 1)
        must_be_number = false;
        direct_input(ev);
    }
}

function zero(ev) {
    console.log(allow_zero)
    if (allow_zero && allow_numbers) {
        output.innerHTML += ev.target.innerHTML;
        if (!int_not_zero && allow_dot) allow_zero = false;
        must_be_number = false;
    }
}

function dotFN(ev) {
    if (allow_dot && allow_numbers) {
        output.innerHTML += ev.target.innerHTML;
        allow_zero = true;
        allow_dot = false;
    }
}

var AC = newElement("button", "control-fn", "AC");
var REV = newElement("button", "control-fn", "+/-");
var MOD = newElement("button", "control-fn", "%");
var DIV = newElement("button", "control-op", "/");
var num7 = newElement("button", "control-num", "7");
var num8 = newElement("button", "control-num", "8");
var num9 = newElement("button", "control-num", "9");
var MUL = newElement("button", "control-op", "*");
var num4 = newElement("button", "control-num", "4");
var num5 = newElement("button", "control-num", "5");
var num6 = newElement("button", "control-num", "6");
var SUB = newElement("button", "control-op", "-");
var num1 = newElement("button", "control-num", "1");
var num2 = newElement("button", "control-num", "2");
var num3 = newElement("button", "control-num", "3");
var ADD = newElement("button", "control-op", "+");
var num0 = newElement("button", "control-zero", "0");
var dot = newElement("button", "", ".");
var EQ = newElement("button", "control-op", "=");

AC.addEventListener("click", () => {
    output.innerHTML = "";
    reset_state();
})

REV.addEventListener("click", revFN);

direct_input_buttons = [
    MOD, DIV, num7, num8, num9, MUL, num4, num5, num6, SUB, num1, num2, num3, ADD
];

direct_input_buttons.forEach(element => {
    element.addEventListener("click", direct_input);
});

num0.addEventListener("click", zero);
dot.addEventListener("click", dotFN);

EQ.addEventListener("click", () => {
    reset_state()
    output.innerHTML = parseFloat(eval(output.innerHTML)).toPrecision(4);
    must_be_number = false;
    allow_dot = false;
})

controls.appendChild(AC);
controls.appendChild(REV);
controls.appendChild(MOD);
controls.appendChild(DIV);
controls.appendChild(num7);
controls.appendChild(num8);
controls.appendChild(num9);
controls.appendChild(MUL);
controls.appendChild(num4);
controls.appendChild(num5);
controls.appendChild(num6);
controls.appendChild(SUB);
controls.appendChild(num1);
controls.appendChild(num2);
controls.appendChild(num3);
controls.appendChild(ADD);
controls.appendChild(num0);
controls.appendChild(dot);
controls.appendChild(EQ);

control_container.appendChild(controls);

container.appendChild(output)
container.appendChild(control_container);

document.body.appendChild(container);
