import React, { useState } from 'react'

const Bill = () => {

    const residentBill = [
        {
            from: 0,
            to: 50,
            rupees: 3
        },
        {
            from: 51,
            to: 100,
            rupees: 4
        },
        {
            from: 101,
            to: 150,
            rupees: 5
        },
        {
            from: 151,
            to: 250,
            rupees: 6
        },
        {
            from: 251,
            to: 99999,
            rupees: 7
        }
    ]

    const commercialBill = [
        {
            from: 0,
            to: 50,
            rupees: 13
        },
        {
            from: 51,
            to: 100,
            rupees: 14
        },
        {
            from: 101,
            to: 150,
            rupees: 15
        },
        {
            from: 151,
            to: 250,
            rupees: 16
        },
        {
            from: 251,
            to: 99999,
            rupees: 17
        }
    ]

    const industrialBill = [
        {
            from: 0,
            to: 50,
            rupees: 23
        },
        {
            from: 51,
            to: 100,
            rupees: 24
        },
        {
            from: 101,
            to: 150,
            rupees: 25
        },
        {
            from: 151,
            to: 250,
            rupees: 26
        },
        {
            from: 251,
            to: 99999,
            rupees: 27
        }
    ]

    const [bill, setBill] = useState({ unit: 0, type: "" })
    const [resSlab, setResSlab] = useState([])
    const [comSlab, setComSlab] = useState([])
    const [indSlab, setIndSlab] = useState([])

    const handleChange = (e) => {
        setBill({ ...bill, [e.target.name]: e.target.value })
        console.log(e.target.value);
        let data = bill.unit
        if (e.target.name.toLowerCase() === 'unit')
            data = e.target.value;
        if (data) {
            const resData = residentBill.filter(newTax => { return newTax.from < data })
            resData[resData.length - 1].to = data;
            // console.log(resData);
            // console.log(data);
            setResSlab(resData)

            const comData = commercialBill.filter(newTax => { return newTax.from < data })
            comData[comData.length - 1].to = data;
            // console.log(comData);
            setComSlab(comData)

            const indData = industrialBill.filter(newTax => { return newTax.from < data })
            indData[indData.length - 1].to = data;
            // console.log(indData);
            setIndSlab(indData)
        } else {
            setResSlab([])
            setComSlab([])
            setIndSlab([])
        }
    }

    const resTotal = () => {
        let total = 0;
        resSlab.map((tax) => {
            return total += (((tax.to - tax.from) * tax.rupees))
        })
        return total;
    }

    const comTotal = () => {
        let total = 0;
        comSlab.map((tax) => {
            return total += (((tax.to - tax.from) * tax.rupees))
        })
        return total;
    }

    const indTotal = () => {
        let total = 0;
        indSlab.map((tax) => {
            return total += (((tax.to - tax.from) * tax.rupees))
        })
        return total;
    }


    return (
        <div>
            <div className="container">
                <h1 className='text-center my-2'>Light Bill</h1>
                <form>
                    <div className="card p-4" style={{ backgroundColor: "black", color: "whitesmoke" }}>
                        <div className="mb-3">
                            <label htmlFor="unit" className="form-label fs-5"> <b>Unit</b> </label>
                            <input type="text" className="form-control" id="unit" name="unit" value={bill.unit} onChange={handleChange} />
                        </div>

                        <label htmlFor="type" className='form-label fs-5'><b>Type</b> </label>
                        <select name="type" value={bill.type} id="dropdown" className='form-select' onChange={handleChange}>
                            <option value="" disabled>select</option>
                            <option value="Resident" >Resident</option>
                            <option value="Commercial"  >Commercial</option>
                            <option value="Industrial" >Industrial</option>
                        </select>
                    </div>
                </form>
                <br />

                {bill.type === "Resident" && <div>
                    <table className="table my-5 text-center">
                        <thead>
                            <tr>
                                <th scope="col" className='table-dark'>Unit</th>
                                <th scope="col" className='table-dark'>Rupees</th>
                                <th scope="col" className='table-dark'>Total</th>
                            </tr>
                        </thead>
                        {resSlab.map((bill, index) => {
                            return <tbody key={index}>
                                <tr>
                                    <td className='table-secondary' style={{ border: "1px solid black" }}>{bill.from} to {bill.to}</td>
                                    <td className='table-secondary' style={{ border: "1px solid black" }}>{bill.rupees}</td>
                                    <td className='table-secondary' style={{ border: "1px solid black" }}>{(bill.to - bill.from) * bill.rupees}</td>
                                </tr>
                            </tbody>
                        })}
                    </table>
                    <h5 className='my-2'> Total: {resTotal()} </h5>
                </div>
                }

                {bill.type === "Commercial" && <div>
                    <table className="table my-3 text-center">
                        <thead>
                            <tr>
                                <th scope="col" className='table-dark'>Unit</th>
                                <th scope="col" className='table-dark'>Rupees</th>
                                <th scope="col" className='table-dark'>Total</th>
                            </tr>
                        </thead>
                        {comSlab.map((bill, index) => {
                            return <tbody key={index}>
                                <tr>
                                    <td className='table-secondary' style={{ border: "1px solid black" }}>{bill.from} to {bill.to}</td>
                                    <td className='table-secondary' style={{ border: "1px solid black" }}>{bill.rupees}</td>
                                    <td className='table-secondary' style={{ border: "1px solid black" }}>{(bill.to - bill.from) * bill.rupees}</td>
                                </tr>
                            </tbody>
                        })}
                    </table>
                    <h5 className='my-2'> Total: {comTotal()} </h5>
                </div>
                }

                {bill.type === "Industrial" && <div>
                    <table className="table my-3 text-center">
                        <thead>
                            <tr>
                                <th scope="col" className='table-dark' >Unit</th>
                                <th scope="col" className='table-dark'>Rupees</th>
                                <th scope="col" clcd assName='table-dark'>Total</th>
                            </tr>
                        </thead>
                        {indSlab.map((bill, index) => {
                            return <tbody key={index}>
                                <tr>
                                    <td className='table-secondary' style={{ border: "1px solid black" }}>{bill.from} to {bill.to}</td>
                                    <td className='table-secondary' style={{ border: "1px solid black" }}> {bill.rupees}</td>
                                    <td className='table-secondary' style={{ border: "1px solid black" }}>{(bill.to - bill.from) * bill.rupees}</td>
                                </tr>
                            </tbody>
                        })}
                    </table>
                    <h5 className='my-2'> Total: {indTotal()} </h5>
                </div>}
            </div>
        </div>

    )
}

export default Bill
