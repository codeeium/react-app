import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
        this.addClick = this.addClick.bind(this); // Bind the method here
        this.deleteClick = this.deleteClick.bind(this);
    }

    API_URL = 'http://localhost:5038/';

    componentDidMount() {
        this.refreshNotes().then(r => console.log(r));
    }

    async refreshNotes() {
        try {
            const response = await fetch(this.API_URL + 'api/GetNotes');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            // Map _id to id for React handling
            const notesWithId = data.map(note => ({
                ...note,
                id: note._id
            }));

            this.setState({ notes: notesWithId });
        } catch (error) {
            console.error("Error refreshing notes:", error);
        }
    }

    async addClick() {
        const newNote = document.getElementById('newNotes').value;
        const data = new FormData();
        data.append('description', newNote);

        try {
            const response = await fetch(this.API_URL + 'api/AddNotes', {
                method: 'POST',
                body: data
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            alert(result.message || "Note added successfully");
            this.refreshNotes();
        } catch (error) {
            alert(`Failed to add note: ${error.message}`);
        }
    }

    async deleteClick(id) {
        if (!id) {
            alert('Invalid note ID');
            return;
        }

        try {
            const response = await fetch(`${this.API_URL}api/DeleteNotes?id=${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(errorData.error || 'Failed to delete note');
                return;
            }

            const result = await response.json();
            alert(result.message || 'Deleted successfully');
            await this.refreshNotes();
        } catch (error) {
            alert(`Error deleting note: ${error.message}`);
        }
    }

    render() {
        const { notes } = this.state;
        return (
            <div className="App">
                <h2>To-do List</h2>
                <input id="newNotes" />&nbsp;
                <button onClick={this.addClick}>Add Note</button>
                {notes.map((note) => (
                    <p key={note.id}>
                        <b>*** {note.description}</b>&nbsp;
                        <button onClick={() => this.deleteClick(note.id)}>Delete Note</button>
                    </p>
                ))}
            </div>
        );
    }
}

export default App;
