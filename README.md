
# React Contact Manager

This is a simple **React Contact Manager** application. The app allows users to:

- **Add** new contacts
- **Edit** existing contacts
- **Delete** contacts
- **Search** contacts by name, email, or phone

## Features

- **Add a Contact**: Fill in the name, email, and phone to add a new contact.
- **Edit a Contact**: Edit any existing contact's details.
- **Delete a Contact**: Remove a contact from the list.
- **Search**: Filter contacts in real-time by name, email, or phone.

## Technologies Used

- **React.js** for building the user interface.
- **Tailwind CSS** for styling the app.
- **localStorage** to persist contacts.

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/SamuJCosta/ReactChallenge
cd react-contact-manager
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Application
```bash
npm start
```
The app will be available at [http://localhost:3000](http://localhost:3000).

## Data Persistence
- Contacts are stored in **localStorage**, ensuring that the contact list persists even after refreshing the page.

## Data Validation
- **Name**: Required
- **Email**: Must be unique and valid
- **Phone**: Must have exactly 9 digits and be unique. 
- Invalid inputs will prompt an error message to guide users in correcting their entries.

## Responsiveness
- The app is designed to be responsive, providing a clean and functional layout on mobile and desktop devices.

## Component Structure
- The app is organized into several reusable components:
  - **App.jsx**: The main container managing the state and rendering components.
  - **ContactForm.jsx**: Handles adding and editing contacts.
  - **ContactList.jsx**: Displays a list of contacts.
  - **ContactItem.jsx**: Represents each individual contact.
  - **ContactModal.jsx**: Modal for adding/editing a contact.
  - **ContactTable.jsx**: Table structure for displaying contacts.
  - **useContacts.js**: Custom hook managing contact data, including validation and CRUD operations.
  - **useLocalStorage.js**: Custom hook for persisting contacts in localStorage.

## Additional Features
- The application prevents the addition of contacts with duplicate emails or phone numbers, ensuring data integrity.
