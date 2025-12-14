import "./MataMata.css"
import { useEffect, useState } from "react"

function MataMata({a1, a2, b1, b2, c1, c2, d1, d2, e1, e2, 
    f1, f2, g1, g2, h1, h2, i1, i2, j1, j2, k1, k2, l1, l2,
    ter1, ter2, ter3, ter4, ter5, ter6, ter7, ter8, A3, B3, C3,
    D3, E3, F3, G3, H3, I3, J3, K3, L3}){

    const [O1, setO1] = useState(null)
    const [O2, setO2] = useState(null)
    const [O3, setO3] = useState(null)
    const [O4, setO4] = useState(null)
    const [O5, setO5] = useState(null)
    const [O6, setO6] = useState(null)
    const [O7, setO7] = useState(null)
    const [O8, setO8] = useState(null)
    const [O9, setO9] = useState(null)
    const [O10, setO10] = useState(null)
    const [O11, setO11] = useState(null)
    const [O12, setO12] = useState(null)
    const [O13, setO13] = useState(null)
    const [O14, setO14] = useState(null)
    const [O15, setO15] = useState(null)
    const [O16, setO16] = useState(null)
    const [Q1, setQ1] = useState(null)
    const [Q2, setQ2] = useState(null)
    const [Q3, setQ3] = useState(null)
    const [Q4, setQ4] = useState(null)
    const [Q5, setQ5] = useState(null)
    const [Q6, setQ6] = useState(null)
    const [Q7, setQ7] = useState(null)
    const [Q8, setQ8] = useState(null)
    const [S1, setS1] = useState(null)
    const [S2, setS2] = useState(null)
    const [S3, setS3] = useState(null)
    const [S4, setS4] = useState(null)
    const [F1, setF1] = useState(null)
    const [F2, setF2] = useState(null)
    const [C, setC] = useState(null)

    const [a3, sa3] = useState(null)
    const [b3, sb3] = useState(null)
    const [c3, sc3] = useState(null)
    const [d3, sd3] = useState(null)
    const [e3, se3] = useState(null)
    const [f3, sf3] = useState(null)
    const [g3, sg3] = useState(null)
    const [h3, sh3] = useState(null)
    const [i3, si3] = useState(null)
    const [j3, sj3] = useState(null)
    const [k3, sk3] = useState(null)
    const [l3, sl3] = useState(null)



    useEffect(() => {

      ter1 = ter1
      ter2 = ter2
      ter3 = ter3
      ter4 = ter4
      ter5 = ter5
      ter6 = ter6
      ter7 = ter7
      ter8 = ter8
        // Grupo A
  if (
    A3 === ter1 || A3 === ter2 || A3 === ter3 || A3 === ter4 ||
    A3 === ter5 || A3 === ter6 || A3 === ter7 || A3 === ter8
  ) {
    sa3(A3);
  } else {
    sa3(null);
  }

  // Grupo B
  if (
    B3 === ter1 || B3 === ter2 || B3 === ter3 || B3 === ter4 ||
    B3 === ter5 || B3 === ter6 || B3 === ter7 || B3 === ter8
  ) {
    sb3(B3);
  } else {
    sb3(null);
  }

  // Grupo C
  if (
    C3 === ter1 || C3 === ter2 || C3 === ter3 || C3 === ter4 ||
    C3 === ter5 || C3 === ter6 || C3 === ter7 || C3 === ter8
  ) {
    sc3(C3);
  } else {
    sc3(null);
  }

  // Grupo D
  if (
    D3 === ter1 || D3 === ter2 || D3 === ter3 || D3 === ter4 ||
    D3 === ter5 || D3 === ter6 || D3 === ter7 || D3 === ter8
  ) {
    sd3(D3);
  } else {
    sd3(null);
  }

  // Grupo E
  if (
    E3 === ter1 || E3 === ter2 || E3 === ter3 || E3 === ter4 ||
    E3 === ter5 || E3 === ter6 || E3 === ter7 || E3 === ter8
  ) {
    se3(E3);
  } else {
    se3(null);
  }

  // Grupo F
  if (
    F3 === ter1 || F3 === ter2 || F3 === ter3 || F3 === ter4 ||
    F3 === ter5 || F3 === ter6 || F3 === ter7 || F3 === ter8
  ) {
    sf3(F3);
  } else {
    sf3(null);
  }

  // Grupo G
  if (
    G3 === ter1 || G3 === ter2 || G3 === ter3 || G3 === ter4 ||
    G3 === ter5 || G3 === ter6 || G3 === ter7 || G3 === ter8
  ) {
    sg3(G3);
  } else {
    sg3(null);
  }

  // Grupo H
  if (
    H3 === ter1 || H3 === ter2 || H3 === ter3 || H3 === ter4 ||
    H3 === ter5 || H3 === ter6 || H3 === ter7 || H3 === ter8
  ) {
    sh3(H3);
  } else {
    sh3(null);
  }

  // Grupo I
  if (
    I3 === ter1 || I3 === ter2 || I3 === ter3 || I3 === ter4 ||
    I3 === ter5 || I3 === ter6 || I3 === ter7 || I3 === ter8
  ) {
    si3(I3);
  } else {
    si3(null);
  }

  // Grupo J
  if (
    J3 === ter1 || J3 === ter2 || J3 === ter3 || J3 === ter4 ||
    J3 === ter5 || J3 === ter6 || J3 === ter7 || J3 === ter8
  ) {
    sj3(J3);
  } else {
    sj3(null);
  }

  // Grupo K
  if (
    K3 === ter1 || K3 === ter2 || K3 === ter3 || K3 === ter4 ||
    K3 === ter5 || K3 === ter6 || K3 === ter7 || K3 === ter8
  ) {
    sk3(K3);
  } else {
    sk3(null);
  }

  // Grupo L
  if (
    L3 === ter1 || L3 === ter2 || L3 === ter3 || L3 === ter4 ||
    L3 === ter5 || L3 === ter6 || L3 === ter7 || L3 === ter8
  ) {
    sl3(H3);
  } else {
    sl3(null);
  }
    
    },[ter1, ter2, ter3, ter4, ter5, ter6, ter7, ter8, A3, B3, C3,
    D3, E3, F3, G3, H3, I3, J3, K3, L3]);

    const valoresterc = {
        a3, b3, c3, d3, e3, f3, g3, h3, i3, j3, k3, l3
    }

    function esc(...keys){
        for(let key of keys){
            if(valoresterc[key] !== null) {
                const escolhido = valoresterc[key];
                valoresterc[key] = null;

                return escolhido
            }
        }
        return null;
    }

    const playoffleft = [{p1: e1, p2: esc('a3', 'b3', 'c3', 'd3', 'f3'), p3: i1,p4: esc('c3', 'd3', 'f3', 'g3', 'h3') , p5: a2, p6: b2, p7: f1, p8: c2, p9: k2, p10: l2, p11: h1, p12: j2, p13: d1, p14: esc('b3', 'e3', 'f3', 'i3', 'j3'), p15: g1, p16: esc('a3', 'e3', 'h3', 'i3', 'j3')}]
    const playoffright = [{p1: c1, p2: f2, p3: e2, p4: i2, p5:a1, p6: esc('c3', 'e3', 'f3', 'h3', 'i3'), p7: l1, p8: esc('e3', 'h3', 'i3', 'j3', 'k3'), p9: j1, p10: h2, p11: d2, p12: g2, p13: b1, p14: esc('e3', 'f3', 'g3', 'i3', 'j3'), p15: k1, p16: esc('d3', 'e3', 'i3', 'j3', 'l3')}]
    const oitavasleft = [{o1: O1, o2: O2, o3: O3, o4: O4, o5: O5, o6: O6, o7: O7, o8: O8}]
    const oitavasright = [{o1: O9, o2: O10, o3: O11, o4: O12, o5: O13, o6: O14, o7: O15, o8: O16}]
    const quartasleft = [{q1: Q1, q2: Q2, q3: Q3, q4: Q4}]
    const quartasright = [{q1: Q5, q2: Q6, q3: Q7, q4: Q8 }]
    const semileft = [{s1: S1, s2: S2}]
    const semiright = [{s1: S3, s2: S4}]
    const finalleft = [{f: F1}]
    const finalright = [{f: F2}]

    return(
        <>
        <div className="container-mata-mata">
        <div className="mata-mata">
            {playoffleft.map((t) =>(<div className="playoff">
                <img className="m" src={t.p1} alt="" onClick={() =>{if(t.p2 !== null)setO1(t.p1)}}/>
                <img className="m" src={t.p2} alt="" onClick={() =>{if(t.p1 !== null)setO1(t.p2)}}/>
                <img className="m" src={t.p3} alt="" onClick={() =>{if(t.p4 !== null)setO2(t.p3)}}/>
                <img className="m" src={t.p4} alt="" onClick={() =>{if(t.p3 !== null)setO2(t.p4)}}/>
                <img className="m" src={t.p5} alt="" onClick={() =>{if(t.p6 !== null)setO3(t.p5)}}/>
                <img className="m" src={t.p6} alt="" onClick={() =>{if(t.p5 !== null)setO3(t.p6)}}/>
                <img className="m" src={t.p7} alt="" onClick={() =>{if(t.p8 !== null)setO4(t.p7)}}/>
                <img className="m" src={t.p8} alt="" onClick={() =>{if(t.p7 !== null)setO4(t.p8)}}/>
                <img className="m" src={t.p9} alt="" onClick={() =>{if(t.p10 !== null)setO5(t.p9)}}/>
                <img className="m" src={t.p10} alt="" onClick={() =>{if(t.p9 !== null)setO5(t.p10)}}/>
                <img className="m" src={t.p11} alt="" onClick={() =>{if(t.p12 !== null)setO6(t.p11)}}/>
                <img className="m" src={t.p12} alt="" onClick={() =>{if(t.p11 !== null)setO6(t.p12)}}/>
                <img className="m" src={t.p13} alt="" onClick={() =>{if(t.p14 !== null)setO7(t.p13)}}/>
                <img className="m" src={t.p14} alt="" onClick={() =>{if(t.p13 !== null)setO7(t.p14)}}/>
                <img className="m" src={t.p15} alt="" onClick={() =>{if(t.p16 !== null)setO8(t.p15)}}/>
                <img className="m" src={t.p16} alt="" onClick={() =>{if(t.p15 !== null)setO8(t.p16)}}/>
            </div>))}
            {oitavasleft.map((t) =>(<div className="oitavas">
                <img className="m" src={t.o1} alt="" onClick={() =>{if(t.o2 !== null)setQ1(t.o1)}}/>
                <img className="m" src={t.o2} alt="" onClick={() =>{if(t.o1 !== null)setQ1(t.o2)}}/>
                <img className="m" src={t.o3} alt="" onClick={() =>{if(t.o4 !== null)setQ2(t.o3)}}/>
                <img className="m" src={t.o4} alt="" onClick={() =>{if(t.o3 !== null)setQ2(t.o4)}}/>
                <img className="m" src={t.o5} alt="" onClick={() =>{if(t.o6 !== null)setQ3(t.o5)}}/>
                <img className="m" src={t.o6} alt="" onClick={() =>{if(t.o5 !== null)setQ3(t.o6)}}/>
                <img className="m" src={t.o7} alt="" onClick={() =>{if(t.o8 !== null)setQ4(t.o7)}}/>
                <img className="m" src={t.o8} alt="" onClick={() =>{if(t.o7 !== null)setQ4(t.o8)}}/>
            </div>))}

            {quartasleft.map((t) =>(<div className="quartas">
                <img className="m" src={t.q1} alt="" onClick={() =>{if(t.q2 !== null)setS1(t.q1)}}/>
                <img className="m" src={t.q2} alt="" onClick={() =>{if(t.q1 !== null)setS1(t.q2)}}/>
                <img className="m" src={t.q3} alt="" onClick={() =>{if(t.q4 !== null)setS2(t.q3)}}/>
                <img className="m" src={t.q4} alt="" onClick={() =>{if(t.q3 !== null)setS2(t.q4)}}/>
            </div>))}
            {semileft.map((t) =>(<div className="semi">
                <img className="m" src={t.s1} alt="" onClick={() =>{if(t.s2 !== null)setF1(t.s1)}}/>
                <img className="m" src={t.s2} alt="" onClick={() =>{if(t.s1 !== null)setF1(t.s2)}}/>
            </div>))}
            {finalleft.map((t) =>(<div className="final">
                <img className="m" src={t.f} alt="" onClick={() =>{if(t.f !== null)setC(t.f)}}/>
            </div>))}
            <div className="winnerdiv">
            <label htmlFor="winner"><img className="trofeu" src="./img/taca-da-copa.png" alt="" /></label>
        
            <img name="winner" className="winner"src={C} alt="" />
            </div>
            {finalright.map((t) =>(<div className="final">
                <img className="m" src={t.f} alt="" onClick={() =>{if(t.f !== null)setC(t.f)}}/>
            </div>))}
            {semiright.map((t) =>(<div className="semi">
                <img className="m" src={t.s1} alt="" onClick={() =>{if(t.s2 !== null)setF2(t.s1)}}/>
                <img className="m" src={t.s2} alt="" onClick={() =>{if(t.s1 !== null)setF2(t.s2)}}/>
            </div>))}
            {quartasright.map((t) =>(<div className="quartas">
                <img className="m" src={t.q1} alt="" onClick={() =>{if(t.q2 !== null)setS3(t.q1)}}/>
                <img className="m" src={t.q2} alt="" onClick={() =>{if(t.q1 !== null)setS3(t.q2)}}/>
                <img className="m" src={t.q3} alt="" onClick={() =>{if(t.q4 !== null)setS4(t.q3)}}/>
                <img className="m" src={t.q4} alt="" onClick={() =>{if(t.q3 !== null)setS4(t.q4)}}/>
            </div>))}

            {oitavasright.map((t) =>(<div className="oitavas">
                <img className="m" src={t.o1} alt="" onClick={() =>{if(t.o2 !== null)setQ5(t.o1)}}/>
                <img className="m" src={t.o2} alt="" onClick={() =>{if(t.o1 !== null)setQ5(t.o2)}}/>
                <img className="m" src={t.o3} alt="" onClick={() =>{if(t.o4 !== null)setQ6(t.o3)}}/>
                <img className="m" src={t.o4} alt="" onClick={() =>{if(t.o3 !== null)setQ6(t.o4)}}/>
                <img className="m" src={t.o5} alt="" onClick={() =>{if(t.o6 !== null)setQ7(t.o5)}}/>
                <img className="m" src={t.o6} alt="" onClick={() =>{if(t.o5 !== null)setQ7(t.o6)}}/>
                <img className="m" src={t.o7} alt="" onClick={() =>{if(t.o8 !== null)setQ8(t.o7)}}/>
                <img className="m" src={t.o8} alt="" onClick={() =>{if(t.o7 !== null)setQ8(t.o8)}}/>
            </div>))}
            {playoffright.map((t) =>(<div className="playoff">
                <img className="m" src={t.p1} alt="" onClick={() =>{if(t.p2 !== null)setO9(t.p1)}}/>
                <img className="m" src={t.p2} alt="" onClick={() =>{if(t.p1 !== null)setO9(t.p2)}}/>
                <img className="m" src={t.p3} alt="" onClick={() =>{if(t.p4 !== null)setO10(t.p3)}}/>
                <img className="m" src={t.p4} alt="" onClick={() =>{if(t.p3 !== null)setO10(t.p4)}}/>
                <img className="m" src={t.p5} alt="" onClick={() =>{if(t.p6 !== null)setO11(t.p5)}}/>
                <img className="m" src={t.p6} alt="" onClick={() =>{if(t.p5 !== null)setO11(t.p6)}}/>
                <img className="m" src={t.p7} alt="" onClick={() =>{if(t.p8 !== null)setO12(t.p7)}}/>
                <img className="m" src={t.p8} alt="" onClick={() =>{if(t.p7 !== null)setO12(t.p8)}}/>
                <img className="m" src={t.p9} alt="" onClick={() =>{if(t.p10 !== null)setO13(t.p9)}}/>
                <img className="m" src={t.p10} alt="" onClick={() =>{if(t.p9 !== null)setO13(t.p10)}}/>
                <img className="m" src={t.p11} alt="" onClick={() =>{if(t.p12 !== null)setO14(t.p11)}}/>
                <img className="m" src={t.p12} alt="" onClick={() =>{if(t.p11 !== null)setO14(t.p12)}}/>
                <img className="m" src={t.p13} alt="" onClick={() =>{if(t.p14 !== null)setO15(t.p13)}}/>
                <img className="m" src={t.p14} alt="" onClick={() =>{if(t.p13 !== null)setO15(t.p14)}}/>
                <img className="m" src={t.p15} alt="" onClick={() =>{if(t.p16 !== null)setO16(t.p15)}}/>
                <img className="m" src={t.p16} alt="" onClick={() =>{if(t.p15 !== null)setO16(t.p16)}}/>
            </div>))}
        </div>
        </div>
        </>
    )
}
export default MataMata