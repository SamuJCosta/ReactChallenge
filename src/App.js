import { useState } from "react";
import ContactTable from "./components/ContactTable";
import ContactModal from "./components/ContactModal";
import useContacts from "./hooks/useContacts";

export default function App() {
  const {
    contacts,
    filteredContacts,
    search,
    setSearch,
    editingContact,
    setEditingContact,
    handleSave,
    handleDelete
  } = useContacts();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveWithModalClose = (contact) => {
    handleSave(contact);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow p-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">Contact Manager</h1>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search contacts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => {
                setEditingContact(null);
                setIsModalOpen(true);
              }}
              className="px-4 py-2 bg-black hover:bg-black text-white rounded-lg mt-2 md:mt-0"
            >
              + Add Contact
            </button>
          </div>
        </div>

        {/* Table */}
        <ContactTable
          contacts={filteredContacts}
          onEdit={(c) => {
            setEditingContact(c);
            setIsModalOpen(true);
          }}
          onDelete={handleDelete}
        />

        {/* Footer */}
        <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
          <p>Showing {filteredContacts.length} contacts</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ContactModal
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveWithModalClose}
          editingContact={editingContact}
          contacts={contacts}
        />
      )}
    </div>
  );
}
