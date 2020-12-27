import React, { useState } from 'react';

//import css in order
import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css';
import { GlobalStyles } from './style';

//import js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';

//import components
import Navbar from './components/navbar.js';
import Intro from './components/intro.js';
import About from './components/about.js';
import Portfolio from './components/portfolio.js';
import Contact from './components/contact.js';
import BackToTop from './components/back-top.js';
import Preloader from './components/preloader.js';
import Timeline from './components/timeline.js';



// ================================
import { lightTheme, darkTheme } from './theme';
import { ThemeProvider } from 'styled-components';





const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    }
    return(
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} >
            <>
                <GlobalStyles />
                <Navbar toggleTheme={toggleTheme} currTheme={theme} />
                <Intro />
                <About />
                <Portfolio />
                <Timeline />
                <Contact />

                <BackToTop />
                <Preloader />
            </>
        </ThemeProvider>
    );
};

export default App;