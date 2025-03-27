export default function App1(){
    const mystyle=()=>{
        backgroundColor="orange";
        color:"blue";

    }
    return(
        <div>
            <h2>This is App1</h2>
            <p style={{backgroundColor:'pink',color:'blue'}}> This is paragraph.</p>
            <p onChange={mystyle}>this is second paragraph</p>
        </div>
    )
}