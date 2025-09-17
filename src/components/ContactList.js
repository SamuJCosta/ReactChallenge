import ContactItem from "./ContactItem";

export default function ContactList({ contacts, onEdit, onDelete }) {
  if (!contacts.length) {
    return (
      <p className="text-center text-gray-500 p-6">No contacts found</p>
    );
  }

  return (
    <div className="divide-y">
      {contacts.map((c) => (
        <ContactItem
          key={c.email}
          contact={c}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
