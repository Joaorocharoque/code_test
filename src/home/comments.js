import React from 'react';

class Comments extends React.Component {
    state = {
        id: []
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    id: res
                });
            });
    }

    render() {
        return (
            <div align="center">
                
                <h1 >Lista de Comments</h1>
                
                    {this.state.id.map(item => (
                        <li key={item.userId}>
                            <hr/>
                            <p><b>Id:</b> {item.id}</p>
                            <p><b>Nome:</b> {item.name}</p>
                            <p><b>Email:</b> {item.email}</p>
                            <p><b>Body:</b> {item.body}</p>
                        </li>
                    ))}
            </div>
           
        );
    }
}

  export default Comments;
