import { useState, useEffect } from "react";

export default function ContactForm({ onSave, editingContact, onCancel }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    if (editingContact) setForm(editingContact);
  }, [editingContact]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;
    onSave(form);
    if (!editingContact) {
      setForm({ name: "", email: "", phone: "" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 border rounded-xl shadow bg-white"
    >
      <h2 className="text-lg font-semibold text-gray-800">
        {editingContact ? "Edit Contact" : "Add New Contact"}
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
        >
          {editingContact ? "Update" : "Add"}
        </button>
        {editingContact && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
