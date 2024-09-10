export const MenuIcon=({clicked})=>{
    return (
        <>
        <div >
             <input type="checkbox" disabled checked={clicked??false} id="checkbox" />
            <label htmlFor="checkbox" className="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
            </label>
        </div>
        </>
    )
}
