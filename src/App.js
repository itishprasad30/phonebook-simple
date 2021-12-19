import "./styles.css";

import React, { useRef, useState } from "react";

export default function App() {
    const [input, setInput] = useState("");
    const inputRef = useRef(null);
    const btnHandle = () => {
        // console.log("Hello pintu");
        setInput(inputRef.current.value);
    };

    const [items, setItems] = useState([]);

    const addItemToPage = (item) => {
        setItems([...items, item]);
    };
    // console.log(items);

    return (
        <div className="App">
            <h2>Start editing to see some magic happen!</h2>

            <input
                type="text"
                ref={inputRef}
                // onChange={(e) => setInput(e.target.value)}
                placeholder="Type here..."
            />
            <button onClick={btnHandle}>Click </button>

            <h1> you have entered this {input}</h1>

            <FormData addItemToPage={addItemToPage} />
            <DisplyData items={items} />
        </div>
    );
}

function FormData({ addItemToPage }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");

    const BtnClick = (e) => {
        e.preventDefault();
        addItemToPage({ firstName, lastName, number });
        setFirstName("");
        setLastName("");
        setNumber("");
    };
    return (
        <form onSubmit={BtnClick}>
            <input
                type="text"
                placeholder="FirstName here"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                placeholder="LastName here"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <br />
            <input
                type="number"
                placeholder="Phone Number"
                name="PhoneNumber"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button type="submit" onClick={BtnClick}>
                Submit{" "}
            </button>
        </form>
    );
}

function DisplyData({ items }) {
    return (
        <table style={{ marginTop: "1em", width: 300 }}>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Number</th>
                </tr>
            </thead>
            <tbody style={{ marginTop: ".5em" }}>
                {items.map((item) => (
                    <tr key={`${item.firstName} ${item.lastName} `}>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.number}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
