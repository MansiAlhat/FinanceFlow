import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch transactions data from the backend API
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/transactions/')
            .then(response => {
                setTransactions(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError("Error fetching transactions!");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Transactions</h1>
            {transactions.length === 0 ? (
                <p>No transactions found.</p>
            ) : (
                <ul>
                    {transactions.map((transaction) => (
                        <li key={transaction.id}>
                            {transaction.name}: ${transaction.amount}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Transactions;
