import React from 'react';

class BackToTop extends React.Component {
    componentDidMount() {
        this.frame = null;
        this.updateVisibility = () => {
            this.frame = null;
            if (this.element) {
                this.element.classList.toggle("is-visible", window.pageYOffset > 100);
            }
        };
        this.onScroll = () => {
            if (!this.frame) {
                this.frame = window.requestAnimationFrame(this.updateVisibility);
            }
        };
        window.addEventListener("scroll", this.onScroll, { passive: true });
        this.updateVisibility();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
        if (this.frame) window.cancelAnimationFrame(this.frame);
    }

    scrollToTop = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
        });
    };

    render() {
        return (
            <a
                ref={(element) => { this.element = element; }}
                href="#page-top"
                className="back-to-top"
                aria-label="Back to top"
                onClick={this.scrollToTop}
            >
                <i className="fa fa-chevron-up"></i>
            </a>
        );
    }
}

export default BackToTop;


