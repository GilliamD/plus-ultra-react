import React, { Component } from "react";
import { loadData } from "../utilities/loaddata";

class Info extends Component {
    state = {
        info: {}
    };

    async componentDidMount() {
        console.log(this.props);
        this.getTale();
    }

    getTale = async () => {
        let info = await loadData(
            `https://api.themoviedb.org/3/tv/${this.props.showID}?api_key=cc42102845a020075536de832b824222`
        );
        console.log(info);    
        this.setState({
            info //returns an object of 28 objects
        });
    };

    render() {
        const { info } = this.state;
        return (
        <ul>
            <h1>{info.name}</h1>
            <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${info.backdrop_path}`} alt="This" />
            <h1>{info.homepage}> </h1>
            <h1>{info.overview}</h1>
            <h1>{info.original_language}</h1>
    </ul>
);
}
}

export default Info;