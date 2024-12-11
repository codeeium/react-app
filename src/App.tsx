import React, {useState} from "react";

function app() {

    const [data, setData] = useState<string | null>(null);

    const loaddata = () => {
        setData('Dataloaded')
    }

    const cleardata = () => {
        setData(null)
    }

    return (
        <>
            <p>{data ?? 'No data loaded' }</p>
            <button onClick={loaddata}>LoadData</button>
            <button onClick={cleardata}>ClearData</button>
        </>
    )
}

export default app