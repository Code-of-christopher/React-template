import './customers.css';
import { useState, useEffect } from 'react';

function Customers() {
    const [ customers, setCustomers ] = useState([]);

    useEffect(() => {
        // This code will run after the component mounts
        fetch('api/customers')
            .then(res => res.json())
            .then(customers => setCustomers(customers));
    }, []);

    return (
    <div>
        <h2>Customers</h2>
        <ul>
            {customers.map(customer =>
                <li key={customer.id}>
                    { customer.firstName } { customer.lastName }
                </li>
            )}
        </ul>
    </div>
    );
}

export default Customers;
