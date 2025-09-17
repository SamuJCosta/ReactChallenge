import { useState, useEffect } from "react";

export default function ContactModal({ onClose, onSave, editingContact, contacts = [] }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    if (editingContact) {
      setForm(editingContact);
    }
  }, [editingContact]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      alert("Name is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^[0-9]{9}$/;
    if (!phoneRegex.test(form.phone)) {
      alert("Phone number must have exactly 9 digits.");
      return;
    }

    const isDuplicateEmail = contacts.some(
      (c) => c.email === form.email && c.email !== editingContact?.email
    );
    if (isDuplicateEmail) {
      alert("A contact with this email already exists.");
      return;
    }

    const isDuplicatePhone = contacts.some(
      (c) => c.phone === form.phone && c.phone !== editingContact?.phone
    );
    if (isDuplicatePhone) {
      alert("A contact with this phone number already exists.");
      return;
    }

    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          {editingContact ? "Edit Contact" : "Add Contact"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone (9 digits)"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black hover:bg-black text-white rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
