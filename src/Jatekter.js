import Elem from "./Elem.js";


export default function Jatekter(props){
        return(
            <div>

                {
                    props.adatLISTA.map((elem, index) =>{
                        return  (<Elem elem = {elem} key = {index}/>)
                    })
                }

            </div>
        )
}