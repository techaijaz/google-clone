import React from 'react'
import "./Home.css"

import { Link } from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps'
import { Avatar } from '@material-ui/core'
import Search from './Search'


function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                   <Link to="/about">About</Link>
                   <Link to="/store">Store</Link>
                </div>
                <div className="home__headerRight">
                    <a href="http://gmail.com">Gmail</a>
                    <Link to="/images">Images</Link>
                    <AppsIcon/>
                    <Avatar/>
                </div>
            </div>
            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo"/>
                <div className="home__inputContainer">
                    <Search />
                    <a className="home__storyLink" href="https://about.google/stories/clean-air-for-kampala/?utm_source=Google&utm_medium=HPP&utm_campaign=Engineer_Story">Meet the research team using AI to reduce air pollution in Uganda</a>
                    <div className="home__langLink">Google offered in:  <a href="https://www.google.com/setprefs?sig=0_88LqBJAqyHhlP7rNptY5QUqBPy0%3D&amp;hl=hi&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjbgN23u7PrAhUaxjgGHbaxDDsQ2ZgBCBE">हिन्दी</a>    <a href="https://www.google.com/setprefs?sig=0_88LqBJAqyHhlP7rNptY5QUqBPy0%3D&amp;hl=bn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjbgN23u7PrAhUaxjgGHbaxDDsQ2ZgBCBI">বাংলা</a>    <a href="https://www.google.com/setprefs?sig=0_88LqBJAqyHhlP7rNptY5QUqBPy0%3D&amp;hl=te&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjbgN23u7PrAhUaxjgGHbaxDDsQ2ZgBCBM">తెలుగు</a>    <a href="https://www.google.com/setprefs?sig=0_88LqBJAqyHhlP7rNptY5QUqBPy0%3D&amp;hl=mr&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjbgN23u7PrAhUaxjgGHbaxDDsQ2ZgBCBQ">मराठी</a>    <a href="https://www.google.com/setprefs?sig=0_88LqBJAqyHhlP7rNptY5QUqBPy0%3D&amp;hl=ta&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjbgN23u7PrAhUaxjgGHbaxDDsQ2ZgBCBU">தமிழ்</a>    <a href="https://www.google.com/setprefs?sig=0_88LqBJAqyHhlP7rNptY5QUqBPy0%3D&amp;hl=gu&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjbgN23u7PrAhUaxjgGHbaxDDsQ2ZgBCBY">ગુજરાતી</a>    <a href="https://www.google.com/setprefs?sig=0_88LqBJAqyHhlP7rNptY5QUqBPy0%3D&amp;hl=kn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjbgN23u7PrAhUaxjgGHbaxDDsQ2ZgBCBc">ಕನ್ನಡ</a>    <a href="https://www.google.com/setprefs?sig=0_88LqBJAqyHhlP7rNptY5QUqBPy0%3D&amp;hl=ml&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjbgN23u7PrAhUaxjgGHbaxDDsQ2ZgBCBg">മലയാളം</a>    <a href="https://www.google.com/setprefs?sig=0_88LqBJAqyHhlP7rNptY5QUqBPy0%3D&amp;hl=pa&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjbgN23u7PrAhUaxjgGHbaxDDsQ2ZgBCBk">ਪੰਜਾਬੀ</a>  </div>
                </div>
            </div>
            <footer>Clone By : Aijaz Ahmad ;)</footer>
        </div>
    )
}

export default Home
