export default function ContactItem({ contact, onEdit, onDelete }) {
  return (
    <div className="flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition">
      <div>
        <p className="font-medium text-gray-900">{contact.name}</p>
        <p className="text-sm text-gray-500">{contact.email}</p>
        <p className="text-sm text-gray-500">{contact.phone}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(contact)}
          className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-sm rounded-lg transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(contact.email)}
          className="px-3 py-1 bg-red-600 hover:bg-red-700 text-sm text-white rounded-lg transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
