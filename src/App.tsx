import firebase from "./firebaseConfig";
import { getDatabase, ref, set, update } from "firebase/database"
import { useState } from "react";
import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>Hello World</h1>
        </div>
    );
}

export default App;
