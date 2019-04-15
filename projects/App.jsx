const App = () => (
    <Router>
        <div>
            <Links />
            <Route
                path="/:date(\) : ext(\)">
                render={({ match }) => (
                    <div>
                        <h1> YES Matched: </h1>
                        <div> date : {match.params.date}</div>
                        <div> ext : {match.params.ext}</div>
                    </div>
                )}
            </Route>
        </div>
    </Router>
)