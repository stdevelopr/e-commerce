import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function Itemcard({ item }) {
    const header = (
        <img alt="Card" src={`https://source.unsplash.com/random/200x200?sig=${item}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );
    const footer = (
        <div>
            <div>
            R$ ---
            </div>
            <div>
                <Button label="Buy" icon="pi pi-check" />
            </div>
        </div>
    );

    return (
        <div>
            <Card title="Item" subTitle="Descrição do item" style={{ width: '20em', margin: '10px' }} footer={footer} header={header}>

            </Card>
        </div>
    )
}