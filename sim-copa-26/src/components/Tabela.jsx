import "./Tabela.css"
import { useEffect, useState } from "react";
import MataMata from "./MataMata";

function Tabela({u1, u1img, u2, u2img, u3, u3img, u4, u4img, m1, m1img, m2, m2img}){

    const timesGA = [{name: "México", img: "https://flagcdn.com/w40/mx.png"}, {name: "África do Sul", img: "https://flagcdn.com/w40/za.png"}, {name: "Coreia do Sul", img: "https://flagcdn.com/w40/kr.png"}, {name: u4, img: u4img}]
    const timesGB = [{name: "Canadá", img: "https://flagcdn.com/w40/ca.png"}, {name: u1, img: u1img}, {name: "Catar", img: "https://flagcdn.com/w40/qa.png"}, {name: "Suíça", img: "./img/Flag_of_ch.png"}]
    const timesGC =  [{name: "Brasil", img: "https://flagcdn.com/w40/br.png"}, {name: "Marrocos", img: "https://flagcdn.com/w40/ma.png"}, {name: "Haiti", img: "https://flagcdn.com/w40/ht.png"},{name: "Escócia", img: "./img/Flag_of_Scotland.png"}]
    const timesGD = [{name: "Estados Unidos", img: "https://flagcdn.com/w40/us.png"}, {name: "Paraguai", img: "https://flagcdn.com/w40/py.png"}, {name: "Austrália", img: "https://flagcdn.com/w40/au.png"}, {name: u3, img: u3img}]
    const timesGE = [{name: "Alemanha", img: "https://flagcdn.com/w40/de.png"},{name: "Curaçao", img: "https://flagcdn.com/w40/cw.png"}, {name: "Costa do Marfim", img: "https://flagcdn.com/w40/ci.png"}, {name: "Equador", img: "https://flagcdn.com/w40/ec.png"}]
    const timesGF = [{name: "Holanda", img: "https://flagcdn.com/w40/nl.png"},{name: "Japão", img: "https://flagcdn.com/w40/jp.png"}, {name: u2, img: u2img}, {name: "Tunísia", img: "https://flagcdn.com/w40/tn.png"}]
    const timesGG = [{name: "Bélgica", img: "https://flagcdn.com/w40/be.png"},{name: "Egito", img: "https://flagcdn.com/w40/eg.png"}, {name: "Irã", img: "https://flagcdn.com/w40/ir.png"}, {name: "Nova Zelândia", img: "https://flagcdn.com/w40/nz.png"}]
    const timesGH = [{name: "Espanha", img: "https://flagcdn.com/w40/es.png"},{name: "Cabo Verde", img: "https://flagcdn.com/w40/cv.png"}, {name: "Arábia Saudita", img: "https://flagcdn.com/w40/sa.png"}, {name: "Uruguai", img: "https://flagcdn.com/w40/uy.png"}]
    const timesGI = [{name: "França", img: "https://flagcdn.com/w40/fr.png"},{name: "Senegal", img: "https://flagcdn.com/w40/sn.png"}, {name: m2, img: m2img}, {name: "Noruega", img: "https://flagcdn.com/w40/no.png"}]
    const timesGJ = [{name: "Argentina", img: "https://flagcdn.com/w40/ar.png"},{name: "Argélia", img: "https://flagcdn.com/w40/dz.png"}, {name: "Áustria", img: "https://flagcdn.com/w40/at.png"}, {name: "Jordânia", img: "https://flagcdn.com/w40/jo.png"}]
    const timesGK = [{name: "Portugal", img: "https://flagcdn.com/w40/pt.png"},{name: m1, img: m1img}, {name: "Uzberquistão", img: "https://flagcdn.com/w40/uz.png"}, {name: "Colômbia", img: "https://flagcdn.com/w40/co.png"}]
    const timesGL = [{name: "Inglaterra", img: "./img/Flag_of_England.png"},{name: "Croácia", img: "https://flagcdn.com/w40/hr.png"}, {name: "Gana", img: "https://flagcdn.com/w40/gh.png"}, {name: "Panamá", img: "https://flagcdn.com/w40/pa.png"}]

    const [firstGA, SetfirstGA] = useState(null);
    const [secondGA, SetsecondGA] = useState(null);
    const [thirdGA, SetThirdGA] = useState(null);

    const selectedGA = (pos, t) =>{
        if(firstGA === t) SetfirstGA(null);
        if(secondGA === t) SetsecondGA(null);
        if(thirdGA === t) SetThirdGA(null);

        if (pos === 1){
            SetfirstGA(t);
        }
        if (pos === 2){
            SetsecondGA(t);
        }
        if (pos === 3){
            SetThirdGA(t);
        }
    }

    const [firstGB, SetfirstGB] = useState(null);
    const [secondGB, SetsecondGB] = useState(null);
    const [thirdGB, SetThirdGB] = useState(null);

    const selectedGB = (pos, t) =>{
        if(firstGB === t) SetfirstGB(null);
        if(secondGB === t) SetsecondGB(null);
        if(thirdGB === t) SetThirdGB(null);

        if (pos === 1){
            SetfirstGB(t);
        }
        if (pos === 2){
            SetsecondGB(t);
        }
        if (pos === 3){
            SetThirdGB(t);
        }
    }


    const [firstGC, SetfirstGC] = useState(null);
    const [secondGC, SetsecondGC] = useState(null);
    const [thirdGC, SetThirdGC] = useState(null);

    const selectedGC = (pos, t) =>{
        if(firstGC === t) SetfirstGC();
        if(secondGC === t) SetsecondGC();
        if(thirdGC === t) SetThirdGC();

        if (pos === 1){
            SetfirstGC(t);
        }
        if (pos === 2){
            SetsecondGC(t);
        }
        if (pos === 3){
            SetThirdGC(t);
        }
    }


    const [firstGD, SetfirstGD] = useState(null);
    const [secondGD, SetsecondGD] = useState(null);
    const [thirdGD, SetThirdGD] = useState(null);

    const selectedGD = (pos, t) =>{
        if(firstGD === t) SetfirstGD(null);
        if(secondGD === t) SetsecondGD(null);
        if(thirdGD === t) SetThirdGD(null);

        if (pos === 1){
            SetfirstGD(t);
        }
        if (pos === 2){
            SetsecondGD(t);
        }
        if (pos === 3){
            SetThirdGD(t);
        }
    }
    const [firstGE, SetfirstGE] = useState(null);
    const [secondGE, SetsecondGE] = useState(null);
    const [thirdGE, SetThirdGE] = useState(null);

    const selectedGE = (pos, t) =>{
        if(firstGE === t) SetfirstGE(null);
        if(secondGE === t) SetsecondGE(null);
        if(thirdGE === t) SetThirdGE(null);

        if (pos === 1){
            SetfirstGE(t);
        }
        if (pos === 2){
            SetsecondGE(t);
        }
        if (pos === 3){
            SetThirdGE(t);
        }
    }

    const [firstGF, SetfirstGF] = useState(null);
    const [secondGF, SetsecondGF] = useState(null);
    const [thirdGF, SetThirdGF] = useState(null);

    const selectedGF = (pos, t) =>{
        if(firstGF === t) SetfirstGF(null);
        if(secondGF === t) SetsecondGF(null);
        if(thirdGF === t) SetThirdGF(null);

        if (pos === 1){
            SetfirstGF(t);
        }
        if (pos === 2){
            SetsecondGF(t);
        }
        if (pos === 3){
            SetThirdGF(t);
        }
    }


    const [firstGG, SetfirstGG] = useState(null);
    const [secondGG, SetsecondGG] = useState(null);
    const [thirdGG, SetThirdGG] = useState(null);

    const selectedGG = (pos, t) =>{
        if(firstGG === t) SetfirstGG(null);
        if(secondGG === t) SetsecondGG(null);
        if(thirdGG === t) SetThirdGG(null);

        if (pos === 1){
            SetfirstGG(t);
        }
        if (pos === 2){
            SetsecondGG(t);
        }
        if (pos === 3){
            SetThirdGG(t);
        }
    }


    const [firstGH, SetfirstGH] = useState(null);
    const [secondGH, SetsecondGH] = useState(null);
    const [thirdGH, SetThirdGH] = useState(null);

    const selectedGH = (pos, t) =>{
        if(firstGH === t) SetfirstGH(null);
        if(secondGH === t) SetsecondGH(null);
        if(thirdGH === t) SetThirdGH(null);

        if (pos === 1){
            SetfirstGH(t);
        }
        if (pos === 2){
            SetsecondGH(t);
        }
        if (pos === 3){
            SetThirdGH(t);
        }
    }
    const [firstGI, SetfirstGI] = useState(null);
    const [secondGI, SetsecondGI] = useState(null);
    const [thirdGI, SetThirdGI] = useState(null);

    const selectedGI = (pos, t) =>{
        if(firstGI === t) SetfirstGI(null);
        if(secondGI === t) SetsecondGI(null);
        if(thirdGI === t) SetThirdGI(null);

        if (pos === 1){
            SetfirstGI(t);
        }
        if (pos === 2){
            SetsecondGI(t);
        }
        if (pos === 3){
            SetThirdGI(t);
        }
    }

    const [firstGJ, SetfirstGJ] = useState(null);
    const [secondGJ, SetsecondGJ] = useState(null);
    const [thirdGJ, SetThirdGJ] = useState(null);

    const selectedGJ = (pos, t) =>{
        if(firstGJ === t) SetfirstGJ(null);
        if(secondGJ === t) SetsecondGJ(null);
        if(thirdGJ === t) SetThirdGJ(null);

        if (pos === 1){
            SetfirstGJ(t);
        }
        if (pos === 2){
            SetsecondGJ(t);
        }
        if (pos === 3){
            SetThirdGJ(t);
        }
    }


    const [firstGK, SetfirstGK] = useState(null);
    const [secondGK, SetsecondGK] = useState(null);
    const [thirdGK, SetThirdGK] = useState(null);

    const selectedGK = (pos, t) =>{
        if(firstGK === t) SetfirstGK(null);
        if(secondGK === t) SetsecondGK(null);
        if(thirdGK === t) SetThirdGK(null);

        if (pos === 1){
            SetfirstGK(t);
        }
        if (pos === 2){
            SetsecondGK(t);
        }
        if (pos === 3){
            SetThirdGK(t);
        }
    }

    const [firstGL, SetfirstGL] = useState(null);
    const [secondGL, SetsecondGL] = useState(null);
    const [thirdGL, SetThirdGL] = useState(null);

    const selectedGL = (pos, t) =>{
        if(firstGL === t) SetfirstGL(null);
        if(secondGL === t) SetsecondGL(null);
        if(thirdGL === t) SetThirdGL(null);

        if (pos === 1){
            SetfirstGL(t);
        }
        if (pos === 2){
            SetsecondGL(t);
        }
        if (pos === 3){
            SetThirdGL(t);
        }
    }

    const [t, sT] = useState([]);

    useEffect(() => {
        sT([thirdGA, thirdGB, thirdGC, thirdGD, thirdGE, thirdGF,
        thirdGG, thirdGH, thirdGI, thirdGJ, thirdGK, thirdGL].filter(x=> x !== null))
    },[thirdGA, thirdGB, thirdGC, thirdGD, thirdGE, thirdGF,
        thirdGG, thirdGH, thirdGI, thirdGJ, thirdGK, thirdGL])

  const drop = (e, i) => {
    const a=[...t], from=e.dataTransfer.getData("i");
    const [m]=a.splice(from,1); a.splice(i,0,m); sT(a);
  };

    return (
        <>
        <div className="container-FaseGrupos">
        <div className="titulo-descricao">
            <h1>Passo 2 - Fase de Grupos</h1>
            <p>Com as seleções vindo da repescagem, grupos ficarão completos.<br></br>
                Agora selecione os primeiros, segundos e terceiros colocados de cada grupo
            </p>
        </div>
        <div className="FaseGrupos">
            <table border={0}>
                <thead>
                    <tr>
                        <th colSpan={5}>GRUPO A</th>
                    </tr>
                </thead>
                <tbody>
                    {timesGA.map((t) =>(
                        <tr key={t.name}>
                            <td><img src={t.img} alt="N/I" /></td>
                            <td className="team">{t.name}</td>
                            <td>1º<input type="radio" name="primeiro GA" 
                            value={t.name || ""} checked={firstGA === t.img}
                            onChange={()=>selectedGA(1, t.img || null)} /></td>
                            
                            <td>2º<input type="radio" name="segundo GA" 
                            value={t.name || ""} checked={secondGA === t.img} 
                            onChange={()=>selectedGA(2, t.img || null)} /></td>

                            <td>3º<input type="radio" name="terceiro GA" 
                            value={t.name || ""} checked={thirdGA === t.img}
                            onChange={()=>selectedGA(3, t.img || null)}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table border={0}>
                <thead>
                    <tr>
                        <th colSpan={5}>GRUPO B</th>
                    </tr>
                </thead>
                <tbody>
                    {timesGB.map((t) =>(
                        <tr key={t.name}>
                            <td><img src={t.img} alt="N/I" /></td>
                            <td className="team">{t.name}</td>
                            <td>1º<input type="radio" name="primeiro GB" 
                            value={t.name || ""} checked={firstGB === t.img} 
                            onChange={()=>selectedGB(1, t.img || null)} /></td>
                            
                            <td>2º<input type="radio" name="segundo GB" 
                            value={t.name || ""} checked={secondGB === t.img} 
                            onChange={()=>selectedGB(2, t.img || null)} /></td>

                            <td>3º<input type="radio" name="terceiro GB" 
                            value={t.name || ""} checked={thirdGB === t.img}
                            onChange={()=>selectedGB(3, t.img || null)}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table border={0}>
                <thead>
                    <tr>
                        <th colSpan={5}>GRUPO C</th>
                    </tr>
                </thead>
                <tbody>
                    {timesGC.map((t) =>(
                        <tr key={t.name}>
                            <td><img src={t.img} alt="N/I" /></td>
                            <td className="team">{t.name}</td>
                            <td>1º<input type="radio" name="primeiro GC" 
                            value={t.name || ""} checked={firstGC === t.img} 
                            onChange={()=>selectedGC(1, t.img || null)} /></td>
                            
                            <td>2º<input type="radio" name="segundo GC" 
                            value={t.name || ""} checked={secondGC === t.img} 
                            onChange={()=>selectedGC(2, t.img || null)} /></td>

                            <td>3º<input type="radio" name="terceiro GC" 
                            value={t.name || ""} checked={thirdGC === t.img}
                            onChange={()=>selectedGC(3, t.img || null)}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table border={0}>
                <thead>
                    <tr>
                        <th colSpan={5}>GRUPO D</th>
                    </tr>
                </thead>
                <tbody>
                    {timesGD.map((t) =>(
                        <tr key={t.name}>
                            <td><img src={t.img} alt="N/I" /></td>
                            <td className="team">{t.name}</td>
                            <td>1º<input type="radio" name="primeiro GD" 
                            value={t.name || ""} checked={firstGD === t.img} 
                            onChange={()=>selectedGD(1, t.img || null)} /></td>
                            
                            <td>2º<input type="radio" name="segundo GD" 
                            value={t.name || ""} checked={secondGD === t.img} 
                            onChange={()=>selectedGD(2, t.img || null)} /></td>

                            <td>3º<input type="radio" name="terceiro GD" 
                            value={t.name || ""} checked={thirdGD === t.img}
                            onChange={()=>selectedGD(3, t.img || null)}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table border={0}>
                <thead>
                    <tr>
                        <th colSpan={5}>GRUPO E</th>
                    </tr>
                </thead>
                <tbody>
                    {timesGE.map((t) =>(
                        <tr key={t.name}>
                            <td><img src={t.img} alt="N/I" /></td>
                            <td className="team">{t.name}</td>
                            <td>1º<input type="radio" name="primeiro GE" 
                            value={t.name || ""} checked={firstGE === t.img}
                            onChange={()=>selectedGE(1, t.img || null)} /></td>
                            
                            <td>2º<input type="radio" name="segundo GE" 
                            value={t.name || ""} checked={secondGE === t.img} 
                            onChange={()=>selectedGE(2, t.img || null)} /></td>

                            <td>3º<input type="radio" name="terceiro GE" 
                            value={t.name || ""} checked={thirdGE === t.img}
                            onChange={()=>selectedGE(3, t.img || null)}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table border={0}>
                <thead>
                    <tr>
                        <th colSpan={5}>GRUPO F</th>
                    </tr>
                </thead>
                <tbody>
                    {timesGF.map((t) =>(
                        <tr key={t.name}>
                            <td><img src={t.img} alt="N/I" /></td>
                            <td className="team">{t.name}</td>
                            <td>1º<input type="radio" name="primeiro GF" 
                            value={t.name || ""} checked={firstGF === t.img} 
                            onChange={()=>selectedGF(1, t.img || null)} /></td>
                            
                            <td>2º<input type="radio" name="segundo GF" 
                            value={t.name || ""} checked={secondGF === t.img} 
                            onChange={()=>selectedGF(2, t.img || null)} /></td>

                            <td>3º<input type="radio" name="terceiro GF" 
                            value={t.name || ""} checked={thirdGF === t.img}
                            onChange={()=>selectedGF(3, t.img || null)}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table border={0}>
                <thead>
                    <tr>
                        <th colSpan={5}>GRUPO G</th>
                    </tr>
                </thead>
                <tbody>
                    {timesGG.map((t) =>(
                        <tr key={t.name}>
                            <td><img src={t.img} alt="N/I" /></td>
                            <td className="team">{t.name}</td>
                            <td>1º<input type="radio" name="primeiro GG" 
                            value={t.name || ""} checked={firstGG === t.img} 
                            onChange={()=>selectedGG(1, t.img || null)} /></td>
                            
                            <td>2º<input type="radio" name="segundo GG" 
                            value={t.name || ""} checked={secondGG === t.img} 
                            onChange={()=>selectedGG(2, t.img || null)} /></td>

                            <td>3º<input type="radio" name="terceiro GG" 
                            value={t.name || ""} checked={thirdGG === t.img}
                            onChange={()=>selectedGG(3, t.img || null)}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table border={0}>
                <thead>
                    <tr>
                        <th colSpan={5}>GRUPO H</th>
                    </tr>
                </thead>
                <tbody>
                    {timesGH.map((t) =>(
                        <tr key={t.name}>
                            <td><img src={t.img} alt="N/I" /></td>
                            <td className="team">{t.name}</td>
                            <td>1º<input type="radio" name="primeiro GH" 
                            value={t.name || ""} checked={firstGH === t.img} 
                            onChange={()=>selectedGH(1, t.img || null)} /></td>
                            
                            <td>2º<input type="radio" name="segundo GH" 
                            value={t.name || ""} checked={secondGH === t.img} 
                            onChange={()=>selectedGH(2, t.img || null)} /></td>

                            <td>3º<input type="radio" name="terceiro GH" 
                            value={t.name || ""} checked={thirdGH === t.img}
                            onChange={()=>selectedGH(3, t.img || null)}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table border={0}>
                <thead>
                    <tr>
                        <th colSpan={5}>GRUPO I</th>
                    </tr>
                </thead>
                <tbody>
                    {timesGI.map((t) =>(
                        <tr key={t.name}>
                            <td><img src={t.img} alt="N/I" /></td>
                            <td className="team">{t.name}</td>
                            <td>1º<input type="radio" name="primeiro GI" 
                            value={t.name || ""} checked={firstGI === t.img}
                            onChange={()=>selectedGI(1, t.img || null)} /></td>
                            
                            <td>2º<input type="radio" name="segundo GI" 
                            value={t.name || ""} checked={secondGI === t.img} 
                            onChange={()=>selectedGI(2, t.img || null)} /></td>

                            <td>3º<input type="radio" name="terceiro GI" 
                            value={t.name || ""} checked={thirdGI === t.img}
                            onChange={()=>selectedGI(3, t.img || null)}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table border={0}>
                <thead>
                    <tr>
                        <th colSpan={5}>GRUPO J</th>
                    </tr>
                </thead>
                <tbody>
                    {timesGJ.map((t) =>(
                        <tr key={t.name}>
                            <td><img src={t.img} alt="N/I" /></td>
                            <td className="team">{t.name}</td>
                            <td>1º<input type="radio" name="primeiro GJ" 
                            value={t.name || ""} checked={firstGJ === t.img} 
                            onChange={()=>selectedGJ(1, t.img || null)} /></td>
                            
                            <td>2º<input type="radio" name="segundo GJ" 
                            value={t.name || ""} checked={secondGJ === t.img} 
                            onChange={()=>selectedGJ(2, t.img || null)} /></td>

                            <td>3º<input type="radio" name="terceiro GJ" 
                            value={t.name || ""} checked={thirdGJ === t.img}
                            onChange={()=>selectedGJ(3, t.img || null)}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table border={0}>
                <thead>
                    <tr>
                        <th colSpan={5}>GRUPO K</th>
                    </tr>
                </thead>
                <tbody>
                    {timesGK.map((t) =>(
                        <tr key={t.name}>
                            <td><img src={t.img} alt="N/I" /></td>
                            <td className="team">{t.name}</td>
                            <td>1º<input type="radio" name="primeiro GK" 
                            value={t.name || ""} checked={firstGK === t.img} 
                            onChange={()=>selectedGK(1, t.img || null)} /></td>
                            
                            <td>2º<input type="radio" name="segundo GK" 
                            value={t.name || ""} checked={secondGK === t.img} 
                            onChange={()=>selectedGK(2, t.img || null)} /></td>

                            <td>3º<input type="radio" name="terceiro GK" 
                            value={t.name || ""} checked={thirdGK === t.img}
                            onChange={()=>selectedGK(3, t.img || null)}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table border={0}>
                <thead>
                    <tr>
                        <th colSpan={5}>GRUPO L</th>
                    </tr>
                </thead>
                <tbody>
                    {timesGL.map((t) =>(
                        <tr key={t.name}>
                            <td><img src={t.img} alt="N/I" /></td>
                            <td className="team">{t.name}</td>
                            <td>1º<input type="radio" name="primeiro GL" 
                            value={t.name || ""} checked={firstGL === t.img} 
                            onChange={()=>selectedGL(1, t.img || null)} /></td>
                            
                            <td>2º<input type="radio" name="segundo GL" 
                            value={t.name || ""} checked={secondGL === t.img} 
                            onChange={()=>selectedGL(2, t.img || null)} /></td>

                            <td>3º<input type="radio" name="terceiro GL" 
                            value={t.name || ""} checked={thirdGL === t.img}
                            onChange={()=>selectedGL(3, t.img || null)}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
        
    <div className="titulo-descricao">
        <h1>Passo 3 - 8 Melhores Terceiros</h1>
        <p>os terceiros colocados dos 12 grupos estão ranqueados na ordem em que<br></br>foram selecionados, se caso queira mudar alguma coisa, arraste e solte<br></br>para ajustar os 8 melhores terceiros colocados</p>
    </div>
    <div className="melhores" style={{padding:20}}>
    <table>
    <thead>
        <tr>
            <th>3º Lugares</th>
        </tr>
    </thead>
    <tbody>
        <tr>
      {t.map((x,i)=>(
        <div key={x}
          draggable
          onDragStart={e=>e.dataTransfer.setData("i",i)}
          onDragOver={e=>e.preventDefault()}
          onDrop={e=>drop(e,i)}
          style={{
            padding:5, margin:"3px 0", background:"#eee",
            borderRadius:6, cursor:"grab"
          }}
        >
          <td class="td-ter">{i+1}º- </td><td><img src={x || null} alt="" /></td>
        </div>
      ))}
        </tr>
      </tbody>
      </table>
      </div>

        <div className="titulo-descricao">
            <h1>Passo 4 - Mata-Mata</h1>
            <p>o mata-mata conta com 16 avós, oitavas, quartas, semi e grande final.<br></br>
                pressione para escolher qual seleção avança cada fase
            </p>
        </div>

        <MataMata a1={firstGA} a2={secondGA} b1={firstGB} b2={secondGB}
        c1={firstGC} c2={secondGC} d1={firstGD} d2={secondGD} e1={firstGE} e2={secondGE}
        f1={firstGF} f2={secondGF} g1={firstGG} g2={secondGG} h1={firstGH} h2={secondGH}
        i1={firstGI} i2={secondGI} j1={firstGJ} j2={secondGJ} k1={firstGK} k2={secondGK}
        l1={firstGL} l2={secondGL} ter1={t[0]} ter2={t[1]} ter3={t[2]} ter4={t[3]} ter5={t[4]} ter6={t[5]}
        ter7={t[6]}  ter8={t[7]} A3={thirdGA} B3={thirdGB} C3={thirdGC} D3={thirdGD} E3={thirdGE} F3={thirdGF}
        G3={thirdGG} H3={thirdGH} I3={thirdGI} J3={thirdGJ} K3={thirdGK} L3={thirdGL}
        />
        </>
    )
}
export default Tabela