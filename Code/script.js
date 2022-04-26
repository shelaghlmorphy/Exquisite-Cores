const a1 = "files/components/a1.png"
const b1 = "files/components/b1.png"
const c1 = "files/components/c1.png"
const d1 = "files/components/d1.png"
const e1 = "files/components/e1.png"
const f1 = "files/components/f1.png"
const g1 = "files/components/g1.png"
const h1 = "files/components/h1.png"
const i1 = "files/components/i1.png"
const j1 = "files/components/j1.png"
const k1 = "files/components/k1.png"

const a2 = "files/components/a2.png"
const b2 = "files/components/b2.png"
const c2 = "files/components/c2.png"
const d2 = "files/components/d2.png"
const e2 = "files/components/e2.png"
const f2 = "files/components/f2.png"
const g2 = "files/components/g2.png"
const h2 = "files/components/h2.png"
const i2 = "files/components/i2.png"
const j2 = "files/components/j2.png"
const k2 = "files/components/k2.png"

const a3 = "files/components/a3.png"
const b3 = "files/components/b3.png"
const c3 = "files/components/c3.png"
const d3 = "files/components/d3.png"
const e3 = "files/components/e3.png"
const f3 = "files/components/f3.png"
const g3 = "files/components/g3.png"
const h3 = "files/components/h3.png"
const i3 = "files/components/i3.png"
const j3 = "files/components/j3.png"
const k3 = "files/components/k3.png"

const a4 = "files/components/a4.png"
const b4 = "files/components/b4.png"
const c4 = "files/components/c4.png"
const d4 = "files/components/d4.png"
const e4 = "files/components/e4.png"
const f4 = "files/components/f4.png"
const g4 = "files/components/g4.png"
const h4 = "files/components/h4.png"
const i4 = "files/components/i4.png"
const j4 = "files/components/j4.png"
const k4 = "files/components/k4.png"

function im(n,x) {
  document.getElementById(n).src = x;
}

//for downloading the final image; would work if no js involved I think
function download(){
    var a = document.body.appendChild(
        document.createElement("a")
    );
    a.download = "export.HTML";
    a.href = "data:text/html," + document.getElementById("content").innerHTML;
    a.click();
}


