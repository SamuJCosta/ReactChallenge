import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useContacts() {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [editingContact, setEditingContact] = useState(null);
  const [search, setSearch] = useState("");

  const validateContact = (contact) => {
    // Verifica se o nome está vazio
    if (!contact.name.trim()) {
      return "Name is required.";
    }

    // Validação do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contact.email)) {
      return "Please enter a valid email address.";
    }

    // Verifica se o telefone tem 9 dígitos
    const phoneRegex = /^[0-9]{9}$/;
    if (!phoneRegex.test(contact.phone)) {
      return "Phone number must have exactly 9 digits.";
    }

    // Verifica se já existe um contacto com o mesmo email
    const isDuplicateEmail = contacts.some(
      (c) => c.email === contact.email && c.email !== editingContact?.email
    );
    if (isDuplicateEmail) {
      return "A contact with this email already exists.";
    }

    // Verifica se já existe um contacto com o mesmo telefone
    const isDuplicatePhone = contacts.some(
      (c) => c.phone === contact.phone && c.phone !== editingContact?.phone
    );
    if (isDuplicatePhone) {
      return "A contact with this phone number already exists.";
    }

    return null;
  };

  const handleSave = (contact) => {
    const validationError = validateContact(contact);
    if (validationError) {
      alert(validationError);
      return;
    }

    if (editingContact) {
      setContacts(
        contacts.map((c) =>
          c.email === editingContact.email ? contact : c
        )
      );
      setEditingContact(null);
    } else {
      setContacts([...contacts, contact]);
    }
  };

  const handleDelete = (email) => {
    setContacts(contacts.filter((c) => c.email !== email));
    if (editingContact?.email === email) setEditingContact(null);
  };

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase()) ||
    c.phone.toLowerCase().includes(search.toLowerCase())
  );

  return {
    contacts,
    editingContact,
    search,
    filteredContacts,
    setSearch,
    setEditingContact,
    handleSave,
    handleDelete
  };
}
