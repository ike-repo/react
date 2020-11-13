let count =0;
const addOne = () => { 
    count++;
    renderCounter();
};

const minusOne = () => {
    count--;    
    renderCounter();
};

const reset = () => {
    count = 0;
    renderCounter();
};


var appRoot = document.getElementById('app');

const renderCounter = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>    
            <button onClick={addOne}>UP</button>
            <button onClick={minusOne}>DOWN</button>
            <button onClick={reset}>RESET</button>
        </div>
        )
    ReactDOM.render(templateTwo, appRoot);
}

renderCounter();
