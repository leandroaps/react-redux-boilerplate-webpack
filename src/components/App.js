import React from 'react';
import '../css/tailwind.css';

function App() {
    return (
        <div className="container mx-auto">
            <div className="text-center">
                <header className="bg-purple-darker m-6 p-6 rounded shadow-lg">
                    <h1 className="text-white text-3xl">Welcome </h1>
                </header>
                <p className="text-base">
                    React + Redux Thunk with ES6 Lint, Jest and Tailwind CSS
                </p>
            </div>
        </div>
    );
}

export default App;
