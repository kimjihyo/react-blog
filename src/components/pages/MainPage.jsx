import React from 'react';
import Page from './Page.jsx';
import PostDetailViewController from '../post_detail/PostDetailViewController.jsx';
import PostEditor from '../post_editor';
import DebugPageView from '../debug_page';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { getUser, getRepos } from '../../helpers';


const MainPage = (props) => {
    return (
        <div className='mainPage'>
            <Router>
                <Page>
                    <Switch>
                        <Route 
                            key='post-detail-edit'
                            path="/post_detail/:postId/edit"
                            render={props=> (
                                <PostEditor 
                                    postId={props.match.params.postId}
                                    isEditing={true}
                                />
                            )}
                        />
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
                        <Route path="/new_post">
                            <PostEditor />
                        </Route>
                        <Route path="/debug_page">
                            <DebugPageView />
                        </Route>
                        <Route
                            key='main-route'
                            path="/"
                            render={props => (
                                <Redirect to='/post_detail/DmQic5TJStiuMUzxLvOa' />
                            )}
                        />
                    </Switch>
                </Page>
            </Router>
        </div>
    );
}
export default MainPage;
