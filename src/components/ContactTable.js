export default function ContactTable({ contacts, onEdit, onDelete }) {
  if (!contacts.length) {
    return (
      <p className="text-center text-gray-500 p-6">No contacts found</p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto text-left border-collapse">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="p-3 font-medium text-gray-700">Name</th>
            <th className="p-3 font-medium text-gray-700">Email</th>
            <th className="p-3 font-medium text-gray-700">Phone</th>
            <th className="p-3 font-medium text-gray-700 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c.email} className="border-b hover:bg-gray-50">
              <td className="p-3 text-gray-900">{c.name}</td>
              <td className="p-3 text-gray-700">{c.email}</td>
              <td className="p-3 text-gray-700">{c.phone}</td>
              <td className="p-3 text-right">
                <button
                  onClick={() => onEdit(c)}
                  className="px-3 py-1 mr-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-lg"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(c.email)}
                  className="px-3 py-1 text-sm bg-red-600 hover:bg-red-700 text-white rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
