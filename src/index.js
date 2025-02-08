import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () =>{
    return(
        <div>
            <label htmlFor="email" className = "label">enter e-mail</label>
            <input type="email" id="email" name="email"/>
            <button style={{backgroundColor:'blue',color:'white'}} type="submit">Submit</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<React.StrictMode>
    <App />
</React.StrictMode>)