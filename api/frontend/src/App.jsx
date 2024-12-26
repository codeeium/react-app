import React, {Component} from 'react';
import './App.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
        this.addClick = this.addClick.bind(this);  // Bind the method here
        this.deleteClick = this.deleteClick.bind(this);
    }

    API_URL = 'http://localhost:5038/'

    componentDidMount() {
        this.refreshNotes();
    }


    async refreshNotes() {
        fetch(this.API_URL + 'api/GetNotes')
            .then(response => response.json())
            .then(data => {
                this.setState({notes: data});
            })
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

            try {
                const result = await response.json();

                // Check for expected success response structure (adapt to your server's response)
                if (result && result.status === 'success') {
                    alert(result.message || "Note added successfully");
                    this.refreshNotes();
                } else {
                    alert("Failed to add note: Server response indicates an error.");
                }

            } catch (jsonError) {
                // Handle cases where the server returns a non-JSON response or an unexpected JSON structure
                if (response.status === 200 || response.status === 201) { // Assuming success codes
                    alert("Note added successfully (Server response may not be in JSON format)");
                    this.refreshNotes();
                } else {
                    alert("Failed to add note: Unexpected server response.");
                }
            }

        } catch (error) {
            alert(`Failed to add note: ${error.message}`);
        }
    }

    async deleteClick(id) {


        await fetch(this.API_URL + 'api/DeleteNotes?id=' + id, {
            method: 'DELETE',
        }).then(res=> res.json())
            .then(result => {
                alert(result)
                this.refreshNotes();
            })
        this.refreshNotes()
    }

    render() {
        const {notes} = this.state;
        return (
            <div className="App">
                <h2>To do list</h2>
                <input id="newNotes"/>&nbsp;
                <button onClick={()=>this.addClick()}>Add Note</button>

                {notes.map((note) => (<p key={note.id}>
                        <b>*** {note.description}</b>&nbsp;
                        <button onClick={() => this.deleteClick(note.id)}>Delete Note</button>
                    </p>))}
            </div>);
    }
}


export default App;
