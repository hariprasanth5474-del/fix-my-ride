import { useMemo, useState } from 'react';
import '../styles/Dashboard.css';

const feedbackEntries = [
  { id: 1, customer: 'Ravi Kumar', service: 'General Service', date: '06 Sep 2026', rating: 5, message: 'Excellent service. My bike feels smooth again!', replied: true },
  { id: 2, customer: 'Meena R', service: 'Oil Change', date: '07 Sep 2026', rating: 4, message: 'Quick service and friendly staff. Thank you.', replied: false },
  { id: 3, customer: 'Arjun S', service: 'Brake Service', date: '07 Sep 2026', rating: 5, message: 'The technician explained everything clearly.', replied: true },
  { id: 4, customer: 'Divya P', service: 'Engine Repair', date: '08 Sep 2026', rating: 3, message: 'The repair was good, but the wait time was longer than expected.', replied: false },
];

function Feedback() {
  const [feedback, setFeedback] = useState(feedbackEntries);
  const [search, setSearch] = useState('');

  const displayedFeedback = useMemo(() => {
    const query = search.toLowerCase().trim();
    return feedback.filter((entry) => `${entry.customer} ${entry.service} ${entry.message}`.toLowerCase().includes(query));
  }, [feedback, search]);

  const averageRating = (feedback.reduce((total, entry) => total + entry.rating, 0) / feedback.length).toFixed(1);
  const replyToFeedback = (id) => setFeedback((entries) => entries.map((entry) => (
    entry.id === id ? { ...entry, replied: true } : entry
  )));

  return (
    <div className="feedback-page">
      <div className="feedback-heading">
        <div>
          <p className="page-kicker">BIKE SERVICE CENTER</p>
          <h1>Customer Feedback</h1>
          <p className="page-description">Review customer experiences and respond to their feedback.</p>
        </div>
      </div>

      <section className="feedback-summary" aria-label="Feedback summary">
        <article><span>Average Rating</span><strong>{averageRating} <small>★</small></strong></article>
        <article><span>Total Reviews</span><strong>{feedback.length}</strong></article>
        <article><span>5-Star Reviews</span><strong>{feedback.filter((entry) => entry.rating === 5).length}</strong></article>
        <article><span>Awaiting Reply</span><strong>{feedback.filter((entry) => !entry.replied).length}</strong></article>
      </section>

      <section className="feedback-list">
        <div className="feedback-list-header">
          <h2>Recent Feedback</h2>
          <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search customer or service" aria-label="Search feedback" />
        </div>
        <div className="feedback-items">
          {displayedFeedback.map((entry) => (
            <article className="feedback-card" key={entry.id}>
              <div className="feedback-card-header">
                <div>
                  <h3>{entry.customer}</h3>
                  <p>{entry.service} · {entry.date}</p>
                </div>
                <span className="feedback-rating" aria-label={`${entry.rating} out of 5 stars`}>{'★'.repeat(entry.rating)}{'☆'.repeat(5 - entry.rating)}</span>
              </div>
              <p className="feedback-message">“{entry.message}”</p>
              <div className="feedback-card-footer">
                <span className={entry.replied ? 'reply-status replied' : 'reply-status'}>{entry.replied ? 'Replied' : 'Needs reply'}</span>
                {!entry.replied && <button className="reply-button" type="button" onClick={() => replyToFeedback(entry.id)}>Mark as Replied</button>}
              </div>
            </article>
          ))}
          {displayedFeedback.length === 0 && <p className="no-feedback">No feedback matches your search.</p>}
        </div>
      </section>
    </div>
  );
}

export default Feedback;
