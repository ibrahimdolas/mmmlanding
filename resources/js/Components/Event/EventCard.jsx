import React from 'react';
import moment from "moment-timezone";

const EventCard = ({event}) => {
	return (
		<div className="vs-event wow" data-animate="fadeInUp" data-wow-delay={event.delay}>
			<div className="vs-event__figure">
				<img className="vs-event__figure--img" src={event.image} alt="event"/>
				<div className="vs-event__figure--date">
          <span className="vs-event__figure--day">
            {moment(event.date).format('DD')}
            <span className="vs-event__figure--month">
	            {moment(event.date).format('MMM')}
						</span>
          </span>
					<span className="vs-event__figure--year">{moment(event.date).format('YYYY')}</span>
				</div>
			</div>
			<div className="vs-event__content">
				<h2 className="vs-event__title"><a href={event.download}>{event.title}</a></h2>
				<div className="vs-time__features">
					<ul>
						<li><span><i className={`fa-regular fa-file-${event.documentIcon}`}/>{event.documentType}</span></li>
					</ul>
				</div>
				<p className="vs-event__text">{event.description}</p>
				<div className="vs-event__footer">
					<div className="vs-event__btn">
						<a href={event.download} className="vs-btn"><span className="vs-btn__border"/>download</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
