import { Component } from 'react';
import './Input.css';
class Input extends Component {
    state = {
        active: false,
        ul: null,
    };
    show = () => {
        let ul = document.querySelector('ul');
        this.setState((prevState) => {
            return {
                list: (ul.style.display = 'flex'),
                active: (prevState.active = true),
            };
        });
    };
    hide = () => {
        let ul = document.querySelector('ul');
        this.setState((prevState) => {
            return {
                li: (ul.style.display = 'none'),
                active: (prevState.active = false),
            };
        });
    };
    showAll = (e) => {
        this.setState((prevState) => {
            let ul = document.querySelector('ul');
            return {
                ul: (this.state.ul = e.target.innerText),
                none: (ul.style.display = 'none'),
            };
        });
    };
    render() {
        const { active } = this.state;
        const { ul } = this.state;
        return (
            <div className="container">
                <div className="search_content">
                    <div className="search">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
                                fill="white"
                            />
                        </svg>
                        <input type="text" placeholder="Search for a country…" />
                    </div>
                    <div className="dropdown">
                        <div
                            className="dropdown_header"
                            onClick={active === false ? this.show : this.hide}
                        >
                            {ul ? ul : 'Filter by Region'}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M8.45 0.450001L5 3.9L1.55 0.450001L0.5 1.5L5 6L9.5 1.5L8.45 0.450001Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <ul onClick={(ul) => this.showAll(ul)} className="dropdown_main">
                            <li>Africa</li>
                            <li>America</li>
                            <li>Asia</li>
                            <li>Europe</li>
                            <li>Oceania</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Input;
