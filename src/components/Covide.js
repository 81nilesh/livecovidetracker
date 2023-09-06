import React, { useEffect } from 'react'


const Covide = () => {

    const getCovideData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData);
        } catch (Error) {
            console.log(Error);

        }
    }
    useEffect(() => {
        getCovideData();
    }, [])

    return (
        <>
            <h1>LIVE </h1>
            <h2>COVIDE-19 CORONAVIRUS TRACKER</h2>
        </>
    )
}

export default covide
