import React, { useState } from "react";
import logo from "../../Assets/Logo_ML.png"
import lupita from "../../Assets/ic_Search.png"
import { Link, useNavigate } from "react-router-dom";

import { Props } from "../../types";
import './_navBar.scss'

function NabBar ({onSearch, setSearch}: Props) {
    const [items, setItems] = useState<string>("")
    const navigate = useNavigate()

    function handleChange(e: any) {
        e.preventDefault()
        setItems(e.target.value)
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        navigate(`/items?search=${items}`)
        onSearch(items);
        setItems("")
        setSearch([])
    }

    return (
        <nav className="nav">
            <div className="container">
                <Link to={"/"}>
                    <img src={logo} alt="logo ML" className="logo"/>
                </Link>
                <form onSubmit={handleSubmit} className="form">
                    <input
                    type="text"
                    id="item"
                    value={items}
                    placeholder="Nunca dejes de buscar"
                    onChange={handleChange}
                    />
                    <button className="box_lupita">
                        <img src={lupita} alt="lupa" />
                    </button>
                </form>
            </div>
        </nav>
    )
}

export default NabBar