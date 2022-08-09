import React,{ useState } from "react";
import "../style/calc.css"

const Calculator = () =>{
    const [sCount, setSCount] = useState(0)
    const [mCount, setMCount] = useState(0)
    const [lCount, setLCount] = useState(0)


    const incCount = (pm,val) =>{



        if(val === "small"){
            let nCount = sCount+pm
            setSCount(nCount)
            if(nCount<0){
                setSCount(0)
            }
        }
        if(val==="med"){
            let nCount = mCount+pm

            setMCount(nCount)
            if(nCount<0){
                setMCount(0)
            }
        }
        if(val==="large"){
            let nCount = lCount+pm
            setLCount(nCount)
            if(nCount<0){
                setLCount(0)
            }
        }
        
    }
    
    const setNumber = (targ,value)=>{

        let vInt = parseInt(value)
     
        // let nCounts = counts
        if(targ.name==="smallcount"){
            if(isNaN(value)|| value === ""){
                setSCount(0)
            }else if(vInt < 0){
                setSCount(0)
            }else
            setSCount(vInt)
        }
        if(targ.name==="medcount"){
            if(isNaN(value)|| value === ""){
                setMCount(0)
            }else
            setMCount(vInt)
        }
        if(targ.name==="largecount"){
            if(isNaN(value)|| value === ""){
                setLCount(0)
            }else
            setLCount(vInt)
        }
    }

    return (
    <div className="Calculator">
        <div className="CompostCalc">
            <div className="CompPic">
                this is a picture
            </div>
            <div className="CompAmount">
                <div className="compSmall"><div className="compText">Small bag (less than 3 gallons)</div><div className="counter">
                <div className="minus"onClick={()=>incCount(-1,"small")}>-</div>
                <input className="counterCount"
                type="text"
                name="smallcount"
                placeholder="0"
                value={sCount}
                onChange={(e)=>setNumber(e.target,e.target.value)}/><div className="plus" onClick={()=>incCount(1,"small")}>+</div></div></div>
                <div className="compMedium"><div className="compText">Full bag (3 gallons or more)</div><div className="counter"><div className="minus"onClick={()=>incCount(-1,"med")}>-</div>
                <input className="counterCount"
                type="text"
                name="medcount"
                placeholder="0"
                value={mCount}
                onChange={(e)=>setNumber(e.target,e.target.value)}/><div className="plus" onClick={()=>incCount(1,"med")}>+</div></div></div>
                <div className="compLarge"><div className="compText">Large Bag</div><div className="counter"><div className="minus"onClick={()=>incCount(-1,"large")}>-</div>
                <input className="counterCount"
                type="text"
                name="largecount"
                placeholder="0"
                value={lCount}
                onChange={(e)=>setNumber(e.target,e.target.value)}/><div className="plus" onClick={()=>incCount(1,"large")}>+</div></div></div>
            </div>
        <div className="finishButt">Finish Composting</div>
        </div>
    </div>
    )

}

export default Calculator