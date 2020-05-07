import { connect } from "react-redux";

import Home from "./component";

const mapStateToProps = state => ({
    isLoading : state.App.isLoading
});

const mapDispatchToProps = dispatch => ({
   
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);