import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/styles.css';

const ReturnItemsPage: React.FC = () => {
    const [itemName, setItemName] = useState('');
    const [barcode, setBarcode] = useState('');
    const [price, setPrice] = useState('');
    const [reason, setReason] = useState('');
    const history = useHistory();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle return items logic here
        console.log('Item Name:', itemName);
        console.log('Barcode:', barcode);
        console.log('Price:', price);
        console.log('Reason:', reason);
        history.push('/select-shopping-app');
    };

    return (
        <div className="container">
            <h1>Return Items</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="item-name">Item Name:</label>
                    <input
                        type="text"
                        id="item-name"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="barcode">Barcode:</label>
                    <input
                        type="text"
                        id="barcode"
                        value={barcode}
                        onChange={(e) => setBarcode(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="text"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="reason">Reason for Return:</label>
                    <textarea
                        id="reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit Return</button>
            </form>
        </div>
    );
};

export default ReturnItemsPage;