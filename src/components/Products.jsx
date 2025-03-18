import './Products.css'
export default function Products(){
    const products=[
        {id:1,name:'product 1', price:30},
        {id:2,name:'product 2',price:40},
        {id:3,name:'product 3',price:50},
    ];
    return (
        <div>
            <div className="App-Products-Row">
                {
                    products.map((value,index)=>(
                        <div className="App-Products-Box">
                        <h3>{value.name}</h3>
                        <h4>{value.price}</h4>
                        </div>
                    ))}
            </div>
        </div>
    );
}