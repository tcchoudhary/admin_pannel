import { useNavigate } from 'react-router-dom';
import './style.css'
import CloseIcon from '@mui/icons-material/Close';

const Profile = () => {
    const navigate = useNavigate()
    const design = (
        <div >
            <div class="container">
                <div class="header-container">
                    <CloseIcon className='exit' onClick={() => navigate('/')} />
                    <img src="https://s17.postimg.cc/ypm5ye95r/image.jpg" alt="" class="header-image" />
                    <div class="header">
                        <h1 class="main-heading">Tc Choudhary</h1>
                        <span class="tag">Developer</span>
                        <span class="tag">Designer</span>
                        <div class="stats">
                            <span class="stat-module">
                                Project <span class="stat-number">56</span>
                            </span>
                            <span class="stat-module">
                                Award <span class="stat-number">29</span>
                            </span>

                        </div>
                    </div>
                </div>

                <div class="overlay-header"></div>

                <div class="body">
                    <img src="https://s17.postimg.cc/xcbukrwdr/Hugh_Jackman_f.jpg" alt="Hugh Jackman" class="body-image" />
                    <div class="body-action-button u-flex-center">
                        <svg fill="#ffffff" height="28" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                    </div>
                    <span class="body-stats">Followers <span>3.5k</span></span>
                    <span class="body-stats">Following <span>1.9k</span></span>
                    <div class="u-clearfix"></div>
                    <div class="body-info">
                        <p>
                            Hugh Michael Jackman is an Australian actor, singer and producer. Jackman has won international recognition for his roles in variety of film genres.
                        </p>
                        <p>
                            In Broadway theatre, Jackman won a Tony Award for his role in The Boy from Oz. A four-time host of the Tony Awards themselves, he won an Emmy Award for one of these appearances. Jackman also hosted the 81st Academy Awards on 22 February 2009.
                        </p>
                    </div>
                    <div class="body-more">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

            </div>
        </div>
    );
    return design;
};

export default Profile;