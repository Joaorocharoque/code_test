import React from 'react';

class Posts extends React.Component {
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
            <div align="center">
                <h1>Lista de Posts</h1>
                
                
                    {this.state.id.map(item => (
                        <li key={item.userId}>
                                <hr/>
                            <p><b>Id:</b> {item.id}</p>
                            <p><b>Titulo:</b> {item.title}</p>
                            <p><b>Body:</b> {item.body}</p>
                        </li>
                    ))}
         
            </div>
        );
    }
}

  export default Posts;
