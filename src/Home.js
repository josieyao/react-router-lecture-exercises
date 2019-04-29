import React from 'react';
import { Link } from 'react-router-dom'

function Home(){
    return (
        <div>
            <h1>Home</h1>
            <Link to={'/moby-dick/'}>Moby Dick</Link><br/>
            <Link to={'/old-man-and-the-sea/'}>Old Man and the Sea</Link>
        </div>
    )
}

export default Home