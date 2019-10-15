import React from 'react';
import Page from './Page.jsx';
import SearchResultViewController from '../search/SearchResultViewController.jsx';
import PostDetailViewController from '../post_detail/PostDetailViewController.jsx';
import PostEditor from '../post_editor';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const MainPage = (props) => {
    // let { postId } = useParams();
    return (
        <div className='mainPage'>
            <Router>
                <Page>
                    <Switch>
                        <Route
                            key='post-detail'
                            path="/post_detail/:postId"
                            render={props => (
                                <PostDetailViewController 
                                    key={props.match.params.postId}
                                    postId={props.match.params.postId}
                                />
                            )}
                        />
                        <Route path="/edit_post">
                            <PostEditor />
                        </Route>
                        <Route
                            key='main-route'
                            path="/"
                            component={PostDetailViewController}
                        />
                    </Switch>
                </Page>
            </Router>
        </div>
    );
}
export default MainPage;
