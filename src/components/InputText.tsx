import { useState } from "react";

export const InputText = () => {
    
    const [algoInput, setAlgoInput] = useState('')

    return(
        <div className="flex">
            <input type="text"
            className="border border-black p-1 text-xl text-black rounded"
            placeholder="Digite algo"
            value={algoInput}
            onChange={e => setAlgoInput(e.target.value)}
            /> <br />
            {algoInput}
        </div>
    )
}