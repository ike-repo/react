let isVisible = false;

const onCheckToggle = () =>{
    isVisible = !isVisible;
    render()
}

const appRoot = document.getElementById("app");

const render = () => {
    const template = (
        <div>
            <h1>Toggle Switch</h1>
            <button onClick={onCheckToggle}>{isVisible ? 'Hide Details' : 'Show Details'}</button>
            {isVisible && (
                <div> 
                    <p>This is secret sentence</p>
                </div>)}
        </div>
    )
    ReactDOM.render(template, appRoot)
}

render();