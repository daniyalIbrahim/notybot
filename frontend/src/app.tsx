import './App.css'
import logo from "./assets/images/logo-universal.png"

import {useState} from "preact/hooks";
import {h} from 'preact';
import { CreateStepReq } from './api/resolvers';
import { StepReq } from './types';

export function App(props: any) {
    let Step: StepReq
    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const updateResultText = (result: string) => setResultText(result);

    function run(){
        CreateStepReq(Step,updateResultText)
    }
    
    

    return (
        <>
            <div id="App">
                <img src={logo} id="logo" alt="logo"/>
                <div id="result" className="result">{resultText}</div>
                <div id="input" className="input-box">
                    <input id="name" className="input" onChange={(e:any)=>Step.name=e.target.value} autoComplete="off" name="input"
                           type="text"/>
                    <button className="btn" onClick={run}>Greet</button>
                </div>
            </div>
        </>
    )
}
