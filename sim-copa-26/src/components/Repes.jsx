import "./Repes.css"
import Tabela from "./Tabela"
import { useState } from "react"

function Repes(){
    const timesU1 = [{name: "Itália", img: "https://flagcdn.com/w40/it.png"}, {name: "Irlanda do Norte", img: "./img/gb-nir.png"}, {name: "País de Gales", img: "./img/Flag_of_Wales.png"}, {name: "Bósnia", img: "https://flagcdn.com/w40/ba.png"}];
    const timesU2 = [{name: "Ucrânia", img: "https://flagcdn.com/w40/ua.png"}, {name: "Suécia", img: "https://flagcdn.com/w40/se.png"}, {name: "Polônia", img: "https://flagcdn.com/w40/pl.png"}, {name: "Albânia", img: "https://flagcdn.com/w40/al.png"}];
    const timesU3 = [{name: "Turquía", img: "https://flagcdn.com/w40/tr.png"}, {name: "Roménia", img: "https://flagcdn.com/w40/ro.png"}, {name: "Eslováquia", img: "https://flagcdn.com/w40/sk.png"}, {name: "Kosovo", img: "https://flagcdn.com/w40/xk.png"}];
    const timesU4 = [{name: "Dinamarca", img: "https://flagcdn.com/w40/dk.png"}, {name: "Macedônia do Norte", img: "https://flagcdn.com/w40/mk.png"}, {name: "República Checa", img: "https://flagcdn.com/w40/cz.png"}, {name: "Irlanda", img: "https://flagcdn.com/w40/ie.png"}];

    const timesM1 = [{name: "Nova Caledônia", img: "https://flagcdn.com/w40/nc.png"}, {name: "Jamaica", img: "https://flagcdn.com/w40/jm.png"}, {name: "Rep. D. do Congo", img: "https://flagcdn.com/w40/cd.png"}];
    const timesM2 = [{name: "Bolívia", img: "https://flagcdn.com/w40/bo.png"}, {name: "Suriname", img: "https://flagcdn.com/w40/sr.png"}, {name: "Iraque", img: "https://flagcdn.com/w40/iq.png"}];

    const [U1, setU1] = useState(null);
    const [U1img, setU1img] = useState(null);
    const [U2, setU2] = useState(null);
    const [U2img, setU2img] = useState(null);
    const [U3, setU3] = useState(null);
    const [U3img, setU3img] = useState(null);
    const [U4, setU4] = useState(null);
    const [U4img, setU4img] = useState(null);
    const [M1, setM1] = useState(null);
    const [M1img, setM1img] = useState(null);
    const [M2, setM2] = useState(null);
    const [M2img, setM2img] = useState(null);

    const [troca, setTroca] = useState(true);

    function trocar(){
        if(U1 === null || U2 === null || U3 === null || U4 === null || M1 === null | M2 === null){
            alert ("BOTÃO BLOQUEADO, selecione todas as 6 seleções da repescagem para ir a fase de grupos")
        }else{
            setTroca(!troca);
        }
    }

    return (
        <>
        <div className="container-repes" style={{display: troca ? "block": "none"}}>
            <div className="titulo-descricao">
                <h1>Passo 1 - Repescagem</h1>
                <p>Selecione uma de cada tabela, as seleções que vão para a <br></br>fase de grupos, totalizando 6 classificados</p>
            </div>
        <div className="Repescagem">
            <table>
                <thead>
                    <tr>
                        <th colSpan={5}> R. UEFA 1</th>
                    </tr>
                </thead>
                <tbody>
                    {timesU1.map((t)=> (
                        <tr key={t.name}>
                            <td><img src={t.img || null} alt="N/I" /></td>
                            <td className="team">{t.name}</td>
                            <td><input type="radio" name="UEFA 1" 
                            value={t.name || ""} checked={U1 === t.name}
                            onChange={()=>(setU1(t.name || ""), setU1img(t.img))}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table>
                <thead>
                    <tr>
                        <th colSpan={5}> R. UEFA 2</th>
                    </tr>
                </thead>
                <tbody>
                    {timesU2.map((t)=> (
                        <tr key={t.name}>
                            <td><img src={t.img || null} alt="N/I" /></td>
                            <td className="team">{t.name}</td>
                            <td><input type="radio" name="UEFA 2" 
                            value={t.name || ""} checked={U2 === t.name}
                            onChange={()=>(setU2(t.name || ""), setU2img(t.img))}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        
            <table>
                <thead>
                    <tr>
                        <th colSpan={5}> R. UEFA 3</th>
                    </tr>
                </thead>
                <tbody>
                    {timesU3.map((t)=> (
                        <tr key={t.name}>
                            <td><img src={t.img || null} alt="N/I" /></td>
                            <td className="team">{t.name}</td>
                            <td><input type="radio" name="UEFA 3" 
                            value={t.name || ""} checked={U3 === t.name}
                            onChange={()=>(setU3(t.name || ""), setU3img(t.img))}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table>
                <thead>
                    <tr>
                        <th colSpan={5}> R. UEFA 4</th>
                    </tr>
                </thead>
                <tbody>
                    {timesU4.map((t)=> (
                        <tr key={t.name}>
                            <td><img src={t.img || null} alt="N/I" /></td>
                            <td className="team">{t.name}</td>
                            <td><input type="radio" name="UEFA 4" 
                            value={t.name || ""} checked={U4 === t.name}
                            onChange={()=>(setU4(t.name || ""), setU4img(t.img))}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <table>
                <thead>
                    <tr>
                        <th colSpan={5}> R. Mundial 1</th>
                    </tr>
                </thead>
                <tbody>
                    {timesM1.map((t)=> (
                        <tr key={t.name}>
                            <td><img src={t.img || null} alt="N/I" /></td>
                            <td className="team">{t.name}</td>
                            <td><input type="radio" name="Mundial 1" 
                            value={t.name || ""} checked={M1 === t.name}
                            onChange={()=>(setM1(t.name || ""), setM1img(t.img))}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th colSpan={5}> R. Mundial 2</th>
                    </tr>
                </thead>
                <tbody>
                    {timesM2.map((t)=> (
                        <tr key={t.name}>
                            <td><img src={t.img || null} alt="N/I" /></td>
                            <td className="team">{t.name}</td>
                            <td><input type="radio" name="Mundial 2" 
                            value={t.name || ""} checked={M2 === t.name}
                            onChange={()=>(setM2(t.name || ""), setM2img(t.img))}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>

            <div className="inseridos">
            <table>
                <thead>
                    <tr>
                        <th colSpan={6}>Grupos Inseridos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Grupo A: </td>
                        <td><img src={U4img || null} alt="" /></td>
                        <td>Grupo B: </td>
                        <td><img src={U1img || null} alt="" /></td>
                        <td>Grupo D: </td>
                        <td><img src={U3img || null} alt="" /></td>
                    </tr>
                    <tr>
                        <td>Grupo F: </td>
                        <td><img src={U2img || null} alt="" /></td>
                        <td>Grupo I: </td>
                        <td><img src={M2img || null} alt="" /></td>
                        <td>Grupo K: </td>
                        <td><img src={M1img || null} alt="" /></td>
                    </tr>
                </tbody>
            </table>
            <p className="par">Após escolher todas as seleções, clique no botão para continuar</p>
            <button onClick={trocar}>Ir para a Fase de Grupos</button>
            </div>
            </div>
            
            <div style={{display: troca ? "none" : "block"}}>
            <Tabela u1={U1} u1img={U1img}
            u2={U2} u2img={U2img}
            u3={U3} u3img= {U3img}
            u4={U4} u4img={U4img}
            m1={M1} m1img={M1img}
            m2={M2} m2img={M2img}/>
            </div>
        </>
    )
}
export default Repes