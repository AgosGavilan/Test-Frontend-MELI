import React, { useState } from "react";
import logo from "../../Assets/Logo_ML.png"
import lupita from "../../Assets/ic_Search.png"
import { useNavigate } from "react-router-dom";

import { Props } from "../../types";

function NabBar ({onSearch}: Props) {
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
    }

    return (
        <nav>
            <div>
                <img src={logo} alt="logo ML" />
            </div>
            <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    id="item"
                    value={items}
                    placeholder="Nunca dejes de buscar"
                    onChange={handleChange}
                    />
                    <button>
                        <img src={lupita} alt="lupa" />
                    </button>
            </form>

        </nav>
    )
}

export default NabBar