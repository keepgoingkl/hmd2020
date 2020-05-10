import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            p1: true,
            p2: false,
        }
    }

    refresh() {
        this.setState({ p1: false, p2: false })
    }

    toggle(e, pg) {
        this.refresh();
        this.setState({ [pg]: true })
    }

    render() {
        const { p1, p2} = this.state;
       
        const down = (
            <div className="down"
                onClick={e => this.toggle(e, "p2")}
            >
                <i className="fas fa-level-down-alt"></i>
            </div>
        )

        const top = (
            <div className="top"
                onClick={e => this.toggle(e, "p1")}
            >
                <i className="fas fa-level-up-alt"></i>
            </div>

        )

        const page1 = (
            <section className="page-1">
                <h1>
                    Happy Mother's Day!
                </h1>
                <h2>May 10, 2020</h2>
                {down}
            </section>
        )

        const page2 = (
            <section className="page-2">
                {top}
                <p>
                    Happy Mother's Day Mom! Thank you for being such an awesome parent these past 27 years. You are always there trying your best to support me whether it is cooking great food, giving advice, or getting what I need. I finally have a job now so I can send something better than a card in the future now. You and dad should relax and enjoy life more.  
                </p>
                <p>
                    I love you,
                    <br></br>
                    Kevin
                </p>
            </section>
        )

        return (
            <div className="main">
                {p1 && page1 }
                {p2 && page2 }
               
            </div>
        )
    }
}

export default Main;