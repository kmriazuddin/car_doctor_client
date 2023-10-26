

const BookingRow = ({ booking, handleDelete, handleUpdate }) => {
    const { _id, img, customerName, date, service, price, status } = booking;

    

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-error text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td className="flex items-center gap-5">
                <div className="avatar">
                    <div className="w-28 rounded">
                        {img && <img src={img} alt={customerName} />}
                    </div>
                </div>
                <div>
                    <div className="text-xl font-bold">{customerName}</div>
                    <div className="text-sm opacity-70">{date}</div>
                </div>
            </td>
            <td className="text-lg">{service}</td>
            <td className="text-lg">${price}</td>
            <th>
                {
                    status === 'confirm' ? <span className="text-lg font-bold text-success">Confirm</span> :
                    <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-lg">Update</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;