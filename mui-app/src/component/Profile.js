import { Typography } from "@mui/material";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

export default function Profile() {
    const [phone, setPhone] = useState("");

    return (
        <>
            <hr/>
            <label>
                Name: <input name="myInput" />
            </label><br></br>
            <label>
                phone Number: <input name="myInput" />
            </label><br/>
            <label>
                Name: <input name="myInput" />
            </label>
            
        </>
    );
}