import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Trans, withTranslation } from 'react-i18next';

const Home = ({ t, ...rest}) => {
	const nextUsername = useRef("");
	const [username, setUsername] = useState("default user");

	const updateUsername = (evt) => {
		setUsername(nextUsername.current.value);
	};

	return (
		<div className='body'>
			<p>{t('welcome', { username: username })}</p>
				<div>
					<label>{t('change-username')}</label>
					<input type='text' ref={nextUsername} />
					<button onClick={updateUsername}>{t('submit')}</button>
				</div>
			<p>
				<Trans i18nKey='go-to-page2'>
					<Link to='/page2'></Link>
					{{username}}
				</Trans>
			</p>
		</div>
	);
};

export default withTranslation()(Home);
