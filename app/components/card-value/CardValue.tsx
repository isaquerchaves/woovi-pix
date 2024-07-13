import { Card } from "./CardValue.style";

interface ValueProps {
    value: number;
}

const CardValue = ({value}: ValueProps) => {
    return ( 
        <Card>
            <div>
                <p className="title"><span>1x</span> R$ {value}</p>
                <p className="sub-title">Ganhe <span>3%</span> de Cashback</p>
            </div>

            <p className="cashback-value">🤑 <span>&nbsp;R$ 300,00&nbsp;</span>de volta no seu Pix na hora</p>
        </Card>
     );
}
 
export default CardValue;