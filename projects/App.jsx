import React from "react";
import { Link } from 'react-router-dom'
import "./App.css";
const profile = ({match, loading})=>{
    if(loading) return <div>정보 불러오는 중 </div>
    return <div>프로필 정보 : {match.params.profile}</div>
}
class App extends React.Component {

}
render() {
    return (
        <div>
            <div className="links">
                <Link to="/profile" className="link">
                    Home
                  </Link>
                <Link to="/profile/1" className="link">
                    profile1
                </Link>
                <Link to="/profile/2" className="link">
                    profile2
                 </Link>
            </div>
            <div className="tabs">
            <switch>
                <Route path="/profile" exact  Component={SelectProfile}/>
                <Route 
                    path ="/profile/:profileId"
                    render={(props)=>{
                        return <Profile {...props} loading={this.state.loading}/>
                    }}
                     ></Route>
                </switch>
            </div>
        </div>
    )
}