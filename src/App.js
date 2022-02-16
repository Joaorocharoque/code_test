import React from 'react';

class App extends React.Component {
    state = {
        id: []
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    id: res
                });
            });
    }

    render() {
        return (
            <div>
                <h1>Lista de Posts</h1>

                <ul>
                    {this.state.id.map(item => (
                        <li key={item.userId}>
                            <h1>Posts</h1>
                            <p><b>Id:</b> {item.id}</p>
                            <p><b>Titulo:</b> {item.title}</p>
                            <p><b>Body:</b> {item.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

  export default App;
