import React, { useReducer, useState } from "react";

export default function BotReducer(state, action) {
    // console.log(action.type);
    // console.log(action.payload);
    switch (action.type) {
        case "Patinet_DOB":
            return [...state, action.payload];
        case "Patinet_appointmentDate":
            return [...state, action.payload];
        case "Patinet_Phone":
            return [...state, action.payload];
        case "Patinet_timeSlot":
            return [...state, action.payload];
        default:
            return state;
    }
}