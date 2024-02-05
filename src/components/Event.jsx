function Event({event}) {
    return (
        <div className="event">
          <img src={event.bannerimg} alt="Banner image" />
          <h1>{event.eventname}</h1>
          <p>{event.textcontent}</p>
        </div>
      );
}

export default Event