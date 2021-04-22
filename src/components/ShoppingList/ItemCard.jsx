import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function Itemcard () {

    const header = (
        <img alt="Card" src="showcase/demo/images/usercard.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );
    const footer = (
        <span>
            <Button label="Buy" icon="pi pi-check" />
        </span>
    );

    return (
        <div>
            <Card title="Item" subTitle="Details" style={{ width: '20em' }} footer={footer} header={header}>
              
            </Card>
        </div>
    )
}