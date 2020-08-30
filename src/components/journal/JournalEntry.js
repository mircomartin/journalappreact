import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { activeNote } from '../../actions/notes';

export const JournalEntry = ({ id, title, date, body, url }) => {
	const dispatch = useDispatch();
	const noteDate = moment(date);

	const handleSelectEntry = () => {
		dispatch(activeNote({ id, title, date, body, url }))
	}

	return (
		<div className="journal__entry pointer"
		onClick={handleSelectEntry}>
			{
				url && (<div
					className="journal__entry-picture"
					style={{
						backgroundSize: 'cover',
						backgroundImage:
							`url(${url})`,
					}}
				></div>)
			}
			
			<div className="journal__entry-body">
				<p className="journal__entry-title">{title}</p>
				<p className="journal__entry-content">{body}</p>
			</div>

			<div className="journal__entry-date-box">
				<span>{noteDate.format('dddd')}</span>
				<h4>{noteDate.format('Do')}</h4>
			</div>
		</div>
	);
};
