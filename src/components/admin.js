import React from "react"

function admin(){
    return(<>
        <div style={{paddingTop:"4%"}}>
        <form type="submit">
            <input type="text"/> <button type="submit" >card heading</button><br /><br />
            <textarea rows={5} cols={33} type="text" /> <button type="submit" >card content</button>
            </form>
        </div>
    </>)
}

export default admin 
