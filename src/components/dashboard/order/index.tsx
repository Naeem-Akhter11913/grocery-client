import React from 'react'

interface type {
    id: string,
    date: string,
    status: string,
    total: string,
}
const orders: type[] = [
    {
        id: '#1357',
        date: 'March 45, 2020', // Invalid date intentionally copied as-is
        status: 'Processing',
        total: '$125.00 for 2 item',
    },
    {
        id: '#2468',
        date: 'June 29, 2020',
        status: 'Completed',
        total: '$364.00 for 5 item',
    },
    {
        id: '#2366',
        date: 'August 02, 2020',
        status: 'Completed',
        total: '$280.00 for 3 item',
    },
];

const Order = () => {
    return (
        <div className="container my-5">
            <h2 className="fw-bold mb-4">Your Orders</h2>
            <div className="table-responsive">
                <table className="table table-bordered align-middle">
                    <thead className="table-light">
                        <tr>
                            <th>Order</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, idx) => (
                            <tr key={idx}>
                                <td>{order.id}</td>
                                <td>{order.date}</td>
                                <td>{order.status}</td>
                                <td>{order.total}</td>
                                <td>
                                    <a href="#" className="text-success fw-semibold text-decoration-none">
                                        View
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Order